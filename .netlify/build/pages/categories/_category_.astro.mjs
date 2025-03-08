/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { g as getSinglePage, h as humanize, $ as $$Base } from '../../chunks/Base_CYd4vrw1.mjs';
import { $ as $$Posts } from '../../chunks/Posts_yXvW07sO.mjs';
import { g as getTaxonomy } from '../../chunks/taxonomyParser_nf241iwR.mjs';
import { t as taxonomyFilter } from '../../chunks/taxonomyFilter_C2NHvuSx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.codetidehub.com");
async function getStaticPaths() {
  const categories = await getTaxonomy("posts", "categories");
  return categories.map((category) => {
    return {
      params: { category }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = await getSinglePage("posts");
  const filterByCategory = taxonomyFilter(posts, "categories", category);
  const title = humanize(category || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title || "Category" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center mb-4">Showing Posts From</p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": filterByCategory, "fluid": false })} </div> </div> ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/categories/[category].astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/categories/[category].astro";
const $$url = "/categories/[category]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
