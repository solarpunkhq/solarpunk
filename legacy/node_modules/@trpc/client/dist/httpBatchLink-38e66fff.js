import { observable } from '@trpc/server/observable';
import { t as transformResult } from './transformResult-c1422cb5.js';
import { T as TRPCClientError } from './TRPCClientError-d4886a08.js';
import { r as resolveHTTPLinkOptions, g as getUrl, j as jsonHttpRequester } from './httpUtils-8fd37d28.js';

/**
 * A function that should never be called unless we messed something up.
 */
const throwFatalError = () => {
    throw new Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
};
/**
 * Dataloader that's very inspired by https://github.com/graphql/dataloader
 * Less configuration, no caching, and allows you to cancel requests
 * When cancelling a single fetch the whole batch will be cancelled only when _all_ items are cancelled
 */
function dataLoader(batchLoader) {
    let pendingItems = null;
    let dispatchTimer = null;
    const destroyTimerAndPendingItems = () => {
        clearTimeout(dispatchTimer);
        dispatchTimer = null;
        pendingItems = null;
    };
    /**
     * Iterate through the items and split them into groups based on the `batchLoader`'s validate function
     */
    function groupItems(items) {
        const groupedItems = [[]];
        let index = 0;
        while (true) {
            const item = items[index];
            if (!item) {
                // we're done
                break;
            }
            const lastGroup = groupedItems[groupedItems.length - 1];
            if (item.aborted) {
                // Item was aborted before it was dispatched
                item.reject?.(new Error('Aborted'));
                index++;
                continue;
            }
            const isValid = batchLoader.validate(lastGroup.concat(item).map((it) => it.key));
            if (isValid) {
                lastGroup.push(item);
                index++;
                continue;
            }
            if (lastGroup.length === 0) {
                item.reject?.(new Error('Input is too big for a single dispatch'));
                index++;
                continue;
            }
            // Create new group, next iteration will try to add the item to that
            groupedItems.push([]);
        }
        return groupedItems;
    }
    function dispatch() {
        const groupedItems = groupItems(pendingItems);
        destroyTimerAndPendingItems();
        // Create batches for each group of items
        for (const items of groupedItems) {
            if (!items.length) {
                continue;
            }
            const batch = {
                items,
                cancel: throwFatalError,
            };
            for (const item of items) {
                item.batch = batch;
            }
            const unitResolver = (index, value) => {
                const item = batch.items[index];
                item.resolve?.(value);
                item.batch = null;
                item.reject = null;
                item.resolve = null;
            };
            const { promise, cancel } = batchLoader.fetch(batch.items.map((_item) => _item.key), unitResolver);
            batch.cancel = cancel;
            promise
                .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    const value = result[i];
                    unitResolver(i, value);
                }
                for (const item of batch.items) {
                    item.reject?.(new Error('Missing result'));
                    item.batch = null;
                }
            })
                .catch((cause) => {
                for (const item of batch.items) {
                    item.reject?.(cause);
                    item.batch = null;
                }
            });
        }
    }
    function load(key) {
        const item = {
            aborted: false,
            key,
            batch: null,
            resolve: throwFatalError,
            reject: throwFatalError,
        };
        const promise = new Promise((resolve, reject) => {
            item.reject = reject;
            item.resolve = resolve;
            if (!pendingItems) {
                pendingItems = [];
            }
            pendingItems.push(item);
        });
        if (!dispatchTimer) {
            dispatchTimer = setTimeout(dispatch);
        }
        const cancel = () => {
            item.aborted = true;
            if (item.batch?.items.every((item) => item.aborted)) {
                // All items in the batch have been cancelled
                item.batch.cancel();
                item.batch = null;
            }
        };
        return { promise, cancel };
    }
    return {
        load,
    };
}

/**
 * @internal
 */
function createHTTPBatchLink(requester) {
    return function httpBatchLink(opts) {
        const resolvedOpts = resolveHTTPLinkOptions(opts);
        const maxURLLength = opts.maxURLLength ?? Infinity;
        // initialized config
        return (runtime) => {
            const batchLoader = (type) => {
                const validate = (batchOps) => {
                    if (maxURLLength === Infinity) {
                        // escape hatch for quick calcs
                        return true;
                    }
                    const path = batchOps.map((op) => op.path).join(',');
                    const inputs = batchOps.map((op) => op.input);
                    const url = getUrl({
                        ...resolvedOpts,
                        runtime,
                        type,
                        path,
                        inputs,
                    });
                    return url.length <= maxURLLength;
                };
                const fetch = requester({
                    ...resolvedOpts,
                    runtime,
                    type,
                    opts,
                });
                return { validate, fetch };
            };
            const query = dataLoader(batchLoader('query'));
            const mutation = dataLoader(batchLoader('mutation'));
            const subscription = dataLoader(batchLoader('subscription'));
            const loaders = { query, subscription, mutation };
            return ({ op }) => {
                return observable((observer) => {
                    const loader = loaders[op.type];
                    const { promise, cancel } = loader.load(op);
                    let _res = undefined;
                    promise
                        .then((res) => {
                        _res = res;
                        const transformed = transformResult(res.json, runtime);
                        if (!transformed.ok) {
                            observer.error(TRPCClientError.from(transformed.error, {
                                meta: res.meta,
                            }));
                            return;
                        }
                        observer.next({
                            context: res.meta,
                            result: transformed.result,
                        });
                        observer.complete();
                    })
                        .catch((err) => {
                        observer.error(TRPCClientError.from(err, {
                            meta: _res?.meta,
                        }));
                    });
                    return () => {
                        cancel();
                    };
                });
            };
        };
    };
}

const batchRequester = (requesterOpts) => {
    return (batchOps) => {
        const path = batchOps.map((op) => op.path).join(',');
        const inputs = batchOps.map((op) => op.input);
        const { promise, cancel } = jsonHttpRequester({
            ...requesterOpts,
            path,
            inputs,
            headers() {
                if (!requesterOpts.opts.headers) {
                    return {};
                }
                if (typeof requesterOpts.opts.headers === 'function') {
                    return requesterOpts.opts.headers({
                        opList: batchOps,
                    });
                }
                return requesterOpts.opts.headers;
            },
        });
        return {
            promise: promise.then((res) => {
                const resJSON = Array.isArray(res.json)
                    ? res.json
                    : batchOps.map(() => res.json);
                const result = resJSON.map((item) => ({
                    meta: res.meta,
                    json: item,
                }));
                return result;
            }),
            cancel,
        };
    };
};
const httpBatchLink = createHTTPBatchLink(batchRequester);

export { createHTTPBatchLink as c, httpBatchLink as h };
