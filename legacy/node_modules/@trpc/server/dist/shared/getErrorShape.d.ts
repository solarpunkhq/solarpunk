import type { ProcedureType } from '../core';
import type { TRPCError } from '../error/TRPCError';
import type { AnyRootConfig } from '../internals';
/**
 * @internal
 */
export declare function getErrorShape<TConfig extends AnyRootConfig>(opts: {
    config: TConfig;
    error: TRPCError;
    type: ProcedureType | 'unknown';
    path: string | undefined;
    input: unknown;
    ctx: TConfig['$types']['ctx'] | undefined;
}): TConfig['$types']['errorShape'];
//# sourceMappingURL=getErrorShape.d.ts.map