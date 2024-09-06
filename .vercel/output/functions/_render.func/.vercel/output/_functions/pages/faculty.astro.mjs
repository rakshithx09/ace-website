/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CFnpzb-_.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Faculty = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    { name: "James Henry", position: "HOD", image: "/images/sample.png" },
    { name: "John Doe", position: "Assistant Proefssor", image: "/images/sample.png" },
    { name: "Mykel Smith", position: "Pofessor", image: "/images/sample.png" },
    { name: "Angel Smith", position: "Professor II", image: "/images/sample.png" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-pl465zjq": true }, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"> ${maybeRenderHead()}<h2 class="fade-up uppercase text-6xl text-center" data-astro-cid-pl465zjq>Faculty</h2> <div class="wrapper" data-astro-cid-pl465zjq> <main class="content-container" data-astro-cid-pl465zjq> <div class="mt-32 flex flex-col gap-8 items-center" data-astro-cid-pl465zjq> <div class="card_Container" data-astro-cid-pl465zjq> ${teamMembers.map((member) => renderTemplate`<div class="card" data-astro-cid-pl465zjq> <div class="imbBx" data-astro-cid-pl465zjq> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} data-astro-cid-pl465zjq> </div> <div class="content" data-astro-cid-pl465zjq> <div class="contentBx" data-astro-cid-pl465zjq> <h3 data-astro-cid-pl465zjq>${member.name} <br data-astro-cid-pl465zjq><span data-astro-cid-pl465zjq>${member.position}</span></h3> </div> </div> </div>`)} </div> </div> </main> </div> ` })} `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/faculty.astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/faculty.astro";
const $$url = "/faculty";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faculty,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
