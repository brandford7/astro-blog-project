import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-03-17T05:00:00.000Z",
  "title": "Plausible.io - Google Analytics Lightweight Alternative",
  "description": "Plausible.io self-hosted Google analytics lightweight alternative",
  "image": "../../assets/images/23/03/plausible_blog.jpeg",
  "categories": ["tools"],
  "authors": ["Dragos"],
  "tags": ["free-tools", "self-hosted"],
  "canonical": "https://www.bitdoze.com/plausible-tool/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "-plausible-overview",
    "text": "🔭 Plausible Overview"
  }, {
    "depth": 2,
    "slug": "-plausible-video-overview",
    "text": "🎥 Plausible Video Overview"
  }, {
    "depth": 2,
    "slug": "-why-use-plausible",
    "text": "❔ Why Use Plausible"
  }, {
    "depth": 2,
    "slug": "-plausible-features",
    "text": "📋 Plausible Features"
  }, {
    "depth": 2,
    "slug": "️-pricing",
    "text": "🏷️ Pricing"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "-plausible-overview",
      children: "🔭 Plausible Overview"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://plausible.io/",
        children: "Plausible.io"
      }), " is an open-source analytics tool that provides website owners with detailed metrics about their visitors. It’s designed to be simple, lightweight, and privacy-first; plus it offers a suite of features that make it an attractive alternative to the big players in the industry, such as Google Analytics. Plausible can be self-hosted on your own server so no one but you to have access to your traffic data."]
    }), "\n", createVNode(_components.h2, {
      id: "-plausible-video-overview",
      children: "🎥 Plausible Video Overview"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/NoBp7bqAHUI",
      label: "Plausible Analytics"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-why-use-plausible",
      children: "❔ Why Use Plausible"
    }), "\n", createVNode(_components.p, {
      children: "If you want to switch from Google Analytics to a self-hosted tool, Plausible is the analytics tool for you. Plausible can be quickly installed on your servers and start tracking your website traffic. Plausible Analytics is lightweight (< 1 KB) and will not slow down your website. Plausible puts you in control of your statistics."
    }), "\n", createVNode(_components.h2, {
      id: "-plausible-features",
      children: "📋 Plausible Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Simple analysis:"
        }), " Reports generated by Plausible are simpler and easier to understand."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Lightweight script:"
        }), " The script used by Plausible is light and has less than 1KB in size."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "No need for cookie banners or GDPR consent:"
        }), " No cookies are used and no personal data is collected."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Track events, goal conversions, campaigns:"
        }), " You can easily track different sources and events."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Self-hosted:"
        }), " Plausible can be installed on your own server."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Powerful API:"
        }), " You can integrate Plausible with your application using the provided API."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "️-pricing",
      children: "🏷️ Pricing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Free"
        }), " - if you self host it yourself"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Paid"
        }), " - from $9 for 10k in Plausible cloud"]
      }), "\n"]
    }), "\n", createVNode($$Button, {
      link: "https://plausible.io/",
      text: "Check Plausible"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/plausible-tool.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/plausible-tool.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/plausible-tool.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
