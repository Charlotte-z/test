import type { Components, JSX } from "../types/components";

interface InsitecoFeedback extends Components.InsitecoFeedback, HTMLElement {}
export const InsitecoFeedback: {
    prototype: InsitecoFeedback;
    new (): InsitecoFeedback;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
