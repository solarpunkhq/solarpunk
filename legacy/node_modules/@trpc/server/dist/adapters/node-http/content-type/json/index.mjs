import { g as getJsonContentTypeInputs } from '../../../../contentType-9fd995d3.mjs';
import { c as createNodeHTTPContentTypeHandler } from '../../../../contentType-3194ed5f.mjs';
import { T as TRPCError } from '../../../../TRPCError-98d44758.mjs';
import '../../../../getCauseFromUnknown-2d66414a.mjs';

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
                    error: new TRPCError({
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

const nodeHTTPJSONContentTypeHandler = createNodeHTTPContentTypeHandler({
    isMatch (opts) {
        return !!opts.req.headers['content-type']?.startsWith('application/json');
    },
    getBody: getPostBody,
    getInputs: getJsonContentTypeInputs
});

export { nodeHTTPJSONContentTypeHandler };
