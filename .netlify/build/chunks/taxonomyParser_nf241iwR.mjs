import { c as createComponent, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSinglePage, b as slugify } from './Base_CYd4vrw1.mjs';

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/lib/taxonomyParser.astro", void 0);

export { getTaxonomy as g };
