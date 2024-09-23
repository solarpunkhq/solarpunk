import type { DefaultErrorShape, ErrorFormatter, ErrorFormatterShape } from '../error/formatter';
import type { DataTransformerOptions, DefaultDataTransformer } from '../transformer';
import type { Unwrap } from '../types';
import type { CreateRootConfigTypes, RootConfig, RootConfigTypes, RuntimeConfig } from './internals/config';
import { mergeRouters } from './internals/mergeRouters';
import type { PickFirstDefined, ValidateShape } from './internals/utils';
type PartialRootConfigTypes = Partial<RootConfigTypes>;
type CreateRootConfigTypesFromPartial<TTypes extends PartialRootConfigTypes> = CreateRootConfigTypes<{
    ctx: TTypes['ctx'] extends RootConfigTypes['ctx'] ? TTypes['ctx'] : object;
    meta: TTypes['meta'] extends RootConfigTypes['meta'] ? TTypes['meta'] : object;
    errorShape: TTypes['errorShape'];
    transformer: DataTransformerOptions;
}>;
type ContextCallback = (...args: any[]) => object | Promise<object>;
/**
 * TODO: This can be improved:
 * - We should be able to chain `.meta()`/`.context()` only once
 * - Simplify typings
 * - Doesn't need to be a class but it doesn't really hurt either
 */
declare class TRPCBuilder<TParams extends PartialRootConfigTypes = object> {
    context<TNewContext extends object | ContextCallback>(): TRPCBuilder<TParams extends object ? { [K in "ctx" | keyof import("../types").WithoutIndexSignature<TParams>]: K extends "ctx" ? {
        ctx: TNewContext extends ContextCallback ? Unwrap<TNewContext> : TNewContext;
    }[K] : K extends keyof TParams ? TParams[K] : never; } : {
        ctx: TNewContext extends ContextCallback ? Unwrap<TNewContext> : TNewContext;
    }>;
    meta<TNewMeta extends RootConfigTypes['meta']>(): TRPCBuilder<TParams extends object ? { [K in "meta" | keyof import("../types").WithoutIndexSignature<TParams>]: K extends "meta" ? {
        meta: TNewMeta;
    }[K] : K extends keyof TParams ? TParams[K] : never; } : {
        meta: TNewMeta;
    }>;
    create<TOptions extends Partial<RuntimeConfig<CreateRootConfigTypesFromPartial<TParams>>>>(options?: ValidateShape<TOptions, Partial<RuntimeConfig<CreateRootConfigTypesFromPartial<TParams>>>> | undefined): {
        /**
         * These are just types, they can't be used
         * @internal
         */
        _config: RootConfig<{
            ctx: TParams["ctx"] extends object ? TParams["ctx"] : object;
            meta: TParams["meta"] extends object ? TParams["meta"] : object;
            errorShape: ErrorFormatterShape<PickFirstDefined<TOptions["errorFormatter"], ErrorFormatter<TParams["ctx"] extends object ? TParams["ctx"] : object, DefaultErrorShape>>>;
            transformer: TOptions["transformer"] extends DataTransformerOptions ? TOptions["transformer"] : DefaultDataTransformer;
        }>;
        /**
         * Builder object for creating procedures
         * @see https://trpc.io/docs/server/procedures
         */
        procedure: import("./internals/procedureBuilder").ProcedureBuilder<{
            _config: RootConfig<{
                ctx: TParams["ctx"] extends object ? TParams["ctx"] : object;
                meta: TParams["meta"] extends object ? TParams["meta"] : object;
                errorShape: ErrorFormatterShape<PickFirstDefined<TOptions["errorFormatter"], ErrorFormatter<TParams["ctx"] extends object ? TParams["ctx"] : object, DefaultErrorShape>>>;
                transformer: TOptions["transformer"] extends DataTransformerOptions ? TOptions["transformer"] : DefaultDataTransformer;
            }>;
            _ctx_out: TParams["ctx"] extends object ? TParams["ctx"] : object;
            _input_in: typeof import("./internals/utils").unsetMarker;
            _input_out: typeof import("./internals/utils").unsetMarker;
            _output_in: typeof import("./internals/utils").unsetMarker;
            _output_out: typeof import("./internals/utils").unsetMarker;
            _meta: TParams["meta"] extends object ? TParams["meta"] : object;
        }>;
        /**
         * Create reusable middlewares
         * @see https://trpc.io/docs/server/middlewares
         */
        middleware: <TNewParams extends import("./procedure").ProcedureParams<import("./internals/config").AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("./middleware").MiddlewareFunction<{
            _config: RootConfig<{
                ctx: TParams["ctx"] extends object ? TParams["ctx"] : object;
                meta: TParams["meta"] extends object ? TParams["meta"] : object;
                errorShape: ErrorFormatterShape<PickFirstDefined<TOptions["errorFormatter"], ErrorFormatter<TParams["ctx"] extends object ? TParams["ctx"] : object, DefaultErrorShape>>>;
                transformer: TOptions["transformer"] extends DataTransformerOptions ? TOptions["transformer"] : DefaultDataTransformer;
            }>;
            _ctx_out: {};
            _input_out: typeof import("./internals/utils").unsetMarker;
            _input_in: unknown;
            _output_in: unknown;
            _output_out: unknown;
            _meta: TParams["meta"] extends object ? TParams["meta"] : object;
        }, TNewParams>) => import("./middleware").MiddlewareBuilder<{
            _config: RootConfig<{
                ctx: TParams["ctx"] extends object ? TParams["ctx"] : object;
                meta: TParams["meta"] extends object ? TParams["meta"] : object;
                errorShape: ErrorFormatterShape<PickFirstDefined<TOptions["errorFormatter"], ErrorFormatter<TParams["ctx"] extends object ? TParams["ctx"] : object, DefaultErrorShape>>>;
                transformer: TOptions["transformer"] extends DataTransformerOptions ? TOptions["transformer"] : DefaultDataTransformer;
            }>;
            _ctx_out: {};
            _input_out: typeof import("./internals/utils").unsetMarker;
            _input_in: unknown;
            _output_in: unknown;
            _output_out: unknown;
            _meta: TParams["meta"] extends object ? TParams["meta"] : object;
        }, TNewParams>;
        /**
         * Create a router
         * @see https://trpc.io/docs/server/routers
         */
        router: <TProcRouterRecord extends import("./router").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("./router").CreateRouterInner<RootConfig<{
            ctx: TParams["ctx"] extends object ? TParams["ctx"] : object;
            meta: TParams["meta"] extends object ? TParams["meta"] : object;
            errorShape: ErrorFormatterShape<PickFirstDefined<TOptions["errorFormatter"], ErrorFormatter<TParams["ctx"] extends object ? TParams["ctx"] : object, DefaultErrorShape>>>;
            transformer: TOptions["transformer"] extends DataTransformerOptions ? TOptions["transformer"] : DefaultDataTransformer;
        }>, TProcRouterRecord>;
        /**
         * Merge Routers
         * @see https://trpc.io/docs/server/merging-routers
         */
        mergeRouters: typeof mergeRouters;
        /**
         * Create a server-side caller for a router
         * @see https://trpc.io/docs/server/server-side-calls
         */
        createCallerFactory: <TRouter extends import("./router").Router<import("./router").AnyRouterDef<RootConfig<{
            ctx: TParams["ctx"] extends object ? TParams["ctx"] : object;
            meta: TParams["meta"] extends object ? TParams["meta"] : object;
            errorShape: ErrorFormatterShape<PickFirstDefined<TOptions["errorFormatter"], ErrorFormatter<TParams["ctx"] extends object ? TParams["ctx"] : object, DefaultErrorShape>>>;
            transformer: TOptions["transformer"] extends DataTransformerOptions ? TOptions["transformer"] : DefaultDataTransformer;
        }>, any>>>(router: TRouter) => import("./router").RouterCaller<TRouter["_def"]>;
    };
}
/**
 * Initialize tRPC - done exactly once per backend
 */
export declare const initTRPC: TRPCBuilder<object>;
export {};
//# sourceMappingURL=initTRPC.d.ts.map