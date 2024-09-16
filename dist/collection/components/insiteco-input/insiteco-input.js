import { Host, h } from "@stencil/core";
export class InsitecoInput {
    constructor() {
        this.inputValue = '';
    }
    handleInput(event) {
        const target = event.target;
        this.inputValue = target.value;
        this.updateCaretPosition();
        this.resetCaretAnimation();
        if (this.inputValue) {
            this.showSendIcon();
        }
        else {
            this.hideSendIcon();
        }
    }
    resetCaretAnimation() {
        if (this.caretRef) {
            this.caretRef.style.animation = 'none';
            void this.caretRef.offsetWidth;
            this.caretRef.style.animation = 'blink 1s linear infinite';
            clearTimeout(this.resetTimer);
            this.resetTimer = setTimeout(() => {
                this.caretRef.style.animation = 'blink 1s linear infinite';
            }, 500);
        }
    }
    showSendIcon() {
        if (this.sendIconRef) {
            this.sendIconRef.style.opacity = '1';
            this.sendIconRef.style.animation = 'popIn 0.2s ease-out forwards';
        }
    }
    hideSendIcon() {
        if (this.sendIconRef) {
            this.sendIconRef.style.animation = 'popOut 0.1s ease-in forwards';
        }
    }
    updateCaretPosition() {
        var _a;
        const caretElement = (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (!caretElement || !this.inputRef || !this.spanRef)
            return;
        const caretIndex = this.inputRef.selectionStart || 0;
        this.spanRef.textContent = this.inputValue.substring(0, caretIndex);
        const spanWidth = this.spanRef.offsetWidth;
        caretElement.style.left = `${spanWidth + 16}px`;
    }
    componentDidLoad() {
        this.updateCaretPosition();
    }
    render() {
        return (h(Host, { key: 'dbac8cde20ff65f5dadad78f80f67dbce164079c' }, h("div", { key: 'e9654c9057bfe0bfde2d0cb4df031694ac9b977c', class: "relative custom-cursor-container" }, h("span", { key: '261dd50f76608f54fcf2f0901a675d3e8330ecce', ref: el => (this.spanRef = el), class: "hidden-cursor-span" }), h("input", { key: '6c2e191adf7dfdfa11b0b5dd6ed9f25b45ec32df', type: "text", class: "custom-cursor-input outline-none rounded-xl bg-[#f5f5fd] border-none text-black", ref: el => (this.inputRef = el), placeholder: "Search", onInput: event => this.handleInput(event), onKeyUp: () => this.updateCaretPosition(), onClick: () => this.updateCaretPosition() }), h("div", { key: '52bb1e3b12ef039be9e79ba9704ff3dcfa454f78', class: "custom-caret", ref: el => (this.caretRef = el) }), h("div", { key: '3f4add2ccef60b379dee92e67d5fd5ff0696f76b', class: "send-icon", ref: el => (this.sendIconRef = el) }, h("svg", { key: 'd4119d57d83809aa863dbb2b1ba37c0d0a3a152f', width: "30", height: "30", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("rect", { key: 'accd6a01d5a20cea2a60b8a6373fbb7eeaf45c9a', width: "40", height: "40", rx: "20", fill: "#4F46E5" }), h("path", { key: '34a3c433067858ded684c0cc7c575c21ac812cb2', d: "M25.9853 19.2629L25.9853 19.2628L21.1581 14.4356L21.0781 14.3556V14.4688V28.25C21.0781 28.536 20.9645 28.8102 20.7623 29.0124C20.5601 29.2146 20.2859 29.3282 20 29.3282C19.714 29.3282 19.4398 29.2146 19.2376 29.0124C19.0354 28.8102 18.9218 28.536 18.9218 28.25V14.4688V14.3557L18.8418 14.4356L14.0128 19.2628L14.0128 19.2628C13.8102 19.4654 13.5355 19.5792 13.249 19.5792C12.9626 19.5792 12.6878 19.4654 12.4853 19.2628C12.2827 19.0603 12.1689 18.7856 12.1689 18.4991C12.1689 18.2126 12.2827 17.9379 12.4853 17.7354L19.2353 10.9854L19.2353 10.9853C19.3355 10.8848 19.4545 10.8051 19.5856 10.7506C19.7166 10.6962 19.8571 10.6682 19.999 10.6682C20.1409 10.6682 20.2814 10.6962 20.4125 10.7506C20.5435 10.8051 20.6625 10.8848 20.7627 10.9853L20.7628 10.9854L27.5128 17.7354L27.5128 17.7354C27.6133 17.8356 27.6931 17.9546 27.7475 18.0857C27.8019 18.2167 27.8299 18.3572 27.8299 18.4991C27.8299 18.641 27.8019 18.7815 27.7475 18.9125C27.6931 19.0436 27.6133 19.1626 27.5128 19.2628L27.5127 19.2629C27.4125 19.3634 27.2935 19.4431 27.1625 19.4976C27.0314 19.552 26.8909 19.58 26.749 19.58C26.6071 19.58 26.4666 19.552 26.3356 19.4976C26.2045 19.4431 26.0855 19.3634 25.9853 19.2629Z", fill: "white", stroke: "white", "stroke-width": "0.09375" }))))));
    }
    static get is() { return "insiteco-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["insiteco-input.sass"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["insiteco-input.css"]
        };
    }
    static get states() {
        return {
            "inputValue": {}
        };
    }
}
