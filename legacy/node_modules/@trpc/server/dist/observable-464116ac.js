'use strict';

function identity(x) {
    return x;
}

/** @internal */ function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn)=>fn(prev), input);
    };
}

function isObservable(x) {
    return typeof x === 'object' && x !== null && 'subscribe' in x;
}
function observable(subscribe) {
    const self = {
        subscribe (observer) {
            let teardownRef = null;
            let isDone = false;
            let unsubscribed = false;
            let teardownImmediately = false;
            function unsubscribe() {
                if (teardownRef === null) {
                    teardownImmediately = true;
                    return;
                }
                if (unsubscribed) {
                    return;
                }
                unsubscribed = true;
                if (typeof teardownRef === 'function') {
                    teardownRef();
                } else if (teardownRef) {
                    teardownRef.unsubscribe();
                }
            }
            teardownRef = subscribe({
                next (value) {
                    if (isDone) {
                        return;
                    }
                    observer.next?.(value);
                },
                error (err) {
                    if (isDone) {
                        return;
                    }
                    isDone = true;
                    observer.error?.(err);
                    unsubscribe();
                },
                complete () {
                    if (isDone) {
                        return;
                    }
                    isDone = true;
                    observer.complete?.();
                    unsubscribe();
                }
            });
            if (teardownImmediately) {
                unsubscribe();
            }
            return {
                unsubscribe
            };
        },
        pipe (...operations) {
            return pipeFromArray(operations)(self);
        }
    };
    return self;
}

exports.isObservable = isObservable;
exports.observable = observable;
