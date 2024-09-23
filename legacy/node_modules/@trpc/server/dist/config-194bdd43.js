'use strict';

var TRPCError = require('./TRPCError-ca37bf1a.js');
var index = require('./index-784ff647.js');
var codes = require('./codes-87f6824b.js');

/**
 * @public
 */ /**
 * @internal
 */ function getDataTransformer(transformer) {
    if ('input' in transformer) {
        return transformer;
    }
    return {
        input: transformer,
        output: transformer
    };
}
/**
 * @internal
 */ const defaultTransformer = {
    _default: true,
    input: {
        serialize: (obj)=>obj,
        deserialize: (obj)=>obj
    },
    output: {
        serialize: (obj)=>obj,
        deserialize: (obj)=>obj
    }
};

const defaultFormatter = ({ shape  })=>{
    return shape;
};

/**
 * Create an object without inheriting anything from `Object.prototype`
 * @internal
 */ function omitPrototype(obj) {
    return Object.assign(Object.create(null), obj);
}

const procedureTypes = [
    'query',
    'mutation',
    'subscription'
];

function isRouter(procedureOrRouter) {
    return 'router' in procedureOrRouter._def;
}
const emptyRouter = {
    _ctx: null,
    _errorShape: null,
    _meta: null,
    queries: {},
    mutations: {},
    subscriptions: {},
    errorFormatter: defaultFormatter,
    transformer: defaultTransformer
};
/**
 * Reserved words that can't be used as router or procedure names
 */ const reservedWords = [
    /**
   * Then is a reserved word because otherwise we can't return a promise that returns a Proxy
   * since JS will think that `.then` is something that exists
   */ 'then'
];
/**
 * @internal
 */ function createRouterFactory(config) {
    return function createRouterInner(procedures) {
        const reservedWordsUsed = new Set(Object.keys(procedures).filter((v)=>reservedWords.includes(v)));
        if (reservedWordsUsed.size > 0) {
            throw new Error('Reserved words used in `router({})` call: ' + Array.from(reservedWordsUsed).join(', '));
        }
        const routerProcedures = omitPrototype({});
        function recursiveGetPaths(procedures, path = '') {
            for (const [key, procedureOrRouter] of Object.entries(procedures ?? {})){
                const newPath = `${path}${key}`;
                if (isRouter(procedureOrRouter)) {
                    recursiveGetPaths(procedureOrRouter._def.procedures, `${newPath}.`);
                    continue;
                }
                if (routerProcedures[newPath]) {
                    throw new Error(`Duplicate key: ${newPath}`);
                }
                routerProcedures[newPath] = procedureOrRouter;
            }
        }
        recursiveGetPaths(procedures);
        const _def = {
            _config: config,
            router: true,
            procedures: routerProcedures,
            ...emptyRouter,
            record: procedures,
            queries: Object.entries(routerProcedures).filter((pair)=>pair[1]._def.query).reduce((acc, [key, val])=>({
                    ...acc,
                    [key]: val
                }), {}),
            mutations: Object.entries(routerProcedures).filter((pair)=>pair[1]._def.mutation).reduce((acc, [key, val])=>({
                    ...acc,
                    [key]: val
                }), {}),
            subscriptions: Object.entries(routerProcedures).filter((pair)=>pair[1]._def.subscription).reduce((acc, [key, val])=>({
                    ...acc,
                    [key]: val
                }), {})
        };
        const router = {
            ...procedures,
            _def,
            createCaller (ctx) {
                return createCallerFactory()(router)(ctx);
            },
            getErrorShape (opts) {
                const { path , error  } = opts;
                const { code  } = opts.error;
                const shape = {
                    message: error.message,
                    code: codes.TRPC_ERROR_CODES_BY_KEY[code],
                    data: {
                        code,
                        httpStatus: index.getHTTPStatusCodeFromError(error)
                    }
                };
                if (config.isDev && typeof opts.error.stack === 'string') {
                    shape.data.stack = opts.error.stack;
                }
                if (typeof path === 'string') {
                    shape.data.path = path;
                }
                return this._def._config.errorFormatter({
                    ...opts,
                    shape
                });
            }
        };
        return router;
    };
}
/**
 * @internal
 */ function callProcedure(opts) {
    const { type , path  } = opts;
    if (!(path in opts.procedures) || !opts.procedures[path]?._def[type]) {
        throw new TRPCError.TRPCError({
            code: 'NOT_FOUND',
            message: `No "${type}"-procedure on path "${path}"`
        });
    }
    const procedure = opts.procedures[path];
    return procedure(opts);
}
function createCallerFactory() {
    return function createCallerInner(router) {
        const def = router._def;
        return function createCaller(ctx) {
            const proxy = index.createRecursiveProxy(({ path , args  })=>{
                // interop mode
                if (path.length === 1 && procedureTypes.includes(path[0])) {
                    return callProcedure({
                        procedures: def.procedures,
                        path: args[0],
                        rawInput: args[1],
                        ctx,
                        type: path[0]
                    });
                }
                const fullPath = path.join('.');
                const procedure = def.procedures[fullPath];
                let type = 'query';
                if (procedure._def.mutation) {
                    type = 'mutation';
                } else if (procedure._def.subscription) {
                    type = 'subscription';
                }
                return procedure({
                    path: fullPath,
                    rawInput: args[0],
                    ctx,
                    type
                });
            });
            return proxy;
        };
    };
}

/**
 * The default check to see if we're in a server
 */ const isServerDefault = typeof window === 'undefined' || 'Deno' in window || globalThis.process?.env?.NODE_ENV === 'test' || !!globalThis.process?.env?.JEST_WORKER_ID || !!globalThis.process?.env?.VITEST_WORKER_ID;

exports.callProcedure = callProcedure;
exports.createCallerFactory = createCallerFactory;
exports.createRouterFactory = createRouterFactory;
exports.defaultFormatter = defaultFormatter;
exports.defaultTransformer = defaultTransformer;
exports.getDataTransformer = getDataTransformer;
exports.isServerDefault = isServerDefault;
exports.procedureTypes = procedureTypes;
