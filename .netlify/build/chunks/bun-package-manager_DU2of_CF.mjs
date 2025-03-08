import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const img1 = new Proxy({"src":"/_astro/bun-speed.nIDzYicY.webp","width":2000,"height":988,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/bun-speed.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-02-07T01:00:00.000Z",
  "title": "Bun vs NPM, Yarn, PNPM, and Others",
  "description": "Learn what Bun is, how it differs from other package managers like NPM, Yarn, and PNPM, and how to install and use it in your Node.js projects.",
  "image": "../../assets/images/24/02/bun-npm.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["bun"],
  "canonical": "https://www.bitdoze.com/bun-package-manager/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-switch-away-from-npm-pnpm-or-yarn-to-bun",
    "text": "Why Switch Away from NPM, PNPM, or Yarn to Bun?"
  }, {
    "depth": 2,
    "slug": "how-to-install-bun",
    "text": "How to Install Bun"
  }, {
    "depth": 2,
    "slug": "bun-versus-nodejs-package-manager",
    "text": "Bun versus Node.js: Package Manager"
  }, {
    "depth": 2,
    "slug": "how-to-replace-npm-yarn-or-pnpm-with-bun",
    "text": "How to replace NPM, Yarn, or PNPM with Bun"
  }, {
    "depth": 2,
    "slug": "bun-install-in-action",
    "text": "Bun Install in Action"
  }, {
    "depth": 2,
    "slug": "bun-usage",
    "text": "Bun Usage"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Bun is a fresh entrant in the JavaScript ecosystem, designed to be a comprehensive JavaScript runtime and package manager. It aims to provide a faster and more efficient alternative to existing tools like NPM, Yarn, and PNPM. Built from scratch, Bun leverages modern technologies such as Zig and JavaScriptCore to optimize performance and offer a seamless development experience."
    }), "\n", createVNode(_components.p, {
      children: "Bun has several advantages over other package managers, such as:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Speed:"
        }), " Bun installs packages in parallel, using multiple threads and processes. It also caches the packages locally, so that subsequent installs are faster. Bun can install packages up to 10 times faster than NPM, Yarn, or PNPM, according to its benchmarks."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Simplicity:"
        }), " Bun has a simple and intuitive command-line interface, with only a few commands and options. It does not require any configuration files, lock files, or scripts. It also has a minimal and consistent output, with clear and helpful error messages."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reliability:"
        }), " Bun uses a flat and deterministic dependency tree, which means that every package has only one version and location in the node_modules folder. This avoids the problems of duplicate, conflicting, or missing packages that can occur with nested and non-deterministic dependency trees. Bun also verifies the integrity and authenticity of the packages, using checksums and signatures."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Bun is compatible with most Node.js projects that use NPM, Yarn, or pnpm. It can read and write the package.json file, and install the packages from the same sources. It can also work alongside other package managers, as long as they use the same dependency resolution strategy."
    }), "\n", createVNode(_components.h2, {
      id: "why-switch-away-from-npm-pnpm-or-yarn-to-bun",
      children: "Why Switch Away from NPM, PNPM, or Yarn to Bun?"
    }), "\n", createVNode(_components.p, {
      children: ["Switching from NPM, PNPM, or Yarn to Bun can be motivated by several factors, primarily revolving around performance. If you will test test bun you will see that the performance when installing packages can be ", createVNode(_components.strong, {
        children: "up to 30x"
      }), " faster"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "your node dependencies will install faster"
      }), "\n", createVNode(_components.li, {
        children: "assets will compile faster"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "However, it’s important to note that some developers express skepticism about the long-term viability of Bun, drawing parallels with the rise and fall of Yarn and questioning the necessity of Bun’s features."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/migrate-astro-bun/",
        children: "How To Migrate Astro on Bun in CloudFlare"
      }), " to find out more."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-install-bun",
      children: "How to Install Bun"
    }), "\n", createVNode(_components.p, {
      children: "Bun is easy to install and use, as it does not require any global installation or configuration. You can install Bun locally in your Node.js project."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Install Bun on MACOS"
      })
    }), "\n", createVNode(_components.p, {
      children: "On Mac devices can be installed with brew, you just add the source and the install it as below:"
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
            children: " tap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " oven-sh/bun"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " bun"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Install Bun on Linux"
      })
    }), "\n", createVNode(_components.p, {
      children: "Linux installation is easy you just run:"
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
            children: " https://bun.sh/install"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bash"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Linux users — The unzip package is required to install Bun. Use sudo apt install unzip to install unzip package. Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1. Use uname -r to check Kernel version."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Install Bun on Windows"
      })
    }), "\n", createVNode(_components.p, {
      children: "Bun provides a limited, experimental native build for Windows. So it is recommended to use WLS to have it running on Windows."
    }), "\n", createVNode(_components.p, {
      children: ["For the complete install doc check ", createVNode(_components.a, {
        href: "https://bun.sh/docs/installation",
        children: "bun.sh install"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "bun-versus-nodejs-package-manager",
      children: "Bun versus Node.js: Package Manager"
    }), "\n", createVNode(_components.p, {
      children: "Bun and Node.js differ significantly in their approach to package management. While Node.js relies on npm as its default package manager, Bun incorporates its own package manager. This integrated package manager is designed to be faster and more efficient than npm, leveraging a global module cache to eliminate redundant downloads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Bun Command"
          }), createVNode(_components.th, {
            children: "npm Command"
          }), createVNode(_components.th, {
            children: "Purpose"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bun install"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "npm install"
            })
          }), createVNode(_components.td, {
            children: "Install all dependencies from package.json"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bun add <package>"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "npm install <package>"
            })
          }), createVNode(_components.td, {
            children: "Add a new package to the project"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bun add <package> --dev"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "npm install <package> --dev"
            })
          }), createVNode(_components.td, {
            children: "Add a new development-only package"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bun remove <package>"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "npm uninstall <package>"
            })
          }), createVNode(_components.td, {
            children: "Remove a package from the project"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bun update <package>"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "npm update <package>"
            })
          }), createVNode(_components.td, {
            children: "Update a specific package to its latest version"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bun run <script>"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "npm run <script>"
            })
          }), createVNode(_components.td, {
            children: "Execute a specified script from package.json"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "bun"
      }), " and ", createVNode(_components.code, {
        children: "npm"
      }), " share similar commands for package management in JavaScript projects. Both install commands install dependencies listed in package.json. add and install commands add new packages, while add ", createVNode(_components.code, {
        children: "--dev"
      }), " and install ", createVNode(_components.code, {
        children: "--dev"
      }), " add development-only packages. remove and uninstall commands remove packages, and update commands update specific packages. Finally, run commands execute scripts from ", createVNode(_components.code, {
        children: "package.json"
      }), ". The key difference lies in the choice of package manager, with bun and npm serving as alternatives, each with its syntax for accomplishing these common development tasks."]
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "bun speed"
    }), "\n", createVNode(_components.h2, {
      id: "how-to-replace-npm-yarn-or-pnpm-with-bun",
      children: "How to replace NPM, Yarn, or PNPM with Bun"
    }), "\n", createVNode(_components.p, {
      children: ["To replace NPM, Yarn, or pnpm with Bun, you first need to remove the lock files of the existing package manager, as Bun uses its own lock file ", createVNode(_components.code, {
        children: "bun.lockb"
      }), ". Here are the commands to remove the lock files:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# If you were using NPM:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package-lock.json"
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
            children: "# If you were using pnpm:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pnpm-lock.yaml"
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
            children: "# If you were using Yarn:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " yarn.lock"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["After you just run ", createVNode(_components.code, {
        children: "bun install"
      }), " it will start installing everything."]
    }), "\n", createVNode(_components.h2, {
      id: "bun-install-in-action",
      children: "Bun Install in Action"
    }), "\n", createVNode(_components.p, {
      children: "I have done this exercise for my bitdoze.com blog that is using Astro, did the exact steps above and below are the results."
    }), "\n", createVNode(_components.p, {
      children: "I am using NPM which I think is the slowest and when :"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Install the packages with dependencies"
      })
    }), "\n", createVNode(_components.p, {
      children: "NPM:"
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
            children: "➜"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  bitdoze-astro-bkw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "time"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
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
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  13.22s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3.82s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 23%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cpu"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1:13.89"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " total"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
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
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " build"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  55.96s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3.41s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 126%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cpu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 46.776"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " total"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Bun:"
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
            children: "➜"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  bitdoze-astro-bkw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "time"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  10.83s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2.14s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 121%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cpu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 10.694"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " total"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " build"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  55.30s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3.34s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 126%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cpu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 46.181"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " total"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As can be seen above the install with bun took around ", createVNode(_components.strong, {
        children: "11 seconds"
      }), " and npm install took 73 seconds which makes bun 7 times faster in this case. The build process was the same."]
    }), "\n", createVNode(_components.h2, {
      id: "bun-usage",
      children: "Bun Usage"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Add a package using Bun"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Like with another package manager you can add packages with ", createVNode(_components.code, {
        children: "bun add"
      }), ":"]
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
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tailwindcss"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " autoprefixer"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " postcss"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Remove a package using Bun"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "bun remove"
      }), " will do the trick also here:"]
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
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tailwindcss"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Run your scripts using Bun"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "bun run"
      }), " will help you do this for instance for astro ", createVNode(_components.code, {
        children: "bun run dev"
      }), " will start astro and ", createVNode(_components.code, {
        children: "bun run build"
      }), " will build the app. Bun will check ", createVNode(_components.code, {
        children: "package.json"
      }), " to know what to do."]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/BsnCpESUEqM",
      label: "Bun Video Presentation"
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

const url = "src/content/posts/bun-package-manager.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/bun-package-manager.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/bun-package-manager.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
