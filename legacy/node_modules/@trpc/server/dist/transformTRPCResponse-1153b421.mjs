import { g as getHTTPStatusCodeFromError } from './index-f91d720c.mjs';
import { T as TRPC_ERROR_CODES_BY_KEY } from './codes-c924c3db.mjs';

/**
 * @internal
 */ function getErrorShape(opts) {
    const { path , error , config  } = opts;
    const { code  } = opts.error;
    const shape = {
        message: error.message,
        code: TRPC_ERROR_CODES_BY_KEY[code],
        data: {
            code,
            httpStatus: getHTTPStatusCodeFromError(error)
        }
    };
    if (config.isDev && typeof opts.error.stack === 'string') {
        shape.data.stack = opts.error.stack;
    }
    if (typeof path === 'string') {
        shape.data.path = path;
    }
    return config.errorFormatter({
        ...opts,
        shape
    });
}

function transformTRPCResponseItem(config, item) {
    if ('error' in item) {
        return {
            ...item,
            error: config.transformer.output.serialize(item.error)
        };
    }
    if ('data' in item.result) {
        return {
            ...item,
            result: {
                ...item.result,
                data: config.transformer.output.serialize(item.result.data)
            }
        };
    }
    return item;
}
/**
 * Takes a unserialized `TRPCResponse` and serializes it with the router's transformers
 **/ function transformTRPCResponse(config, itemOrItems) {
    return Array.isArray(itemOrItems) ? itemOrItems.map((item)=>transformTRPCResponseItem(config, item)) : transformTRPCResponseItem(config, itemOrItems);
}

export { getErrorShape as g, transformTRPCResponse as t };
