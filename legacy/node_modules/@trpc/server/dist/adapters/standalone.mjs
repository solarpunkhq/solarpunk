import http from 'node:http';
import { t as toURL } from '../toURL-8f0ea228.mjs';
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

function createHTTPHandler(opts) {
    return async (req, res)=>{
        const url = toURL(req.url);
        // get procedure path and remove the leading slash
        // /procedure -> procedure
        const path = url.pathname.slice(1);
        await nodeHTTPRequestHandler({
            // FIXME: no typecasting should be needed here
            ...opts,
            req,
            res,
            path
        });
    };
}
function createHTTPServer(opts) {
    const handler = createHTTPHandler(opts);
    const server = http.createServer((req, res)=>handler(req, res));
    return {
        server,
        listen: (port, hostname)=>{
            server.listen(port, hostname);
            const actualPort = port === 0 ? server.address().port : port;
            return {
                port: actualPort
            };
        }
    };
}

export { createHTTPHandler, createHTTPServer };
