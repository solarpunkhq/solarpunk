'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var observable = require('@trpc/server/observable');
var transformResult = require('../transformResult-dfce8f15.js');
var TRPCClientError = require('../TRPCClientError-7e0c31e7.js');
var httpUtils = require('../httpUtils-4429f36e.js');
require('@trpc/server/shared');

function httpLinkFactory(factoryOpts) {
    return (opts)=>{
        const resolvedOpts = httpUtils.resolveHTTPLinkOptions(opts);
        return (runtime)=>({ op  })=>observable.observable((observer)=>{
                    const { path , input , type  } = op;
                    const { promise , cancel  } = factoryOpts.requester({
                        ...resolvedOpts,
                        runtime,
                        type,
                        path,
                        input,
                        headers () {
                            if (!opts.headers) {
                                return {};
                            }
                            if (typeof opts.headers === 'function') {
                                return opts.headers({
                                    op
                                });
                            }
                            return opts.headers;
                        }
                    });
                    let meta = undefined;
                    promise.then((res)=>{
                        meta = res.meta;
                        const transformed = transformResult.transformResult(res.json, runtime);
                        if (!transformed.ok) {
                            observer.error(TRPCClientError.TRPCClientError.from(transformed.error, {
                                meta
                            }));
                            return;
                        }
                        observer.next({
                            context: res.meta,
                            result: transformed.result
                        });
                        observer.complete();
                    }).catch((cause)=>{
                        observer.error(TRPCClientError.TRPCClientError.from(cause, {
                            meta
                        }));
                    });
                    return ()=>{
                        cancel();
                    };
                });
    };
}
/**
 * @see https://trpc.io/docs/client/links/httpLink
 */ const httpLink = httpLinkFactory({
    requester: httpUtils.jsonHttpRequester
});

exports.httpLink = httpLink;
exports.httpLinkFactory = httpLinkFactory;
