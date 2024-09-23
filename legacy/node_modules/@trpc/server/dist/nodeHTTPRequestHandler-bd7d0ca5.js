import './index-41f6f0b3.js';
import { r as resolveHTTPResponse } from './resolveHTTPResponse-9f105277.js';
import { g as getBatchStreamFormatter } from './batchStreamFormatter-2c1405a1.js';
import { nodeHTTPJSONContentTypeHandler } from './adapters/node-http/content-type/json/index.js';

const defaultJSONContentTypeHandler = nodeHTTPJSONContentTypeHandler();
async function nodeHTTPRequestHandler(opts) {
    const handleViaMiddleware = opts.middleware ?? ((_req, _res, next) => next());
    return handleViaMiddleware(opts.req, opts.res, async (err) => {
        if (err)
            throw err;
        const createContext = async () => {
            return await opts.createContext?.(opts);
        };
        const query = opts.req.query
            ? new URLSearchParams(opts.req.query)
            : new URLSearchParams(opts.req.url.split('?')[1]);
        const jsonContentTypeHandler = defaultJSONContentTypeHandler;
        const contentTypeHandlers = opts.experimental_contentTypeHandlers ?? [
            jsonContentTypeHandler,
        ];
        const contentTypeHandler = contentTypeHandlers.find((handler) => handler.isMatch({
            ...opts,
            query,
        })) ??
            // fallback to json
            jsonContentTypeHandler;
        const bodyResult = await contentTypeHandler.getBody({
            ...opts,
            query,
        });
        const req = {
            method: opts.req.method,
            headers: opts.req.headers,
            query,
            body: bodyResult.ok ? bodyResult.data : undefined,
        };
        let isStream = false;
        let formatter;
        const unstable_onHead = (head, isStreaming) => {
            if ('status' in head &&
                (!opts.res.statusCode || opts.res.statusCode === 200)) {
                opts.res.statusCode = head.status;
            }
            for (const [key, value] of Object.entries(head.headers ?? {})) {
                /* istanbul ignore if -- @preserve */
                if (typeof value === 'undefined') {
                    continue;
                }
                opts.res.setHeader(key, value);
            }
            if (isStreaming) {
                opts.res.setHeader('Transfer-Encoding', 'chunked');
                const vary = opts.res.getHeader('Vary');
                opts.res.setHeader('Vary', vary ? 'trpc-batch-mode, ' + vary : 'trpc-batch-mode');
                isStream = true;
                formatter = getBatchStreamFormatter();
                opts.res.flushHeaders();
            }
        };
        const unstable_onChunk = ([index, string]) => {
            if (index === -1) {
                /**
                 * Full response, no streaming. This can happen
                 * - if the response is an error
                 * - if response is empty (HEAD request)
                 */
                opts.res.end(string);
            }
            else {
                opts.res.write(formatter(index, string));
                opts.res.flush?.();
            }
        };
        await resolveHTTPResponse({
            batching: opts.batching,
            responseMeta: opts.responseMeta,
            path: opts.path,
            createContext,
            router: opts.router,
            req,
            error: bodyResult.ok ? null : bodyResult.error,
            preprocessedBody: bodyResult.ok ? bodyResult.preprocessed : false,
            onError(o) {
                opts?.onError?.({
                    ...o,
                    req: opts.req,
                });
            },
            contentTypeHandler,
            unstable_onHead,
            unstable_onChunk,
        });
        if (isStream) {
            opts.res.write(formatter.end());
            opts.res.end();
        }
        return opts.res;
    });
}

export { nodeHTTPRequestHandler as n };
