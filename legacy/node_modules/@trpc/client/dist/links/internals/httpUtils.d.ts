import type { ProcedureType } from '@trpc/server';
import type { TRPCResponse } from '@trpc/server/rpc';
import type { AbortControllerEsque, AbortControllerInstanceEsque, FetchEsque, RequestInitEsque, ResponseEsque } from '../../internals/types';
import type { TextDecoderEsque } from '../internals/streamingUtils';
import type { HTTPHeaders, PromiseAndCancel, TRPCClientRuntime } from '../types';
/**
 * @internal
 */
export interface HTTPLinkBaseOptions {
    url: string | URL;
    /**
     * Add ponyfill for fetch
     */
    fetch?: FetchEsque;
    /**
     * Add ponyfill for AbortController
     */
    AbortController?: AbortControllerEsque | null;
}
export interface ResolvedHTTPLinkOptions {
    url: string;
    fetch?: FetchEsque;
    AbortController: AbortControllerEsque | null;
}
export declare function resolveHTTPLinkOptions(opts: HTTPLinkBaseOptions): ResolvedHTTPLinkOptions;
export interface HTTPResult {
    json: TRPCResponse;
    meta: {
        response: ResponseEsque;
        responseJSON?: unknown;
    };
}
type GetInputOptions = {
    runtime: TRPCClientRuntime;
} & ({
    input: unknown;
} | {
    inputs: unknown[];
});
export type HTTPBaseRequestOptions = GetInputOptions & ResolvedHTTPLinkOptions & {
    type: ProcedureType;
    path: string;
};
export type GetUrl = (opts: HTTPBaseRequestOptions) => string;
export type GetBody = (opts: HTTPBaseRequestOptions) => RequestInitEsque['body'];
export type ContentOptions = {
    batchModeHeader?: 'stream';
    contentTypeHeader?: string;
    getUrl: GetUrl;
    getBody: GetBody;
};
export declare const getUrl: GetUrl;
export declare const getBody: GetBody;
export type Requester = (opts: HTTPBaseRequestOptions & {
    headers: () => HTTPHeaders | Promise<HTTPHeaders>;
}) => PromiseAndCancel<HTTPResult>;
export declare const jsonHttpRequester: Requester;
export type HTTPRequestOptions = ContentOptions & HTTPBaseRequestOptions & {
    headers: () => HTTPHeaders | Promise<HTTPHeaders>;
    TextDecoder?: TextDecoderEsque;
};
export declare function fetchHTTPResponse(opts: HTTPRequestOptions, ac?: AbortControllerInstanceEsque | null): Promise<ResponseEsque>;
export declare function httpRequest(opts: HTTPRequestOptions): PromiseAndCancel<HTTPResult>;
export {};
//# sourceMappingURL=httpUtils.d.ts.map