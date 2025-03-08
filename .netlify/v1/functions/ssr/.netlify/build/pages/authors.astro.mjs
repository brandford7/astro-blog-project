/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { c as config } from '../chunks/_astro_content_DLSEDk1O.mjs';
import { $ as $$Authors } from '../chunks/Authors_DgYj-9f_.mjs';
import { g as getSinglePage, s as sortByDate, $ as $$Base, m as markdownify } from '../chunks/Base_CYd4vrw1.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_BWlGNlGC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/authors/index.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/authors/index.astro";
const $$url = "/authors/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
