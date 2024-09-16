import type { Components, JSX } from "../types/components";

interface InsitecoInput extends Components.InsitecoInput, HTMLElement {}
export const InsitecoInput: {
    prototype: InsitecoInput;
    new (): InsitecoInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
