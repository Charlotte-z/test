import { b as bootstrapLazy } from './index-f0f6a338.js';
export { s as setNonce } from './index-f0f6a338.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["insiteco-chat_3",[[1,"insiteco-feedback",{"isVisible":[32]}],[1,"insiteco-chat"],[1,"insiteco-input",{"inputValue":[32]}]]]], options);
};

export { defineCustomElements };
