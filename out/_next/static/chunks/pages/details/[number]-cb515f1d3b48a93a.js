(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{9410:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details/[number]",function(){return r(8286)}])},8286:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return G},default:function(){return S}});var n=r(5893),a=r(7294),i=r(1163),l=r(1664),s=r.n(l),o=r(4902),c=r(3569),u=r(8981),d=r(7277),m=r(4040),h=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,f=(0,d.Gp)(function(e,t){let{htmlWidth:r,htmlHeight:n,alt:i,...l}=e;return a.createElement("img",{width:r,height:n,ref:t,alt:i,...l})});f.displayName="NativeImage";var p=(0,d.Gp)(function(e,t){let{fallbackSrc:r,fallback:n,src:i,srcSet:l,align:s,fit:o,loading:c,ignoreFallback:u,crossOrigin:p,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:x,...j}=e,b=null!=c||u||!(void 0!==r||void 0!==n),_=function(e){let{loading:t,src:r,srcSet:n,onLoad:i,onError:l,crossOrigin:s,sizes:o,ignoreFallback:c}=e,[u,d]=(0,a.useState)("pending");(0,a.useEffect)(()=>{d(r?"loading":"pending")},[r]);let h=(0,a.useRef)(),f=(0,a.useCallback)(()=>{if(!r)return;p();let e=new Image;e.src=r,s&&(e.crossOrigin=s),n&&(e.srcset=n),o&&(e.sizes=o),t&&(e.loading=t),e.onload=e=>{p(),d("loaded"),null==i||i(e)},e.onerror=e=>{p(),d("failed"),null==l||l(e)},h.current=e},[r,s,n,o,i,l,t]),p=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,m.G)(()=>{if(!c)return"loading"===u&&f(),()=>{p()}},[u,f,c]),c?"loaded":u}({...e,ignoreFallback:b}),v=h(_,g),y={ref:t,objectFit:o,objectPosition:s,...b?j:function(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}(j,["onError","onLoad"])};return v?n||a.createElement(d.m$.img,{as:f,className:"chakra-image__placeholder",src:r,...y}):a.createElement(d.m$.img,{as:f,src:i,srcSet:l,crossOrigin:p,loading:c,referrerPolicy:x,className:"chakra-image",...y})});p.displayName="Image",(0,d.Gp)((e,t)=>a.createElement(d.m$.img,{ref:t,as:f,className:"chakra-image",...e}));var g=r(4520),x=r(8387),j=(...e)=>e.filter(Boolean).join(" "),[b,_]=(0,x.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),v=(0,d.Gp)((e,t)=>{let r=(0,d.jC)("Table",e),{className:n,...i}=(0,g.Lr)(e);return a.createElement(b,{value:r},a.createElement(d.m$.table,{ref:t,__css:r.table,className:j("chakra-table",n),...i}))});v.displayName="Table";var y=(0,d.Gp)((e,t)=>{let{overflow:r,overflowX:n,className:i,...l}=e;return a.createElement(d.m$.div,{ref:t,className:j("chakra-table__container",i),...l,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:r??n??"auto",overflowY:"hidden",maxWidth:"100%"}})});(0,d.Gp)((e,t)=>{let{placement:r="bottom",...n}=e,i=_();return a.createElement(d.m$.caption,{...n,ref:t,__css:{...i.caption,captionSide:r}})}).displayName="TableCaption",(0,d.Gp)((e,t)=>{let r=_();return a.createElement(d.m$.thead,{...e,ref:t,__css:r.thead})});var E=(0,d.Gp)((e,t)=>{let r=_();return a.createElement(d.m$.tbody,{...e,ref:t,__css:r.tbody})});(0,d.Gp)((e,t)=>{let r=_();return a.createElement(d.m$.tfoot,{...e,ref:t,__css:r.tfoot})}),(0,d.Gp)(({isNumeric:e,...t},r)=>{let n=_();return a.createElement(d.m$.th,{...t,ref:r,__css:n.th,"data-is-numeric":e})});var w=(0,d.Gp)((e,t)=>{let r=_();return a.createElement(d.m$.tr,{...e,ref:t,__css:r.tr})}),N=(0,d.Gp)(({isNumeric:e,...t},r)=>{let n=_();return a.createElement(d.m$.td,{...t,ref:r,__css:n.td,"data-is-numeric":e})}),k=r(8193),O=r(9543),G=!0,S=function(e){var t=e.pokemon,r=(0,i.useRouter)();return(0,n.jsxs)(o.W2,{maxW:"2xl",paddingX:"10",paddingY:"5",centerContent:!0,children:[(0,n.jsx)(O.HJ,{description:t.descriptions,image:t.image,title:t.name,url:r.pathname},t.name),(0,n.jsx)(o.AB,{as:s(),href:"/",children:(0,n.jsx)(c.hU,{"aria-label":"Home",icon:(0,n.jsx)(k.iqr,{})})}),(0,n.jsxs)(u.Zb,{maxW:"sm",marginTop:"5",children:[(0,n.jsxs)(u.eW,{children:[(0,n.jsx)(p,{src:t.image,alt:t.name,borderRadius:"lg"}),(0,n.jsxs)(o.Kq,{mt:"6",spacing:"3",children:[(0,n.jsx)(o.X6,{size:"md",children:t.name}),(0,n.jsx)(o.xv,{children:t.descriptions}),(0,n.jsxs)(o.xv,{fontSize:"2xl",children:["#",t.number]})]})]}),(0,n.jsx)(o.iz,{}),(0,n.jsx)(u.iR,{children:(0,n.jsx)(y,{w:"100%",children:(0,n.jsx)(v,{variant:"unstyled",whiteSpace:"initial",children:(0,n.jsxs)(E,{children:[(0,n.jsxs)(w,{children:[(0,n.jsx)(N,{fontWeight:"medium",children:"Type(s)"}),(0,n.jsxs)(N,{children:[" | ",t.types.map(function(e){return e+" | "})]})]}),(0,n.jsxs)(w,{children:[(0,n.jsx)(N,{fontWeight:"medium",children:"Height"}),(0,n.jsx)(N,{children:t.height})]}),(0,n.jsxs)(w,{children:[(0,n.jsx)(N,{fontWeight:"medium",children:"Weight"}),(0,n.jsx)(N,{children:t.weight})]}),(0,n.jsxs)(w,{children:[(0,n.jsx)(N,{fontWeight:"medium",children:"Weakness(es)"}),(0,n.jsxs)(N,{w:"100%",children:[" ","| ",t.weaknesses.map(function(e){return e+" | "})]})]})]})})})})]})]})}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function o(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,a=e.attr,i=e.size,o=e.title,c=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(a)}}},function(e){e.O(0,[617,173,774,888,179],function(){return e(e.s=9410)}),_N_E=e.O()}]);