"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 3897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Work),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(7495);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1518);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Blockquote.jsx
var Blockquote = __webpack_require__(7821);
// EXTERNAL MODULE: ./src/components/Border.jsx
var Border = __webpack_require__(1882);
// EXTERNAL MODULE: ./src/components/Button.jsx
var Button = __webpack_require__(3399);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(8363);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7142);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(3021);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(1603);
// EXTERNAL MODULE: ./src/components/Testimonial.jsx
var Testimonial = __webpack_require__(3111);
;// CONCATENATED MODULE: ./src/images/clients/bright-path/logo-dark.svg
/* harmony default export */ const logo_dark = ({"src":"/_next/static/media/logo-dark.1ff7dc9b.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/family-fund/logo-dark.svg
/* harmony default export */ const family_fund_logo_dark = ({"src":"/_next/static/media/logo-dark.7370ef3f.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/green-life/logo-dark.svg
/* harmony default export */ const green_life_logo_dark = ({"src":"/_next/static/media/logo-dark.645d638e.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/home-work/logo-dark.svg
/* harmony default export */ const home_work_logo_dark = ({"src":"/_next/static/media/logo-dark.e87ae13a.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/mail-smirk/logo-dark.svg
/* harmony default export */ const mail_smirk_logo_dark = ({"src":"/_next/static/media/logo-dark.ac5d2e8d.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/north-adventures/logo-dark.svg
/* harmony default export */ const north_adventures_logo_dark = ({"src":"/_next/static/media/logo-dark.ad8a4f58.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/phobia/logo-dark.svg
/* harmony default export */ const phobia_logo_dark = ({"src":"/_next/static/media/logo-dark.353d4760.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/unseal/logo-dark.svg
/* harmony default export */ const unseal_logo_dark = ({"src":"/_next/static/media/logo-dark.4785dd63.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(308);
// EXTERNAL MODULE: ./src/lib/loadMDXMetadata.js
var loadMDXMetadata = __webpack_require__(803);
;// CONCATENATED MODULE: ./src/app/work/page.jsx





















function CaseStudies({ caseStudies }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* Container */.W, {
        className: "mt-40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "font-display text-2xl font-semibold text-neutral-950",
                    children: "Case studies"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-10 space-y-20 sm:space-y-24 lg:space-y-32",
                children: caseStudies.map((caseStudy)=>/*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Border/* Border */.O, {
                                className: "grid grid-cols-3 gap-x-8 gap-y-8 pt-16",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "sm:flex sm:items-center sm:gap-x-6 lg:block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: caseStudy.logo,
                                                        alt: "",
                                                        className: "h-16 w-16 flex-none",
                                                        unoptimized: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8",
                                                        children: caseStudy.client
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-1 flex gap-x-4 sm:mt-0 lg:block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden",
                                                        children: caseStudy.service
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-sm text-neutral-950 lg:mt-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                            dateTime: caseStudy.date,
                                                            children: (0,formatDate/* formatDate */.p)(caseStudy.date)
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-span-full lg:col-span-2 lg:max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-display text-4xl font-medium text-neutral-950",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: caseStudy.href,
                                                    children: caseStudy.title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-6 space-y-6 text-base text-neutral-600",
                                                children: caseStudy.summary.map((paragraph)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: paragraph
                                                    }, paragraph))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-8 flex",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                                    href: caseStudy.href,
                                                    "aria-label": `Read case study: ${caseStudy.client}`,
                                                    children: "Read case study"
                                                })
                                            }),
                                            caseStudy.testimonial && /*#__PURE__*/ jsx_runtime_.jsx(Blockquote/* Blockquote */.V, {
                                                author: caseStudy.testimonial.author,
                                                className: "mt-12",
                                                children: caseStudy.testimonial.content
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, caseStudy.client))
            })
        ]
    });
}
const clients = [
    [
        "Phobia",
        phobia_logo_dark
    ],
    [
        "Family Fund",
        family_fund_logo_dark
    ],
    [
        "Unseal",
        unseal_logo_dark
    ],
    [
        "Mail Smirk",
        mail_smirk_logo_dark
    ],
    [
        "Home Work",
        home_work_logo_dark
    ],
    [
        "Green Life",
        green_life_logo_dark
    ],
    [
        "Bright Path",
        logo_dark
    ],
    [
        "North Adventures",
        north_adventures_logo_dark
    ]
];
function Clients() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* Container */.W, {
        className: "mt-24 sm:mt-32 lg:mt-40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "font-display text-2xl font-semibold text-neutral-950",
                    children: "You’re in good company"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn/* FadeInStagger */.o, {
                className: "mt-10",
                faster: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Border/* Border */.O, {
                        as: FadeIn/* FadeIn */.U
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        role: "list",
                        className: "grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4",
                        children: clients.map(([client, logo])=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "group",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Border/* Border */.O, {
                                        className: "pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: logo,
                                            alt: client,
                                            unoptimized: true
                                        })
                                    })
                                })
                            }, client))
                    })
                ]
            })
        ]
    });
}
const metadata = {
    title: "Our Work",
    description: "We believe in efficiency and maximizing our resources to provide the best value to our clients."
};
async function Work() {
    let caseStudies = await (0,loadMDXMetadata/* loadMDXMetadata */.d)("work");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageIntro/* PageIntro */.O, {
                eyebrow: "Our work",
                title: "Proven solutions for real-world problems.",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CaseStudies, {
                caseStudies: caseStudies
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Testimonial/* Testimonial */.g, {
                className: "mt-24 sm:mt-32 lg:mt-40",
                client: {
                    name: "Mail Smirk",
                    logo: mail_smirk_logo_dark
                },
                children: [
                    "We approached ",
                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                        children: "Studio"
                    }),
                    " because we loved their past work. They delivered something remarkably similar in record time."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Clients, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


/***/ }),

/***/ 9771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/peer/dev/solarpunk/src/components/GridPattern.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["GridPattern"];


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