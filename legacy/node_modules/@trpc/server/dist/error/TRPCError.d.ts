import type { TRPC_ERROR_CODE_KEY } from '../rpc/codes';
export declare function getTRPCErrorFromUnknown(cause: unknown): TRPCError;
export declare class TRPCError extends Error {
    readonly cause?: Error;
    readonly code: "INTERNAL_SERVER_ERROR" | "PARSE_ERROR" | "BAD_REQUEST" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
    constructor(opts: {
        message?: string;
        code: TRPC_ERROR_CODE_KEY;
        cause?: unknown;
    });
}
//# sourceMappingURL=TRPCError.d.ts.map