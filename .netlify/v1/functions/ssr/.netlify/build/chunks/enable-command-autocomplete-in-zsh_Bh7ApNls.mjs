import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-11-16T00:00:00.000Z",
  "title": "How to Enable Command Autocomplete in ZSH",
  "description": "Learn how to enable command to autocomplete in ZSH to be faster and make your life easier.",
  "image": "../../assets/images/23/11/zsh-enable-autocomplete.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["zsh"],
  "canonical": "https://www.bitdoze.com/enable-command-autocomplete-in-zsh/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-zsh",
    "text": "What is ZSH?"
  }, {
    "depth": 3,
    "slug": "key-features-of-zsh",
    "text": "Key Features of ZSH:"
  }, {
    "depth": 2,
    "slug": "enabling-command-autocomplete-in-zsh",
    "text": "Enabling Command Autocomplete in ZSH"
  }, {
    "depth": 2,
    "slug": "customizing-command-autocomplete-in-zsh",
    "text": "Customizing Command Autocomplete in ZSH"
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
    h3: "h3",
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
      children: "If you’re tired of manually typing out commands in your ZSH terminal, then you’ve come to the right place. In this article, we’ll show you how to enable command autocomplete in ZSH, making your life as a developer or power user much easier. With command autocomplete, you can save time and reduce typos by letting your shell suggest and complete commands for you. So let’s dive in and discover how to unleash the full potential of auto-completion in ZSH!"
    }), "\n", createVNode(_components.p, {
      children: "Especially if you are using a Mac device you would want to enable autocomplete to make your life easier."
    }), "\n", createVNode(_components.p, {
      children: ["For a nice Mac terminal you can also check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-wezterm-mac/",
        children: "Maximize Efficiency: Integrating Wezterm, Zoxide, and Tmux for the Perfect Mac Terminal"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-zsh",
      children: "What is ZSH?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ZSH"
        }), " stands for Z Shell."]
      }), "\n", createVNode(_components.li, {
        children: "It is an interactive shell program for Unix-like operating systems."
      }), "\n", createVNode(_components.li, {
        children: "ZSH is designed to be a powerful and efficient command-line interface (CLI) with enhanced features compared to the traditional Bourne shell (sh)."
      }), "\n", createVNode(_components.li, {
        children: "It provides various improvements over other shells, including advanced customization options, better auto-completion capabilities, and extensibility through plugins."
      }), "\n", createVNode(_components.li, {
        children: "ZSH offers a user-friendly and intuitive experience for both beginners and advanced users."
      }), "\n", createVNode(_components.li, {
        children: "ZSH comes by default in MacOS"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You can check the bellow ZSH articles if you like to see more ZSH customizations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/enable-syntax-highlighting-zsh//",
          children: "How to Enable Syntax Highlighting in Zsh"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/best-oh-my-zsh.plugins/",
          children: "Top 15 Oh My ZSH Plugins You Must Try"
        })
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can integrate ZSH Autocomplete with Zoxide for a productivity bust you just need to install zoxide as will work out of the box follow: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/zoxide/",
          children: "Zoxide: The Smarter Way to Navigate Your Terminal"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "key-features-of-zsh",
      children: "Key Features of ZSH:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Powerful Autocompletion"
          }), ": One of the standout features of ZSH is its comprehensive autocompletion system. It can complete commands, options, filenames, variables, and more with remarkable accuracy. This feature saves time by reducing typing effort."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Customization Options"
          }), ": ZSH allows extensive customization to personalize your shell environment according to your preferences. You can modify prompt appearances, define aliases or shortcuts for frequently used commands, and tweak various settings as per your needs."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Plugin Support"
          }), ": With plugin managers like Oh My Zsh or antigen, you can easily extend the functionality of ZSH by adding useful plugins created by the community. These plugins offer additional features such as syntax highlighting, git integration, improved directory navigation shortcuts, etc."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Advanced Tab Completion"
          }), ": Apart from basic command completion mentioned earlier in this section’s bullet points above; it also supports tab completion based on context-awareness within different programming languages like Python or Ruby codebases when configured properly."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Efficient Command Line Editing"
          }), ": The line editing capabilities in ZSH are highly versatile compared to other shells thanks to its Vi mode support which allows users familiar with Vim keybindings faster text manipulation within their terminal sessions without needing any external tools like GNU readline library-based Bash does require if one wants similar functionality there too!"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In summary:"
    }), "\n", createVNode(_components.p, {
      children: ["Z Shell (", createVNode(_components.strong, {
        children: "ZSH"
      }), ") is an interactive shell program designed to provide a powerful and efficient command-line interface. It offers advanced features such as comprehensive autocompletion, customization options, plugin support, advanced tab completion, and efficient command line editing. With ZSH, users can enhance their productivity and enjoy a more intuitive shell experience."]
    }), "\n", createVNode(_components.h2, {
      id: "enabling-command-autocomplete-in-zsh",
      children: "Enabling Command Autocomplete in ZSH"
    }), "\n", createVNode(_components.p, {
      children: "To enhance your command-line experience, you can enable command autocomplete in ZSH. This feature allows you to conveniently fill in commands and arguments by pressing the Tab key. Here’s how you can set it up:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Install Oh My Zsh and zsh-autosuggestions"
        }), ": Oh My Zsh is a popular framework for managing your ZSH configuration and plugins.", createVNode(_components.a, {
          href: "https://github.com/zsh-users/zsh-autosuggestions",
          children: "zsh-autosuggestions"
        }), " is the plugin that will help you have the autocomplete functionality in My Zsh or without."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Install them by running the following command."
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
            children: "#Installs OhMyZSH"
          })
        }), "\n", createVNode(_components.span, {
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#Installs zsh-autosuggestions plugin"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " https://github.com/zsh-users/zsh-autosuggestions"
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
            children: "/plugins/zsh-autosuggestions"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#Grabs the zsh-autosuggestions and adds it in .zsh"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " https://github.com/zsh-users/zsh-autosuggestions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zsh/zsh-autosuggestions"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can have autocomplete without Oh My Zsh but is better to have it installed to enhance it even more."
    }), "\n", createVNode(_components.ol, {
      start: "2",
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
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Enable Autocompletion Plugin"
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#for OhMyZSH"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " zsh-autosuggestions"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#For Default zsh"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Save and exit the file."
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
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test Autocomplete"
        }), ": Verify that autocompletion is working correctly by typing a partial command or argument and pressing Tab."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You can do an echo to see if second time you will have all the autocomplete."
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
      "data-language": "sh",
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
            children: " \"something\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "With these steps completed, you should now have command autocomplete enabled in ZSH! Enjoy faster and more efficient command-line navigation with this handy feature."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Note: If you encounter any issues or prefer different customization options, refer to ", createVNode(_components.a, {
          href: "https://github.com/ohmyzsh/ohmyzsh",
          children: "Oh My Zsh documentation"
        }), " for further guidance."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "customizing-command-autocomplete-in-zsh",
      children: "Customizing Command Autocomplete in ZSH"
    }), "\n", createVNode(_components.p, {
      children: "Customizing the command autocomplete feature in ZSH can greatly enhance your productivity and make your terminal experience more efficient. Here are some tips on how to customize command autocomplete to suit your needs:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Aliases"
          }), " - ZSH allows you to create aliases for frequently used commands. This can be especially helpful when you have long or complex commands that you use often. To set up an alias, use the following syntax:"]
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
            children: createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                children: "alias name='command'"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Functions"
          }), " - In addition to aliases, you can also define functions for more advanced customization of command autocomplete. Functions allow you to create custom logic and combine multiple commands into a single function. Here’s an example:"]
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
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "myfunc"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "() {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#56B6C2"
                },
                children: "    echo"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " \"Hello World\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "    ls"
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Path Expansion"
          }), " - By default, ZSH expands file paths during autocompletion based on the current directory context. However, if you want to customize this behavior, you can modify the ", createVNode(_components.code, {
            children: "$fpath"
          }), " variable in your ", createVNode(_components.code, {
            children: ".zshrc"
          }), " file."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Completion Options"
          }), " - You can fine-tune various completion options by modifying the ", createVNode(_components.code, {
            children: "$compoptions"
          }), " array in your ", createVNode(_components.code, {
            children: ".zshrc"
          }), " file as per your preferences and requirements."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Plugins"
          }), " - There are several plugins available for customizing command autocomplete in ZSH such as ", createVNode(_components.code, {
            children: "oh-my-zsh"
          }), ", ", createVNode(_components.code, {
            children: "zplug"
          }), ", and ", createVNode(_components.code, {
            children: "antigen"
          }), ". These plugins provide additional functionality and customization options out of the box."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Themes"
          }), " - Changing themes is another way to customize the appearance of command autocomplete results in ZSH. You can choose from a wide range of themes provided by popular frameworks like oh-my-zsh or even create your own theme."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By exploring these customization options, you will be able to personalize and optimize the command autocomplete feature in ZSH according to your specific workflow and preferences."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, enabling command autocomplete in ZSH can greatly enhance your productivity and efficiency when working with the command line. By leveraging the power of autocompletion, you can save time by quickly accessing commands and options without having to type them out entirely."
    }), "\n", createVNode(_components.p, {
      children: "With the easy-to-follow steps outlined in this guide, you can configure ZSH to provide intelligent suggestions as you type, making it easier than ever to navigate your system and execute commands. Whether you are a seasoned developer or just starting with the command line, enabling command autocomplete is a valuable skill that will streamline your workflow."
    }), "\n", createVNode(_components.p, {
      children: "By taking advantage of ZSH’s robust autocompletion features, you’ll be able to speed up your work process, reduce errors caused by typos or misspellings, and ultimately become more proficient at using the terminal. So why wait? Start harnessing the power of command autocomplete in ZSH today and take your command line experience to new heights!"
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

const url = "src/content/posts/enable-command-autocomplete-in-zsh.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/enable-command-autocomplete-in-zsh.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/enable-command-autocomplete-in-zsh.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
