'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../index-784ff647.js');
var resolveHTTPResponse = require('../../resolveHTTPResponse-b7a8a1c9.js');
var batchStreamFormatter = require('../../batchStreamFormatter-93cdcdd4.js');
var toURL = require('../../toURL-b64256fe.js');
require('../../codes-87f6824b.js');
require('../../config-194bdd43.js');
require('../../TRPCError-ca37bf1a.js');
require('../../getCauseFromUnknown-d535264a.js');
require('../../transformTRPCResponse-e65f34e9.js');
require('../../contentType-1de645c8.js');

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
    const url = toURL.toURL(opts.req.url);
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
            formatter = batchStreamFormatter.getBatchStreamFormatter();
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
    resolveHTTPResponse.resolveHTTPResponse({
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

exports.fetchRequestHandler = fetchRequestHandler;
