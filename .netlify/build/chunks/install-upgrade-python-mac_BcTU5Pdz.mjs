import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-26T00:00:00.000Z",
  "title": "How To Install, Upgrade Python and Run VENV on MAC",
  "description": "Learn how install, upgrade Python on MAC and use VENV for your projects with this easy steps.",
  "image": "../../assets/images/24/03/install-upgrade-python-mac.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["python"],
  "canonical": "https://www.bitdoze.com/install-upgrade-python-mac/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "install-brew-on-mac",
    "text": "Install Brew on MAC"
  }, {
    "depth": 2,
    "slug": "install-latest-python-on-mac-with-brew",
    "text": "Install Latest Python on MAC with BREW"
  }, {
    "depth": 2,
    "slug": "install-specific-version-of-python-on-mac-with-brew",
    "text": "Install Specific Version of Python on MAC with BREW"
  }, {
    "depth": 2,
    "slug": "upgrade-python-to-latest-version-on-mac",
    "text": "Upgrade Python to Latest Version on MAC"
  }, {
    "depth": 2,
    "slug": "run-python-in-venv-on-mac",
    "text": "Run Python in VENV on MAC"
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
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Virtual environments in Python are a crucial tool for managing project-specific dependencies and avoiding conflicts with system-wide installations. They allow developers to work with isolated Python environments, ensuring that each project has its own set of dependencies that do not interfere with others. This article will guide you through the process of installing, upgrading, and running Python virtual environments (venv) on macOS using Homebrew, a popular package manager for macOS."
    }), "\n", createVNode(_components.h2, {
      id: "install-brew-on-mac",
      children: "Install Brew on MAC"
    }), "\n", createVNode(_components.p, {
      children: "Homebrew is an open-source package manager for macOS that simplifies the installation of software on Apple’s operating system. To install Homebrew, open the Terminal app and enter the following command:"
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
      children: "This command downloads and runs the Homebrew installation script."
    }), "\n", createVNode(_components.h2, {
      id: "install-latest-python-on-mac-with-brew",
      children: "Install Latest Python on MAC with BREW"
    }), "\n", createVNode(_components.p, {
      children: "Once Homebrew is installed, you can easily install the latest version of Python. To do so, run the following command in your terminal:"
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
            children: " python"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command installs the latest stable version of Python, along with pip, setuptools, and wheel, which are tools for managing Python packages."
    }), "\n", createVNode(_components.p, {
      children: "Check the version that is in use:"
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
            children: "❯"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python3"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -V"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Python"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3.11.6"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "install-specific-version-of-python-on-mac-with-brew",
      children: "Install Specific Version of Python on MAC with BREW"
    }), "\n", createVNode(_components.p, {
      children: "If you need a specific version of Python, Homebrew can help you install it. First, search for the available Python versions using:"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " search"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Output:"
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
            children: "❯"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " search"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Formulae"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "app-engine-python"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          python-argcomplete"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         python-gdbm@3.12"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           python-packaging"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           python-tabulate"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            python-yq"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                  wxpython"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "boost-python3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              python-build"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "               python-idna"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                python-ply"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                 python-tk@3.10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             python@3.10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              pythran"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bpython"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                    python-chardet"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             python-kiwisolver"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          python-psutil"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              python-tk@3.11"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             python@3.11"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              jython"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cyclonedx-python"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           python-charset-normalizer"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  python-launcher"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            python-pyparsing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           python-tk@3.12"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             python@3.12"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              cython"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "ipython"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                    python-cycler"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              python-lsp-server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          python-pytz"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              python-tk@3.9"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              python@3.7"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "meson-python"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "               python-dateutil"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            python-lxml"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                python-requests"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            python-trove-classifiers"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   python@3.8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "micropython"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                python-flit-core"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           python-markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            python-setuptools"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        python-typing-extensions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   python@3.9"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "ptpython"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                   python-gdbm@3.11"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           python-matplotlib"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          python-setuptools-scm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      python-urllib3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             reorder-python-imports"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Then, install the desired version, for example, Python 3.10:"
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
            children: " python@3.10"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "After installation, you may need to link the Python version if it’s not already in your PATH:"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " link"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python@3.10"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Then you can use the version to run your python app with:"
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
            children: "❯"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  python3.10"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -V"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Python"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3.10.14"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "upgrade-python-to-latest-version-on-mac",
      children: "Upgrade Python to Latest Version on MAC"
    }), "\n", createVNode(_components.p, {
      children: "To upgrade Python to the latest version available in Homebrew, first update Homebrew itself:"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Then, upgrade Python:"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upgrade"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Output:"
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
            children: "❯"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python3"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -V"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Python"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3.12.2"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This will upgrade Python to the latest version provided by Homebrew."
    }), "\n", createVNode(_components.p, {
      children: "If you are interested in creating some Python projects you can check the below article to get started:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/nicegui-get-started/",
          children: "NiceGUI For Beginners: Build An UI to Python App in 5 Minutes"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/nicegui-pages/",
          children: "How To Add Multiple Pages to NiceGUI"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/docker-run-python/",
          children: "How To Run Any Python App in Docker with Docker Compose"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "run-python-in-venv-on-mac",
      children: "Run Python in VENV on MAC"
    }), "\n", createVNode(_components.p, {
      children: "To create a virtual environment in Python, navigate to your project directory and run the following command:"
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
            children: "python3"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " venv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " myenv"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Replace ", createVNode(_components.code, {
        children: "myenv"
      }), " with your preferred environment name. This command creates a new virtual environment directory ", createVNode(_components.code, {
        children: "myenv"
      }), " within your project[6]."]
    }), "\n", createVNode(_components.p, {
      children: "To activate the virtual environment, use:"
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
              color: "#56B6C2"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " myenv/bin/activate"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Once activated, your terminal prompt will change to indicate that you are working inside the virtual environment. You can now install packages locally within this environment without affecting the global Python installation."
    }), "\n", createVNode(_components.p, {
      children: "To deactivate the virtual environment and return to the global Python context, simply run:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "deactivate"
          })
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Managing Python environments with venv on macOS is straightforward, especially with the help of Homebrew. By following the steps outlined in this article, you can install and manage multiple versions of Python, create isolated environments for your projects, and ensure a clean and conflict-free development experience. Remember to activate the appropriate virtual environment before working on a project to keep dependencies organized and projects running smoothly."
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

const url = "src/content/posts/install-upgrade-python-mac.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-upgrade-python-mac.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-upgrade-python-mac.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
