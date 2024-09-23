import type { AnyRouter, inferRouterError } from '@trpc/server';
import type { TRPCResponse, TRPCResponseMessage } from '@trpc/server/rpc';
import type { TRPCClientRuntime } from '../links';
/** @internal */
declare function transformResultInner<TRouter extends AnyRouter, TOutput>(response: TRPCResponse<TOutput, inferRouterError<TRouter>> | TRPCResponseMessage<TOutput, inferRouterError<TRouter>>, runtime: TRPCClientRuntime): {
    readonly ok: false;
    readonly error: {
        readonly error: inferRouterError<TRouter>;
        readonly id?: import("@trpc/server/rpc").JSONRPC2.RequestId | undefined;
        readonly jsonrpc?: "2.0" | undefined;
    } | {
        readonly error: inferRouterError<TRouter>;
        readonly id: string | number | null;
        readonly jsonrpc?: "2.0" | undefined;
    };
    readonly result?: undefined;
} | {
    readonly ok: true;
    readonly result: {
        type: "started";
    } | {
        type: "stopped";
    } | (import("@trpc/server/rpc").TRPCResult<TOutput> & {
        type: "data";
    });
    readonly error?: undefined;
};
/**
 * Transforms and validates that the result is a valid TRPCResponse
 * @internal
 */
export declare function transformResult<TRouter extends AnyRouter, TOutput>(response: TRPCResponse<TOutput, inferRouterError<TRouter>> | TRPCResponseMessage<TOutput, inferRouterError<TRouter>>, runtime: TRPCClientRuntime): ReturnType<typeof transformResultInner>;
export {};
//# sourceMappingURL=transformResult.d.ts.map