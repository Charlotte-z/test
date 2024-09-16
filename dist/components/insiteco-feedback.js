import { p as proxyCustomElement, H, h, c as Host } from './p-267b755d.js';
import { d as defineCustomElement$3 } from './p-d1cf456c.js';
import { d as defineCustomElement$2 } from './p-4b5c9233.js';

// Patch Worker to allow loading scripts from remote URLs
//
// It's a workaround for the fact that the Worker constructor
// accepts only local URLs, not remote URLs:
// https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker
//
// As a workaround this patched Worker constructor will
// use `importScripts` to load the remote script.
// https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts
//
// Compatibility: Chrome 4+, Firefox 4+, Safari 4+
//
// Usage:
// ```ts
// import "remote-web-worker";
// ```
typeof window !== "undefined" && (Worker = ((BaseWorker)=>class Worker1 extends BaseWorker {
        constructor(scriptURL, options){
            const url = String(scriptURL);
            super(// Check if the URL is remote
            url.includes("://") && !url.startsWith(location.origin) ? // to bootstrap the actual script to work around the same origin policy.
            URL.createObjectURL(new Blob([
                // Replace the `importScripts` function with
                // a patched version that will resolve relative URLs
                // to the remote script URL.
                //
                // Without a patched `importScripts` Webpack 5 generated worker chunks will fail with the following error:
                //
                // Uncaught (in promise) DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope':
                // The script at 'http://some.domain/worker.1e0e1e0e.js' failed to load.
                //
                // For minification, the inlined variable names are single letters:
                // i = original importScripts
                // a = arguments
                // u = URL
                `importScripts=((i)=>(...a)=>i(...a.map((u)=>''+new URL(u,"${url}"))))(importScripts);importScripts("${url}")`
            ], {
                type: "text/javascript"
            })) : scriptURL, options);
        }
    })(Worker));

const workerPath = new URL('assets/conversation.worker.js-d2398ba3.js', import.meta.url).href;

const insitecoFeedbackCss = "/*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.block{display:block}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:host{display:block}.vertical-text{background-color:#4285f4;border-radius:.25rem;box-shadow:-4px -12px 25px 0 rgba(0,0,0,.1);color:#fff;cursor:pointer;font-family:Inter,Helvetica,Arial,sans-serif;letter-spacing:-.025em;padding:.5rem 1rem;position:fixed;right:0;top:50%;transform:translateY(-50%);transform:translateY(-50%) rotate(-90deg) translateX(50%);transform-origin:100% 100%;white-space:nowrap}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color:oklch(0% 0 0)){:root{--fallback-p:#491eff;--fallback-pc:#d4dbff;--fallback-s:#ff41c7;--fallback-sc:#fff9fc;--fallback-a:#00cfbd;--fallback-ac:#00100d;--fallback-n:#2b3440;--fallback-nc:#d7dde4;--fallback-b1:#fff;--fallback-b2:#e5e6e6;--fallback-b3:#e5e6e6;--fallback-bc:#1f2937;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;color-scheme:light}@media (prefers-color-scheme:dark){:root{--fallback-p:#7582ff;--fallback-pc:#050617;--fallback-s:#ff71cf;--fallback-sc:#190211;--fallback-a:#00c7b5;--fallback-ac:#000e0c;--fallback-n:#2a323c;--fallback-nc:#a6adbb;--fallback-b1:#1d232a;--fallback-b2:#191e24;--fallback-b3:#15191e;--fallback-bc:#a6adbb;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:13.138% 0.0392 275.75;--sc:14.96% 0.052 342.55;--ac:14.902% 0.0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:65.69% 0.196 275.75;--s:74.8% 0.26 342.55;--a:74.51% 0.167 183.61;--n:31.3815% 0.021108 254.139175;--nc:74.6477% 0.0216 264.435964;--b1:25.3267% 0.015896 252.417568;--b2:23.2607% 0.013807 253.100675;--b3:21.1484% 0.01165 254.087939;--bc:74.6477% 0.0216 264.435964;color-scheme:dark}}}html{-webkit-tap-highlight-color:transparent}*{scrollbar-color:color-mix(in oklch,currentColor 35%,transparent) transparent}:hover{scrollbar-color:color-mix(in oklch,currentColor 60%,transparent) transparent}:root,[data-theme=light]{--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:89.824% 0.06192 275.75;--ac:15.352% 0.0368 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:49.12% 0.3096 275.75;--s:69.71% 0.329 342.55;--sc:98.71% 0.0106 342.55;--a:76.76% 0.184 183.61;--n:32.1785% 0.02476 255.701624;--nc:89.4994% 0.011585 252.096176;--b1:100% 0 0;--b2:96.1151% 0 0;--b3:92.4169% 0.00108 197.137559;--bc:27.8078% 0.029596 256.847952;color-scheme:light}[data-theme=dark]{--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:13.138% 0.0392 275.75;--sc:14.96% 0.052 342.55;--ac:14.902% 0.0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:65.69% 0.196 275.75;--s:74.8% 0.26 342.55;--a:74.51% 0.167 183.61;--n:31.3815% 0.021108 254.139175;--nc:74.6477% 0.0216 264.435964;--b1:25.3267% 0.015896 252.417568;--b2:23.2607% 0.013807 253.100675;--b3:21.1484% 0.01165 254.087939;--bc:74.6477% 0.0216 264.435964;color-scheme:dark}.card{border-radius:var(--rounded-box,1rem);display:flex;flex-direction:column;position:relative}.card:focus{outline:2px solid transparent;outline-offset:2px}.card-body{display:flex;flex:1 1 auto;flex-direction:column;gap:.5rem;padding:var(--padding-card,2rem)}.card-body :where(p){flex-grow:1}.card figure{align-items:center;display:flex;justify-content:center}.card.image-full{display:grid}.card.image-full:before{--tw-bg-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));border-radius:var(--rounded-box,1rem);content:\"\";opacity:.75;position:relative;z-index:10}.card.image-full:before,.card.image-full>*{grid-column-start:1;grid-row-start:1}.card.image-full>figure img{height:100%;object-fit:cover}.card.image-full>.card-body{--tw-text-opacity:1;color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));position:relative;z-index:20}.card :where(figure:first-child){border-end-end-radius:unset;border-end-start-radius:unset;border-start-end-radius:inherit;border-start-start-radius:inherit;overflow:hidden}.card :where(figure:last-child){border-end-end-radius:inherit;border-end-start-radius:inherit;border-start-end-radius:unset;border-start-start-radius:unset;overflow:hidden}.card:focus-visible{outline:2px solid currentColor;outline-offset:2px}.card.bordered{--tw-border-opacity:1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-width:1px}.card.compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.card.image-full :where(figure){border-radius:inherit;overflow:hidden}.card-compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.card-normal .card-body{font-size:1rem;line-height:1.5rem;padding:var(--padding-card,2rem)}.static{position:static}.bottom-4{bottom:1rem}.right-4{right:1rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.flex{display:flex}.h-8{height:2rem}.h-\\[500px\\]{height:500px}.h-full{height:100%}.w-96{width:24rem}.w-fit{width:fit-content}.w-full{width:100%}.flex-1{flex:1 1 0%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-1{padding:.25rem}.p-4{padding:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-2xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.avatar.placeholder>div{align-items:center;display:flex;justify-content:center}.input{--tw-bg-opacity:1;appearance:none;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:transparent;border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:1rem;height:3rem;line-height:2;line-height:1.5rem;padding-left:1rem;padding-right:1rem}.input-md[type=number]::-webkit-inner-spin-button,.input[type=number]::-webkit-inner-spin-button{margin-bottom:-1rem;margin-top:-1rem;margin-inline-end:-1rem}.input input{--tw-bg-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));background-color:transparent}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus,.input:focus-within{border-color:var(--fallback-bc,oklch(var(--bc)/.2));box-shadow:none;outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.input-disabled,.input:disabled,.input:has(>input[disabled]),.input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4));cursor:not-allowed}.input-disabled::placeholder,.input:disabled::placeholder,.input:has(>input[disabled])::placeholder,.input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.mockup-browser .mockup-browser-toolbar .input{--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));direction:ltr;display:block;height:1.75rem;margin-left:auto;margin-right:auto;overflow:hidden;padding-left:2rem;position:relative;text-overflow:ellipsis;white-space:nowrap;width:24rem}.mockup-browser .mockup-browser-toolbar .input:before{--tw-translate-y:-50%;aspect-ratio:1/1;border-color:currentColor;border-radius:9999px;border-width:2px;height:.75rem;left:.5rem}.mockup-browser .mockup-browser-toolbar .input:after,.mockup-browser .mockup-browser-toolbar .input:before{content:\"\";opacity:.6;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mockup-browser .mockup-browser-toolbar .input:after{--tw-translate-y:25%;--tw-rotate:-45deg;border-color:currentColor;border-radius:9999px;border-width:1px;height:.5rem;left:1.25rem}.relative{position:relative}.rounded-xl{border-radius:.75rem}.border-none{border-style:none}.bg-\\[\\#f5f5fd\\]{--tw-bg-opacity:1;background-color:rgb(245 245 253/var(--tw-bg-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.outline-none{outline:2px solid transparent;outline-offset:2px}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.chat{column-gap:.75rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding-bottom:.25rem;padding-top:.25rem}.chat-start{grid-template-columns:auto 1fr;place-items:start}.chat-start .chat-footer,.chat-start .chat-header{grid-column-start:2}.chat-start .chat-image{grid-column-start:1}.chat-start .chat-bubble{border-end-start-radius:0;grid-column-start:2}.chat-start .chat-bubble:before{inset-inline-start:-.749rem;mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\")}[dir=rtl] .chat-start .chat-bubble:before{mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\")}.chat-end{grid-template-columns:1fr auto;place-items:end}.chat-end .chat-footer,.chat-end .chat-header{grid-column-start:1}.chat-end .chat-image{grid-column-start:2}.chat-end .chat-bubble{border-end-end-radius:0;grid-column-start:1}.chat-end .chat-bubble:before{inset-inline-start:99.9%;mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\")}[dir=rtl] .chat-end .chat-bubble:before{mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\")}.rounded-3xl{border-radius:1.5rem}.bg-\\[\\#242625\\]{--tw-bg-opacity:1;background-color:rgb(36 38 37/var(--tw-bg-opacity))}.bg-\\[\\#f5f5fb\\]{--tw-bg-opacity:1;background-color:rgb(245 245 251/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-black,.text-white{--tw-text-opacity:1}.text-white{color:rgb(255 255 255/var(--tw-text-opacity))}";
const InsitecoFeedbackStyle0 = insitecoFeedbackCss;

const InsitecoFeedback$1 = /*@__PURE__*/ proxyCustomElement(class InsitecoFeedback extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.isVisible = false;
        this.worker = new Worker(workerPath, { type: 'classic' });
        this.worker.onmessage = this.handleWorkerResponse.bind(this);
    }
    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }
    handleWorkerResponse(event) {
        console.log('Response from worker:', event.data);
    }
    sendRequestToWorker() {
        this.worker.postMessage({
            action: 'sendRequest',
            payload: {
                url: '',
                token: ''
            }
        });
    }
    render() {
        return (h(Host, { key: '8b1076789ad5fdd45397687ac3d67b44cdde85fb' }, this.isVisible ? (h("div", { class: "flex justify-center bg-white items-center h-[500px] fixed right-4 bottom-4 rounded-2xl" }, h("div", { class: "card shadow-2xl p-4 w-96 h-full" }, h("div", { class: "card-body p-1 h-full flex flex-col justify-between" }, h("div", { class: "flex flex-col flex-1" }, h("section", { class: "w-full flex justify-end h-8 items-center" }, h("section", { class: "w-fit cursor-pointer", onClick: () => this.toggleVisibility() }, h("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "2766", width: "20", height: "20" }, h("path", { d: "M807.6288 550.8096H224.2048c-17.5104 0-30.72-16.7936-30.72-38.7072s13.3632-38.7072 30.72-38.7072h583.424c17.5104 0 30.72 16.7936 30.72 38.7072s-14.0288 38.7072-30.72 38.7072z", "p-id": "2767", fill: "black" }), h("path", { d: "M807.5776 554.0352H224.2048c-19.456 0-34.0992-18.0224-34.0992-41.9328s14.6432-41.9328 34.0992-41.9328h583.3728c19.456 0 34.0992 18.0224 34.0992 41.9328 0 23.1424-15.2576 41.9328-34.0992 41.9328zM224.2048 476.6208c-15.7696 0-27.648 15.36-27.648 35.4816s11.8784 35.4816 27.648 35.4816h583.3728c15.36 0 27.648-15.9232 27.648-35.4816s-11.8784-35.4816-27.648-35.4816z", "p-id": "2768", fill: "black" })))), h("section", { class: "mt-2 flex-1 overflow-hidden" }, h("insiteco-chat", { class: "w-full h-full" }))), h("div", { class: "flex flex-col gap-2 mt-3" }, h("insiteco-input", null)))))) : (h("div", { class: 'vertical-text', onClick: () => this.toggleVisibility() }, h("span", null, "Feedback")))));
    }
    static get style() { return InsitecoFeedbackStyle0; }
}, [1, "insiteco-feedback", {
        "isVisible": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["insiteco-feedback", "insiteco-chat", "insiteco-input"];
    components.forEach(tagName => { switch (tagName) {
        case "insiteco-feedback":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InsitecoFeedback$1);
            }
            break;
        case "insiteco-chat":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "insiteco-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const InsitecoFeedback = InsitecoFeedback$1;
const defineCustomElement = defineCustomElement$1;

export { InsitecoFeedback, defineCustomElement };

//# sourceMappingURL=insiteco-feedback.js.map