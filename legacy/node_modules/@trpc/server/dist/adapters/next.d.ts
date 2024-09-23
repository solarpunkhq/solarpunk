import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next/types';
import type { AnyRouter } from '../core';
import type { NodeHTTPCreateContextFnOptions, NodeHTTPHandlerOptions } from './node-http';
export type CreateNextContextOptions = NodeHTTPCreateContextFnOptions<NextApiRequest, NextApiResponse>;
export declare function createNextApiHandler<TRouter extends AnyRouter>(opts: NodeHTTPHandlerOptions<TRouter, NextApiRequest, NextApiResponse>): NextApiHandler;
//# sourceMappingURL=next.d.ts.map