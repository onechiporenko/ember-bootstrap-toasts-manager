/*! For license information please see chunk.736.4dcabb43c5ed8f2e380f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[736],{981:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>x,afterRead:()=>g,afterWrite:()=>E,applyStyles:()=>C,arrow:()=>Q,auto:()=>s,basePlacements:()=>u,beforeMain:()=>w,beforeRead:()=>b,beforeWrite:()=>T,bottom:()=>i,clippingParents:()=>f,computeStyles:()=>ne,createPopper:()=>Ne,createPopperBase:()=>Ae,createPopperLite:()=>Ce,detectOverflow:()=>be,end:()=>l,eventListeners:()=>ie,flip:()=>ye,hide:()=>Oe,left:()=>a,main:()=>O,modifierPhases:()=>j,offset:()=>xe,placements:()=>m,popper:()=>d,popperGenerator:()=>De,popperOffsets:()=>Te,preventOverflow:()=>ke,read:()=>y,reference:()=>h,right:()=>o,start:()=>c,top:()=>r,variationPlacements:()=>v,viewport:()=>p,write:()=>k})
var r="top",i="bottom",o="right",a="left",s="auto",u=[r,i,o,a],c="start",l="end",f="clippingParents",p="viewport",d="popper",h="reference",v=u.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+l])}),[]),m=[].concat(u,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+l])}),[]),b="beforeRead",y="read",g="afterRead",w="beforeMain",O="main",x="afterMain",T="beforeWrite",k="write",E="afterWrite",j=[b,y,g,w,O,x,T,k,E]
function S(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function D(e){return e instanceof P(e).Element||e instanceof Element}function A(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function N(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}const C={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e]
A(i)&&S(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
A(r)&&S(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function R(e){return e.split("-")[0]}var F=Math.max,M=Math.min,L=Math.round
function I(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function B(){return!/^((?!chrome|android).)*safari/i.test(I())}function _(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var r=e.getBoundingClientRect(),i=1,o=1
t&&A(e)&&(i=e.offsetWidth>0&&L(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&L(r.height)/e.offsetHeight||1)
var a=(D(e)?P(e):window).visualViewport,s=!B()&&n,u=(r.left+(s&&a?a.offsetLeft:0))/i,c=(r.top+(s&&a?a.offsetTop:0))/o,l=r.width/i,f=r.height/o
return{width:l,height:f,top:c,right:u+l,bottom:c+f,left:u,x:u,y:c}}function W(e){var t=_(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function z(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&N(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function G(e){return P(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(S(e))>=0}function q(e){return((D(e)?e.ownerDocument:e.document)||window.document).documentElement}function U(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(N(e)?e.host:null)||q(e)}function V(e){return A(e)&&"fixed"!==G(e).position?e.offsetParent:null}function $(e){for(var t=P(e),n=V(e);n&&H(n)&&"static"===G(n).position;)n=V(n)
return n&&("html"===S(n)||"body"===S(n)&&"static"===G(n).position)?t:n||function(e){var t=/firefox/i.test(I())
if(/Trident/i.test(I())&&A(e)&&"fixed"===G(e).position)return null
var n=U(e)
for(N(n)&&(n=n.host);A(n)&&["html","body"].indexOf(S(n))<0;){var r=G(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return F(e,M(t,n))}function K(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function J(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const Q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,c=e.options,l=n.elements.arrow,f=n.modifiersData.popperOffsets,p=R(n.placement),d=Y(p),h=[a,o].indexOf(p)>=0?"height":"width"
if(l&&f){var v=function(e,t){return K("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:J(e,u))}(c.padding,n),m=W(l),b="y"===d?r:a,y="y"===d?i:o,g=n.rects.reference[h]+n.rects.reference[d]-f[d]-n.rects.popper[h],w=f[d]-n.rects.reference[d],O=$(l),x=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,T=g/2-w/2,k=v[b],E=x-m[h]-v[y],j=x/2-m[h]/2+T,S=X(k,j,E),P=d
n.modifiersData[s]=((t={})[P]=S,t.centerOffset=S-j,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&z(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function Z(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,n=e.popper,s=e.popperRect,u=e.placement,c=e.variation,f=e.offsets,p=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,m=e.isFixed,b=f.x,y=void 0===b?0:b,g=f.y,w=void 0===g?0:g,O="function"==typeof v?v({x:y,y:w}):{x:y,y:w}
y=O.x,w=O.y
var x=f.hasOwnProperty("x"),T=f.hasOwnProperty("y"),k=a,E=r,j=window
if(h){var S=$(n),D="clientHeight",A="clientWidth"
S===P(n)&&"static"!==G(S=q(n)).position&&"absolute"===p&&(D="scrollHeight",A="scrollWidth"),(u===r||(u===a||u===o)&&c===l)&&(E=i,w-=(m&&S===j&&j.visualViewport?j.visualViewport.height:S[D])-s.height,w*=d?1:-1),u!==a&&(u!==r&&u!==i||c!==l)||(k=o,y-=(m&&S===j&&j.visualViewport?j.visualViewport.width:S[A])-s.width,y*=d?1:-1)}var N,C=Object.assign({position:p},h&&ee),R=!0===v?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1
return{x:L(n*i)/i||0,y:L(r*i)/i||0}}({x:y,y:w},P(n)):{x:y,y:w}
return y=R.x,w=R.y,d?Object.assign({},C,((N={})[E]=T?"0":"",N[k]=x?"0":"",N.transform=(j.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",N)):Object.assign({},C,((t={})[E]=T?w+"px":"",t[k]=x?y+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s=n.roundOffsets,u=void 0===s||s,c={placement:R(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var re={passive:!0}
const ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,a=r.resize,s=void 0===a||a,u=P(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return o&&c.forEach((function(e){e.addEventListener("scroll",n.update,re)})),s&&u.addEventListener("resize",n.update,re),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),s&&u.removeEventListener("resize",n.update,re)}},data:{}}
var oe={left:"right",right:"left",bottom:"top",top:"bottom"}
function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var se={start:"end",end:"start"}
function ue(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e){var t=P(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function le(e){return _(q(e)).left+ce(e).scrollLeft}function fe(e){var t=G(e),n=t.overflow,r=t.overflowX,i=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+i+r)}function pe(e){return["html","body","#document"].indexOf(S(e))>=0?e.ownerDocument.body:A(e)&&fe(e)?e:pe(U(e))}function de(e,t){var n
void 0===t&&(t=[])
var r=pe(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=P(r),a=i?[o].concat(o.visualViewport||[],fe(r)?r:[]):r,s=t.concat(a)
return i?s:s.concat(de(U(a)))}function he(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ve(e,t,n){return t===p?he(function(e,t){var n=P(e),r=q(e),i=n.visualViewport,o=r.clientWidth,a=r.clientHeight,s=0,u=0
if(i){o=i.width,a=i.height
var c=B();(c||!c&&"fixed"===t)&&(s=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:s+le(e),y:u}}(e,n)):D(t)?function(e,t){var n=_(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):he(function(e){var t,n=q(e),r=ce(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=F(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=F(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-r.scrollLeft+le(e),u=-r.scrollTop
return"rtl"===G(i||n).direction&&(s+=F(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:s,y:u}}(q(e)))}function me(e){var t,n=e.reference,s=e.element,u=e.placement,f=u?R(u):null,p=u?Z(u):null,d=n.x+n.width/2-s.width/2,h=n.y+n.height/2-s.height/2
switch(f){case r:t={x:d,y:n.y-s.height}
break
case i:t={x:d,y:n.y+n.height}
break
case o:t={x:n.x+n.width,y:h}
break
case a:t={x:n.x-s.width,y:h}
break
default:t={x:n.x,y:n.y}}var v=f?Y(f):null
if(null!=v){var m="y"===v?"height":"width"
switch(p){case c:t[v]=t[v]-(n[m]/2-s[m]/2)
break
case l:t[v]=t[v]+(n[m]/2-s[m]/2)}}return t}function be(e,t){void 0===t&&(t={})
var n=t,a=n.placement,s=void 0===a?e.placement:a,c=n.strategy,l=void 0===c?e.strategy:c,v=n.boundary,m=void 0===v?f:v,b=n.rootBoundary,y=void 0===b?p:b,g=n.elementContext,w=void 0===g?d:g,O=n.altBoundary,x=void 0!==O&&O,T=n.padding,k=void 0===T?0:T,E=K("number"!=typeof k?k:J(k,u)),j=w===d?h:d,P=e.rects.popper,N=e.elements[x?j:w],C=function(e,t,n,r){var i="clippingParents"===t?function(e){var t=de(U(e)),n=["absolute","fixed"].indexOf(G(e).position)>=0&&A(e)?$(e):e
return D(n)?t.filter((function(e){return D(e)&&z(e,n)&&"body"!==S(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),a=o[0],s=o.reduce((function(t,n){var i=ve(e,n,r)
return t.top=F(i.top,t.top),t.right=M(i.right,t.right),t.bottom=M(i.bottom,t.bottom),t.left=F(i.left,t.left),t}),ve(e,a,r))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(D(N)?N:N.contextElement||q(e.elements.popper),m,y,l),R=_(e.elements.reference),L=me({reference:R,element:P,strategy:"absolute",placement:s}),I=he(Object.assign({},P,L)),B=w===d?I:R,W={top:C.top-B.top+E.top,bottom:B.bottom-C.bottom+E.bottom,left:C.left-B.left+E.left,right:B.right-C.right+E.right},H=e.modifiersData.offset
if(w===d&&H){var V=H[s]
Object.keys(W).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,n=[r,i].indexOf(e)>=0?"y":"x"
W[e]+=V[n]*t}))}return W}const ye={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,l=e.name
if(!t.modifiersData[l]._skip){for(var f=n.mainAxis,p=void 0===f||f,d=n.altAxis,h=void 0===d||d,b=n.fallbackPlacements,y=n.padding,g=n.boundary,w=n.rootBoundary,O=n.altBoundary,x=n.flipVariations,T=void 0===x||x,k=n.allowedAutoPlacements,E=t.options.placement,j=R(E),S=b||(j!==E&&T?function(e){if(R(e)===s)return[]
var t=ae(e)
return[ue(e),t,ue(t)]}(E):[ae(E)]),P=[E].concat(S).reduce((function(e,n){return e.concat(R(n)===s?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?m:c,f=Z(r),p=f?s?v:v.filter((function(e){return Z(e)===f})):u,d=p.filter((function(e){return l.indexOf(e)>=0}))
0===d.length&&(d=p)
var h=d.reduce((function(t,n){return t[n]=be(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[R(n)],t}),{})
return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:g,rootBoundary:w,padding:y,flipVariations:T,allowedAutoPlacements:k}):n)}),[]),D=t.rects.reference,A=t.rects.popper,N=new Map,C=!0,F=P[0],M=0;M<P.length;M++){var L=P[M],I=R(L),B=Z(L)===c,_=[r,i].indexOf(I)>=0,W=_?"width":"height",z=be(t,{placement:L,boundary:g,rootBoundary:w,altBoundary:O,padding:y}),G=_?B?o:a:B?i:r
D[W]>A[W]&&(G=ae(G))
var H=ae(G),q=[]
if(p&&q.push(z[I]<=0),h&&q.push(z[G]<=0,z[H]<=0),q.every((function(e){return e}))){F=L,C=!1
break}N.set(L,q)}if(C)for(var U=function(e){var t=P.find((function(t){var n=N.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return F=t,"break"},V=T?3:1;V>0&&"break"!==U(V);V--);t.placement!==F&&(t.modifiersData[l]._skip=!0,t.placement=F,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ge(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function we(e){return[r,o,i,a].some((function(t){return e[t]>=0}))}const Oe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=be(t,{elementContext:"reference"}),s=be(t,{altBoundary:!0}),u=ge(a,r),c=ge(s,i,o),l=we(u),f=we(c)
t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}},xe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,s=n.offset,u=void 0===s?[0,0]:s,c=m.reduce((function(e,n){return e[n]=function(e,t,n){var i=R(e),s=[a,r].indexOf(i)>=0?-1:1,u="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=u[0],l=u[1]
return c=c||0,l=(l||0)*s,[a,o].indexOf(i)>=0?{x:l,y:c}:{x:c,y:l}}(n,t.rects,u),e}),{}),l=c[t.placement],f=l.x,p=l.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=p),t.modifiersData[i]=c}},Te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ke={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,u=n.mainAxis,l=void 0===u||u,f=n.altAxis,p=void 0!==f&&f,d=n.boundary,h=n.rootBoundary,v=n.altBoundary,m=n.padding,b=n.tether,y=void 0===b||b,g=n.tetherOffset,w=void 0===g?0:g,O=be(t,{boundary:d,rootBoundary:h,padding:m,altBoundary:v}),x=R(t.placement),T=Z(t.placement),k=!T,E=Y(x),j="x"===E?"y":"x",S=t.modifiersData.popperOffsets,P=t.rects.reference,D=t.rects.popper,A="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,N="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0}
if(S){if(l){var I,B="y"===E?r:a,_="y"===E?i:o,z="y"===E?"height":"width",G=S[E],H=G+O[B],q=G-O[_],U=y?-D[z]/2:0,V=T===c?P[z]:D[z],K=T===c?-D[z]:-P[z],J=t.elements.arrow,Q=y&&J?W(J):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[B],ne=ee[_],re=X(0,P[z],Q[z]),ie=k?P[z]/2-U-re-te-N.mainAxis:V-re-te-N.mainAxis,oe=k?-P[z]/2+U+re+ne+N.mainAxis:K+re+ne+N.mainAxis,ae=t.elements.arrow&&$(t.elements.arrow),se=ae?"y"===E?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(I=null==C?void 0:C[E])?I:0,ce=G+oe-ue,le=X(y?M(H,G+ie-ue-se):H,G,y?F(q,ce):q)
S[E]=le,L[E]=le-G}if(p){var fe,pe="x"===E?r:a,de="x"===E?i:o,he=S[j],ve="y"===j?"height":"width",me=he+O[pe],ye=he-O[de],ge=-1!==[r,a].indexOf(x),we=null!=(fe=null==C?void 0:C[j])?fe:0,Oe=ge?me:he-P[ve]-D[ve]-we+N.altAxis,xe=ge?he+P[ve]+D[ve]-we-N.altAxis:ye,Te=y&&ge?function(e,t,n){var r=X(e,t,n)
return r>n?n:r}(Oe,he,xe):X(y?Oe:me,he,y?xe:ye)
S[j]=Te,L[j]=Te-he}t.modifiersData[s]=L}},requiresIfExists:["offset"]}
function Ee(e,t,n){void 0===n&&(n=!1)
var r,i,o=A(t),a=A(t)&&function(e){var t=e.getBoundingClientRect(),n=L(t.width)/e.offsetWidth||1,r=L(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),s=q(t),u=_(e,a,n),c={scrollLeft:0,scrollTop:0},l={x:0,y:0}
return(o||!o&&!n)&&(("body"!==S(t)||fe(s))&&(c=(r=t)!==P(r)&&A(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:ce(r)),A(t)?((l=_(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=le(s))),{x:u.left+c.scrollLeft-l.x,y:u.top+c.scrollTop-l.y,width:u.width,height:u.height}}function je(e){var t=new Map,n=new Set,r=[]
function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}var Se={placement:"bottom",modifiers:[],strategy:"absolute"}
function Pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?Se:i
return function(e,t,n){void 0===n&&(n=o)
var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Se,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,l={state:s,setOptions:function(n){var i="function"==typeof n?n(s.options):n
f(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:D(e)?de(e):e.contextElement?de(e.contextElement):[],popper:de(t)}
var a,c,p=function(e){var t=je(e)
return j.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return s.orderedModifiers=p.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect
if("function"==typeof i){var o=i({state:s,name:t,instance:l,options:r})
u.push(o||function(){})}})),l.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper
if(Pe(t,n)){s.rects={reference:Ee(t,$(n),"fixed"===s.options.strategy),popper:W(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],o=i.fn,a=i.options,u=void 0===a?{}:a,f=i.name
"function"==typeof o&&(s=o({state:s,options:u,name:f,instance:l})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){f(),c=!0}}
if(!Pe(e,t))return l
function f(){u.forEach((function(e){return e()})),u=[]}return l.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var Ae=De(),Ne=De({defaultModifiers:[ie,Te,ne,C,xe,ye,ke,Q,Oe]}),Ce=De({defaultModifiers:[ie,Te,ne,C]})},507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f})
var r=n(663),i=n.n(r),o=n(336),a=n.n(o),s=n(603),u=n(630)
function c(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||null===e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){}class f extends(a()){constructor(...e){super(...e),c(this,"tagName",l),c(this,"componentClass",void 0)}compute(e,t){(0,s.assert)("The `element` helper takes a single positional argument",1===e.length),(0,s.assert)("The `element` helper does not take any named arguments",0===Object.keys(t).length)
let n=e[0]
return n!==this.tagName&&(this.tagName=n,"string"==typeof n?this.componentClass=(0,u.ensureSafeComponent)(class extends(i()){constructor(...e){super(...e),c(this,"tagName",n)}},this):(this.componentClass=void 0,(0,s.runInDebug)((()=>{let e="The argument passed to the `element` helper must be a string"
try{e+=` (you passed \`${n}\`)`}catch(e){}(0,s.assert)(e,null==n)})))),this.componentClass}}},95:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F})
var r=n(377),i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=i.join(","),a="undefined"==typeof Element,s=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o))
return t&&s.call(e,o)&&r.unshift(e),r.filter(n)},l=function e(t,n,r){for(var i=[],a=Array.from(t);a.length;){var u=a.shift()
if("SLOT"===u.tagName){var c=u.assignedElements(),l=e(c.length?c:u.children,!0,r)
r.flatten?i.push.apply(i,l):i.push({scope:u,candidates:l})}else{s.call(u,o)&&r.filter(u)&&(n||!t.includes(u))&&i.push(u)
var f=u.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(u),p=!r.shadowRootFilter||r.shadowRootFilter(u)
if(f&&p){var d=e(!0===f?u.children:f.children,!0,r)
r.flatten?i.push.apply(i,d):i.push({scope:u,candidates:d})}else a.unshift.apply(a,u.children)}}return i},f=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},h=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},v=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=s.call(e,"details>summary:first-of-type")?e.parentElement:e
if(s.call(i,"details:not([open]) *"))return!0
var o=u(e).host,a=(null==o?void 0:o.ownerDocument.contains(o))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return h(e)}else{if("function"==typeof r){for(var c=e;e;){var l=e.parentElement,f=u(e)
if(l&&!l.shadowRoot&&!0===r(l))return h(e)
e=e.assignedSlot?e.assignedSlot:l||f===e.ownerDocument?l:f.host}e=c}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!s.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||u(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!i||i===e}(e)}(t)||f(t)<0||!v(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],r=[]
return t.forEach((function(t,i){var o=!!t.scope,a=o?t.scope:t,s=f(a,o),u=o?e(t.candidates):a
0===s?o?n.push.apply(n,u):n.push(a):r.push({documentOrder:i,tabIndex:s,item:t,isScope:o,content:u})})),r.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=function(e,t){var n
return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):c(e,t.includeContainer,m.bind(null,t)),y(n)},w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,o)&&m(t,e)},O=i.concat("iframe").join(","),x=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,O)&&v(t,e)}
function T(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?T(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j,S=(j=[],{activateTrap:function(e){if(j.length>0){var t=j[j.length-1]
t!==e&&t.pause()}var n=j.indexOf(e);-1===n||j.splice(n,1),j.push(e)},deactivateTrap:function(e){var t=j.indexOf(e);-1!==t&&j.splice(t,1),j.length>0&&j[j.length-1].unpause()}}),P=function(e){return setTimeout(e,0)},D=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},A=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},N=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},C=function(e,t){var n,r=(null==t?void 0:t.document)||document,i=k({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},s=function(e){return o.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find((function(t){return t===e}))}))},u=function(e){var t=i[e]
if("function"==typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a]
t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},f=function(){var e=u("initialFocus")
if(!1===e)return!1
if(void 0===e)if(s(r.activeElement)>=0)e=r.activeElement
else{var t=o.tabbableGroups[0]
e=t&&t.firstTabbableNode||u("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},p=function(){if(o.containerGroups=o.containers.map((function(e){var t,n,r=g(e,i.tabbableOptions),o=(t=e,(n=(n=i.tabbableOptions)||{}).getShadowRoot?l([t],n.includeContainer,{filter:v.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):c(t,n.includeContainer,v.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:o,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=o.findIndex((function(t){return t===e}))
if(!(n<0))return t?o.slice(n+1).find((function(e){return w(e,i.tabbableOptions)})):o.slice(0,n).reverse().find((function(e){return w(e,i.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},h=function(e){var t=u("setReturnFocus",e)
return t||!1!==t&&e},m=function(e){var t=N(e)
s(t)>=0||(A(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate&&!x(t,i.tabbableOptions)}):A(i.allowOutsideClick,e)||e.preventDefault())},b=function(e){var t=N(e),n=s(t)>=0
n||t instanceof Document?n&&(o.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(o.mostRecentlyFocusedNode||f()))},y=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==A(i.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=N(e)
p()
var n=null
if(o.tabbableGroups.length>0){var r=s(t),a=r>=0?o.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var c=D(o.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(c<0&&(a.container===t||x(t,i.tabbableOptions)&&!w(t,i.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(c=r),c>=0){var l=0===c?o.tabbableGroups.length-1:c-1
n=o.tabbableGroups[l].lastTabbableNode}}else{var f=D(o.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(f<0&&(a.container===t||x(t,i.tabbableOptions)&&!w(t,i.tabbableOptions)&&!a.nextTabbableNode(t))&&(f=r),f>=0){var h=f===o.tabbableGroups.length-1?0:f+1
n=o.tabbableGroups[h].firstTabbableNode}}}else n=u("fallbackFocus")
n&&(e.preventDefault(),d(n))}(e)},O=function(e){var t=N(e)
s(t)>=0||A(i.clickOutsideDeactivates,e)||A(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},T=function(){if(o.active)return S.activateTrap(n),o.delayInitialFocusTimer=i.delayInitialFocus?P((function(){d(f())})):d(f()),r.addEventListener("focusin",b,!0),r.addEventListener("mousedown",m,{capture:!0,passive:!1}),r.addEventListener("touchstart",m,{capture:!0,passive:!1}),r.addEventListener("click",O,{capture:!0,passive:!1}),r.addEventListener("keydown",y,{capture:!0,passive:!1}),n},E=function(){if(o.active)return r.removeEventListener("focusin",b,!0),r.removeEventListener("mousedown",m,!0),r.removeEventListener("touchstart",m,!0),r.removeEventListener("click",O,!0),r.removeEventListener("keydown",y,!0),n}
return(n={get active(){return o.active},get paused(){return o.paused},activate:function(e){if(o.active)return this
var t=a(e,"onActivate"),n=a(e,"onPostActivate"),i=a(e,"checkCanFocusTrap")
i||p(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var s=function(){i&&p(),T(),n&&n()}
return i?(i(o.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!o.active)return this
var t=k({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,E(),o.active=!1,o.paused=!1,S.deactivateTrap(n)
var r=a(t,"onDeactivate"),s=a(t,"onPostDeactivate"),u=a(t,"checkCanReturnFocus"),c=a(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var l=function(){P((function(){c&&d(h(o.nodeFocusedBeforeActivation)),s&&s()}))}
return c&&u?(u(h(o.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,E()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,p(),T(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return o.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),o.active&&p(),this}}).updateContainerElements(e),n}
let R
try{R=(0,r.capabilities)("3.22")}catch{R=(0,r.capabilities)("3.13")}var F=(0,r.setModifierManager)((()=>({capabilities:R,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:n,isPaused:r,shouldSelfFocus:i,focusTrapOptions:o,additionalElements:a,_createFocusTrap:s}}){e.focusTrapOptions={...o}||{},void 0!==n&&(e.isActive=n),void 0!==r&&(e.isPaused=r),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let u=C
s&&(u=s),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=u(void 0!==a?[t,...a]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const n=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=n,r=void 0===t
e.focusTrap.deactivate({returnFocus:r})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}})),class{})},620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,modifier:()=>l})
var r=n(294),i=n(377),o=n(130)
function a(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s{constructor(e){a(this,"capabilities",(0,i.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t)
r.instance.modify(t,n.positional,n.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,o.destroy)(e)}}class u{constructor(e,t){(0,r.setOwner)(this,e)}modify(e,t,n){}}(0,i.setModifierManager)((e=>new s(e)),u)
const c=new class{constructor(){a(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t),{positional:i,named:o}=n,a=e.instance(t,i,o)
"function"==typeof a&&(r.teardown=a)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const n=e.instance(e.element,t.positional,t.named)
"function"==typeof n&&(e.teardown=n)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function l(e,t){return e.toString=()=>t?.name||e.name,(0,i.setModifierManager)((()=>c),e)}},725:(e,t,n)=>{function r(e,t,n){return(t="symbol"==typeof(r=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
var r}function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function o(e,t,n,r,i){var o={}
return Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}n.d(t,{_:()=>o,a:()=>i,b:()=>r})},510:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f})
var r,i,o,a=n(725),s=n(735),u=n(336),c=n.n(u),l=n(666)
let f=(r=(0,s.inject)("page-title"),i=class extends(c()){constructor(e){super(e),(0,a.a)(this,"tokens",o,this),(0,a.b)(this,"tokenId",(0,l.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},o=(0,a._)(i.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},127:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b})
var r,i,o,a,s,u=n(725),c=n(223),l=n(735),f=n.n(l),p=n(553),d=n(603)
const h="undefined"!=typeof FastBoot,v="routeDidChange",m=["separator","prepend","replace"]
let b=(r=(0,l.inject)("router"),i=(0,l.inject)("-document"),o=class extends(f()){constructor(e){if(super(e),(0,u.a)(this,"router",a,this),(0,u.a)(this,"document",s,this),(0,u.b)(this,"tokens",[]),(0,u.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,u.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const n=e.resolveRegistration("config:environment")
"object"==typeof(t=n)&&null!==t&&"pageTitle"in t&&m.forEach((e=>{if(!(0,p.isEmpty)(n.pageTitle[e])){const t=n.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(v,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,n=this._defaultConfig.prepend,r=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=n&&(e.prepend=n),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const n=this.tokens.indexOf(t),r=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(n,1,e),void(this.tokens=r)}const n=this.tokens.slice(-1)[0]
n&&(e.previous=n??null,n.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:n,previous:r}=t
n&&(n.previous=r),r&&(r.next=n),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const n=[]
for(;t--;){const r=e[t]
if(r){if(r.replace){n.unshift(r)
break}n.unshift(r)}}return n}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,n=[]
const r=[n],i=[]
return e.forEach((e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,n=[],r.push(n))
const i=n[0]
i&&((e={...e}).separator=i.separator),n.unshift(e)}else t||(t=!0,n=[],r.push(n)),n.push(e)})),i.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let n=0,r=e.length;n<r;n++){const i=e[n]
i&&i.title&&(t.push(i.title),n+1<r&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(v,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
h?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){h||(0,d.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!h)return
const t=this.document.head,n=t.childNodes
for(let o=0;o<n.length;o++){const e=n[o]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),i=this.document.createTextNode(e)
r.appendChild(i),t.appendChild(r)}titleDidUpdate(e){}},a=(0,u._)(o.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=(0,u._)(o.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},402:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u})
var r=n(620),i=n(141),o=n(603),a=n(553)
function s(e){return"object"==typeof e&&Boolean(e)}class u extends r.default{constructor(...e){var t,n,r
super(...e),t=this,n="existingStyles",r=new Set,(n=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}setStyles(e,t){const{existingStyles:n}=this,r=new Set(n)
n.clear(),t.forEach((([t,i])=>{(0,o.assert)(`Your given value for property '${t}' is ${i} (${(0,a.typeOf)(i)}). Accepted types are string and undefined. Please change accordingly.`,void 0===i||"string"===(0,a.typeOf)(i))
let s=""
i&&i.includes("!important")&&(s="important",i=i.replace("!important","")),e.style.setProperty(t,i,s),r.delete(t),n.add(t)})),r.forEach((t=>e.style.removeProperty(t)))}modify(e,t,n){this.setStyles(e,function(e,t){return[...e.filter(s),t].map((e=>Object.entries(e).map((([e,t])=>[(0,i.dasherize)(e),t])))).flat()}(t,n))}}},125:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a})
var r=n(336),i=n.n(r),o=n(935)
class a extends(i()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!1===(0,o.A)(e[t]))return e[t]
return e[e.length-1]}}},588:(e,t,n)=>{function r(e,t){return e===t}n.r(t),n.d(t,{default:()=>r})},381:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}n.r(t),n.d(t,{default:()=>r})},302:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}n.r(t),n.d(t,{default:()=>r})},786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i})
var r=n(389)
function i(...e){return e.every(r.isArray)}},838:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.isEmpty})
var r=n(553)},307:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.isEqual})
var r=n(553)},690:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}n.r(t),n.d(t,{default:()=>r})},747:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}n.r(t),n.d(t,{default:()=>r})},716:(e,t,n)=>{function r(e,t){return e!==t}n.r(t),n.d(t,{default:()=>r})},793:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i})
var r=n(935)
function i(...e){return e.every((e=>!(0,r.A)(e)))}},839:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a})
var r=n(935),i=n(336),o=n.n(i)
class a extends(o()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!0===(0,r.A)(e[t]))return e[t]
return e[e.length-1]}}},645:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i})
var r=n(935)
function i(e,t){return(0,r.A)(e)!==(0,r.A)(t)}},935:(e,t,n)=>{n.d(t,{A:()=>i})
var r=n(389)
function i(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,r.isArray)(e)?0!==e.length:!!e}},568:(e,t,n)=>{n.r(t),n.d(t,{cached:()=>g,dedupeTracked:()=>w,localCopy:()=>b,trackedReset:()=>y})
var r,i,o=n(603),a=n(471),s=n(473),u=n(217)
function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let l=(r=class{constructor(){var e
c(this,"prevRemote",void 0),c(this,"peek",void 0),(e=i)&&Object.defineProperty(this,"value",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}},f=r.prototype,p="value",d=[s.tracked],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},v={},Object.keys(h).forEach((function(e){v[e]=h[e]})),v.enumerable=!!v.enumerable,v.configurable=!!v.configurable,("value"in v||v.initializer)&&(v.writable=!0),void 0===(v=d.slice().reverse().reduce((function(e,t){return t(f,p,e)||e}),v)).initializer&&(Object.defineProperty(f,p,v),v=null),i=v,r)
var f,p,d,h,v
function m(e,t,n){let r=t.get(e)
return void 0===r&&(r=new l,t.set(e,r),r.value=r.peek="function"==typeof n?n.call(e):n),r}function b(e,t){(0,o.assert)(`@localCopy() must be given a memo path as its first argument, received \`${String(e)}\``,"string"==typeof e)
let n=new WeakMap
return()=>{let r=t=>(0,a.get)(t,e)
return{get(){let e=m(this,n,t),{prevRemote:i}=e,o=r(this)
return i!==o&&(e.value=e.prevRemote=o),e.value},set(e){if(!n.has(this)){let i=m(this,n,t)
return i.prevRemote=r(this),void(i.value=e)}m(this,n,t).value=e}}}}function y(e){(0,o.assert)(`@trackedReset() must be given a memo path, a memo function, or config object with a memo path or function as its first argument, received \`${String(e)}\``,"string"==typeof e||"function"==typeof e||"object"==typeof e&&null!==e&&void 0!==e.memo)
let t=new WeakMap
return(n,r,i)=>{let o,s,u=i.initializer??(()=>{})
"object"==typeof e?(o=e.memo,s=e.update??u):(o=e,s=u)
let c="function"==typeof o?(e,t)=>o.call(e,e,r,t):e=>(0,a.get)(e,o)
return{get(){let e=m(this,t,u),{prevRemote:n}=e,i=c(this,n)
return i!==n&&(e.prevRemote=i,e.value=e.peek=s.call(this,this,r,e.peek)),e.value},set(e){m(this,t,u).value=e}}}}function g(e,t,n){(0,o.assert)("@cached can only be used on getters",n&&n.get)
let{get:r,set:i}=n,a=new WeakMap
return{get(){let e=a.get(this)
return void 0===e&&(e=(0,u.createCache)(r.bind(this)),a.set(this,e)),(0,u.getValue)(e)},set:i}}function w(){let e
const t=function(t,n,r){let{initializer:i}=r,{get:o,set:a}=(0,s.tracked)(t,n,r),u=new WeakMap
return{get(){if(!u.has(this)){let e=i?.call(this)
u.set(this,e),a.call(this,e)}return o.call(this)},set(t){u.has(this)&&e(t,u.get(this))||(u.set(this,t),a.call(this,t))}}}
return 3===arguments.length?(e=(e,t)=>e===t,t(...arguments)):1===arguments.length&&"function"==typeof arguments[0]?(e=arguments[0],t):void(0,o.assert)(`@dedupeTracked() can either be invoked without arguments or with one comparator function, received \`${String(arguments)}\``,!1)}}}])
