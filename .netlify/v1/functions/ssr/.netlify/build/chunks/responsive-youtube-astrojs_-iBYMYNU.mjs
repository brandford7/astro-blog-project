import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/video-speed-score.BNPa1I4z.jpeg","width":3404,"height":2796,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/2210/video-speed-score.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2022-10-20T00:00:00.000Z",
  "title": "Add Responsive YouTube Videos to Astro.JS MDX",
  "description": "Lets see how easy is to add a responsive YouTube video to Astro.js",
  "image": "../../assets/images/2210/responsive-youtube-astro-blog.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["astro", "tutorials"],
  "canonical": "https://www.bitdoze.com/responsive-youtube-astrojs/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "add-responsive-youtube-videos-to-astrojs-mdx",
    "text": "Add Responsive YouTube Videos to Astro.JS MDX"
  }, {
    "depth": 3,
    "slug": "1-install-astro-embed",
    "text": "1. Install astro-embed"
  }, {
    "depth": 3,
    "slug": "2-call-astro-embed-in-mdx",
    "text": "2. Call astro-embed in MDX"
  }, {
    "depth": 3,
    "slug": "3-add-the-video-to-the-body",
    "text": "3. Add the video to the body"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I am using ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro.js"
      }), " to host this blog on Cloudflare Pages and an important part of the blog is to be responsive and be able to add YouTube videos to the posts."]
    }), "\n", createVNode(_components.p, {
      children: ["In case you want to deploy your blog on Astro.js and Cloudflare Pages you can check this tutorial:", createVNode(_components.a, {
        href: "https://www.bitdoze.com/deploy-astrojs-cloudflare/",
        children: "How To Deploy An Astro.JS Blog On Cloudflare"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["With the new MDX move done by Astro you can easily embed YouTube videos to MDX files by installing an extension, here we will see exactly how. We are going to use ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/astro-embed",
        children: "astro-embed"
      }), " extension for this.\r\nWith it, you can not only embed YouTube videos but you will also be able to embed Vimeo or Twitter."]
    }), "\n", createVNode(_components.h2, {
      id: "add-responsive-youtube-videos-to-astrojs-mdx",
      children: "Add Responsive YouTube Videos to Astro.JS MDX"
    }), "\n", createVNode(_components.h3, {
      id: "1-install-astro-embed",
      children: "1. Install astro-embed"
    }), "\n", createVNode(_components.p, {
      children: "In case you don’t have it installed in your project you can install it with:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " astro-embed"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-call-astro-embed-in-mdx",
      children: "2. Call astro-embed in MDX"
    }), "\n", createVNode(_components.p, {
      children: "With it installed you can now call it not only in the MDX files for your blog but you can call it also on the .astro files by adding the below in the files:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Tweet,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Vimeo,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " YouTube"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'astro-embed'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "If you only have YouTube in the MDX file you can call only YouTube. The Row needs to be added under the MDX header like the below example:"
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
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "publishDate"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Sep 14 2022\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Monitor CPU Usage and Send Email Alerts in Linux\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "description"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Let's see how we can monitor CPU usage on a server and receive emails.\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "excerpt"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Let's see how we can monitor CPU usage on a server and receive emails.\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"~/assets/images/cpu_monitoring.jpeg\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "category"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"vps\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "tags"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "linux"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "tutorials"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "import { YouTube } from \"astro-embed\";"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-add-the-video-to-the-body",
      children: "3. Add the video to the body"
    }), "\n", createVNode(_components.p, {
      children: "Now you should be able to use the video where you want in your MDX file. To add it you just add the link to it below:"
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "YouTube"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://youtu.be/NkShQ1wwiCg\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "And it will look like below where you can follow the tutorial for this article:"
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "The embed is responsive and fast as it will not use the iframe for this. Usually, when you add an iframe video from youtube to the article the speed score is going down a lot because of the scripts that need to be loaded. With this embed, it will not load all the YouTube scripts and will do so only on click. Below is the score:"
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "YouTube Speed score"
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

const url = "src/content/posts/responsive-youtube-astrojs.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/responsive-youtube-astrojs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/responsive-youtube-astrojs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
