import type { AnyRouter, ClientDataTransformerOptions, CombinedDataTransformer, DataTransformerOptions, DefaultDataTransformer } from '@trpc/server';
import type { Unsubscribable } from '@trpc/server/observable';
import type { OperationContext, TRPCClientRuntime, TRPCLink } from '../links/types';
import { TRPCClientError } from '../TRPCClientError';
type CreateTRPCClientBaseOptions<TRouter extends AnyRouter> = TRouter['_def']['_config']['transformer'] extends DefaultDataTransformer ? {
    /**
     * Data transformer
     *
     * You must use the same transformer on the backend and frontend
     * @link https://trpc.io/docs/data-transformers
     **/
    transformer?: 'You must set a transformer on the backend router';
} : TRouter['_def']['_config']['transformer'] extends DataTransformerOptions ? {
    /**
     * Data transformer
     *
     * You must use the same transformer on the backend and frontend
     * @link https://trpc.io/docs/data-transformers
     **/
    transformer: TRouter['_def']['_config']['transformer'] extends CombinedDataTransformer ? DataTransformerOptions : TRouter['_def']['_config']['transformer'];
} : {
    /**
     * Data transformer
     *
     * You must use the same transformer on the backend and frontend
     * @link https://trpc.io/docs/data-transformers
     **/
    transformer?: /** @deprecated **/ ClientDataTransformerOptions | CombinedDataTransformer;
};
export interface TRPCRequestOptions {
    /**
     * Pass additional context to links
     */
    context?: OperationContext;
    signal?: AbortSignal;
}
export interface TRPCSubscriptionObserver<TValue, TError> {
    onStarted: () => void;
    onData: (value: TValue) => void;
    onError: (err: TError) => void;
    onStopped: () => void;
    onComplete: () => void;
}
/** @internal */
export type CreateTRPCClientOptions<TRouter extends AnyRouter> = CreateTRPCClientBaseOptions<TRouter> & {
    links: TRPCLink<TRouter>[];
};
/** @internal */
export type UntypedClientProperties = '$request' | 'links' | 'mutation' | 'query' | 'requestAsPromise' | 'requestId' | 'runtime' | 'subscription';
export declare class TRPCUntypedClient<TRouter extends AnyRouter> {
    private readonly links;
    readonly runtime: TRPCClientRuntime;
    private requestId;
    constructor(opts: CreateTRPCClientOptions<TRouter>);
    private $request;
    private requestAsPromise;
    query(path: string, input?: unknown, opts?: TRPCRequestOptions): Promise<unknown>;
    mutation(path: string, input?: unknown, opts?: TRPCRequestOptions): Promise<unknown>;
    subscription(path: string, input: unknown, opts: Partial<TRPCSubscriptionObserver<unknown, TRPCClientError<AnyRouter>>> & TRPCRequestOptions): Unsubscribable;
}
export {};
//# sourceMappingURL=TRPCUntypedClient.d.ts.map