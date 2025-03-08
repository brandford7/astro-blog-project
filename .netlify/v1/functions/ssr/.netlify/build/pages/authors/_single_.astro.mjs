/* empty css                                        */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML, e as renderTransition, F as Fragment } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_LOXj4B9o.mjs';
import { a as $$Icon, m as markdownify, g as getSinglePage, s as sortByDate, b as slugify, $ as $$Base, h as humanize } from '../../chunks/Base_CYd4vrw1.mjs';
import { d as dateFormat } from '../../chunks/dateFormat_CgTi0D_H.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.codetidehub.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Social;
  const { source, className } = Astro2.props;
  const {
    facebook,
    twitter,
    mastodon,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website
  } = source;
  const socialIcons = [
    { name: "facebook", url: facebook, icon: "mdi:facebook" },
    { name: "twitter", url: twitter, icon: "mdi:twitter" },
    { name: "mastodon", url: mastodon, icon: "mdi:mastodon" },
    { name: "instagram", url: instagram, icon: "mdi:instagram" },
    { name: "youtube", url: youtube, icon: "mdi:youtube" },
    { name: "linkedin", url: linkedin, icon: "mdi:linkedin" },
    { name: "github", url: github, icon: "mdi:github" },
    { name: "gitlab", url: gitlab, icon: "mdi:gitlab" },
    { name: "discord", url: discord, icon: "mdi:discord" },
    { name: "slack", url: slack, icon: "mdi:slack" },
    { name: "medium", url: medium, icon: "mdi:medium" },
    { name: "codepen", url: codepen, icon: "mdi:codepen" },
    { name: "bitbucket", url: bitbucket, icon: "mdi:bitbucket" },
    { name: "dribbble", url: dribbble, icon: "mdi:dribbble" },
    { name: "behance", url: behance, icon: "mdi:behance" },
    { name: "pinterest", url: pinterest, icon: "mdi:pinterest" },
    { name: "soundcloud", url: soundcloud, icon: "mdi:soundcloud" },
    { name: "tumblr", url: tumblr, icon: "mdi:tumblr" },
    { name: "reddit", url: reddit, icon: "mdi:reddit" },
    { name: "vk", url: vk, icon: "mdi:vk" },
    { name: "whatsapp", url: whatsapp, icon: "mdi:whatsapp" },
    { name: "snapchat", url: snapchat, icon: "mdi:snapchat" },
    { name: "vimeo", url: vimeo, icon: "mdi:vimeo" },
    { name: "tiktok", url: tiktok, icon: "mdi:tiktok" },
    { name: "foursquare", url: foursquare, icon: "mdi:foursquare" },
    { name: "skype", url: skype, icon: "mdi:skype" },
    { name: "website", url: website, icon: "mdi:web" },
    { name: "rss", url: rss, icon: "mdi:rss" },
    { name: "email", url: email ? `mailto:${email}` : null, icon: "mdi:email" },
    { name: "phone", url: phone ? `tel:${phone}` : null, icon: "mdi:phone" },
    { name: "address", url: address, icon: "mdi:map-marker" }
  ];
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(className, "class")}> ${socialIcons.map(
    (social) => social.url && renderTemplate`<li class="inline-block"> <a${addAttribute(social.name, "aria-label")}${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "Icon", $$Icon, { "name": social.icon })} </a> </li>`
  )} </ul>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/Social.astro", void 0);

const $$Astro$1 = createAstro("https://www.codetidehub.com");
const $$AuthorSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorSingle;
  const { author } = Astro2.props;
  const { title, image, social } = author.data;
  const { Content } = await author.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="mb-4 text-center md:px-24"> ${image && renderTemplate`<div class="mb-8"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "mx-auto rounded-lg", "height": 150, "width": 150, "alt": title })} </div>`} <h1 class="page-heading h2 mb-8">${unescapeHTML(markdownify(title))}</h1> ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons-simple" })} <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </section>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/AuthorSingle.astro", void 0);

const $$Astro = createAstro("https://www.codetidehub.com");
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const paths = authors.map((author) => ({
    params: {
      single: author.slug
    },
    props: { author }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { author } = Astro2.props;
  const { title, meta_title, description, image } = author.data;
  const posts = await getSinglePage("posts");
  const sortPostsByDate = sortByDate(posts);
  const currentPosts = sortPostsByDate.filter((post) => {
    return post.data.authors.map((author2) => slugify(author2)).includes(slugify(title));
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthorSingle", $$AuthorSingle, { "author": author })} ${currentPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h3">Recent Posts</h2> <div${addAttribute(`row gy-4 ${currentPosts.length < 3 ? "justify-center" : ""}`, "class")}> ${currentPosts.map((post, i) => renderTemplate`<div class="col-12 sm:col-6 lg:col-4"> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result2, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230, "data-astro-transition-scope": renderTransition($$result2, "jpggk7av", "", `image-${post.slug}`) })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:calendar-edit", "class": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${dateFormat(post.data.date)}` })} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:folder", "class": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <ul> ${post.data.categories.map(
    (category, i2) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}/`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i2 !== post.data.categories.length - 1 && ","} </a> </li>`
  )} </ul> ` })} </li> </ul> <h3 class="h5"${addAttribute(renderTransition($$result2, "ffekrutg", "", `title-${post.slug}`), "data-astro-transition-scope")}> <a${addAttribute(`/${post.slug}/`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> </div>`)} </div> </div> </section>`}` })}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/authors/[single].astro", "self");

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/authors/[single].astro";
const $$url = "/authors/[single]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
