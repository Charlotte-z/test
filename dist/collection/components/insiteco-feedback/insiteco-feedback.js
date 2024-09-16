import { Host, h } from "@stencil/core";
import { workerPath } from "../../workers/conversation.worker.js?worker";
export class InsitecoFeedback {
    constructor() {
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
        return (h(Host, { key: '8c44952943a9d7132339a42fe9e67012155d7a32' }, this.isVisible ? (h("div", { class: "flex justify-center bg-white items-center h-[500px] fixed right-4 bottom-4 rounded-2xl" }, h("div", { class: "card shadow-2xl p-4 w-96 h-full" }, h("div", { class: "card-body p-1 h-full flex flex-col justify-between" }, h("div", { class: "flex flex-col flex-1" }, h("section", { class: "w-full flex justify-end h-8 items-center" }, h("section", { class: "w-fit cursor-pointer", onClick: () => this.toggleVisibility() }, h("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "2766", width: "20", height: "20" }, h("path", { d: "M807.6288 550.8096H224.2048c-17.5104 0-30.72-16.7936-30.72-38.7072s13.3632-38.7072 30.72-38.7072h583.424c17.5104 0 30.72 16.7936 30.72 38.7072s-14.0288 38.7072-30.72 38.7072z", "p-id": "2767", fill: "black" }), h("path", { d: "M807.5776 554.0352H224.2048c-19.456 0-34.0992-18.0224-34.0992-41.9328s14.6432-41.9328 34.0992-41.9328h583.3728c19.456 0 34.0992 18.0224 34.0992 41.9328 0 23.1424-15.2576 41.9328-34.0992 41.9328zM224.2048 476.6208c-15.7696 0-27.648 15.36-27.648 35.4816s11.8784 35.4816 27.648 35.4816h583.3728c15.36 0 27.648-15.9232 27.648-35.4816s-11.8784-35.4816-27.648-35.4816z", "p-id": "2768", fill: "black" })))), h("section", { class: "mt-2 flex-1 overflow-hidden" }, h("insiteco-chat", { class: "w-full h-full" }))), h("div", { class: "flex flex-col gap-2 mt-3" }, h("insiteco-input", null)))))) : (h("div", { class: 'vertical-text', onClick: () => this.toggleVisibility() }, h("span", null, "Feedback")))));
    }
    static get is() { return "insiteco-feedback"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["insiteco-feedback.sass"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["insiteco-feedback.css"]
        };
    }
    static get states() {
        return {
            "isVisible": {}
        };
    }
}
