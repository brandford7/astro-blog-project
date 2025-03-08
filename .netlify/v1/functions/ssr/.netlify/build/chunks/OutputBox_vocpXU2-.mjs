import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro("https://www.codetidehub.com");
const $$OutputBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OutputBox;
  const { title, subtitle, loadingText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="output" class="mt-8 hidden" data-astro-cid-yal4xumc> <div class="relative" data-astro-cid-yal4xumc> <div class="absolute -inset-2 rounded-[32px] bg-gray-300/50" data-astro-cid-yal4xumc></div> <div class="relative rounded-3xl bg-white p-6 shadow-sm" data-astro-cid-yal4xumc> <h2 class="text-3xl font-bold mb-6 text-center text-indigo-700" data-astro-cid-yal4xumc> ${title} </h2> <p class="text-gray-600 mb-4 text-center" data-astro-cid-yal4xumc> ${subtitle} </p> <div id="loadingIndicator" class="hidden" data-astro-cid-yal4xumc> <p class="text-indigo-600 text-center animate-pulse" data-astro-cid-yal4xumc> ${loadingText} </p> </div> <div id="errorMessage" class="hidden text-red-500 text-center mb-4" data-astro-cid-yal4xumc></div> <div class="max-h-80 overflow-y-auto pr-2 space-y-3" id="resultList" data-astro-cid-yal4xumc> <!-- Results will be inserted here dynamically --> </div> </div> </div> </div> `;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/aicomponents/OutputBox.astro", void 0);

export { $$OutputBox as $ };
