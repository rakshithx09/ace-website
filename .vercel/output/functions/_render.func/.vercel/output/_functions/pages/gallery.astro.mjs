/* empty css                                  */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
import { $ as $$Layout } from '../chunks/Layout_CTh15CE6.mjs';
export { renderers } from '../renderers.mjs';

const $$GalleryHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="scene" class="overflow-hidden" data-astro-cid-v5jhgds3> <div data-depth="0.2" id="layer1" class="layer" data-astro-cid-v5jhgds3> <img src="/images/sample.png" alt="" style="top:20%;left:20%;" data-astro-cid-v5jhgds3> <img src="/images/sample.png" alt="" style="bottom:10%;left:70%;" data-astro-cid-v5jhgds3> </div> <div data-depth="0.4" id="layer2" class="layer" data-astro-cid-v5jhgds3> <div class="flex justify-around items-center m-auto w-full h-full" data-astro-cid-v5jhgds3> <img src="/images/sample.png" alt="" style="bottom:10%;left:10%;" data-astro-cid-v5jhgds3> <img src="/images/sample.png" alt="" style="bottom:60%;right:20%;" data-astro-cid-v5jhgds3> </div> </div> <div data-depth="0.6" id="layer3" class="layer" data-astro-cid-v5jhgds3> <div class="flex justify-around items-center m-auto w-full h-full" data-astro-cid-v5jhgds3> <img src="/images/sample.png" alt="" data-astro-cid-v5jhgds3> </div> </div> </section>  `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/GalleryHero.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryHero", $$GalleryHero, {})} ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
