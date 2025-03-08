import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Cn2uIOZN.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.codetidehub.com");
const $$YouTubeEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$YouTubeEmbed;
  const { url, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="aspect-video"> <iframe class="w-full h-full" loading="lazy"${addAttribute(url, "src")}${addAttribute(label, "title")} frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe> </div>`;
}, "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/layouts/components/widgets/YouTubeEmbed.astro", void 0);

export { $$YouTubeEmbed as $ };
