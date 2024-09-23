import type { Parser } from '../parser';
export type ParseFn<TType> = (value: unknown) => Promise<TType> | TType;
export declare function getParseFn<TType>(procedureParser: Parser): ParseFn<TType>;
/**
 * @deprecated only for backwards compat
 * @internal
 */
export declare function getParseFnOrPassThrough<TType>(procedureParser: Parser | undefined): ParseFn<TType>;
//# sourceMappingURL=getParseFn.d.ts.map