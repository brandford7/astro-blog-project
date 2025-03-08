/* empty css                                     */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_CYd4vrw1.mjs';
import { g as getEntryBySlug } from '../chunks/_astro_content_DLSEDk1O.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.codetidehub.com");
const $$ToolCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToolCard;
  const { url, title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="block group"> <div class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 transform group-hover:shadow-xl group-hover:-translate-y-1"> <div class="flex items-center mb-4"> <div class="bg-indigo-100 rounded-full p-3 mr-4"> <i${addAttribute(`fas ${icon} text-2xl text-indigo-600`, "class")}></i> </div> <h3 class="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300"> ${title} </h3> </div> <p class="text-gray-600"> ${description} </p> </div> </a>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/aicomponents/ToolCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let entry;
  let title = "AI Tools";
  let description = "Explore our collection of AI-powered tools to enhance your content creation process";
  let meta_title = "AI Tools | Your Site Name";
  let image = "/images/ai-tools-banner.jpg";
  try {
    entry = await getEntryBySlug("pages", "tools");
    if (entry) {
      ({ title, description, meta_title, image } = entry.data);
    }
  } catch (error) {
    console.error("Error loading tools page data:", error);
  }
  const tools = [
    {
      title: "Title Generator",
      description: "Create engaging, platform-specific titles for your content using AI.",
      url: "/tools/titlles-generator/",
      icon: "fa-heading"
    },
    {
      title: "Thumbnail Ideas",
      description: "Generate eye-catching YouTube thumbnail concepts with AI assistance.",
      url: "/tools/thumbnail-ideas/",
      icon: "fa-image"
    },
    {
      title: "YouTube Script Generator",
      description: "Craft compelling YouTube video scripts with AI-powered suggestions.",
      url: "/tools/youtube-script-generator/",
      icon: "fa-video"
    },
    {
      title: "SEO Data Analysis",
      description: "Analyze your SEO data and get actionable insights to improve your website.",
      url: "/tools/seo-data-analysis/",
      icon: "fa-chart-line"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": meta_title || title, "description": description, "image": image, "data-astro-cid-qkptn22r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-qkptn22r> <div class="container" data-astro-cid-qkptn22r> <h1 class="h2 page-heading mb-10 text-center" data-astro-cid-qkptn22r>${unescapeHTML(markdownify(title))}</h1> <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-astro-cid-qkptn22r> ${description} </p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" data-astro-cid-qkptn22r> ${tools.map((tool) => renderTemplate`${renderComponent($$result2, "ToolCard", $$ToolCard, { "url": tool.url, "title": tool.title, "description": tool.description, "icon": tool.icon, "data-astro-cid-qkptn22r": true })}`)} </div> </div> </section> ` })} `;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/index.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/index.astro";
const $$url = "/tools/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
