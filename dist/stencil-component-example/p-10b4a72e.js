const e="stencil-component-example";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:false,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:false,element:false,event:false,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:false,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:false,mode:false,observeAttribute:false,profile:false,prop:false,propBoolean:false,propMutable:false,propNumber:false,propString:false,reflect:false,scoped:false,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:false,slotChildNodesFix:false,slotRelocation:false,state:true,style:true,svg:true,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:false,vdomText:true,vdomXlink:false,watchCallback:false};var s=Object.defineProperty;var n=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:true})};var l=new WeakMap;var r=e=>l.get(e);var a=(e,t)=>l.set(t.t=e,t);var o=(e,t)=>{const s={l:0,$hostElement$:e,o:t,i:new Map};{s.u=new Promise((e=>s.v=e));e["s-p"]=[];e["s-rc"]=[]}return l.set(e,s)};var i=(e,t)=>t in e;var f=(e,t)=>(0,console.error)(e,t);var c=new Map;var u=(e,t,s)=>{const n=e.p.replace(/-/g,"_");const l=e.m;if(!l){return void 0}const r=c.get(l);if(r){return r[n]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{c.set(l,e)}return e[n]}),f)};var v=new Map;var d="{visibility:hidden}.hydrated{visibility:inherit}";var p="slot-fb{display:contents}slot-fb[hidden]{display:none}";var m=typeof window!=="undefined"?window:{};var h=m.document||{head:{}};var y={l:0,h:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)};var w=e=>Promise.resolve(e);var b=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var g=false;var $=[];var S=[];var C=(e,t)=>s=>{e.push(s);if(!g){g=true;if(t&&y.l&4){j(x)}else{y.raf(x)}}};var k=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){f(e)}}e.length=0};var x=()=>{k($);{k(S);if(g=$.length>0){y.raf(x)}}};var j=e=>w().then(e);var O=C(S,true);var D={};var E="http://www.w3.org/2000/svg";var T="http://www.w3.org/1999/xhtml";var L=e=>e!=null;var M=e=>{e=typeof e;return e==="object"||e==="function"};function R(e){var t,s,n;return(n=(s=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:s.getAttribute("content"))!=null?n:void 0}var F={};n(F,{err:()=>P,map:()=>N,ok:()=>A,unwrap:()=>U,unwrapErr:()=>W});var A=e=>({isOk:true,isErr:false,value:e});var P=e=>({isOk:false,isErr:true,value:e});function N(e,t){if(e.isOk){const s=t(e.value);if(s instanceof Promise){return s.then((e=>A(e)))}else{return A(s)}}if(e.isErr){const t=e.value;return P(t)}throw"should never get here"}var U=e=>{if(e.isOk){return e.value}else{throw e.value}};var W=e=>{if(e.isErr){return e.value}else{throw e.value}};var H=(e,t="")=>{{return()=>{}}};var z=(e,t)=>{{return()=>{}}};var B=(e,t,...s)=>{let n=null;let l=null;let r=false;let a=false;const o=[];const i=t=>{for(let s=0;s<t.length;s++){n=t[s];if(Array.isArray(n)){i(n)}else if(n!=null&&typeof n!=="boolean"){if(r=typeof e!=="function"&&!M(n)){n=String(n)}if(r&&a){o[o.length-1].$+=n}else{o.push(r?Q(null,n):n)}a=r}}};i(s);if(t){if(t.key){l=t.key}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const f=Q(e,null);f.S=t;if(o.length>0){f.C=o}{f.k=l}return f};var Q=(e,t)=>{const s={l:0,j:e,$:t,O:null,C:null};{s.S=null}{s.k=null}return s};var q={};var G=e=>e&&e.j===q;var I=(e,t)=>{if(e!=null&&!M(e)){return e}return e};var K=(e,t,s)=>{const n=y.ce(t,s);e.dispatchEvent(n);return n};var V=new WeakMap;var X=(e,t,s)=>{let n=v.get(e);if(b&&s){n=n||new CSSStyleSheet;if(typeof n==="string"){n=t}else{n.replaceSync(t)}}else{n=t}v.set(e,n)};var _=(e,t,s)=>{var n;const l=Y(t);const r=v.get(l);e=e.nodeType===11?e:h;if(r){if(typeof r==="string"){e=e.head||e;let s=V.get(e);let a;if(!s){V.set(e,s=new Set)}if(!s.has(l)){{a=h.createElement("style");a.innerHTML=r;const s=(n=y.D)!=null?n:R(h);if(s!=null){a.setAttribute("nonce",s)}if(!(t.l&1)){if(e.nodeName==="HEAD"){const t=e.querySelectorAll("link[rel=preconnect]");const s=t.length>0?t[t.length-1].nextSibling:document.querySelector("style");e.insertBefore(a,s)}else if("host"in e){e.prepend(a)}else{e.append(a)}}if(t.l&1&&e.nodeName!=="HEAD"){e.insertBefore(a,null)}}if(t.l&4){a.innerHTML+=p}if(s){s.add(l)}}}else if(!e.adoptedStyleSheets.includes(r)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]}}return l};var J=e=>{const t=e.o;const s=e.$hostElement$;const n=t.l;const l=H("attachStyles",t.p);const r=_(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);if(n&10&&n&2){s["s-sc"]=r;s.classList.add(r+"-h")}l()};var Y=(e,t)=>"sc-"+e.p;var Z=(e,t,s,n,l,r)=>{if(s!==n){let a=i(e,t);let o=t.toLowerCase();if(t==="class"){const t=e.classList;const l=te(s);const r=te(n);t.remove(...l.filter((e=>e&&!r.includes(e))));t.add(...r.filter((e=>e&&!l.includes(e))))}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(i(m,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(s||n){const l=t.endsWith(se);t=t.replace(ne,"");if(s){y.rel(e,t,s,l)}if(n){y.ael(e,t,n,l)}}}else{const o=M(n);if((a||o&&n!==null)&&!l){try{if(!e.tagName.includes("-")){const l=n==null?"":n;if(t==="list"){a=false}else if(s==null||e[t]!=l){if(typeof e.__lookupSetter__(t)==="function"){e[t]=l}else{e.setAttribute(t,l)}}}else{e[t]=n}}catch(e){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!a||r&4||l)&&!o){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var ee=/\s/;var te=e=>!e?[]:e.split(ee);var se="Capture";var ne=new RegExp(se+"$");var le=(e,t,s)=>{const n=t.O.nodeType===11&&t.O.host?t.O.host:t.O;const l=e&&e.S||D;const r=t.S||D;{for(const e of re(Object.keys(l))){if(!(e in r)){Z(n,e,l[e],void 0,s,t.l)}}}for(const e of re(Object.keys(r))){Z(n,e,l[e],r[e],s,t.l)}};function re(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var ae;var oe;var ie=false;var fe=false;var ce=(e,s,n,l)=>{const r=s.C[n];let a=0;let o;let i;if(r.$!==null){o=r.O=h.createTextNode(r.$)}else{if(!fe){fe=r.j==="svg"}o=r.O=h.createElementNS(fe?E:T,!ie&&t.slotRelocation&&r.l&2?"slot-fb":r.j);if(fe&&r.j==="foreignObject"){fe=false}{le(null,r,fe)}const s=o.getRootNode();const n=!s.querySelector("body");if(!n&&t.scoped&&L(ae)&&o["s-si"]!==ae){o.classList.add(o["s-si"]=ae)}if(r.C){for(a=0;a<r.C.length;++a){i=ce(e,r,a);if(i){o.appendChild(i)}}}{if(r.j==="svg"){fe=false}else if(o.tagName==="foreignObject"){fe=true}}}o["s-hn"]=oe;return o};var ue=(e,t,s,n,l,r)=>{let a=e;let o;if(a.shadowRoot&&a.tagName===oe){a=a.shadowRoot}for(;l<=r;++l){if(n[l]){o=ce(null,s,l);if(o){n[l].O=o;ye(a,o,t)}}}};var ve=(e,t,s)=>{for(let n=t;n<=s;++n){const t=e[n];if(t){const e=t.O;he(t);if(e){e.remove()}}}};var de=(e,t,s,n,l=false)=>{let r=0;let a=0;let o=0;let i=0;let f=t.length-1;let c=t[0];let u=t[f];let v=n.length-1;let d=n[0];let p=n[v];let m;let h;while(r<=f&&a<=v){if(c==null){c=t[++r]}else if(u==null){u=t[--f]}else if(d==null){d=n[++a]}else if(p==null){p=n[--v]}else if(pe(c,d,l)){me(c,d,l);c=t[++r];d=n[++a]}else if(pe(u,p,l)){me(u,p,l);u=t[--f];p=n[--v]}else if(pe(c,p,l)){me(c,p,l);ye(e,c.O,u.O.nextSibling);c=t[++r];p=n[--v]}else if(pe(u,d,l)){me(u,d,l);ye(e,u.O,c.O);u=t[--f];d=n[++a]}else{o=-1;{for(i=r;i<=f;++i){if(t[i]&&t[i].k!==null&&t[i].k===d.k){o=i;break}}}if(o>=0){h=t[o];if(h.j!==d.j){m=ce(t&&t[a],s,o)}else{me(h,d,l);t[o]=void 0;m=h.O}d=n[++a]}else{m=ce(t&&t[a],s,a);d=n[++a]}if(m){{ye(c.O.parentNode,m,c.O)}}}}if(r>f){ue(e,n[v+1]==null?null:n[v+1].O,s,n,a,v)}else if(a>v){ve(t,r,f)}};var pe=(e,t,s=false)=>{if(e.j===t.j){if(!s){return e.k===t.k}return true}return false};var me=(e,s,n=false)=>{const l=s.O=e.O;const r=e.C;const a=s.C;const o=s.j;const i=s.$;if(i===null){{fe=o==="svg"?true:o==="foreignObject"?false:fe}{{le(e,s,fe)}}if(r!==null&&a!==null){de(l,r,s,a,n)}else if(a!==null){if(e.$!==null){l.textContent=""}ue(l,null,s,a,0,a.length-1)}else if(!n&&t.updatable&&r!==null){ve(r,0,r.length-1)}if(fe&&o==="svg"){fe=false}}else if(e.$!==i){l.data=i}};var he=e=>{{e.S&&e.S.ref&&e.S.ref(null);e.C&&e.C.map(he)}};var ye=(e,t,s)=>{const n=e==null?void 0:e.insertBefore(t,s);return n};var we=(e,t,s=false)=>{const n=e.$hostElement$;const l=e.o;const r=e.T||Q(null,null);const a=G(t)?t:B(null,null,t);oe=n.tagName;if(s&&a.S){for(const e of Object.keys(a.S)){if(n.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){a.S[e]=n[e]}}}a.j=null;a.l|=4;e.T=a;a.O=r.O=n.shadowRoot||n;{ae=n["s-sc"]}ie=(l.l&1)!==0;me(r,a,s)};var be=(e,t)=>{if(t&&!e.L&&t["s-p"]){t["s-p"].push(new Promise((t=>e.L=t)))}};var ge=(e,t)=>{{e.l|=16}if(e.l&4){e.l|=512;return}be(e,e.M);const s=()=>$e(e,t);return O(s)};var $e=(e,t)=>{const s=e.$hostElement$;const n=H("scheduleUpdate",e.o.p);const l=e.t;if(!l){throw new Error(`Can't render component <${s.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`)}let r;n();return Se(r,(()=>ke(e,l,t)))};var Se=(e,t)=>Ce(e)?e.then(t).catch((e=>{console.error(e);t()})):t();var Ce=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var ke=async(e,t,s)=>{var n;const l=e.$hostElement$;const r=H("update",e.o.p);const a=l["s-rc"];if(s){J(e)}const o=H("render",e.o.p);{xe(e,t,l,s)}if(a){a.map((e=>e()));l["s-rc"]=void 0}o();r();{const t=(n=l["s-p"])!=null?n:[];const s=()=>je(e);if(t.length===0){s()}else{Promise.all(t).then(s);e.l|=4;t.length=0}}};var xe=(e,t,s,n)=>{try{t=t.render();{e.l&=~16}{e.l|=2}{{{we(e,t,n)}}}}catch(t){f(t,e.$hostElement$)}return null};var je=e=>{const t=e.o.p;const s=e.$hostElement$;const n=H("postUpdate",t);const l=e.t;const r=e.M;if(!(e.l&64)){e.l|=64;{Ee(s)}{De(l,"componentDidLoad")}n();{e.v(s);if(!r){Oe()}}}else{n()}{if(e.L){e.L();e.L=void 0}if(e.l&512){j((()=>ge(e,false)))}e.l&=~(4|512)}};var Oe=t=>{{Ee(h.documentElement)}j((()=>K(m,"appload",{detail:{namespace:e}})))};var De=(e,t,s)=>{if(e&&e[t]){try{return e[t](s)}catch(e){f(e)}}return void 0};var Ee=e=>{var s;return e.classList.add((s=t.hydratedSelectorName)!=null?s:"hydrated")};var Te=(e,t)=>r(e).i.get(t);var Le=(e,t,s,n)=>{const l=r(e);if(!l){throw new Error(`Couldn't find host element for "${n.p}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`)}const a=l.i.get(t);const o=l.l;const i=l.t;s=I(s);const f=Number.isNaN(a)&&Number.isNaN(s);const c=s!==a&&!f;if((!(o&8)||a===void 0)&&c){l.i.set(t,s);if(i){if((o&(2|16))===2){ge(l,false)}}}};var Me=(e,s,n)=>{var l;const r=e.prototype;if(s.R||t.watchCallback){const e=Object.entries((l=s.R)!=null?l:{});e.map((([e,[t]])=>{if(t&31||n&2&&t&32){Object.defineProperty(r,e,{get(){return Te(this,e)},set(t){Le(this,e,t,s)},configurable:true,enumerable:true})}}))}return e};var Re=async(e,t,s,n)=>{let l;if((t.l&32)===0){t.l|=32;const n=s.m;if(n){const e=u(s);if(e&&"then"in e){const t=z();l=await e;t()}else{l=e}if(!l){throw new Error(`Constructor for "${s.p}#${t.F}" was not found`)}if(!l.isProxied){Me(l,s,2);l.isProxied=true}const n=H("createInstance",s.p);{t.l|=8}try{new l(t)}catch(e){f(e)}{t.l&=~8}n()}else{l=e.constructor;const s=e.localName;customElements.whenDefined(s).then((()=>t.l|=128))}if(l&&l.style){let e;if(typeof l.style==="string"){e=l.style}const t=Y(s);if(!v.has(t)){const n=H("registerStyles",s.p);X(t,e,!!(s.l&1));n()}}}const r=t.M;const a=()=>ge(t,true);if(r&&r["s-rc"]){r["s-rc"].push(a)}else{a()}};var Fe=e=>{};var Ae=e=>{if((y.l&1)===0){const t=r(e);const s=t.o;const n=H("connectedCallback",s.p);if(!(t.l&1)){t.l|=1;{let s=e;while(s=s.parentNode||s.host){if(s["s-p"]){be(t,t.M=s);break}}}{Re(e,t,s)}}else{if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Fe()))}}n()}};var Pe=e=>{};var Ne=async e=>{if((y.l&1)===0){const t=r(e);if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Pe()))}}};var Ue=(e,t={})=>{var s;const n=H();const l=[];const a=t.exclude||[];const i=m.customElements;const f=h.head;const c=f.querySelector("meta[charset]");const u=h.createElement("style");const v=[];let w;let b=true;Object.assign(y,t);y.h=new URL(t.resourcesUrl||"./",h.baseURI).href;let g=false;e.map((e=>{e[1].map((t=>{const s={l:t[0],p:t[1],R:t[2],A:t[3]};if(s.l&4){g=true}{s.R=t[2]}const n=s.p;const f=class extends HTMLElement{constructor(e){super(e);this.hasRegisteredEventListeners=false;e=this;o(e,s);if(s.l&1){{if(!e.shadowRoot){{e.attachShadow({mode:"open"})}}else{if(e.shadowRoot.mode!=="open"){throw new Error(`Unable to re-use existing shadow root for ${s.p}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}}}}connectedCallback(){r(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true}if(w){clearTimeout(w);w=null}if(b){v.push(this)}else{y.jmp((()=>Ae(this)))}}disconnectedCallback(){y.jmp((()=>Ne(this)))}componentOnReady(){return r(this).u}};s.m=e[0];if(!a.includes(n)&&!i.get(n)){l.push(n);i.define(n,Me(f,s,1))}}))}));if(l.length>0){if(g){u.textContent+=p}{u.textContent+=l.sort()+d}if(u.innerHTML.length){u.setAttribute("data-styles","");const e=(s=y.D)!=null?s:R(h);if(e!=null){u.setAttribute("nonce",e)}f.insertBefore(u,c?c.nextSibling:f.firstChild)}}b=false;if(v.length){v.map((e=>e.connectedCallback()))}else{{y.jmp((()=>w=setTimeout(Oe,30)))}}n()};var We=e=>y.D=e;export{q as H,Ue as b,B as h,w as p,a as r,We as s};
//# sourceMappingURL=p-10b4a72e.js.map