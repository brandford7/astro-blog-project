import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-10-10T00:00:00.000Z",
  "title": "Maximize Efficiency: Integrating Wezterm, Zoxide, and Tmux for the Perfect Mac Terminal",
  "description": "Learn how to create a powerful and visually stunning terminal setup using Wezterm on Mac. This comprehensive guide covers installation, configuration, and integration with essential tools like Powerlevel10k, zsh plugins, and tmux for maximum productivity.",
  "image": "../../assets/images/24/10/wezterm-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["zoxide", "tmux", "wezterm"],
  "canonical": "https://www.bitdoze.com/install-wezterm-mac/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "install-and-configure-wezterm-on-mac",
    "text": "Install and configure Wezterm on Mac"
  }, {
    "depth": 3,
    "slug": "install-homebrew",
    "text": "Install homebrew"
  }, {
    "depth": 3,
    "slug": "install-wezterm",
    "text": "Install Wezterm"
  }, {
    "depth": 3,
    "slug": "install-git",
    "text": "Install Git"
  }, {
    "depth": 3,
    "slug": "install-meslo-nerd-font",
    "text": "Install Meslo Nerd Font"
  }, {
    "depth": 3,
    "slug": "setup-wezterm-config-file",
    "text": "Setup Wezterm Config File"
  }, {
    "depth": 4,
    "slug": "create-the-config-file",
    "text": "Create the Config File"
  }, {
    "depth": 4,
    "slug": "configure-wezterm",
    "text": "Configure Wezterm"
  }, {
    "depth": 3,
    "slug": "install-powerlevel10k-theme",
    "text": "Install powerlevel10k theme"
  }, {
    "depth": 3,
    "slug": "setup-zsh-autosuggestions-plugin",
    "text": "Setup zsh-autosuggestions plugin"
  }, {
    "depth": 3,
    "slug": "setup-zsh-syntax-highlighting",
    "text": "Setup zsh-syntax-highlighting"
  }, {
    "depth": 2,
    "slug": "enhance-wezterm-with-tmux-and-zoxide",
    "text": "Enhance Wezterm with tmux and zoxide"
  }, {
    "depth": 3,
    "slug": "what-is-tmux-and-how-can-it-help",
    "text": "What is tmux and how can it help"
  }, {
    "depth": 3,
    "slug": "what-is-zoxide-and-how-can-it-help",
    "text": "What is zoxide and how can it help"
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
    h4: "h4",
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
        href: "https://wezfurlong.org/wezterm/",
        children: "Wezterm"
      }), " is a modern, feature-rich terminal emulator that’s quickly gaining popularity among developers and power users. Developed by Wez Furlong and written in Rust, Wezterm offers a compelling blend of performance, customizability, and cross-platform compatibility."]
    }), "\n", createVNode(_components.p, {
      children: "Key features of Wezterm include:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "GPU Acceleration:"
          }), " Wezterm leverages your computer’s GPU for rendering, resulting in smooth scrolling and excellent performance, even with complex terminal outputs."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Lua Configuration:"
          }), " Unlike many terminal emulators that use static config files, Wezterm allows you to configure it using Lua scripts, providing immense flexibility and programmability."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Built-in Multiplexer:"
          }), " Similar to tmux, Wezterm has built-in multiplexing capabilities, allowing you to manage multiple terminal sessions within a single window."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Ligature Support:"
          }), " For those using programming fonts with ligatures, Wezterm renders them beautifully, enhancing code readability."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Cross-Platform:"
          }), " Whether you’re on macOS, Windows, or Linux, Wezterm provides a consistent experience across all major operating systems."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Rich Color Support:"
          }), " Wezterm supports 24-bit true color and offers a wide range of color schemes out of the box."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Image Support:"
          }), " You can display images directly in the terminal, which can be particularly useful for certain workflows or just for customization."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By combining these features with its modern, sleek interface, Wezterm offers a powerful alternative to traditional terminal emulators, making it an excellent choice for users looking to enhance their command-line experience."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool Mac Apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/mac/",
          children: "toolhunt.net mac apps section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "install-and-configure-wezterm-on-mac",
      children: "Install and configure Wezterm on Mac"
    }), "\n", createVNode(_components.p, {
      children: "In this section we are going to see all the things we need to do to have Wezterm configured on Mac with everything needed."
    }), "\n", createVNode(_components.h3, {
      id: "install-homebrew",
      children: "Install homebrew"
    }), "\n", createVNode(_components.p, {
      children: "Homebrew is a package manager for macOS that simplifies the installation of software on Apple’s operating system. It’s an essential tool for developers and power users, making it easy to install and manage various command-line tools and applications."
    }), "\n", createVNode(_components.p, {
      children: "To install Homebrew, open your terminal and run the following command:"
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
              color: "#61AFEF"
            },
            children: "/bin/bash"
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
            children: " https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command does the following:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["It uses ", createVNode(_components.code, {
          children: "curl"
        }), " to download the Homebrew installation script from GitHub."]
      }), "\n", createVNode(_components.li, {
        children: ["The ", createVNode(_components.code, {
          children: "-fsSL"
        }), " flags ensure a quiet, fail-fast download with automatic redirection."]
      }), "\n", createVNode(_components.li, {
        children: "The downloaded script is then piped directly to bash for execution."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After running this command, follow any on-screen prompts to complete the installation. You may need to enter your system password to grant the necessary permissions."
    }), "\n", createVNode(_components.p, {
      children: "Once Homebrew is installed, you can verify the installation by running:"
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
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This should display the version of Homebrew installed on your system."
    }), "\n", createVNode(_components.p, {
      children: "With Homebrew set up, you’re now ready to easily install Wezterm and other necessary components for your terminal setup."
    }), "\n", createVNode(_components.h3, {
      id: "install-wezterm",
      children: "Install Wezterm"
    }), "\n", createVNode(_components.p, {
      children: "Now that we have Homebrew installed, we can easily install Wezterm. Run the following command in your terminal:"
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
              color: "#D19A66"
            },
            children: " --cask"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " wezterm"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command uses Homebrew’s ", createVNode(_components.code, {
        children: "cask"
      }), " functionality, which is designed for installing macOS applications and large binaries. The ", createVNode(_components.code, {
        children: "--cask"
      }), " flag tells Homebrew to use the Cask version of the formula."]
    }), "\n", createVNode(_components.p, {
      children: "After the installation is complete, you can launch Wezterm from your Applications folder or by using Spotlight (Cmd + Space, then type “Wezterm”)."
    }), "\n", createVNode(_components.h3, {
      id: "install-git",
      children: "Install Git"
    }), "\n", createVNode(_components.p, {
      children: "Git is a distributed version control system that’s essential for many development workflows. While macOS comes with Git pre-installed, it’s often an older version. To ensure you have the latest version, let’s install Git using Homebrew:"
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
      children: "This command will install the latest version of Git available through Homebrew."
    }), "\n", createVNode(_components.p, {
      children: "After installation, you can verify the Git version by running:"
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
              color: "#61AFEF"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This should display the version of Git you just installed, which should be more recent than the one that came with your Mac."
    }), "\n", createVNode(_components.p, {
      children: "Installing Git through Homebrew also makes it easier to keep it updated in the future. You can update all Homebrew packages, including Git, with the command:"
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
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upgrade"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "With Wezterm and Git installed, you’re now ready to move on to the next steps in customizing your terminal environment."
    }), "\n", createVNode(_components.h3, {
      id: "install-meslo-nerd-font",
      children: "Install Meslo Nerd Font"
    }), "\n", createVNode(_components.p, {
      children: "Nerd Fonts are a collection of fonts that have been patched with a high number of glyphs (icons). They’re particularly useful for developers as they include many programming-related icons that can enhance your terminal and text editor experience."
    }), "\n", createVNode(_components.p, {
      children: "To install the Meslo Nerd Font using Homebrew, run the following command:"
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
            children: " font-meslo-lg-nerd-font"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command does the following:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "It uses Homebrew to install the Meslo LG Nerd Font."
      }), "\n", createVNode(_components.li, {
        children: "The font will be downloaded and installed in your system’s font directory."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After running this command, the font should be available for use in Wezterm and other applications on your Mac."
    }), "\n", createVNode(_components.p, {
      children: "To verify that the font was installed correctly, you can check your Font Book application or use it in an application that allows font selection."
    }), "\n", createVNode(_components.p, {
      children: "It’s worth noting that you may need to restart Wezterm or any other applications where you want to use this font after installation."
    }), "\n", createVNode(_components.p, {
      children: "The Meslo Nerd Font is an excellent choice for terminal use as it’s clear, easily readable, and includes a wide range of glyphs that can be useful in command-line interfaces and programming environments."
    }), "\n", createVNode(_components.p, {
      children: "In the next section, we’ll configure Wezterm to use this newly installed font."
    }), "\n", createVNode(_components.h3, {
      id: "setup-wezterm-config-file",
      children: "Setup Wezterm Config File"
    }), "\n", createVNode(_components.p, {
      children: "Wezterm uses a Lua configuration file to customize its behavior and appearance. Let’s create and configure this file."
    }), "\n", createVNode(_components.h4, {
      id: "create-the-config-file",
      children: "Create the Config File"
    }), "\n", createVNode(_components.p, {
      children: "First, we need to create the configuration file in the correct location. Run these commands in your terminal:"
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
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.wezterm.lua"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "vim"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.wezterm.lua"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "These commands do the following:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "touch"
        }), " creates an empty file named ", createVNode(_components.code, {
          children: ".wezterm.lua"
        }), " in your home directory."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "vim"
        }), " opens this file in the Vim text editor. If you’re not comfortable with Vim, you can use any text editor you prefer."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "configure-wezterm",
      children: "Configure Wezterm"
    }), "\n", createVNode(_components.p, {
      children: ["Now that we’ve created the file, let’s add some configuration. Copy and paste the following Lua code into your ", createVNode(_components.code, {
        children: ".wezterm.lua"
      }), " file:"]
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
      "data-language": "lua",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "-- Pull in the wezterm API"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "local"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " wezterm"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "require"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"wezterm\""
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
            children: "-- This will hold the configuration."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "local"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "wezterm"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "config_builder"
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
            children: "-- This is where you actually apply your config choices"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ".font = "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "wezterm"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "font"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"MesloLGS Nerd Font Mono\""
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
              color: "#E06C75"
            },
            children: "config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ".font_size = "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "19"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ".window_decorations = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"RESIZE\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ".window_background_opacity = "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ".macos_window_background_blur = "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "10"
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
            children: "-- my coolnight colorscheme:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "config"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ".colors = {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    foreground"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#CBE0F0\""
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
              color: "#E06C75"
            },
            children: "    background"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#011423\""
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
              color: "#E06C75"
            },
            children: "    cursor_bg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#47FF9C\""
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
              color: "#E06C75"
            },
            children: "    cursor_border"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#47FF9C\""
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
              color: "#E06C75"
            },
            children: "    cursor_fg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#011423\""
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
              color: "#E06C75"
            },
            children: "    selection_bg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#033259\""
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
              color: "#E06C75"
            },
            children: "    selection_fg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#CBE0F0\""
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
              color: "#E06C75"
            },
            children: "    ansi"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = { "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#214969\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#E52E2E\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#44FFB1\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#FFE073\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#0FC5ED\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#a277ff\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#24EAF7\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#24EAF7\" "
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    brights"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " = { "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#214969\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#E52E2E\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#44FFB1\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#FFE073\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#A277FF\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#a277ff\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#24EAF7\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"#24EAF7\" "
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
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
            children: "-- and finally, return the configuration to wezterm"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " config"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Let’s break down what this configuration does:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "It sets the font to the Meslo Nerd Font we just installed."
      }), "\n", createVNode(_components.li, {
        children: "Sets the font size to 19."
      }), "\n", createVNode(_components.li, {
        children: "Configures the window to be resizable."
      }), "\n", createVNode(_components.li, {
        children: "Sets the background opacity to 80% and adds a blur effect (MacOS only)."
      }), "\n", createVNode(_components.li, {
        children: "Defines a custom color scheme called “coolnight”."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "config.colors"
      }), " description:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "foreground = \"#CBE0F0\""
          }), ": This sets the default text color to a light blue-gray."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "background = \"#011423\""
          }), ": This sets the background color to a very dark blue, almost black."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "cursor_bg = \"#47FF9C\""
          }), ": This sets the background color of the cursor to a bright green."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "cursor_border = \"#47FF9C\""
          }), ": This sets the border color of the cursor to the same bright green."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "cursor_fg = \"#011423\""
          }), ": This sets the foreground color of the cursor (for block cursors) to the same dark blue as the background."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "selection_bg = \"#033259\""
          }), ": This sets the background color for selected text to a dark blue."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "selection_fg = \"#CBE0F0\""
          }), ": This sets the foreground color for selected text to the same light blue-gray as the default text."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "ansi = {...}"
          }), ": This array defines the colors for the first 8 ANSI color codes (0-7). These are used for basic color formatting in the terminal."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "brights = {...}"
          }), ": This array defines the colors for the bright versions of the ANSI color codes (8-15). These are often used for bold or highlighted text."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["In both ", createVNode(_components.code, {
        children: "ansi"
      }), " and ", createVNode(_components.code, {
        children: "brights"
      }), " arrays, the colors represent:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Black"
      }), "\n", createVNode(_components.li, {
        children: "Red"
      }), "\n", createVNode(_components.li, {
        children: "Green"
      }), "\n", createVNode(_components.li, {
        children: "Yellow"
      }), "\n", createVNode(_components.li, {
        children: "Blue"
      }), "\n", createVNode(_components.li, {
        children: "Magenta"
      }), "\n", createVNode(_components.li, {
        children: "Cyan"
      }), "\n", createVNode(_components.li, {
        children: "White"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This color scheme appears to be a custom “coolnight” theme, with a dark blue background and various bright, contrasting colors for text and highlights. It’s designed to be easy on the eyes while providing good contrast for readability."
    }), "\n", createVNode(_components.p, {
      children: "After saving this file and restarting Wezterm, you should see the changes take effect. You can further customize this configuration to your liking by adjusting colors, key bindings, and other settings as needed."
    }), "\n", createVNode(_components.p, {
      children: "Remember, Wezterm’s configuration is dynamic and in Lua, so you can add conditional logic, functions, and even pull in external data if you want to create a more complex setup."
    }), "\n", createVNode(_components.h3, {
      id: "install-powerlevel10k-theme",
      children: "Install powerlevel10k theme"
    }), "\n", createVNode(_components.p, {
      children: "Powerlevel10k is a highly customizable theme for Zsh that emphasizes speed, flexibility, and out-of-the-box experience. It’s designed to make your command line informative and visually appealing without sacrificing performance."
    }), "\n", createVNode(_components.p, {
      children: "To install Powerlevel10k using Homebrew, run the following commands:"
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
        children: [createVNode(_components.span, {
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
            children: " powerlevel10k"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"source $("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --prefix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ")/share/powerlevel10k/powerlevel10k.zsh-theme\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "~/.zshrc"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Let’s break down what these commands do:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The first command installs Powerlevel10k using Homebrew."
      }), "\n", createVNode(_components.li, {
        children: ["The second command adds a line to your ", createVNode(_components.code, {
          children: ".zshrc"
        }), " file that sources the Powerlevel10k theme. This ensures that the theme is loaded every time you start a new Zsh session."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After running these commands, you need to apply the changes to your current session:"
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
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.zshrc"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command reloads your Zsh configuration, applying the Powerlevel10k theme."
    }), "\n", createVNode(_components.p, {
      children: "When you first run this, you’ll likely be greeted with the Powerlevel10k configuration wizard. This interactive process allows you to customize various aspects of your prompt, including:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The style of the prompt"
      }), "\n", createVNode(_components.li, {
        children: "Which segments to display (git status, time, etc.)"
      }), "\n", createVNode(_components.li, {
        children: "Color scheme"
      }), "\n", createVNode(_components.li, {
        children: "Icons and glyphs"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Follow the on-screen instructions to set up Powerlevel10k according to your preferences. Don’t worry if you’re not sure about some options – you can always reconfigure later by running ", createVNode(_components.code, {
        children: "p10k configure"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Once configured, you’ll have a highly informative and visually appealing prompt that can show git status, execution time of commands, and much more, all while maintaining excellent performance."
    }), "\n", createVNode(_components.p, {
      children: ["Remember, you can always fine-tune your Powerlevel10k configuration by editing the ", createVNode(_components.code, {
        children: "~/.p10k.zsh"
      }), " file that was created during the configuration process."]
    }), "\n", createVNode(_components.h3, {
      id: "setup-zsh-autosuggestions-plugin",
      children: "Setup zsh-autosuggestions plugin"
    }), "\n", createVNode(_components.p, {
      children: "Zsh-autosuggestions is a powerful plugin that suggests commands as you type based on your command history and completions. It can significantly speed up your command-line workflow by reducing the amount of typing needed for frequently used commands."
    }), "\n", createVNode(_components.p, {
      children: ["For a more detailed guide on enabling command autocomplete in Zsh, check out this article: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/enable-command-autocomplete-in-zsh/",
        children: "Enable Command Autocomplete in Zsh"
      })]
    }), "\n", createVNode(_components.p, {
      children: "To install zsh-autosuggestions using Homebrew, run the following commands:"
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
        children: [createVNode(_components.span, {
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
            children: " zsh-autosuggestions"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"source $("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --prefix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ")/share/zsh-autosuggestions/zsh-autosuggestions.zsh\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "~/.zshrc"
          })]
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
            children: " ~/.zshrc"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Let’s break down these commands:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The first command installs the zsh-autosuggestions plugin using Homebrew."
      }), "\n", createVNode(_components.li, {
        children: ["The second command adds a line to your ", createVNode(_components.code, {
          children: ".zshrc"
        }), " file that sources the zsh-autosuggestions plugin. This ensures that the plugin is loaded every time you start a new Zsh session."]
      }), "\n", createVNode(_components.li, {
        children: "The third command reloads your Zsh configuration, applying the changes immediately."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After running these commands, you should see autosuggestions appear as you type in your terminal. The suggestions will be shown in a faded gray color. To accept a suggestion, you can typically press the right arrow key or End key."
    }), "\n", createVNode(_components.p, {
      children: ["You can customize the behavior of zsh-autosuggestions by adding configuration options to your ", createVNode(_components.code, {
        children: ".zshrc"
      }), " file. For example, you can change the color of the suggestions or modify the key bindings used to accept suggestions."]
    }), "\n", createVNode(_components.p, {
      children: "With zsh-autosuggestions set up, you’ll find that entering commands becomes faster and more efficient, especially for long or complex commands that you use frequently."
    }), "\n", createVNode(_components.h3, {
      id: "setup-zsh-syntax-highlighting",
      children: "Setup zsh-syntax-highlighting"
    }), "\n", createVNode(_components.p, {
      children: "Zsh-syntax-highlighting is a plugin that provides syntax highlighting for the shell zsh. It enables highlighting of commands while they are typed at a zsh prompt into an interactive terminal. This helps in catching syntax errors, missing quotes, and other common mistakes before executing a command."
    }), "\n", createVNode(_components.p, {
      children: ["For a more comprehensive guide on enabling syntax highlighting in Zsh, check out this article: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/enable-syntax-highlighting-zsh/",
        children: "Enable Syntax Highlighting in Zsh"
      })]
    }), "\n", createVNode(_components.p, {
      children: "To install zsh-syntax-highlighting using Homebrew, run the following commands:"
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
        children: [createVNode(_components.span, {
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
            children: " zsh-syntax-highlighting"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"source $("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --prefix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ")/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "~/.zshrc"
          })]
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
            children: " ~/.zshrc"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Let’s break down these commands:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The first command installs the zsh-syntax-highlighting plugin using Homebrew."
      }), "\n", createVNode(_components.li, {
        children: ["The second command adds a line to your ", createVNode(_components.code, {
          children: ".zshrc"
        }), " file that sources the zsh-syntax-highlighting plugin. This ensures that the plugin is loaded every time you start a new Zsh session."]
      }), "\n", createVNode(_components.li, {
        children: "The third command reloads your Zsh configuration, applying the changes immediately."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After running these commands, you should see syntax highlighting in your terminal as you type commands. Typically, correctly typed commands will appear in green, while errors or unknown commands will appear in red."
    }), "\n", createVNode(_components.p, {
      children: "Some key features of zsh-syntax-highlighting include:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Command highlighting: Valid commands are highlighted differently from invalid ones."
      }), "\n", createVNode(_components.li, {
        children: "Option highlighting: Valid options for commands are highlighted."
      }), "\n", createVNode(_components.li, {
        children: "Path highlighting: Existing file paths are underlined."
      }), "\n", createVNode(_components.li, {
        children: "Bracket matching: Brackets are highlighted in pairs."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can customize the colors and styles used by zsh-syntax-highlighting by adding configuration options to your ", createVNode(_components.code, {
        children: ".zshrc"
      }), " file. This allows you to tailor the appearance to your preferences or to match your terminal’s color scheme."]
    }), "\n", createVNode(_components.p, {
      children: "With zsh-syntax-highlighting set up, you’ll find it easier to spot and correct mistakes in your commands before executing them, leading to a more efficient and error-free command-line experience."
    }), "\n", createVNode(_components.h2, {
      id: "enhance-wezterm-with-tmux-and-zoxide",
      children: "Enhance Wezterm with tmux and zoxide"
    }), "\n", createVNode(_components.p, {
      children: "While Wezterm is already a powerful terminal emulator, we can further enhance its capabilities by integrating it with tmux for advanced session management and zoxide for smarter directory navigation."
    }), "\n", createVNode(_components.h3, {
      id: "what-is-tmux-and-how-can-it-help",
      children: "What is tmux and how can it help"
    }), "\n", createVNode(_components.p, {
      children: "Tmux (Terminal Multiplexer) is a powerful tool that allows you to create multiple terminal sessions within a single window. It’s particularly useful for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Managing multiple terminal sessions"
      }), "\n", createVNode(_components.li, {
        children: "Running long processes in the background"
      }), "\n", createVNode(_components.li, {
        children: "Sharing terminal sessions with other users"
      }), "\n", createVNode(_components.li, {
        children: "Preserving your terminal setup across system reboots"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["To learn more about tmux and its basic usage, check out this guide: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/tmux-basics/",
        children: "Tmux Basics"
      })]
    }), "\n", createVNode(_components.p, {
      children: "To install tmux using Homebrew, run:"
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
            children: " tmux"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["After installation, you can start a new tmux session by simply typing ", createVNode(_components.code, {
        children: "tmux"
      }), " in your terminal."]
    }), "\n", createVNode(_components.h3, {
      id: "what-is-zoxide-and-how-can-it-help",
      children: "What is zoxide and how can it help"
    }), "\n", createVNode(_components.p, {
      children: "Zoxide is a smarter cd command that helps you navigate your filesystem more efficiently. It remembers which directories you use most frequently, so you can “jump” to them in just a few keystrokes."
    }), "\n", createVNode(_components.p, {
      children: "Key features of zoxide include:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Faster navigation to frequently-used directories"
      }), "\n", createVNode(_components.li, {
        children: "Fuzzy matching for directory names"
      }), "\n", createVNode(_components.li, {
        children: "Integration with common shells and file managers"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For a detailed guide on using zoxide, refer to this article: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/zoxide/",
        children: "Zoxide Guide"
      })]
    }), "\n", createVNode(_components.p, {
      children: "To install zoxide using Homebrew, run:"
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
            children: " zoxide"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then, add the following line to your ", createVNode(_components.code, {
        children: "~/.zshrc"
      }), " file to initialize zoxide:"]
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
            children: "eval"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "zoxide"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " init zsh)\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["After restarting your shell or running ", createVNode(_components.code, {
        children: "source ~/.zshrc"
      }), ", you can start using zoxide. For example, use ", createVNode(_components.code, {
        children: "z"
      }), " instead of ", createVNode(_components.code, {
        children: "cd"
      }), " to navigate to directories."]
    }), "\n", createVNode(_components.p, {
      children: "By integrating tmux and zoxide with Wezterm, you’re creating a powerful, efficient terminal environment. Tmux allows you to manage complex workflows with multiple panes and windows, while zoxide speeds up your navigation between projects and directories. Together with Wezterm’s GPU acceleration and customizability, you’ll have a terminal setup that significantly boosts your productivity."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "By following this guide, you’ve not only set up a visually appealing terminal but also created a powerful development environment that can significantly improve your workflow efficiency."
    }), "\n", createVNode(_components.p, {
      children: "Remember, the beauty of this setup lies in its flexibility. Feel free to further customize your Wezterm configuration, explore additional zsh plugins, or tweak your Powerlevel10k settings to perfectly match your working style."
    }), "\n", createVNode(_components.p, {
      children: "As you become more comfortable with your new setup, you may find yourself discovering new ways to optimize your command-line experience. Embrace this process of continuous improvement – after all, one of the joys of being a developer is constantly refining our tools and workflows."
    }), "\n", createVNode(_components.p, {
      children: "With your new Wezterm setup, you’re well-equipped to tackle your development tasks with increased speed, clarity, and enjoyment. Happy coding!"
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

const url = "src/content/posts/install-wezterm-mac.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-wezterm-mac.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-wezterm-mac.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
