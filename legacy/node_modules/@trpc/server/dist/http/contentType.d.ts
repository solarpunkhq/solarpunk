import type { AnyRouter } from '../core';
import { TRPCError } from '../error/TRPCError';
import type { MaybePromise } from '../types';
import type { HTTPRequest } from './types';
type GetInputs = (opts: {
    req: HTTPRequest;
    isBatchCall: boolean;
    router: AnyRouter;
    preprocessedBody: boolean;
}) => MaybePromise<Record<number, unknown>>;
export type BodyResult = {
    ok: true;
    data: unknown;
    /**
     * If the HTTP handler has already parsed the body
     */
    preprocessed: boolean;
} | {
    ok: false;
    error: TRPCError;
};
export type BaseContentTypeHandler<TOptions> = {
    isMatch(opts: TOptions): boolean;
    getBody: (opts: TOptions) => MaybePromise<BodyResult>;
    getInputs: GetInputs;
};
export declare const getJsonContentTypeInputs: GetInputs;
export {};
//# sourceMappingURL=contentType.d.ts.map