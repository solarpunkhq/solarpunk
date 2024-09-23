'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var contentType$1 = require('../../../../contentType-1de645c8.js');
var contentType = require('../../../../contentType-8c16408e.js');
var TRPCError = require('../../../../TRPCError-ca37bf1a.js');
require('../../../../getCauseFromUnknown-d535264a.js');

async function getPostBody(opts) {
    const { req , maxBodySize =Infinity  } = opts;
    return new Promise((resolve)=>{
        if ('body' in req) {
            resolve({
                ok: true,
                data: req.body,
                // If the request headers specifies a content-type, we assume that the body has been preprocessed
                preprocessed: !!req.headers['content-type']?.startsWith('application/json')
            });
            return;
        }
        let body = '';
        let hasBody = false;
        req.on('data', function(data) {
            body += data;
            hasBody = true;
            if (body.length > maxBodySize) {
                resolve({
                    ok: false,
                    error: new TRPCError.TRPCError({
                        code: 'PAYLOAD_TOO_LARGE'
                    })
                });
            }
        });
        req.on('end', ()=>{
            resolve({
                ok: true,
                data: hasBody ? body : undefined,
                preprocessed: false
            });
        });
    });
}

const nodeHTTPJSONContentTypeHandler = contentType.createNodeHTTPContentTypeHandler({
    isMatch (opts) {
        return !!opts.req.headers['content-type']?.startsWith('application/json');
    },
    getBody: getPostBody,
    getInputs: contentType$1.getJsonContentTypeInputs
});

exports.nodeHTTPJSONContentTypeHandler = nodeHTTPJSONContentTypeHandler;
