import type { AnyRouter, inferRouterContext } from '../core';
import { TRPCError } from '../error/TRPCError';
import type { Maybe } from '../types';
import type { BaseContentTypeHandler } from './contentType';
import type { HTTPResponse, ResponseChunk } from './internals/types';
import type { HTTPBaseHandlerOptions, HTTPRequest } from './types';
interface ResolveHTTPRequestOptions<TRouter extends AnyRouter, TRequest extends HTTPRequest> extends HTTPBaseHandlerOptions<TRouter, TRequest> {
    createContext: () => Promise<inferRouterContext<TRouter>>;
    req: TRequest;
    path: string;
    error?: Maybe<TRPCError>;
    contentTypeHandler?: BaseContentTypeHandler<any>;
    preprocessedBody?: boolean;
    /**
     * Called as soon as the response head is known.
     * When streaming, headers will have been generated
     * **without** knowing the response body.
     *
     * Without this callback, streaming is disabled.
     */
    unstable_onHead: (headResponse: Omit<HTTPResponse, 'body'>, isStreaming: boolean) => void;
    /**
     * Called for every procedure with `[index, result]`.
     *
     * Will be called a single time with `index = -1` if
     * - response is an error
     * - response is empty (HEAD request)
     *
     * Without this callback, streaming is disabled.
     */
    unstable_onChunk: (chunk: ResponseChunk) => void;
}
/**
 * Since `resolveHTTPResponse` is a public API (community adapters),
 * let's give it a strong type signature to increase discoverability.
 */
/**
 * Non-streaming signature for `resolveHTTPResponse`:
 * @param opts.unstable_onHead `undefined`
 * @param opts.unstable_onChunk `undefined`
 * @returns `Promise<HTTPResponse>`
 */
export declare function resolveHTTPResponse<TRouter extends AnyRouter, TRequest extends HTTPRequest>(opts: Omit<ResolveHTTPRequestOptions<TRouter, TRequest>, 'unstable_onChunk' | 'unstable_onHead'>): Promise<HTTPResponse>;
/**
 * Streaming signature for `resolveHTTPResponse`:
 * @param opts.unstable_onHead called as soon as the response head is known
 * @param opts.unstable_onChunk called for every procedure with `[index, result]`
 * @returns `Promise<void>` since the response is streamed
 */
export declare function resolveHTTPResponse<TRouter extends AnyRouter, TRequest extends HTTPRequest>(opts: ResolveHTTPRequestOptions<TRouter, TRequest>): Promise<void>;
export {};
//# sourceMappingURL=resolveHTTPResponse.d.ts.map