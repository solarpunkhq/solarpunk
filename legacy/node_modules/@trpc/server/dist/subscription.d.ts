import type { Observable, Observer } from './observable';
/**
 * @deprecated
 * This functionality is deprecated and will be removed in the next major version.
 */
export declare function subscriptionPullFactory<TOutput>(opts: {
    /**
     * The interval of how often the function should run
     */
    intervalMs: number;
    pull(emit: Observer<TOutput, unknown>): Promise<void> | void;
}): Observable<TOutput, unknown>;
//# sourceMappingURL=subscription.d.ts.map