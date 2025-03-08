/* empty css                                        */
import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CYd4vrw1.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$SeoDataAnalysis = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "SEO Data Analysis", "meta_title": "SEO Data Analysis Tool: Unlock Insights from Google Search Console", "description": "Transform your Google Search Console data into actionable SEO insights. Analyze top queries, identify opportunities, and optimize your website's performance with our free SEO Data Analysis tool.", "data-astro-cid-hjuywdof": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-4xl" data-astro-cid-hjuywdof> <h1 class="text-4xl font-bold text-center mb-8" data-astro-cid-hjuywdof>SEO Data Analysis</h1> <div class="mb-8" data-astro-cid-hjuywdof> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-hjuywdof>Upload Your Data</h2> <form id="uploadForm" class="space-y-4" data-astro-cid-hjuywdof> <div data-astro-cid-hjuywdof> <label for="fileUpload" class="block text-sm font-medium text-gray-700" data-astro-cid-hjuywdof>
Choose your Google Search Console export zip file
</label> <input type="file" id="fileUpload" name="file" accept=".zip" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required data-astro-cid-hjuywdof> </div> <button type="submit" class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out" data-astro-cid-hjuywdof>
Analyze Data
</button> </form> </div> <div id="loadingIndicator" class="hidden mt-4" data-astro-cid-hjuywdof> <p class="text-center text-indigo-600" data-astro-cid-hjuywdof>
Processing your file... Please wait.
</p> </div> <div id="analysisResults" class="space-y-12 hidden mb-4" data-astro-cid-hjuywdof> <!-- Results will be inserted here --> </div> <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg mb-10" data-astro-cid-hjuywdof> <h2 class="text-2xl font-semibold mb-4 text-indigo-700" data-astro-cid-hjuywdof>
Unlock the Power of Your SEO Data
</h2> <p class="text-gray-700 mb-4" data-astro-cid-hjuywdof>
Welcome to our advanced SEO Data Analysis tool! This powerful utility
        helps you dive deep into your Google Search Console data, uncovering
        valuable insights that can supercharge your SEO strategy.
</p> <p class="text-gray-700 mb-4" data-astro-cid-hjuywdof>
Simply upload your Google Search Console export zip file, and our tool
        will:
</p> <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2" data-astro-cid-hjuywdof> <li data-astro-cid-hjuywdof>Identify your top-performing queries and pages</li> <li data-astro-cid-hjuywdof>Highlight keyword opportunities and quick wins</li> <li data-astro-cid-hjuywdof>Analyze country-specific performance</li> <li data-astro-cid-hjuywdof>Estimate traffic potential for your keywords</li> <li data-astro-cid-hjuywdof>Pinpoint pages that need optimization</li> </ul> <p class="text-gray-700 font-semibold" data-astro-cid-hjuywdof>
Transform raw data into actionable insights and take your SEO efforts to
        the next level!
</p> </div> </main> ` })}  ${renderScript($$result, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/seo-data-analysis.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/seo-data-analysis.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/seo-data-analysis.astro";
const $$url = "/tools/seo-data-analysis/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SeoDataAnalysis,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
