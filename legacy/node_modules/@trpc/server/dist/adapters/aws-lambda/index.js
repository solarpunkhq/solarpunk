'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TRPCError = require('../../TRPCError-ca37bf1a.js');
require('../../index-784ff647.js');
require('../../codes-87f6824b.js');
require('../../config-194bdd43.js');
var resolveHTTPResponse = require('../../resolveHTTPResponse-b7a8a1c9.js');
require('../../getCauseFromUnknown-d535264a.js');
require('../../transformTRPCResponse-e65f34e9.js');
require('../../contentType-1de645c8.js');

function isPayloadV1(event) {
    return determinePayloadFormat(event) == '1.0';
}
function isPayloadV2(event) {
    return determinePayloadFormat(event) == '2.0';
}
function determinePayloadFormat(event) {
    // https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
    // According to AWS support, version is is extracted from the version property in the event.
    // If there is no version property, then the version is implied as 1.0
    const unknownEvent = event;
    if (typeof unknownEvent.version === 'undefined') {
        return '1.0';
    } else {
        if ([
            '1.0',
            '2.0'
        ].includes(unknownEvent.version)) {
            return unknownEvent.version;
        } else {
            return 'custom';
        }
    }
}
function getHTTPMethod(event) {
    if (isPayloadV1(event)) {
        return event.httpMethod;
    }
    if (isPayloadV2(event)) {
        return event.requestContext.http.method;
    }
    throw new TRPCError.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE
    });
}
function getPath(event) {
    if (isPayloadV1(event)) {
        if (!event.pathParameters) {
            // Then this event was not triggered by a resource denoted with {proxy+}
            return event.path.split('/').pop() ?? '';
        }
        const matches = event.resource.matchAll(/\{(.*?)\}/g);
        for (const match of matches){
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const group = match[1];
            if (group.includes('+') && event.pathParameters) {
                return event.pathParameters[group.replace('+', '')] ?? '';
            }
        }
        return event.path.slice(1);
    }
    if (isPayloadV2(event)) {
        const matches1 = event.routeKey.matchAll(/\{(.*?)\}/g);
        for (const match1 of matches1){
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const group1 = match1[1];
            if (group1.includes('+') && event.pathParameters) {
                return event.pathParameters[group1.replace('+', '')] ?? '';
            }
        }
        return event.rawPath.slice(1);
    }
    throw new TRPCError.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE
    });
}
function transformHeaders(headers) {
    const obj = {};
    for (const [key, value] of Object.entries(headers)){
        if (typeof value === 'undefined') {
            continue;
        }
        obj[key] = Array.isArray(value) ? value.join(',') : value;
    }
    return obj;
}
const UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE = 'Custom payload format version not handled by this adapter. Please use either 1.0 or 2.0. More information here' + 'https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html';

function lambdaEventToHTTPRequest(event) {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(event.queryStringParameters ?? {})){
        if (typeof value !== 'undefined') {
            query.append(key, value);
        }
    }
    let body;
    if (event.body && event.isBase64Encoded) {
        body = Buffer.from(event.body, 'base64').toString('utf8');
    } else {
        body = event.body;
    }
    return {
        method: getHTTPMethod(event),
        query: query,
        headers: event.headers,
        body: body
    };
}
function tRPCOutputToAPIGatewayOutput(event, response) {
    if (isPayloadV1(event)) {
        const resp = {
            statusCode: response.status,
            body: response.body ?? '',
            headers: transformHeaders(response.headers ?? {})
        };
        return resp;
    } else if (isPayloadV2(event)) {
        const resp1 = {
            statusCode: response.status,
            body: response.body ?? undefined,
            headers: transformHeaders(response.headers ?? {})
        };
        return resp1;
    } else {
        throw new TRPCError.TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE
        });
    }
}
function awsLambdaRequestHandler(opts) {
    return async (event, context)=>{
        const req = lambdaEventToHTTPRequest(event);
        const path = getPath(event);
        const createContext = async function _createContext() {
            return await opts.createContext?.({
                event,
                context
            });
        };
        const response = await resolveHTTPResponse.resolveHTTPResponse({
            router: opts.router,
            batching: opts.batching,
            responseMeta: opts?.responseMeta,
            createContext,
            req,
            path,
            error: null,
            onError (o) {
                opts?.onError?.({
                    ...o,
                    req: event
                });
            }
        });
        return tRPCOutputToAPIGatewayOutput(event, response);
    };
}

exports.UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE = UNKNOWN_PAYLOAD_FORMAT_VERSION_ERROR_MESSAGE;
exports.awsLambdaRequestHandler = awsLambdaRequestHandler;
exports.getHTTPMethod = getHTTPMethod;
exports.getPath = getPath;
exports.isPayloadV1 = isPayloadV1;
exports.isPayloadV2 = isPayloadV2;
exports.transformHeaders = transformHeaders;
