(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1038)}])},1210:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,l=r(7273).Z,a=o(r(7294)),c=r(6273),u=r(2725),i=r(3462),s=r(1018),f=r(7190),d=r(1210),p=r(8684),h={};function v(e,t,r,n){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch(function(e){});var o=n&&void 0!==n.locale?n.locale:e&&e.locale;h[t+"%"+r+(o?"%"+o:"")]=!0}}var x=a.default.forwardRef(function(e,t){var r,o,x=e.href,b=e.as,m=e.children,y=e.prefetch,g=e.passHref,j=e.replace,_=e.shallow,w=e.scroll,C=e.locale,M=e.onClick,L=e.onMouseEnter,k=e.onTouchStart,O=e.legacyBehavior,N=void 0===O?!0!==Boolean(!1):O,E=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,N&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));var P=!1!==y,R=a.default.useContext(i.RouterContext),S=a.default.useContext(s.AppRouterContext);S&&(R=S);var T=a.default.useMemo(function(){var e=n(c.resolveHref(R,x,!0),2),t=e[0],r=e[1];return{href:t,as:b?c.resolveHref(R,b):r||t}},[R,x,b]),I=T.href,B=T.as,H=a.default.useRef(I),U=a.default.useRef(B);N&&(o=a.default.Children.only(r));var D=N?o&&"object"==typeof o&&o.ref:t,F=n(f.useIntersection({rootMargin:"200px"}),3),z=F[0],A=F[1],Z=F[2],K=a.default.useCallback(function(e){(U.current!==B||H.current!==I)&&(Z(),U.current=B,H.current=I),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[B,D,I,Z,z]);a.default.useEffect(function(){var e=A&&P&&c.isLocalURL(I),t=void 0!==C?C:R&&R.locale,r=h[I+"%"+B+(t?"%"+t:"")];e&&!r&&v(R,I,B,{locale:t})},[B,I,A,C,P,R]);var V={ref:K,onClick:function(e){N||"function"!=typeof M||M(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,l,u,i,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&c.isLocalURL(r)){e.preventDefault();var d,p,h=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:i,scroll:u}):t[o?"replace":"push"](r,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}}(e,R,I,B,j,_,w,C,Boolean(S),P)},onMouseEnter:function(e){N||"function"!=typeof L||L(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!P&&S)&&c.isLocalURL(I)&&v(R,I,B,{priority:!0})},onTouchStart:function(e){N||"function"!=typeof k||k(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!P&&S)&&c.isLocalURL(I)&&v(R,I,B,{priority:!0})}};if(!N||g||"a"===o.type&&!("href"in o.props)){var X=void 0!==C?C:R&&R.locale,G=R&&R.isLocaleDomain&&d.getDomainLocale(B,X,R.locales,R.domainLocales);V.href=G||p.addBasePath(u.addLocale(B,X,R&&R.defaultLocale))}return N?a.default.cloneElement(o,V):a.default.createElement("a",Object.assign({},E,V),r)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!a,s=n(o.useState(!1),2),f=s[0],d=s[1],p=n(o.useState(null),2),h=p[0],v=p[1];return o.useEffect(function(){if(a){if(!i&&!f&&h&&h.tagName){var e,n,o,s,p,v,x;return n=function(e){return e&&d(e)},p=(s=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=c.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),c.set(r,t),t}(o={root:null==t?void 0:t.current,rootMargin:r})).id,v=s.observer,(x=s.elements).set(h,n),v.observe(h),function(){if(x.delete(h),v.unobserve(h),0===x.size){v.disconnect(),c.delete(p);var e=u.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&u.splice(e,1)}}}}else if(!f){var b=l.requestIdleCallback(function(){return d(!0)});return function(){return l.cancelIdleCallback(b)}}},[h,i,r,t,f]),[v,f,o.useCallback(function(){d(!1)},[])]};var o=r(7294),l=r(9311),a="function"==typeof IntersectionObserver,c=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294)),o=n.default.createContext(null);t.AppRouterContext=o;var l=n.default.createContext(null);t.LayoutRouterContext=l;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a;var c=n.default.createContext(null);t.TemplateContext=c},1038:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return h}});var o=r(5893),l=r(7294),a=r(1664),c=r.n(a),u=function(){return(0,o.jsx)("footer",{className:"px-4 text-center",children:(0,o.jsx)("div",{className:"border-t border-slate-900/5 py-6",children:(0,o.jsxs)("p",{className:"mt-5 text-center text-sm leading-6 text-slate-600",children:["\xa9 ",new Date().getFullYear()," ",(0,o.jsx)(c(),{href:"https://shahuluiux.com",children:(0,o.jsx)("a",{className:"font-medium hover:underline","aria-label":"Navigate to shahuluiux.com","aria-describedby":"shahuluiux.com",children:"ShahulUIUX"})}),". All rights reserved."]})})})},i=[{title:"home",url:"/"},{title:"about",url:"/#about"},{title:"portfolio",url:"/portfolio"},{title:"gallery",url:"/gallery"},{title:"contact",url:"/#contact"},],s=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1];return(0,o.jsx)("header",{className:"w-full bg-slate-50 border-b border-slate-900/5 sticky top-0",children:(0,o.jsx)("div",{className:"sm:container mx-auto sm:px-6 px-3 relative",children:(0,o.jsxs)("nav",{className:"flex justify-between items-center h-20",children:[(0,o.jsx)("div",{className:"cursor-pointer",children:(0,o.jsx)(c(),{href:"/",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-16 h-16",children:[(0,o.jsx)("path",{fill:"#EB1D36",d:"M126.1 472.9L3.1 260c-1.4-2.5-1.4-5.5 0-8l123-212.9c1.4-2.5 4.1-4 6.9-4h246c2.9 0 5.5 1.5 6.9 4l123 212.9c1.4 2.5 1.4 5.5 0 8l-123 212.9c-1.4 2.5-4.1 4-6.9 4H133c-2.9 0-5.5-1.5-6.9-4z"}),(0,o.jsx)("path",{fill:"#FFF",d:"M484.2 251.5c1.4 2.5 1.4 5.5 0 8L377.9 443.7c-3 5.1-10.4 5.1-13.3 0l-13.3-23c-1.4-2.4-1.4-5.3 0-7.7l57.9-100.1 11.1-18.7 4.3-7.4c3-5.1-.7-11.5-6.7-11.5H310.8c-4.2 0-7.7 3.4-7.7 7.7v165.2c0 4.2-3.4 7.7-7.7 7.7h-23c-4.2 0-7.7-3.4-7.7-7.7V63.9c0-4.2 3.4-7.7 7.7-7.7h23c4.2 0 7.7 3.4 7.7 7.7v165.2c0 4.2 3.4 7.7 7.7 7.7h106.5c6.1 0 10-6.7 6.9-12L351.3 98c-1.4-2.4-1.4-5.3 0-7.7l13.3-23c3-5.1 10.4-5.1 13.3 0l106.3 184.2z M207 209.9V102.4c0-4.2-3.4-7.7-7.7-7.7h-32c-2.7 0-5.3 1.5-6.7 3.8l-73 126.8c-3 5.1.7 11.5 6.7 11.5h143.4c4.2 0 7.7 3.4 7.7 7.7v203.6c0 4.2-3.4 7.7-7.7 7.7h-92.6c-2.7 0-5.3-1.5-6.7-3.8L58.8 313.4l-.3-.4-4.1-7.1c-3-5.1.7-11.5 6.6-11.5h26.6c2.7 0 5.3 1.4 6.6 3.8l8.6 14.7.3.6 57.6 100c1.4 2.4 3.9 3.8 6.7 3.8h32c4.2 0 7.7-3.4 7.7-7.7V282.9c0-4.2-3.4-7.7-7.7-7.7H41.1c-2.8 0-5.3-1.5-6.7-3.9l-6.7-11.8c-1.3-2.4-1.3-5.3 0-7.6L138.6 60.1c1.4-2.4 3.9-3.8 6.7-3.8h92.6c4.2 0 7.7 3.4 7.7 7.7v146c0 4.2-3.4 7.7-7.7 7.7h-23c-4.4-.1-7.9-3.6-7.9-7.8z M103.4 198L92.3 217.2 103.3 198z"})]})})}),(0,o.jsx)("ul",{className:t?"absolute top-20 right-0 bg-slate-50 text-center flex flex-col gap-6 py-10 border border-slate-900/5":"sm:flex gap-6 hidden",onClick:function(){return r(!1)},children:i.map(function(e,r){return(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:e.url,"aria-label":"".concat(e.title," link"),children:(0,o.jsx)("a",{href:e.url,className:t?"font-semibold uppercase px-20":"font-semibold uppercase py-6 hover:text-[#eb1d36]",children:e.title})})},r)})}),(0,o.jsx)("button",{className:"block sm:hidden border rounded-md bg-slate100 bg-[#eb1d36]",onClick:function(){return r(!t)},"aria-label":"menu toggle button",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-10 h-10 text-white",children:t?(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}):(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"})})})]})})})};function f(e){var t=e.children;return(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)(s,{}),(0,o.jsx)("main",{children:t}),(0,o.jsx)(u,{})]})}var d=r(9008),p=r.n(d);r(906);var h=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p(),{children:(0,o.jsx)("link",{rel:"icon",href:"/shahuluiux.com./favicon.ico"})}),(0,o.jsx)(f,{children:(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}({},r))})]})}},906:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);