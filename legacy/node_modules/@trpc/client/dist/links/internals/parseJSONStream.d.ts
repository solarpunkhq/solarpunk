/// <reference types="node" />
import type { WebReadableStreamEsque } from '../../internals/types';
import type { HTTPHeaders } from '../types';
import type { HTTPBaseRequestOptions, HTTPResult } from './httpUtils';
import type { TextDecoderEsque } from './streamingUtils';
/**
 * @internal
 * @description Take a stream of bytes and call `onLine` with
 * a JSON object for each line in the stream. Expected stream
 * format is:
 * ```json
 * {"1": {...}
 * ,"0": {...}
 * }
 * ```
 */
export declare function parseJSONStream<TReturn>(opts: {
    /**
     * As given by `(await fetch(url)).body`
     */
    readableStream: NodeJS.ReadableStream | WebReadableStreamEsque;
    /**
     * Called for each line of the stream
     */
    onSingle: (index: number, res: TReturn) => void;
    /**
     * Transform text into useable data object (defaults to JSON.parse)
     */
    parse?: (text: string) => TReturn;
    signal?: AbortSignal;
    textDecoder: TextDecoderEsque;
}): Promise<void>;
export declare const streamingJsonHttpRequester: (opts: HTTPBaseRequestOptions & {
    headers: () => HTTPHeaders | Promise<HTTPHeaders>;
    textDecoder: TextDecoderEsque;
}, onSingle: (index: number, res: HTTPResult) => void) => {
    cancel: () => void | undefined;
    promise: Promise<void>;
};
//# sourceMappingURL=parseJSONStream.d.ts.map