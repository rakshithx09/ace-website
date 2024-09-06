import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BEoIHmFV.mjs';
import { manifest } from './manifest_BCFVPu_2.mjs';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/blogs/edit/_slug_.astro.mjs');
const _page3 = () => import('./pages/blogs/new.astro.mjs');
const _page4 = () => import('./pages/blogs/_slug_.astro.mjs');
const _page5 = () => import('./pages/blogs.astro.mjs');
const _page6 = () => import('./pages/developers.astro.mjs');
const _page7 = () => import('./pages/faculty.astro.mjs');
const _page8 = () => import('./pages/gallery.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/blogs/edit/[slug].astro", _page2],
    ["src/pages/blogs/new.astro", _page3],
    ["src/pages/blogs/[slug].astro", _page4],
    ["src/pages/blogs/index.astro", _page5],
    ["src/pages/developers.astro", _page6],
    ["src/pages/faculty.astro", _page7],
    ["src/pages/gallery.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ab1e736d-474d-4a5c-a9a8-94de86c8c027",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
