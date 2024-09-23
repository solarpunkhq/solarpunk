'use strict';

function isObject(value) {
    // check that value is object
    return !!value && !Array.isArray(value) && typeof value === 'object';
}

// FIXME:
// - the generics here are probably unnecessary
// - the RPC-spec could probably be simplified to combine HTTP + WS
/** @internal */ function transformResultInner(response, runtime) {
    if ('error' in response) {
        const error = runtime.transformer.deserialize(response.error);
        return {
            ok: false,
            error: {
                ...response,
                error
            }
        };
    }
    const result = {
        ...response.result,
        ...(!response.result.type || response.result.type === 'data') && {
            type: 'data',
            data: runtime.transformer.deserialize(response.result.data)
        }
    };
    return {
        ok: true,
        result
    };
}
class TransformResultError extends Error {
    constructor(){
        super('Unable to transform response from server');
    }
}
/**
 * Transforms and validates that the result is a valid TRPCResponse
 * @internal
 */ function transformResult(response, runtime) {
    let result;
    try {
        // Use the data transformers on the JSON-response
        result = transformResultInner(response, runtime);
    } catch (err) {
        throw new TransformResultError();
    }
    // check that output of the transformers is a valid TRPCResponse
    if (!result.ok && (!isObject(result.error.error) || typeof result.error.error.code !== 'number')) {
        throw new TransformResultError();
    }
    if (result.ok && !isObject(result.result)) {
        throw new TransformResultError();
    }
    return result;
}

exports.isObject = isObject;
exports.transformResult = transformResult;
