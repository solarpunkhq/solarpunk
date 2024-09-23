exports.id = 1360;
exports.ids = [1360];
exports.modules = {

/***/ 1723:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5457, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7398))

/***/ }),

/***/ 3812:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7128))

/***/ }),

/***/ 5549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5892);



function Button({ invert, href, className, children, ...props }) {
    className = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "bg-white text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-white hover:bg-neutral-800");
    let inner = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "relative top-px",
        children: children
    });
    if (href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props,
        children: inner
    });
}


/***/ }),

/***/ 7398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeIn: () => (/* binding */ FadeIn),
/* harmony export */   FadeInStagger: () => (/* binding */ FadeInStagger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5261);
/* __next_internal_client_entry_do_not_use__ FadeIn,FadeInStagger auto */ 


const FadeInStaggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const viewport = {
    once: true,
    margin: "0px 0px -200px"
};
function FadeIn(props) {
    let shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useReducedMotion */ .J)();
    let isInStaggerGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FadeInStaggerContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.5
        },
        ...isInStaggerGroup ? {} : {
            initial: "hidden",
            whileInView: "visible",
            viewport
        },
        ...props
    });
}
function FadeInStagger({ faster = false, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeInStaggerContext.Provider, {
        value: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewport,
            transition: {
                staggerChildren: faster ? 0.12 : 0.2
            },
            ...props
        })
    });
}


/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPattern: () => (/* binding */ GridPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5261);
/* __next_internal_client_entry_do_not_use__ GridPattern auto */ 


function Block({ x, y, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.path, {
        transform: `translate(${-32 * y + 96 * x} ${160 * y})`,
        d: "M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",
        ...props
    });
}
function GridPattern({ yOffset = 0, interactive = false, ...props }) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let currentBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let counter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    let [hoveredBlocks, setHoveredBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let staticBlocks = [
        [
            1,
            1
        ],
        [
            2,
            2
        ],
        [
            4,
            3
        ],
        [
            6,
            2
        ],
        [
            7,
            4
        ],
        [
            5,
            5
        ]
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!interactive) {
            return;
        }
        function onMouseMove(event) {
            if (!ref.current) {
                return;
            }
            let rect = ref.current.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
                return;
            }
            x = x - rect.width / 2 - 32;
            y = y - yOffset;
            x += Math.tan(32 / 160) * y;
            x = Math.floor(x / 96);
            y = Math.floor(y / 160);
            if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) {
                return;
            }
            currentBlock.current = [
                x,
                y
            ];
            setHoveredBlocks((blocks)=>{
                let key = counter.current++;
                return [
                    ...blocks,
                    [
                        x,
                        y,
                        key
                    ]
                ].filter((block)=>!(block[0] === x && block[1] === y && block[2] !== key));
            });
        }
        window.addEventListener("mousemove", onMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [
        yOffset,
        interactive
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ref: ref,
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${id})`,
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                x: "50%",
                y: yOffset,
                strokeWidth: "0",
                className: "overflow-visible",
                children: [
                    staticBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1]
                        }, `${block}`)),
                    hoveredBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1],
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1,
                                times: [
                                    0,
                                    0,
                                    1
                                ]
                            },
                            onAnimationComplete: ()=>{
                                setHoveredBlocks((blocks)=>blocks.filter((b)=>b[2] !== block[2]));
                            }
                        }, block[2]))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: id,
                    width: "96",
                    height: "480",
                    x: "50%",
                    patternUnits: "userSpaceOnUse",
                    patternTransform: `translate(0 ${yOffset})`,
                    fill: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 7128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RootLayout: () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(6088);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(5892);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var use_reduced_motion = __webpack_require__(4041);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var MotionConfig = __webpack_require__(2017);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 166 modules
var motion = __webpack_require__(5261);
// EXTERNAL MODULE: ./src/components/Button.jsx
var Button = __webpack_require__(5549);
;// CONCATENATED MODULE: ./src/components/Container.jsx


function Container_Container({ as: Component = "div", className, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: (0,dist_clsx/* default */.Z)("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-none",
            children: children
        })
    });
}

// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var components_FadeIn = __webpack_require__(7398);
;// CONCATENATED MODULE: ./src/components/Logo.jsx



function Logomark({ invert = false, filled = false, ...props }) {
    let id = (0,react_.useId)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            viewBox: "0 -2 34 36",
            "aria-hidden": "true",
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    clipPath: `url(#${id}-clip)`,
                    className: (0,dist_clsx/* default */.Z)("h-8 transition-all duration-300", invert ? "fill-white" : "fill-neutral-950", filled ? "w-8" : "w-0 group-hover/logo:w-8")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("use", {
                    href: `#${id}-path`,
                    className: invert ? "stroke-white" : "stroke-neutral-950",
                    fill: "none",
                    strokeWidth: "1.5"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            id: `${id}-path`,
                            d: "M8.54425 13.6155L8.56512 4.61882L16.5437 9.23302L16.5179 18.3934L16.5071 18.3872L16.4818 27.3813L8.50757 22.8396L8.52898 13.6067L8.54425 13.6155ZM16.5437 9.23302L16.5651 0L24.5436 4.61425L24.5178 13.7746L16.5437 9.23302Z M0.529235 18.2254L0.507812 27.4584L8.48198 32L8.50776 22.8396L0.529235 18.2254Z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                            id: `${id}-clip`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                href: `#${id}-path`
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function Logo_Logo({ className, invert = false, filled = false, fillOnHover = false, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 160 34",
        "aria-hidden": "true",
        className: (0,dist_clsx/* default */.Z)(fillOnHover && "group/logo", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logomark, {
                preserveAspectRatio: "xMinYMid meet",
                invert: invert,
                filled: filled
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M43.6722 29.312C42.2802 29.312 41.0322 29.024 39.9282 28.448C38.8402 27.856 37.9442 26.936 37.2402 25.688L40.1442 23.84C40.5602 24.672 41.0882 25.296 41.7282 25.712C42.3842 26.112 43.0962 26.312 43.8642 26.312C44.6322 26.312 45.2402 26.136 45.6882 25.784C46.1522 25.432 46.3842 24.968 46.3842 24.392C46.3842 23.864 46.2162 23.432 45.8802 23.096C45.5442 22.76 45.1122 22.496 44.5842 22.304C44.0722 22.096 43.3922 21.88 42.5442 21.656C41.2002 21.304 40.1522 20.736 39.4002 19.952C38.6642 19.168 38.2962 18.16 38.2962 16.928C38.2962 15.936 38.5442 15.064 39.0402 14.312C39.5362 13.544 40.2322 12.952 41.1282 12.536C42.0242 12.12 43.0562 11.912 44.2242 11.912C45.4882 11.912 46.5602 12.176 47.4402 12.704C48.3362 13.232 49.1122 14.008 49.7682 15.032L46.8882 16.808C46.4722 16.136 46.0482 15.656 45.6162 15.368C45.1842 15.064 44.6642 14.912 44.0562 14.912C43.3682 14.912 42.8082 15.08 42.3762 15.416C41.9442 15.752 41.7282 16.2 41.7282 16.76C41.7282 17.32 41.9442 17.744 42.3762 18.032C42.8082 18.304 43.4802 18.584 44.3922 18.872C45.5122 19.224 46.4082 19.552 47.0802 19.856C47.7522 20.16 48.3762 20.672 48.9522 21.392C49.5282 22.096 49.8162 23.032 49.8162 24.2C49.8162 25.208 49.5682 26.104 49.0722 26.888C48.5762 27.656 47.8642 28.256 46.9362 28.688C46.0082 29.104 44.9202 29.312 43.6722 29.312Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M57.347 29.312C56.083 29.312 54.947 29.024 53.939 28.448C52.931 27.856 52.139 27.064 51.563 26.072C50.987 25.064 50.699 23.968 50.699 22.784C50.699 21.6 50.987 20.504 51.563 19.496C52.139 18.488 52.931 17.696 53.939 17.12C54.947 16.528 56.083 16.232 57.347 16.232C58.611 16.232 59.747 16.528 60.755 17.12C61.763 17.696 62.555 18.488 63.131 19.496C63.707 20.504 63.995 21.6 63.995 22.784C63.995 23.968 63.707 25.064 63.131 26.072C62.555 27.064 61.763 27.856 60.755 28.448C59.747 29.024 58.611 29.312 57.347 29.312ZM53.939 22.784C53.939 23.44 54.075 24.04 54.347 24.584C54.635 25.128 55.035 25.56 55.547 25.88C56.075 26.2 56.675 26.36 57.347 26.36C58.019 26.36 58.611 26.2 59.123 25.88C59.651 25.56 60.051 25.128 60.323 24.584C60.611 24.04 60.755 23.44 60.755 22.784C60.755 22.128 60.611 21.528 60.323 20.984C60.035 20.44 59.635 20.008 59.123 19.688C58.611 19.352 58.019 19.184 57.347 19.184C56.675 19.184 56.083 19.352 55.571 19.688C55.059 20.008 54.659 20.44 54.371 20.984C54.083 21.528 53.939 22.128 53.939 22.784Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M65.429 11.48H68.669V29H65.429V11.48Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M76.2732 29.312C75.1532 29.312 74.1212 29.024 73.1772 28.448C72.2332 27.856 71.4812 27.064 70.9212 26.072C70.3772 25.08 70.1052 23.992 70.1052 22.808C70.1052 21.624 70.3772 20.536 70.9212 19.544C71.4812 18.536 72.2332 17.736 73.1772 17.144C74.1212 16.552 75.1532 16.256 76.2732 16.256C77.2972 16.256 78.1212 16.448 78.7452 16.832C79.3852 17.216 79.8812 17.768 80.2332 18.488V16.52H83.4492V29H80.3052V26.96C79.9372 27.712 79.4332 28.296 78.7932 28.712C78.1692 29.112 77.3292 29.312 76.2732 29.312ZM73.3452 22.784C73.3452 23.424 73.4892 24.024 73.7772 24.584C74.0812 25.128 74.4892 25.568 75.0012 25.904C75.5292 26.224 76.1292 26.384 76.8012 26.384C77.4892 26.384 78.0972 26.224 78.6252 25.904C79.1692 25.584 79.5852 25.152 79.8732 24.608C80.1612 24.064 80.3052 23.464 80.3052 22.808C80.3052 22.152 80.1612 21.552 79.8732 21.008C79.5852 20.448 79.1692 20.008 78.6252 19.688C78.0972 19.352 77.4892 19.184 76.8012 19.184C76.1292 19.184 75.5292 19.352 75.0012 19.688C74.4732 20.008 74.0652 20.44 73.7772 20.984C73.4892 21.528 73.3452 22.128 73.3452 22.784Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M85.3743 16.52H88.5183V18.896C88.7423 17.984 89.1743 17.296 89.8143 16.832C90.4703 16.368 91.3263 16.168 92.3823 16.232V19.28H91.9263C90.9663 19.28 90.1743 19.584 89.5503 20.192C88.9263 20.784 88.6143 21.592 88.6143 22.616V29H85.3743V16.52Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M93.4602 16.52H96.6522V18.536C97.0202 17.8 97.5162 17.24 98.1402 16.856C98.7642 16.456 99.5962 16.256 100.636 16.256C101.756 16.256 102.788 16.552 103.732 17.144C104.676 17.736 105.42 18.536 105.964 19.544C106.524 20.536 106.804 21.624 106.804 22.808C106.804 23.992 106.524 25.08 105.964 26.072C105.42 27.064 104.676 27.856 103.732 28.448C102.788 29.024 101.756 29.312 100.636 29.312C99.6282 29.312 98.8042 29.128 98.1642 28.76C97.5402 28.376 97.0522 27.84 96.7002 27.152V33.8H93.4602V16.52ZM96.6042 22.808C96.6042 23.464 96.7482 24.064 97.0362 24.608C97.3242 25.152 97.7322 25.584 98.2602 25.904C98.8042 26.224 99.4202 26.384 100.108 26.384C100.78 26.384 101.372 26.224 101.884 25.904C102.412 25.568 102.82 25.128 103.108 24.584C103.412 24.024 103.564 23.424 103.564 22.784C103.564 22.128 103.42 21.528 103.132 20.984C102.844 20.44 102.436 20.008 101.908 19.688C101.38 19.352 100.78 19.184 100.108 19.184C99.4202 19.184 98.8042 19.352 98.2602 19.688C97.7322 20.008 97.3242 20.448 97.0362 21.008C96.7482 21.552 96.6042 22.152 96.6042 22.808Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M112.881 29.288C111.985 29.288 111.177 29.08 110.457 28.664C109.737 28.232 109.169 27.632 108.753 26.864C108.337 26.08 108.129 25.176 108.129 24.152V16.52H111.369V23.36C111.369 25.424 112.201 26.456 113.865 26.456C114.601 26.456 115.217 26.2 115.713 25.688C116.209 25.16 116.457 24.384 116.457 23.36V16.52H119.697V29H116.553V27.128C116.249 27.864 115.801 28.408 115.209 28.76C114.617 29.112 113.841 29.288 112.881 29.288Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M121.609 16.52H124.801V18.344C125.457 16.936 126.729 16.232 128.617 16.232C129.513 16.232 130.321 16.448 131.041 16.88C131.761 17.296 132.329 17.896 132.745 18.68C133.161 19.448 133.369 20.344 133.369 21.368V29H130.129V22.16C130.129 21.12 129.889 20.344 129.409 19.832C128.929 19.32 128.273 19.064 127.441 19.064C126.705 19.064 126.089 19.328 125.593 19.856C125.097 20.368 124.849 21.136 124.849 22.16V29H121.609V16.52Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: invert ? "fill-white" : "fill-neutral-950",
                d: "M138.419 23.072V29H135.179V11.48H138.419V21.56L143.099 16.52H147.707L141.827 22.328L147.731 29H143.435L138.419 23.072Z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/SocialMedia.jsx



function FacebookIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
        })
    });
}
function InstagramIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
        })
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8.29 20.253c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.392 4.75a4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.715v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 2 18.41a11.616 11.616 0 0 0 6.29 1.84"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        })
    });
}
function DribbbleIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"
        })
    });
}
const socialMediaProfiles = [
    {
        title: "Facebook",
        href: "https://facebook.com",
        icon: FacebookIcon
    },
    {
        title: "Instagram",
        href: "https://instagram.com",
        icon: InstagramIcon
    },
    {
        title: "Twitter",
        href: "https://twitter.com",
        icon: TwitterIcon
    },
    {
        title: "GitHub",
        href: "https://github.com",
        icon: GitHubIcon
    },
    {
        title: "Dribbble",
        href: "https://dribbble.com",
        icon: DribbbleIcon
    }
];
function SocialMedia({ className, invert = false }) {
    return /*#__PURE__*/ _jsx("ul", {
        role: "list",
        className: clsx("flex gap-x-10", invert ? "text-white" : "text-neutral-950", className),
        children: socialMediaProfiles.map((socialMediaProfile)=>/*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: socialMediaProfile.href,
                    "aria-label": socialMediaProfile.title,
                    className: clsx("transition", invert ? "hover:text-neutral-200" : "hover:text-neutral-700"),
                    children: /*#__PURE__*/ _jsx(socialMediaProfile.icon, {
                        className: "h-6 w-6 fill-current"
                    })
                })
            }, socialMediaProfile.title))
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.jsx






const Footer_navigation = [
    /* {
    title: 'Work',
    links: [
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  }, */ {
        title: "Company",
        links: [
            {
                title: "Team",
                href: "/team"
            },
            {
                title: "Process",
                href: "/process"
            },
            {
                title: "Jobs",
                href: "/jobs"
            },
            {
                title: "Contact us",
                href: "/contact"
            }
        ]
    },
    {
        title: "Connect",
        links: socialMediaProfiles
    }
];
function Navigation() {
    return /*#__PURE__*/ _jsx("nav", {
        children: /*#__PURE__*/ _jsx("ul", {
            role: "list",
            className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
            children: Footer_navigation.map((section)=>/*#__PURE__*/ _jsxs("li", {
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                            children: section.title
                        }),
                        /*#__PURE__*/ _jsx("ul", {
                            role: "list",
                            className: "mt-4 text-sm text-neutral-700",
                            children: section.links.map((link)=>/*#__PURE__*/ _jsx("li", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: link.href,
                                        className: "transition hover:text-neutral-950",
                                        children: link.title
                                    })
                                }, link.title))
                        })
                    ]
                }, section.title))
        })
    });
}
function ArrowIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 16 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 3 10 .5v2H0v1h10v2L16 3Z"
        })
    });
}
function NewsletterForm() {
    return /*#__PURE__*/ _jsxs("form", {
        className: "max-w-sm",
        children: [
            /*#__PURE__*/ _jsx("h2", {
                className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                children: "Sign up for our newsletter"
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "mt-4 text-sm text-neutral-700",
                children: "Subscribe to get the latest design news, articles, resources and inspiration."
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "relative mt-6",
                children: [
                    /*#__PURE__*/ _jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        autoComplete: "email",
                        "aria-label": "Email address",
                        className: "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "absolute inset-y-1 right-1 flex justify-end",
                        children: /*#__PURE__*/ _jsx("button", {
                            type: "submit",
                            "aria-label": "Submit",
                            className: "flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",
                            children: /*#__PURE__*/ _jsx(ArrowIcon, {
                                className: "w-4"
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function Footer() {
    return /*#__PURE__*/ _jsx(Container, {
        as: "footer",
        className: "mt-24 w-full sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ _jsxs(FadeIn, {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "flex lg:justify-end"
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",
                    children: [
                        /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ _jsx(Logo, {
                                className: "h-8",
                                fillOnHover: true
                            })
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-sm text-neutral-700",
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " Solarpunk"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/GridPattern.jsx
var GridPattern = __webpack_require__(5621);
;// CONCATENATED MODULE: ./src/components/Offices.jsx


function Office({ name, children, invert = false }) {
    return /*#__PURE__*/ _jsxs("address", {
        className: clsx("text-sm not-italic", invert ? "text-neutral-300" : "text-neutral-600"),
        children: [
            /*#__PURE__*/ _jsx("strong", {
                className: invert ? "text-white" : "text-neutral-950",
                children: name
            }),
            /*#__PURE__*/ _jsx("br", {}),
            children
        ]
    });
}
function Offices({ invert = false, ...props }) {
    return /*#__PURE__*/ _jsx("ul", {
        role: "list",
        ...props,
        children: /*#__PURE__*/ _jsx("li", {
            children: /*#__PURE__*/ _jsxs(Office, {
                name: "Solarpunk",
                invert: invert,
                children: [
                    "Holnisser Landstra\xdfe 9",
                    /*#__PURE__*/ _jsx("br", {}),
                    "24975, Ausacker, Germany"
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/RootLayout.jsx
/* __next_internal_client_entry_do_not_use__ RootLayout auto */ 












const RootLayoutContext = /*#__PURE__*/ (0,react_.createContext)({});
function XIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"
            })
        ]
    });
}
function MenuIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M2 6h20v2H2zM2 16h20v2H2z"
        })
    });
}
function Header({ panelId, invert = false, icon: Icon, expanded, onToggle, toggleRef }) {
    let { logoHovered, setLogoHovered } = (0,react_.useContext)(RootLayoutContext);
    return /*#__PURE__*/ jsx_runtime_.jsx(Container_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    "aria-label": "Home",
                    onMouseEnter: ()=>setLogoHovered(true),
                    onMouseLeave: ()=>setLogoHovered(false),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logomark, {
                            className: "h-8 sm:hidden",
                            invert: invert,
                            filled: logoHovered
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo_Logo, {
                            className: "hidden h-8 sm:block",
                            invert: invert,
                            filled: logoHovered
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center gap-x-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        ref: toggleRef,
                        type: "button",
                        onClick: onToggle,
                        "aria-expanded": expanded.toString(),
                        "aria-controls": panelId,
                        className: (0,dist_clsx/* default */.Z)("group -m-2.5 rounded-full p-2.5 transition", invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"),
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            className: (0,dist_clsx/* default */.Z)("h-6 w-6", invert ? "fill-white group-hover:fill-neutral-200" : "fill-neutral-950 group-hover:fill-neutral-700")
                        })
                    })
                })
            ]
        })
    });
}
function NavigationRow({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "even:mt-px sm:bg-neutral-950",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container_Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2",
                children: children
            })
        })
    });
}
function NavigationItem({ href, children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"
            })
        ]
    });
}
function RootLayout_Navigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "mt-px font-display text-5xl font-medium tracking-tight text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/agrivoltaics",
                        children: "Agrivoltaics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/team",
                        children: "The Team"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/jobs",
                        children: "Jobs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "https://cal.com/team/solarpunk",
                        children: "Contact us"
                    })
                ]
            })
        ]
    });
}
function RootLayoutInner({ children }) {
    let panelId = (0,react_.useId)();
    let [expanded, setExpanded] = (0,react_.useState)(false);
    let openRef = (0,react_.useRef)();
    let closeRef = (0,react_.useRef)();
    let navRef = (0,react_.useRef)();
    let shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
    (0,react_.useEffect)(()=>{
        function onClick(event) {
            if (event.target.closest("a")?.href === window.location.href) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", onClick);
        return ()=>{
            window.removeEventListener("click", onClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MotionConfig/* MotionConfig */.A, {
        transition: shouldReduceMotion ? {
            duration: 0
        } : undefined,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 top-2 z-40 pt-14",
                        "aria-hidden": expanded ? "true" : undefined,
                        inert: expanded ? "" : undefined,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            panelId: panelId,
                            icon: MenuIcon,
                            toggleRef: openRef,
                            expanded: expanded,
                            onToggle: ()=>{
                                setExpanded((expanded)=>!expanded);
                                window.setTimeout(()=>closeRef.current?.focus({
                                        preventScroll: true
                                    }));
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        layout: true,
                        id: panelId,
                        style: {
                            height: expanded ? "auto" : "0.5rem"
                        },
                        className: "relative z-50 overflow-hidden bg-neutral-950 pt-2",
                        "aria-hidden": expanded ? undefined : "true",
                        inert: expanded ? undefined : "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            layout: true,
                            className: "bg-neutral-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    ref: navRef,
                                    className: "bg-neutral-950 pb-16 pt-14",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                        invert: true,
                                        panelId: panelId,
                                        icon: XIcon,
                                        toggleRef: closeRef,
                                        expanded: expanded,
                                        onToggle: ()=>{
                                            setExpanded((expanded)=>!expanded);
                                            window.setTimeout(()=>openRef.current?.focus({
                                                    preventScroll: true
                                                }));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RootLayout_Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Container_Container, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid grid-cols-1 gap-y-10 pb-16 pt-10 text-white sm:grid-cols-2 sm:pt-16",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "font-display text-base font-semibold",
                                                        children: "Solarpunk"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "max-w-[410px]",
                                                        children: "Our mission is to 100x the deployment of solar panels by 2033 and create a solarpunk future by 2077."
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                layout: true,
                style: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                },
                className: "relative flex flex-auto overflow-hidden bg-white pt-14",
                children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    layout: true,
                    className: "relative isolate flex w-full flex-col pt-9",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "w-full flex-auto",
                        children: children
                    })
                })
            })
        ]
    });
}
function RootLayout({ children }) {
    let pathname = (0,navigation.usePathname)();
    let [logoHovered, setLogoHovered] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutContext.Provider, {
        value: {
            logoHovered,
            setLogoHovered
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutInner, {
            children: children
        }, pathname)
    });
}


/***/ }),

/***/ 8597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.jsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-sans"}],"variableName":"fontSans"}
var layout_jsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_ = __webpack_require__(5237);
var layout_jsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(layout_jsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1913);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/peer/dev/solarpunk/src/components/RootLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["RootLayout"];

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1226);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(999);
;// CONCATENATED MODULE: ./src/lib/utils.js


function cn(...inputs) {
    return (0,bundle_mjs/* twMerge */.m6)((0,clsx/* clsx */.W)(inputs));
}

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(9679);
;// CONCATENATED MODULE: ./src/app/layout.jsx





const metadata = {
    title: {
        template: "%s - Solarpunk",
        default: "Solarpunk - Covering farms with solar panels"
    }
};
function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: "h-full bg-neutral-950 text-base antialiased",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
                        integrity: "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=",
                        crossOrigin: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
                        integrity: "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=",
                        crossOrigin: "",
                        defer: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.js",
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: cn("flex min-h-screen flex-col bg-black font-sans antialiased", (layout_jsx_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default()).variable),
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 4513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1518);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3021);




function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
        className: "flex h-full items-center pt-24 sm:pt-32 lg:pt-40",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 font-display text-2xl font-semibold text-neutral-950",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2 text-sm text-neutral-600",
                    children: "Sorry, we couldn’t find the page you’re looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",
                    children: "Go to the home page"
                })
            ]
        })
    });
}


/***/ }),

/***/ 7142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1226);


function Container({ as: Component = "div", className, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-none",
            children: children
        })
    });
}


/***/ }),

/***/ 3021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ e0),
/* harmony export */   o: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/peer/dev/solarpunk/src/components/FadeIn.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FadeIn"];

const e1 = proxy["FadeInStagger"];


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 9679:
/***/ (() => {



/***/ })

};
;