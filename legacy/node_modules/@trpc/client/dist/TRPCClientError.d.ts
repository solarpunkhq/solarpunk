import type { AnyProcedure, AnyRouter, DefaultErrorShape, inferRouterError, Maybe } from '@trpc/server';
import type { TRPCErrorResponse, TRPCErrorShape } from '@trpc/server/rpc';
type ErrorInferrable = AnyProcedure | AnyRouter | TRPCErrorShape<number>;
type inferErrorShape<TInferrable extends ErrorInferrable> = TInferrable extends AnyRouter ? inferRouterError<TInferrable> : TInferrable extends AnyProcedure ? TInferrable['_def']['_config']['$types']['errorShape'] : TInferrable;
export interface TRPCClientErrorBase<TShape extends DefaultErrorShape> {
    readonly message: string;
    readonly shape: Maybe<TShape>;
    readonly data: Maybe<TShape['data']>;
}
export type TRPCClientErrorLike<TRouterOrProcedure extends ErrorInferrable> = TRPCClientErrorBase<inferErrorShape<TRouterOrProcedure>>;
export declare class TRPCClientError<TRouterOrProcedure extends ErrorInferrable> extends Error implements TRPCClientErrorBase<inferErrorShape<TRouterOrProcedure>> {
    readonly cause: Error | undefined;
    readonly shape: Maybe<inferErrorShape<TRouterOrProcedure>>;
    readonly data: Maybe<inferErrorShape<TRouterOrProcedure>['data']>;
    /**
     * Additional meta data about the error
     * In the case of HTTP-errors, we'll have `response` and potentially `responseJSON` here
     */
    meta: Record<string, unknown> | undefined;
    constructor(message: string, opts?: {
        result?: Maybe<TRPCErrorResponse<inferErrorShape<TRouterOrProcedure>>>;
        cause?: Error;
        meta?: Record<string, unknown>;
    });
    static from<TRouterOrProcedure extends ErrorInferrable>(_cause: Error | TRPCErrorResponse<any>, opts?: {
        meta?: Record<string, unknown>;
    }): TRPCClientError<TRouterOrProcedure>;
}
export {};
//# sourceMappingURL=TRPCClientError.d.ts.map