import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BEoIHmFV.mjs';
import { manifest } from './manifest_ChQ-X3Sv.mjs';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/api/auth/signin.astro.mjs');
const _page3 = () => import('./pages/api/auth/signout.astro.mjs');
const _page4 = () => import('./pages/blogs/edit/_slug_.astro.mjs');
const _page5 = () => import('./pages/blogs/new.astro.mjs');
const _page6 = () => import('./pages/blogs/_slug_.astro.mjs');
const _page7 = () => import('./pages/blogs.astro.mjs');
const _page8 = () => import('./pages/developers.astro.mjs');
const _page9 = () => import('./pages/faculty.astro.mjs');
const _page10 = () => import('./pages/gallery.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/api/auth/signin.ts", _page2],
    ["src/pages/api/auth/signout.ts", _page3],
    ["src/pages/blogs/edit/[slug].astro", _page4],
    ["src/pages/blogs/new.astro", _page5],
    ["src/pages/blogs/[slug].astro", _page6],
    ["src/pages/blogs/index.astro", _page7],
    ["src/pages/developers.astro", _page8],
    ["src/pages/faculty.astro", _page9],
    ["src/pages/gallery.astro", _page10],
    ["src/pages/login.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e26ad00a-a9e6-4228-a914-b3999f14c0ea",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
