import { Host, h } from "@stencil/core";
import "remote-web-worker";
import { workerPath } from "../../workers/conversation.worker.js?worker";
export class InsightsmithFeedback {
    constructor() {
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
                const html2canvas = await import('html2canvas-pro');
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
                    try {
                        // const url = window.URL.createObjectURL(blob);
                        // const link = document.createElement('a');
                        // link.href = url;
                        // link.download = fileName;
                        // document.body.appendChild(link);
                        // link.click();
                        // document.body.removeChild(link);
                        // window.URL.revokeObjectURL(url);
                    }
                    catch (error) {
                        console.error('Failed to save screenshot locally:', error);
                    }
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
        return (h(Host, { key: '49dd3a4a63e281f3623246182ac9175c8c1f51c5' }, this.isVisible ? (h("section", null, this.isScreenshotMode && (h("div", { class: "fixed inset-0 z-50" }, h("div", { class: "fixed inset-0 backdrop-overlay", style: {
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
            } }), h("div", { class: "fixed inset-0 feedback-overlay", style: {
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
            } }, this.screenshotStartPos && this.screenshotEndPos && (h("div", { class: "absolute border-2 border-blue-500", style: {
                backgroundColor: 'transparent',
                left: `${Math.min(this.screenshotStartPos.x, this.screenshotEndPos.x)}px`,
                top: `${Math.min(this.screenshotStartPos.y, this.screenshotEndPos.y)}px`,
                width: `${Math.abs(this.screenshotEndPos.x - this.screenshotStartPos.x)}px`,
                height: `${Math.abs(this.screenshotEndPos.y - this.screenshotStartPos.y)}px`,
            } })), this.selectedArea && (h("div", { class: "absolute", style: {
                left: `${this.selectedArea.x}px`,
                top: `${this.selectedArea.y}px`,
                width: `${this.selectedArea.width}px`,
                height: `${this.selectedArea.height}px`,
                backgroundColor: 'transparent',
            } }, h("div", { class: "absolute inset-0 border-2 border-blue-500", style: {
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
            } }, h("div", { class: "absolute left-0 right-0 flex justify-center gap-2 p-2 bg-[#121212] z-50 w-fit screenshot-controls", style: {
                bottom: this.selectedArea && window.innerHeight - (this.selectedArea.y + this.selectedArea.height) < 70 ? '0' : '-60px',
            } }, h("button", { class: `p-2 rounded-md transition-colors ${this.isDrawingRect ? 'bg-red-100' : 'hover:bg-zinc-400'}`, onClick: () => (this.isDrawingRect = !this.isDrawingRect), title: "Draw Rectangle" }, h("svg", { class: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, h("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }))), h("button", { class: "p-2 rounded-md hover:bg-zinc-400 transition-colors text-red-500", onClick: this.handleCancel, title: "Cancel" }, h("svg", { class: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, h("path", { d: "M18 6L6 18M6 6l12 12" }))), h("button", { class: "p-2 rounded-md hover:bg-zinc-400 transition-colors", onClick: this.handleSave, title: "Save" }, h("svg", { class: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, h("path", { d: "M5 13l4 4L19 7" })))), h("div", { class: "absolute inset-0" }, this.currentRect && (h("div", { class: "absolute border-2 border-red-500", style: {
                left: `${this.currentRect.x}px`,
                top: `${this.currentRect.y}px`,
                width: `${this.currentRect.width}px`,
                height: `${this.currentRect.height}px`,
            } })), this.rectangles.map((rect, index) => (h("div", { key: index, class: "absolute border-2 border-red-500", style: {
                left: `${rect.x}px`,
                top: `${rect.y}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
            } }))), this.screenshotCanvas && (h("canvas", { ref: el => {
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
            } }))))))))), h("div", { class: "flex flex-col bg-[#121212] border border-white/10 fixed rounded-xl shadow-lg select-none", style: {
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
            } }, !this.isScreenshotMode && (h("div", null, h("div", { class: "h-12 px-4 flex items-center cursor-grab active:cursor-grabbing" }, h("h2", { class: "text-xl font-semibold text-white/90 flex-1" }, "Feedback"), h("button", { onClick: () => this.toggleVisibility(), class: "p-1 rounded-full hover:bg-black/30 transition-colors" }, h("svg", { class: "w-5 h-5 text-white", viewBox: "0 0 24 24" }, h("path", { fill: "currentColor", d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))), h("div", { class: "w-[320px] p-6 relative" }, h("div", { class: "space-y-3 mb-4" }, h("div", { class: "flex gap-2" }, h("button", { class: "p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors", onClick: () => { var _a; return (_a = this.fileUploadRef) === null || _a === void 0 ? void 0 : _a.click(); } }, h("input", { ref: el => (this.fileUploadRef = el), type: "file", class: "hidden", multiple: true, onChange: e => this.handleFileUpload(e, 'attachment'), accept: "*/*" }), h("insightsmith-icons", { name: "attachment", class: "w-5 h-5 text-white/90" })), h("button", { class: "p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors", onClick: this.startScreenshot }, h("insightsmith-icons", { name: "screenshot", class: "w-5 h-5 text-white/90" }))), this.attachments.length > 0 && (h("div", { class: "border border-white/10 rounded-lg p-3 bg-black/20" }, h("div", { class: "flex flex-wrap gap-2", style: { maxHeight: '50px', overflowY: 'auto' } }, this.attachments.map((item, index) => (h("div", { class: "inline-flex items-center bg-black/30 rounded-lg text-sm pl-2 pr-1 py-1" }, h("insightsmith-icons", { name: item.type, class: "w-4 h-4 mr-1 text-white/80" }), h("span", { class: "truncate max-w-[150px] text-white" }, item.file.name), h("button", { onClick: () => {
                this.attachments = this.attachments.filter((_, i) => i !== index);
            }, class: "ml-1 text-white/60 hover:text-white p-1" }, h("svg", { class: "w-3 h-3", viewBox: "0 0 24 24" }, h("path", { fill: "currentColor", d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })))))))))), h("div", { class: "mb-4" }, h("label", { class: "block text-sm mb-2 text-white/90" }, "Title"), h("input", { type: "text", class: "placeholder:text-sm w-full px-3 py-2 bg-black/30 rounded-lg text-white placeholder:text-white/50 border-0 focus:outline-none focus:ring-1 focus:ring-white/20", placeholder: "What's your feedback about?", onChange: (e) => (this.title = e.target.value) })), h("div", { class: "mb-4" }, h("label", { class: "block text-sm mb-2 text-white/90" }, "Description"), h("textarea", { class: "placeholder:text-sm w-full h-32 px-3 py-2 bg-black/30 rounded-lg resize-none text-white placeholder:text-white/50 border-0 focus:outline-none focus:ring-1 focus:ring-white/20", placeholder: "Please describe the problem you encountered in detail.", onChange: (e) => (this.description = e.target.value) })), h("div", { class: "flex justify-end" }, h("button", { class: "bg-black/50 text-white/90 px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-black/70 transition-colors w-full font-medium", onClick: this.handleSend }, "Send")))))))) : (h("div", { class: `vertical-text text-xs ${this.isScreenshotMode ? 'invisible' : ''}`, onClick: () => this.toggleVisibility() }, h("span", { class: 'text-secondary' }, "Feedback")))));
    }
    static get is() { return "insightsmith-feedback"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["insightsmith-feedback.sass"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["insightsmith-feedback.css"]
        };
    }
    static get states() {
        return {
            "isVisible": {},
            "attachments": {},
            "isScreenshotMode": {},
            "screenshotStartPos": {},
            "screenshotEndPos": {},
            "selectedArea": {},
            "screenshotCanvas": {},
            "isDrawingRect": {},
            "rectangles": {},
            "currentRect": {},
            "position": {},
            "title": {},
            "description": {}
        };
    }
    static get elementRef() { return "el"; }
}
