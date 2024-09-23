import type { AnyRouter, inferRouterError } from '@trpc/server';
import type { Observer, UnsubscribeFn } from '@trpc/server/observable';
import type { TRPCResponseMessage } from '@trpc/server/rpc';
import { retryDelay } from '../internals/retryDelay';
import { TRPCClientError } from '../TRPCClientError';
import type { Operation, TRPCLink } from './types';
type WSCallbackResult<TRouter extends AnyRouter, TOutput> = TRPCResponseMessage<TOutput, inferRouterError<TRouter>>;
type WSCallbackObserver<TRouter extends AnyRouter, TOutput> = Observer<WSCallbackResult<TRouter, TOutput>, TRPCClientError<TRouter>>;
export interface WebSocketClientOptions {
    url: string | (() => string);
    WebSocket?: typeof WebSocket;
    retryDelayMs?: typeof retryDelay;
    onOpen?: () => void;
    onClose?: (cause?: {
        code?: number;
    }) => void;
}
export declare function createWSClient(opts: WebSocketClientOptions): {
    close: () => void;
    request: (op: Operation, callbacks: WSCallbackObserver<AnyRouter, unknown>) => UnsubscribeFn;
    getConnection(): WebSocket;
};
export type TRPCWebSocketClient = ReturnType<typeof createWSClient>;
export interface WebSocketLinkOptions {
    client: TRPCWebSocketClient;
}
/**
 * @see https://trpc.io/docs/client/links/wsLink
 */
export declare function wsLink<TRouter extends AnyRouter>(opts: WebSocketLinkOptions): TRPCLink<TRouter>;
export {};
//# sourceMappingURL=wsLink.d.ts.map