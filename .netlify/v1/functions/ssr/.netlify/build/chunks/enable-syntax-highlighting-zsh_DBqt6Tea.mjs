import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-11-16T01:00:00.000Z",
  "title": "How to Enable Syntax Highlighting in Zsh",
  "description": "Learn how to enable Syntax Highlighting in ZSH to enhance codding experience and make your life easier.",
  "image": "../../assets/images/23/11/enable-syntax-highlighting-zsh.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["zsh"],
  "canonical": "https://www.bitdoze.com/enable-syntax-highlighting-zsh/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-syntax-highlighting",
    "text": "What is Syntax Highlighting?"
  }, {
    "depth": 2,
    "slug": "enabling-syntax-highlighting-in-zsh-using-an-extension",
    "text": "Enabling Syntax Highlighting in Zsh Using An Extension"
  }, {
    "depth": 2,
    "slug": "enabling-syntax-highlighting-in-oh-my-zsh",
    "text": "Enabling Syntax Highlighting in Oh My ZSH"
  }, {
    "depth": 2,
    "slug": "customizing-syntax-highlighting-colors",
    "text": "Customizing Syntax Highlighting Colors"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
      children: "Are you tired of staring at a plain, monotonous terminal screen? Do you want to make your coding experience more visually appealing and efficient? Look no further! In this article, we will guide you through the process of enabling syntax highlighting in Zsh – a powerful shell with enhanced customization options. By the end, you’ll be able to effortlessly differentiate between keywords, variables, and commands in your code snippets. So let’s dive right in and unlock the full potential of your Zsh terminal!"
    }), "\n", createVNode(_components.p, {
      children: ["For a nice Mac terminal you can also check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-wezterm-mac/",
        children: "Maximize Efficiency: Integrating Wezterm, Zoxide, and Tmux for the Perfect Mac Terminal"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-syntax-highlighting",
      children: "What is Syntax Highlighting?"
    }), "\n", createVNode(_components.p, {
      children: "Syntax highlighting is a feature in text editors and terminal shells that helps developers visually distinguish different elements of code. It uses colors and formatting to make the code more readable and easier to understand."
    }), "\n", createVNode(_components.p, {
      children: "Here are some key points about syntax highlighting:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Improved Readability"
          }), ": Syntax highlighting makes it easier for programmers to identify various components of their code, such as keywords, variables, strings, comments, etc. By using different colors or styles for each element, it enhances readability and reduces eye strain."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Error Detection"
          }), ": Syntax highlighting can also help detect errors in the code by highlighting any syntax mistakes or missing elements. This allows developers to catch potential issues before running the program."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Language-Specific Support"
          }), ": Different programming languages have their own set of rules and syntax structures. Many text editors support language-specific syntax highlighting, meaning they automatically apply appropriate color schemes based on the chosen language."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Customization Options"
          }), ": Users often have the flexibility to customize the colors used for each syntactic element according to their personal preferences or specific requirements. This allows programmers to create an environment that suits their needs while maintaining readability."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["To enable syntax highlighting in Zsh (Z shell), you can use plugins like ", createVNode(_components.a, {
        href: "https://github.com/zsh-users/zsh-syntax-highlighting",
        children: "zsh-syntax-highlighting"
      }), ". This plugin provides advanced syntax coloring capabilities specifically designed for Zsh users. Once installed and configured correctly, your Zsh shell will display commands and arguments with distinct colors based on their types."]
    }), "\n", createVNode(_components.p, {
      children: "By enabling syntax highlighting in Zsh, you’ll not only enhance your coding experience but also make it easier to spot errors or inconsistencies within your command lines."
    }), "\n", createVNode(_components.p, {
      children: "You can check the bellow ZSH articles if you like to see more ZSH customizations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/enable-command-autocomplete-in-zsh/",
          children: "How to Enable Command Autocomplete in ZSH"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/best-oh-my-zsh.plugins/",
          children: "Top 15 Oh My ZSH Plugins You Must Try"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "enabling-syntax-highlighting-in-zsh-using-an-extension",
      children: "Enabling Syntax Highlighting in Zsh Using An Extension"
    }), "\n", createVNode(_components.p, {
      children: "To enhance your experience with the Zsh shell, enabling syntax highlighting can make it easier to read and understand your commands. Syntax highlighting adds color to different parts of your command line input, making it more visually appealing and helping you spot any errors or inconsistencies. Here’s how you can enable syntax highlighting in Zsh:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Install Git"
        }), ": You will need git to fetch the repo with the extension so you need to install it, in function if you are on Debian/Ubuntu or MacOS you can run the below commands:"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "MacOS:"
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Debian/Ubuntu:"
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clone zsh-syntax-highlighting"
        }), ":"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/zsh-users/zsh-syntax-highlighting.git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zsh/zsh-syntax-highlighting"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Add this syntax highlighting extension to the .zshrc"
        }), ": You need to add the extension into ", createVNode(_components.code, {
          children: ".zshrc"
        }), " so it will be loaded every time you start the terminal."]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ZDOTDIR"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":-"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$HOME"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/.zshrc"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Source Changes"
        }), ": To apply the changes made to ", createVNode(_components.code, {
          children: ".zshrc"
        }), ", either restart your terminal or run this command:"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zshrc"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "enabling-syntax-highlighting-in-oh-my-zsh",
      children: "Enabling Syntax Highlighting in Oh My ZSH"
    }), "\n", createVNode(_components.p, {
      children: "Oh My Zsh is a popular framework for managing your ZSH configuration and plugins. It’s recommended to use it to enhance your terminal."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Install Oh My Zsh"
        }), ":"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sh"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -c"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -fsSL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\""
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clone zsh-syntax-highlighting into plugins"
        }), ":"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/zsh-users/zsh-syntax-highlighting.git"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ZSH_CUSTOM"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":-~/."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "oh-my-zsh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "custom"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/plugins/zsh-syntax-highlighting"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Configure .zshrc"
        }), ": Once Oh My Zsh is installed, open your terminal’s configuration file ", createVNode(_components.code, {
          children: ".zshrc"
        }), " using a text editor of your choice:"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nano"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zshrc"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Enable Syntax Highlighting"
        }), ": In the ", createVNode(_components.code, {
          children: ".zshrc"
        }), " file, locate the line that begins with ", createVNode(_components.code, {
          children: "plugins=("
        }), ". Add ", createVNode(_components.code, {
          children: "git"
        }), " and ", createVNode(_components.code, {
          children: "zsh-autosuggestions"
        }), " to the list of plugins within parentheses like this:"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "plugins"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " zsh-syntax-highlighting"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Save and exit the file."
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Source Changes"
        }), ": To apply the changes made to ", createVNode(_components.code, {
          children: ".zshrc"
        }), ", either restart your terminal or run this command:"]
      }), "\n"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zshrc"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Syntax highlighting is now enabled in Zsh! You should start seeing colors applied to various elements of your commands when typing them into the terminal."
    }), "\n", createVNode(_components.p, {
      children: ["If you want further customization options for syntax highlighting, you can modify settings by editing the ", createVNode(_components.code, {
        children: ".zsrc"
      }), " file mentioned earlier. For example, you can change colors assigned to specific elements or adjust other visual aspects according to personal preference."]
    }), "\n", createVNode(_components.p, {
      children: "Keep in mind that syntax highlighting relies on having appropriate themes installed on your system; otherwise, default colors will be used instead."
    }), "\n", createVNode(_components.p, {
      children: "By enabling syntax highlighting in Zsh, working with complex commands becomes more convenient as important keywords are highlighted distinctly from other text elements within each command line input. This feature improves overall readability and helps prevent mistakes while writing code or executing powerful shell commands."
    }), "\n", createVNode(_components.p, {
      children: "Remember that this configuration applies specifically to Z Bash (ZSH) rather than other shells like Bash or Fish Shell where alternative methods may be required for achieving similar results"
    }), "\n", createVNode(_components.h2, {
      id: "customizing-syntax-highlighting-colors",
      children: "Customizing Syntax Highlighting Colors"
    }), "\n", createVNode(_components.p, {
      children: ["To customize the syntax highlighting colors in Zsh, you can modify the ", createVNode(_components.code, {
        children: "ZSH_HIGHLIGHT_STYLES"
      }), " variable in your Zsh configuration file. This allows you to define specific colors for different types of elements such as keywords, strings, variables, and more."]
    }), "\n", createVNode(_components.p, {
      children: "Here are the steps to customize syntax highlighting colors in Zsh:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Open your Zsh configuration file. You can typically find it at ", createVNode(_components.code, {
            children: "~/.zshrc"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Locate the section where ", createVNode(_components.code, {
            children: "ZSH_HIGHLIGHT_STYLES"
          }), " is defined or add it if it doesn’t already exist."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Modify the values of individual elements within ", createVNode(_components.code, {
            children: "ZSH_HIGHLIGHT_STYLES"
          }), ". Each element represents a different type of syntax highlight and has its own name."]
        }), "\n", createVNode(_components.p, {
          children: "For example:"
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
          "data-language": "shell",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#7F848E",
                  fontStyle: "italic"
                },
                children: "# Change color for keywords (e.g., if, else)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "ZSH_HIGHLIGHT_STYLES"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "["
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "keyword"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#56B6C2"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "'fg=blue,bold'"
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
                children: "# Change color for strings (e.g., \"Hello World\")"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "ZSH_HIGHLIGHT_STYLES"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "["
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "string"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#56B6C2"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "'fg=green'"
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
                children: "# Change color for variables (e.g., $HOME)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "ZSH_HIGHLIGHT_STYLES"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "["
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "variable"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#56B6C2"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "'fg=cyan'"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#56B6C2"
                },
                children: " ..."
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Save the changes to your configuration file."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Restart your terminal or run ", createVNode(_components.code, {
            children: "source ~/.zshrc"
          }), " to apply the new syntax highlighting colors immediately."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By customizing these values according to your preferences, you can create a personalized and visually appealing syntax highlighting scheme that suits your needs while working with Zsh."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " The above examples demonstrate how to change foreground color using ANSI escape codes (", createVNode(_components.code, {
          children: "fg=color"
        }), "). However, you can also modify other attributes like background color (", createVNode(_components.code, {
          children: "bg=color"
        }), ") or text formatting by adding additional arguments separated by commas."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, enabling syntax highlighting in Zsh is a simple and effective way to enhance your command-line experience. By following the step-by-step guide mentioned in this article, you can easily configure syntax highlighting and take advantage of its benefits."
    }), "\n", createVNode(_components.p, {
      children: "Syntax highlighting not only makes your code more readable but also helps identify errors and inconsistencies quickly. With Zsh’s extensive customization options, you have the flexibility to choose from various color schemes that suit your preferences."
    }), "\n", createVNode(_components.p, {
      children: "By enabling syntax highlighting in Zsh, you can improve productivity and reduce coding errors. So why wait? Start using this powerful feature today and elevate your command-line skills to the next level!"
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

const url = "src/content/posts/enable-syntax-highlighting-zsh.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/enable-syntax-highlighting-zsh.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/enable-syntax-highlighting-zsh.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
