(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6475:function(e,t,n){Promise.resolve().then(n.bind(n,7848))},7848:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var l=n(9268),a=n(6006),i=n(6938);let s=(e,t,n)=>Math.min(Math.max(e,t),n);function r(e){let t=(0,a.useRef)(null),n=(0,a.useRef)(null),[r,c]=(0,a.useState)(!1),[d,u]=function(){let[e,t]=(0,a.useState)([0,0]);return(0,a.useEffect)(()=>{function e(){t([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}(),[h,f]=(0,a.useState)([0,0]),[v,x]=(0,a.useState)(0);return(0,a.useEffect)(()=>{var e;let l=n.current,a=matchMedia("(pointer:fine)").matches,i=null===(e=t.current)||void 0===e?void 0:e.instance.onChangeCallbacks;if(a){let e=e=>{var n;let{pageX:a,pageY:i}=e,s=null===(n=t.current)||void 0===n?void 0:n.instance.getContext().state,{x:r,y:c}=o(a,i,l.width,l.height,s);f([r,c])},n=e=>{let t=e.instance.getContext().state;x(t.scale)};return l.addEventListener("mousemove",e),null==i||i.add(n),()=>{l.removeEventListener("mousemove",e),null==i||i.delete(n)}}{let e=e=>{let t=e.instance.getContext().state,n=l.getBoundingClientRect(),a=s(d/2,n.x,n.x+n.width),i=s(u/2,n.y,n.y+n.height),{x:r,y:c}=o(a,i,l.width,l.height,t);f([r,c]),x(t.scale)};return null==i||i.add(e),()=>{null==i||i.delete(e)}}},[u,d]),(0,a.useEffect)(()=>{let e=new Image,t=n.current,l=t.getContext("2d"),a=()=>{let{width:n,height:a}=e;t.width=n,t.height=a,l.imageSmoothingEnabled=!1,l.drawImage(e,0,0),c(!0)};return e.addEventListener("load",a),e.src="./img.png",()=>{e.removeEventListener("load",a)}},[]),(0,a.useEffect)(()=>{var n,l;let a=null===(n=t.current)||void 0===n?void 0:n.instance.getContext().state;null===(l=e.onChange)||void 0===l||l.call(e,h[0],h[1],v,a.positionX,a.positionY)},[e,h,v]),(0,a.useEffect)(()=>{var t;null===(t=e.onCanvas)||void 0===t||t.call(e,n)},[e]),(0,a.useEffect)(()=>{var e;let{width:l,height:a}=n.current;null===(e=t.current)||void 0===e||e.centerView(Math.min(d/l,u/a)/1.5)},[r,d,u]),(0,l.jsx)(i.d$,{ref:t,minScale:.2,maxScale:50,limitToBounds:!1,velocityAnimation:{disabled:!0},doubleClick:{disabled:!0},zoomAnimation:{disabled:!0},children:(0,l.jsx)(i.Uv,{wrapperClass:"!h-full !w-full ".concat(r?"":"hidden"),children:(0,l.jsx)("div",{className:"-z-10 will-change-auto",onClick:()=>{var t;null===(t=e.onClick)||void 0===t||t.call(e,h[0],h[1],n)},children:(0,l.jsx)("canvas",{style:{imageRendering:"pixelated"},ref:n})})})})}function o(e,t,n,l,a){let i=s(Math.floor((e-a.positionX)/a.scale),0,n),r=s(Math.floor((t-a.positionY)/a.scale),0,l);return{x:i,y:r}}var c=n(9738),d=n(1641);function u(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.u,{appear:!0,show:e.open,as:a.Fragment,children:(0,l.jsxs)(d.V,{as:"div",className:"z-10",onClose:e.close,children:[(0,l.jsx)(c.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]"})}),(0,l.jsx)("div",{className:"fixed inset-0",children:(0,l.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,l.jsx)(c.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,l.jsxs)(d.V.Panel,{className:"max-h-96 w-full max-w-md overflow-auto break-all rounded-md border-2 bg-white p-6 align-middle shadow-md",children:[(0,l.jsx)(d.V.Title,{as:"h3",className:"text-2xl font-medium text-black",children:e.title}),(0,l.jsx)("div",{className:"mt-2",children:e.children}),(0,l.jsx)("div",{className:"mt-4 flex justify-end",children:(0,l.jsx)("button",{onClick:e.close,children:"OK"})})]})})})})]})})})}function h(){let[e,t]=(0,a.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"icon-button col-start-5 row-start-1",onClick:()=>t(!0),children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"h-full w-full",children:[(0,l.jsx)("path",{d:"M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zm0 17A7.875 7.875 0 1117.875 10 7.884 7.884 0 0110 17.875z"}),(0,l.jsx)("path",{d:"M10.479 13.635a1.085 1.085 0 00-.547-.141 1.035 1.035 0 00-.537.145 1.009 1.009 0 00-.379.388 1.1 1.1 0 00-.137.547 1.018 1.018 0 00.143.533 1.045 1.045 0 00.387.38 1.056 1.056 0 00.536.14 1.076 1.076 0 00.54-.14 1.008 1.008 0 00.387-.385 1.08 1.08 0 00.14-.541 1.05 1.05 0 00-.533-.926zM11.507 5.641a3.213 3.213 0 00-1.425-.309 3.15 3.15 0 00-1.535.368 2.646 2.646 0 00-1.028.974 2.52 2.52 0 00-.363 1.312h1.463a1.172 1.172 0 01.181-.661 1.327 1.327 0 01.516-.468 1.623 1.623 0 011.415-.017 1.212 1.212 0 01.5.431 1.1 1.1 0 01.181.618 1.063 1.063 0 01-.119.5 1.56 1.56 0 01-.3.4 9.531 9.531 0 01-.492.43 6.846 6.846 0 00-.656.585 2.292 2.292 0 00-.431.656 2.206 2.206 0 00-.178.919v.766h1.429v-.793a1.281 1.281 0 01.13-.58 1.824 1.824 0 01.321-.459c.128-.132.3-.3.533-.493a7.691 7.691 0 00.633-.584 2.279 2.279 0 00.41-.622 2.015 2.015 0 00.167-.85A2.262 2.262 0 0012.5 6.5a2.41 2.41 0 00-.993-.859z"})]})}),e&&(0,l.jsx)(u,{title:"About Drawr",open:e,close:()=>t(!1),children:"Drawr is an r/Place clone."})]})}let f=(0,a.forwardRef)(function(e,t){let[n,i]=(0,a.useState)("#000");return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{background:n},className:"h-full w-full rounded-full",children:(0,l.jsx)("input",{type:"color",ref:t,className:"h-full w-full opacity-0",onChange:e=>i(e.target.value)})})})});var v=n(54);let x=(0,v.ZP)();function m(){var e;let[t,n]=(0,a.useState)(0),[i,s]=(0,a.useState)(0),[o,c]=(0,a.useState)(0),[d,u]=(0,a.useState)(0),[v,m]=(0,a.useState)(1),g=(0,a.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{onChange:(e,t,l,a,i)=>{n(e),s(t),c(a),u(i),m(l)},onClick:(e,t,n)=>{let l=n.current,a=l.getContext("2d");a.fillStyle=g.current.value,a.fillRect(e,t,1,1),x.emit("set",{x:e,y:t,color:g.current.value})},onCanvas:e=>{x.on("set",t=>{let n=e.current,l=n.getContext("2d");l.fillStyle=t.color,l.fillRect(t.x,t.y,1,1)})}}),(0,l.jsxs)("div",{className:"pointer-events-none fixed inset-0 z-10 grid h-full grid-cols-[35px,1fr,200px,1fr,35px] grid-rows-[35px,1fr,35px] p-2 [&>*]:pointer-events-auto",children:[(0,l.jsxs)("div",{className:"pill col-start-3 row-start-1",children:["(",t,", ",i,") ",v.toFixed(2),"x"]}),(0,l.jsx)("button",{className:"icon-button col-start-1 row-start-1",children:(0,l.jsx)(f,{ref:g})}),(0,l.jsx)(h,{})]}),(0,l.jsx)("div",{className:"pointer-events-none fixed inset-0 h-full overflow-hidden",children:(0,l.jsx)("div",{className:"absolute opacity-50",style:{backgroundColor:null===(e=g.current)||void 0===e?void 0:e.value,width:v,height:v,left:t*v+o,top:i*v+d}})})]})}}},function(e){e.O(0,[79,455,744],function(){return e(e.s=6475)}),_N_E=e.O()}]);