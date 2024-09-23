import type { Simplify, WithoutIndexSignature } from '../../types';
import type { ProcedureParams } from '../procedure';
/**
 * @internal
 * Overwrite properties in `TType` with properties in `TWith`
 * Only overwrites properties when the type to be overwritten
 * is an object. Otherwise it will just use the type from `TWith`.
 */
export type Overwrite<TType, TWith> = TWith extends any ? TType extends object ? {
    [K in keyof WithoutIndexSignature<TType> | keyof WithoutIndexSignature<TWith>]: K extends keyof TWith ? TWith[K] : K extends keyof TType ? TType[K] : never;
} & (string extends keyof TWith ? {
    [key: string]: TWith[string];
} : number extends keyof TWith ? {
    [key: number]: TWith[number];
} : {}) : TWith : never;
/**
 * @internal
 */
export type OverwriteKnown<TType, TWith> = {
    [K in keyof TType]: K extends keyof TWith ? TWith[K] : TType[K];
};
/**
 * @internal
 */
export type DefaultValue<TValue, TFallback> = UnsetMarker extends TValue ? TFallback : TValue;
/**
 * @internal
 */
export declare const middlewareMarker: "middlewareMarker" & {
    __brand: 'middlewareMarker';
};
/**
 * @internal
 */
export type MiddlewareMarker = typeof middlewareMarker;
/**
 * @internal
 */
export declare const unsetMarker: unique symbol;
/**
 * @internal
 */
export type UnsetMarker = typeof unsetMarker;
/**
 * @internal
 */
export interface ResolveOptions<TParams extends ProcedureParams> {
    ctx: Simplify<Overwrite<TParams['_config']['$types']['ctx'], TParams['_ctx_out']>>;
    input: TParams['_input_out'] extends UnsetMarker ? undefined : TParams['_input_out'];
}
/**
 * @internal
 */
export type ValidateShape<TActualShape, TExpectedShape> = TActualShape extends TExpectedShape ? Exclude<keyof TActualShape, keyof TExpectedShape> extends never ? TActualShape : TExpectedShape : never;
/**
 * @internal
 */
export type PickFirstDefined<TType, TPick> = undefined extends TType ? undefined extends TPick ? never : TPick : TType;
//# sourceMappingURL=utils.d.ts.map