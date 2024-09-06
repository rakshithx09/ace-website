/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                      */
import { $ as $$Layout } from '../chunks/Layout_CTh15CE6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$DeveloperCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DeveloperCard;
  const { name, description, githubLink, linkedinLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-item" data-astro-cid-5xvxsnvb> <div class="scene" data-astro-cid-5xvxsnvb> <div class="card" data-astro-cid-5xvxsnvb> <div class="card__face card__face--front" data-astro-cid-5xvxsnvb> <img src="/images/varshithitis.jpeg" alt="Front Image" data-astro-cid-5xvxsnvb> </div> <div class="card__face card__face--back" data-astro-cid-5xvxsnvb> <img src="/images/varshithitis1.png" alt="Back Image" data-astro-cid-5xvxsnvb> </div> </div> </div> <div class="info-box" data-astro-cid-5xvxsnvb> <h3 class="text-xl font-bold text-white-700" data-astro-cid-5xvxsnvb>${name}</h3> <p class="text-white-700" data-astro-cid-5xvxsnvb>${description}</p> <div class="links" data-astro-cid-5xvxsnvb> <a${addAttribute(githubLink, "href")} class="text-white-500 hover:underline" data-astro-cid-5xvxsnvb>GitHub</a> <a${addAttribute(linkedinLink, "href")} class="text-white-500 hover:underline" data-astro-cid-5xvxsnvb>LinkedIn</a> </div> </div> </div> <!-- /* 2nd card */

  <div class="card-item">
    <div class="scene">
      <div class="card">
        <div class="card__face card__face--front">
          <img src="/images/varshithitis.jpeg" alt="Front Image" />
        </div>
        <div class="card__face card__face--back">
          <img src="/images/varshithitis1.png" alt="Back Image" />
        </div>
      </div>
    </div>
    <div class="info-box">
      <h3 class="text-xl font-bold text-white-700">{name}</h3>
      <p class="text-white-700">{description}</p>
      <div class="links">
        <a href={githubLink} class="text-white-500 hover:underline">GitHub</a>
        <a href={linkedinLink} class="text-white-500 hover:underline">LinkedIn</a>
      </div>
    </div>
  </div>

    



    <div class="card-item">
      <div class="scene">
        <div class="card">
          <div class="card__face card__face--front">
            <img src="/images/varshithitis.jpeg" alt="Front Image" />
          </div>
          <div class="card__face card__face--back">
            <img src="/images/varshithitis1.png" alt="Back Image" />
          </div>
        </div>
      </div>
      <div class="info-box">
        <h3 class="text-xl font-bold text-white-700">{name}</h3>
        <p class="text-white-700">{description}</p>
        <div class="links">
          <a href={githubLink} class="text-white-500 hover:underline">GitHub</a>
          <a href={linkedinLink} class="text-white-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div> --> `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/DeveloperCard.astro", void 0);

const $$Developers = createComponent(async ($$result, $$props, $$slots) => {
  const developers = [
    { name: "Varshith", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Len", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Karthik", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Varshith", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Len", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Karthik", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Varshith", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Len", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Karthik", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Varshith", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Len", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Karthik", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Varshith", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Len", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Karthik", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Varshith", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Len", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Karthik", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" },
    { name: "Ameesha", description: "All Hail Varshith", linkedinLink: "#", githubLink: "#" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-kjijjxup": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="content-container" data-astro-cid-kjijjxup> <div id="tsparticles" data-astro-cid-kjijjxup></div> <div class="mt-32 flex flex-col gap-8 items-center" data-astro-cid-kjijjxup> <h2 class="fade-up uppercase text-6xl text-center" data-astro-cid-kjijjxup>Meet the dev team</h2> <div class="flex flex-wrap gap-32 justify-center" data-astro-cid-kjijjxup> ${developers.map((dev, _) => renderTemplate`<div class="item" data-astro-cid-kjijjxup> ${renderComponent($$result2, "DeveloperCard", $$DeveloperCard, { "name": dev.name, "description": dev.description, "linkedinLink": dev.linkedinLink, "githubLink": dev.githubLink, "data-astro-cid-kjijjxup": true })} </div>`)} </div> </div> </main> ` })}  `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/developers.astro", void 0);

const $$file = "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/pages/developers.astro";
const $$url = "/developers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Developers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
