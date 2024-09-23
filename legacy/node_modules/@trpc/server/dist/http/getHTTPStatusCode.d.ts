import type { TRPCError } from '../error/TRPCError';
import type { TRPCResponse } from '../rpc';
import { TRPC_ERROR_CODES_BY_KEY } from '../rpc';
export declare const TRPC_ERROR_CODES_BY_NUMBER: {
    [-32700]: "PARSE_ERROR";
    [-32600]: "BAD_REQUEST";
    [-32603]: "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED";
    [-32001]: "UNAUTHORIZED";
    [-32003]: "FORBIDDEN";
    [-32004]: "NOT_FOUND";
    [-32005]: "METHOD_NOT_SUPPORTED";
    [-32008]: "TIMEOUT";
    [-32009]: "CONFLICT";
    [-32012]: "PRECONDITION_FAILED";
    [-32013]: "PAYLOAD_TOO_LARGE";
    [-32022]: "UNPROCESSABLE_CONTENT";
    [-32029]: "TOO_MANY_REQUESTS";
    [-32099]: "CLIENT_CLOSED_REQUEST";
};
type ValueOf<TType> = TType[keyof TType];
export type TRPC_ERROR_CODE_NUMBER = ValueOf<typeof TRPC_ERROR_CODES_BY_KEY>;
export declare function getHTTPStatusCode(json: TRPCResponse | TRPCResponse[]): any;
export declare function getHTTPStatusCodeFromError(error: TRPCError): number;
export {};
//# sourceMappingURL=getHTTPStatusCode.d.ts.map