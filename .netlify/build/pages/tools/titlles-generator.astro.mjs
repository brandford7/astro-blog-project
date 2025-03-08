/* empty css                                        */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, g as defineScriptVars, r as renderComponent } from '../../chunks/astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CYd4vrw1.mjs';
import 'clsx';
import { $ as $$OutputBox } from '../../chunks/OutputBox_vocpXU2-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.codetidehub.com");
const $$InputBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InputBox;
  const { placeholder, buttonText } = Astro2.props;
  const platforms = [
    { value: "youtube", label: "YouTube" },
    { value: "tiktok", label: "TikTok" },
    { value: "twitter", label: "X (Twitter)" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "article", label: "Article" }
  ];
  const tones = [
    { value: "none", label: "No specific tone" },
    { value: "funny", label: "Funny" },
    { value: "serious", label: "Serious" },
    { value: "controversial", label: "Controversial" },
    { value: "inspirational", label: "Inspirational" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative mt-5"> <div class="absolute -inset-2 rounded-[32px] bg-gray-300/50"></div> <form id="aiForm" class="relative bg-white rounded-3xl shadow-sm p-6"> <div class="mb-4"> <label for="userInput" class="block text-sm font-medium text-gray-700 mb-1">Topic</label> <input type="text" id="userInput" name="userInput" required${addAttribute(placeholder, "placeholder")} class="w-full rounded-xl bg-gray-50 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="grid grid-cols-2 gap-4 mb-4"> <div> <label for="platform" class="block text-sm font-medium text-gray-700 mb-1">Platform</label> <select id="platform" name="platform" class="w-full rounded-xl bg-gray-50 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"> ${platforms.map((platform) => renderTemplate`<option${addAttribute(platform.value, "value")}>${platform.label}</option>`)} </select> </div> <div> <label for="tone" class="block text-sm font-medium text-gray-700 mb-1">Tone</label> <select id="tone" name="tone" class="w-full rounded-xl bg-gray-50 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"> ${tones.map((tone) => renderTemplate`<option${addAttribute(tone.value, "value")}>${tone.label}</option>`)} </select> </div> </div> <button type="submit" class="w-full bg-blue-600 text-white rounded-xl px-6 py-3 text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"> ${buttonText} </button> </form> </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/aicomponents/InputBox.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$TitllesGenerator = createComponent(async ($$result, $$props, $$slots) => {
  const systemPrompt = `You are a versatile content title generator specializing in catchy, platform-specific titles. Follow these key principles and guidelines:

Key Principles:
1. High energy and motivation
2. Direct and no-nonsense approach
3. Practical advice and actionable insights
4. Empowerment and positivity
5. Repetition for emphasis

Detailed Guidelines:
1. Use Powerful, Motivational Language
   - Start sentences with strong verbs
   - Employ imperative statements
   - Use intensifiers like "absolutely," "definitely," "100%"
2. Keep It Real and Direct
   - Cut through the fluff - get straight to the point
   - Use colloquial language and slang
   - Don't shy away from occasional profanity (if appropriate for the platform)
3. Focus on Practicality
   - Provide specific, actionable steps
   - Use real-world examples and case studies
   - Break down complex ideas into simple, doable tasks
4. Create a Sense of Urgency
   - Use phrases like "right now," "immediately," "don't wait"
   - Emphasize the cost of inaction
   - Highlight time-sensitive opportunities
5. Incorporate Personal Anecdotes (when relevant)
   - Share stories from entrepreneurial journeys
   - Use failures as teaching moments
   - Connect personal experiences to broader principles
6. Embrace Repetition
   - Repeat key phrases for emphasis
   - Use variations of the same idea to drive the point home
   - Create memorable catchphrases
7. Engage Directly with the Audience
   - Use "you" and "your" frequently
   - Ask rhetorical questions
   - Challenge the reader to take action
8. Use Contrast for Impact
   - Juxtapose old thinking with new perspectives
   - Highlight the difference between action and inaction
   - Compare short-term discomfort with long-term gains
9. Leverage Visual Structure (when applicable)
   - Use ALL CAPS for emphasis
   - Break long ideas into short, punchy phrases

Apply these principles and guidelines to create engaging, platform-appropriate titles.`;
  const userPromptTemplate = "Create 10 engaging {platform} titles for content about: {topic}. Tone: {tone}. Make them catchy and platform-appropriate. Don't include 'sure' or numbering. Apply the principles and guidelines provided in the system prompt. Please only include the titles and nothing else";
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n  const form = document.getElementById("aiForm");\n  const output = document.getElementById("output");\n  const loadingIndicator = document.getElementById("loadingIndicator");\n  const errorMessage = document.getElementById("errorMessage");\n  const resultList = document.getElementById("resultList");\n\n  function showOutput(titles) {\n    output.classList.remove("hidden");\n    resultList.innerHTML = titles\n      .map(\n        (title, index) =>\n          `<div class="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4">\n            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">\n              <p class="text-gray-800 text-base sm:text-lg mb-2 sm:mb-0 sm:mr-4 flex-grow">${title}</p>\n              <button\n                class="copy-btn w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center text-sm sm:text-base mt-2 sm:mt-0"\n                data-title="${title}"\n                onclick="window.copyToClipboard(this, ${index})"\n              >\n                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\n                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />\n                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />\n                </svg>\n                Copy\n              </button>\n            </div>\n          </div>`,\n      )\n      .join("");\n  }\n\n  function showLoading() {\n    output.classList.remove("hidden");\n    loadingIndicator.classList.remove("hidden");\n    resultList.innerHTML = "";\n    errorMessage.classList.add("hidden");\n  }\n\n  function hideLoading() {\n    loadingIndicator.classList.add("hidden");\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.classList.remove("hidden");\n  }\n\n  // Make copyToClipboard function globally accessible\n  window.copyToClipboard = function (button, index) {\n    const title = button.getAttribute("data-title");\n    navigator.clipboard\n      .writeText(title)\n      .then(() => {\n        button.innerHTML = `\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\n          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />\n          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />\n        </svg>\n        Copied!\n      `;\n        button.classList.remove("bg-blue-500", "hover:bg-blue-600");\n        button.classList.add("bg-green-500", "hover:bg-green-600");\n\n        setTimeout(() => {\n          button.innerHTML = `\n          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\n            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />\n            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />\n          </svg>\n          Copy\n        `;\n          button.classList.remove("bg-green-500", "hover:bg-green-600");\n          button.classList.add("bg-blue-500", "hover:bg-blue-600");\n        }, 2000);\n      })\n      .catch((err) => {\n        console.error("Failed to copy text: ", err);\n      });\n  };\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const topic = document.getElementById("userInput").value;\n    const platform = document.getElementById("platform").value;\n    const tone = document.getElementById("tone").value;\n    const submitButton = form.querySelector(\'button[type="submit"]\');\n\n    showLoading();\n    submitButton.disabled = true;\n\n    const promptWithValues = userPromptTemplate\n      .replace("{topic}", topic)\n      .replace("{platform}", platform)\n      .replace("{tone}", tone === "none" ? "neutral" : tone);\n\n    try {\n      const response = await fetch("/api/generate-titles/", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          topic,\n          systemPrompt,\n          userPromptTemplate: promptWithValues,\n        }),\n      });\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n\n      const data = await response.json();\n\n      if (data.titles && data.titles.length > 0) {\n        showOutput(data.titles);\n      } else if (data.error) {\n        throw new Error(data.error);\n      } else {\n        throw new Error("No titles generated");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      showError(`Error: ${error.message}`);\n    } finally {\n      hideLoading();\n      submitButton.disabled = false;\n    }\n  });\n})();<\/script>'], ["", " <script>(function(){", '\n  const form = document.getElementById("aiForm");\n  const output = document.getElementById("output");\n  const loadingIndicator = document.getElementById("loadingIndicator");\n  const errorMessage = document.getElementById("errorMessage");\n  const resultList = document.getElementById("resultList");\n\n  function showOutput(titles) {\n    output.classList.remove("hidden");\n    resultList.innerHTML = titles\n      .map(\n        (title, index) =>\n          \\`<div class="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4">\n            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">\n              <p class="text-gray-800 text-base sm:text-lg mb-2 sm:mb-0 sm:mr-4 flex-grow">\\${title}</p>\n              <button\n                class="copy-btn w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center text-sm sm:text-base mt-2 sm:mt-0"\n                data-title="\\${title}"\n                onclick="window.copyToClipboard(this, \\${index})"\n              >\n                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\n                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />\n                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />\n                </svg>\n                Copy\n              </button>\n            </div>\n          </div>\\`,\n      )\n      .join("");\n  }\n\n  function showLoading() {\n    output.classList.remove("hidden");\n    loadingIndicator.classList.remove("hidden");\n    resultList.innerHTML = "";\n    errorMessage.classList.add("hidden");\n  }\n\n  function hideLoading() {\n    loadingIndicator.classList.add("hidden");\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.classList.remove("hidden");\n  }\n\n  // Make copyToClipboard function globally accessible\n  window.copyToClipboard = function (button, index) {\n    const title = button.getAttribute("data-title");\n    navigator.clipboard\n      .writeText(title)\n      .then(() => {\n        button.innerHTML = \\`\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\n          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />\n          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />\n        </svg>\n        Copied!\n      \\`;\n        button.classList.remove("bg-blue-500", "hover:bg-blue-600");\n        button.classList.add("bg-green-500", "hover:bg-green-600");\n\n        setTimeout(() => {\n          button.innerHTML = \\`\n          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">\n            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />\n            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />\n          </svg>\n          Copy\n        \\`;\n          button.classList.remove("bg-green-500", "hover:bg-green-600");\n          button.classList.add("bg-blue-500", "hover:bg-blue-600");\n        }, 2000);\n      })\n      .catch((err) => {\n        console.error("Failed to copy text: ", err);\n      });\n  };\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const topic = document.getElementById("userInput").value;\n    const platform = document.getElementById("platform").value;\n    const tone = document.getElementById("tone").value;\n    const submitButton = form.querySelector(\'button[type="submit"]\');\n\n    showLoading();\n    submitButton.disabled = true;\n\n    const promptWithValues = userPromptTemplate\n      .replace("{topic}", topic)\n      .replace("{platform}", platform)\n      .replace("{tone}", tone === "none" ? "neutral" : tone);\n\n    try {\n      const response = await fetch("/api/generate-titles/", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          topic,\n          systemPrompt,\n          userPromptTemplate: promptWithValues,\n        }),\n      });\n\n      if (!response.ok) {\n        throw new Error(\\`HTTP error! status: \\${response.status}\\`);\n      }\n\n      const data = await response.json();\n\n      if (data.titles && data.titles.length > 0) {\n        showOutput(data.titles);\n      } else if (data.error) {\n        throw new Error(data.error);\n      } else {\n        throw new Error("No titles generated");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      showError(\\`Error: \\${error.message}\\`);\n    } finally {\n      hideLoading();\n      submitButton.disabled = false;\n    }\n  });\n})();<\/script>'])), renderComponent($$result, "Base", $$Base, { "title": "AI Title Generator", "meta_title": "AI Title Generator", "description": "Build better titles for your Youtube, TikTok, Twitter or blog articles with this Title Generator AI tool." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-3xl"> <h1 class="text-4xl font-bold text-center mb-4">AI Title Generator</h1> <p class="text-xl text-center mb-8 text-gray-600">
Transform your ideas into captivating titles for various platforms!
</p> ${renderComponent($$result2, "InputBox", $$InputBox, { "placeholder": "Enter your content topic...", "buttonText": "Generate Titles" })} ${renderComponent($$result2, "OutputBox", $$OutputBox, { "title": "Generated Titles", "subtitle": "Here are your AI-generated titles!", "loadingText": "Crafting your inspiring titles..." })} <div class="mt-12 bg-blue-50 p-6 rounded-lg shadow-md"> <h2 class="text-2xl font-semibold mb-4 text-blue-700">
Pro Tips for Engaging Titles
</h2> <ul class="list-disc pl-5 space-y-2 text-blue-800"> <li>Keep it concise and impactful</li> <li>Use power words to evoke emotion</li> <li>Include your main keyword for SEO</li> <li>Create curiosity or promise value</li> <li>Tailor your tone to your target audience</li> <li>Optimize for the chosen platform</li> </ul> </div> <!-- New informative section --> <div class="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg"> <h2 class="text-3xl font-bold text-blue-800 mb-6">
Elevate Your Content with AI-Powered Titles
</h2> <div class="space-y-6"> <div class="flex items-start"> <svg class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> <p class="text-gray-700">
Our AI Title Generator harnesses the power of advanced language
            models to create attention-grabbing, platform-specific titles that
            resonate with your audience.
</p> </div> <div class="flex items-start"> <svg class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-gray-700">
Whether you're crafting content for YouTube, TikTok, Twitter,
            LinkedIn, or articles, our tool adapts to generate titles that suit
            each platform's unique style and audience expectations.
</p> </div> <div class="flex items-start"> <svg class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg> <p class="text-gray-700">
Our AI generates a variety of title types, including:
</p> </div> <ul class="list-disc pl-16 space-y-2 text-gray-700"> <li>Curiosity-piquing questions</li> <li>Bold statements that challenge conventional wisdom</li> <li>Listicles that promise valuable insights</li> <li>How-to titles that offer practical solutions</li> <li>
Emotional hooks that tap into your audience's desires and pain
            points
</li> </ul> <div class="flex items-start mt-6"> <svg class="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> <p class="text-gray-700">
By using our AI Title Generator, you'll save time brainstorming,
            increase your content's click-through rates, and ensure your titles
            are optimized for engagement across different platforms.
</p> </div> </div> </div> </main> ` }), defineScriptVars({ systemPrompt, userPromptTemplate }));
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/titlles-generator.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/titlles-generator.astro";
const $$url = "/tools/titlles-generator/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TitllesGenerator,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
