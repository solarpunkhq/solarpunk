import type { HTTPBatchLinkOptions } from './HTTPBatchLinkOptions';
import type { TextDecoderEsque } from './internals/streamingUtils';
export interface HTTPBatchStreamLinkOptions extends HTTPBatchLinkOptions {
    /**
     * Will default to the webAPI `TextDecoder`,
     * but you can use this option if your client
     * runtime doesn't provide it.
     */
    textDecoder?: TextDecoderEsque;
}
export declare const unstable_httpBatchStreamLink: <TRouter extends import("@trpc/server").AnyRouter>(opts: HTTPBatchStreamLinkOptions) => import("./types").TRPCLink<TRouter>;
//# sourceMappingURL=httpBatchStreamLink.d.ts.map