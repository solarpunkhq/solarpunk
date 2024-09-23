import { T as TRPCError } from './TRPCError-98d44758.mjs';

function getRawProcedureInputOrThrow(opts) {
    const { req  } = opts;
    try {
        if (req.method === 'GET') {
            if (!req.query.has('input')) {
                return undefined;
            }
            const raw = req.query.get('input');
            return JSON.parse(raw);
        }
        if (!opts.preprocessedBody && typeof req.body === 'string') {
            // A mutation with no inputs will have req.body === ''
            return req.body.length === 0 ? undefined : JSON.parse(req.body);
        }
        return req.body;
    } catch (cause) {
        throw new TRPCError({
            code: 'PARSE_ERROR',
            cause
        });
    }
}
const deserializeInputValue = (rawValue, transformer)=>{
    return typeof rawValue !== 'undefined' ? transformer.input.deserialize(rawValue) : rawValue;
};
const getJsonContentTypeInputs = (opts)=>{
    const rawInput = getRawProcedureInputOrThrow(opts);
    const transformer = opts.router._def._config.transformer;
    if (!opts.isBatchCall) {
        return {
            0: deserializeInputValue(rawInput, transformer)
        };
    }
    /* istanbul ignore if  */ if (rawInput == null || typeof rawInput !== 'object' || Array.isArray(rawInput)) {
        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: '"input" needs to be an object when doing a batch call'
        });
    }
    const input = {};
    for(const key in rawInput){
        const k = key;
        const rawValue = rawInput[k];
        const value = deserializeInputValue(rawValue, transformer);
        input[k] = value;
    }
    return input;
};

export { getJsonContentTypeInputs as g };
