"use strict";
exports.id = 4682;
exports.ids = [4682];
exports.modules = {

/***/ 4682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8363);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3021);
/* harmony import */ var _components_GrayscaleTransitionImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8395);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9694);
/* harmony import */ var _components_PageIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1603);
/* harmony import */ var _components_PageLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5146);
/* harmony import */ var _lib_loadMDXMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(803);









async function CaseStudyLayout({ children, _segments }) {
    let id = _segments.at(-2);
    let allCaseStudies = await (0,_lib_loadMDXMetadata__WEBPACK_IMPORTED_MODULE_8__/* .loadMDXMetadata */ .d)("work");
    let caseStudy = allCaseStudies.find((caseStudy)=>caseStudy.id === id);
    let moreCaseStudies = allCaseStudies.filter((caseStudy)=>caseStudy.id !== id).slice(0, 2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "mt-24 sm:mt-32 lg:mt-40",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageIntro__WEBPACK_IMPORTED_MODULE_6__/* .PageIntro */ .O, {
                                eyebrow: "Case Study",
                                title: caseStudy.title,
                                centered: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: caseStudy.description
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mx-auto max-w-5xl",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                    className: "-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                    className: "font-semibold",
                                                                    children: "Client"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                    children: caseStudy.client
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                    className: "font-semibold",
                                                                    children: "Year"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                                        dateTime: caseStudy.date.split("-")[0],
                                                                        children: caseStudy.date.split("-")[0]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                    className: "font-semibold",
                                                                    children: "Service"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                    children: caseStudy.service
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "border-y border-neutral-200 bg-neutral-100",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "-my-px mx-auto max-w-[76rem] bg-neutral-200",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GrayscaleTransitionImage__WEBPACK_IMPORTED_MODULE_4__/* .GrayscaleTransitionImage */ .J, {
                                                ...caseStudy.image,
                                                quality: 90,
                                                className: "w-full",
                                                sizes: "(min-width: 1216px) 76rem, 100vw",
                                                priority: true
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
                        className: "mt-24 sm:mt-32 lg:mt-40",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_5__/* .MDXComponents */ .t.wrapper, {
                                children: children
                            })
                        })
                    })
                ]
            }),
            moreCaseStudies.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageLinks__WEBPACK_IMPORTED_MODULE_7__/* .PageLinks */ .b, {
                className: "mt-24 sm:mt-32 lg:mt-40",
                title: "More case studies",
                pages: moreCaseStudies
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContactSection__WEBPACK_IMPORTED_MODULE_1__/* .ContactSection */ .U, {})
        ]
    });
}


/***/ })

};
;