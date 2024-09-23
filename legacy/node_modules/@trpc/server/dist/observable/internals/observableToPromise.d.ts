import type { Observable } from '../types';
export declare class ObservableAbortError extends Error {
    constructor(message: string);
}
/** @internal */
export declare function observableToPromise<TValue>(observable: Observable<TValue, unknown>): {
    promise: Promise<TValue>;
    abort: () => void;
};
//# sourceMappingURL=observableToPromise.d.ts.map