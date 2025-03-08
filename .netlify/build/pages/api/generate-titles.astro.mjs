/* empty css                                        */
import { b as createAstro, c as createComponent } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.codetidehub.com");
const prerender = false;
const $$GenerateTitles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GenerateTitles;
  {
    throw new Error("Missing required environment variables");
  }
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/api/generate-titles.astro", void 0);
const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/api/generate-titles.astro";
const $$url = "/api/generate-titles/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GenerateTitles,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
