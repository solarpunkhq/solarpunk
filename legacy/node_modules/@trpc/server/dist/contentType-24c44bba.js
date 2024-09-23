function createNodeHTTPContentTypeHandler(contentTypeHandler) {
    return () => contentTypeHandler;
}

export { createNodeHTTPContentTypeHandler as c };
