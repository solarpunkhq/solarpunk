import type { Observable, Observer, TeardownLogic } from './types';
export type inferObservableValue<TObservable> = TObservable extends Observable<infer TValue, unknown> ? TValue : never;
export declare function isObservable(x: unknown): x is Observable<unknown, unknown>;
export declare function observable<TValue, TError = unknown>(subscribe: (observer: Observer<TValue, TError>) => TeardownLogic): Observable<TValue, TError>;
//# sourceMappingURL=observable.d.ts.map