import type { AnyRootConfig } from '../internals';
import type { TRPCResponse, TRPCResponseMessage } from '../rpc';
/**
 * Takes a unserialized `TRPCResponse` and serializes it with the router's transformers
 **/
export declare function transformTRPCResponse<TResponse extends TRPCResponse | TRPCResponse[] | TRPCResponseMessage | TRPCResponseMessage[]>(config: AnyRootConfig, itemOrItems: TResponse): import("../rpc").TRPCErrorResponse<import("../rpc").TRPCErrorShape<import("../rpc").TRPC_ERROR_CODE_NUMBER, Record<string, unknown>>> | import("../rpc").TRPCSuccessResponse<unknown> | ({
    id: import("../rpc").JSONRPC2.RequestId;
} & import("../rpc").TRPCResultMessage<unknown>) | (TRPCResponse | TRPCResponseMessage)[];
//# sourceMappingURL=transformTRPCResponse.d.ts.map