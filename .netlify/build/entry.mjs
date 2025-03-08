import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BUiozzqN.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/generate-titles.astro.mjs');
const _page4 = () => import('./pages/authors/page/_slug_.astro.mjs');
const _page5 = () => import('./pages/authors/_single_.astro.mjs');
const _page6 = () => import('./pages/authors.astro.mjs');
const _page7 = () => import('./pages/categories/_category_.astro.mjs');
const _page8 = () => import('./pages/categories.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/page/_slug_.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/search.astro.mjs');
const _page13 = () => import('./pages/tags/_tag_.astro.mjs');
const _page14 = () => import('./pages/tags.astro.mjs');
const _page15 = () => import('./pages/tools/seo-data-analysis.astro.mjs');
const _page16 = () => import('./pages/tools/thumbnail-ideas.astro.mjs');
const _page17 = () => import('./pages/tools/titlles-generator.astro.mjs');
const _page18 = () => import('./pages/tools/youtube-script-generator.astro.mjs');
const _page19 = () => import('./pages/tools.astro.mjs');
const _page20 = () => import('./pages/_regular_.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/generate-titles.astro", _page3],
    ["src/pages/authors/page/[slug].astro", _page4],
    ["src/pages/authors/[single].astro", _page5],
    ["src/pages/authors/index.astro", _page6],
    ["src/pages/categories/[category].astro", _page7],
    ["src/pages/categories/index.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/page/[slug].astro", _page10],
    ["src/pages/rss.xml.ts", _page11],
    ["src/pages/search.astro", _page12],
    ["src/pages/tags/[tag].astro", _page13],
    ["src/pages/tags/index.astro", _page14],
    ["src/pages/tools/seo-data-analysis.astro", _page15],
    ["src/pages/tools/thumbnail-ideas.astro", _page16],
    ["src/pages/tools/titlles-generator.astro", _page17],
    ["src/pages/tools/youtube-script-generator.astro", _page18],
    ["src/pages/tools/index.astro", _page19],
    ["src/pages/[regular].astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8ccf35f2-39bf-473c-857b-d35e195ebd9c"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
