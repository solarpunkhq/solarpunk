'use strict';

function createNodeHTTPContentTypeHandler(contentTypeHandler) {
    return ()=>contentTypeHandler;
}

exports.createNodeHTTPContentTypeHandler = createNodeHTTPContentTypeHandler;
