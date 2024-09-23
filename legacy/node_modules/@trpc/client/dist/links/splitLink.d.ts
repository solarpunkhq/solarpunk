import type { AnyRouter } from '@trpc/server';
import type { Operation, TRPCLink } from './types';
export declare function splitLink<TRouter extends AnyRouter = AnyRouter>(opts: {
    condition: (op: Operation) => boolean;
    /**
     * The link to execute next if the test function returns `true`.
     */
    true: TRPCLink<TRouter> | TRPCLink<TRouter>[];
    /**
     * The link to execute next if the test function returns `false`.
     */
    false: TRPCLink<TRouter> | TRPCLink<TRouter>[];
}): TRPCLink<TRouter>;
//# sourceMappingURL=splitLink.d.ts.map