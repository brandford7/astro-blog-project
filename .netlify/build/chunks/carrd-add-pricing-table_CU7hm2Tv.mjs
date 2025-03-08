import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-11-27T00:00:00.000Z",
  "title": "How To Add Pricing Table to Carrd.co",
  "description": "Learn how to add a responsive monthly-year toggle pricing table to Carrd.co",
  "image": "../../assets/images/23/11/carrd-priging-table.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["carrd"],
  "canonical": "https://www.bitdoze.com/carrd-add-pricing-table/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-carrdco",
    "text": "What is Carrd.co?"
  }, {
    "depth": 2,
    "slug": "how-to-add-the-pricing-table-to-carrd",
    "text": "How To Add The Pricing Table to Carrd"
  }, {
    "depth": 3,
    "slug": "1-download-the-pricing-table-code",
    "text": "1. Download the Pricing Table Code"
  }, {
    "depth": 3,
    "slug": "2-customize-the-code",
    "text": "2. Customize the Code"
  }, {
    "depth": 3,
    "slug": "3-add-the-code-to-carrdco",
    "text": "3. Add the code to Carrd.co"
  }, {
    "depth": 3,
    "slug": "4-save-and-check-the-modifications",
    "text": "4. Save and check the modifications"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      children: "In this tutorial we are going to see how you can add a responsive pricing table to your Carrd.co website that has a monthly and yearly toggle and looks nice. The plugin costs $5 and you can use it on as many carrd.co websites as you want."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-carrdco",
      children: "What is Carrd.co?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://try.carrd.co/bitdoze",
        children: "Carrd.co"
      }), " is a platform that allows users to create single-page, responsive websites with ease. Perfect for personal profiles, business landing pages, and more, Carrd has become a go-to choice for those seeking a simple yet effective solution for their online presence."]
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
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/carrd-back-to-top-button/",
          children: "Back To Top Button on Carrd"
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
      id: "how-to-add-the-pricing-table-to-carrd",
      children: "How To Add The Pricing Table to Carrd"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/Q3UpuDDs0AY",
      label: "How To Add Pricing Table to Carrd.co"
    }), "\n", createVNode($$Button, {
      link: "https://carrdme.com/",
      text: "Carrd Plugins and Themes"
    }), "\n", createVNode(_components.p, {
      children: "As carrd.co is not coming up with an easy way to add a pricing table in the widgets it has you will need to be on the Pro Plus plan that will allow you to embed code. In the below tutorial, we are going to see everything that needs to be done to have a responsive pricing table."
    }), "\n", createVNode(_components.h3, {
      id: "1-download-the-pricing-table-code",
      children: "1. Download the Pricing Table Code"
    }), "\n", createVNode(_components.p, {
      children: ["The first thing to do is to download the code that you are going to use on your Carrd website. To do that just go to: ", createVNode(_components.a, {
        href: "https://webdoze.net/buy/carrd-co-pricing-table/",
        children: "Carrd Pricing Table"
      }), " and get your pricing table. It’s not free it costs $5 which is the price of a coffee."]
    }), "\n", createVNode(_components.h3, {
      id: "2-customize-the-code",
      children: "2. Customize the Code"
    }), "\n", createVNode(_components.p, {
      children: "After you have your code you will be able to change colors, prices, and font and add the price elements for your business. The code that will help you do this is outlined below:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Change Colours"
      })
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
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: ":root"
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
            children: "  --priceb-col-gr"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "linear-gradient"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    135"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "deg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "    rgba"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "163"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "168"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "240"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "    rgba"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "105"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "111"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "221"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Change Font"
      })
    }), "\n", createVNode(_components.p, {
      children: "You can use your won font, you can alter the bellow line under style:"
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
      "data-language": "css",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "font-family"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: ": inherit;"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The above code holds the colors for buttons, active card, and toggle. You can change or add your color and will be used automatically as this is a css variable."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Change Prices"
      })
    }), "\n", createVNode(_components.p, {
      children: "You need to edit 2 elements for the prices, 1 is for html code:"
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
        children: createVNode(_components.span, {
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
            children: "li"
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
            children: "\"basic\""
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
            children: "\"price bottom-bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "&dollar;"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "199.99</"
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The other one is for the java script where it has the toggle:"
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
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " prices"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  basic"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "monthly"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"$19.99\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "annual"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"$199.99\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  professional"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "monthly"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"$24.99\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "annual"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"$249.99\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  master"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "monthly"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"$39.99\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "annual"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"$399.99\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can add your own prices don’t forget to change the plan name in case you use custom ones for your business."
    }), "\n", createVNode($$Button, {
      link: "https://try.carrd.co/bitdoze",
      text: "Carrd.co"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Change Elements"
      })
    }), "\n", createVNode(_components.p, {
      children: ["To add your own price elements you just replace the ", createVNode(_components.code, {
        children: "li"
      }), " items in each card with your own, you can add more to suite your needs."]
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
            children: "li"
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
            children: "\"bottom-bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">1 TB Storage</"
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
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "\"bottom-bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">5 Users Allowed</"
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
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "\"bottom-bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Send up to 10 GB</"
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
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "\"bottom-bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Unlimited</"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Change Buttons"
      })
    }), "\n", createVNode(_components.p, {
      children: "You can add your won text on the buttons and you can replace the link to your package with your details, to do so alter:"
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
            children: "\"https://carrdme.com\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
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
            children: "\"btn\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Learn More</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
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
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-add-the-code-to-carrdco",
      children: "3. Add the code to Carrd.co"
    }), "\n", createVNode(_components.p, {
      children: ["After you customize the code you will need to go to the carrd website and add a container, in that container you can add the ", createVNode(_components.code, {
        children: "embed"
      }), " widget, give it a name and paste the code. You can align the text as you link and ad spacing for the container."]
    }), "\n", createVNode(_components.h3, {
      id: "4-save-and-check-the-modifications",
      children: "4. Save and check the modifications"
    }), "\n", createVNode(_components.p, {
      children: "What remains is to save your project and see how is looking, just publish the design and see how is looking, If there are issues you can alter the width of the container and make some customizations in carrd interface."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: ["In this way, you can add a pricing table to your carrd.co website with the price of a coffee. This shouldn’t be hard and you need only some basic knowlade to change the elements and customize the elements as you need. For additional carrd plugins, you can check ", createVNode(_components.a, {
        href: "https://carrdme.com/",
        children: "carrdme.com"
      }), " website."]
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

const url = "src/content/posts/carrd-add-pricing-table.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/carrd-add-pricing-table.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/carrd-add-pricing-table.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
