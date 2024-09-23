import type { AnyRouter, inferProcedureInput, inferProcedureOutput, inferSubscriptionOutput } from '@trpc/server';
import type { Unsubscribable } from '@trpc/server/observable';
import type { inferTransformedProcedureOutput } from '@trpc/server/shared';
import type { CreateTRPCClientOptions, TRPCRequestOptions, TRPCSubscriptionObserver } from './internals/TRPCUntypedClient';
import type { TRPCClientRuntime } from './links';
import type { TRPCClientError } from './TRPCClientError';
/**
 * @deprecated
 */
export interface TRPCClient<TRouter extends AnyRouter> {
    readonly runtime: TRPCClientRuntime;
    query<TQueries extends TRouter['_def']['queries'], TPath extends string & keyof TQueries, TInput extends inferProcedureInput<TQueries[TPath]>>(path: TPath, input?: TInput, opts?: TRPCRequestOptions): Promise<inferProcedureOutput<TQueries[TPath]>>;
    mutation<TMutations extends TRouter['_def']['mutations'], TPath extends string & keyof TMutations, TInput extends inferProcedureInput<TMutations[TPath]>>(path: TPath, input?: TInput, opts?: TRPCRequestOptions): Promise<inferTransformedProcedureOutput<TMutations[TPath]>>;
    subscription<TSubscriptions extends TRouter['_def']['subscriptions'], TPath extends string & keyof TSubscriptions, TOutput extends inferSubscriptionOutput<TRouter, TPath>, TInput extends inferProcedureInput<TSubscriptions[TPath]>>(path: TPath, input: TInput, opts: Partial<TRPCSubscriptionObserver<TOutput, TRPCClientError<TRouter>>> & TRPCRequestOptions): Unsubscribable;
}
/**
 * @deprecated use `createTRPCProxyClient` instead
 */
export declare function createTRPCClient<TRouter extends AnyRouter>(opts: CreateTRPCClientOptions<TRouter>): TRPCClient<TRouter>;
//# sourceMappingURL=createTRPCClient.d.ts.map