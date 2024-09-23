'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var http = require('node:http');
var toURL = require('../toURL-b64256fe.js');
var nodeHTTPRequestHandler = require('../nodeHTTPRequestHandler-ad3e4860.js');
require('../index-784ff647.js');
require('../codes-87f6824b.js');
require('../resolveHTTPResponse-b7a8a1c9.js');
require('../config-194bdd43.js');
require('../TRPCError-ca37bf1a.js');
require('../getCauseFromUnknown-d535264a.js');
require('../transformTRPCResponse-e65f34e9.js');
require('../contentType-1de645c8.js');
require('../batchStreamFormatter-93cdcdd4.js');
require('./node-http/content-type/json/index.js');
require('../contentType-8c16408e.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var http__default = /*#__PURE__*/_interopDefaultLegacy(http);

function createHTTPHandler(opts) {
    return async (req, res)=>{
        const url = toURL.toURL(req.url);
        // get procedure path and remove the leading slash
        // /procedure -> procedure
        const path = url.pathname.slice(1);
        await nodeHTTPRequestHandler.nodeHTTPRequestHandler({
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
    const server = http__default["default"].createServer((req, res)=>handler(req, res));
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

exports.createHTTPHandler = createHTTPHandler;
exports.createHTTPServer = createHTTPServer;
