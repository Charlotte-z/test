import { p as proxyCustomElement, H, h, c as Host } from './p-b52308a4.js';

const insitecoChatCss = "/*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}:host{display:block}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color:oklch(0% 0 0)){:root{--fallback-p:#491eff;--fallback-pc:#d4dbff;--fallback-s:#ff41c7;--fallback-sc:#fff9fc;--fallback-a:#00cfbd;--fallback-ac:#00100d;--fallback-n:#2b3440;--fallback-nc:#d7dde4;--fallback-b1:#fff;--fallback-b2:#e5e6e6;--fallback-b3:#e5e6e6;--fallback-bc:#1f2937;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;color-scheme:light}@media (prefers-color-scheme:dark){:root{--fallback-p:#7582ff;--fallback-pc:#050617;--fallback-s:#ff71cf;--fallback-sc:#190211;--fallback-a:#00c7b5;--fallback-ac:#000e0c;--fallback-n:#2a323c;--fallback-nc:#a6adbb;--fallback-b1:#1d232a;--fallback-b2:#191e24;--fallback-b3:#15191e;--fallback-bc:#a6adbb;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:13.138% 0.0392 275.75;--sc:14.96% 0.052 342.55;--ac:14.902% 0.0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:65.69% 0.196 275.75;--s:74.8% 0.26 342.55;--a:74.51% 0.167 183.61;--n:31.3815% 0.021108 254.139175;--nc:74.6477% 0.0216 264.435964;--b1:25.3267% 0.015896 252.417568;--b2:23.2607% 0.013807 253.100675;--b3:21.1484% 0.01165 254.087939;--bc:74.6477% 0.0216 264.435964;color-scheme:dark}}}html{-webkit-tap-highlight-color:transparent}*{scrollbar-color:color-mix(in oklch,currentColor 35%,transparent) transparent}:hover{scrollbar-color:color-mix(in oklch,currentColor 60%,transparent) transparent}:root,[data-theme=light]{--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:89.824% 0.06192 275.75;--ac:15.352% 0.0368 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:49.12% 0.3096 275.75;--s:69.71% 0.329 342.55;--sc:98.71% 0.0106 342.55;--a:76.76% 0.184 183.61;--n:32.1785% 0.02476 255.701624;--nc:89.4994% 0.011585 252.096176;--b1:100% 0 0;--b2:96.1151% 0 0;--b3:92.4169% 0.00108 197.137559;--bc:27.8078% 0.029596 256.847952;color-scheme:light}[data-theme=dark]{--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:13.138% 0.0392 275.75;--sc:14.96% 0.052 342.55;--ac:14.902% 0.0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:65.69% 0.196 275.75;--s:74.8% 0.26 342.55;--a:74.51% 0.167 183.61;--n:31.3815% 0.021108 254.139175;--nc:74.6477% 0.0216 264.435964;--b1:25.3267% 0.015896 252.417568;--b2:23.2607% 0.013807 253.100675;--b3:21.1484% 0.01165 254.087939;--bc:74.6477% 0.0216 264.435964;color-scheme:dark}.chat{column-gap:.75rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding-bottom:.25rem;padding-top:.25rem}.chat-start{grid-template-columns:auto 1fr;place-items:start}.chat-start .chat-footer,.chat-start .chat-header{grid-column-start:2}.chat-start .chat-image{grid-column-start:1}.chat-start .chat-bubble{border-end-start-radius:0;grid-column-start:2}.chat-start .chat-bubble:before{inset-inline-start:-.749rem;mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\")}[dir=rtl] .chat-start .chat-bubble:before{mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\")}.chat-end{grid-template-columns:1fr auto;place-items:end}.chat-end .chat-footer,.chat-end .chat-header{grid-column-start:1}.chat-end .chat-image{grid-column-start:2}.chat-end .chat-bubble{border-end-end-radius:0;grid-column-start:1}.chat-end .chat-bubble:before{inset-inline-start:99.9%;mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3C2 3 0 1 0 0'/%3E%3C/svg%3E\")}[dir=rtl] .chat-end .chat-bubble:before{mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3h3V0c0 1-2 3-3 3'/%3E%3C/svg%3E\")}.static{position:static}.h-full{height:100%}.w-fit{width:fit-content}.rounded-3xl{border-radius:1.5rem}.bg-\\[\\#242625\\]{--tw-bg-opacity:1;background-color:rgb(36 38 37/var(--tw-bg-opacity))}.bg-\\[\\#f5f5fb\\]{--tw-bg-opacity:1;background-color:rgb(245 245 251/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-black{color:rgb(0 0 0/var(--tw-text-opacity))}.text-black,.text-white{--tw-text-opacity:1}.text-white{color:rgb(255 255 255/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.card{border-radius:var(--rounded-box,1rem);display:flex;flex-direction:column;position:relative}.card:focus{outline:2px solid transparent;outline-offset:2px}.card-body{display:flex;flex:1 1 auto;flex-direction:column;gap:.5rem;padding:var(--padding-card,2rem)}.card-body :where(p){flex-grow:1}.card figure{align-items:center;display:flex;justify-content:center}.card.image-full{display:grid}.card.image-full:before{--tw-bg-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));border-radius:var(--rounded-box,1rem);content:\"\";opacity:.75;position:relative;z-index:10}.card.image-full:before,.card.image-full>*{grid-column-start:1;grid-row-start:1}.card.image-full>figure img{height:100%;object-fit:cover}.card.image-full>.card-body{--tw-text-opacity:1;color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));position:relative;z-index:20}.card :where(figure:first-child){border-end-end-radius:unset;border-end-start-radius:unset;border-start-end-radius:inherit;border-start-start-radius:inherit;overflow:hidden}.card :where(figure:last-child){border-end-end-radius:inherit;border-end-start-radius:inherit;border-start-end-radius:unset;border-start-start-radius:unset;overflow:hidden}.card:focus-visible{outline:2px solid currentColor;outline-offset:2px}.card.bordered{--tw-border-opacity:1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-width:1px}.card.compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.card.image-full :where(figure){border-radius:inherit;overflow:hidden}.card-compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.card-normal .card-body{font-size:1rem;line-height:1.5rem;padding:var(--padding-card,2rem)}.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.flex{display:flex}.h-8{height:2rem}.h-\\[500px\\]{height:500px}.w-96{width:24rem}.w-full{width:100%}.flex-1{flex:1 1 0%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-1{padding:.25rem}.p-4{padding:1rem}.shadow,.shadow-2xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}";
const InsitecoChatStyle0 = insitecoChatCss;

const InsitecoChat = /*@__PURE__*/ proxyCustomElement(class InsitecoChat extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '6b5e0adfd980f483e8317ac28311e8b4054f230d', class: 'h-full' }, h("div", { key: 'bc5cbe418270e43564caee293169eda38101124a', class: "chat chat-start" }, h("div", { key: '1dc77ba449ee82ab56b193047a5209f7848d2632', class: "w-fit rounded-3xl  bg-[#f5f5fb] py-2 px-4 text-sm text-black" }, "I commented on Figma")), h("div", { key: 'b0da15580b30868a86a79647aa6373f53bc4ea39', class: "chat chat-end" }, h("div", { key: '9afa03c165a33dcee680d42832773ca8747615a9', class: "w-fit rounded-3xl  bg-[#242625] py-2 px-4 text-sm text-white" }, "You underestimate my power!"))));
    }
    static get style() { return InsitecoChatStyle0; }
}, [1, "insiteco-chat"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["insiteco-chat"];
    components.forEach(tagName => { switch (tagName) {
        case "insiteco-chat":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InsitecoChat);
            }
            break;
    } });
}

export { InsitecoChat as I, defineCustomElement as d };
