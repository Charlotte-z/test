import { h } from "@stencil/core";
export class InsightsmithIcons {
    constructor() {
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
    static get is() { return "insightsmith-icons"; }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'attachment' | 'screenshot'",
                    "resolved": "\"attachment\" | \"screenshot\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "name",
                "reflect": false
            },
            "class": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "class",
                "reflect": false
            }
        };
    }
}
