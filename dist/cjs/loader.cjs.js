'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4a4e805c.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["insiteco-chat_3.cjs",[[1,"insiteco-feedback",{"isVisible":[32]}],[1,"insiteco-chat"],[1,"insiteco-input",{"inputValue":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map