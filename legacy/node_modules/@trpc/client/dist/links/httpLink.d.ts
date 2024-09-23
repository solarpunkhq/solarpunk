import type { AnyRouter } from '@trpc/server';
import type { HTTPLinkBaseOptions, Requester } from './internals/httpUtils';
import type { HTTPHeaders, Operation, TRPCLink } from './types';
export interface HTTPLinkOptions extends HTTPLinkBaseOptions {
    /**
     * Headers to be set on outgoing requests or a callback that of said headers
     * @link http://trpc.io/docs/client/headers
     */
    headers?: HTTPHeaders | ((opts: {
        op: Operation;
    }) => HTTPHeaders | Promise<HTTPHeaders>);
}
export declare function httpLinkFactory(factoryOpts: {
    requester: Requester;
}): <TRouter extends AnyRouter>(opts: HTTPLinkOptions) => TRPCLink<TRouter>;
/**
 * @see https://trpc.io/docs/client/links/httpLink
 */
export declare const httpLink: <TRouter extends AnyRouter>(opts: HTTPLinkOptions) => TRPCLink<TRouter>;
//# sourceMappingURL=httpLink.d.ts.map