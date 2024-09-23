'use strict';

var config = require('./config-194bdd43.js');
var TRPCError = require('./TRPCError-ca37bf1a.js');
var transformTRPCResponse = require('./transformTRPCResponse-e65f34e9.js');
var contentType = require('./contentType-1de645c8.js');
var index = require('./index-784ff647.js');

const HTTP_METHOD_PROCEDURE_TYPE_MAP = {
    GET: 'query',
    POST: 'mutation'
};
const fallbackContentTypeHandler = {
    getInputs: contentType.getJsonContentTypeInputs
};
function initResponse(initOpts) {
    const { ctx , paths , type , responseMeta , untransformedJSON , errors =[] ,  } = initOpts;
    let status = untransformedJSON ? index.getHTTPStatusCode(untransformedJSON) : 200;
    const headers = {
        'Content-Type': 'application/json'
    };
    const eagerGeneration = !untransformedJSON;
    const data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [
        untransformedJSON
    ];
    const meta = responseMeta?.({
        ctx,
        paths,
        type,
        data,
        errors,
        eagerGeneration
    }) ?? {};
    for (const [key, value] of Object.entries(meta.headers ?? {})){
        headers[key] = value;
    }
    if (meta.status) {
        status = meta.status;
    }
    return {
        status,
        headers
    };
}
async function inputToProcedureCall(procedureOpts) {
    const { opts , ctx , type , input , path  } = procedureOpts;
    try {
        const data = await config.callProcedure({
            procedures: opts.router._def.procedures,
            path,
            rawInput: input,
            ctx,
            type
        });
        return {
            result: {
                data
            }
        };
    } catch (cause) {
        const error = TRPCError.getTRPCErrorFromUnknown(cause);
        opts.onError?.({
            error,
            path,
            input,
            ctx,
            type: type,
            req: opts.req
        });
        return {
            error: transformTRPCResponse.getErrorShape({
                config: opts.router._def._config,
                error,
                type,
                path,
                input,
                ctx
            })
        };
    }
}
function caughtErrorToData(cause, errorOpts) {
    const { router , req , onError  } = errorOpts.opts;
    const error = TRPCError.getTRPCErrorFromUnknown(cause);
    onError?.({
        error,
        path: errorOpts.path,
        input: errorOpts.input,
        ctx: errorOpts.ctx,
        type: errorOpts.type,
        req
    });
    const untransformedJSON = {
        error: transformTRPCResponse.getErrorShape({
            config: router._def._config,
            error,
            type: errorOpts.type,
            path: errorOpts.path,
            input: errorOpts.input,
            ctx: errorOpts.ctx
        })
    };
    const transformedJSON = transformTRPCResponse.transformTRPCResponse(router._def._config, untransformedJSON);
    const body = JSON.stringify(transformedJSON);
    return {
        error,
        untransformedJSON,
        body
    };
}
// implementation
async function resolveHTTPResponse(opts) {
    const { router , req , unstable_onHead , unstable_onChunk  } = opts;
    if (req.method === 'HEAD') {
        // can be used for lambda warmup
        const headResponse = {
            status: 204
        };
        unstable_onHead?.(headResponse, false);
        unstable_onChunk?.([
            -1,
            ''
        ]);
        return headResponse;
    }
    const contentTypeHandler = opts.contentTypeHandler ?? fallbackContentTypeHandler;
    const batchingEnabled = opts.batching?.enabled ?? true;
    const type = HTTP_METHOD_PROCEDURE_TYPE_MAP[req.method] ?? 'unknown';
    let ctx = undefined;
    let paths;
    const isBatchCall = !!req.query.get('batch');
    const isStreamCall = isBatchCall && unstable_onHead && unstable_onChunk && req.headers['trpc-batch-mode'] === 'stream';
    try {
        // we create context first so that (unless `createContext()` throws)
        // error handler may access context information
        //
        // this way even if the client sends malformed input that might cause an exception:
        //  - `opts.error` has value,
        //  - batching is not enabled,
        //  - `type` is unknown,
        //  - `getInputs` throws because of malformed JSON,
        // context value is still available to the error handler
        ctx = await opts.createContext();
        if (opts.error) {
            throw opts.error;
        }
        if (isBatchCall && !batchingEnabled) {
            throw new Error(`Batching is not enabled on the server`);
        }
        /* istanbul ignore if -- @preserve */ if (type === 'subscription') {
            throw new TRPCError.TRPCError({
                message: 'Subscriptions should use wsLink',
                code: 'METHOD_NOT_SUPPORTED'
            });
        }
        if (type === 'unknown') {
            throw new TRPCError.TRPCError({
                message: `Unexpected request method ${req.method}`,
                code: 'METHOD_NOT_SUPPORTED'
            });
        }
        const inputs = await contentTypeHandler.getInputs({
            isBatchCall,
            req,
            router,
            preprocessedBody: opts.preprocessedBody ?? false
        });
        paths = isBatchCall ? decodeURIComponent(opts.path).split(',') : [
            opts.path
        ];
        const promises = paths.map((path, index)=>inputToProcedureCall({
                opts,
                ctx,
                type,
                input: inputs[index],
                path
            }));
        if (!isStreamCall) {
            /**
       * Non-streaming response:
       * - await all responses in parallel, blocking on the slowest one
       * - create headers with known response body
       * - return a complete HTTPResponse
       */ const untransformedJSON = await Promise.all(promises);
            const errors = untransformedJSON.flatMap((response)=>'error' in response ? [
                    response.error
                ] : []);
            const headResponse1 = initResponse({
                ctx,
                paths,
                type,
                responseMeta: opts.responseMeta,
                untransformedJSON,
                errors
            });
            unstable_onHead?.(headResponse1, false);
            // return body stuff
            const result = isBatchCall ? untransformedJSON : untransformedJSON[0]; // eslint-disable-line @typescript-eslint/no-non-null-assertion -- `untransformedJSON` should be the length of `paths` which should be at least 1 otherwise there wouldn't be a request at all
            const transformedJSON = transformTRPCResponse.transformTRPCResponse(router._def._config, result);
            const body = JSON.stringify(transformedJSON);
            unstable_onChunk?.([
                -1,
                body
            ]);
            return {
                status: headResponse1.status,
                headers: headResponse1.headers,
                body
            };
        }
        /**
     * Streaming response:
     * - block on none, call `onChunk` as soon as each response is ready
     * - create headers with minimal data (cannot know the response body in advance)
     * - return void
     */ const headResponse2 = initResponse({
            ctx,
            paths,
            type,
            responseMeta: opts.responseMeta
        });
        unstable_onHead(headResponse2, true);
        const indexedPromises = new Map(promises.map((promise, index)=>[
                index,
                promise.then((r)=>[
                        index,
                        r
                    ])
            ]));
        for (const _ of paths){
            const [index, untransformedJSON1] = await Promise.race(indexedPromises.values());
            indexedPromises.delete(index);
            try {
                const transformedJSON1 = transformTRPCResponse.transformTRPCResponse(router._def._config, untransformedJSON1);
                const body1 = JSON.stringify(transformedJSON1);
                unstable_onChunk([
                    index,
                    body1
                ]);
            } catch (cause) {
                const path = paths[index];
                const input = inputs[index];
                const { body: body2  } = caughtErrorToData(cause, {
                    opts,
                    ctx,
                    type,
                    path,
                    input
                });
                unstable_onChunk([
                    index,
                    body2
                ]);
            }
        }
        return;
    } catch (cause1) {
        // we get here if
        // - batching is called when it's not enabled
        // - `createContext()` throws
        // - `router._def._config.transformer.output.serialize()` throws
        // - post body is too large
        // - input deserialization fails
        // - `errorFormatter` return value is malformed
        const { error , untransformedJSON: untransformedJSON2 , body: body3  } = caughtErrorToData(cause1, {
            opts,
            ctx,
            type
        });
        const headResponse3 = initResponse({
            ctx,
            paths,
            type,
            responseMeta: opts.responseMeta,
            untransformedJSON: untransformedJSON2,
            errors: [
                error
            ]
        });
        unstable_onHead?.(headResponse3, false);
        unstable_onChunk?.([
            -1,
            body3
        ]);
        return {
            status: headResponse3.status,
            headers: headResponse3.headers,
            body: body3
        };
    }
}

exports.resolveHTTPResponse = resolveHTTPResponse;
