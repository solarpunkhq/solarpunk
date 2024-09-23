"use strict";
exports.id = 2010;
exports.ids = [2010];
exports.modules = {

/***/ 2010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Process),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Blockquote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7821);
/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8363);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7142);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3021);
/* harmony import */ var _components_GridList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6481);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9771);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2304);
/* harmony import */ var _components_PageIntro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1603);
/* harmony import */ var _components_SectionIntro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2874);
/* harmony import */ var _components_StylizedImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1965);
/* harmony import */ var _components_TagList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7698);
/* harmony import */ var _images_solarpunk_background_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9435);
/* harmony import */ var _images_solarpunk_hero_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(162);














function Section({ title, image, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
        className: "group/section [counter-increment:section]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_4__/* .FadeIn */ .U, {
                        className: "w-[33.75rem] flex-none lg:w-[45rem]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StylizedImage__WEBPACK_IMPORTED_MODULE_10__/* .StylizedImage */ .p, {
                            ...image,
                            sizes: "(min-width: 1024px) 41rem, 31rem",
                            className: "justify-center lg:justify-end lg:group-even/section:justify-start"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_4__/* .FadeIn */ .U, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-6",
                                children: children
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function History() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
        title: "The History",
        image: {
            src: _images_solarpunk_background_jpg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-6 text-base text-neutral-600",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Agrivoltaics is combining land for agriculture and solar energy. It emerged in the 1980s after Dr. Goetzberger proposed it to optimize land use. Dr. Weber later emphasized its benefits."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Pilot projects in the 2010s showed improved crop yield and energy efficiency. Countries like Japan and China embraced agrivoltaics for sustainability and resilience."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Today, after many years of research and refinement, it continues to grow as a promising solution to environmental challenges, bridging agriculture and renewable energy."
                })
            ]
        })
    });
}
function Why() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
        title: "Why is Agrivoltaics important",
        image: {
            src: _images_solarpunk_hero_jpg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
            shape: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-6 text-base text-neutral-600",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "The world's needs for energy and food are increasing. We will soon be beyond the current capacity. We need to dramatically increase production without increasing costs. Just to sustain the population."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Increasing food production with current methods means increased water usage. Because of the global temperatures rise, water is becoming more expensive and less efficient to use.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " Increasing energy production means greater consumption of fossil fuels, or large nuclear power plants that demand large investments and time to build and maintain."
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Agrivoltaics offer a unique solution by combining land usage for both food and energy production. It simultaneously reduces water consumption and increases crop yield. With the shade from the solar panels, plants focus energy on their growth rather than hydration management."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blockquote__WEBPACK_IMPORTED_MODULE_1__/* .Blockquote */ .V, {
                    author: {
                        name: "Jennifer Bousselot",
                        role: "Colorado State University researcher"
                    },
                    className: "mt-12",
                    children: "When you think about our population into the future, having nine billion people by mid-century, we have to start looking at that to build resilience."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "For farmers and land owners agrivoltaics diversifies income. With a greater cashflow, you can reinvest in your land and equipment. For energy providers it offers a more stable and easier to implement energy production, without the headache of bureaucratic processes or time needed for planning and building."
                })
            ]
        })
    });
}
function How() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
        title: "How Agrivoltaics works",
        image: {
            src: _images_solarpunk_background_jpg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            shape: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-6 text-base text-neutral-600",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Solar panels are placed on in rows on elevated frames. The spacing between rows is carefully calculated to",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            className: "font-semibold text-neutral-950",
                            children: "maximize both crop yield and solar production"
                        }),
                        "."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Each plant has a limit on how much sun they can actually use to grow, called a",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            className: "font-semibold text-neutral-950",
                            children: '"light saturation point"'
                        }),
                        ". Once they pass this point, the plant starts spending it's energy to replace evaporating water."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Solar panels are positioned to give the crops",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            className: "font-semibold text-neutral-950",
                            children: "enough direct sunlight to reach the light saturation point"
                        }),
                        ". The crop can spend the remainder of the day focusing energy on growth as it receives indirect sunlight."
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "The solar panels help provide the ideal humidity for the crops and since evaporation is reduced, less water is needed overall. All the excess energy is captured by the panels and converted into usable electricity."
                })
            ]
        })
    });
}
function Benefits() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_6__/* .GridPattern */ .K, {
                    className: "absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",
                    yOffset: -270
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionIntro__WEBPACK_IMPORTED_MODULE_9__/* .SectionIntro */ .v, {
                eyebrow: "The Agrivoltaic Benefits",
                title: "The sustainable future for agriculture and energy",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Agrivoltaics is still in its infancy. Every year new studies are released. Land owners, farmers and energy providers all receive measurable benefits."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "With time, we discover new things that make agrivoltaics an even more obvious choice for the sustainable future for agriculture and energy."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Agrivoltaics makes sense."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
                className: "mt-24",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridList */ .e, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridListItem */ .l, {
                            title: "Use less water",
                            children: "Plants receive enough sun to focus on growth, and no longer need to waste energy fighting for water"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridListItem */ .l, {
                            title: "Increased crop yield",
                            children: "Crops that are grown in Agrivoltaic fields produce more yield, anywhere from 5% to 200%"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridListItem */ .l, {
                            title: "Extend seasons",
                            children: "Reducing crop evaporation helps maintain the right humidity levels helping the growth seasons last longer"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridListItem */ .l, {
                            title: "Diversify income",
                            children: "Land owners receive an additional income from the same land improving cashflow"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridListItem */ .l, {
                            title: "Capture wasted energy",
                            children: "Instead of the sun's energy dehydrating plants, its captured and turned into electricity"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridList__WEBPACK_IMPORTED_MODULE_5__/* .GridListItem */ .l, {
                            title: "Faster implementation",
                            children: "Energy providers can start capturing energy sooner than spending years stuck in bureaucratic processes"
                        })
                    ]
                })
            })
        ]
    });
}
const metadata = {
    title: "What is agrivoltaics?",
    description: "The sustainable future for agriculture and energy"
};
function Process() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PageIntro__WEBPACK_IMPORTED_MODULE_8__/* .PageIntro */ .O, {
                eyebrow: "An introduction",
                title: "What is agrivoltaics?",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Agrivoltaics (also known as Agri PV) is the simultaneous use of land for both agriculture and solar energy generation."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "It creates many benefits for land owners, farmers and energy providers, accelerating our transition to more sustainable energy and food productions."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(History, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Why, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(How, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Benefits, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContactSection__WEBPACK_IMPORTED_MODULE_2__/* .ContactSection */ .U, {})
        ]
    });
}


/***/ }),

/***/ 7698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ TagListItem),
/* harmony export */   P: () => (/* binding */ TagList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1226);


function TagList({ className, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(className, "flex flex-wrap gap-4"),
        children: children
    });
}
function TagListItem({ className, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600", className),
        children: children
    });
}


/***/ })

};
;