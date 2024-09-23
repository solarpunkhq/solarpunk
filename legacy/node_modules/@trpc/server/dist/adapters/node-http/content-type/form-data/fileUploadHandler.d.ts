/// <reference types="node" />
/// <reference types="node" />
import type { UploadHandler } from './uploadHandler';
export declare function readableStreamToString(stream: ReadableStream<Uint8Array>, encoding?: BufferEncoding): Promise<string>;
export type FileUploadHandlerFilterArgs = {
    filename: string;
    contentType: string;
    name: string;
};
export type FileUploadHandlerPathResolverArgs = {
    filename: string;
    contentType: string;
    name: string;
};
/**
 * Chooses the path of the file to be uploaded. If a string is not
 * returned the file will not be written.
 */
export type FileUploadHandlerPathResolver = (args: FileUploadHandlerPathResolverArgs) => string | undefined;
export type FileUploadHandlerOptions = {
    /**
     * Avoid file conflicts by appending a count on the end of the filename
     * if it already exists on disk. Defaults to `true`.
     */
    avoidFileConflicts?: boolean;
    /**
     * The directory to write the upload.
     */
    directory?: FileUploadHandlerPathResolver | string;
    /**
     * The name of the file in the directory. Can be a relative path, the directory
     * structure will be created if it does not exist.
     */
    file?: FileUploadHandlerPathResolver;
    /**
     * The maximum upload size allowed. If the size is exceeded an error will be thrown.
     * Defaults to 3000000B (3MB).
     */
    maxPartSize?: number;
    /**
     *
     * @param filename
     * @param contentType
     * @param name
     */
    filter?(args: FileUploadHandlerFilterArgs): Promise<boolean> | boolean;
};
export declare function createFileUploadHandler({ directory, avoidFileConflicts, file, filter, maxPartSize, }?: FileUploadHandlerOptions): UploadHandler;
export declare class NodeOnDiskFile {
    private filepath;
    type: string;
    private slicer?;
    name: string;
    lastModified: number;
    webkitRelativePath: string;
    constructor(filepath: string, type: string, slicer?: {
        start: number;
        end: number;
    } | undefined);
    get size(): number;
    slice(start?: number, end?: number, type?: string): NodeOnDiskFile;
    arrayBuffer(): Promise<ArrayBuffer>;
    stream(): ReadableStream<any>;
    stream(): NodeJS.ReadableStream;
    text(): Promise<string>;
    readonly [Symbol.toStringTag] = "File";
    remove(): Promise<void>;
    getFilePath(): string;
}
//# sourceMappingURL=fileUploadHandler.d.ts.map