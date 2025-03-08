import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2022-10-07T00:00:00.000Z",
  "title": "How to Install Node.js using NVM on MacOS and Ubuntu",
  "description": "Tutorial of how Node.js can be installed on MacOS and Ubuntu to start your node projects.",
  "image": "../../assets/images/2210/nodejs_install.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["node", "tutorials"],
  "canonical": "https://www.bitdoze.com/install-nodejs-using-nvm-macos-ubuntu/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-nvm-installation",
    "text": "1. NVM Installation"
  }, {
    "depth": 3,
    "slug": "11-mac-nvm-installation",
    "text": "1.1 Mac NVM Installation"
  }, {
    "depth": 4,
    "slug": "install-homebrew",
    "text": "Install Homebrew"
  }, {
    "depth": 4,
    "slug": "install-nvm-with-homebrew-on-mac",
    "text": "Install NVM with Homebrew on Mac"
  }, {
    "depth": 2,
    "slug": "youtube-video-with-details",
    "text": "Youtube Video With Details"
  }, {
    "depth": 3,
    "slug": "12-ubuntu-nvm-installation",
    "text": "1.2 Ubuntu NVM Installation"
  }, {
    "depth": 2,
    "slug": "2-install-nodejs-with-nvm",
    "text": "2. Install Node.js with NVM"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Node.js can be installed in different ways, in this article we are going to leave NVM and see how it can be installed on our Mac or Ubuntu machines. M1 or M2 are also supported with these."
    }), "\n", createVNode(_components.h2, {
      id: "1-nvm-installation",
      children: "1. NVM Installation"
    }), "\n", createVNode(_components.h3, {
      id: "11-mac-nvm-installation",
      children: "1.1 Mac NVM Installation"
    }), "\n", createVNode(_components.h4, {
      id: "install-homebrew",
      children: "Install Homebrew"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://brew.sh/",
        children: "Homebrew"
      }), " is the package manager that will be used to install the node. If you are already using it you should skip this step."]
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
    }), "\n", createVNode(_components.h4, {
      id: "install-nvm-with-homebrew-on-mac",
      children: "Install NVM with Homebrew on Mac"
    }), "\n", createVNode(_components.p, {
      children: "To do this you just need to follow the below steps:"
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
            children: " nvm"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Then create a directory in the user home"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.nvm"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "When using the zsh shell, add the following config inside ~/.zshrc:"
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
              color: "#C678DD"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " NVM_DIR"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$HOME"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/.nvm\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[ "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/opt/homebrew/opt/nvm/nvm.sh\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ] && "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "\\."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/opt/homebrew/opt/nvm/nvm.sh\""
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  # This loads nvm"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[ "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ] && "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "\\."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "To activate the changes you either login logout or do:"
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
            children: " ~/.zshrc"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "At the end you can check to see the nvm version with the below command:"
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
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "youtube-video-with-details",
      children: "Youtube Video With Details"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/XXrZHWKTJfg",
      label: "How to Install Node.js using NVM on MacOS and Ubuntu"
    }), "\n", createVNode(_components.h3, {
      id: "12-ubuntu-nvm-installation",
      children: "1.2 Ubuntu NVM Installation"
    }), "\n", createVNode(_components.p, {
      children: "Homebrew can be used also on Ubuntu but it’s recommended to use the default repo. In this part, we are going to see how we can install NVM on Ubuntu to use it for the last part Node.JS install."
    }), "\n", createVNode(_components.p, {
      children: "Install NVM:"
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
            children: " curl"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://raw.githubusercontent.com/creationix/nvm/master/install.sh"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The script will do the rest and activate everything needed on the user profile.\r\nYou just need to source it to have the changes, you can login/logout or do:"
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
            children: " ~/.bashrc"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "At the end you can check to see the nvm version with the below command:"
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
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "2-install-nodejs-with-nvm",
      children: "2. Install Node.js with NVM"
    }), "\n", createVNode(_components.p, {
      children: "This part can be done on both Mac and Ubuntu as it uses the NVM to install node."
    }), "\n", createVNode(_components.p, {
      children: "There are multiple versions of node out there, in function of what your application is supporting you should install the right version, you can also install multiple versions and tell what to use.\r\nIn this case, we are going to go with LTS one which is 16."
    }), "\n", createVNode(_components.p, {
      children: "To install the current LTS Node.js version, execute:"
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
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --lts"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "See the version used:"
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
            children: "node"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You can install multiple nodejs versions and choose what to use."
    }), "\n", createVNode(_components.p, {
      children: "Install the second version:"
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
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 18"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Use a specific version:"
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
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " use"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 16"
          })]
        })
      })
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

const url = "src/content/posts/install-nodejs-using-nvm-macos-ubuntu.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-nodejs-using-nvm-macos-ubuntu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-nodejs-using-nvm-macos-ubuntu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
