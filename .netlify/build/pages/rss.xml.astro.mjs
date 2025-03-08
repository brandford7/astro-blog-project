import rss from '@astrojs/rss';
import { a as getCollection, c as config } from '../chunks/_astro_content_DLSEDk1O.mjs';
export { renderers } from '../renderers.mjs';

const GET = async (context) => {
  const posts = await getCollection("posts", ({ data }) => {
    return data.draft !== true && !!data.date;
  });
  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site ?? config.site.base_url,
    items: posts.map((post) => ({
      stylesheet: "/rss/styles.xsl",
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.categories,
      link: "/" + post.slug
    }))
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
