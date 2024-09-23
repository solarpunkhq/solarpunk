import type { APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyResult, APIGatewayProxyStructuredResultV2, Context as APIGWContext } from 'aws-lambda';
import type { AnyRouter } from '../../core';
import type { APIGatewayEvent, AWSLambdaOptions } from './utils';
export * from './utils';
/** 1:1 mapping of v1 or v2 input events, deduces which is which.
 * @internal
 **/
type inferAPIGWReturn<TType> = TType extends APIGatewayProxyEvent ? APIGatewayProxyResult : TType extends APIGatewayProxyEventV2 ? APIGatewayProxyStructuredResultV2 : never;
export declare function awsLambdaRequestHandler<TRouter extends AnyRouter, TEvent extends APIGatewayEvent, TResult extends inferAPIGWReturn<TEvent>>(opts: AWSLambdaOptions<TRouter, TEvent>): (event: TEvent, context: APIGWContext) => Promise<TResult>;
//# sourceMappingURL=index.d.ts.map