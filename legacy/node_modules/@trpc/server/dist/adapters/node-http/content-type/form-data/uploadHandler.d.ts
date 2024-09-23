import type { NodeOnDiskFile } from './fileUploadHandler';
/**
 * @see https://github.com/remix-run/remix/blob/0bcb4a304dd2f08f6032c3bf0c3aa7eb5b976901/packages/remix-server-runtime/formData.ts
 */
export type UploadHandlerPart = {
    name: string;
    filename?: string;
    contentType: string;
    data: AsyncIterable<Uint8Array>;
};
export type UploadHandler = (part: Required<UploadHandlerPart>) => Promise<File | NodeOnDiskFile | null | undefined>;
export declare function composeUploadHandlers(...handlers: UploadHandler[]): UploadHandler;
export declare class MaxPartSizeExceededError extends Error {
    field: string;
    maxBytes: number;
    constructor(field: string, maxBytes: number);
}
export declare class MaxBodySizeExceededError extends Error {
    maxBytes: number;
    constructor(maxBytes: number);
}
export type MemoryUploadHandlerFilterArgs = {
    filename?: string;
    contentType: string;
    name: string;
};
export type MemoryUploadHandlerOptions = {
    /**
     * The maximum upload size allowed. If the size is exceeded an error will be thrown.
     * Defaults to 3000000B (3MB).
     */
    maxPartSize?: number;
    /**
     *
     * @param filename
     * @param mimetype
     * @param encoding
     */
    filter?(args: MemoryUploadHandlerFilterArgs): Promise<boolean> | boolean;
};
/**
 * @see
 */
export declare function createMemoryUploadHandler({ filter, maxPartSize, }?: MemoryUploadHandlerOptions): UploadHandler;
//# sourceMappingURL=uploadHandler.d.ts.map