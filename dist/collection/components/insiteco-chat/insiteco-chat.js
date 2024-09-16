import { Host, h } from "@stencil/core";
export class InsitecoChat {
    render() {
        return (h(Host, { key: '6b5e0adfd980f483e8317ac28311e8b4054f230d', class: 'h-full' }, h("div", { key: 'bc5cbe418270e43564caee293169eda38101124a', class: "chat chat-start" }, h("div", { key: '1dc77ba449ee82ab56b193047a5209f7848d2632', class: "w-fit rounded-3xl  bg-[#f5f5fb] py-2 px-4 text-sm text-black" }, "I commented on Figma")), h("div", { key: 'b0da15580b30868a86a79647aa6373f53bc4ea39', class: "chat chat-end" }, h("div", { key: '9afa03c165a33dcee680d42832773ca8747615a9', class: "w-fit rounded-3xl  bg-[#242625] py-2 px-4 text-sm text-white" }, "You underestimate my power!"))));
    }
    static get is() { return "insiteco-chat"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["insiteco-chat.sass"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["insiteco-chat.css"]
        };
    }
}
