import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-07T00:00:00.000Z",
  "title": "NiceGUI For Beginners: Build An UI to Python App in 5 Minutes",
  "description": "Master NiceGUI quickly! Learn to add a user interface to your Python app in just 5 minutes with our beginner-friendly guide.",
  "image": "../../assets/images/24/03/nicegui-beginners.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["nicegui", "python"],
  "canonical": "https://www.bitdoze.com/nicegui-get-started/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nicegui-features",
    "text": "NiceGUI Features"
  }, {
    "depth": 2,
    "slug": "getting-started-with-nicegui",
    "text": "Getting Started With NiceGUI"
  }, {
    "depth": 3,
    "slug": "install-and-run-nicegui",
    "text": "Install and Run NiceGUI"
  }, {
    "depth": 3,
    "slug": "add-markdown",
    "text": "Add Markdown"
  }, {
    "depth": 3,
    "slug": "add-rows",
    "text": "Add Rows"
  }, {
    "depth": 3,
    "slug": "add-columns",
    "text": "Add Columns"
  }, {
    "depth": 3,
    "slug": "styling-components-with-clases",
    "text": "Styling Components with Clases"
  }, {
    "depth": 3,
    "slug": "inputs-and-buttons",
    "text": "Inputs and Buttons"
  }, {
    "depth": 3,
    "slug": "add-images",
    "text": "Add Images"
  }, {
    "depth": 3,
    "slug": "add-header-with-drawer-toggle",
    "text": "Add Header with Drawer Toggle"
  }, {
    "depth": 3,
    "slug": "add-right-sidebardrawer",
    "text": "Add Right Sidebar/Drawer"
  }, {
    "depth": 3,
    "slug": "add-footer",
    "text": "Add Footer"
  }, {
    "depth": 3,
    "slug": "add-code-into-header",
    "text": "Add Code Into Header:"
  }, {
    "depth": 2,
    "slug": "why-some-will-probably-not-like-nicegui",
    "text": "Why Some Will Probably Not Like NiceGUI"
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
      children: [createVNode(_components.a, {
        href: "https://nicegui.io/",
        children: "NiceGUI"
      }), " is a newer framework that aims to provide a simple and elegant way to create GUIs with Python. It uses Vue, Quasar, and Tailwind for its frontend, which allows you to create web-based GUIs with HTML, CSS, and JavaScript."]
    }), "\n", createVNode(_components.p, {
      children: ["Over time I have checked a few Python frameworks like Streamlit or Taipy that can help me build a Web UI for my Python application and in the end, I have decided to stick with NiceGUI as it provides a better speed and more customizations for my Python app. I have created some comparison articles that will help you see the exact differences: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/streamlit-vs-nicegui/",
        children: "Streamlit vs. NiceGUI"
      }), " or ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/streamlit-vs-taipy/",
        children: "Streamlit vs Taipy"
      }), ". There is also a master article with all the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/best-python-web-frameworks/",
        children: "Python Web UI frameworks"
      }), " that you can use and there are a lot, you should choose in function of your needs."]
    }), "\n", createVNode(_components.h2, {
      id: "nicegui-features",
      children: "NiceGUI Features"
    }), "\n", createVNode(_components.p, {
      children: "In the below section I would like to highlight the most important features of NiceGUI and why I think is one of the best if you want to build a UI for your Python apps:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance"
        }), ": NiceGUI has a very good performance when it comes to interacting with the components, websites need to be fast otherwise visitors will not like it. NiceGUI uses Vue, Quasar, and Tailwind and makes things very fast, you will not even know that the website is using Python behind the hood."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Customizations"
        }), ": I like to have the option to customize the app the way I like even if it takes longer, the Tailwind classes, Quasar props and direct CSS styles will help you customize the app in the way you like. Also is very easy to change the default things and add JavaScript if you need."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Easy to Use"
        }), ": I am not a Python expert nor a CSS or HTML one I know some things so I need the framework to be easy to use. After a couple of days, I understood most of the things and NiceGUI documentation and examples will help you understand most of the things."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Components"
        }), ": NiceGUI provides the components you need to build the app, easily. You have ", createVNode(_components.code, {
          children: "row"
        }), ", ", createVNode(_components.code, {
          children: "columns"
        }), ", ", createVNode(_components.code, {
          children: "markdown"
        }), ", ", createVNode(_components.code, {
          children: "images"
        }), ", ", createVNode(_components.code, {
          children: "sliders"
        }), ", ", createVNode(_components.code, {
          children: "cards"
        }), " and a lot of other things that you can easily integrate with your Python code."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These are some of the most important things for me, in function what you need to do you can check NiceGUI documentation and see if it has the things you need."
    }), "\n", createVNode(_components.p, {
      children: ["If you want to deploy NiceGUI or any Python App to Docker you can check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-run-python/",
        children: "How To Run Any Python App in Docker with Docker Compose"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "getting-started-with-nicegui",
      children: "Getting Started With NiceGUI"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/tfBKRxbCsao",
      label: "NiceGUI For Beginners"
    }), "\n", createVNode(_components.p, {
      children: ["In the below section we are going to see how you can start with NiceGUI and what are some of the components and customizations you can use ", createVNode(_components.a, {
        href: "https://tools.bitdoze.com/",
        children: "Bitdoze Tools"
      }), " is build with NiceGUI so you can take a look."]
    }), "\n", createVNode(_components.h3, {
      id: "install-and-run-nicegui",
      children: "Install and Run NiceGUI"
    }), "\n", createVNode(_components.p, {
      children: "NiceGui is easy to install and you just need to run a pip command:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "pip install nicegui"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["After you just need to create an ", createVNode(_components.code, {
        children: ".py"
      }), " file and start it:"]
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
              color: "#ABB2BF"
            },
            children: "ui."
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
            children: "'Hello NiceGUI!'"
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
            children: "()"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["first, you import the UI like most of the other frameworks ", createVNode(_components.code, {
          children: "from nicegui import ui"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["after you add your code with elements, ", createVNode(_components.code, {
          children: "ui.label('Hello NiceGUI!')"
        }), " will just add a text on the page, we will see next some of the other things."]
      }), "\n", createVNode(_components.li, {
        children: ["after you add the ", createVNode(_components.code, {
          children: "ui.run()"
        }), " that will tell python to run it"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["At the end you just need to run your ", createVNode(_components.code, {
        children: ".py"
      }), " file and NiceGUI will start the app on ", createVNode(_components.code, {
        children: "8080"
      }), " port:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "python3 main.py"
          })
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "add-markdown",
      children: "Add Markdown"
    }), "\n", createVNode(_components.p, {
      children: ["If you need to add text or other things that are formatted you can use the ", createVNode(_components.code, {
        children: "ui.markdown"
      }), " element:"]
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
              color: "#ABB2BF"
            },
            children: "ui."
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
            children: "'# This is H1 Header'"
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
            children: "ui."
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
            children: "'## This is H2 Header'"
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
            children: "ui."
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
            children: "'#### This is H3 Header'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "These lines demonstrate how to use markdown syntax to create headers of different levels (H1, H2, and H3) in the UI."
    }), "\n", createVNode(_components.h3, {
      id: "add-rows",
      children: "Add Rows"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# row element"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "row"
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
            children: "  ui."
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
            children: "' First row item'"
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
            children: "  ui."
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
            children: "' Second row item'"
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
            children: "  ui."
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
            children: "' Third row item'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block creates a row layout where labels (text elements) are arranged horizontally. You can add under it the elements you need."
    }), "\n", createVNode(_components.h3, {
      id: "add-columns",
      children: "Add Columns"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#Column element"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
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
            children: "  ui."
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
            children: "' First column item'"
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
            children: "  ui."
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
            children: "' Second column item'"
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
            children: "  ui."
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
            children: "' Third colum item'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block creates a column layout where labels are stacked vertically."
    }), "\n", createVNode(_components.h3, {
      id: "styling-components-with-clases",
      children: "Styling Components with Clases"
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
            children: "with"
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
            children: "  ui."
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
            children: "' First column item'"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  ui."
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
            children: "' Second column item'"
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
            children: "'text-2xl'"
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
            children: "  ui."
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
            children: "' Third column item'"
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
            children: "'text-red-600 text-2xl'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block demonstrates how to add CSS classes to style text elements, such as making text bold, changing its size, or altering its color. You can use Tailwind classes to style the components in the way you like."
    }), "\n", createVNode(_components.h3, {
      id: "inputs-and-buttons",
      children: "Inputs and Buttons"
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
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "row"
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
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "input"
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
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Type Something'"
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
            children: "'square outlined dense'"
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
            children: "'shadow-lg'"
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
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Click Me'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block adds an input field with a label and a button in a row layout. The input field has additional properties and classes for styling. You can use Tailwind classes in combination with Quasar props to style your components."
    }), "\n", createVNode(_components.h3, {
      id: "add-images",
      children: "Add Images"
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
        children: createVNode(_components.span, {
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
            children: "image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'https://www.bitdoze.com/_astro/streamlit-vs-nicegui.CbrH4KaA_2qjgFm.webp'"
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
            children: "'h-auto max-w-lg rounded-lg flex justify-center'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This line adds an image to the UI with a source URL and applies CSS classes for styling, such as setting the height automatically, limiting the maximum width, rounding the corners, and centering the image."
    }), "\n", createVNode(_components.h3, {
      id: "add-header-with-drawer-toggle",
      children: "Add Header with Drawer Toggle"
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
            children: "with"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "elevated"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "True"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'background-color: #3874c8'"
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
            children: "'items-center justify-between'"
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
            children: "'HEADER'"
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
            children: ": right_drawer."
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block creates a header with a specific background color and styles. It includes a label for the header title and a button that toggles the visibility of a right-side drawer."
    }), "\n", createVNode(_components.h3, {
      id: "add-right-sidebardrawer",
      children: "Add Right Sidebar/Drawer"
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
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "right_drawer"
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
            children: "fixed"
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
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'background-color: #ebf1fa'"
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
            children: "'bordered'"
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
            children: " right_drawer:"
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
            children: "'RIGHT DRAWER'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block defines a right-side drawer with a background color and border properties. It contains a label indicating it’s the right drawer."
    }), "\n", createVNode(_components.h3, {
      id: "add-footer",
      children: "Add Footer"
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
            children: "with"
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
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'background-color: #3874c8'"
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
            children: "'FOOTER'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This block creates a footer with a specific background color and contains a label for the footer text. You can add the footer elements in here if you choose to, split them into columns,etc."
    }), "\n", createVNode(_components.h3, {
      id: "add-code-into-header",
      children: "Add Code Into Header:"
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
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "add_head_html"
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
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     <script></script>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     '''"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This will make possible adding the code you like into header, you can add javascript or CSS code, you can add your analytics code in here."
    }), "\n", createVNode(_components.p, {
      children: "At the end you will have a file with all the elements that will look like this:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#demonstrate h1 and others"
          })
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
            children: "'# This is H1 Header'"
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
            children: "ui."
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
            children: "'## This is H2 Header'"
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
            children: "ui."
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
            children: "'#### This is H3 Header'"
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
              color: "#ABB2BF"
            },
            children: "ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "separator"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#row element"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "row"
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
            children: "  ui."
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
            children: "' First row item'"
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
            children: "  ui."
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
            children: "' Second row item'"
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
            children: "  ui."
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
            children: "' Third row item'"
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
            children: "separator"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#Column element"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
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
            children: "  ui."
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
            children: "' First column item'"
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
            children: "  ui."
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
            children: "' Second column item'"
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
            children: "  ui."
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
            children: "' Third colum item'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#stile the text"
          })
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
            children: "separator"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
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
            children: "  ui."
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
            children: "' First column item'"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  ui."
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
            children: "' Second column item'"
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
            children: "'text-2xl'"
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
            children: "  ui."
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
            children: "' Third column item'"
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
            children: "'text-red-600 text-2xl'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#other elements"
          })
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
            children: "separator"
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
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "row"
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
            children: "    ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "input"
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
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Tipe Something'"
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
            children: "'squere outlined dense'"
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
            children: "'shadow-lg'"
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
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'Click Me'"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#image add"
          })
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
            children: "separator"
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
              color: "#ABB2BF"
            },
            children: "ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'https://www.bitdoze.com/_astro/streamlit-vs-nicegui.CbrH4KaA_2qjgFm.webp'"
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
            children: "'h-auto max-w-lg rounded-lg flex justify-center'"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "## Header with right drawer"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "elevated"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "True"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'background-color: #3874c8'"
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
            children: "'items-center justify-between'"
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
            children: "'HEADER'"
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
            children: ": right_drawer."
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
              color: "#C678DD"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ui."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "right_drawer"
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
            children: "fixed"
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
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'background-color: #ebf1fa'"
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
            children: "'bordered'"
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
            children: " right_drawer:"
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
            children: "'RIGHT DRAWER'"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# footer"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
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
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'background-color: #3874c8'"
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
            children: "'FOOTER'"
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
            children: "()"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This is just scratching the surface of what NiceGUI can do but should be enough to understand the capabilities of NIceGUI. Next, you can add your Python functions and link them to buttons and input fields."
    }), "\n", createVNode(_components.h2, {
      id: "why-some-will-probably-not-like-nicegui",
      children: "Why Some Will Probably Not Like NiceGUI"
    }), "\n", createVNode(_components.p, {
      children: "NiceGUI offers some advanced options to create a Python UI that is fast and can be customized the way you like, for some this will not be OK as they need to use CSS code and customize the UI and if you are not used to this it can be scary in beginning. That’s why they would prefer Streamlit as you just throw the code in there and STreamlit will take care of the rest. But if you want a performant Python app and options to customize it then NiceGUI is better."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: ["That’s the introduction to NiceGUI and some of the things it has to offer. You can check ", createVNode(_components.a, {
        href: "https://nicegui.io/documentation",
        children: "NiceGUI documentation"
      }), " if you want to understand all the options that NiceGUI has."]
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

const url = "src/content/posts/nicegui-get-started.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/nicegui-get-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/nicegui-get-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
