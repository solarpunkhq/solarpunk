import type { Simplify, WithoutIndexSignature } from '../../types';
/**
 * @link https://github.com/remix-run/remix/blob/2248669ed59fd716e267ea41df5d665d4781f4a9/packages/remix-server-runtime/serialize.ts
 */
type JsonPrimitive = boolean | number | string | null;
type NonJsonPrimitive = Function | symbol | undefined;
type IsAny<T> = 0 extends T & 1 ? true : false;
type JsonReturnable = JsonPrimitive | undefined;
type IsRecord<T extends object> = keyof WithoutIndexSignature<T> extends never ? true : false;
export type Serialize<T> = IsAny<T> extends true ? any : unknown extends T ? unknown : T extends JsonReturnable ? T : T extends Map<any, any> | Set<any> ? object : T extends NonJsonPrimitive ? never : T extends {
    toJSON(): infer U;
} ? U : T extends [] ? [] : T extends [unknown, ...unknown[]] ? SerializeTuple<T> : T extends readonly (infer U)[] ? (U extends NonJsonPrimitive ? null : Serialize<U>)[] : T extends object ? IsRecord<T> extends true ? Record<keyof T, Serialize<T[keyof T]>> : Simplify<SerializeObject<UndefinedToOptional<T>>> : never;
/** JSON serialize [tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) */
type SerializeTuple<T extends [unknown, ...unknown[]]> = {
    [K in keyof T]: T[K] extends NonJsonPrimitive ? null : Serialize<T[K]>;
};
type SerializeObjectKey<T extends Record<any, any>, K> = K extends symbol ? never : IsAny<T[K]> extends true ? K : unknown extends T[K] ? K : T[K] extends NonJsonPrimitive ? never : K;
/**
 * JSON serialize objects (not including arrays) and classes
 * @internal
 **/
export type SerializeObject<T extends object> = {
    [K in keyof T as SerializeObjectKey<T, K>]: Serialize<T[K]>;
};
/**
 * Extract keys from T where the value dosen't extend undefined
 * Note: Can't parse IndexSignature or Record types
 */
type FilterDefinedKeys<T extends object> = Exclude<{
    [K in keyof T]: undefined extends T[K] ? never : K;
}[keyof T], undefined>;
/**
 * Get value of exactOptionalPropertyTypes config
 */
type ExactOptionalPropertyTypes = {
    a?: 0 | undefined;
} extends {
    a?: 0;
} ? false : true;
/**
 * Check if T has an index signature
 */
type HasIndexSignature<T extends object> = string extends keyof T ? true : false;
/**
 * { [key: string]: number | undefined } --> { [key: string]: number }
 */
type HandleIndexSignature<T extends object> = {
    [K in keyof Omit<T, keyof WithoutIndexSignature<T>>]: Exclude<T[K], undefined>;
};
/**
 * { a: number | undefined } --> { a?: number }
 * Note: Can't parse IndexSignature or Record types
 */
type HandleUndefined<T extends object> = {
    [K in keyof Omit<T, FilterDefinedKeys<T>>]?: Exclude<T[K], undefined>;
};
/**
 * Handle undefined, index signature and records
 */
type UndefinedToOptional<T extends object> = Pick<WithoutIndexSignature<T>, FilterDefinedKeys<WithoutIndexSignature<T>>> & (ExactOptionalPropertyTypes extends true ? HandleIndexSignature<T> & HandleUndefined<WithoutIndexSignature<T>> : HasIndexSignature<T> extends true ? HandleIndexSignature<T> : HandleUndefined<T>);
export {};
//# sourceMappingURL=serialize.d.ts.map