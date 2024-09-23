'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./config-194bdd43.js');
var TRPCError = require('./TRPCError-ca37bf1a.js');
var index = require('./index-784ff647.js');
var codes = require('./codes-87f6824b.js');
require('./getCauseFromUnknown-d535264a.js');

/**
 * @deprecated
 */ const middlewareMarker$1 = 'middlewareMarker';

function getParseFn$1(procedureParser) {
    const parser = procedureParser;
    if (typeof parser === 'function') {
        // ProcedureParserCustomValidatorEsque
        return parser;
    }
    if (typeof parser.parseAsync === 'function') {
        // ProcedureParserZodEsque
        return parser.parseAsync.bind(parser);
    }
    if (typeof parser.parse === 'function') {
        // ProcedureParserZodEsque
        return parser.parse.bind(parser);
    }
    if (typeof parser.validateSync === 'function') {
        // ProcedureParserYupEsque
        return parser.validateSync.bind(parser);
    }
    if (typeof parser.create === 'function') {
        // ProcedureParserSuperstructEsque
        return parser.create.bind(parser);
    }
    throw new Error('Could not find a validator fn');
}
/**
 * @internal
 * @deprecated
 */ class Procedure {
    _def() {
        return {
            middlewares: this.middlewares,
            resolver: this.resolver,
            inputParser: this.inputParser,
            outputParser: this.outputParser,
            meta: this.meta
        };
    }
    async parseInput(rawInput) {
        try {
            return await this.parseInputFn(rawInput);
        } catch (cause) {
            throw new TRPCError.TRPCError({
                code: 'BAD_REQUEST',
                cause
            });
        }
    }
    async parseOutput(rawOutput) {
        try {
            return await this.parseOutputFn(rawOutput);
        } catch (cause) {
            throw new TRPCError.TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                cause,
                message: 'Output validation failed'
            });
        }
    }
    /**
   * Trigger middlewares in order, parse raw input, call resolver & parse raw output
   * @internal
   */ async call(opts) {
        // wrap the actual resolver and treat as the last "middleware"
        const middlewaresWithResolver = this.middlewares.concat([
            async ({ ctx  })=>{
                const input = await this.parseInput(opts.rawInput);
                const rawOutput = await this.resolver({
                    ...opts,
                    ctx,
                    input
                });
                const data = await this.parseOutput(rawOutput);
                return {
                    marker: middlewareMarker$1,
                    ok: true,
                    data,
                    ctx
                };
            }
        ]);
        // run the middlewares recursively with the resolver as the last one
        const callRecursive = async (callOpts = {
            index: 0,
            ctx: opts.ctx
        })=>{
            try {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const result = await middlewaresWithResolver[callOpts.index]({
                    ctx: callOpts.ctx,
                    type: opts.type,
                    path: opts.path,
                    rawInput: opts.rawInput,
                    meta: this.meta,
                    next: async (nextOpts)=>{
                        return await callRecursive({
                            index: callOpts.index + 1,
                            ctx: nextOpts ? nextOpts.ctx : callOpts.ctx
                        });
                    }
                });
                return result;
            } catch (cause) {
                return {
                    ctx: callOpts.ctx,
                    ok: false,
                    error: TRPCError.getTRPCErrorFromUnknown(cause),
                    marker: middlewareMarker$1
                };
            }
        };
        // there's always at least one "next" since we wrap this.resolver in a middleware
        const result = await callRecursive();
        if (!result) {
            throw new TRPCError.TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'No result from middlewares - did you forget to `return next()`?'
            });
        }
        if (!result.ok) {
            // re-throw original error
            throw result.error;
        }
        return result.data;
    }
    /**
   * Create new procedure with passed middlewares
   * @param middlewares
   */ inheritMiddlewares(middlewares) {
        const Constructor = this.constructor;
        const instance = new Constructor({
            middlewares: [
                ...middlewares,
                ...this.middlewares
            ],
            resolver: this.resolver,
            inputParser: this.inputParser,
            outputParser: this.outputParser,
            meta: this.meta
        });
        return instance;
    }
    constructor(opts){
        this.middlewares = opts.middlewares;
        this.resolver = opts.resolver;
        this.inputParser = opts.inputParser;
        this.parseInputFn = getParseFn$1(this.inputParser);
        this.outputParser = opts.outputParser;
        this.parseOutputFn = getParseFn$1(this.outputParser);
        this.meta = opts.meta;
    }
}
function createProcedure(opts) {
    const inputParser = 'input' in opts ? opts.input : (input)=>{
        if (input != null) {
            throw new TRPCError.TRPCError({
                code: 'BAD_REQUEST',
                message: 'No input expected'
            });
        }
        return undefined;
    };
    const outputParser = 'output' in opts && opts.output ? opts.output : (output)=>output;
    return new Procedure({
        inputParser: inputParser,
        resolver: opts.resolve,
        middlewares: [],
        outputParser: outputParser,
        meta: opts.meta
    });
}

function getParseFn(procedureParser) {
    const parser = procedureParser;
    if (typeof parser === 'function') {
        // ParserCustomValidatorEsque
        return parser;
    }
    if (typeof parser.parseAsync === 'function') {
        // ParserZodEsque
        return parser.parseAsync.bind(parser);
    }
    if (typeof parser.parse === 'function') {
        // ParserZodEsque
        // ParserValibotEsque (<= v0.12.X)
        return parser.parse.bind(parser);
    }
    if (typeof parser.validateSync === 'function') {
        // ParserYupEsque
        return parser.validateSync.bind(parser);
    }
    if (typeof parser.create === 'function') {
        // ParserSuperstructEsque
        return parser.create.bind(parser);
    }
    if (typeof parser.assert === 'function') {
        // ParserScaleEsque
        return (value)=>{
            parser.assert(value);
            return value;
        };
    }
    throw new Error('Could not find a validator fn');
}
/**
 * @deprecated only for backwards compat
 * @internal
 */ function getParseFnOrPassThrough(procedureParser) {
    if (!procedureParser) {
        return (v)=>v;
    }
    return getParseFn(procedureParser);
}

/**
 * Ensures there are no duplicate keys when building a procedure.
 */ function mergeWithoutOverrides(obj1, ...objs) {
    const newObj = Object.assign(Object.create(null), obj1);
    for (const overrides of objs){
        for(const key in overrides){
            if (key in newObj && newObj[key] !== overrides[key]) {
                throw new Error(`Duplicate key ${key}`);
            }
            newObj[key] = overrides[key];
        }
    }
    return newObj;
}

/**
 * @internal
 */ function createMiddlewareFactory() {
    function createMiddlewareInner(middlewares) {
        return {
            _middlewares: middlewares,
            unstable_pipe (middlewareBuilderOrFn) {
                const pipedMiddleware = '_middlewares' in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
                    middlewareBuilderOrFn
                ];
                return createMiddlewareInner([
                    ...middlewares,
                    ...pipedMiddleware
                ]);
            }
        };
    }
    function createMiddleware(fn) {
        return createMiddlewareInner([
            fn
        ]);
    }
    return createMiddleware;
}
const experimental_standaloneMiddleware = ()=>({
        create: createMiddlewareFactory()
    });
function isPlainObject(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}
/**
 * @internal
 * Please note, `trpc-openapi` uses this function.
 */ function createInputMiddleware(parse) {
    const inputMiddleware = async ({ next , rawInput , input ,  })=>{
        let parsedInput;
        try {
            parsedInput = await parse(rawInput);
        } catch (cause) {
            throw new TRPCError.TRPCError({
                code: 'BAD_REQUEST',
                cause
            });
        }
        // Multiple input parsers
        const combinedInput = isPlainObject(input) && isPlainObject(parsedInput) ? {
            ...input,
            ...parsedInput
        } : parsedInput;
        // TODO fix this typing?
        return next({
            input: combinedInput
        });
    };
    inputMiddleware._type = 'input';
    return inputMiddleware;
}
/**
 * @internal
 */ function createOutputMiddleware(parse) {
    const outputMiddleware = async ({ next  })=>{
        const result = await next();
        if (!result.ok) {
            // pass through failures without validating
            return result;
        }
        try {
            const data = await parse(result.data);
            return {
                ...result,
                data
            };
        } catch (cause) {
            throw new TRPCError.TRPCError({
                message: 'Output validation failed',
                code: 'INTERNAL_SERVER_ERROR',
                cause
            });
        }
    };
    outputMiddleware._type = 'output';
    return outputMiddleware;
}

/**
 * @internal
 */ const middlewareMarker = 'middlewareMarker';

function createNewBuilder(def1, def2) {
    const { middlewares =[] , inputs , meta , ...rest } = def2;
    // TODO: maybe have a fn here to warn about calls
    return createBuilder({
        ...mergeWithoutOverrides(def1, rest),
        inputs: [
            ...def1.inputs,
            ...inputs ?? []
        ],
        middlewares: [
            ...def1.middlewares,
            ...middlewares
        ],
        meta: def1.meta && meta ? {
            ...def1.meta,
            ...meta
        } : meta ?? def1.meta
    });
}
function createBuilder(initDef = {}) {
    const _def = {
        inputs: [],
        middlewares: [],
        ...initDef
    };
    return {
        _def,
        input (input) {
            const parser = getParseFn(input);
            return createNewBuilder(_def, {
                inputs: [
                    input
                ],
                middlewares: [
                    createInputMiddleware(parser)
                ]
            });
        },
        output (output) {
            const parseOutput = getParseFn(output);
            return createNewBuilder(_def, {
                output,
                middlewares: [
                    createOutputMiddleware(parseOutput)
                ]
            });
        },
        meta (meta) {
            return createNewBuilder(_def, {
                meta: meta
            });
        },
        /**
     * @deprecated
     * This functionality is deprecated and will be removed in the next major version.
     */ unstable_concat (builder) {
            return createNewBuilder(_def, builder._def);
        },
        use (middlewareBuilderOrFn) {
            // Distinguish between a middleware builder and a middleware function
            const middlewares = '_middlewares' in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
                middlewareBuilderOrFn
            ];
            return createNewBuilder(_def, {
                middlewares: middlewares
            });
        },
        query (resolver) {
            return createResolver({
                ..._def,
                query: true
            }, resolver);
        },
        mutation (resolver) {
            return createResolver({
                ..._def,
                mutation: true
            }, resolver);
        },
        subscription (resolver) {
            return createResolver({
                ..._def,
                subscription: true
            }, resolver);
        }
    };
}
function createResolver(_def, resolver) {
    const finalBuilder = createNewBuilder(_def, {
        resolver,
        middlewares: [
            async function resolveMiddleware(opts) {
                const data = await resolver(opts);
                return {
                    marker: middlewareMarker,
                    ok: true,
                    data,
                    ctx: opts.ctx
                };
            }
        ]
    });
    return createProcedureCaller(finalBuilder._def);
}
const codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/server/server-side-calls
`.trim();
function createProcedureCaller(_def) {
    const procedure = async function resolve(opts) {
        // is direct server-side call
        if (!opts || !('rawInput' in opts)) {
            throw new Error(codeblock);
        }
        // run the middlewares recursively with the resolver as the last one
        const callRecursive = async (callOpts = {
            index: 0,
            ctx: opts.ctx
        })=>{
            try {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const middleware = _def.middlewares[callOpts.index];
                const result = await middleware({
                    ctx: callOpts.ctx,
                    type: opts.type,
                    path: opts.path,
                    rawInput: callOpts.rawInput ?? opts.rawInput,
                    meta: _def.meta,
                    input: callOpts.input,
                    next (_nextOpts) {
                        const nextOpts = _nextOpts;
                        return callRecursive({
                            index: callOpts.index + 1,
                            ctx: nextOpts && 'ctx' in nextOpts ? {
                                ...callOpts.ctx,
                                ...nextOpts.ctx
                            } : callOpts.ctx,
                            input: nextOpts && 'input' in nextOpts ? nextOpts.input : callOpts.input,
                            rawInput: nextOpts && 'rawInput' in nextOpts ? nextOpts.rawInput : callOpts.rawInput
                        });
                    }
                });
                return result;
            } catch (cause) {
                return {
                    ok: false,
                    error: TRPCError.getTRPCErrorFromUnknown(cause),
                    marker: middlewareMarker
                };
            }
        };
        // there's always at least one "next" since we wrap this.resolver in a middleware
        const result = await callRecursive();
        if (!result) {
            throw new TRPCError.TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'No result from middlewares - did you forget to `return next()`?'
            });
        }
        if (!result.ok) {
            // re-throw original error
            throw result.error;
        }
        return result.data;
    };
    procedure._def = _def;
    procedure.meta = _def.meta;
    return procedure;
}

function migrateProcedure(oldProc, type) {
    const def = oldProc._def();
    const inputParser = getParseFnOrPassThrough(def.inputParser);
    const outputParser = getParseFnOrPassThrough(def.outputParser);
    const inputMiddleware = createInputMiddleware(inputParser);
    const builder = createBuilder({
        inputs: [
            def.inputParser
        ],
        middlewares: [
            ...def.middlewares,
            inputMiddleware,
            createOutputMiddleware(outputParser)
        ],
        meta: def.meta,
        output: def.outputParser,
        mutation: type === 'mutation',
        query: type === 'query',
        subscription: type === 'subscription'
    });
    const proc = builder[type]((opts)=>def.resolver(opts));
    return proc;
}
function migrateRouter(oldRouter) {
    const errorFormatter = oldRouter._def.errorFormatter;
    const transformer = oldRouter._def.transformer;
    const queries = {};
    const mutations = {};
    const subscriptions = {};
    for (const [name, procedure] of Object.entries(oldRouter._def.queries)){
        queries[name] = migrateProcedure(procedure, 'query');
    }
    for (const [name1, procedure1] of Object.entries(oldRouter._def.mutations)){
        mutations[name1] = migrateProcedure(procedure1, 'mutation');
    }
    for (const [name2, procedure2] of Object.entries(oldRouter._def.subscriptions)){
        subscriptions[name2] = migrateProcedure(procedure2, 'subscription');
    }
    const procedures = mergeWithoutOverrides(queries, mutations, subscriptions);
    const newRouter = config.createRouterFactory({
        transformer,
        errorFormatter,
        isDev: process.env.NODE_ENV !== 'production'
    })(procedures);
    return newRouter;
}

function getDataTransformer(transformer) {
    if ('input' in transformer) {
        return transformer;
    }
    return {
        input: transformer,
        output: transformer
    };
}
const PROCEDURE_DEFINITION_MAP = {
    query: 'queries',
    mutation: 'mutations',
    subscription: 'subscriptions'
};
function safeObject(...args) {
    return Object.assign(Object.create(null), ...args);
}
/**
 * @internal The type signature of this class may change without warning.
 * @deprecated
 */ class Router {
    static prefixProcedures(procedures, prefix) {
        const eps = safeObject();
        for (const [key, procedure] of Object.entries(procedures)){
            eps[prefix + key] = procedure;
        }
        return eps;
    }
    query(path, procedure) {
        const router = new Router({
            queries: safeObject({
                [path]: createProcedure(procedure)
            })
        });
        return this.merge(router);
    }
    mutation(path, procedure) {
        const router = new Router({
            mutations: safeObject({
                [path]: createProcedure(procedure)
            })
        });
        return this.merge(router);
    }
    subscription(path, procedure) {
        const router = new Router({
            subscriptions: safeObject({
                [path]: createProcedure(procedure)
            })
        });
        return this.merge(router);
    }
    merge(prefixOrRouter, maybeRouter) {
        let prefix = '';
        let childRouter;
        if (typeof prefixOrRouter === 'string' && maybeRouter instanceof Router) {
            prefix = prefixOrRouter;
            childRouter = maybeRouter;
        } else if (prefixOrRouter instanceof Router) {
            childRouter = prefixOrRouter;
        } else {
            throw new Error('Invalid args');
        }
        const duplicateQueries = Object.keys(childRouter._def.queries).filter((key)=>!!this._def.queries[prefix + key]);
        const duplicateMutations = Object.keys(childRouter._def.mutations).filter((key)=>!!this._def.mutations[prefix + key]);
        const duplicateSubscriptions = Object.keys(childRouter._def.subscriptions).filter((key)=>!!this._def.subscriptions[prefix + key]);
        const duplicates = [
            ...duplicateQueries,
            ...duplicateMutations,
            ...duplicateSubscriptions
        ];
        if (duplicates.length) {
            throw new Error(`Duplicate endpoint(s): ${duplicates.join(', ')}`);
        }
        const mergeProcedures = (defs)=>{
            const newDefs = safeObject();
            for (const [key, procedure] of Object.entries(defs)){
                const newProcedure = procedure.inheritMiddlewares(this._def.middlewares);
                newDefs[key] = newProcedure;
            }
            return Router.prefixProcedures(newDefs, prefix);
        };
        return new Router({
            ...this._def,
            queries: safeObject(this._def.queries, mergeProcedures(childRouter._def.queries)),
            mutations: safeObject(this._def.mutations, mergeProcedures(childRouter._def.mutations)),
            subscriptions: safeObject(this._def.subscriptions, mergeProcedures(childRouter._def.subscriptions))
        });
    }
    /**
   * Invoke procedure. Only for internal use within library.
   */ async call(opts) {
        const { type , path  } = opts;
        const defTarget = PROCEDURE_DEFINITION_MAP[type];
        const defs = this._def[defTarget];
        const procedure = defs[path];
        if (!procedure) {
            throw new TRPCError.TRPCError({
                code: 'NOT_FOUND',
                message: `No "${type}"-procedure on path "${path}"`
            });
        }
        return procedure.call(opts);
    }
    createCaller(ctx) {
        return {
            query: (path, ...args)=>{
                return this.call({
                    type: 'query',
                    ctx,
                    path,
                    rawInput: args[0]
                });
            },
            mutation: (path, ...args)=>{
                return this.call({
                    type: 'mutation',
                    ctx,
                    path,
                    rawInput: args[0]
                });
            },
            subscription: (path, ...args)=>{
                return this.call({
                    type: 'subscription',
                    ctx,
                    path,
                    rawInput: args[0]
                });
            }
        };
    }
    /**
   * Function to be called before any procedure is invoked
   * @link https://trpc.io/docs/middlewares
   */ middleware(middleware) {
        return new Router({
            ...this._def,
            middlewares: [
                ...this._def.middlewares,
                middleware
            ]
        });
    }
    /**
   * Format errors
   * @link https://trpc.io/docs/error-formatting
   */ formatError(errorFormatter) {
        if (this._def.errorFormatter !== config.defaultFormatter) {
            throw new Error('You seem to have double `formatError()`-calls in your router tree');
        }
        return new Router({
            ...this._def,
            errorFormatter: errorFormatter
        });
    }
    getErrorShape(opts) {
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
        if (globalThis.process?.env?.NODE_ENV !== 'production' && typeof opts.error.stack === 'string') {
            shape.data.stack = opts.error.stack;
        }
        if (typeof path === 'string') {
            shape.data.path = path;
        }
        return this._def.errorFormatter({
            ...opts,
            shape
        });
    }
    /**
   * Add data transformer to serialize/deserialize input args + output
   * @link https://trpc.io/docs/data-transformers
   */ transformer(_transformer) {
        const transformer = getDataTransformer(_transformer);
        if (this._def.transformer !== config.defaultTransformer) {
            throw new Error('You seem to have double `transformer()`-calls in your router tree');
        }
        return new Router({
            ...this._def,
            transformer
        });
    }
    /**
   * Flattens the generics of TQueries/TMutations/TSubscriptions.
   * ⚠️ Experimental - might disappear. ⚠️
   *
   * @alpha
   */ flat() {
        return this;
    }
    /**
   * Interop mode for v9.x -> v10.x
   */ interop() {
        return migrateRouter(this);
    }
    constructor(def){
        this._def = {
            queries: def?.queries ?? safeObject(),
            mutations: def?.mutations ?? safeObject(),
            subscriptions: def?.subscriptions ?? safeObject(),
            middlewares: def?.middlewares ?? [],
            errorFormatter: def?.errorFormatter ?? config.defaultFormatter,
            transformer: def?.transformer ?? config.defaultTransformer
        };
    }
}
/**
 * @deprecated
 */ function router() {
    return new Router();
}

function mergeRouters(...routerList) {
    const record = mergeWithoutOverrides({}, ...routerList.map((r)=>r._def.record));
    const errorFormatter = routerList.reduce((currentErrorFormatter, nextRouter)=>{
        if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== config.defaultFormatter) {
            if (currentErrorFormatter !== config.defaultFormatter && currentErrorFormatter !== nextRouter._def._config.errorFormatter) {
                throw new Error('You seem to have several error formatters');
            }
            return nextRouter._def._config.errorFormatter;
        }
        return currentErrorFormatter;
    }, config.defaultFormatter);
    const transformer = routerList.reduce((prev, current)=>{
        if (current._def._config.transformer && current._def._config.transformer !== config.defaultTransformer) {
            if (prev !== config.defaultTransformer && prev !== current._def._config.transformer) {
                throw new Error('You seem to have several transformers');
            }
            return current._def._config.transformer;
        }
        return prev;
    }, config.defaultTransformer);
    const router = config.createRouterFactory({
        errorFormatter,
        transformer,
        isDev: routerList.some((r)=>r._def._config.isDev),
        allowOutsideOfServer: routerList.some((r)=>r._def._config.allowOutsideOfServer),
        isServer: routerList.some((r)=>r._def._config.isServer),
        $types: routerList[0]?._def._config.$types
    })(record);
    return router;
}

/**
 * TODO: This can be improved:
 * - We should be able to chain `.meta()`/`.context()` only once
 * - Simplify typings
 * - Doesn't need to be a class but it doesn't really hurt either
 */ class TRPCBuilder {
    context() {
        return new TRPCBuilder();
    }
    meta() {
        return new TRPCBuilder();
    }
    create(options) {
        return createTRPCInner()(options);
    }
}
/**
 * Initialize tRPC - done exactly once per backend
 */ const initTRPC = new TRPCBuilder();
function createTRPCInner() {
    return function initTRPCInner(runtime) {
        const errorFormatter = runtime?.errorFormatter ?? config.defaultFormatter;
        const transformer = config.getDataTransformer(runtime?.transformer ?? config.defaultTransformer);
        const config$1 = {
            transformer,
            isDev: runtime?.isDev ?? globalThis.process?.env?.NODE_ENV !== 'production',
            allowOutsideOfServer: runtime?.allowOutsideOfServer ?? false,
            errorFormatter,
            isServer: runtime?.isServer ?? config.isServerDefault,
            /**
       * @internal
       */ $types: index.createFlatProxy((key)=>{
                throw new Error(`Tried to access "$types.${key}" which is not available at runtime`);
            })
        };
        {
            // Server check
            const isServer = runtime?.isServer ?? config.isServerDefault;
            if (!isServer && runtime?.allowOutsideOfServer !== true) {
                throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
            }
        }
        return {
            /**
       * These are just types, they can't be used
       * @internal
       */ _config: config$1,
            /**
       * Builder object for creating procedures
       * @see https://trpc.io/docs/server/procedures
       */ procedure: createBuilder({
                meta: runtime?.defaultMeta
            }),
            /**
       * Create reusable middlewares
       * @see https://trpc.io/docs/server/middlewares
       */ middleware: createMiddlewareFactory(),
            /**
       * Create a router
       * @see https://trpc.io/docs/server/routers
       */ router: config.createRouterFactory(config$1),
            /**
       * Merge Routers
       * @see https://trpc.io/docs/server/merging-routers
       */ mergeRouters,
            /**
       * Create a server-side caller for a router
       * @see https://trpc.io/docs/server/server-side-calls
       */ createCallerFactory: config.createCallerFactory()
        };
    };
}

exports.callProcedure = config.callProcedure;
exports.createCallerFactory = config.createCallerFactory;
exports.defaultTransformer = config.defaultTransformer;
exports.getDataTransformer = config.getDataTransformer;
exports.procedureTypes = config.procedureTypes;
exports.TRPCError = TRPCError.TRPCError;
exports.getTRPCErrorFromUnknown = TRPCError.getTRPCErrorFromUnknown;
exports.createInputMiddleware = createInputMiddleware;
exports.createOutputMiddleware = createOutputMiddleware;
exports.experimental_standaloneMiddleware = experimental_standaloneMiddleware;
exports.initTRPC = initTRPC;
exports.router = router;
