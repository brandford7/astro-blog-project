import { b as slugify } from './Base_CYd4vrw1.mjs';

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

export { taxonomyFilter as t };
