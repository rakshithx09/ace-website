import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CFnpzb-_.mjs';
import { d as db, b as blogTable } from './index_CAHMGG-B.mjs';
import { and, eq } from 'drizzle-orm/sqlite-core/expressions';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$BlogEditor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogEditor;
  const userId = 1;
  const { id } = Astro2.props;
  let blog;
  if (id != "new") {
    const blogs = await db.select({
      id: blogTable.id,
      title: blogTable.title,
      content: blogTable.content,
      description: blogTable.description,
      image: blogTable.image
    }).from(blogTable).where(and(eq(blogTable.id, id), eq(blogTable.authorId, userId)));
    if (!blogs.length) return Astro2.redirect("/blogs");
    blog = blogs[0];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "create recipe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form class="flex flex-col gap-4 mx-auto max-w-[500px]" enctype="multipart/form-data" id="blog-form"> <h3>Create Recipe</h3> <label> <p>title</p> <input type="text" name="title" required class="w-full"${addAttribute(blog?.title, "value")}> </label> <label> <p>description</p> <textarea name="description" class="w-full"${addAttribute(blog?.title, "value")}> </textarea> </label> <label> <p>description</p> ${renderComponent($$result2, "Quill", null, { "client:only": "react", "initialValue": blog?.content, "name": "content", "client:component-hydration": "only", "client:component-path": "@components/Quill", "client:component-export": "default" })} </label> <label> <p>Image</p> <input type="file" class="w-full" name="image"> </label> <input type="text" name="authorId" hidden${addAttribute(userId, "value")}> <button class="">Submit</button> </form> ` })} `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/BlogEditor.astro", void 0);

export { $$BlogEditor as $ };
