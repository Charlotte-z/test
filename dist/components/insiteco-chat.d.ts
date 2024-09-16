import type { Components, JSX } from "../types/components";

interface InsitecoChat extends Components.InsitecoChat, HTMLElement {}
export const InsitecoChat: {
    prototype: InsitecoChat;
    new (): InsitecoChat;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
