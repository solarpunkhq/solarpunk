'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('../config-194bdd43.js');
var TRPCError = require('../TRPCError-ca37bf1a.js');
var observable = require('../observable-464116ac.js');
require('../codes-87f6824b.js');
var parseTRPCMessage = require('../parseTRPCMessage-1377f305.js');
var transformTRPCResponse = require('../transformTRPCResponse-e65f34e9.js');
require('../index-784ff647.js');
require('../getCauseFromUnknown-d535264a.js');

function applyWSSHandler(opts) {
    const { wss , createContext , router  } = opts;
    const { transformer  } = router._def._config;
    wss.on('connection', async (client, req)=>{
        const clientSubscriptions = new Map();
        function respond(untransformedJSON) {
            client.send(JSON.stringify(transformTRPCResponse.transformTRPCResponse(router._def._config, untransformedJSON)));
        }
        function stopSubscription(subscription, { id , jsonrpc  }) {
            subscription.unsubscribe();
            respond({
                id,
                jsonrpc,
                result: {
                    type: 'stopped'
                }
            });
        }
        const ctxPromise = createContext?.({
            req,
            res: client
        });
        let ctx = undefined;
        async function handleRequest(msg) {
            const { id , jsonrpc  } = msg;
            /* istanbul ignore next -- @preserve */ if (id === null) {
                throw new TRPCError.TRPCError({
                    code: 'BAD_REQUEST',
                    message: '`id` is required'
                });
            }
            if (msg.method === 'subscription.stop') {
                const sub = clientSubscriptions.get(id);
                if (sub) {
                    stopSubscription(sub, {
                        id,
                        jsonrpc
                    });
                }
                clientSubscriptions.delete(id);
                return;
            }
            const { path , input  } = msg.params;
            const type = msg.method;
            try {
                await ctxPromise; // asserts context has been set
                const result = await config.callProcedure({
                    procedures: router._def.procedures,
                    path,
                    rawInput: input,
                    ctx,
                    type
                });
                if (type === 'subscription') {
                    if (!observable.isObservable(result)) {
                        throw new TRPCError.TRPCError({
                            message: `Subscription ${path} did not return an observable`,
                            code: 'INTERNAL_SERVER_ERROR'
                        });
                    }
                } else {
                    // send the value as data if the method is not a subscription
                    respond({
                        id,
                        jsonrpc,
                        result: {
                            type: 'data',
                            data: result
                        }
                    });
                    return;
                }
                const observable$1 = result;
                const sub1 = observable$1.subscribe({
                    next (data) {
                        respond({
                            id,
                            jsonrpc,
                            result: {
                                type: 'data',
                                data
                            }
                        });
                    },
                    error (err) {
                        const error = TRPCError.getTRPCErrorFromUnknown(err);
                        opts.onError?.({
                            error,
                            path,
                            type,
                            ctx,
                            req,
                            input
                        });
                        respond({
                            id,
                            jsonrpc,
                            error: transformTRPCResponse.getErrorShape({
                                config: router._def._config,
                                error,
                                type,
                                path,
                                input,
                                ctx
                            })
                        });
                    },
                    complete () {
                        respond({
                            id,
                            jsonrpc,
                            result: {
                                type: 'stopped'
                            }
                        });
                    }
                });
                /* istanbul ignore next -- @preserve */ if (client.readyState !== client.OPEN) {
                    // if the client got disconnected whilst initializing the subscription
                    // no need to send stopped message if the client is disconnected
                    sub1.unsubscribe();
                    return;
                }
                /* istanbul ignore next -- @preserve */ if (clientSubscriptions.has(id)) {
                    // duplicate request ids for client
                    stopSubscription(sub1, {
                        id,
                        jsonrpc
                    });
                    throw new TRPCError.TRPCError({
                        message: `Duplicate id ${id}`,
                        code: 'BAD_REQUEST'
                    });
                }
                clientSubscriptions.set(id, sub1);
                respond({
                    id,
                    jsonrpc,
                    result: {
                        type: 'started'
                    }
                });
            } catch (cause) /* istanbul ignore next -- @preserve */ {
                // procedure threw an error
                const error = TRPCError.getTRPCErrorFromUnknown(cause);
                opts.onError?.({
                    error,
                    path,
                    type,
                    ctx,
                    req,
                    input
                });
                respond({
                    id,
                    jsonrpc,
                    error: transformTRPCResponse.getErrorShape({
                        config: router._def._config,
                        error,
                        type,
                        path,
                        input,
                        ctx
                    })
                });
            }
        }
        client.on('message', async (message)=>{
            try {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                const msgJSON = JSON.parse(message.toString());
                const msgs = Array.isArray(msgJSON) ? msgJSON : [
                    msgJSON
                ];
                const promises = msgs.map((raw)=>parseTRPCMessage.parseTRPCMessage(raw, transformer)).map(handleRequest);
                await Promise.all(promises);
            } catch (cause) {
                const error = new TRPCError.TRPCError({
                    code: 'PARSE_ERROR',
                    cause
                });
                respond({
                    id: null,
                    error: transformTRPCResponse.getErrorShape({
                        config: router._def._config,
                        error,
                        type: 'unknown',
                        path: undefined,
                        input: undefined,
                        ctx: undefined
                    })
                });
            }
        });
        // WebSocket errors should be handled, as otherwise unhandled exceptions will crash Node.js.
        // This line was introduced after the following error brought down production systems:
        // "RangeError: Invalid WebSocket frame: RSV2 and RSV3 must be clear"
        // Here is the relevant discussion: https://github.com/websockets/ws/issues/1354#issuecomment-774616962
        client.on('error', (cause)=>{
            opts.onError?.({
                ctx,
                error: TRPCError.getTRPCErrorFromUnknown(cause),
                input: undefined,
                path: undefined,
                type: 'unknown',
                req
            });
        });
        client.once('close', ()=>{
            for (const sub of clientSubscriptions.values()){
                sub.unsubscribe();
            }
            clientSubscriptions.clear();
        });
        async function createContextAsync() {
            try {
                ctx = await ctxPromise;
            } catch (cause) {
                const error = TRPCError.getTRPCErrorFromUnknown(cause);
                opts.onError?.({
                    error,
                    path: undefined,
                    type: 'unknown',
                    ctx,
                    req,
                    input: undefined
                });
                respond({
                    id: null,
                    error: transformTRPCResponse.getErrorShape({
                        config: router._def._config,
                        error,
                        type: 'unknown',
                        path: undefined,
                        input: undefined,
                        ctx
                    })
                });
                // close in next tick
                (global.setImmediate ?? global.setTimeout)(()=>{
                    client.close();
                });
            }
        }
        await createContextAsync();
    });
    return {
        broadcastReconnectNotification: ()=>{
            const response = {
                id: null,
                method: 'reconnect'
            };
            const data = JSON.stringify(response);
            for (const client of wss.clients){
                if (client.readyState === 1 /* ws.OPEN */ ) {
                    client.send(data);
                }
            }
        }
    };
}

exports.applyWSSHandler = applyWSSHandler;
