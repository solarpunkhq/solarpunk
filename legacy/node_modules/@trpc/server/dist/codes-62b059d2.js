/**
 * @internal
 */
function invert(obj) {
    const newObj = Object.create(null);
    for (const key in obj) {
        const v = obj[key];
        newObj[v] = key;
    }
    return newObj;
}

// reference: https://www.jsonrpc.org/specification
/**
 * JSON-RPC 2.0 Error codes
 *
 * `-32000` to `-32099` are reserved for implementation-defined server-errors.
 * For tRPC we're copying the last digits of HTTP 4XX errors.
 */
const TRPC_ERROR_CODES_BY_KEY = {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    PARSE_ERROR: -32700,
    /**
     * The JSON sent is not a valid Request object.
     */
    BAD_REQUEST: -32600, // 400
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001, // 401
    FORBIDDEN: -32003, // 403
    NOT_FOUND: -32004, // 404
    METHOD_NOT_SUPPORTED: -32005, // 405
    TIMEOUT: -32008, // 408
    CONFLICT: -32009, // 409
    PRECONDITION_FAILED: -32012, // 412
    PAYLOAD_TOO_LARGE: -32013, // 413
    UNPROCESSABLE_CONTENT: -32022, // 422
    TOO_MANY_REQUESTS: -32029, // 429
    CLIENT_CLOSED_REQUEST: -32099, // 499
};
const TRPC_ERROR_CODES_BY_NUMBER = invert(TRPC_ERROR_CODES_BY_KEY);

export { TRPC_ERROR_CODES_BY_KEY as T, TRPC_ERROR_CODES_BY_NUMBER as a, invert as i };
