"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 6384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTA: () => (/* binding */ CTA),
/* harmony export */   ContactButtons: () => (/* binding */ ContactButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5892);
/* harmony import */ var _calcom_embed_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ CTA,ContactButtons auto */ 




function CTA({ style, invert, link, href, className, children, ...props }) {
    className = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "bg-white text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-white hover:bg-neutral-800");
    let inner = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "relative top-px",
        children: children
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ;
        (async function() {
            const cal = await (0,_calcom_embed_react__WEBPACK_IMPORTED_MODULE_4__/* .getCalApi */ .o)();
            cal("ui", {
                theme: "light",
                styles: {
                    branding: {
                        brandColor: "#F97315"
                    }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        "data-cal-link": link,
        "data-cal-config": '{"layout":"month_view"}',
        children: children
    });
}
function ContactButtons() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-4 gap-2 space-y-2 md:flex md:space-y-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CTA, {
                    className: "group mt-6 flex h-12 items-center border-2 border-orange-500 bg-orange-500 px-4 text-lg shadow-lg hover:border-orange-700 hover:bg-orange-500",
                    link: "team/solarpunk/farmland",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://cal.com/api/avatar/bb2fd2c4-9df6-4837-ba82-87b38b2cb5ba.png",
                            className: "h-6 w-6 rounded-full border-2 border-orange-500"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://cal.com/api/avatar/8d4e5764-ade0-4ff1-bc95-7a31a3572267.png",
                            className: "-ml-2 h-6 w-6 rounded-full border-2 border-orange-500"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "ml-2 mt-px inline-block",
                            children: "Schedule a call"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                    className: "block text-center !text-white",
                    children: "see if you qualify"
                })
            ]
        })
    });
}


/***/ }),

/***/ 4046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e1)
/* harmony export */ });
/* unused harmony export CTA */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/peer/dev/solarpunk/src/components/CTA.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["CTA"];

const e1 = proxy["ContactButtons"];


/***/ }),

/***/ 8363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ContactSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3399);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3021);
/* harmony import */ var _components_Offices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1305);
/* harmony import */ var _CTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4046);
/* harmony import */ var _images_solarpunk_hero_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(162);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7495);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);








function ContactSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
        className: "mt-24 sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            className: "relative z-0 -mx-6 mb-12 overflow-hidden bg-black px-6 py-20 sm:mx-0 sm:rounded-3xl sm:py-32 md:px-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                    src: _images_solarpunk_hero_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                    alt: "Hero",
                    className: "absolute inset-0 -z-10 -mt-96 min-h-[1000px] w-full object-cover opacity-40",
                    unoptimized: true
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative z-30 mx-auto max-w-4xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                style: {
                                    textShadow: "0.25px 0.25px #000, 0.5px 0.5px #000, 0.75px 0.75px #000, 1px 1px #000, 1.25px 1.25px #000, 1.5px 1.5px #000, 1.75px 1.75px #000, 2px 2px #000, 2.25px 2.25px #000, 2.5px 2.5px #000, 2.75px 2.75px #000, 3px 3px #000, 3.25px 3.25px #000, 3.5px 3.5px #000, 3.75px 3.75px #000, 4px 4px #000, 4.25px 4.25px #000, 4.5px 4.5px #000, 4.75px 4.75px #000, 5px 5px #000, 5.25px 5.25px #000, 5.5px 5.5px #000, 5.75px 5.75px #000, 6px 6px #000"
                                },
                                className: "font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl",
                                children: "Talk to us about your Solarpunk project"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CTA__WEBPACK_IMPORTED_MODULE_5__/* .ContactButtons */ .a, {})
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/solarpunk-hero.e74463ff.jpg","height":1024,"width":1792,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqAn/AP/EABsQAQACAgMAAAAAAAAAAAAAAAIBAwARBCEi/9oACAEBAAE/ADyLTVspQ/Jhb7jP/8QAGhEAAgIDAAAAAAAAAAAAAAAAATEAAgMRIf/aAAgBAgEBPwDKe1SDG5//xAAZEQEAAgMAAAAAAAAAAAAAAAABABECIUH/2gAIAQMBAT8AwWmlN8n/2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/solarpunk-hero.e74463ff.jpg","height":1024,"width":1792,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqAn/AP/EABsQAQACAgMAAAAAAAAAAAAAAAIBAwARBCEi/9oACAEBAAE/ADyLTVspQ/Jhb7jP/8QAGhEAAgIDAAAAAAAAAAAAAAAAATEAAgMRIf/aAAgBAgEBPwDKe1SDG5//xAAZEQEAAgMAAAAAAAAAAAAAAAABABECIUH/2gAIAQMBAT8AwWmlN8n/2Q==","blurWidth":8,"blurHeight":5});

/***/ })

};
;