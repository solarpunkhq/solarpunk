import { getCauseFromUnknown } from '@trpc/server/shared';
import { i as isObject } from './transformResult-ace864b8.mjs';

function isTRPCClientError(cause) {
    return cause instanceof TRPCClientError || /**
     * @deprecated
     * Delete in next major
     */ cause instanceof Error && cause.name === 'TRPCClientError';
}
function isTRPCErrorResponse(obj) {
    return isObject(obj) && isObject(obj.error) && typeof obj.error.code === 'number' && typeof obj.error.message === 'string';
}
class TRPCClientError extends Error {
    static from(_cause, opts = {}) {
        const cause = _cause;
        if (isTRPCClientError(cause)) {
            if (opts.meta) {
                // Decorate with meta error data
                cause.meta = {
                    ...cause.meta,
                    ...opts.meta
                };
            }
            return cause;
        }
        if (isTRPCErrorResponse(cause)) {
            return new TRPCClientError(cause.error.message, {
                ...opts,
                result: cause
            });
        }
        if (!(cause instanceof Error)) {
            return new TRPCClientError('Unknown error', {
                ...opts,
                cause: cause
            });
        }
        return new TRPCClientError(cause.message, {
            ...opts,
            cause: getCauseFromUnknown(cause)
        });
    }
    constructor(message, opts){
        const cause = opts?.cause;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/tc39/proposal-error-cause
        super(message, {
            cause
        });
        this.meta = opts?.meta;
        this.cause = cause;
        this.shape = opts?.result?.error;
        this.data = opts?.result?.error.data;
        this.name = 'TRPCClientError';
        Object.setPrototypeOf(this, TRPCClientError.prototype);
    }
}

export { TRPCClientError as T };
