import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-18T00:00:00.000Z",
  "title": "How To Add Multiple Pages to NiceGUI",
  "description": "Learn how you can add multiple pages to NiceGUI",
  "image": "../../assets/images/24/03/nicegui_multiple-pages.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["nicegui", "python"],
  "canonical": "https://www.bitdoze.com/nicegui-pages/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-create-the-themepy-with-the-layout",
    "text": "1. Create the theme.py with the layout"
  }, {
    "depth": 2,
    "slug": "2-create-the-menupy-with-the-pages",
    "text": "2. Create the menu.py with the pages"
  }, {
    "depth": 2,
    "slug": "3-create-the-pages-in-nicegui",
    "text": "3. Create the pages in NiceGUI"
  }, {
    "depth": 2,
    "slug": "4-create-the-all_pages-in-nicegui",
    "text": "4. Create the all_pages in NiceGUI"
  }, {
    "depth": 2,
    "slug": "5-create-the-home_page-in-nicegui",
    "text": "5. Create the home_page in NiceGUI"
  }, {
    "depth": 2,
    "slug": "6-create-the-mainpy-in-nicegui",
    "text": "6. Create the main.py in NiceGUI"
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["NiceGUI is a powerful framework that can help you build UIs to your Python App. In this article we are going to see how you can add multiple pages to your NiceGUI website and display them in a sidebar and header. You can check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/nicegui-get-started/",
        children: "NiceGUI For Beginners"
      }), " to install NiceGUI and see exactly how easy it is to use it."]
    }), "\n", createVNode(_components.p, {
      children: ["If you want to deploy NiceGUI or any Python App to Docker you can check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-run-python/",
        children: "How To Run Any Python App in Docker with Docker Compose"
      })]
    }), "\n", createVNode(_components.p, {
      children: "We will create a modular multi page layout that will inherit the elements you add in there."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/bW3ifL2hdfc",
      label: "How To Add Multiple Pages to NiceGUI"
    }), "\n", createVNode(_components.h2, {
      id: "1-create-the-themepy-with-the-layout",
      children: "1. Create the theme.py with the layout"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " contextlib "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " contextmanager"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " menu "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " menu"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "@contextmanager"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " frame"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: "navtitle"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    \"\"\"Custom page frame to share the same styling and behavior across all pages\"\"\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "colors"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "primary"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'#6E93D6'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "secondary"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'#53B689'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "accent"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'#111B1E'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "positive"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'#53B689'"
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
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "column"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'absolute-center items-center h-screen no-wrap p-9 w-full'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "        yield"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "replace"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'row items-center'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " header:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "on_click"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "lambda"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": left_drawer."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(), "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "icon"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'menu'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "props"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'flat color=white'"
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
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Getting Started'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'font-bold'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "footer"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "False"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " footer:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Footer'"
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
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "left_drawer"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'bg-blue-100'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " left_drawer:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Menu'"
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
              color: "#C678DD"
            },
            children: "        with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "column"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "():"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "            menu"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "page_sticky"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'bottom-right'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "x_offset"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "y_offset"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "on_click"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "footer.toggle, "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "icon"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'contact_support'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "props"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'fab'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "@contextmanager"
      }), " decorator in the provided code is used to define a context manager function called ", createVNode(_components.code, {
        children: "frame"
      }), ". This function is designed to set up a consistent layout and styling for pages in a web application using the NiceGUI framework. The context manager is responsible for setting up the environment before the body of the ", createVNode(_components.code, {
        children: "with"
      }), " statement is executed and for cleaning up afterwards."]
    }), "\n", createVNode(_components.p, {
      children: ["Here’s a breakdown of what happens in the ", createVNode(_components.code, {
        children: "frame"
      }), " function:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["The ", createVNode(_components.code, {
          children: "ui.colors"
        }), " function is called to set the color scheme for the UI elements."]
      }), "\n", createVNode(_components.li, {
        children: ["A header is created using ", createVNode(_components.code, {
          children: "ui.header()"
        }), " which is styled to justify content between elements and set the text color to white."]
      }), "\n", createVNode(_components.li, {
        children: ["Inside the header, two labels are created: one for the title of the application and another for the navigation title (", createVNode(_components.code, {
          children: "navtitle"
        }), ") passed as an argument to the ", createVNode(_components.code, {
          children: "frame"
        }), " function."]
      }), "\n", createVNode(_components.li, {
        children: ["A row is created to include the navigation menu by calling the ", createVNode(_components.code, {
          children: "menu()"
        }), " function."]
      }), "\n", createVNode(_components.li, {
        children: "A column is created to center the content that will be placed inside the context manager’s block."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "yield"
      }), " statement is the point at which the function will pause and return control back to the block of code that is using the ", createVNode(_components.code, {
        children: "frame"
      }), " context manager. This allows the caller to insert custom content into the column that was set up. After the block of code using the ", createVNode(_components.code, {
        children: "frame"
      }), " context manager is executed, the function will resume if there were any cleanup actions to perform, which in this case, there are none."]
    }), "\n", createVNode(_components.p, {
      children: ["This will result in a page with a header containing the application title, the specified page title, and the navigation menu, followed by the custom content centered on the page. The ", createVNode(_components.code, {
        children: "@contextmanager"
      }), " decorator makes it easy to reuse this layout across different pages of the application, ensuring a consistent look and feel."]
    }), "\n", createVNode(_components.h2, {
      id: "2-create-the-menupy-with-the-pages",
      children: "2. Create the menu.py with the pages"
    }), "\n", createVNode(_components.p, {
      children: "This file will contain the pages that will be displayed in NiceGUI"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " menu"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() -> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "link"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Home'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "replace"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'text-black'"
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
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "link"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'YouTube Titles'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/youtube-title-generator/'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "replace"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'text-black'"
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
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "link"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'YouTube Script Generator'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/youtube-script/'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "classes"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "replace"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'text-black'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The above code will create a menu function with the pages that we want, you can add your desired ones in here, the ", createVNode(_components.code, {
        children: "classes"
      }), " it hold the text color"]
    }), "\n", createVNode(_components.h2, {
      id: "3-create-the-pages-in-nicegui",
      children: ["3. Create the ", createVNode(_components.code, {
        children: "pages"
      }), " in NiceGUI"]
    }), "\n", createVNode(_components.p, {
      children: ["In this section we are going to create our actual pages under a ", createVNode(_components.code, {
        children: "page"
      }), " folder, they will be used to store the pages code. Here we are going to create 2 files ", createVNode(_components.code, {
        children: "title_generator.py"
      }), " and ", createVNode(_components.code, {
        children: "script_generator.py"
      }), " that will have the code that will run on the pages."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "title_generator.py"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " theme"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " title_generator"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "():"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " theme."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "frame"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'YouTube Title Generator'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "page_title"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'YouTube Title Generator'"
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
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'# This is My Title Generator Page'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "script_generator.py"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " theme"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " script_generator"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "():"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " theme."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "frame"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'YouTube Script Generator'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "page_title"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'YouTube Script Generator'"
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
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'# This is My YouTube Script Generator Page'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "4-create-the-all_pages-in-nicegui",
      children: ["4. Create the ", createVNode(_components.code, {
        children: "all_pages"
      }), " in NiceGUI"]
    }), "\n", createVNode(_components.p, {
      children: ["We will create an ", createVNode(_components.code, {
        children: "all_pages.py"
      }), " file that will fetch the code for our all pages."]
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " pages.title_generator "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " title_generator"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " pages.script_generator "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " script_generator"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() -> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "page"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/youtube-title-generator/'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")(title_generator)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "page"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/youtube-script/'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")(script_generator)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " __name__"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " '__main__'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    create"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This Python code defines a function ", createVNode(_components.code, {
        children: "create()"
      }), " that uses the NiceGUI library to set up routing for a web application. It maps specific URL paths to functions that generate content for those pages. For example, visiting ", createVNode(_components.code, {
        children: "/youtube-title-generator/"
      }), " in the application will execute the ", createVNode(_components.code, {
        children: "title_generator"
      }), " function from the ", createVNode(_components.code, {
        children: "title_generator"
      }), " module within the ", createVNode(_components.code, {
        children: "pages"
      }), " package. Similarly, other paths are mapped to their respective content-generating functions (", createVNode(_components.code, {
        children: "script_generator"
      }), ", ", createVNode(_components.code, {
        children: "description_generator"
      }), ", and ", createVNode(_components.code, {
        children: "script_generator2"
      }), "). The ", createVNode(_components.code, {
        children: "if __name__ == '__main__':"
      }), " block ensures that ", createVNode(_components.code, {
        children: "create()"
      }), " is called to set up the routes when the script is run directly."]
    }), "\n", createVNode(_components.h2, {
      id: "5-create-the-home_page-in-nicegui",
      children: ["5. Create the ", createVNode(_components.code, {
        children: "home_page"
      }), " in NiceGUI"]
    }), "\n", createVNode(_components.p, {
      children: "This file will be the one that will hold the home page details we are just going to create the file and add a markdown."
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " content"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() -> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "column"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "():"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'''"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            Elevate your YouTube content creation with Bitdoze's suite of intelligent AI tools."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            ## Catchy Titles and Descriptions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            Struggling to find the perfect title or description? Bitdoze's AI analyzes trending topics and keywords to generate ideas that are both engaging and optimized for search."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            ## Compelling Video Scripts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            Need help crafting a video script? Our AI script generator can:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             - Outline key points for your video"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             - Suggest hooks and captivating introductions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             - Provide creative transitions and calls-to-action"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            ## And More!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            Bitdoze is continuously expanding its AI capabilities for YouTubers. Stay tuned for exciting new features!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            **Transform your YouTube workflow with BitDoze. Try it today!**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            '''"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "6-create-the-mainpy-in-nicegui",
      children: ["6. Create the ", createVNode(_components.code, {
        children: "main.py"
      }), " in NiceGUI"]
    }), "\n", createVNode(_components.p, {
      children: ["What remains is to create the ", createVNode(_components.code, {
        children: "main.py"
      }), " that will stick everything together."]
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " all_pages"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " home_page"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " theme"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " nicegui "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " app, ui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# here we use our custom page decorator directly and just put the content creation into a separate function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "@ui"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "page"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/'"
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
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " index_page"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() -> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " theme."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "frame"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Homepage'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        home_page."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "content"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# this call shows that you can also move the whole page creation into a separate file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "all_pages."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "create"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "run"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Getting Started With NiceGUI'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This code snippet sets up a web application using the NiceGUI library. It defines a homepage (", createVNode(_components.code, {
        children: "index_page"
      }), ") using a custom decorator ", createVNode(_components.code, {
        children: "@ui.page('/')"
      }), ", which maps the root URL (", createVNode(_components.code, {
        children: "'/'"
      }), ") to this function. Inside this function, it uses a custom frame from the ", createVNode(_components.code, {
        children: "theme"
      }), " module to style the page and calls ", createVNode(_components.code, {
        children: "home_page.content()"
      }), " to populate it with content. Additionally, it imports and executes ", createVNode(_components.code, {
        children: "all_pages.create()"
      }), " to define more pages, likely mapping other URLs to their respective content functions. Finally, ", createVNode(_components.code, {
        children: "ui.run(title='Getting Started With NiceGUI')"
      }), " starts the web server, setting the title of the application to ‘Getting Started With NiceGUI’."]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: ["This is how you can add multiple pages in NiceGUI, the code was created based on ", createVNode(_components.a, {
        href: "https://github.com/zauberzeug/nicegui/tree/main/examples/",
        children: "NiceGUI examples"
      }), " so you can check their examples for more things that you may want."]
    }), "\n", createVNode(_components.p, {
      children: ["You can check the ", createVNode(_components.a, {
        href: "https://github.com/bitdoze/nicegui-starter",
        children: "NiceGUI Starter Theme"
      }), " to have the updated code. I will add the future things here, who want to help are welcome."]
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

const url = "src/content/posts/nicegui-pages.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/nicegui-pages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/nicegui-pages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
