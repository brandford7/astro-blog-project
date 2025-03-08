import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, e as renderTransition, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_LOXj4B9o.mjs';
import { g as getSinglePage, b as slugify, a as $$Icon, h as humanize } from './Base_CYd4vrw1.mjs';
import { d as dateFormat } from './dateFormat_CgTi0D_H.mjs';
/* empty css                             */

const $$Astro = createAstro("https://www.codetidehub.com");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const authors = await getSinglePage("authors");
  const { className, posts, fluid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`row gy-5 gx-4 ${className}`, "class")}> ${posts.map((post, i) => renderTemplate`<div class="col-12 sm:col-6"> <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col"> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="block aspect-video overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "object-cover w-full h-full transform hover:scale-105 transition duration-500", "src": post.data.image, "alt": post.data.title, "width": i === 0 ? 925 : 445, "height": i === 0 ? 475 : 230, "data-astro-transition-scope": renderTransition($$result, "rsmugnmr", "", `image-${post.slug}`) })} </a>`} <div class="p-6 flex flex-col flex-grow"> <ul class="flex flex-wrap gap-4 items-center text-sm text-gray-600 mb-4"> <li> ${authors.filter(
    (author) => post.data.authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.data.title)}/`, "href")} class="flex items-center hover:text-primary gap-2 font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 32, "width": 32, "class": "rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="flex items-center gap-1 font-medium"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:calendar-edit", "class": "h-4 w-4" })} <span>${dateFormat(post.data.date)}</span> </li> </ul> <h3 class="text-xl font-bold mb-3 flex-grow"> <a${addAttribute(`/${post.slug}/`, "href")} class="hover:text-primary transition duration-300"${addAttribute(renderTransition($$result, "y4zni3a7", "", `title-${post.slug}`), "data-astro-transition-scope")}> ${post.data.title} </a> </h3> <div class="flex flex-wrap gap-2 mt-auto"> ${post.data.categories.map((category, i2) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}/`, "href")} class="inline-block px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition duration-300"> ${humanize(category)} </a>`)} </div> </div> </article> </div>`)} </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/Posts.astro", "self");

export { $$Posts as $ };
