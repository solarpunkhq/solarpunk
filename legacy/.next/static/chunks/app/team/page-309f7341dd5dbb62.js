(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{8182:function(A,e,t){Promise.resolve().then(t.t.bind(t,3029,23)),Promise.resolve().then(t.bind(t,7390)),Promise.resolve().then(t.bind(t,3974)),Promise.resolve().then(t.bind(t,6683)),Promise.resolve().then(t.bind(t,5245)),Promise.resolve().then(t.bind(t,7275)),Promise.resolve().then(t.bind(t,2473)),Promise.resolve().then(t.bind(t,8543)),Promise.resolve().then(t.bind(t,9439)),Promise.resolve().then(t.bind(t,7036)),Promise.resolve().then(t.t.bind(t,7095,23)),Promise.resolve().then(t.bind(t,3703))},9439:function(A,e,t){"use strict";t.r(e),t.d(e,{CTA:function(){return s},ContactButtons:function(){return g}});var i=t(9268),a=t(3831),n=t(1917),r=t(6006);function s(A){let{style:e,invert:t,link:s,href:g,className:o,children:l,...h}=A;return o=(0,a.Z)(o,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",t?"bg-white text-neutral-950 hover:bg-neutral-200":"bg-neutral-950 text-white hover:bg-neutral-800"),(0,r.useEffect)(()=>{!async function(){let A=await (0,n.o)();A("ui",{theme:"light",styles:{branding:{brandColor:"#F97315"}},hideEventTypeDetails:!1,layout:"month_view"})}()},[]),(0,i.jsx)("button",{className:o,"data-cal-link":s,"data-cal-config":'{"layout":"month_view"}',children:l})}function g(){return(0,i.jsx)("div",{className:"mt-4 gap-2 space-y-2 md:flex md:space-y-0",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)(s,{className:"group mt-6 flex h-12 items-center border-2 border-orange-500 bg-orange-500 px-4 text-lg shadow-lg hover:border-orange-700 hover:bg-orange-500",link:"team/solarpunk/farmland",children:[(0,i.jsx)("img",{src:"https://cal.com/api/avatar/bb2fd2c4-9df6-4837-ba82-87b38b2cb5ba.png",className:"h-6 w-6 rounded-full border-2 border-orange-500"}),(0,i.jsx)("img",{src:"https://cal.com/api/avatar/8d4e5764-ade0-4ff1-bc95-7a31a3572267.png",className:"-ml-2 h-6 w-6 rounded-full border-2 border-orange-500"}),(0,i.jsx)("span",{className:"ml-2 mt-px inline-block",children:"Schedule a call"})]}),(0,i.jsx)("small",{className:"block text-center !text-white",children:"see if you qualify"})]})})}t(5846)},8543:function(A,e,t){"use strict";t.r(e),t.d(e,{FadeIn:function(){return o},FadeInStagger:function(){return l}});var i=t(9268),a=t(6006),n=t(1971),r=t(1775);let s=(0,a.createContext)(!1),g={once:!0,margin:"0px 0px -200px"};function o(A){let e=(0,n.J)(),t=(0,a.useContext)(s);return(0,i.jsx)(r.E.div,{variants:{hidden:{opacity:0,y:e?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...t?{}:{initial:"hidden",whileInView:"visible",viewport:g},...A})}function l(A){let{faster:e=!1,...t}=A;return(0,i.jsx)(s.Provider,{value:!0,children:(0,i.jsx)(r.E.div,{initial:"hidden",whileInView:"visible",viewport:g,transition:{staggerChildren:e?.12:.2},...t})})}},3703:function(A,e,t){"use strict";t.r(e),t.d(e,{GridPattern:function(){return s}});var i=t(9268),a=t(6006),n=t(1775);function r(A){let{x:e,y:t,...a}=A;return(0,i.jsx)(n.E.path,{transform:`translate(${-32*t+96*e} ${160*t})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...a})}function s(A){let{yOffset:e=0,interactive:t=!1,...n}=A,s=(0,a.useId)(),g=(0,a.useRef)(),o=(0,a.useRef)(),l=(0,a.useRef)(0),[h,E]=(0,a.useState)([]);return(0,a.useEffect)(()=>{if(t)return window.addEventListener("mousemove",A),()=>{window.removeEventListener("mousemove",A)};function A(A){if(!g.current)return;let t=g.current.getBoundingClientRect(),i=A.clientX-t.left,a=A.clientY-t.top;!(i<0)&&!(a<0)&&!(i>t.width)&&!(a>t.height)&&(i=i-t.width/2-32,a-=e,i+=Math.tan(.2)*a,i=Math.floor(i/96),a=Math.floor(a/160),(o.current?.[0]!==i||o.current?.[1]!==a)&&(o.current=[i,a],E(A=>{let e=l.current++;return[...A,[i,a,e]].filter(A=>!(A[0]===i&&A[1]===a&&A[2]!==e))})))}},[e,t]),(0,i.jsxs)("svg",{ref:g,"aria-hidden":"true",...n,children:[(0,i.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${s})`,strokeWidth:"0"}),(0,i.jsxs)("svg",{x:"50%",y:e,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(A=>(0,i.jsx)(r,{x:A[0],y:A[1]},`${A}`)),h.map(A=>(0,i.jsx)(r,{x:A[0],y:A[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{E(e=>e.filter(e=>e[2]!==A[2]))}},A[2]))]}),(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:s,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${e})`,fill:"none",children:(0,i.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},7036:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/solarpunk-hero.e74463ff.jpg",height:1024,width:1792,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqAn/AP/EABsQAQACAgMAAAAAAAAAAAAAAAIBAwARBCEi/9oACAEBAAE/ADyLTVspQ/Jhb7jP/8QAGhEAAgIDAAAAAAAAAAAAAAAAATEAAgMRIf/aAAgBAgEBPwDKe1SDG5//xAAZEQEAAgMAAAAAAAAAAAAAAAABABECIUH/2gAIAQMBAT8AwWmlN8n/2Q==",blurWidth:8,blurHeight:5}},7275:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/claus-peter.524e2f80.jpg",height:660,width:660,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALkFf//EABsQAQACAgMAAAAAAAAAAAAAAAMBBgAiAhMU/9oACAEBAAE/ABsYLZvDwZOmTkY11l8//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AFT/xAAZEQEAAgMAAAAAAAAAAAAAAAACAAEDEUH/2gAIAQMBAT8AzChZ10z/2Q==",blurWidth:8,blurHeight:8}},5245:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/esther.3bddd68a.jpeg",height:3088,width:2316,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJFn/8QAHRABAAEDBQAAAAAAAAAAAAAAAgMBBBEABQYSQf/aAAgBAQABPwDceRGyvbqERDuUC3JTJWKeY1//xAAWEQADAAAAAAAAAAAAAAAAAAAAERL/2gAIAQIBAT8AlH//xAAWEQEBAQAAAAAAAAAAAAAAAABBADH/2gAIAQMBAT8A0L//2Q==",blurWidth:6,blurHeight:8}},6683:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/james.62034880.jpeg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJAoH//EAB8QAAIABQUAAAAAAAAAAAAAAAIDAAEEBRITISIxcv/aAAgBAQABPwCqsaiQRpF2pLfvjj5j/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECEXH/2gAIAQIBAT8Aik70/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECERJx/9oACAEDAQE/AHSlcP/Z",blurWidth:8,blurHeight:8}},3974:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/omar.59d6aeaa.jpeg",height:500,width:500,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKwV/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACAwQRMTL/2gAIAQEAAT8AjFh1qSsInE4DudBf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAjIAATH/2gAIAQIBAT8AAX1rn//EABgRAAIDAAAAAAAAAAAAAAAAAAABAzJy/9oACAEDAQE/AJHTCP/Z",blurWidth:8,blurHeight:8}},7390:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/peer.dabfb7cf.jpeg",height:800,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALUE/wD/xAAeEAABAwQDAAAAAAAAAAAAAAABAgMSAAQRFBMVIv/aAAgBAQABPwAXzvaKVsHVDMIY88gNf//EABgRAAIDAAAAAAAAAAAAAAAAAAABERJB/9oACAECAQE/ALRiP//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhFB/9oACAEDAQE/AHC9Z//Z",blurWidth:8,blurHeight:8}},2473:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/schuyler.28f0ad7c.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAiQX/AP/EAB0QAAMAAAcAAAAAAAAAAAAAAAECBAADBhEUIlH/2gAIAQEAAT8AqlkGmISsg5ZrzFdwO/uxx//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABcRAAMBAAAAAAAAAAAAAAAAAAABQXH/2gAIAQMBAT8Acw//2Q==",blurWidth:8,blurHeight:8}}},function(A){A.O(0,[703,155,769,253,698,744],function(){return A(A.s=8182)}),_N_E=A.O()}]);