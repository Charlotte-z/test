import 'remote-web-worker';
export declare class InsitecoFeedback {
    isVisible: boolean;
    private worker;
    constructor();
    toggleVisibility(): void;
    handleWorkerResponse(event: MessageEvent): void;
    sendRequestToWorker(): void;
    render(): any;
}
