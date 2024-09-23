import { i as invert, T as TRPC_ERROR_CODES_BY_KEY } from './codes-c924c3db.mjs';

const TRPC_ERROR_CODES_BY_NUMBER = invert(TRPC_ERROR_CODES_BY_KEY);
const JSONRPC2_TO_HTTP_CODE = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
};
function getStatusCodeFromKey(code) {
    return JSONRPC2_TO_HTTP_CODE[code] ?? 500;
}
function getHTTPStatusCode(json) {
    const arr = Array.isArray(json) ? json : [
        json
    ];
    const httpStatuses = new Set(arr.map((res)=>{
        if ('error' in res) {
            const data = res.error.data;
            if (typeof data.httpStatus === 'number') {
                return data.httpStatus;
            }
            const code = TRPC_ERROR_CODES_BY_NUMBER[res.error.code];
            return getStatusCodeFromKey(code);
        }
        return 200;
    }));
    if (httpStatuses.size !== 1) {
        return 207;
    }
    const httpStatus = httpStatuses.values().next().value;
    return httpStatus;
}
function getHTTPStatusCodeFromError(error) {
    return getStatusCodeFromKey(error.code);
}

const noop = ()=>{
// noop
};
function createInnerProxy(callback, path) {
    const proxy = new Proxy(noop, {
        get (_obj, key) {
            if (typeof key !== 'string' || key === 'then') {
                // special case for if the proxy is accidentally treated
                // like a PromiseLike (like in `Promise.resolve(proxy)`)
                return undefined;
            }
            return createInnerProxy(callback, [
                ...path,
                key
            ]);
        },
        apply (_1, _2, args) {
            const isApply = path[path.length - 1] === 'apply';
            return callback({
                args: isApply ? args.length >= 2 ? args[1] : [] : args,
                path: isApply ? path.slice(0, -1) : path
            });
        }
    });
    return proxy;
}
/**
 * Creates a proxy that calls the callback with the path and arguments
 *
 * @internal
 */ const createRecursiveProxy = (callback)=>createInnerProxy(callback, []);
/**
 * Used in place of `new Proxy` where each handler will map 1 level deep to another value.
 *
 * @internal
 */ const createFlatProxy = (callback)=>{
    return new Proxy(noop, {
        get (_obj, name) {
            if (typeof name !== 'string' || name === 'then') {
                // special case for if the proxy is accidentally treated
                // like a PromiseLike (like in `Promise.resolve(proxy)`)
                return undefined;
            }
            return callback(name);
        }
    });
};

export { TRPC_ERROR_CODES_BY_NUMBER as T, createRecursiveProxy as a, getHTTPStatusCode as b, createFlatProxy as c, getHTTPStatusCodeFromError as g };
