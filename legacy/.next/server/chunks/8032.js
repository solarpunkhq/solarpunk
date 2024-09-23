"use strict";
exports.id = 8032;
exports.ids = [8032];
exports.modules = {

/***/ 5146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ PageLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1518);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1226);
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1882);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3021);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9771);
/* harmony import */ var _components_SectionIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2874);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(308);









function ArrowIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 24 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24 3 18 .5v2H0v1h18v2L24 3Z"
        })
    });
}
function PageLink({ page }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Border__WEBPACK_IMPORTED_MODULE_2__/* .Border */ .O, {
            position: "left",
            className: "relative flex flex-col items-start pl-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "mt-6 text-base font-semibold text-neutral-950",
                    children: page.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                    dateTime: page.date,
                    className: "order-first text-sm text-neutral-600",
                    children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p)(page.date)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2.5 text-base text-neutral-600",
                    children: page.description
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: page.href,
                    className: "mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700",
                    "aria-label": `Read more: ${page.title}`,
                    children: [
                        "Read more",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowIcon, {
                            className: "w-6 flex-none fill-current"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute inset-0"
                        })
                    ]
                })
            ]
        })
    }, page.href);
}
function PageLinks({ title, intro, pages, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("relative pt-24 sm:pt-32 lg:pt-40", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_5__/* .GridPattern */ .K, {
                    className: "absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",
                    yOffset: -270
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionIntro__WEBPACK_IMPORTED_MODULE_6__/* .SectionIntro */ .v, {
                title: title,
                smaller: true,
                children: intro && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: intro
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
                className: intro ? "mt-24" : "mt-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_4__/* .FadeInStagger */ .o, {
                    className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",
                    children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_4__/* .FadeIn */ .U, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageLink, {
                                page: page
                            })
                        }, page.href))
                })
            })
        ]
    });
}


/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StatList),
/* harmony export */   j: () => (/* binding */ StatListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1882);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3021);




function StatList({ children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_2__/* .FadeInStagger */ .o, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
            className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none",
            children: children
        })
    });
}
function StatListItem({ label, value }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Border__WEBPACK_IMPORTED_MODULE_1__/* .Border */ .O, {
        as: _components_FadeIn__WEBPACK_IMPORTED_MODULE_2__/* .FadeIn */ .U,
        position: "left",
        className: "flex flex-col-reverse pl-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                className: "mt-2 text-base text-neutral-600",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                className: "font-display text-3xl font-semibold text-neutral-950 sm:text-4xl",
                children: value
            })
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