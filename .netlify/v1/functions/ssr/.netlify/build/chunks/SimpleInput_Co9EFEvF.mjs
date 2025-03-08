import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.codetidehub.com");
const $$SimpleInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimpleInput;
  const { placeholder, buttonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mt-5"> <div class="absolute -inset-2 rounded-[32px] bg-gray-300/50"></div> <form id="aiForm" class="relative bg-white rounded-3xl shadow-sm p-6"> <div class="flex flex-col sm:flex-row gap-4"> <div class="flex-grow"> <input type="text" id="userInput" name="userInput" required${addAttribute(placeholder, "placeholder")} class="w-full rounded-xl bg-gray-50 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="sm:flex-shrink-0"> <button type="submit" class="w-full sm:w-auto bg-blue-600 text-white rounded-xl px-6 py-3 text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"> ${buttonText} </button> </div> </div> </form> </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/aicomponents/SimpleInput.astro", void 0);

export { $$SimpleInput as $ };
