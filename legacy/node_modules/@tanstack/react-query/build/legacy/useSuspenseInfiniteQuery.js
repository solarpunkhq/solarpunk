"use client";

// src/useSuspenseInfiniteQuery.ts
import { InfiniteQueryObserver } from "@tanstack/query-core";
import { useBaseQuery } from "./useBaseQuery.js";
import { defaultThrowOnError } from "./suspense.js";
function useSuspenseInfiniteQuery(options, queryClient) {
  return useBaseQuery(
    {
      ...options,
      enabled: true,
      suspense: true,
      throwOnError: defaultThrowOnError
    },
    InfiniteQueryObserver,
    queryClient
  );
}
export {
  useSuspenseInfiniteQuery
};
//# sourceMappingURL=useSuspenseInfiniteQuery.js.map