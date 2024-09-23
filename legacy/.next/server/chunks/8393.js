"use strict";
exports.id = 8393;
exports.ids = [8393];
exports.modules = {

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7495);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1518);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1882);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3399);
/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8363);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3021);
/* harmony import */ var _components_PageIntro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1603);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(308);
/* harmony import */ var _lib_loadMDXMetadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(803);











const metadata = {
    title: "Blog",
    description: "Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles."
};
async function Blog() {
    let articles = await (0,_lib_loadMDXMetadata__WEBPACK_IMPORTED_MODULE_9__/* .loadMDXMetadata */ .d)("blog");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageIntro__WEBPACK_IMPORTED_MODULE_8__/* .PageIntro */ .O, {
                eyebrow: "Blog",
                title: "The latest articles and news",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W, {
                className: "mt-24 sm:mt-32 lg:mt-40",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-24 lg:space-y-32",
                    children: articles.map((article)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_7__/* .FadeIn */ .U, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Border__WEBPACK_IMPORTED_MODULE_3__/* .Border */ .O, {
                                    className: "pt-16",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative lg:-mx-4 lg:flex lg:justify-end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "font-display text-2xl font-semibold text-neutral-950",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: article.href,
                                                        children: article.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                    className: "lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                            className: "sr-only",
                                                            children: "Published"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                            className: "absolute left-0 top-0 text-sm text-neutral-950 lg:static",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                                dateTime: article.date,
                                                                children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_10__/* .formatDate */ .p)(article.date)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                            className: "sr-only",
                                                            children: "Author"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                                                            className: "mt-6 flex gap-x-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-none overflow-hidden rounded-xl bg-neutral-100",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        alt: "",
                                                                        ...article.author.image,
                                                                        className: "h-12 w-12 object-cover grayscale"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text-sm text-neutral-950",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "font-semibold",
                                                                            children: article.author.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: article.author.role
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-6 max-w-2xl text-base text-neutral-600",
                                                    children: article.description
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                                    href: article.href,
                                                    "aria-label": `Read more: ${article.title}`,
                                                    className: "mt-8",
                                                    children: "Read more"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        }, article.href))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContactSection__WEBPACK_IMPORTED_MODULE_5__/* .ContactSection */ .U, {})
        ]
    });
}


/***/ }),

/***/ 308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateString) {
    let parts = dateString.split("-");
    let hasDay = parts.length > 2;
    return new Date(`${dateString}Z`).toLocaleDateString("en-US", {
        day: hasDay ? "numeric" : undefined,
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}


/***/ })

};
;