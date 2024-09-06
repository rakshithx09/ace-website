/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import { $ as $$BlogEditor } from '../../../chunks/BlogEditor_B7eNFUyS.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CFnpzb-_.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogEditor", $$BlogEditor, { "id": Number(slug) })} ` })} `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/edit/[slug].astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/edit/[slug].astro";
const $$url = "/blogs/edit/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
