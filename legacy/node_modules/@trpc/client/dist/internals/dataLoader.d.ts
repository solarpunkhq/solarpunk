import type { CancelFn, PromiseAndCancel } from '../links/types';
type BatchLoader<TKey, TValue> = {
    validate: (keys: TKey[]) => boolean;
    fetch: (keys: TKey[], unitResolver: (index: number, value: NonNullable<TValue>) => void) => {
        promise: Promise<TValue[]>;
        cancel: CancelFn;
    };
};
/**
 * Dataloader that's very inspired by https://github.com/graphql/dataloader
 * Less configuration, no caching, and allows you to cancel requests
 * When cancelling a single fetch the whole batch will be cancelled only when _all_ items are cancelled
 */
export declare function dataLoader<TKey, TValue>(batchLoader: BatchLoader<TKey, TValue>): {
    load: (key: TKey) => PromiseAndCancel<TValue>;
};
export {};
//# sourceMappingURL=dataLoader.d.ts.map