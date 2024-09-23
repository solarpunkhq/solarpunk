/// <reference lib="dom.iterable" />
import type { AnyRouter } from '@trpc/server';
import type { TRPCClientError } from '..';
import type { Operation, OperationResultEnvelope, TRPCLink } from './types';
type ConsoleEsque = {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
};
type EnableFnOptions<TRouter extends AnyRouter> = {
    direction: 'down';
    result: OperationResultEnvelope<unknown> | TRPCClientError<TRouter>;
} | (Operation & {
    direction: 'up';
});
type EnabledFn<TRouter extends AnyRouter> = (opts: EnableFnOptions<TRouter>) => boolean;
type LoggerLinkFnOptions<TRouter extends AnyRouter> = Operation & ({
    /**
     * Request result
     */
    direction: 'down';
    result: OperationResultEnvelope<unknown> | TRPCClientError<TRouter>;
    elapsedMs: number;
} | {
    /**
     * Request was just initialized
     */
    direction: 'up';
});
type LoggerLinkFn<TRouter extends AnyRouter> = (opts: LoggerLinkFnOptions<TRouter>) => void;
export interface LoggerLinkOptions<TRouter extends AnyRouter> {
    logger?: LoggerLinkFn<TRouter>;
    enabled?: EnabledFn<TRouter>;
    /**
     * Used in the built-in defaultLogger
     */
    console?: ConsoleEsque;
    /**
     * Color mode
     * @default typeof window === 'undefined' ? 'ansi' : 'css'
     */
    colorMode?: 'ansi' | 'css';
}
/**
 * @see https://trpc.io/docs/client/links/loggerLink
 */
export declare function loggerLink<TRouter extends AnyRouter = AnyRouter>(opts?: LoggerLinkOptions<TRouter>): TRPCLink<TRouter>;
export {};
//# sourceMappingURL=loggerLink.d.ts.map