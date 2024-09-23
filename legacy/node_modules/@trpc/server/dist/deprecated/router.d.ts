import { TRPCError } from '../error/TRPCError';
import type { inferObservableValue, Observable } from '../observable';
import type { TRPC_ERROR_CODE_KEY, TRPC_ERROR_CODE_NUMBER, TRPCErrorShape } from '../rpc';
import type { CombinedDataTransformer, DataTransformerOptions, DefaultDataTransformer } from '../transformer';
import type { FlatOverwrite, ThenArg } from '../types';
import type { MiddlewareFunction } from './internals/middlewares';
import type { CreateProcedureWithInput, CreateProcedureWithInputOutputParser, CreateProcedureWithoutInput, inferProcedureFromOptions, Procedure } from './internals/procedure';
import type { MigrateRouter } from './interop';
export type { Procedure } from './internals/procedure';
/**
 * @internal
 */
type Prefix<TPrefix extends string, TSuffix extends string> = `${TPrefix}${TSuffix}`;
/**
 * @internal
 */
type Prefixer<TObj extends Record<string, any>, TPrefix extends string> = {
    [P in keyof TObj as Prefix<TPrefix, P & string>]: TObj[P];
};
/**
 * @public
 * @deprecated
 */
export type ProcedureType = 'mutation' | 'query' | 'subscription';
/**
 * @internal
 * @deprecated
 */
export type ProcedureRecord<TInputContext = any, TContext = any, TMeta = any, TInput = any, TParsedInput = any, TOutput = any, TParsedOutput = any> = Record<string, Procedure<TInputContext, TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput>>;
/**
 * @public
 * @deprecated
 */
export type inferProcedureInput<TProcedure extends Procedure<any, any, any, any, any, any, any>> = TProcedure extends Procedure<any, any, any, infer Input, any, any, any> ? undefined extends Input ? Input | null | void : Input : undefined;
/**
 * @public
 * @deprecated
 */
export type inferAsyncReturnType<TFunction extends (...args: any) => any> = ThenArg<ReturnType<TFunction>>;
/**
 * @public
 * @deprecated
 */
export type inferProcedureOutput<TProcedure extends Procedure<any, any, any, any, any, any, any>> = inferAsyncReturnType<TProcedure['call']>;
/**
 * @public
 * @beta
 * @deprecated
 */
export type inferSubscriptionOutput<TRouter extends AnyRouter, TPath extends keyof TRouter['_def']['subscriptions']> = inferObservableValue<inferAsyncReturnType<TRouter['_def']['subscriptions'][TPath]['call']>>;
/**
 * @internal
 * @deprecated
 */
export type inferHandlerInput<TProcedure extends Procedure<any, any, any, any, any, any, any>> = TProcedure extends Procedure<any, any, any, infer TInput, any, any, any> ? undefined extends TInput ? unknown extends TInput ? [(null | undefined)?] : [(TInput | null | undefined)?] : [TInput] : [(null | undefined)?];
type inferHandlerFn<TProcedures extends ProcedureRecord> = <TProcedure extends TProcedures[TPath], TPath extends string & keyof TProcedures>(path: TPath, ...args: inferHandlerInput<TProcedure>) => Promise<inferProcedureOutput<TProcedures[TPath]>>;
/**
 * @internal
 * @deprecated
 */
export type inferRouterContext<TRouter extends AnyRouter> = Parameters<TRouter['createCaller']>[0];
/**
 * @internal
 */
export type inferRouterMeta<TRouter extends AnyRouter> = TRouter extends Router<any, any, infer TMeta, any, any, any, any, any> ? TMeta : {};
/**
 * @public
 * @deprecated
 */
export type AnyRouter<TContext extends Record<string, any> = any> = Router<any, TContext, any, any, any, any, any, any>;
/**
 * @internal
 * @deprecated
 */
export type inferRouterError<TRouter extends AnyRouter> = ReturnType<TRouter['getErrorShape']>;
/**
 * @internal
 * @deprecated
 */
export type ErrorFormatter<TContext, TShape extends TRPCErrorShape<number>> = ({ error, }: {
    error: TRPCError;
    type: ProcedureType | 'unknown';
    path: string | undefined;
    input: unknown;
    ctx: TContext | undefined;
    shape: DefaultErrorShape;
}) => TShape;
type DefaultErrorData = {
    code: TRPC_ERROR_CODE_KEY;
    httpStatus: number;
    path?: string;
    stack?: string;
};
/**
 * @internal
 * @deprecated
 */
export interface DefaultErrorShape extends TRPCErrorShape<TRPC_ERROR_CODE_NUMBER, DefaultErrorData> {
    message: string;
    code: TRPC_ERROR_CODE_NUMBER;
}
type SwapProcedureContext<TProcedure extends Procedure<any, any, any, any, any, any, any>, TNewContext> = TProcedure extends Procedure<infer TInputContext, infer _TOldContext, infer TMeta, infer TInput, infer TParsedInput, infer TOutput, infer TParsedOutput> ? Procedure<TInputContext, TNewContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput> : never;
type SwapContext<TObj extends ProcedureRecord<any, any, any, any, any, any>, TNewContext> = {
    [P in keyof TObj]: SwapProcedureContext<TObj[P], TNewContext>;
};
/**
 * @internal The type signature of this class may change without warning.
 * @deprecated
 */
export declare class Router<TInputContext extends Record<string, any>, TContext extends Record<string, any>, TMeta extends Record<string, any>, TQueries extends ProcedureRecord<TInputContext, TContext, any, any, any, any, any>, TMutations extends ProcedureRecord<TInputContext, TContext, any, any, any, any, any>, TSubscriptions extends ProcedureRecord<TInputContext, TContext, unknown, unknown, Observable<unknown, unknown>, unknown, unknown>, TErrorShape extends TRPCErrorShape<number>, TTransformer extends CombinedDataTransformer = DefaultDataTransformer> {
    readonly _def: {
        queries: TQueries;
        mutations: TMutations;
        subscriptions: TSubscriptions;
        middlewares: MiddlewareFunction<TInputContext, TContext, TMeta>[];
        errorFormatter: ErrorFormatter<TContext, TErrorShape>;
        transformer: CombinedDataTransformer;
    };
    constructor(def?: {
        queries?: TQueries;
        mutations?: TMutations;
        subscriptions?: TSubscriptions;
        middlewares?: MiddlewareFunction<TInputContext, TContext, TMeta>[];
        errorFormatter?: ErrorFormatter<TContext, TErrorShape>;
        transformer?: CombinedDataTransformer;
    });
    private static prefixProcedures;
    query<TPath extends string, TInput, TParsedInput, TOutput, TParsedOutput>(path: TPath, procedure: CreateProcedureWithInputOutputParser<TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput>): Router<TInputContext, TContext, TMeta, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TQueries, TMutations, TSubscriptions, TErrorShape, TTransformer>;
    query<TPath extends string, TInput, TOutput>(path: TPath, procedure: CreateProcedureWithInput<TContext, TMeta, TInput, TOutput>): Router<TInputContext, TContext, TMeta, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TQueries, TMutations, TSubscriptions, TErrorShape, TTransformer>;
    query<TPath extends string, TOutput, TParsedOutput>(path: TPath, procedure: CreateProcedureWithoutInput<TContext, TMeta, TOutput, TParsedOutput>): Router<TInputContext, TContext, TMeta, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TQueries, TMutations, TSubscriptions, TErrorShape, TTransformer>;
    mutation<TPath extends string, TInput, TParsedInput, TOutput, TParsedOutput>(path: TPath, procedure: CreateProcedureWithInputOutputParser<TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput>): Router<TInputContext, TContext, TMeta, TQueries, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TMutations, TSubscriptions, TErrorShape, TTransformer>;
    mutation<TPath extends string, TInput, TOutput>(path: TPath, procedure: CreateProcedureWithInput<TContext, TMeta, TInput, TOutput>): Router<TInputContext, TContext, TMeta, TQueries, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TMutations, TSubscriptions, TErrorShape, TTransformer>;
    mutation<TPath extends string, TOutput, TParsedOutput>(path: TPath, procedure: CreateProcedureWithoutInput<TContext, TMeta, TOutput, TParsedOutput>): Router<TInputContext, TContext, TMeta, TQueries, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TMutations, TSubscriptions, TErrorShape, TTransformer>;
    /**
     * @beta Might change without a major version bump
     */
    subscription<TPath extends string, TInput, TParsedInput, TOutput extends Observable<unknown, unknown>>(path: TPath, procedure: Omit<CreateProcedureWithInputOutputParser<TContext, TMeta, TInput, TParsedInput, TOutput, unknown>, 'output'>): Router<TInputContext, TContext, TMeta, TQueries, TMutations, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TSubscriptions, TErrorShape, TTransformer>;
    /**
     * @beta Might change without a major version bump
     */
    subscription<TPath extends string, TInput, TOutput extends Observable<unknown, unknown>>(path: TPath, procedure: Omit<CreateProcedureWithInput<TContext, TMeta, TInput, TOutput>, 'output'>): Router<TInputContext, TContext, TMeta, TQueries, TMutations, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TSubscriptions, TErrorShape, TTransformer>;
    /**
     * @beta Might change without a major version bump
     */
    subscription<TPath extends string, TOutput extends Observable<unknown, unknown>>(path: TPath, procedure: Omit<CreateProcedureWithoutInput<TContext, TMeta, TOutput, unknown>, 'output'>): Router<TInputContext, TContext, TMeta, TQueries, TMutations, Record<TPath, inferProcedureFromOptions<TInputContext, typeof procedure>> & TSubscriptions, TErrorShape, TTransformer>;
    /**
     * Merge router with other router
     * @param router
     */
    merge<TChildRouter extends Router<TContext, any, TMeta, any, any, any, any, any>>(router: TChildRouter): Router<TInputContext, inferRouterContext<TChildRouter>, TMeta, TChildRouter['_def']['queries'] & TQueries, TChildRouter['_def']['mutations'] & TMutations, TChildRouter['_def']['subscriptions'] & TSubscriptions, TErrorShape, TTransformer>;
    /**
     * Merge router with other router
     * @param prefix Prefix that this router should live under
     * @param router
     */
    merge<TPath extends string, TChildRouter extends Router<TContext, any, TMeta, any, any, any, any, any>>(prefix: TPath, router: TChildRouter): Router<TInputContext, inferRouterContext<TChildRouter>, TMeta, Prefixer<TChildRouter['_def']['queries'], `${TPath}`> & TQueries, Prefixer<TChildRouter['_def']['mutations'], `${TPath}`> & TMutations, Prefixer<TChildRouter['_def']['subscriptions'], `${TPath}`> & TSubscriptions, TErrorShape, TTransformer>;
    /**
     * Invoke procedure. Only for internal use within library.
     */
    private call;
    createCaller(ctx: TInputContext): {
        query: inferHandlerFn<TQueries>;
        mutation: inferHandlerFn<TMutations>;
        subscription: inferHandlerFn<TSubscriptions>;
    };
    /**
     * Function to be called before any procedure is invoked
     * @link https://trpc.io/docs/middlewares
     */
    middleware<TNewContext extends Record<string, any>>(middleware: MiddlewareFunction<TContext, TNewContext, TMeta>): Router<TInputContext, TNewContext, TMeta, SwapContext<TQueries, TNewContext>, SwapContext<TMutations, TNewContext>, SwapContext<TSubscriptions, TNewContext>, TErrorShape, TTransformer>;
    /**
     * Format errors
     * @link https://trpc.io/docs/error-formatting
     */
    formatError<TErrorFormatter extends ErrorFormatter<TContext, TRPCErrorShape<number>>>(errorFormatter: TErrorFormatter): Router<TInputContext, TContext, TMeta, TQueries, TMutations, TSubscriptions, ReturnType<TErrorFormatter>, TTransformer>;
    getErrorShape(opts: {
        error: TRPCError;
        type: ProcedureType | 'unknown';
        path: string | undefined;
        input: unknown;
        ctx: TContext | undefined;
    }): TErrorShape;
    /**
     * Add data transformer to serialize/deserialize input args + output
     * @link https://trpc.io/docs/data-transformers
     */
    transformer(_transformer: DataTransformerOptions): Router<TInputContext, TContext, TMeta, TQueries, TMutations, TSubscriptions, TErrorShape, CombinedDataTransformer>;
    /**
     * Flattens the generics of TQueries/TMutations/TSubscriptions.
     * ⚠️ Experimental - might disappear. ⚠️
     *
     * @alpha
     */
    flat(): Router<TInputContext, TContext, TMeta, FlatOverwrite<{}, TQueries>, FlatOverwrite<{}, TMutations>, FlatOverwrite<{}, TSubscriptions>, TErrorShape, TTransformer>;
    /**
     * Interop mode for v9.x -> v10.x
     */
    interop(): MigrateRouter<TInputContext, TContext, TMeta, TQueries, TMutations, TSubscriptions, TErrorShape, TTransformer>;
}
/**
 * @deprecated
 */
export declare function router<TContext extends Record<string, any> = {}, TMeta extends Record<string, any> = {}>(): Router<TContext, TContext, TMeta, {}, {}, {}, DefaultErrorShape, DefaultDataTransformer>;
//# sourceMappingURL=router.d.ts.map