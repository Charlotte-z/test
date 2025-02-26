import { b as bootstrapLazy } from './index-8877b12c.js';
export { s as setNonce } from './index-8877b12c.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["insightsmith-feedback_2",[[1,"insightsmith-feedback",{"isVisible":[32],"attachments":[32],"isScreenshotMode":[32],"screenshotStartPos":[32],"screenshotEndPos":[32],"selectedArea":[32],"screenshotCanvas":[32],"isDrawingRect":[32],"rectangles":[32],"currentRect":[32],"position":[32],"title":[32],"description":[32]}],[0,"insightsmith-icons",{"name":[1],"class":[1]}]]]], options);
};

export { defineCustomElements };
