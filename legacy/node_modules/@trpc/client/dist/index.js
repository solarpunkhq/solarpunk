'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var observable = require('@trpc/server/observable');
var links_splitLink = require('./splitLink-f29e84be.js');
var TRPCClientError = require('./TRPCClientError-7e0c31e7.js');
var shared = require('@trpc/server/shared');
var httpUtils = require('./httpUtils-4429f36e.js');
var links_httpBatchLink = require('./httpBatchLink-6b5ba638.js');
var links_httpLink = require('./links/httpLink.js');
var links_loggerLink = require('./links/loggerLink.js');
var links_wsLink = require('./links/wsLink.js');
require('./transformResult-dfce8f15.js');

class TRPCUntypedClient {
    $request({ type , input , path , context ={}  }) {
        const chain$ = links_splitLink.createChain({
            links: this.links,
            op: {
                id: ++this.requestId,
                type,
                path,
                input,
                context
            }
        });
        return chain$.pipe(observable.share());
    }
    requestAsPromise(opts) {
        const req$ = this.$request(opts);
        const { promise , abort  } = observable.observableToPromise(req$);
        const abortablePromise = new Promise((resolve, reject)=>{
            opts.signal?.addEventListener('abort', abort);
            promise.then((envelope)=>{
                resolve(envelope.result.data);
            }).catch((err)=>{
                reject(TRPCClientError.TRPCClientError.from(err));
            });
        });
        return abortablePromise;
    }
    query(path, input, opts) {
        return this.requestAsPromise({
            type: 'query',
            path,
            input,
            context: opts?.context,
            signal: opts?.signal
        });
    }
    mutation(path, input, opts) {
        return this.requestAsPromise({
            type: 'mutation',
            path,
            input,
            context: opts?.context,
            signal: opts?.signal
        });
    }
    subscription(path, input, opts) {
        const observable$ = this.$request({
            type: 'subscription',
            path,
            input,
            context: opts?.context
        });
        return observable$.subscribe({
            next (envelope) {
                if (envelope.result.type === 'started') {
                    opts.onStarted?.();
                } else if (envelope.result.type === 'stopped') {
                    opts.onStopped?.();
                } else {
                    opts.onData?.(envelope.result.data);
                }
            },
            error (err) {
                opts.onError?.(err);
            },
            complete () {
                opts.onComplete?.();
            }
        });
    }
    constructor(opts){
        this.requestId = 0;
        const combinedTransformer = (()=>{
            const transformer = opts.transformer;
            if (!transformer) {
                return {
                    input: {
                        serialize: (data)=>data,
                        deserialize: (data)=>data
                    },
                    output: {
                        serialize: (data)=>data,
                        deserialize: (data)=>data
                    }
                };
            }
            if ('input' in transformer) {
                return opts.transformer;
            }
            return {
                input: transformer,
                output: transformer
            };
        })();
        this.runtime = {
            transformer: {
                serialize: (data)=>combinedTransformer.input.serialize(data),
                deserialize: (data)=>combinedTransformer.output.deserialize(data)
            },
            combinedTransformer
        };
        // Initialize the links
        this.links = opts.links.map((link)=>link(this.runtime));
    }
}

function createTRPCUntypedClient(opts) {
    return new TRPCUntypedClient(opts);
}

/**
 * @deprecated use `createTRPCProxyClient` instead
 */ function createTRPCClient(opts) {
    const client = new TRPCUntypedClient(opts);
    return client;
}

const clientCallTypeMap = {
    query: 'query',
    mutate: 'mutation',
    subscribe: 'subscription'
};
/** @internal */ const clientCallTypeToProcedureType = (clientCallType)=>{
    return clientCallTypeMap[clientCallType];
};
/**
 * @deprecated use `createTRPCProxyClient` instead
 * @internal
 */ function createTRPCClientProxy(client) {
    return shared.createFlatProxy((key)=>{
        if (client.hasOwnProperty(key)) {
            return client[key];
        }
        if (key === '__untypedClient') {
            return client;
        }
        return shared.createRecursiveProxy(({ path , args  })=>{
            const pathCopy = [
                key,
                ...path
            ];
            const procedureType = clientCallTypeToProcedureType(pathCopy.pop());
            const fullPath = pathCopy.join('.');
            return client[procedureType](fullPath, ...args);
        });
    });
}
function createTRPCProxyClient(opts) {
    const client = new TRPCUntypedClient(opts);
    const proxy = createTRPCClientProxy(client);
    return proxy;
}
/**
 * Get an untyped client from a proxy client
 * @internal
 */ function getUntypedClient(client) {
    return client.__untypedClient;
}

function getTextDecoder(customTextDecoder) {
    if (customTextDecoder) {
        return customTextDecoder;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (typeof window !== 'undefined' && window.TextDecoder) {
        return new window.TextDecoder();
    }
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (typeof globalThis !== 'undefined' && globalThis.TextDecoder) {
        return new globalThis.TextDecoder();
    }
    throw new Error('No TextDecoder implementation found');
}

// Stream parsing adapted from https://www.loginradius.com/blog/engineering/guest-post/http-streaming-with-nodejs-and-fetch-api/
/**
 * @internal
 * @description Take a stream of bytes and call `onLine` with
 * a JSON object for each line in the stream. Expected stream
 * format is:
 * ```json
 * {"1": {...}
 * ,"0": {...}
 * }
 * ```
 */ async function parseJSONStream(opts) {
    const parse = opts.parse ?? JSON.parse;
    const onLine = (line)=>{
        if (opts.signal?.aborted) return;
        if (!line || line === '}') {
            return;
        }
        /**
     * At this point, `line` can be one of two things:
     * - The first line of the stream `{"2":{...}`
     * - A line in the middle of the stream `,"2":{...}`
     */ const indexOfColon = line.indexOf(':');
        const indexAsStr = line.substring(2, indexOfColon - 1);
        const text = line.substring(indexOfColon + 1);
        opts.onSingle(Number(indexAsStr), parse(text));
    };
    await readLines(opts.readableStream, onLine, opts.textDecoder);
}
/**
 * Handle transforming a stream of bytes into lines of text.
 * To avoid using AsyncIterators / AsyncGenerators,
 * we use a callback for each line.
 *
 * @param readableStream can be a NodeJS stream or a WebAPI stream
 * @param onLine will be called for every line ('\n' delimited) in the stream
 */ async function readLines(readableStream, onLine, textDecoder) {
    let partOfLine = '';
    const onChunk = (chunk)=>{
        const chunkText = textDecoder.decode(chunk);
        const chunkLines = chunkText.split('\n');
        if (chunkLines.length === 1) {
            partOfLine += chunkLines[0];
        } else if (chunkLines.length > 1) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- length checked on line above
            onLine(partOfLine + chunkLines[0]);
            for(let i = 1; i < chunkLines.length - 1; i++){
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- length checked on line above
                onLine(chunkLines[i]);
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- length doesn't change, so is necessarily > 1
            partOfLine = chunkLines[chunkLines.length - 1];
        }
    };
    // we handle 2 different types of streams, this if where we figure out which one we have
    if ('getReader' in readableStream) {
        await readStandardChunks(readableStream, onChunk);
    } else {
        await readNodeChunks(readableStream, onChunk);
    }
    onLine(partOfLine);
}
/**
 * Handle NodeJS stream
 */ function readNodeChunks(stream, onChunk) {
    return new Promise((resolve)=>{
        stream.on('data', onChunk);
        stream.on('end', resolve);
    });
}
/**
 * Handle WebAPI stream
 */ async function readStandardChunks(stream, onChunk) {
    const reader = stream.getReader();
    let readResult = await reader.read();
    while(!readResult.done){
        onChunk(readResult.value);
        readResult = await reader.read();
    }
}
const streamingJsonHttpRequester = (opts, onSingle)=>{
    const ac = opts.AbortController ? new opts.AbortController() : null;
    const responsePromise = httpUtils.fetchHTTPResponse({
        ...opts,
        contentTypeHeader: 'application/json',
        batchModeHeader: 'stream',
        getUrl: httpUtils.getUrl,
        getBody: httpUtils.getBody
    }, ac);
    const cancel = ()=>ac?.abort();
    const promise = responsePromise.then(async (res)=>{
        if (!res.body) throw new Error('Received response without body');
        const meta = {
            response: res
        };
        return parseJSONStream({
            readableStream: res.body,
            onSingle,
            parse: (string)=>({
                    json: JSON.parse(string),
                    meta
                }),
            signal: ac?.signal,
            textDecoder: opts.textDecoder
        });
    });
    return {
        cancel,
        promise
    };
};

const streamRequester = (requesterOpts)=>{
    const textDecoder = getTextDecoder(requesterOpts.opts.textDecoder);
    return (batchOps, unitResolver)=>{
        const path = batchOps.map((op)=>op.path).join(',');
        const inputs = batchOps.map((op)=>op.input);
        const { cancel , promise  } = streamingJsonHttpRequester({
            ...requesterOpts,
            textDecoder,
            path,
            inputs,
            headers () {
                if (!requesterOpts.opts.headers) {
                    return {};
                }
                if (typeof requesterOpts.opts.headers === 'function') {
                    return requesterOpts.opts.headers({
                        opList: batchOps
                    });
                }
                return requesterOpts.opts.headers;
            }
        }, (index, res)=>{
            unitResolver(index, res);
        });
        return {
            /**
       * return an empty array because the batchLoader expects an array of results
       * but we've already called the `unitResolver` for each of them, there's
       * nothing left to do here.
       */ promise: promise.then(()=>[]),
            cancel
        };
    };
};
const unstable_httpBatchStreamLink = links_httpBatchLink.createHTTPBatchLink(streamRequester);

const getBody = (opts)=>{
    if (!('input' in opts)) {
        return undefined;
    }
    if (!(opts.input instanceof FormData)) {
        throw new Error('Input is not FormData');
    }
    return opts.input;
};
const formDataRequester = (opts)=>{
    if (opts.type !== 'mutation') {
        // TODO(?) handle formdata queries
        throw new Error('We only handle mutations with formdata');
    }
    return httpUtils.httpRequest({
        ...opts,
        getUrl () {
            return `${opts.url}/${opts.path}`;
        },
        getBody
    });
};
const experimental_formDataLink = links_httpLink.httpLinkFactory({
    requester: formDataRequester
});

exports.splitLink = links_splitLink.splitLink;
exports.TRPCClientError = TRPCClientError.TRPCClientError;
exports.getFetch = httpUtils.getFetch;
exports.httpBatchLink = links_httpBatchLink.httpBatchLink;
exports.httpLink = links_httpLink.httpLink;
exports.httpLinkFactory = links_httpLink.httpLinkFactory;
exports.loggerLink = links_loggerLink.loggerLink;
exports.createWSClient = links_wsLink.createWSClient;
exports.wsLink = links_wsLink.wsLink;
exports.TRPCUntypedClient = TRPCUntypedClient;
exports.clientCallTypeToProcedureType = clientCallTypeToProcedureType;
exports.createTRPCClient = createTRPCClient;
exports.createTRPCClientProxy = createTRPCClientProxy;
exports.createTRPCProxyClient = createTRPCProxyClient;
exports.createTRPCUntypedClient = createTRPCUntypedClient;
exports.experimental_formDataLink = experimental_formDataLink;
exports.getUntypedClient = getUntypedClient;
exports.unstable_httpBatchStreamLink = unstable_httpBatchStreamLink;
