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
const $$ThumbnailIdeas = createComponent(async ($$result, $$props, $$slots) => {
  const systemPrompt = `You are a versatile YouTube Thumbnails generator specializing in catchy, YouTube Thumbnails. Follow these key principles and guidelines:

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

Apply these principles and guidelines to create engaging, YouTube Thumbnails.`;
  const userPromptTemplate = `Generate 5 unique thumbnail ideas for a YouTube video about: {topic}.
Each idea should follow this format:

Thumbnail Idea [number]:

Background: [Describe the background style and colors]
Main Image: [Describe the central image or graphic]
Text: [Provide the main text or headline please make it shour and engaging, use CAPS for emphasis]
Additional Elements: [Describe any icons, graphics, or additional visual elements]

Make the ideas diverse, engaging, and tailored to attract clicks on YouTube. Ensure each idea is distinct and creative.`;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n  const form = document.getElementById("aiForm");\n  const output = document.getElementById("output");\n  const loadingIndicator = document.getElementById("loadingIndicator");\n  const errorMessage = document.getElementById("errorMessage");\n  const resultList = document.getElementById("resultList");\n\n  function showOutput(ideas) {\n    output.classList.remove("hidden");\n    resultList.innerHTML = ideas\n      .map(\n        (idea, index) =>\n          `<div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-6">\n            <h3 class="text-xl font-bold text-blue-600 mb-3">Thumbnail Idea ${index + 1}</h3>\n            ${Object.entries(idea)\n              .map(([key, value]) =>\n                key !== "number"\n                  ? `<div class="mb-2">\n                <span class="font-semibold">${key}:</span> ${value}\n              </div>`\n                  : "",\n              )\n              .join("")}\n          </div>`,\n      )\n      .join("");\n  }\n\n  function showLoading() {\n    output.classList.remove("hidden");\n    loadingIndicator.classList.remove("hidden");\n    resultList.innerHTML = "";\n    errorMessage.classList.add("hidden");\n  }\n\n  function hideLoading() {\n    loadingIndicator.classList.add("hidden");\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.classList.remove("hidden");\n  }\n\n  function parseThumbnailIdeas(content) {\n    const ideas = content.split(/Thumbnail Idea \\d+:?/).slice(1);\n    return ideas.map((idea) => {\n      const parts = idea.split("\\n").filter((line) => line.trim() !== "");\n      const ideaObject = {};\n      parts.forEach((part) => {\n        const [key, ...value] = part.split(":");\n        if (key && value.length > 0) {\n          ideaObject[key.trim()] = value.join(":").trim();\n        }\n      });\n      return ideaObject;\n    });\n  }\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const topic = document.getElementById("userInput").value;\n    const submitButton = form.querySelector(\'button[type="submit"]\');\n\n    showLoading();\n    submitButton.disabled = true;\n\n    const promptWithValues = userPromptTemplate.replace("{topic}", topic);\n\n    try {\n      const response = await fetch("/api/generate-titles/", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          topic,\n          systemPrompt,\n          userPromptTemplate: promptWithValues,\n        }),\n      });\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n      }\n\n      const data = await response.json();\n\n      if (data.titles && data.titles.length > 0) {\n        const thumbnailIdeas = parseThumbnailIdeas(data.titles.join("\\n"));\n        showOutput(thumbnailIdeas);\n      } else if (data.error) {\n        throw new Error(data.error);\n      } else {\n        throw new Error("No thumbnail ideas generated");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      showError(`Error: ${error.message}`);\n    } finally {\n      hideLoading();\n      submitButton.disabled = false;\n    }\n  });\n})();<\/script>'], ["", " <script>(function(){", '\n  const form = document.getElementById("aiForm");\n  const output = document.getElementById("output");\n  const loadingIndicator = document.getElementById("loadingIndicator");\n  const errorMessage = document.getElementById("errorMessage");\n  const resultList = document.getElementById("resultList");\n\n  function showOutput(ideas) {\n    output.classList.remove("hidden");\n    resultList.innerHTML = ideas\n      .map(\n        (idea, index) =>\n          \\`<div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-6">\n            <h3 class="text-xl font-bold text-blue-600 mb-3">Thumbnail Idea \\${index + 1}</h3>\n            \\${Object.entries(idea)\n              .map(([key, value]) =>\n                key !== "number"\n                  ? \\`<div class="mb-2">\n                <span class="font-semibold">\\${key}:</span> \\${value}\n              </div>\\`\n                  : "",\n              )\n              .join("")}\n          </div>\\`,\n      )\n      .join("");\n  }\n\n  function showLoading() {\n    output.classList.remove("hidden");\n    loadingIndicator.classList.remove("hidden");\n    resultList.innerHTML = "";\n    errorMessage.classList.add("hidden");\n  }\n\n  function hideLoading() {\n    loadingIndicator.classList.add("hidden");\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.classList.remove("hidden");\n  }\n\n  function parseThumbnailIdeas(content) {\n    const ideas = content.split(/Thumbnail Idea \\\\d+:?/).slice(1);\n    return ideas.map((idea) => {\n      const parts = idea.split("\\\\n").filter((line) => line.trim() !== "");\n      const ideaObject = {};\n      parts.forEach((part) => {\n        const [key, ...value] = part.split(":");\n        if (key && value.length > 0) {\n          ideaObject[key.trim()] = value.join(":").trim();\n        }\n      });\n      return ideaObject;\n    });\n  }\n\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const topic = document.getElementById("userInput").value;\n    const submitButton = form.querySelector(\'button[type="submit"]\');\n\n    showLoading();\n    submitButton.disabled = true;\n\n    const promptWithValues = userPromptTemplate.replace("{topic}", topic);\n\n    try {\n      const response = await fetch("/api/generate-titles/", {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          topic,\n          systemPrompt,\n          userPromptTemplate: promptWithValues,\n        }),\n      });\n\n      if (!response.ok) {\n        throw new Error(\\`HTTP error! status: \\${response.status}\\`);\n      }\n\n      const data = await response.json();\n\n      if (data.titles && data.titles.length > 0) {\n        const thumbnailIdeas = parseThumbnailIdeas(data.titles.join("\\\\n"));\n        showOutput(thumbnailIdeas);\n      } else if (data.error) {\n        throw new Error(data.error);\n      } else {\n        throw new Error("No thumbnail ideas generated");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      showError(\\`Error: \\${error.message}\\`);\n    } finally {\n      hideLoading();\n      submitButton.disabled = false;\n    }\n  });\n})();<\/script>'])), renderComponent($$result, "Base", $$Base, { "title": "YouTube Thumbnail Ideas Generator Tool", "meta_title": "YouTube Thumbnail Ideas Generator Tool", "description": "YouTube Thumbnail Ideas Generator, build better YouTube Thumbnails with this AI Tool.  " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-3xl"> <h1 class="text-4xl font-bold text-center mb-4">
YouTube Thumbnail Ideas Generator
</h1> <p class="text-xl text-center mb-8 text-gray-600">
Transform your video topic into eye-catching thumbnail concepts!
</p> ${renderComponent($$result2, "SimpleInput", $$SimpleInput, { "placeholder": "Enter your YouTube video topic...", "buttonText": "Generate Thumbnail Ideas" })} ${renderComponent($$result2, "OutputBox", $$OutputBox, { "title": "Generated Thumbnail Ideas", "subtitle": "Here are your AI-generated thumbnail concepts!", "loadingText": "Crafting your eye-catching thumbnails..." })} <div class="mt-12 bg-blue-50 p-6 rounded-lg shadow-md"> <h2 class="text-2xl font-semibold mb-4 text-blue-700">
Tips for Effective YouTube Thumbnails
</h2> <ul class="list-disc pl-5 space-y-2 text-blue-800"> <li>Use bold, contrasting colors to stand out</li> <li>Include close-up faces or emotions when relevant</li> <li>Keep text large and limited to 3-4 words</li> <li>Ensure your thumbnail is clear at small sizes</li> <li>Use high-quality, relevant images</li> <li>Create a consistent style for your channel</li> </ul> </div> <div class="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg"> <h2 class="text-3xl font-bold text-blue-800 mb-6">
Elevate Your YouTube Content with AI-Powered Thumbnails
</h2> <div class="space-y-6"> <p class="text-gray-700">
Our AI Thumbnail Ideas Generator helps you create attention-grabbing
          concepts that can significantly boost your video's click-through rate.
          By providing diverse and creative thumbnail ideas, we help you:
</p> <ul class="list-disc pl-8 space-y-2 text-gray-700"> <li>Save time brainstorming thumbnail concepts</li> <li>Increase your video's visibility on YouTube</li> <li>Attract more viewers with eye-catching designs</li> <li>Experiment with different styles and approaches</li> <li>Maintain consistency while keeping your content fresh</li> </ul> <p class="text-gray-700">
Remember, a great thumbnail can be the difference between a user
          scrolling past or clicking on your video. Use these AI-generated ideas
          as a starting point to create thumbnails that capture attention and
          drive engagement.
</p> </div> </div> </main> ` }), defineScriptVars({ systemPrompt, userPromptTemplate }));
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/thumbnail-ideas.astro", void 0);

const $$file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/pages/tools/thumbnail-ideas.astro";
const $$url = "/tools/thumbnail-ideas/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThumbnailIdeas,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
