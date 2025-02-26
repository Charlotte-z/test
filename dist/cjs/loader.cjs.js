'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-69cb69ec.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["insightsmith-feedback_2.cjs",[[1,"insightsmith-feedback",{"isVisible":[32],"attachments":[32],"isScreenshotMode":[32],"screenshotStartPos":[32],"screenshotEndPos":[32],"selectedArea":[32],"screenshotCanvas":[32],"isDrawingRect":[32],"rectangles":[32],"currentRect":[32],"position":[32],"title":[32],"description":[32]}],[0,"insightsmith-icons",{"name":[1],"class":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
