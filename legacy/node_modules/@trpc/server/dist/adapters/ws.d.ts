/// <reference types="node" />
/// <reference types="node" />
import type { IncomingMessage } from 'http';
import type { WebSocket, WebSocketServer } from 'ws';
import type { AnyRouter } from '../core';
import type { BaseHandlerOptions } from '../internals/types';
import type { NodeHTTPCreateContextFnOptions, NodeHTTPCreateContextOption } from './node-http';
/**
 * Web socket server handler
 */
export type WSSHandlerOptions<TRouter extends AnyRouter> = BaseHandlerOptions<TRouter, IncomingMessage> & NodeHTTPCreateContextOption<TRouter, IncomingMessage, WebSocket> & {
    wss: WebSocketServer;
    process?: NodeJS.Process;
};
export type CreateWSSContextFnOptions = NodeHTTPCreateContextFnOptions<IncomingMessage, WebSocket>;
export declare function applyWSSHandler<TRouter extends AnyRouter>(opts: WSSHandlerOptions<TRouter>): {
    broadcastReconnectNotification: () => void;
};
//# sourceMappingURL=ws.d.ts.map