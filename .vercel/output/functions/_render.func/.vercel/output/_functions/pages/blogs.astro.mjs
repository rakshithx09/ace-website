/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import { d as db, b as blogTable } from '../chunks/index_CAHMGG-B.mjs';
import { $ as $$Layout } from '../chunks/Layout_CTh15CE6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await db.select({
    id: blogTable.id,
    image: blogTable.image,
    title: blogTable.title,
    description: blogTable.description
  }).from(blogTable);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "blogs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-8">Blogs</h1> <div class="flex gap-4"> ${blogs.map((blog) => renderTemplate`<a${addAttribute(`blogs/${blog.id}`, "href")} class="w-72 shadow-xl"> <figure> <img${addAttribute(blog.id.toString(), "id")}${addAttribute(blog.image, "src")}${addAttribute(blog.title, "alt")} class="aspect-[4/3] object-cover"> </figure> <div class=""> <h2 class="">${blog.title}</h2> <p>${blog.description}</p> </div> </a>`)} </div> ` })}`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/index.astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
