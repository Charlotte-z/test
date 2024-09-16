export declare class InsitecoInput {
    inputValue: string;
    private inputRef;
    private spanRef;
    private caretRef;
    private sendIconRef;
    private resetTimer;
    handleInput(event: InputEvent): void;
    resetCaretAnimation(): void;
    showSendIcon(): void;
    hideSendIcon(): void;
    updateCaretPosition(): void;
    componentDidLoad(): void;
    render(): any;
}
