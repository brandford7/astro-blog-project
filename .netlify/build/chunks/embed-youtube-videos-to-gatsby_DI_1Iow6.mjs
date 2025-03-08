import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2022-09-20T00:00:00.000Z",
  "title": "How To Embed Youtube Videos to Gatsby ",
  "description": "See how you can Embed Youtube Videos to Gatsby easily",
  "image": "../../assets/images/How_To_Embed_Youtube Videos_to_Gatsby.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["gatsby", "tutorials"],
  "canonical": "https://www.bitdoze.com/embed-youtube-videos-to-gatsby/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-embed-youtube-videos-to-gatsby",
    "text": "How To Embed YouTube Videos to Gatsby"
  }, {
    "depth": 3,
    "slug": "step-1-install-gatsby-remark-better-embed-video",
    "text": "Step 1: Install gatsby-remark-better-embed-video"
  }, {
    "depth": 3,
    "slug": "step-2-update-gatsby-configjs",
    "text": "Step 2: Update gatsby-config.js"
  }, {
    "depth": 3,
    "slug": "step-3-add-the-video-in-contentful",
    "text": "Step 3: Add the Video In Contentful"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Gatsby, it’s fast and built on React, I have started using it on this website moving from WordPress where everything was very easy. You can check this article if you are new to Gatsby and what to see the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/gatsby-js-online-courses/",
        children: "best Gatsby online courses"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "With Gatsby, I have learned that everything we take for granted in other CMS systems needs some work to function properly here. Being new to Gatsby I have searched online to see how you can easily embed YouTube videos and there were different approaches that confused me at the beginning. In this article, we will see exactly what you need to do to easily embed videos from YouTube and Vimeo in your blog posts or pages."
    }), "\n", createVNode(_components.p, {
      children: "This technique works with Contentful CMS or other Headless CMS systems that exist out there. Currently, I am using it with Contentful and I can say is the easiest way that you can use to have your videos embedded."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "All this will work only if the Contentful is as markdown and not rich text."
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-embed-youtube-videos-to-gatsby",
      children: "How To Embed YouTube Videos to Gatsby"
    }), "\n", createVNode(_components.p, {
      children: "Iframes are not a default thing for React so you can’t just go and insert your iframe with the video. This needs to be wrapped in React code to work."
    }), "\n", createVNode(_components.p, {
      children: ["Gatsby has plugins that can be used to make things easier. One plugin that you can use to embed YouTube videos is ", createVNode(_components.a, {
        href: "https://www.gatsbyjs.com/plugins/gatsby-remark-better-embed-video/",
        children: "gatsby-remark-better-embed-video"
      })]
    }), "\n", createVNode(_components.p, {
      children: "This plugin can easily help you embed videos from YouTube, Vimeo or Twitch with just a link, below are the details:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "video: https://www.youtube.com/embed/2Xc9gXyf2G4"
      }), "\r\n", createVNode(_components.code, {
        children: "youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4"
      }), "\r\n", createVNode(_components.code, {
        children: "youtube: 2Xc9gXyf2G4"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "vimeo: https://vimeo.com/5299404"
      }), "\r\n", createVNode(_components.code, {
        children: "vimeo: 5299404"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "videoPress: https://videopress.com/v/kUJmAcSf"
      }), "\r\n", createVNode(_components.code, {
        children: "videoPress: kUJmAcSf"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "twitch: https://player.twitch.tv/?channel=dakotaz"
      }), "\r\n", createVNode(_components.code, {
        children: "twitch: https://player.twitch.tv/?autoplay=false&video=v273436948"
      }), "\r\n", createVNode(_components.code, {
        children: "twitch: 273436948"
      }), "\r\n", createVNode(_components.code, {
        children: "twitchLive: dakotaz"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Now let’s see all the needed steps."
    }), "\n", createVNode(_components.h3, {
      id: "step-1-install-gatsby-remark-better-embed-video",
      children: "Step 1: Install gatsby-remark-better-embed-video"
    }), "\n", createVNode(_components.p, {
      children: "You need to navigate into your website location and add the plugin to your Gatsby installation:"
    }), "\n", createVNode(_components.p, {
      children: "npm i gatsby-remark-better-embed-video\r\nnpm -i gatsby-transformer-remark\r\n#OR\r\nyarn add gatsby-remark-better-embed-video\r\nyarn add gatsby-transformer-remark"
    }), "\n", createVNode(_components.h3, {
      id: "step-2-update-gatsby-configjs",
      children: "Step 2: Update gatsby-config.js"
    }), "\n", createVNode(_components.p, {
      children: "For every plugin that you use you need to add it to the to gatsby-config.js. For this to work with Contentful or other headless CMS systems you can add the below:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    resolve: \"gatsby-transformer-remark\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    options: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      plugins: ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "resolve: \"gatsby-remark-better-embed-video\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "options: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  width: 800,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ratio: 1.77, // Optional: Defaults to 16/9 = 1.77."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  height: 400, // Optional: Overrides optional.ratio."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  related: false, // Optional: Will remove related videos from the end of an embedded YouTube video."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  noIframeBorder: true, // Optional: Disable insertion of <style> border: 0."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  showInfo: false // Optional: Hides video title and player actions."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   },"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This taken from the plugin documentation and you have couple of options that you can modify in here if you want. In case you are using ", createVNode(_components.strong, {
        children: "gatsby-remark-responsive-iframe"
      }), " it shoud be used after the video plugin."]
    }), "\n", createVNode(_components.h3, {
      id: "step-3-add-the-video-in-contentful",
      children: "Step 3: Add the Video In Contentful"
    }), "\n", createVNode(_components.p, {
      children: "After you clear the cache and push the changes to your repo you can add the videos to your headless CMS with the format they want, for instance for a youtube video you add on a new line:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "youtube: https://youtu.be/2Wmats7Q6ck"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The final product will be as below:\r\n", createVNode(_components.img, {
        src: "//images.ctfassets.net/l6qg42gls3p1/FFqinDaxqYtYt2Oz2G0M2/32c04d044a9a944f2611a7ed62c8a48f/youtube_video.jpeg",
        alt: "youtube video example"
      })]
    }), "\n", createVNode(_components.p, {
      children: "That’s all you need to do to have your video embedded with Gatsby and contentful."
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

const url = "src/content/posts/embed-youtube-videos-to-gatsby.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/embed-youtube-videos-to-gatsby.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/embed-youtube-videos-to-gatsby.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
