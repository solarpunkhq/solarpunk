type KeyFromValue<TValue, TType extends Record<PropertyKey, PropertyKey>> = {
    [K in keyof TType]: TValue extends TType[K] ? K : never;
}[keyof TType];
type Invert<TType extends Record<PropertyKey, PropertyKey>> = {
    [TValue in TType[keyof TType]]: KeyFromValue<TValue, TType>;
};
/**
 * @internal
 */
export declare function invert<TRecord extends Record<PropertyKey, PropertyKey>>(obj: TRecord): Invert<TRecord>;
export {};
//# sourceMappingURL=invert.d.ts.map