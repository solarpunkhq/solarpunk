import type { AnyRouter } from '../../../core';
import type { BaseContentTypeHandler } from '../../../http/contentType';
import type { NodeHTTPRequest, NodeHTTPRequestHandlerOptions, NodeHTTPResponse } from '../types';
export interface NodeHTTPContentTypeHandler<TRequest extends NodeHTTPRequest, TResponse extends NodeHTTPResponse> extends BaseContentTypeHandler<NodeHTTPRequestHandlerOptions<AnyRouter, TRequest, TResponse> & {
    query: URLSearchParams;
}> {
}
export declare function createNodeHTTPContentTypeHandler(contentTypeHandler: NodeHTTPContentTypeHandler<NodeHTTPRequest, NodeHTTPResponse>): <TRequest extends NodeHTTPRequest, TResponse extends NodeHTTPResponse>() => NodeHTTPContentTypeHandler<TRequest, TResponse>;
//# sourceMappingURL=contentType.d.ts.map