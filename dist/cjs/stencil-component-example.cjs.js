'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-69cb69ec.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-component-example.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["insightsmith-feedback_2.cjs",[[1,"insightsmith-feedback",{"isVisible":[32],"attachments":[32],"isScreenshotMode":[32],"screenshotStartPos":[32],"screenshotEndPos":[32],"selectedArea":[32],"screenshotCanvas":[32],"isDrawingRect":[32],"rectangles":[32],"currentRect":[32],"position":[32],"title":[32],"description":[32]}],[0,"insightsmith-icons",{"name":[1],"class":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
