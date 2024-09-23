import type { APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyResult, APIGatewayProxyStructuredResultV2, Context as APIGWContext } from 'aws-lambda';
import type { AnyRouter, inferRouterContext } from '../../core';
import type { HTTPHeaders, ResponseMetaFn } from '../../http/internals/types';
import type { OnErrorFunction } from '../../internals/types';
export type APIGatewayEvent = APIGatewayProxyEvent | APIGatewayProxyEventV2;
export type APIGatewayResult = APIGatewayProxyResult | APIGatewayProxyStructuredResultV2;
export type CreateAWSLambdaContextOptions<TEvent extends APIGatewayEvent> = {
    event: TEvent;
    context: APIGWContext;
};
export type AWSLambdaCreateContextFn<TRouter extends AnyRouter, TEvent extends APIGatewayEvent> = ({ event, context, }: CreateAWSLambdaContextOptions<TEvent>) => inferRouterContext<TRouter> | Promise<inferRouterContext<TRouter>>;
export type AWSLambdaOptions<TRouter extends AnyRouter, TEvent extends APIGatewayEvent> = {
    router: TRouter;
    batching?: {
        enabled: boolean;
    };
    onError?: OnErrorFunction<TRouter, TEvent>;
    responseMeta?: ResponseMetaFn<TRouter>;
} & ({
    /**
     * @link https://trpc.io/docs/context
     **/
    createContext: AWSLambdaCreateContextFn<TRouter, TEvent>;
} | {
    /**
     * @link https://trpc.io/docs/context
     **/
    createContext?: AWSLambdaCreateContextFn<TRouter, TEvent>;
});
export declare function isPayloadV1(event: APIGatewayEvent): event is APIGatewayProxyEvent;
export declare function isPayloadV2(event: APIGatewayEvent): event is APIGatewayProxyEventV2;
export declare function getHTTPMethod(event: APIGatewayEvent): string;
export declare function getPath(event: APIGatewayEvent): string;
export declare function transformHeaders(headers: HTTPHeaders): APIGatewayResult['headers'];
export type DefinedAPIGatewayPayloadFormats = '1.0' | '2.0';
export type APIGatewayPayloadFormatVersion = DefinedAPIGatewayPayloadFormats | 'custom';
export declare const UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE: string;
//# sourceMappingURL=utils.d.ts.map