/* empty css                                     */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import { $ as $$BlogEditor } from '../../chunks/BlogEditor_DjFd-D7U.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CTh15CE6.mjs';
export { renderers } from '../../renderers.mjs';

const $$New = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogEditor", $$BlogEditor, { "id": "new" })} ` })} `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/new.astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/new.astro";
const $$url = "/blogs/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$New,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
