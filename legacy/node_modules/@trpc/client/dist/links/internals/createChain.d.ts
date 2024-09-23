import type { AnyRouter } from '@trpc/server';
import type { Operation, OperationLink, OperationResultObservable } from '../types';
/** @internal */
export declare function createChain<TRouter extends AnyRouter, TInput = unknown, TOutput = unknown>(opts: {
    links: OperationLink<TRouter, TInput, TOutput>[];
    op: Operation<TInput>;
}): OperationResultObservable<TRouter, TOutput>;
//# sourceMappingURL=createChain.d.ts.map