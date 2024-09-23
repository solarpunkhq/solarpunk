'use strict';

var TRPCClientError = require('./TRPCClientError-7e0c31e7.js');

const isFunction = (fn)=>typeof fn === 'function';
function getFetch(customFetchImpl) {
    if (customFetchImpl) {
        return customFetchImpl;
    }
    if (typeof window !== 'undefined' && isFunction(window.fetch)) {
        return window.fetch;
    }
    if (typeof globalThis !== 'undefined' && isFunction(globalThis.fetch)) {
        return globalThis.fetch;
    }
    throw new Error('No fetch implementation found');
}

function getAbortController(customAbortControllerImpl) {
    if (customAbortControllerImpl) {
        return customAbortControllerImpl;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (typeof window !== 'undefined' && window.AbortController) {
        return window.AbortController;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (typeof globalThis !== 'undefined' && globalThis.AbortController) {
        return globalThis.AbortController;
    }
    return null;
}

function resolveHTTPLinkOptions(opts) {
    return {
        url: opts.url.toString().replace(/\/$/, ''),
        fetch: opts.fetch,
        AbortController: getAbortController(opts.AbortController)
    };
}
// https://github.com/trpc/trpc/pull/669
function arrayToDict(array) {
    const dict = {};
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        dict[index] = element;
    }
    return dict;
}
const METHOD = {
    query: 'GET',
    mutation: 'POST'
};
function getInput(opts) {
    return 'input' in opts ? opts.runtime.transformer.serialize(opts.input) : arrayToDict(opts.inputs.map((_input)=>opts.runtime.transformer.serialize(_input)));
}
const getUrl = (opts)=>{
    let url = opts.url + '/' + opts.path;
    const queryParts = [];
    if ('inputs' in opts) {
        queryParts.push('batch=1');
    }
    if (opts.type === 'query') {
        const input = getInput(opts);
        if (input !== undefined) {
            queryParts.push(`input=${encodeURIComponent(JSON.stringify(input))}`);
        }
    }
    if (queryParts.length) {
        url += '?' + queryParts.join('&');
    }
    return url;
};
const getBody = (opts)=>{
    if (opts.type === 'query') {
        return undefined;
    }
    const input = getInput(opts);
    return input !== undefined ? JSON.stringify(input) : undefined;
};
const jsonHttpRequester = (opts)=>{
    return httpRequest({
        ...opts,
        contentTypeHeader: 'application/json',
        getUrl,
        getBody
    });
};
async function fetchHTTPResponse(opts, ac) {
    const url = opts.getUrl(opts);
    const body = opts.getBody(opts);
    const { type  } = opts;
    const resolvedHeaders = await opts.headers();
    /* istanbul ignore if -- @preserve */ if (type === 'subscription') {
        throw new Error('Subscriptions should use wsLink');
    }
    const headers = {
        ...opts.contentTypeHeader ? {
            'content-type': opts.contentTypeHeader
        } : {},
        ...opts.batchModeHeader ? {
            'trpc-batch-mode': opts.batchModeHeader
        } : {},
        ...resolvedHeaders
    };
    return getFetch(opts.fetch)(url, {
        method: METHOD[type],
        signal: ac?.signal,
        body: body,
        headers
    });
}
function httpRequest(opts) {
    const ac = opts.AbortController ? new opts.AbortController() : null;
    const meta = {};
    let done = false;
    const promise = new Promise((resolve, reject)=>{
        fetchHTTPResponse(opts, ac).then((_res)=>{
            meta.response = _res;
            done = true;
            return _res.json();
        }).then((json)=>{
            meta.responseJSON = json;
            resolve({
                json: json,
                meta
            });
        }).catch((err)=>{
            done = true;
            reject(TRPCClientError.TRPCClientError.from(err, {
                meta
            }));
        });
    });
    const cancel = ()=>{
        if (!done) {
            ac?.abort();
        }
    };
    return {
        promise,
        cancel
    };
}

exports.fetchHTTPResponse = fetchHTTPResponse;
exports.getBody = getBody;
exports.getFetch = getFetch;
exports.getUrl = getUrl;
exports.httpRequest = httpRequest;
exports.jsonHttpRequester = jsonHttpRequester;
exports.resolveHTTPLinkOptions = resolveHTTPLinkOptions;
