import { observable } from '@trpc/server/observable';
import { t as transformResult } from '../transformResult-ace864b8.mjs';
import { T as TRPCClientError } from '../TRPCClientError-38f9a32a.mjs';
import { r as resolveHTTPLinkOptions, j as jsonHttpRequester } from '../httpUtils-b9d0cb48.mjs';
import '@trpc/server/shared';

function httpLinkFactory(factoryOpts) {
    return (opts)=>{
        const resolvedOpts = resolveHTTPLinkOptions(opts);
        return (runtime)=>({ op  })=>observable((observer)=>{
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
                        const transformed = transformResult(res.json, runtime);
                        if (!transformed.ok) {
                            observer.error(TRPCClientError.from(transformed.error, {
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
                        observer.error(TRPCClientError.from(cause, {
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
    requester: jsonHttpRequester
});

export { httpLink, httpLinkFactory };
