import '../../index-f91d720c.mjs';
import { r as resolveHTTPResponse } from '../../resolveHTTPResponse-2fc435bb.mjs';
import { g as getBatchStreamFormatter } from '../../batchStreamFormatter-fc1ffb26.mjs';
import { t as toURL } from '../../toURL-8f0ea228.mjs';
import '../../codes-c924c3db.mjs';
import '../../config-d5fdbd39.mjs';
import '../../TRPCError-98d44758.mjs';
import '../../getCauseFromUnknown-2d66414a.mjs';
import '../../transformTRPCResponse-1153b421.mjs';
import '../../contentType-9fd995d3.mjs';

const trimSlashes = (path)=>{
    path = path.startsWith('/') ? path.slice(1) : path;
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    return path;
};
async function fetchRequestHandler(opts) {
    const resHeaders = new Headers();
    const createContext = async ()=>{
        return opts.createContext?.({
            req: opts.req,
            resHeaders
        });
    };
    const url = toURL(opts.req.url);
    const pathname = trimSlashes(url.pathname);
    const endpoint = trimSlashes(opts.endpoint);
    const path = trimSlashes(pathname.slice(endpoint.length));
    const req = {
        query: url.searchParams,
        method: opts.req.method,
        headers: Object.fromEntries(opts.req.headers),
        body: opts.req.headers.get('content-type')?.startsWith('application/json') ? await opts.req.text() : ''
    };
    let resolve;
    const promise = new Promise((r)=>resolve = r);
    let status = 200;
    let isStream = false;
    let controller;
    let encoder;
    let formatter;
    const unstable_onHead = (head, isStreaming)=>{
        for (const [key, value] of Object.entries(head.headers ?? {})){
            /* istanbul ignore if -- @preserve */ if (typeof value === 'undefined') {
                continue;
            }
            if (typeof value === 'string') {
                resHeaders.set(key, value);
                continue;
            }
            for (const v of value){
                resHeaders.append(key, v);
            }
        }
        status = head.status;
        if (isStreaming) {
            resHeaders.set('Transfer-Encoding', 'chunked');
            resHeaders.append('Vary', 'trpc-batch-mode');
            const stream = new ReadableStream({
                start (c) {
                    controller = c;
                }
            });
            const response = new Response(stream, {
                status,
                headers: resHeaders
            });
            resolve(response);
            encoder = new TextEncoder();
            formatter = getBatchStreamFormatter();
            isStream = true;
        }
    };
    const unstable_onChunk = ([index, string])=>{
        if (index === -1) {
            // full response, no streaming
            const response = new Response(string || null, {
                status,
                headers: resHeaders
            });
            resolve(response);
        } else {
            controller.enqueue(encoder.encode(formatter(index, string)));
        }
    };
    resolveHTTPResponse({
        req,
        createContext,
        path,
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
            controller.enqueue(encoder.encode(formatter.end()));
            controller.close();
        }
    }).catch(()=>{
        if (isStream) {
            controller.close();
        }
    });
    return promise;
}

export { fetchRequestHandler };
