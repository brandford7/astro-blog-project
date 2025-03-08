/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Icon, h as humanize } from '../chunks/Base_CYd4vrw1.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_nf241iwR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await getTaxonomy("posts", "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Categories" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">Categories</h1> <ul class="space-x-4"> ${categories.map((category) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${category}/`, "href")} class="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:folder", "class": "mr-1 text-primary group-hover:text-white transition h-6 w-6 scale-75" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${humanize(category || "")}` })} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/categories/index.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/categories/index.astro";
const $$url = "/categories/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
