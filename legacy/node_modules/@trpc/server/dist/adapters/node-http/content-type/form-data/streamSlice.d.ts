/// <reference types="node" />
/// <reference types="node" />
import type { TransformCallback } from 'node:stream';
import { Transform } from 'node:stream';
declare class SliceStream extends Transform {
    private startIndex;
    private endIndex;
    private indexOffset;
    private emitUp;
    private emitDown;
    constructor(startIndex?: number, endIndex?: number);
    _transform(chunk: any, _: BufferEncoding, done: TransformCallback): void;
}
export declare function streamSlice(startIndex?: number, endIndex?: number): SliceStream;
export {};
//# sourceMappingURL=streamSlice.d.ts.map