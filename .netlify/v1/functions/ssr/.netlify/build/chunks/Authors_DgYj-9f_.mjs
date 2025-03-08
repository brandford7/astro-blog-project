import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_LOXj4B9o.mjs';
import { m as markdownify, a as $$Icon } from './Base_CYd4vrw1.mjs';

const $$Astro = createAstro("https://www.codetidehub.com");
const $$Authors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Authors;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row justify-center"> ${authors.map((author) => renderTemplate`<div class="col-12 mb-8 sm:col-6 md:col-4"> ${author.data.image && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 150, "width": 150, "class": "mx-auto rounded-lg" })} </div>`} <h3 class="h4 mt-8 mb-3"> <a${addAttribute(`/authors/${author.slug}/`, "href")} class="block hover:text-primary transition duration-200"> ${author.data.title} </a> </h3> <p class="mb-3">${markdownify(author.body.slice(0, 100))}</p> <a${addAttribute(`/authors/${author.slug}/`, "href")} class="inline-flex items-center text-primary transition duration-200 hover:opacity-70">
Read More ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-right-circle", "class": "inline ml-2" })} </a> </div>`)} </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/Authors.astro", void 0);

export { $$Authors as $ };
