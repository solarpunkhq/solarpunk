// src/suspense.ts
var defaultThrowOnError = (_error, query) => query.state.data === void 0;
var ensureStaleTime = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
export {
  defaultThrowOnError,
  ensureStaleTime,
  fetchOptimistic,
  shouldSuspend,
  willFetch
};
//# sourceMappingURL=suspense.js.map