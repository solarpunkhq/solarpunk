'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var observable = require('../observable-464116ac.js');

function share(_opts) {
    return (originalObserver)=>{
        let refCount = 0;
        let subscription = null;
        const observers = [];
        function startIfNeeded() {
            if (subscription) {
                return;
            }
            subscription = originalObserver.subscribe({
                next (value) {
                    for (const observer of observers){
                        observer.next?.(value);
                    }
                },
                error (error) {
                    for (const observer of observers){
                        observer.error?.(error);
                    }
                },
                complete () {
                    for (const observer of observers){
                        observer.complete?.();
                    }
                }
            });
        }
        function resetIfNeeded() {
            // "resetOnRefCountZero"
            if (refCount === 0 && subscription) {
                const _sub = subscription;
                subscription = null;
                _sub.unsubscribe();
            }
        }
        return {
            subscribe (observer) {
                refCount++;
                observers.push(observer);
                startIfNeeded();
                return {
                    unsubscribe () {
                        refCount--;
                        resetIfNeeded();
                        const index = observers.findIndex((v)=>v === observer);
                        if (index > -1) {
                            observers.splice(index, 1);
                        }
                    }
                };
            }
        };
    };
}

function map(project) {
    return (originalObserver)=>{
        return {
            subscribe (observer) {
                let index = 0;
                const subscription = originalObserver.subscribe({
                    next (value) {
                        observer.next?.(project(value, index++));
                    },
                    error (error) {
                        observer.error?.(error);
                    },
                    complete () {
                        observer.complete?.();
                    }
                });
                return subscription;
            }
        };
    };
}

function tap(observer) {
    return (originalObserver)=>{
        return {
            subscribe (observer2) {
                return originalObserver.subscribe({
                    next (v) {
                        observer.next?.(v);
                        observer2.next?.(v);
                    },
                    error (v) {
                        observer.error?.(v);
                        observer2.error?.(v);
                    },
                    complete () {
                        observer.complete?.();
                        observer2.complete?.();
                    }
                });
            }
        };
    };
}

class ObservableAbortError extends Error {
    constructor(message){
        super(message);
        this.name = 'ObservableAbortError';
        Object.setPrototypeOf(this, ObservableAbortError.prototype);
    }
}
/** @internal */ function observableToPromise(observable) {
    let abort;
    const promise = new Promise((resolve, reject)=>{
        let isDone = false;
        function onDone() {
            if (isDone) {
                return;
            }
            isDone = true;
            reject(new ObservableAbortError('This operation was aborted.'));
            obs$.unsubscribe();
        }
        const obs$ = observable.subscribe({
            next (data) {
                isDone = true;
                resolve(data);
                onDone();
            },
            error (data) {
                isDone = true;
                reject(data);
                onDone();
            },
            complete () {
                isDone = true;
                onDone();
            }
        });
        abort = onDone;
    });
    return {
        promise,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        abort: abort
    };
}

exports.isObservable = observable.isObservable;
exports.observable = observable.observable;
exports.map = map;
exports.observableToPromise = observableToPromise;
exports.share = share;
exports.tap = tap;
