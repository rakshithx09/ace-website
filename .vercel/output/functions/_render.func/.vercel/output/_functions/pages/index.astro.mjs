/* empty css                                  */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_CFnpzb-_.mjs';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="overflow-hidden gallery-parent" data-astro-cid-aillfx3e> <div class="gallery-container w-full h-full space-y-4" data-astro-cid-aillfx3e> <div class="flex gap-4 h-[75%] m-auto image-row" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> </div> <div class="flex gap-4 h-[75%] m-auto image-row" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> </div> <div class="flex gap-4 h-[75%] m-auto image-row" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> <img src="images/sample.png" alt="fndf" data-astro-cid-aillfx3e> </div> </div> </section>  `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/landing/Gallery.astro", void 0);

const $$Events = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    },
    {
      title: "jsddsg",
      image: "/images/sample.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="content-container event-section h-fit my-8 overflow-hidden" data-astro-cid-d25y4xcd> <div class="grid grid-cols-1 lg:grid-cols-2 h-fit gap-8 cards-grid " data-astro-cid-d25y4xcd> ${cards.map((card) => renderTemplate`<div class="card interactable" data-type="link" data-astro-cid-d25y4xcd> <img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} data-astro-cid-d25y4xcd>  </div>`)} </div> <div class="mx-auto mt-32 w-36 aspect-square bg-white text-black rounded-full grid place-content-center text-center" data-astro-cid-d25y4xcd> <span data-astro-cid-d25y4xcd>
view more
</span> </div> </section>  `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/landing/Events.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ACE", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- hero --> <section class="hero content-container flex flex-col items-center justify-between py-6 md:py-16" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6></div> <div class="text-center space-y-4" data-astro-cid-j7pv25f6> <h3 class="uppercase text-6xl" data-astro-cid-j7pv25f6>Association of computer Engineers</h3> <p class="m-auto max-w-80 text-sm" data-astro-cid-j7pv25f6>
Lorem ipsum dolor sit amet consectetur adipisicing elit. i animi dicta. Vitae id ullam minus, nesciunt alias
          tempore soluta.
</p> </div> <div class="w-full flex items-center justify-between" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Blogs</span> <span data-astro-cid-j7pv25f6>Get in touch</span> </div> </section> <!-- video --> <section class="content-container grid place-content-center py-20 h-fit" data-astro-cid-j7pv25f6> <video class="m-auto w-full h-fit rounded-3xl" muted autoplay loop data-astro-cid-j7pv25f6> <source src="/intro-video.mp4" type="video/mp4" data-astro-cid-j7pv25f6> </video> </section> <!-- gallery preview --> ${renderComponent($$result2, "Gallery", $$Gallery, { "data-astro-cid-j7pv25f6": true })} <!-- events --> ${renderComponent($$result2, "Events", $$Events, { "data-astro-cid-j7pv25f6": true })} </main> ` })}  `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
