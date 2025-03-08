import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-02-14T00:00:00.000Z",
  "title": "How to Create A Carrd.co Mobile Responsive Navbar",
  "description": "Learn how you can add a Responsive Navbar to your carrd website that has a mobile toggle.",
  "image": "../../assets/images/24/02/carrd-mobile-navbar.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["carrd"],
  "canonical": "https://www.bitdoze.com/carrd-mobile-navbar/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-create-a-container",
    "text": "1. Create a Container"
  }, {
    "depth": 2,
    "slug": "2-add-an-embed-widget",
    "text": "2. Add an Embed Widget"
  }, {
    "depth": 2,
    "slug": "3-add-the-htmlcss-code",
    "text": "3. Add the HTML/CSS code"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://try.carrd.co/bitdoze",
        children: "Carrd.co"
      }), " is a platform that allows you to create simple, responsive, and beautiful websites with just a few clicks. You can choose from a variety of templates, customize them with your own content, and publish them online for free or with a premium plan."]
    }), "\n", createVNode(_components.p, {
      children: "One of the features that Carrd.co offers is the ability to create a header for your website, which is the top section that usually contains your logo, navigation menu, and other elements. A header can help your visitors navigate your website and access the most important information."
    }), "\n", createVNode(_components.p, {
      children: "However, creating a header that looks good on both desktop and mobile devices can be challenging, especially if you want to have a hamburger menu, which is a common design pattern for responsive websites. A hamburger menu is a button that consists of three horizontal lines, and when clicked, it reveals a hidden menu with more options."
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will show you how to create a responsive header with a mobile navbar in Carrd.co using an embed widget and custom code option."
    }), "\n", createVNode($$Button, {
      link: "https://try.carrd.co/bitdoze",
      text: "Carrd.co"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/PkZ7CYfKxSg",
      label: "How to Create A Carrd.co Mobile Responsive Navbar"
    }), "\n", createVNode(_components.p, {
      children: "Some Carrd Tutorials:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/add-stickey-header-carrd/",
          children: "Add Stickey Header Carrd"
        })
      }), "\n", createVNode(_components.li, {
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
          href: "https://www.bitdoze.com/carrd-back-to-top-button/",
          children: "Back To Top Button on Carrd"
        })
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["The responsive navigation menu will need ", createVNode(_components.strong, {
          children: "Pro Standard"
        }), " plan as we are going to use a simple HTML and CSS code for this."]
      }), "\n"]
    }), "\n", createVNode($$Button, {
      link: "https://carrdme.com/",
      text: "Carrd Plugins and Themes"
    }), "\n", createVNode(_components.h2, {
      id: "1-create-a-container",
      children: "1. Create a Container"
    }), "\n", createVNode(_components.p, {
      children: "The header that will have the navigation menu will need to be inserted in a container, so you will need to add a container with 2 columns for this. In the first column, you will add you logo and in the second column, you will add the embed code."
    }), "\n", createVNode(_components.p, {
      children: "You can split them as 25% - 75% and choose what background you want for your header, this will not impact the responsive nav bar. Check the video where I go in detail."
    }), "\n", createVNode(_components.h2, {
      id: "2-add-an-embed-widget",
      children: "2. Add an Embed Widget"
    }), "\n", createVNode(_components.p, {
      children: "In the second column of the container, you will need to add the embed widget that will hold the code. You just assign a name."
    }), "\n", createVNode(_components.h2, {
      id: "3-add-the-htmlcss-code",
      children: "3. Add the HTML/CSS code"
    }), "\n", createVNode(_components.p, {
      children: "Below is the code that we are going to use to create the responsive navbar and menu items:"
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
              color: "#56B6C2"
            },
            children: "  :root"
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
              color: "#E06C75"
            },
            children: "    --mbm-main-font"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "inherit"
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
              color: "#E06C75"
            },
            children: "    --mbm-font-size-base"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "18"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
              color: "#E06C75"
            },
            children: "    --primary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "#200eed"
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
              color: "#E06C75"
            },
            children: "    --secondary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "#fff"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  /* Basic Reset and Body Styling */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  *"
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
            children: "    margin: "
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
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    padding: "
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
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    box-sizing: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "border-box"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  /* Navigation Styling */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  nav"
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
            children: "    color: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--secondary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    padding: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "flex"
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
            children: "    align-items: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "center"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Changed: Align items to the center vertically */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    justify-content: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "flex-end"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Changed: Align items to the start (left) */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    align-content: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "flex-end"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Not strictly necessary for this change */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    font-family: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--mbm-main-font"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    font-size: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--mbm-font-size-base"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .menu"
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
            children: "    list-style: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "flex"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .menu"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " li"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " a"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "block"
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
            children: "    color: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--secondary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    text-decoration: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
            children: "    padding: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 15"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "    position: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "relative"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .menu"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " li"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "::after"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    /* Target a pseudo-element for the underline */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    content: "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
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
            children: "    position: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "absolute"
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
            children: "    bottom: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Distance from the text */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    left: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "50"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Center the underline */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Initial width is 0 */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    height: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "    background-color: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--secondary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    transition: width "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.3"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " ease-in-out"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Control the transition effect */"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .menu"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " li"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: ":hover::after"
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
            children: "    width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Expand to full width on hover */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    left: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/* Start the underline from the left */"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  /* Hover effect for submenu items */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  /* Hamburger Styling */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .hamburger"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
            children: "    cursor: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "pointer"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .hamburger"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " .bar"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "block"
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
            children: "    width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "25"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "    height: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "    background-color: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--secondary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    margin: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  /* Hide Checkbox */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  #menu-toggle"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  .close-button"
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
            children: "    display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  /* Responsive - Media Queries (For Mobile) */"
          })
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
            children: " (max-width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "768"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    /* Show the Hamburger */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    .hamburger"
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
            children: "      display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "block"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    /* Hide and Modify Menu on Mobile */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    .menu"
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
            children: "absolute"
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
            children: "      width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "%"
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
              color: "#56B6C2"
            },
            children: "calc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "em"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      left: "
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
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      background-color: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--primary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      text-align: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "center"
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
            children: "      padding: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "40"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
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
            children: "      display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
            children: "999"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    .menu"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " li"
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
            children: "      width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "%"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    .menu"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " li"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " a"
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
            children: "      padding: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "      border-bottom: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " solid"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " rgba"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "255"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "255"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "255"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    #menu-toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: ":checked"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ~"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " .menu"
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
            children: "      display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "block"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    .close-button"
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
            children: "      display: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "block"
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
            children: "      position: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "absolute"
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
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "      right: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "      background: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
            children: "      border: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "none"
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
            children: "      font-size: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "18"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "px"
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
            children: "      color: "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "--secondary-color"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      cursor: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "pointer"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
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
            children: "nav"
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
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"checkbox\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"menu-toggle\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"menu-toggle\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"hamburger\""
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
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
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
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
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"menu\""
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"close-button\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">X</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Home</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#about\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">About</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#testimonials\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Testimonials</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#contact\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Contact</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "nav"
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
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  document"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\".close-button\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"click\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "      document"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"menu-toggle\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "checked"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " false"
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
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  document"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\".close-button\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"click\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "      document"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"menu-toggle\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "checked"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " false"
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
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // Close menu on menu item click"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "  document"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "querySelectorAll"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\".menu a\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "forEach"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "link"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
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
              color: "#E5C07B"
            },
            children: "    link"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"click\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "      document"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"menu-toggle\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "checked"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " false"
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
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  });"
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
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Code Explanation"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: ":root"
          }), " selector defines CSS variables for font, colors, and base font size. These variables make it easy to customize the appearance of the navbar."]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "--mbm-main-font"
            }), ": Inherits the font from the main Carrd theme."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "--mbm-font-size-base"
            }), ": Sets the base font size for the menu items."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "--primary-color"
            }), ": Defines the color for the mobile menu background."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "--secondary-color"
            }), ": Sets the color for text and icons."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: "nav"
          }), " element is styled to align items to the center vertically and to the right horizontally, creating a clean and modern look."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: ".menu"
          }), " class styles the list of navigation items, displaying them in a row on desktop."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Each menu item (", createVNode(_components.code, {
            children: "<a>"
          }), " inside ", createVNode(_components.code, {
            children: "<li>"
          }), ") has a hover effect that creates an underline animation when hovered over."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The hamburger menu (", createVNode(_components.code, {
            children: ".hamburger"
          }), ") is hidden by default and only appears on mobile screens."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Media queries for screens smaller than 768px wide:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "The hamburger menu becomes visible."
          }), "\n", createVNode(_components.li, {
            children: "The menu items stack vertically and are hidden by default."
          }), "\n", createVNode(_components.li, {
            children: ["A checkbox (", createVNode(_components.code, {
              children: "#menu-toggle"
            }), ") is used to toggle the mobile menu’s visibility."]
          }), "\n", createVNode(_components.li, {
            children: "A close button is added to the mobile menu for better user experience."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: "<nav>"
          }), " element contains the menu structure:"]
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
                children: "ul"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " class"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"menu\""
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
                  color: "#ABB2BF"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "button"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " class"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"close-button\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ">X</"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "button"
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
                  color: "#ABB2BF"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " href"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"#\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ">Home</"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
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
                  color: "#ABB2BF"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " href"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"#about\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ">About</"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
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
                  color: "#ABB2BF"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " href"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"#testimonials\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ">Testimonials</"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
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
                  color: "#ABB2BF"
                },
                children: "  <"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " href"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"#contact\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ">Contact</"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "a"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "li"
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
                  color: "#ABB2BF"
                },
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "ul"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ">"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["You can modify the ", createVNode(_components.code, {
            children: "href"
          }), " attributes and text content to match your Carrd sections."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "The JavaScript at the end adds functionality to close the mobile menu when the close button is clicked or when a menu item is selected."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "To customize the navbar:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Adjust the color variables in the ", createVNode(_components.code, {
          children: ":root"
        }), " selector to match your Carrd theme."]
      }), "\n", createVNode(_components.li, {
        children: ["Modify the menu items in the ", createVNode(_components.code, {
          children: "<ul class=\"menu\">"
        }), " to reflect your site’s structure."]
      }), "\n", createVNode(_components.li, {
        children: ["If needed, adjust the ", createVNode(_components.code, {
          children: "--mbm-font-size-base"
        }), " to change the text size of menu items."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This responsive navbar provides a sleek design for desktop views and a user-friendly mobile menu, enhancing navigation across all device sizes."
    }), "\n", createVNode(_components.p, {
      children: ["The tutorial made on how you can ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/add-stickey-header-carrd/",
        children: "add a sticky header to carrd"
      }), " is working perfectly with this tutorial so you can use both."]
    }), "\n", createVNode($$Button, {
      link: "https://carrdme.com/",
      text: "Carrd Plugins and Themes"
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

const url = "src/content/posts/carrd-mobile-navbar.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/carrd-mobile-navbar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/carrd-mobile-navbar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
