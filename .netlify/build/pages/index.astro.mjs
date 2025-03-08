/* empty css                                     */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { a as $$Icon, g as getSinglePage, s as sortByDate, b as slugify, $ as $$Base } from '../chunks/Base_CYd4vrw1.mjs';
import { $ as $$Posts } from '../chunks/Posts_yXvW07sO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_LOXj4B9o.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="py-12 md:py-20"> <div class="text-center pb-10 md:pb-16"> <h1 class="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4 font-heading">
Welcome to
<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 sm:whitespace-nowrap">Bit Doze</span> </h1> <div class="max-w-3xl mx-auto"> <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
Join the community to find out more about, VPS, blogging, CMS.
</p> </div> <div class="flex justify-center gap-4"> <a href="https://twitter.com/bitdoze" class="group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-blue-500 transition-all duration-300 hover:scale-110" aria-label="Twitter"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:twitter", "class": "w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" })} </a> <a href="https://bsky.app/profile/bitdoze.com" class="group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-sky-500 transition-all duration-300 hover:scale-110" aria-label="Bluesky"> <svg class="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 512 512" fill="currentColor"> <path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"></path> </svg> </a> <a href="https://www.youtube.com/channel/UCGsUtKhXsRrMvYAWm8q0bCg" class="group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-red-500 transition-all duration-300 hover:scale-110" aria-label="YouTube"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:youtube", "class": "w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" })} </a> <a href="https://github.com/bitdoze" class="group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-800 transition-all duration-300 hover:scale-110" aria-label="GitHub"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:github", "class": "w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" })} </a> </div> </div> </div> </div> </section>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/widgets/Hero.astro", void 0);

const $$Tools = createComponent(($$result, $$props, $$slots) => {
  const tools = [
    {
      title: "Title Generator",
      description: "Create engaging, platform-specific titles for your content using AI.",
      url: "/tools/titlles-generator/",
      icon: "mdi:format-title"
    },
    {
      title: "Thumbnail Ideas",
      description: "Generate eye-catching YouTube thumbnail concepts with AI assistance.",
      url: "/tools/thumbnail-ideas/",
      icon: "mdi:image-outline"
    },
    {
      title: "YouTube Script Generator",
      description: "Craft compelling YouTube video scripts with AI-powered suggestions.",
      url: "/tools/youtube-script-generator/",
      icon: "mdi:script-text-outline"
    },
    {
      title: "SEO Data Analysis",
      description: "Analyze your SEO data and get actionable insights.",
      url: "/tools/seo-data-analysis/",
      icon: "mdi:chart-line"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-gray-50"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="text-center mb-6"> <h2 class="text-2xl font-bold text-gray-900 mb-2">AI Tools</h2> <p class="text-sm text-gray-600">Enhance your content creation with our AI-powered tools</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"> ${tools.map((tool) => renderTemplate`<a${addAttribute(tool.url, "href")} class="group"> <div class="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1"> <div class="flex items-center mb-2"> <div class="p-2 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": tool.icon, "class": "w-4 h-4 text-indigo-600" })} </div> <h3 class="ml-2 text-sm font-semibold text-gray-900">${tool.title}</h3> </div> <p class="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2"> ${tool.description} </p> </div> </a>`)} </div> </div> </section>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/widgets/Tools.astro", void 0);

const $$TagPosts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getSinglePage("posts");
  const sortedPosts = sortByDate(posts);
  const tags = ["docker", "astro", "carrd"];
  const postsPerTag = 5;
  const tagPosts = tags.map((tag) => ({
    tag,
    posts: sortedPosts.filter((post) => post.data.tags?.map((t) => slugify(t)).includes(tag)).slice(0, postsPerTag)
  }));
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-gray-50"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Popular Topics</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${tagPosts.map(({ tag, posts: posts2 }) => renderTemplate`<div class="bg-white p-4 rounded-xl shadow-sm"> <h3 class="text-lg font-bold mb-3 text-gray-900 capitalize">${tag}</h3> <div class="divide-y divide-gray-100"> ${posts2.map((post, index) => renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="flex items-center gap-3 group hover:bg-gray-50 rounded-lg transition-colors duration-300 py-3 first:pt-0 last:pb-0"> <div class="relative flex-shrink-0 w-20"> <div class="aspect-[16/9]"> ${post.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 80, "height": 45, "class": "object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300" })}`} </div> </div> <div class="flex-grow min-w-0"> <h4 class="text-xs font-medium text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-2"> ${post.data.title} </h4> </div> </a>`)} </div> <div class="mt-3"> <a${addAttribute(`/tags/${tag}/`, "href")} class="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-300">
View all ${tag} posts
<svg class="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 12h14"></path> <path d="M12 5l7 7-7 7"></path> </svg> </a> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/widgets/TagPosts.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getSinglePage("posts");
  const sortedPosts = sortByDate(posts);
  const currentPosts = sortedPosts.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Tools", $$Tools, {})} ${maybeRenderHead()}<section class="section"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-12">Latest Articles</h2> ${renderComponent($$result2, "Posts", $$Posts, { "posts": currentPosts, "className": "row", "fluid": false })} </div> </section> ${renderComponent($$result2, "TagPosts", $$TagPosts, {})} ` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/index.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
