/**
 * Copyright 2021 Remix Software Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import type { NodeHTTPRequest } from '../../types';
import type { UploadHandler } from './uploadHandler';
/**
 * Allows you to handle multipart forms (file uploads) for your app.
 * Request body parts with a 'filename' property will be treated as files.
 * The rest will be treated as text.
 * @param request The incoming Node HTTP request
 * @param uploadHandler A function that handles file uploads and returns a value to be used in the request body. If uploaded to disk, the returned value is a NodeOnDiskFile. If uploaded to memory, the returned value is a File.
 * @param maxBodySize The maximum size of the request body in bytes. Defaults to Infinity.
 *
 * @see https://remix.run/utils/parse-multipart-form-data
 */
declare function parseMultipartFormData(request: NodeHTTPRequest, uploadHandler: UploadHandler, maxBodySize?: number): Promise<FormData>;
declare function isMultipartFormDataRequest(req: NodeHTTPRequest): boolean;
export declare const nodeHTTPFormDataContentTypeHandler: <TRequest extends NodeHTTPRequest, TResponse extends import("../../types").NodeHTTPResponse>() => import("../../internals/contentType").NodeHTTPContentTypeHandler<TRequest, TResponse>;
export { parseMultipartFormData as experimental_parseMultipartFormData };
export { createMemoryUploadHandler as experimental_createMemoryUploadHandler } from './memoryUploadHandler';
export { createFileUploadHandler as experimental_createFileUploadHandler, NodeOnDiskFile as experimental_NodeOnDiskFile, } from './fileUploadHandler';
export { composeUploadHandlers as experimental_composeUploadHandlers, MaxPartSizeExceededError, MaxBodySizeExceededError, } from './uploadHandler';
export { type UploadHandler } from './uploadHandler';
export { isMultipartFormDataRequest as experimental_isMultipartFormDataRequest };
//# sourceMappingURL=index.d.ts.map