import { p as proxyCustomElement, H, h } from './p-ac0f95e7.js';

const InsightsmithIcons = /*@__PURE__*/ proxyCustomElement(class InsightsmithIcons extends H {
    constructor() {
        super();
        this.__registerHost();
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
                return (h("svg", Object.assign({}, commonProps), h("path", { d: "M13.234 20.252 21 12.3" }), h("path", { d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" })));
            case 'screenshot':
                return (h("svg", Object.assign({}, commonProps), h("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }), h("circle", { cx: "12", cy: "13", r: "3" })));
            default:
                return null;
        }
    }
}, [0, "insightsmith-icons", {
        "name": [1],
        "class": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["insightsmith-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "insightsmith-icons":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InsightsmithIcons);
            }
            break;
    } });
}

export { InsightsmithIcons as I, defineCustomElement as d };
