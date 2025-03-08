import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/carrd-page-settings.BTnTV6Od.png","width":784,"height":2320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/05/carrd-page-settings.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-05-30T00:00:00.000Z",
  "title": "How To Add a Sticky Header to Carrd",
  "description": "Let's see how you can add a sticky header to a Carrd website for a better experience.",
  "image": "../../assets/images/23/05/stickey_header_card.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["carrd"],
  "canonical": "https://www.bitdoze.com/add-stickey-header-carrd/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-add-a-sticky-header-to-carrd",
    "text": "How To Add a Sticky Header to Carrd"
  }, {
    "depth": 3,
    "slug": "1-set-carrdco-page-settings",
    "text": "1. Set Carrd.co Page Settings"
  }, {
    "depth": 3,
    "slug": "2-get-container-id-or-add-a-name-to-container",
    "text": "2. Get Container ID OR Add a Name to Container"
  }, {
    "depth": 3,
    "slug": "3-css-code",
    "text": "3. CSS Code"
  }, {
    "depth": 4,
    "slug": "stickey-on-mobile-also",
    "text": "Stickey On Mobile Also"
  }, {
    "depth": 4,
    "slug": "stickey-on-displays-bigger-then-600px",
    "text": "Stickey On Displays bigger Then 600px"
  }, {
    "depth": 3,
    "slug": "4-add-a-space",
    "text": "4. Add a Space"
  }, {
    "depth": 3,
    "slug": "5-save-the-page",
    "text": "5. Save the page"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this tutorial, we are going to see how we can add a sticky header or navbar to a Carrd.co website to make it more interesting for your visitors. The code will need the Pro standard plan as we will need to use the embed widget, you don’t need to be on the latest plan as we will take the container ID."
    }), "\n", createVNode(_components.p, {
      children: "There will be 2 codes, one that will make everything sticky or fix how you want to call it on mobile and PC and the second code that will make everything sticky on screens bigger than 600px."
    }), "\n", createVNode($$Button, {
      link: "https://carrdme.com/",
      text: "Carrd Plugins and Themes"
    }), "\n", createVNode(_components.p, {
      children: "If you are interested in more carrd tutorials you can check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/add-cookie-notice-carrd/",
          children: "Add Carrd Cookie Notice"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/carrd-add-pricing-table/",
          children: "How To Add Pricing Table to Carrd.co"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/carrd-review/",
          children: "Carrd.co Review"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/add-accordion-carrd/",
          children: "How To Add Accordion FAQs Drop-Down to Carrd.co"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/carrd-add-domain/",
          children: "How To Add Custom Domain to Carrd.co"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/carrd-mobile-navbar/",
          children: "Carrd.co Mobile Responsive Navbar"
        })
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["The complete list with Carrd plugins, themes and tutorials you can find on my ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://carrdme.com/",
            children: "carrdme.com"
          })
        }), " website."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-add-a-sticky-header-to-carrd",
      children: "How To Add a Sticky Header to Carrd"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/hClMHp1CSec",
      label: "How To Add a Sticky Header to Carrd.co"
    }), "\n", createVNode(_components.h3, {
      id: "1-set-carrdco-page-settings",
      children: "1. Set Carrd.co Page Settings"
    }), "\n", createVNode(_components.p, {
      children: "The first thing you need to do is to set the vertical and horizontal padding to 0 in the page settings, in case they are not 0 the floating navbar will not have the correct sizes and will not look good."
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "Carrd page settings"
    }), "\n", createVNode($$Button, {
      link: "https:/go.bitdoze.com/carrd",
      text: "Carrd.co"
    }), "\n", createVNode(_components.h3, {
      id: "2-get-container-id-or-add-a-name-to-container",
      children: "2. Get Container ID OR Add a Name to Container"
    }), "\n", createVNode(_components.p, {
      children: "In case you are not on the Pro Plus plan and you are on the standard plan you will need to get the ID of the container that is the header, to do that you need to use the inspect element in the browser as you see in the video. The ID is important as will be linked to the CSS that will make the header sticky. The video has everything you need,"
    }), "\n", createVNode(_components.p, {
      children: "In case you are on the Pro Plus plan you can add an ID to the container and use that in your CSS code, you just go to settings and add your ID there."
    }), "\n", createVNode($$Button, {
      link: "https:/go.bitdoze.com/carrd",
      text: "Carrd.co"
    }), "\n", createVNode(_components.h3, {
      id: "3-css-code",
      children: "3. CSS Code"
    }), "\n", createVNode(_components.p, {
      children: "The next thing that you need to do is to add an embed widget and add the CSS code below, as mentioned there will be 2 codes, one that is making the header sticky everywhere and the other that is not making the code sticky on mobile"
    }), "\n", createVNode(_components.h4, {
      id: "stickey-on-mobile-also",
      children: "Stickey On Mobile Also"
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  #container01"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    position: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "fixed"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " !important"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    z-index: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "99"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    top: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "stickey-on-displays-bigger-then-600px",
      children: "Stickey On Displays bigger Then 600px"
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  @media"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " screen "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "and"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (min-width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "600"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    #container01"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      position: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "fixed"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " !important"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      z-index: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "99"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      top: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the above codes, you need to replace ", createVNode(_components.strong, {
        children: "container01"
      }), " with the ID of your container from second point"]
    }), "\n", createVNode(_components.h3, {
      id: "4-add-a-space",
      children: "4. Add a Space"
    }), "\n", createVNode($$Button, {
      link: "https://carrdme.com/",
      text: "Carrd Plugins and Themes"
    }), "\n", createVNode(_components.p, {
      children: "The next container will be pushed up and the website can look bad, to fix that you can add a divider and margins to the top of it, you can use the container below the paddings but is better to use the divider as you can control the mobile padding also, and in function off what you want you can play around. All the explanations are on the video"
    }), "\n", createVNode(_components.h3, {
      id: "5-save-the-page",
      children: "5. Save the page"
    }), "\n", createVNode(_components.p, {
      children: "After you are happy with the changes you can save it and see how it looks."
    }), "\n", createVNode($$Button, {
      link: "https:/go.bitdoze.com/carrd",
      text: "Carrd.co"
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

const url = "src/content/posts/add-stickey-header-carrd.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-stickey-header-carrd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-stickey-header-carrd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
