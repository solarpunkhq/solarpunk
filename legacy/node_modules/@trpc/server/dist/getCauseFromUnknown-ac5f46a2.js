/**
 * @internal
 */
function isObject(value) {
    // check that value is object
    return !!value && !Array.isArray(value) && typeof value === 'object';
}

class UnknownCauseError extends Error {
}
function getCauseFromUnknown(cause) {
    if (cause instanceof Error) {
        return cause;
    }
    const type = typeof cause;
    if (type === 'undefined' || type === 'function' || cause === null) {
        return undefined;
    }
    // Primitive types just get wrapped in an error
    if (type !== 'object') {
        return new Error(String(cause));
    }
    // If it's an object, we'll create a synthetic error
    if (isObject(cause)) {
        const err = new UnknownCauseError();
        for (const key in cause) {
            err[key] = cause[key];
        }
        return err;
    }
    return undefined;
}

export { getCauseFromUnknown as g };
