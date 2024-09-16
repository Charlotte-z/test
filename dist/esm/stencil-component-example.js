import { p as promiseResolve, b as bootstrapLazy } from './index-fa7f5cc3.js';
export { s as setNonce } from './index-fa7f5cc3.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["insiteco-chat_3",[[1,"insiteco-feedback",{"isVisible":[32]}],[1,"insiteco-chat"],[1,"insiteco-input",{"inputValue":[32]}]]]], options);
});

//# sourceMappingURL=stencil-component-example.js.map