'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3690f023.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('insiteco-feedback.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["insiteco-chat_3.cjs",[[1,"insiteco-feedback",{"isVisible":[32]}],[1,"insiteco-chat"],[1,"insiteco-input",{"inputValue":[32]}]]]], options);
});

exports.setNonce = index.setNonce;
