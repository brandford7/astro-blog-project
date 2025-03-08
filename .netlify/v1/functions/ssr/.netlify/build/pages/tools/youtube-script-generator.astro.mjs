/* empty css                                        */
import { c as createComponent, a as renderTemplate, g as defineScriptVars, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CYd4vrw1.mjs';
import { $ as $$SimpleInput } from '../../chunks/SimpleInput_Co9EFEvF.mjs';
import { $ as $$OutputBox } from '../../chunks/OutputBox_vocpXU2-.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$YoutubeScriptGenerator = createComponent(async ($$result, $$props, $$slots) => {
  const systemPrompt = `You are a YouTube creator who is creating video scripts that follows:
- informative tone
- Knowledge Gap add in first 30 seconds
- Mystery
- Preview Hook
- call to action
You are creating the video scripts on the keyword asked by the user.
The format should be:

(Start with a mystery)
(Add a knowledge gap)
(Include a preview hook)
(Call to action)

After you finish with the script, please craft 12 compelling hooks. They can be in the form of a question, strong statement, story, or an interesting statistic. Try to provide 3 of each type for variety. Ensure each hook aligns with the essence of the video title.

Then, craft 5 input bias variations that highlight the effort and research put into the video's content.

Finally, think of ten open loop questions that a viewer might have in mind before clicking on the video. These questions should be based on the content implied by the video title.`;
  const userPromptTemplate = `Generate a YouTube script for a video about: {topic}.

Please structure the output as follows:

SCRIPT:
[Your generated script here]

HOOKS x12:
[Hook 1]: (Question hook)
[Hook 2]: (Strong statement hook)
[Hook 3]: (Story hook)
[Hook 4]: (Interesting statistical hook)
... (continue for all 12 hooks)

INPUT BIAS x5:
[Input Bias 1]:
[Input Bias 2]:
[Input Bias 3]:
[Input Bias 4]:
[Input Bias 5]:

OPEN LOOP QUESTIONS x10:
[Open Loop Question 1]:
[Open Loop Question 2]:
... (continue for all 10 questions)`;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n  const form = document.getElementById("aiForm");\n  const output = document.getElementById("output");\n  const loadingIndicator = document.getElementById("loadingIndicator");\n  const errorMessage = document.getElementById("errorMessage");\n  const resultList = document.getElementById("resultList");\n\n  function showOutput(content) {\n    output.classList.remove("hidden");\n    resultList.innerHTML = `\n      <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-6">\n        <h3 class="text-xl font-bold text-blue-600 mb-3">Generated Content</h3>\n        <pre class="whitespace-pre-wrap">${content}</pre>\n      </div>\n    `;\n  }\n\n  function showLoading() {\n    output.classList.remove("hidden");\n    loadingIndicator.classList.remove("hidden");\n    resultList.innerHTML = "";\n    errorMessage.classList.add("hidden");\n  }\n\n  function hideLoading() {\n    loadingIndicator.classList.add("hidden");\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.classList.remove("hidden");\n  }\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const topic = document.getElementById("userInput").value;\n    const submitButton = form.querySelector(\'button[type="submit"]\');\n\n    showLoading();\n    submitButton.disabled = true;\n\n    const promptWithValues = userPromptTemplate.replace("{topic}", topic);\n\n    try {\n      const response = await fetch("/api/generate-titles/", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          topic,\n          systemPrompt,\n          userPromptTemplate: promptWithValues,\n        }),\n      });\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n\n      const data = await response.json();\n\n      if (data.titles && data.titles.length > 0) {\n        showOutput(data.titles.join("\\n"));\n      } else if (data.error) {\n        throw new Error(data.error);\n      } else {\n        throw new Error("No content generated");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      showError(`Error: ${error.message}`);\n    } finally {\n      hideLoading();\n      submitButton.disabled = false;\n    }\n  });\n})();<\/script>'], ["", " <script>(function(){", '\n  const form = document.getElementById("aiForm");\n  const output = document.getElementById("output");\n  const loadingIndicator = document.getElementById("loadingIndicator");\n  const errorMessage = document.getElementById("errorMessage");\n  const resultList = document.getElementById("resultList");\n\n  function showOutput(content) {\n    output.classList.remove("hidden");\n    resultList.innerHTML = \\`\n      <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-6">\n        <h3 class="text-xl font-bold text-blue-600 mb-3">Generated Content</h3>\n        <pre class="whitespace-pre-wrap">\\${content}</pre>\n      </div>\n    \\`;\n  }\n\n  function showLoading() {\n    output.classList.remove("hidden");\n    loadingIndicator.classList.remove("hidden");\n    resultList.innerHTML = "";\n    errorMessage.classList.add("hidden");\n  }\n\n  function hideLoading() {\n    loadingIndicator.classList.add("hidden");\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.classList.remove("hidden");\n  }\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const topic = document.getElementById("userInput").value;\n    const submitButton = form.querySelector(\'button[type="submit"]\');\n\n    showLoading();\n    submitButton.disabled = true;\n\n    const promptWithValues = userPromptTemplate.replace("{topic}", topic);\n\n    try {\n      const response = await fetch("/api/generate-titles/", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          topic,\n          systemPrompt,\n          userPromptTemplate: promptWithValues,\n        }),\n      });\n\n      if (!response.ok) {\n        throw new Error(\\`HTTP error! status: \\${response.status}\\`);\n      }\n\n      const data = await response.json();\n\n      if (data.titles && data.titles.length > 0) {\n        showOutput(data.titles.join("\\\\n"));\n      } else if (data.error) {\n        throw new Error(data.error);\n      } else {\n        throw new Error("No content generated");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      showError(\\`Error: \\${error.message}\\`);\n    } finally {\n      hideLoading();\n      submitButton.disabled = false;\n    }\n  });\n})();<\/script>'])), renderComponent($$result, "Base", $$Base, { "title": "YouTube Script Generator Tool", "meta_title": "YouTube Script Generator Tool", "description": "YouTube Script Generator, create engaging video scripts with this AI Tool." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-3xl"> <h1 class="text-4xl font-bold text-center mb-4">
YouTube Script Generator
</h1> <p class="text-xl text-center mb-8 text-gray-600">
Transform your video topic into an engaging script with hooks and more!
</p> ${renderComponent($$result2, "SimpleInput", $$SimpleInput, { "placeholder": "Enter your YouTube video topic...", "buttonText": "Generate Script" })} ${renderComponent($$result2, "OutputBox", $$OutputBox, { "title": "Generated YouTube Script", "subtitle": "Here's your AI-generated script, hooks, and more!", "loadingText": "Crafting your engaging YouTube content..." })} <div class="mt-12 bg-blue-50 p-6 rounded-lg shadow-md"> <h2 class="text-2xl font-semibold mb-4 text-blue-700">
Tips for Effective YouTube Scripts
</h2> <ul class="list-disc pl-5 space-y-2 text-blue-800"> <li>Start with a strong hook to grab attention</li> <li>Include a knowledge gap in the first 30 seconds</li> <li>Use a preview hook to keep viewers watching</li> <li>Maintain an informative tone throughout</li> <li>End with a clear call to action</li> <li>Use open loop questions to create curiosity</li> </ul> </div> <div class="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg"> <h2 class="text-3xl font-bold text-blue-800 mb-6">
Elevate Your YouTube Content with AI-Powered Scripts
</h2> <div class="space-y-6"> <p class="text-gray-700">
Our AI YouTube Script Generator helps you create engaging and
          structured content that can significantly boost your video's
          performance. By providing a complete package including script, hooks,
          input biases, and open loop questions, we help you:
</p> <ul class="list-disc pl-8 space-y-2 text-gray-700"> <li>Save time on script writing and content planning</li> <li>Create more engaging and viewer-retaining content</li> <li>Develop multiple hooks to test and optimize</li> <li>Establish credibility with input bias statements</li> <li>Generate curiosity with open loop questions</li> </ul> <p class="text-gray-700">
Remember, a well-structured script is the foundation of a successful
          YouTube video. Use this AI-generated content as a starting point to
          create videos that capture attention, provide value, and drive
          engagement.
</p> </div> </div> </main> ` }), defineScriptVars({ systemPrompt, userPromptTemplate }));
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/youtube-script-generator.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/youtube-script-generator.astro";
const $$url = "/tools/youtube-script-generator/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$YoutubeScriptGenerator,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
