"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogArticleWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8363);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3021);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9694);
/* harmony import */ var _components_PageLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5146);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(308);
/* harmony import */ var _lib_loadMDXMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(803);








async function BlogArticleWrapper({ children, _segments }) {
    let id = _segments.at(-2);
    let allArticles = await (0,_lib_loadMDXMetadata__WEBPACK_IMPORTED_MODULE_6__/* .loadMDXMetadata */ .d)("blog");
    let article = allArticles.find((article)=>article.id === id);
    let moreArticles = allArticles.filter((article)=>article.id !== id).slice(0, 2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
                as: "article",
                className: "mt-24 sm:mt-32 lg:mt-40",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "mx-auto flex max-w-5xl flex-col text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",
                                    children: article.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                    dateTime: article.date,
                                    className: "order-first text-sm text-neutral-950",
                                    children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p)(article.date)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-6 text-sm font-semibold text-neutral-950",
                                    children: [
                                        "by ",
                                        article.author.name,
                                        ", ",
                                        article.author.role
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__/* .MDXComponents */ .t.wrapper, {
                            className: "mt-24 sm:mt-32 lg:mt-40",
                            children: children
                        })
                    })
                ]
            }),
            moreArticles.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageLinks__WEBPACK_IMPORTED_MODULE_5__/* .PageLinks */ .b, {
                className: "mt-24 sm:mt-32 lg:mt-40",
                title: "More articles",
                pages: moreArticles
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContactSection__WEBPACK_IMPORTED_MODULE_1__/* .ContactSection */ .U, {})
        ]
    });
}


/***/ })

};
;