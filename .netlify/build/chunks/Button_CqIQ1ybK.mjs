import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.codetidehub.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-none my-2 px-6 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> <div class="flex w-full sm:w-auto text-white"> <a class="btn text-white prose-indigo border bg-blue-200 hover:bg-blue-500 dark:bg-blue-600 font-bold sm:mb-0 w-full"${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer nofollow">${text} </a> </div> </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/widgets/Button.astro", void 0);

export { $$Button as $ };
