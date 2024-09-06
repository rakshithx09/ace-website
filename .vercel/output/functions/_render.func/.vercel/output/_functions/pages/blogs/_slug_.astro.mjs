/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../../chunks/Layout_CTh15CE6.mjs';
import { d as db, b as blogTable, u as userTable, c as commentsTable, v as viewTable } from '../../chunks/index_CAHMGG-B.mjs';
import { eq, and, count } from 'drizzle-orm';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const user = {
    id: 1
  };
  const blogs = await db.select({
    id: blogTable.id,
    title: blogTable.title,
    content: blogTable.content,
    description: blogTable.description,
    createdAt: blogTable.createdAt,
    authorName: userTable.name,
    image: blogTable.image,
    authorId: blogTable.authorId
  }).from(blogTable).innerJoin(userTable, eq(blogTable.authorId, userTable.id)).where(eq(blogTable.id, Number(slug)));
  if (!blogs.length) return Astro2.redirect("/blogs");
  const blog = blogs[0];
  const comments = await db.select({
    content: commentsTable.content,
    name: userTable.name,
    userId: userTable.id,
    createdAt: commentsTable.createdAt
  }).from(commentsTable).innerJoin(userTable, eq(commentsTable.userId, userTable.id)).where(eq(commentsTable.blogId, blog.id));
  db.insert(viewTable).values({
    userId: user.id,
    blogId: blog.id
  }).onConflictDoNothing();
  const likesResult = await db.select({
    liked: viewTable.liked
  }).from(viewTable).where(and(eq(viewTable.userId, user.id), eq(viewTable.blogId, blog.id)));
  let liked = false;
  if (likesResult.length) {
    liked = likesResult[0].liked;
  }
  let viewsResult = await db.select(
    {
      viewCount: count(),
      likeCount: count(viewTable.liked)
    }
  ).from(viewTable).where(eq(viewTable.blogId, blog.id));
  let viewStats;
  if (viewsResult.length) {
    viewStats = viewsResult[0];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-8 max-w-[800px] mx-auto"> <h1 class="text-4xl font-bold">${blog.title}</h1> <img${addAttribute(blog.image, "src")}${addAttribute(blog.title, "alt")} class="w-full aspect-video mx-auto max-w-[800px] object-cover rounded-box"> <a class="flex gap-6 align-middle"${addAttribute(`/profile/${blog.authorId}`, "href")}> <div class="avatar"> <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"> <img${addAttribute(blog.image, "src")}${addAttribute(blog.authorName, "alt")}> </div> </div> <span>By ${blog.authorName}</span> <span>on ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(new Date(blog.createdAt))}</span> </a> <hr> <div> <form method="post" class="flex gap-4 items-center"> <button name="vote"> ${liked ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:heart-fill", "size": 30 })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:heart-duotone", "size": 30 })}`} </button> </form> <span>${viewStats?.likeCount ?? 0} likes</span> <span>${viewStats?.viewCount ?? 1} views</span> </div> <hr> <article class="prose min-w-full">${unescapeHTML(blog.content)}</article> <div class="space-y-4"> <h2 class="text-2xl font-semibold">Comments</h2> <hr> <!-- {
                <form method="post">
                        <input type="text" name="comment" />
                        <p class="mb-2">Post a comment</p>
                        <div class="flex">
                            <input type="text" name="comment" />
                            <button class="btn btn-primary">Post</button>
                        </div>
                </form>
            } --> ${comments.map((comment) => renderTemplate`<div class=""> <a class=""${addAttribute(`profile/${comment.userId}`, "href")}> <div class="w-10 rounded-full"> <img${addAttribute(comment.name, "alt")} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"> </div> </a> <div class=""> <a${addAttribute(`/profile/${comment.userId}`, "href")}> ${comment.name} </a> <time class="text-xs"> ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(comment.createdAt))} </time> </div> <div class="">${comment.content}</div> </div>`)} </div> </main> ` })}`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/[slug].astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/blogs/[slug].astro";
const $$url = "/blogs/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
