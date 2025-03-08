/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Icon, h as humanize } from '../chunks/Base_CYd4vrw1.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_nf241iwR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tags = await getTaxonomy("posts", "tags");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tags" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">Tags</h1> <ul class="space-x-4"> ${tags.map((tag) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/tags/${tag}/`, "href")} class="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:pound", "class": "mr-1 text-primary group-hover:text-white transition" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${humanize(tag || "")}` })} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tags/index.astro";
const $$url = "/tags/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
