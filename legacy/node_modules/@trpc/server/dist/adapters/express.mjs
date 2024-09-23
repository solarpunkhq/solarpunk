import { n as nodeHTTPRequestHandler } from '../nodeHTTPRequestHandler-97af83bc.mjs';
import '../index-f91d720c.mjs';
import '../codes-c924c3db.mjs';
import '../resolveHTTPResponse-2fc435bb.mjs';
import '../config-d5fdbd39.mjs';
import '../TRPCError-98d44758.mjs';
import '../getCauseFromUnknown-2d66414a.mjs';
import '../transformTRPCResponse-1153b421.mjs';
import '../contentType-9fd995d3.mjs';
import '../batchStreamFormatter-fc1ffb26.mjs';
import './node-http/content-type/json/index.mjs';
import '../contentType-3194ed5f.mjs';

function createExpressMiddleware(opts) {
    return async (req, res)=>{
        const endpoint = req.path.slice(1);
        await nodeHTTPRequestHandler({
            // FIXME: no typecasting should be needed here
            ...opts,
            req,
            res,
            path: endpoint
        });
    };
}

export { createExpressMiddleware };
