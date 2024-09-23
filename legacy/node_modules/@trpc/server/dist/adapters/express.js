'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function createExpressMiddleware(opts) {
    return async (req, res)=>{
        const endpoint = req.path.slice(1);
        await nodeHTTPRequestHandler.nodeHTTPRequestHandler({
            // FIXME: no typecasting should be needed here
            ...opts,
            req,
            res,
            path: endpoint
        });
    };
}

exports.createExpressMiddleware = createExpressMiddleware;
