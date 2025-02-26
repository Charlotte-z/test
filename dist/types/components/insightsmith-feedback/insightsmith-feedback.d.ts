import 'remote-web-worker';
export declare class InsightsmithFeedback {
    el: HTMLElement;
    isVisible: boolean;
    attachments: Array<{
        file: File;
        type: 'attachment' | 'screenshot';
    }>;
    isScreenshotMode: boolean;
    screenshotStartPos: {
        x: number;
        y: number;
    } | null;
    screenshotEndPos: {
        x: number;
        y: number;
    } | null;
    selectedArea: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    screenshotCanvas: HTMLCanvasElement | null;
    isDrawingRect: boolean;
    rectangles: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    currentRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    position: {
        x: number;
        y: number;
    };
    title: string;
    description: string;
    private dragOffset;
    private worker;
    private readonly MAX_FILE_SIZE;
    private fileUploadRef?;
    constructor();
    componentDidLoad(): void;
    disconnectedCallback(): void;
    updatePosition: () => void;
    toggleVisibility(): void;
    handleWorkerResponse(event: MessageEvent): void;
    startScreenshot: () => void;
    handleScreenshotStart: (event: MouseEvent) => void;
    handleScreenshotMove: (event: MouseEvent) => void;
    handleScreenshotEnd: () => void;
    handleSave: () => Promise<void>;
    handleCancel: () => void;
    handleRectStart: (e: MouseEvent) => void;
    handleRectMove: (e: MouseEvent) => void;
    handleRectEnd: () => void;
    handleFileUpload: (event: Event, type: "attachment" | "screenshot") => void;
    handleSend: () => void;
    sendRequestToWorker(): void;
    render(): any;
}
