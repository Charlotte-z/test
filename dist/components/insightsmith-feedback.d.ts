import type { Components, JSX } from "../types/components";

interface InsightsmithFeedback extends Components.InsightsmithFeedback, HTMLElement {}
export const InsightsmithFeedback: {
    prototype: InsightsmithFeedback;
    new (): InsightsmithFeedback;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
