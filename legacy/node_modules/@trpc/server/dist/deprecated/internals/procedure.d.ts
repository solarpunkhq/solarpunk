import type { InferLast } from '../../types';
import type { ProcedureType } from '../router';
import type { MiddlewareFunction } from './middlewares';
export type ProcedureParserZodEsque<TInput, TOutput> = {
    _input: TInput;
    _output: TOutput;
};
export type ProcedureParserMyZodEsque<TType> = {
    parse: (input: any) => TType;
};
export type ProcedureParserSuperstructEsque<TType> = {
    create: (input: unknown) => TType;
};
export type ProcedureParserCustomValidatorEsque<TType> = (input: unknown) => Promise<TType> | TType;
export type ProcedureParserYupEsque<TType> = {
    validateSync: (input: unknown) => TType;
};
export type ProcedureParserWithInputOutput<TInput, TOutput> = ProcedureParserZodEsque<TInput, TOutput>;
export type ProcedureParser<TType> = ProcedureParserCustomValidatorEsque<TType> | ProcedureParserMyZodEsque<TType> | ProcedureParserSuperstructEsque<TType> | ProcedureParserYupEsque<TType>;
export type ProcedureResolver<TContext, TInput, TOutput> = (opts: {
    ctx: TContext;
    input: TInput;
    type: ProcedureType;
}) => Promise<TOutput> | TOutput;
interface ProcedureOptions<TContext, TMeta, TInput, TOutput, TParsedOutput> {
    middlewares: MiddlewareFunction<any, any, any>[];
    resolver: ProcedureResolver<TContext, TInput, TOutput>;
    inputParser: ProcedureParser<TInput>;
    outputParser: ProcedureParser<TParsedOutput>;
    meta: TMeta;
}
/**
 * @internal
 * @deprecated
 */
export interface ProcedureCallOptions<TContext> {
    ctx: TContext;
    rawInput: unknown;
    path: string;
    type: ProcedureType;
}
/**
 * @internal
 * @deprecated
 */
export declare class Procedure<TInputContext, TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput, TFinalOutput = unknown extends TParsedOutput ? TOutput : TParsedOutput> {
    private middlewares;
    private resolver;
    private readonly inputParser;
    private parseInputFn;
    private readonly outputParser;
    private parseOutputFn;
    readonly meta: TMeta;
    constructor(opts: ProcedureOptions<TContext, TMeta, TParsedInput, TOutput, TFinalOutput>);
    _def(): {
        middlewares: readonly MiddlewareFunction<any, any, any>[];
        resolver: ProcedureResolver<TContext, TParsedInput, TOutput>;
        inputParser: ProcedureParser<TParsedInput>;
        outputParser: ProcedureParser<TFinalOutput>;
        meta: TMeta;
    };
    private parseInput;
    private parseOutput;
    /**
     * Trigger middlewares in order, parse raw input, call resolver & parse raw output
     * @internal
     */
    call(opts: ProcedureCallOptions<TInputContext>): Promise<TFinalOutput>;
    /**
     * Create new procedure with passed middlewares
     * @param middlewares
     */
    inheritMiddlewares(middlewares: MiddlewareFunction<TInputContext, TContext, TMeta>[]): this;
}
export type CreateProcedureWithInput<TContext, TMeta, TInput, TOutput> = {
    input: ProcedureParser<TInput>;
    output?: ProcedureParser<TOutput>;
    meta?: TMeta;
    resolve: ProcedureResolver<TContext, TInput, InferLast<TOutput>>;
};
export type CreateProcedureWithInputOutputParser<TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput> = {
    input: ProcedureParserWithInputOutput<TInput, TParsedInput>;
    output?: ProcedureParserWithInputOutput<TOutput, TParsedOutput>;
    meta?: TMeta;
    resolve: ProcedureResolver<TContext, TParsedInput, InferLast<TOutput>>;
};
export type CreateProcedureWithoutInput<TContext, TMeta, TOutput, TParsedOutput> = {
    output?: ProcedureParser<TOutput> | ProcedureParserWithInputOutput<TOutput, TParsedOutput>;
    meta?: TMeta;
    resolve: ProcedureResolver<TContext, undefined, InferLast<TOutput>>;
};
export type CreateProcedureOptions<TContext, TMeta = undefined, TInput = undefined, TParsedInput = undefined, TOutput = undefined, TParsedOutput = undefined> = CreateProcedureWithInput<TContext, TMeta, TInput, TOutput> | CreateProcedureWithInputOutputParser<TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput> | CreateProcedureWithoutInput<TContext, TMeta, TOutput, TParsedOutput>;
export declare function createProcedure<TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput>(opts: CreateProcedureOptions<TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput>): Procedure<unknown, TContext, TMeta, TInput, TParsedInput, TOutput, TParsedOutput>;
export type inferProcedureFromOptions<TInputContext, TOptions extends CreateProcedureOptions<any, any, any, any, any, any>> = TOptions extends CreateProcedureOptions<infer TContext, infer TMeta, infer TInput, infer TParsedInput, infer TOutput, infer TParsedOutput> ? Procedure<TInputContext, TContext, TMeta, unknown extends TInput ? undefined : TInput, unknown extends TParsedInput ? undefined : TParsedInput, TOutput, TParsedOutput> : never;
export {};
//# sourceMappingURL=procedure.d.ts.map