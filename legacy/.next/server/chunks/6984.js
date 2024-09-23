"use strict";
exports.id = 6984;
exports.ids = [6984];
exports.modules = {

/***/ 6984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(7495);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Border.jsx
var Border = __webpack_require__(1882);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(8363);
// EXTERNAL MODULE: ./src/components/Container.jsx
var components_Container = __webpack_require__(7142);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(3021);
// EXTERNAL MODULE: ./src/components/GridList.jsx
var components_GridList = __webpack_require__(6481);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(1603);
// EXTERNAL MODULE: ./src/components/PageLinks.jsx
var PageLinks = __webpack_require__(5146);
// EXTERNAL MODULE: ./src/components/SectionIntro.jsx
var components_SectionIntro = __webpack_require__(2874);
// EXTERNAL MODULE: ./src/components/StatList.jsx
var StatList = __webpack_require__(2093);
// EXTERNAL MODULE: ./src/images/team/peer.jpeg
var peer = __webpack_require__(1783);
;// CONCATENATED MODULE: ./src/images/team/schuyler.jpg
/* harmony default export */ const schuyler = ({"src":"/_next/static/media/schuyler.28f0ad7c.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAiQX/AP/EAB0QAAMAAAcAAAAAAAAAAAAAAAECBAADBhEUIlH/2gAIAQEAAT8AqlkGmISsg5ZrzFdwO/uxx//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABcRAAMBAAAAAAAAAAAAAAAAAAABQXH/2gAIAQMBAT8Acw//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/esther.jpeg
/* harmony default export */ const esther = ({"src":"/_next/static/media/esther.3bddd68a.jpeg","height":3088,"width":2316,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJFn/8QAHRABAAEDBQAAAAAAAAAAAAAAAgMBBBEABQYSQf/aAAgBAQABPwDceRGyvbqERDuUC3JTJWKeY1//xAAWEQADAAAAAAAAAAAAAAAAAAAAERL/2gAIAQIBAT8AlH//xAAWEQEBAQAAAAAAAAAAAAAAAABBADH/2gAIAQMBAT8A0L//2Q==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/omar.jpeg
/* harmony default export */ const omar = ({"src":"/_next/static/media/omar.59d6aeaa.jpeg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKwV/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACAwQRMTL/2gAIAQEAAT8AjFh1qSsInE4DudBf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAjIAATH/2gAIAQIBAT8AAX1rn//EABgRAAIDAAAAAAAAAAAAAAAAAAABAzJy/9oACAEDAQE/AJHTCP/Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/claus-peter.jpg
/* harmony default export */ const claus_peter = ({"src":"/_next/static/media/claus-peter.524e2f80.jpg","height":660,"width":660,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALkFf//EABsQAQACAgMAAAAAAAAAAAAAAAMBBgAiAhMU/9oACAEBAAE/ABsYLZvDwZOmTkY11l8//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AFT/xAAZEQEAAgMAAAAAAAAAAAAAAAACAAEDEUH/2gAIAQMBAT8AzChZ10z/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/james.jpeg
/* harmony default export */ const james = ({"src":"/_next/static/media/james.62034880.jpeg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJAoH//EAB8QAAIABQUAAAAAAAAAAAAAAAIDAAEEBRITISIxcv/aAAgBAQABPwCqsaiQRpF2pLfvjj5j/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECEXH/2gAIAQIBAT8Aik70/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECERJx/9oACAEDAQE/AHSlcP/Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/lib/loadMDXMetadata.js
var loadMDXMetadata = __webpack_require__(803);
;// CONCATENATED MODULE: ./src/app/team/page.jsx


















function Culture() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "mt-24 bg-neutral-950 py-24 sm:mx-4 sm:mt-32 sm:rounded-xl lg:mt-40 lg:py-32",
        children: [
            /*#__PURE__*/ _jsx(SectionIntro, {
                eyebrow: "Our culture",
                title: "Balance your passion with your passion for life.",
                invert: true,
                children: /*#__PURE__*/ _jsx("p", {
                    children: "We are a group of like-minded people who share the same core values."
                })
            }),
            /*#__PURE__*/ _jsx(Container, {
                className: "mt-16",
                children: /*#__PURE__*/ _jsxs(GridList, {
                    children: [
                        /*#__PURE__*/ _jsx(GridListItem, {
                            title: "Loyalty",
                            invert: true,
                            children: "Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles."
                        }),
                        /*#__PURE__*/ _jsx(GridListItem, {
                            title: "Trust",
                            invert: true,
                            children: "We don’t care when our team works just as long as they are working every waking second."
                        }),
                        /*#__PURE__*/ _jsx(GridListItem, {
                            title: "Compassion",
                            invert: true,
                            children: "You never know what someone is going through at home and we make sure to never find out."
                        })
                    ]
                })
            })
        ]
    });
}
const team = [
    {
        title: "Team",
        people: [
            {
                name: "Schuyler Deerman",
                role: "Co-Founder",
                image: {
                    src: schuyler
                }
            },
            {
                name: "Peer Richelsen",
                role: "Co-Founder, Chairman",
                image: {
                    src: peer/* default */.Z
                }
            },
            {
                name: "Omar McAdam",
                role: "R&D Engineer",
                image: {
                    src: omar
                }
            },
            {
                name: "Esther Lizardo Garcia",
                role: "Frontend Developer",
                image: {
                    src: esther
                }
            },
            {
                name: "Claus-Peter Richelsen",
                role: "Advisor – Farmer, Mayor of Ausacker",
                image: {
                    src: claus_peter
                }
            },
            {
                name: "James Sinka",
                role: "Advisor – B.S. Chemistry and Materials Science",
                image: {
                    src: james
                }
            }
        ]
    }
];
function Team() {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Container/* Container */.W, {
        className: "mt-24 sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "space-y-24",
            children: team.map((group)=>/*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeInStagger */.o, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "font-display text-2xl font-semibold text-neutral-950",
                                    children: group.title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lg:col-span-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    role: "list",
                                    className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8",
                                    children: group.people.map((person)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "group relative overflow-hidden rounded-3xl bg-neutral-100",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            alt: "",
                                                            ...person.image,
                                                            className: "h-96 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 motion-safe:group-hover:scale-105"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "font-display text-base/6 font-semibold tracking-wide text-white",
                                                                    children: person.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "mt-2 text-sm text-white",
                                                                    children: person.role
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, person.name))
                                })
                            })
                        ]
                    })
                }, group.title))
        })
    });
}
const metadata = {
    title: "About Us",
    description: "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do."
};
async function About() {
    let blogArticles = (await (0,loadMDXMetadata/* loadMDXMetadata */.d)("blog")).slice(0, 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Team, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


/***/ }),

/***/ 1783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/peer.dabfb7cf.jpeg","height":800,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALUE/wD/xAAeEAABAwQDAAAAAAAAAAAAAAABAgMSAAQRFBMVIv/aAAgBAQABPwAXzvaKVsHVDMIY88gNf//EABgRAAIDAAAAAAAAAAAAAAAAAAABERJB/9oACAECAQE/ALRiP//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhFB/9oACAEDAQE/AHC9Z//Z","blurWidth":8,"blurHeight":8});

/***/ })

};
;