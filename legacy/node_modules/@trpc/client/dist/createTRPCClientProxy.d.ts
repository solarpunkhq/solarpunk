import type { AnyMutationProcedure, AnyProcedure, AnyQueryProcedure, AnyRouter, AnySubscriptionProcedure, IntersectionError, ProcedureArgs, ProcedureRouterRecord, ProcedureType } from '@trpc/server';
import type { Unsubscribable } from '@trpc/server/observable';
import type { inferTransformedProcedureOutput, inferTransformedSubscriptionOutput } from '@trpc/server/shared';
import type { TRPCClient } from './createTRPCClient';
import type { CreateTRPCClientOptions } from './createTRPCUntypedClient';
import type { TRPCSubscriptionObserver, UntypedClientProperties } from './internals/TRPCUntypedClient';
import { TRPCUntypedClient } from './internals/TRPCUntypedClient';
import type { TRPCClientError } from './TRPCClientError';
/**
 * @public
 **/
export type inferRouterProxyClient<TRouter extends AnyRouter> = DecoratedProcedureRecord<TRouter, TRouter['_def']['record']>;
/** @internal */
export type Resolver<TProcedure extends AnyProcedure> = (...args: ProcedureArgs<TProcedure['_def']>) => Promise<inferTransformedProcedureOutput<TProcedure>>;
type SubscriptionResolver<TProcedure extends AnyProcedure> = (...args: [
    input: ProcedureArgs<TProcedure['_def']>[0],
    opts: Partial<TRPCSubscriptionObserver<inferTransformedSubscriptionOutput<TProcedure>, TRPCClientError<TProcedure>>> & ProcedureArgs<TProcedure['_def']>[1]
]) => Unsubscribable;
type DecorateProcedure<TProcedure extends AnyProcedure> = TProcedure extends AnyQueryProcedure ? {
    query: Resolver<TProcedure>;
} : TProcedure extends AnyMutationProcedure ? {
    mutate: Resolver<TProcedure>;
} : TProcedure extends AnySubscriptionProcedure ? {
    subscribe: SubscriptionResolver<TProcedure>;
} : never;
/**
 * @internal
 */
type DecoratedProcedureRecord<TRouter extends AnyRouter, TProcedures extends ProcedureRouterRecord> = {
    [TKey in keyof TProcedures]: TProcedures[TKey] extends AnyRouter ? DecoratedProcedureRecord<TRouter, TProcedures[TKey]['_def']['record']> : TProcedures[TKey] extends AnyProcedure ? DecorateProcedure<TProcedures[TKey]> : never;
};
/** @internal */
export declare const clientCallTypeToProcedureType: (clientCallType: string) => ProcedureType;
/**
 * Creates a proxy client and shows type errors if you have query names that collide with built-in properties
 */
export type CreateTRPCProxyClient<TRouter extends AnyRouter> = inferRouterProxyClient<TRouter> extends infer $ProcedureRecord ? UntypedClientProperties & keyof $ProcedureRecord extends never ? inferRouterProxyClient<TRouter> : IntersectionError<UntypedClientProperties & keyof $ProcedureRecord> : never;
/**
 * @deprecated use `createTRPCProxyClient` instead
 * @internal
 */
export declare function createTRPCClientProxy<TRouter extends AnyRouter>(client: TRPCClient<TRouter>): CreateTRPCProxyClient<TRouter>;
export declare function createTRPCProxyClient<TRouter extends AnyRouter>(opts: CreateTRPCClientOptions<TRouter>): CreateTRPCProxyClient<TRouter>;
/**
 * Get an untyped client from a proxy client
 * @internal
 */
export declare function getUntypedClient<TRouter extends AnyRouter>(client: inferRouterProxyClient<TRouter>): TRPCUntypedClient<TRouter>;
export {};
//# sourceMappingURL=createTRPCClientProxy.d.ts.map