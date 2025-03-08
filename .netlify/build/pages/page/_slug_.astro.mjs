/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { c as config } from '../../chunks/_astro_content_DLSEDk1O.mjs';
import { g as getSinglePage, s as sortByDate, $ as $$Base } from '../../chunks/Base_CYd4vrw1.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_BWlGNlGC.mjs';
import { $ as $$Posts } from '../../chunks/Posts_yXvW07sO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.codetidehub.com");
async function getStaticPaths() {
  const posts = await getSinglePage("posts");
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await getSinglePage("posts");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> ${renderComponent($$result2, "Posts", $$Posts, { "className": "mb-16", "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/page/[slug].astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/page/[slug].astro";
const $$url = "/page/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
