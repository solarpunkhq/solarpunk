import { Readable } from 'node:stream';
import '../../index-f91d720c.mjs';
import { r as resolveHTTPResponse } from '../../resolveHTTPResponse-2fc435bb.mjs';
import { g as getBatchStreamFormatter } from '../../batchStreamFormatter-fc1ffb26.mjs';
import { applyWSSHandler } from '../ws.mjs';
import '../../codes-c924c3db.mjs';
import '../../config-d5fdbd39.mjs';
import '../../TRPCError-98d44758.mjs';
import '../../getCauseFromUnknown-2d66414a.mjs';
import '../../transformTRPCResponse-1153b421.mjs';
import '../../contentType-9fd995d3.mjs';
import '../../observable-ade1bad8.mjs';
import '../../parseTRPCMessage-a0f17853.mjs';

async function fastifyRequestHandler(opts) {
    const createContext = async function _createContext() {
        return opts.createContext?.(opts);
    };
    const query = opts.req.query ? new URLSearchParams(opts.req.query) : new URLSearchParams(opts.req.url.split('?')[1]);
    const req = {
        query,
        method: opts.req.method,
        headers: opts.req.headers,
        body: opts.req.body ?? 'null'
    };
    let resolve;
    const promise = new Promise((r)=>resolve = r);
    let isStream = false;
    let stream;
    let formatter;
    const unstable_onHead = (head, isStreaming)=>{
        if (!opts.res.statusCode || opts.res.statusCode === 200) {
            opts.res.statusCode = head.status;
        }
        for (const [key, value] of Object.entries(head.headers ?? {})){
            /* istanbul ignore if -- @preserve */ if (typeof value === 'undefined') {
                continue;
            }
            void opts.res.header(key, value);
        }
        if (isStreaming) {
            void opts.res.header('Transfer-Encoding', 'chunked');
            void opts.res.header('Vary', opts.res.hasHeader('Vary') ? 'trpc-batch-mode, ' + opts.res.getHeader('Vary') : 'trpc-batch-mode');
            stream = new Readable();
            stream._read = ()=>{}; // eslint-disable-line @typescript-eslint/no-empty-function -- https://github.com/fastify/fastify/issues/805#issuecomment-369172154
            resolve(opts.res.send(stream));
            isStream = true;
            formatter = getBatchStreamFormatter();
        }
    };
    const unstable_onChunk = ([index, string])=>{
        if (index === -1) {
            // full response, no streaming
            resolve(opts.res.send(string));
        } else {
            stream.push(formatter(index, string));
        }
    };
    resolveHTTPResponse({
        req,
        createContext,
        path: opts.path,
        router: opts.router,
        batching: opts.batching,
        responseMeta: opts.responseMeta,
        onError (o) {
            opts?.onError?.({
                ...o,
                req: opts.req
            });
        },
        unstable_onHead,
        unstable_onChunk
    }).then(()=>{
        if (isStream) {
            stream.push(formatter.end());
            stream.push(null); // https://github.com/fastify/fastify/issues/805#issuecomment-369172154
        }
    }).catch(()=>{
        if (isStream) {
            stream.push(null);
        }
    });
    return promise;
}

/// <reference types="@fastify/websocket" />
function fastifyTRPCPlugin(fastify, opts, done) {
    fastify.removeContentTypeParser('application/json');
    fastify.addContentTypeParser('application/json', {
        parseAs: 'string'
    }, function(_, body, _done) {
        _done(null, body);
    });
    let prefix = opts.prefix ?? '';
    // https://github.com/fastify/fastify-plugin/blob/fe079bef6557a83794bf437e14b9b9edb8a74104/plugin.js#L11
    // @ts-expect-error property 'default' does not exists on type ...
    if (typeof fastifyTRPCPlugin.default !== 'function') {
        prefix = ''; // handled by fastify internally
    }
    fastify.all(`${prefix}/:path`, async (req, res)=>{
        const path = req.params.path;
        await fastifyRequestHandler({
            ...opts.trpcOptions,
            req,
            res,
            path
        });
    });
    if (opts.useWSS) {
        applyWSSHandler({
            ...opts.trpcOptions,
            wss: fastify.websocketServer
        });
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        fastify.get(prefix ?? '/', {
            websocket: true
        }, ()=>{});
    }
    done();
}

export { fastifyRequestHandler, fastifyTRPCPlugin };
