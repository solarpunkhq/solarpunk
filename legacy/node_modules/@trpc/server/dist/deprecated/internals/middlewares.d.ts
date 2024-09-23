import type { TRPCError } from '../../error/TRPCError';
import type { ProcedureType } from '../router';
/**
 * @deprecated
 */
export declare const middlewareMarker: "middlewareMarker" & {
    __brand: 'middlewareMarker';
};
interface MiddlewareResultBase<TContext> {
    /**
     * All middlewares should pass through their `next()`'s output.
     * Requiring this marker makes sure that can't be forgotten at compile-time.
     */
    readonly marker: typeof middlewareMarker;
    ctx: TContext;
}
/**
 * @deprecated
 */
interface MiddlewareOKResult<TContext> extends MiddlewareResultBase<TContext> {
    ok: true;
    data: unknown;
}
/**
 * @deprecated
 */
interface MiddlewareErrorResult<TContext> extends MiddlewareResultBase<TContext> {
    ok: false;
    error: TRPCError;
}
/**
 * @deprecated
 */
export type MiddlewareResult<TContext> = MiddlewareErrorResult<TContext> | MiddlewareOKResult<TContext>;
/**
 * @deprecated
 */
export type MiddlewareFunction<TInputContext, TContext, TMeta> = (opts: {
    ctx: TInputContext;
    type: ProcedureType;
    path: string;
    rawInput: unknown;
    meta?: TMeta;
    next: {
        (): Promise<MiddlewareResult<TInputContext>>;
        <TNewContext>(opts: {
            ctx: TNewContext;
        }): Promise<MiddlewareResult<TNewContext>>;
    };
}) => Promise<MiddlewareResult<TContext>>;
export {};
//# sourceMappingURL=middlewares.d.ts.map