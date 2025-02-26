'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-69cb69ec.js');

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

const workerPath = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/conversation.worker.js-d2398ba3.js').href : new URL('conversation.worker.js-d2398ba3.js', document.currentScript && document.currentScript.src || document.baseURI).href);

const insightsmithFeedbackCss = "/*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.block{display:block}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:host{display:block}.vertical-text{background-color:#121212;border-radius:.25rem;box-shadow:-4px -12px 25px 0 rgba(0,0,0,.1);color:#fff;cursor:pointer;font-family:Inter,Helvetica,Arial,sans-serif;letter-spacing:-.025em;padding:.5rem 1rem;position:fixed;right:0;top:50%;transform:translateY(-50%);transform:translateY(-50%) rotate(-90deg) translateX(50%);transform-origin:100% 100%;white-space:nowrap}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color:oklch(0% 0 0)){:root{--fallback-p:#491eff;--fallback-pc:#d4dbff;--fallback-s:#ff41c7;--fallback-sc:#fff9fc;--fallback-a:#00cfbd;--fallback-ac:#00100d;--fallback-n:#2b3440;--fallback-nc:#d7dde4;--fallback-b1:#fff;--fallback-b2:#e5e6e6;--fallback-b3:#e5e6e6;--fallback-bc:#1f2937;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;color-scheme:light}@media (prefers-color-scheme:dark){:root{--fallback-p:#7582ff;--fallback-pc:#050617;--fallback-s:#ff71cf;--fallback-sc:#190211;--fallback-a:#00c7b5;--fallback-ac:#000e0c;--fallback-n:#2a323c;--fallback-nc:#a6adbb;--fallback-b1:#1d232a;--fallback-b2:#191e24;--fallback-b3:#15191e;--fallback-bc:#a6adbb;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:13.138% 0.0392 275.75;--sc:14.96% 0.052 342.55;--ac:14.902% 0.0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:65.69% 0.196 275.75;--s:74.8% 0.26 342.55;--a:74.51% 0.167 183.61;--n:31.3815% 0.021108 254.139175;--nc:74.6477% 0.0216 264.435964;--b1:25.3267% 0.015896 252.417568;--b2:23.2607% 0.013807 253.100675;--b3:21.1484% 0.01165 254.087939;--bc:74.6477% 0.0216 264.435964;color-scheme:dark}}}html{-webkit-tap-highlight-color:transparent}*{scrollbar-color:color-mix(in oklch,currentColor 35%,transparent) transparent}:hover{scrollbar-color:color-mix(in oklch,currentColor 60%,transparent) transparent}:root,[data-theme=light]{--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:89.824% 0.06192 275.75;--ac:15.352% 0.0368 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:49.12% 0.3096 275.75;--s:69.71% 0.329 342.55;--sc:98.71% 0.0106 342.55;--a:76.76% 0.184 183.61;--n:32.1785% 0.02476 255.701624;--nc:89.4994% 0.011585 252.096176;--b1:100% 0 0;--b2:96.1151% 0 0;--b3:92.4169% 0.00108 197.137559;--bc:27.8078% 0.029596 256.847952;color-scheme:light}[data-theme=dark]{--in:72.06% 0.191 231.6;--su:64.8% 0.150 160;--wa:84.71% 0.199 83.87;--er:71.76% 0.221 22.18;--pc:13.138% 0.0392 275.75;--sc:14.96% 0.052 342.55;--ac:14.902% 0.0334 183.61;--inc:0% 0 0;--suc:0% 0 0;--wac:0% 0 0;--erc:0% 0 0;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:65.69% 0.196 275.75;--s:74.8% 0.26 342.55;--a:74.51% 0.167 183.61;--n:31.3815% 0.021108 254.139175;--nc:74.6477% 0.0216 264.435964;--b1:25.3267% 0.015896 252.417568;--b2:23.2607% 0.013807 253.100675;--b3:21.1484% 0.01165 254.087939;--bc:74.6477% 0.0216 264.435964;color-scheme:dark}.alert{--tw-border-opacity:1;--tw-text-opacity:1;--alert-bg:var(--fallback-b2,oklch(var(--b2)/1));--alert-bg-mix:var(--fallback-b1,oklch(var(--b1)/1));align-content:flex-start;align-items:center;background-color:var(--alert-bg);border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-radius:var(--rounded-box,1rem);border-width:1px;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));display:grid;gap:1rem;grid-auto-flow:row;justify-items:center;padding:1rem;text-align:center;width:100%}@media (min-width:640px){.alert{grid-auto-flow:column;grid-template-columns:auto minmax(auto,1fr);justify-items:start;text-align:start}}.avatar.placeholder>div{align-items:center;display:flex;justify-content:center}@media (hover:hover){.label a:hover{--tw-text-opacity:1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}}.label{align-items:center;display:flex;justify-content:space-between;padding:.5rem .25rem;user-select:none}.input{--tw-bg-opacity:1;appearance:none;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:transparent;border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:1rem;height:3rem;line-height:2;line-height:1.5rem;padding-left:1rem;padding-right:1rem}.input-md[type=number]::-webkit-inner-spin-button,.input[type=number]::-webkit-inner-spin-button{margin-bottom:-1rem;margin-top:-1rem;margin-inline-end:-1rem}.link{cursor:pointer;text-decoration-line:underline}.textarea{--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:transparent;border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:.875rem;line-height:1.25rem;line-height:2;min-height:3rem;padding:.5rem 1rem}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.input input{--tw-bg-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));background-color:transparent}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input:focus,.input:focus-within{border-color:var(--fallback-bc,oklch(var(--bc)/.2));box-shadow:none;outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.input-disabled,.input:disabled,.input:has(>input[disabled]),.input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4));cursor:not-allowed}.input-disabled::placeholder,.input:disabled::placeholder,.input:has(>input[disabled])::placeholder,.input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.mockup-browser .mockup-browser-toolbar .input{--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));direction:ltr;display:block;height:1.75rem;margin-left:auto;margin-right:auto;overflow:hidden;padding-left:2rem;position:relative;text-overflow:ellipsis;white-space:nowrap;width:24rem}.mockup-browser .mockup-browser-toolbar .input:before{--tw-translate-y:-50%;aspect-ratio:1/1;border-color:currentColor;border-radius:9999px;border-width:2px;height:.75rem;left:.5rem}.mockup-browser .mockup-browser-toolbar .input:after,.mockup-browser .mockup-browser-toolbar .input:before{content:\"\";opacity:.6;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mockup-browser .mockup-browser-toolbar .input:after{--tw-translate-y:25%;--tw-rotate:-45deg;border-color:currentColor;border-radius:9999px;border-width:1px;height:.5rem;left:1.25rem}.textarea:focus{border-color:var(--fallback-bc,oklch(var(--bc)/.2));box-shadow:none;outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.textarea-disabled,.textarea:disabled,.textarea[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4));cursor:not-allowed}.textarea-disabled::placeholder,.textarea:disabled::placeholder,.textarea[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.invisible{visibility:hidden}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.left-0{left:0}.right-0{right:0}.z-50{z-index:50}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mr-1{margin-right:.25rem}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-12{height:3rem}.h-3{height:.75rem}.h-32{height:8rem}.h-4{height:1rem}.h-5{height:1.25rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-\\[320px\\]{width:320px}.w-fit{width:fit-content}.w-full{width:100%}.max-w-\\[150px\\]{max-width:150px}.flex-1{flex:1 1 0%}.cursor-grab{cursor:grab}.select-none{user-select:none}.resize-none{resize:none}.resize{resize:both}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-2{gap:.5rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.border-white\\/10{border-color:hsla(0,0%,100%,.1)}.bg-\\[\\#121212\\]{--tw-bg-opacity:1;background-color:rgb(18 18 18/var(--tw-bg-opacity))}.bg-black\\/20{background-color:rgba(0,0,0,.2)}.bg-black\\/30{background-color:rgba(0,0,0,.3)}.bg-black\\/50{background-color:rgba(0,0,0,.5)}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-6{padding:1.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.pl-2{padding-left:.5rem}.pr-1{padding-right:.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-secondary{--tw-text-opacity:1;color:var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-white\\/60{color:hsla(0,0%,100%,.6)}.text-white\\/80{color:hsla(0,0%,100%,.8)}.text-white\\/90{color:hsla(0,0%,100%,.9)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.placeholder\\:text-sm::placeholder{font-size:.875rem;line-height:1.25rem}.placeholder\\:text-white\\/50::placeholder{color:hsla(0,0%,100%,.5)}.hover\\:bg-black\\/30:hover{background-color:rgba(0,0,0,.3)}.hover\\:bg-black\\/50:hover{background-color:rgba(0,0,0,.5)}.hover\\:bg-black\\/70:hover{background-color:rgba(0,0,0,.7)}.hover\\:bg-zinc-400:hover{--tw-bg-opacity:1;background-color:rgb(161 161 170/var(--tw-bg-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-white\\/20:focus{--tw-ring-color:hsla(0,0%,100%,.2)}.active\\:cursor-grabbing:active{cursor:grabbing}";
const InsightsmithFeedbackStyle0 = insightsmithFeedbackCss;

const InsightsmithFeedback = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dragOffset = { x: 0, y: 0 };
        this.MAX_FILE_SIZE = 20 * 1024 * 1024;
        this.updatePosition = () => {
            const minX = 20;
            const maxX = window.innerWidth - 340;
            const minY = 20;
            const maxY = window.innerHeight - 540;
            this.position = {
                x: Math.max(minX, Math.min(maxX, this.position.x)),
                y: Math.max(minY, Math.min(maxY, this.position.y)),
            };
        };
        this.startScreenshot = () => {
            this.isScreenshotMode = true;
            this.screenshotStartPos = null;
            this.screenshotEndPos = null;
        };
        this.handleScreenshotStart = (event) => {
            this.screenshotStartPos = { x: event.clientX, y: event.clientY };
            this.screenshotEndPos = { x: event.clientX, y: event.clientY };
        };
        this.handleScreenshotMove = (event) => {
            if (this.screenshotStartPos) {
                this.screenshotEndPos = { x: event.clientX, y: event.clientY };
            }
        };
        this.handleScreenshotEnd = () => {
            if (!this.screenshotStartPos || !this.screenshotEndPos)
                return;
            const x = Math.min(this.screenshotStartPos.x, this.screenshotEndPos.x);
            const y = Math.min(this.screenshotStartPos.y, this.screenshotEndPos.y);
            const width = Math.abs(this.screenshotEndPos.x - this.screenshotStartPos.x);
            const height = Math.abs(this.screenshotEndPos.y - this.screenshotStartPos.y);
            if (width < 10 || height < 10) {
                this.isScreenshotMode = false;
                this.screenshotStartPos = null;
                this.screenshotEndPos = null;
                return;
            }
            this.selectedArea = { x, y, width, height };
            this.screenshotStartPos = null;
            this.screenshotEndPos = null;
        };
        this.handleSave = async () => {
            if (!this.selectedArea)
                return;
            try {
                const html2canvas = await Promise.resolve().then(function () { return require('./html2canvas-pro-550d9237.js'); }).then(function (n) { return n.html2canvasPro; });
                const rectElements = this.rectangles.map(rect => {
                    const el = document.createElement('div');
                    el.className = 'screenshot-rect';
                    el.style.position = 'absolute';
                    el.style.left = `${this.selectedArea.x + rect.x}px`;
                    el.style.top = `${this.selectedArea.y + rect.y}px`;
                    el.style.width = `${rect.width}px`;
                    el.style.height = `${rect.height}px`;
                    el.style.border = '2px solid #ef4444';
                    el.style.pointerEvents = 'none';
                    el.style.zIndex = '10000';
                    document.body.appendChild(el);
                    return el;
                });
                const screenshot = await html2canvas.default(document.documentElement, {
                    x: this.selectedArea.x,
                    y: this.selectedArea.y,
                    width: this.selectedArea.width,
                    height: this.selectedArea.height,
                    useCORS: true,
                    allowTaint: true,
                    ignoreElements: element => {
                        return element.classList.contains('screenshot-controls') || element.classList.contains('feedback-overlay') || element.classList.contains('backdrop-overlay');
                    },
                });
                rectElements.forEach(el => document.body.removeChild(el));
                screenshot.toBlob(async (blob) => {
                    if (!blob)
                        return;
                    const fileName = `screenshot-${Date.now()}.png`;
                    const file = new File([blob], fileName, { type: 'image/png' });
                    this.attachments = [...this.attachments, { file, type: 'screenshot' }];
                    this.handleCancel();
                }, 'image/png', 1.0);
            }
            catch (error) {
                console.error('Failed to take screenshot:', error);
                this.handleCancel();
            }
        };
        this.handleCancel = () => {
            this.isScreenshotMode = false;
            this.screenshotStartPos = null;
            this.screenshotEndPos = null;
            this.selectedArea = null;
            this.screenshotCanvas = null;
            this.isDrawingRect = false;
            this.currentRect = null;
            this.rectangles = [];
            const popovers = document.querySelectorAll('insightsmith-feedback');
            popovers.forEach(popover => {
                popover.style.visibility = '';
            });
        };
        this.handleRectStart = (e) => {
            if (!this.selectedArea)
                return;
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.isDrawingRect = true;
            this.currentRect = {
                x,
                y,
                width: 0,
                height: 0,
            };
        };
        this.handleRectMove = (e) => {
            if (!this.isDrawingRect || !this.currentRect || !this.selectedArea)
                return;
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const width = x - this.currentRect.x;
            const height = y - this.currentRect.y;
            this.currentRect = Object.assign(Object.assign({}, this.currentRect), { width: Math.max(0, width), height: Math.max(0, height) });
        };
        this.handleRectEnd = () => {
            if (!this.isDrawingRect || !this.currentRect)
                return;
            if (this.currentRect.width > 0 && this.currentRect.height > 0) {
                this.rectangles = [...this.rectangles, Object.assign({}, this.currentRect)];
            }
            this.isDrawingRect = false;
            this.currentRect = null;
        };
        this.handleFileUpload = (event, type) => {
            const input = event.target;
            const files = input.files;
            if (!files)
                return;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.size > this.MAX_FILE_SIZE) {
                    alert(`File ${file.name} is too large. Maximum size is 20MB.`);
                    continue;
                }
                this.attachments = [...this.attachments, { file, type }];
                console.log('File uploaded:', file.name);
            }
        };
        this.handleSend = () => {
            // this.sendRequestToWorker();
            console.log({
                title: this.title,
                description: this.description,
                attachments: this.attachments,
            });
        };
        this.isVisible = false;
        this.attachments = [];
        this.isScreenshotMode = false;
        this.screenshotStartPos = null;
        this.screenshotEndPos = null;
        this.selectedArea = null;
        this.screenshotCanvas = null;
        this.isDrawingRect = false;
        this.rectangles = [];
        this.currentRect = null;
        this.position = { x: window.innerWidth - 340, y: window.innerHeight - 540 };
        this.title = '';
        this.description = '';
        this.worker = new Worker(workerPath, { type: 'classic' });
        this.worker.onmessage = this.handleWorkerResponse.bind(this);
    }
    componentDidLoad() {
        window.addEventListener('resize', this.updatePosition);
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.updatePosition);
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
                token: '',
            },
        });
    }
    render() {
        return (index.h(index.Host, { key: '49dd3a4a63e281f3623246182ac9175c8c1f51c5' }, this.isVisible ? (index.h("section", null, this.isScreenshotMode && (index.h("div", { class: "fixed inset-0 z-50" }, index.h("div", { class: "fixed inset-0 backdrop-overlay", style: {
                // backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'brightness(0.8)',
                // Ensure the backdrop applies outside the selected region
                clipPath: this.selectedArea
                    ? `polygon(
                            0 0,
                            100% 0,
                            100% 100%,
                            0% 100%,
                            0 0,
                            ${this.selectedArea.x}px ${this.selectedArea.y}px,
                            ${this.selectedArea.x}px ${this.selectedArea.y + this.selectedArea.height}px,
                            ${this.selectedArea.x + this.selectedArea.width}px ${this.selectedArea.y + this.selectedArea.height}px,
                            ${this.selectedArea.x + this.selectedArea.width}px ${this.selectedArea.y}px,
                            ${this.selectedArea.x}px ${this.selectedArea.y}px
                          )`
                    : 'none',
            } }), index.h("div", { class: "fixed inset-0 feedback-overlay", style: {
                cursor: !this.selectedArea ? 'crosshair' : 'default',
                backgroundColor: 'transparent',
            }, onMouseDown: (e) => {
                if (!this.selectedArea) {
                    e.preventDefault();
                    this.handleScreenshotStart(e);
                }
            }, onMouseMove: (e) => {
                if (!this.selectedArea) {
                    e.preventDefault();
                    this.handleScreenshotMove(e);
                }
            }, onMouseUp: (e) => {
                if (!this.selectedArea) {
                    e.preventDefault();
                    this.handleScreenshotEnd();
                }
            } }, this.screenshotStartPos && this.screenshotEndPos && (index.h("div", { class: "absolute border-2 border-blue-500", style: {
                backgroundColor: 'transparent',
                left: `${Math.min(this.screenshotStartPos.x, this.screenshotEndPos.x)}px`,
                top: `${Math.min(this.screenshotStartPos.y, this.screenshotEndPos.y)}px`,
                width: `${Math.abs(this.screenshotEndPos.x - this.screenshotStartPos.x)}px`,
                height: `${Math.abs(this.screenshotEndPos.y - this.screenshotStartPos.y)}px`,
            } })), this.selectedArea && (index.h("div", { class: "absolute", style: {
                left: `${this.selectedArea.x}px`,
                top: `${this.selectedArea.y}px`,
                width: `${this.selectedArea.width}px`,
                height: `${this.selectedArea.height}px`,
                backgroundColor: 'transparent',
            } }, index.h("div", { class: "absolute inset-0 border-2 border-blue-500", style: {
                cursor: this.isDrawingRect ? 'crosshair' : 'default',
            }, onMouseDown: (e) => {
                if (this.isDrawingRect) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleRectStart(e);
                }
            }, onMouseMove: (e) => {
                if (this.isDrawingRect) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleRectMove(e);
                }
            }, onMouseUp: (e) => {
                if (this.isDrawingRect) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleRectEnd();
                }
            } }, index.h("div", { class: "absolute left-0 right-0 flex justify-center gap-2 p-2 bg-[#121212] z-50 w-fit screenshot-controls", style: {
                bottom: this.selectedArea && window.innerHeight - (this.selectedArea.y + this.selectedArea.height) < 70 ? '0' : '-60px',
            } }, index.h("button", { class: `p-2 rounded-md transition-colors ${this.isDrawingRect ? 'bg-red-100' : 'hover:bg-zinc-400'}`, onClick: () => (this.isDrawingRect = !this.isDrawingRect), title: "Draw Rectangle" }, index.h("svg", { class: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, index.h("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }))), index.h("button", { class: "p-2 rounded-md hover:bg-zinc-400 transition-colors text-red-500", onClick: this.handleCancel, title: "Cancel" }, index.h("svg", { class: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, index.h("path", { d: "M18 6L6 18M6 6l12 12" }))), index.h("button", { class: "p-2 rounded-md hover:bg-zinc-400 transition-colors", onClick: this.handleSave, title: "Save" }, index.h("svg", { class: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, index.h("path", { d: "M5 13l4 4L19 7" })))), index.h("div", { class: "absolute inset-0" }, this.currentRect && (index.h("div", { class: "absolute border-2 border-red-500", style: {
                left: `${this.currentRect.x}px`,
                top: `${this.currentRect.y}px`,
                width: `${this.currentRect.width}px`,
                height: `${this.currentRect.height}px`,
            } })), this.rectangles.map((rect, index$1) => (index.h("div", { key: index$1, class: "absolute border-2 border-red-500", style: {
                left: `${rect.x}px`,
                top: `${rect.y}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
            } }))), this.screenshotCanvas && (index.h("canvas", { ref: el => {
                if (el) {
                    el.width = this.selectedArea.width;
                    el.height = this.selectedArea.height;
                    const ctx = el.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(this.screenshotCanvas, 0, 0);
                    }
                }
            }, style: {
                width: '100%',
                height: '100%',
            } }))))))))), index.h("div", { class: "flex flex-col bg-[#121212] border border-white/10 fixed rounded-xl shadow-lg select-none", style: {
                left: `${this.position.x}px`,
                top: `${this.position.y}px`,
            }, onMouseDown: (e) => {
                if (e.target.closest('button'))
                    return;
                const rect = e.currentTarget.getBoundingClientRect();
                this.dragOffset = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                };
                const handleMouseMove = (e) => {
                    let newX = e.clientX - this.dragOffset.x;
                    let newY = e.clientY - this.dragOffset.y;
                    const dialogRect = rect;
                    const minX = 20;
                    const maxX = window.innerWidth - dialogRect.width - 20;
                    const minY = 20;
                    const maxY = window.innerHeight - dialogRect.height - 20;
                    newX = Math.max(minX, Math.min(maxX, newX));
                    newY = Math.max(minY, Math.min(maxY, newY));
                    this.position = { x: newX, y: newY };
                };
                const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                };
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            } }, !this.isScreenshotMode && (index.h("div", null, index.h("div", { class: "h-12 px-4 flex items-center cursor-grab active:cursor-grabbing" }, index.h("h2", { class: "text-xl font-semibold text-white/90 flex-1" }, "Feedback"), index.h("button", { onClick: () => this.toggleVisibility(), class: "p-1 rounded-full hover:bg-black/30 transition-colors" }, index.h("svg", { class: "w-5 h-5 text-white", viewBox: "0 0 24 24" }, index.h("path", { fill: "currentColor", d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))), index.h("div", { class: "w-[320px] p-6 relative" }, index.h("div", { class: "space-y-3 mb-4" }, index.h("div", { class: "flex gap-2" }, index.h("button", { class: "p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors", onClick: () => { var _a; return (_a = this.fileUploadRef) === null || _a === void 0 ? void 0 : _a.click(); } }, index.h("input", { ref: el => (this.fileUploadRef = el), type: "file", class: "hidden", multiple: true, onChange: e => this.handleFileUpload(e, 'attachment'), accept: "*/*" }), index.h("insightsmith-icons", { name: "attachment", class: "w-5 h-5 text-white/90" })), index.h("button", { class: "p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors", onClick: this.startScreenshot }, index.h("insightsmith-icons", { name: "screenshot", class: "w-5 h-5 text-white/90" }))), this.attachments.length > 0 && (index.h("div", { class: "border border-white/10 rounded-lg p-3 bg-black/20" }, index.h("div", { class: "flex flex-wrap gap-2", style: { maxHeight: '50px', overflowY: 'auto' } }, this.attachments.map((item, index$1) => (index.h("div", { class: "inline-flex items-center bg-black/30 rounded-lg text-sm pl-2 pr-1 py-1" }, index.h("insightsmith-icons", { name: item.type, class: "w-4 h-4 mr-1 text-white/80" }), index.h("span", { class: "truncate max-w-[150px] text-white" }, item.file.name), index.h("button", { onClick: () => {
                this.attachments = this.attachments.filter((_, i) => i !== index$1);
            }, class: "ml-1 text-white/60 hover:text-white p-1" }, index.h("svg", { class: "w-3 h-3", viewBox: "0 0 24 24" }, index.h("path", { fill: "currentColor", d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))))))))), index.h("div", { class: "mb-4" }, index.h("label", { class: "block text-sm mb-2 text-white/90" }, "Title"), index.h("input", { type: "text", class: "placeholder:text-sm w-full px-3 py-2 bg-black/30 rounded-lg text-white placeholder:text-white/50 border-0 focus:outline-none focus:ring-1 focus:ring-white/20", placeholder: "What's your feedback about?", onChange: (e) => (this.title = e.target.value) })), index.h("div", { class: "mb-4" }, index.h("label", { class: "block text-sm mb-2 text-white/90" }, "Description"), index.h("textarea", { class: "placeholder:text-sm w-full h-32 px-3 py-2 bg-black/30 rounded-lg resize-none text-white placeholder:text-white/50 border-0 focus:outline-none focus:ring-1 focus:ring-white/20", placeholder: "Please describe the problem you encountered in detail.", onChange: (e) => (this.description = e.target.value) })), index.h("div", { class: "flex justify-end" }, index.h("button", { class: "bg-black/50 text-white/90 px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-black/70 transition-colors w-full font-medium", onClick: this.handleSend }, "Send")))))))) : (index.h("div", { class: `vertical-text text-xs ${this.isScreenshotMode ? 'invisible' : ''}`, onClick: () => this.toggleVisibility() }, index.h("span", { class: 'text-secondary' }, "Feedback")))));
    }
    get el() { return index.getElement(this); }
};
InsightsmithFeedback.style = InsightsmithFeedbackStyle0;

const InsightsmithIcons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = undefined;
        this.class = undefined;
    }
    render() {
        const commonProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            class: this.class
        };
        switch (this.name) {
            case 'attachment':
                return (index.h("svg", Object.assign({}, commonProps), index.h("path", { d: "M13.234 20.252 21 12.3" }), index.h("path", { d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" })));
            case 'screenshot':
                return (index.h("svg", Object.assign({}, commonProps), index.h("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }), index.h("circle", { cx: "12", cy: "13", r: "3" })));
            default:
                return null;
        }
    }
};

exports.insightsmith_feedback = InsightsmithFeedback;
exports.insightsmith_icons = InsightsmithIcons;
