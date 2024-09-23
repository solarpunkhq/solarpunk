import { TRPCError } from '../error/TRPCError';
import type { AnyRootConfig } from './internals/config';
import type { ProcedureCallOptions } from './internals/procedureBuilder';
import type { AnyMutationProcedure, AnyProcedure, AnyQueryProcedure, AnySubscriptionProcedure, ProcedureArgs } from './procedure';
import type { inferHandlerInput, inferProcedureOutput, ProcedureType } from './types';
/** @internal **/
export type ProcedureRecord = Record<string, AnyProcedure>;
export interface ProcedureRouterRecord {
    [key: string]: AnyProcedure | AnyRouter;
}
/**
 * @deprecated
 */
interface DeprecatedProcedureRouterRecord {
    queries: Record<string, AnyQueryProcedure>;
    mutations: Record<string, AnyMutationProcedure>;
    subscriptions: Record<string, AnySubscriptionProcedure>;
}
export interface RouterDef<TConfig extends AnyRootConfig, TRecord extends ProcedureRouterRecord, 
/**
 * @deprecated
 */
TOld extends DeprecatedProcedureRouterRecord = {
    queries: {};
    mutations: {};
    subscriptions: {};
}> {
    _config: TConfig;
    router: true;
    procedures: TRecord;
    record: TRecord;
    /**
     * V9 queries
     * @deprecated
     */
    queries: TOld['queries'];
    /**
     * V9 mutations
     * @deprecated
     */
    mutations: TOld['mutations'];
    /**
     * V9 subscriptions
     * @deprecated
     */
    subscriptions: TOld['subscriptions'];
}
export type AnyRouterDef<TConfig extends AnyRootConfig = AnyRootConfig, TOld extends DeprecatedProcedureRouterRecord = any> = RouterDef<TConfig, any, TOld>;
/**
 * @internal
 */
type inferHandlerFn<TProcedures extends ProcedureRecord> = <TProcedure extends TProcedures[TPath], TPath extends string & keyof TProcedures>(path: TPath, ...args: inferHandlerInput<TProcedure>) => Promise<inferProcedureOutput<TProcedure>>;
type DecorateProcedure<TProcedure extends AnyProcedure> = (input: ProcedureArgs<TProcedure['_def']>[0]) => Promise<TProcedure['_def']['_output_out']>;
/**
 * @internal
 */
type DecoratedProcedureRecord<TProcedures extends ProcedureRouterRecord> = {
    [TKey in keyof TProcedures]: TProcedures[TKey] extends AnyRouter ? DecoratedProcedureRecord<TProcedures[TKey]['_def']['record']> : TProcedures[TKey] extends AnyProcedure ? DecorateProcedure<TProcedures[TKey]> : never;
};
/**
 * @internal
 */
export type RouterCaller<TDef extends AnyRouterDef> = (ctx: TDef['_config']['$types']['ctx']) => DecoratedProcedureRecord<TDef['record']> & {
    /**
     * @deprecated
     */
    query: inferHandlerFn<TDef['queries']>;
    /**
     * @deprecated
     */
    mutation: inferHandlerFn<TDef['mutations']>;
    /**
     * @deprecated
     */
    subscription: inferHandlerFn<TDef['subscriptions']>;
};
export interface Router<TDef extends AnyRouterDef> {
    _def: TDef;
    /**
     * @deprecated use `t.createCallerFactory(router)` instead
     * @see https://trpc.io/docs/server/server-side-calls
     */
    createCaller: RouterCaller<TDef>;
    /**
     * @deprecated
     * FIXME: use the new standalone `getErrorShape` instead
     */
    getErrorShape(opts: {
        error: TRPCError;
        type: ProcedureType | 'unknown';
        path: string | undefined;
        input: unknown;
        ctx: TDef['_config']['$types']['ctx'] | undefined;
    }): TDef['_config']['$types']['errorShape'];
}
export type AnyRouter = Router<AnyRouterDef>;
/**
 * @internal
 */
export type CreateRouterInner<TConfig extends AnyRootConfig, TProcRouterRecord extends ProcedureRouterRecord> = Router<RouterDef<TConfig, TProcRouterRecord>> & 
/**
 * This should be deleted in v11
 * @deprecated
 */ TProcRouterRecord;
/**
 * @internal
 */
export declare function createRouterFactory<TConfig extends AnyRootConfig>(config: TConfig): <TProcRouterRecord extends ProcedureRouterRecord>(procedures: TProcRouterRecord) => CreateRouterInner<TConfig, TProcRouterRecord>;
/**
 * @internal
 */
export declare function callProcedure(opts: ProcedureCallOptions & {
    procedures: ProcedureRouterRecord;
}): Promise<unknown>;
export declare function createCallerFactory<TConfig extends AnyRootConfig>(): <TRouter extends Router<AnyRouterDef<TConfig, any>>>(router: TRouter) => RouterCaller<TRouter['_def']>;
export {};
//# sourceMappingURL=router.d.ts.map