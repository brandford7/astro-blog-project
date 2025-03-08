/* empty css                                     */
import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, a as renderTemplate, d as addAttribute, e as renderTransition, F as Fragment } from '../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { m as markdownify, a as $$Icon, h as humanize, b as slugify, g as getSinglePage, $ as $$Base } from '../chunks/Base_CYd4vrw1.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_LOXj4B9o.mjs';
import { c as config } from '../chunks/_astro_content_DLSEDk1O.mjs';
import { d as dateFormat } from '../chunks/dateFormat_CgTi0D_H.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro$7 = createAstro("https://www.codetidehub.com");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { title } = data.data;
  const { Content } = await data.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/Default.astro", void 0);

const $$Astro$6 = createAstro("https://www.codetidehub.com");
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Share;
  const { base_url } = config.site;
  const { title, description, slug, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${className}`, "class")}> <li class="inline-block"> <a aria-label="facebook share button"${addAttribute(`https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}/`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:facebook" })} </a> </li> <li class="inline-block"> <a aria-label="twitter share button"${addAttribute(`https://twitter.com/intent/tweet/?text=${title}&amp;url=${base_url}/${slug}/`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:twitter" })} </a> </li> <li class="inline-block"> <a aria-label="linkedin share button"${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}/&title=${title}&summary=${description}&source=${base_url}`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:linkedin" })} </a> </li> <li class="inline-block"> <a aria-label="pinterest share button"${addAttribute(`https://pinterest.com/pin/create/button/?url=${base_url}/${slug}/&media=&description=${description}`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:pinterest" })} </a> </li> </ul>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/Share.astro", void 0);

const $$Astro$5 = createAstro("https://www.codetidehub.com");
const $$SimilarPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SimilarPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> ${posts.map((post, index) => renderTemplate`<div${addAttribute(`bg-white shadow-sm rounded-lg overflow-hidden ${index === 2 ? "hidden lg:block" : ""}`, "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="block hover:text-primary overflow-hidden aspect-w-16 aspect-h-9"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full object-cover transition duration-300 hover:scale-105", "src": post.data.image, "alt": post.data.title, "width": 640, "height": 360, "data-astro-transition-scope": renderTransition($$result, "brkg724a", "", `image-${post.slug}`) })} </a>`} <div class="p-4"> <h3 class="text-lg font-semibold mb-2"${addAttribute(renderTransition($$result, "sf4vy37e", "", `title-${post.slug}`), "data-astro-transition-scope")}> <a${addAttribute(`/${post.slug}/`, "href")} class="hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> <ul class="text-sm text-gray-600 space-y-1"> <li class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:calendar-edit", "class": "mr-1 h-4 w-4 flex-shrink-0" })} <span>${dateFormat(post.data.date)}</span> </li> <li class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:folder", "class": "mr-1 h-4 w-4 flex-shrink-0" })} ${post.data.categories.map((category, i) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}/`, "href")} class="hover:text-primary"> ${humanize(category)} ${i !== post.data.categories.length - 1 && ", "} </a>`)} </li> ${post.data.tags && renderTemplate`<li class="flex items-center flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:pound", "class": "mr-1 h-4 w-4 flex-shrink-0" })} ${post.data.tags.map((tag, i) => renderTemplate`<a${addAttribute(`/tags/${slugify(tag)}/`, "href")} class="mr-2 hover:text-primary"> ${humanize(tag)} </a>`)} </li>`} </ul> </div> </div>`)} </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/SimilarPosts.astro", "self");

const $$Astro$4 = createAstro("https://www.codetidehub.com");
const $$TOCHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TOCHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute("#" + heading.slug, "href")}> ${heading.text} </a> ${heading.subheadings.length > 0 && renderTemplate`<ul class="pl-5"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/table-of-contents/TOCHeading.astro", void 0);

const $$Astro$3 = createAstro("https://www.codetidehub.com");
const $$PostHeadings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostHeadings;
  function buildToc(headings2) {
    const toc = [];
    const parentHeadings = /* @__PURE__ */ new Map();
    headings2.filter((h) => h.depth <= 3).forEach((h) => {
      const heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      if (heading.depth === 2) {
        toc.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc;
  }
  const { headings } = Astro2.props;
  const tableOfContents = buildToc(headings);
  return renderTemplate`${maybeRenderHead()}<ul class="text-sm [&_li]:pt-2 list-disc underline underline-offset-4 decoration-black/30"> ${tableOfContents.map((heading) => renderTemplate`<li class=" hover:text-blue-500"> <a${addAttribute("#" + heading.slug, "href")}>${heading.text}</a> ${heading.subheadings.length > 0 && renderTemplate`<ul class="pl-5 list-disc "> ${heading.subheadings.map((heading2) => renderTemplate`${renderComponent($$result, "TOCHeading", $$TOCHeading, { "heading": heading2 })}`)} </ul>`} </li>`)} </ul>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/table-of-contents/PostHeadings.astro", void 0);

const $$Astro$2 = createAstro("https://www.codetidehub.com");
const $$RightSimilarPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RightSimilarPosts;
  const { posts, limit = 3 } = Astro2.props;
  const trimTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };
  return renderTemplate`${maybeRenderHead()}<div class="hidden lg:block fixed right-0 top-1/4 w-64 bg-white shadow-md rounded-l-lg overflow-hidden"> ${posts.slice(0, limit).map((post) => renderTemplate`<div class="flex items-center p-2 border-b last:border-b-0"> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="w-1/3 flex-shrink-0 overflow-hidden rounded-lg"> <div class="aspect-w-16 aspect-h-9"> ${renderComponent($$result, "Image", $$Image, { "class": "object-cover w-full h-full transition duration-300 hover:scale-105 rounded-lg", "src": post.data.image, "alt": post.data.title, "width": 100, "height": 56, "data-astro-transition-scope": renderTransition($$result, "7xhv4uoh", "", `image-${post.slug}`) })} </div> </a>`} <div class="w-2/3 pl-2"> <h3 class="text-xs font-medium"${addAttribute(renderTransition($$result, "pfmwx6rl", "", `title-${post.slug}`), "data-astro-transition-scope")}> <a${addAttribute(`/${post.slug}/`, "href")} class="hover:text-primary transition duration-300"> ${trimTitle(post.data.title, 50)} </a> </h3> </div> </div>`)} </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/RightSimilarPosts.astro", "self");

const $$Astro$1 = createAstro("https://www.codetidehub.com");
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const allAuthors = await getSinglePage("authors");
  const allPosts = await getSinglePage("posts");
  const { post } = Astro2.props;
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const getSimilarPosts = (currentPost, allPosts2, limit) => {
    const currentTags = currentPost.data.tags || [];
    const postsWithSimilarTags = allPosts2.filter(
      (p) => p.slug !== currentPost.slug && // Exclude current post
      p.data.tags?.some((tag) => currentTags.includes(tag))
    );
    const shuffledPosts = shuffleArray([...postsWithSimilarTags]);
    if (shuffledPosts.length < limit) {
      const remainingPosts = allPosts2.filter(
        (p) => p.slug !== currentPost.slug && !shuffledPosts.includes(p)
      );
      shuffledPosts.push(...shuffleArray(remainingPosts));
    }
    return shuffledPosts.slice(0, limit);
  };
  const similarPosts = getSimilarPosts(
    post,
    allPosts,
    3
  );
  const rightsimilarPosts = getSimilarPosts(
    post,
    allPosts,
    4
  );
  const { Content, headings } = await post.render();
  const {
    title,
    description,
    authors,
    categories,
    image,
    date,
    tags,
    canonical
  } = post.data;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <article class="row justify-center"> <div class="md:col-10 text-center"> <h1 class="h2"${addAttribute(renderTransition($$result, "umhwh4go", "", `title-${post.slug}`), "data-astro-transition-scope")}>${unescapeHTML(markdownify(title))}</h1> <ul class="mt-4 flex flex-wrap items-center justify-center text-text"> <li class="mx-3"> ${allAuthors.filter(
    (author) => authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author, i) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.slug)}/`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": typeof author.data.image === "string" ? author.data.image : author.data.image.src, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mx-3 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:calendar-edit", "class": "mr-1 h-5 w-5 text-gray-600" })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${date && dateFormat(date)}` })} </li> <li class="mx-3 flex items-center flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:folder", "class": "mr-1 h-[18px] w-[18px] text-gray-600" })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <ul> ${categories.map((category, i) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}/`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i !== post.data.categories.length - 1 && ","} </a> </li>`)} </ul> ` })} </li> </ul> </div> <div class="col-12 mt-8 mb-2"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "height": 500, "width": 1e3, "alt": title, "class": "rounded-lg", "data-astro-transition-scope": renderTransition($$result, "kahsai54", "", `image-${post.slug}`) })}`} </div> <div class="md:col-10"> <div class="content mb-16 text-left"> <aside class="not-prose p-5 rounded-sm"> <p class="font-bold">Table of contents:</p> ${renderComponent($$result, "PostHeadings", $$PostHeadings, { "headings": headings })} </aside> ${renderComponent($$result, "Content", Content, {})} </div> <div class="flex flex-wrap items-center justify-between"> <ul class="mr-4 mb-4 space-x-3"> ${tags.map((tag) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/tags/${slugify(tag)}/`, "href")} class="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark text-sm hover:text-primary transition duration-300">
#${humanize(tag)} </a> </li>`)} </ul> ${renderComponent($$result, "Share", $$Share, { "className": "social-share mb-4", "title": title, "description": description, "slug": post.slug })} </div> </div> </article> </div> </section> ${renderComponent($$result, "RightSimilarPosts", $$RightSimilarPosts, { "posts": rightsimilarPosts, "limit": 4 })} <!-- similar posts --> ${similarPosts.length > 0 && renderTemplate`<section class="section pt-0 not-prose"> <div class="container"> <h2 class="mb-8 text-center h3">Similar Posts</h2> ${renderComponent($$result, "SimilarPosts", $$SimilarPosts, { "posts": similarPosts })} </div> </section>`}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/PostSingle.astro", "self");

const $$Astro = createAstro("https://www.codetidehub.com");
async function getStaticPaths() {
  const posts = await getSinglePage("posts");
  const pages = await getSinglePage("pages");
  const allPages = [...pages, ...posts];
  const paths = allPages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const getPosts = await getSinglePage("posts");
  const postsSlug = getPosts.map((item) => item.slug);
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const ogImage = typeof image === "string" ? image : typeof image === "object" ? image.src : image;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": ogImage }, { "default": ($$result2) => renderTemplate`${postsSlug.includes(page.slug) ? renderTemplate`${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": page })}` : renderTemplate`${renderComponent($$result2, "Default", $$Default, { "data": page })}`}` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/[regular].astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/[regular].astro";
const $$url = "/[regular]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
