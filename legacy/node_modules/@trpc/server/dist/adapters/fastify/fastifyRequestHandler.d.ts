import type { FastifyReply, FastifyRequest } from 'fastify';
import type { AnyRouter } from '../../core';
import type { HTTPBaseHandlerOptions } from '../../http';
import type { NodeHTTPCreateContextOption } from '../node-http';
export type FastifyHandlerOptions<TRouter extends AnyRouter, TRequest extends FastifyRequest, TResponse extends FastifyReply> = HTTPBaseHandlerOptions<TRouter, TRequest> & NodeHTTPCreateContextOption<TRouter, TRequest, TResponse>;
type FastifyRequestHandlerOptions<TRouter extends AnyRouter, TRequest extends FastifyRequest, TResponse extends FastifyReply> = FastifyHandlerOptions<TRouter, TRequest, TResponse> & {
    req: TRequest;
    res: TResponse;
    path: string;
};
export declare function fastifyRequestHandler<TRouter extends AnyRouter, TRequest extends FastifyRequest, TResponse extends FastifyReply>(opts: FastifyRequestHandlerOptions<TRouter, TRequest, TResponse>): Promise<never>;
export {};
//# sourceMappingURL=fastifyRequestHandler.d.ts.map