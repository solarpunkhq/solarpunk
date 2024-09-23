/// <reference types="node" />
import http from 'http';
import type { AnyRouter } from '../core';
import type { NodeHTTPCreateContextFnOptions, NodeHTTPHandlerOptions } from './node-http';
export type CreateHTTPHandlerOptions<TRouter extends AnyRouter> = NodeHTTPHandlerOptions<TRouter, http.IncomingMessage, http.ServerResponse>;
export type CreateHTTPContextOptions = NodeHTTPCreateContextFnOptions<http.IncomingMessage, http.ServerResponse>;
export declare function createHTTPHandler<TRouter extends AnyRouter>(opts: CreateHTTPHandlerOptions<TRouter>): (req: http.IncomingMessage, res: http.ServerResponse) => Promise<void>;
export declare function createHTTPServer<TRouter extends AnyRouter>(opts: CreateHTTPHandlerOptions<TRouter>): {
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    listen: (port?: number, hostname?: string) => {
        port: number | undefined;
    };
};
//# sourceMappingURL=standalone.d.ts.map