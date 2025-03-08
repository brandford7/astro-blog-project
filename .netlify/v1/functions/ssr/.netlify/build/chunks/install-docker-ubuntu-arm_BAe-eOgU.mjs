import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-09-28T05:00:00.000Z",
  "title": "How To Install Docker & Docker-compose for Ubuntu ARM Systems",
  "description": "Learn how to install docker and docker compose on Ubuntu ARM system to host your own apps",
  "image": "../../assets/images/23/10/install-docker-ubuntu-arm.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/install-docker-ubuntu-arm/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "steps-to-install-docker--docker-compose-for-ubuntu-arm-systems",
    "text": "Steps to Install Docker & Docker-compose for Ubuntu ARM Systems"
  }, {
    "depth": 3,
    "slug": "step-1-update-package-list",
    "text": "Step 1: Update Package List"
  }, {
    "depth": 3,
    "slug": "step-2-install-required-packages",
    "text": "Step 2: Install Required Packages"
  }, {
    "depth": 3,
    "slug": "step-3-create-keyring-directory",
    "text": "Step 3: Create Keyring Directory"
  }, {
    "depth": 3,
    "slug": "step-4-add-docker-gpg-key",
    "text": "Step 4: Add Docker GPG Key"
  }, {
    "depth": 3,
    "slug": "step-5-add-docker-repository",
    "text": "Step 5: Add Docker Repository"
  }, {
    "depth": 3,
    "slug": "step-6-update-package-list-again",
    "text": "Step 6: Update Package List Again"
  }, {
    "depth": 3,
    "slug": "step-7-install-docker-and-docker-compose",
    "text": "Step 7: Install Docker and Docker-Compose"
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
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Docker has revolutionized the way we think about software development and deployment. With Docker, you can package your application and its dependencies into a container, making it easier to move and manage. Docker-Compose further simplifies multi-container Docker applications. In this guide, we’ll walk you through how to install Docker and Docker-Compose on Ubuntu ARM systems."
    }), "\n", createVNode(_components.p, {
      children: "ARM and x86 are two major types of CPU architectures that have been ruling different domains of computing. ARM, which stands for Advanced RISC Machine, is known for its power efficiency and is predominantly used in mobile devices, IoT gadgets, and increasingly in servers. On the other hand, x86 architecture, developed by Intel, has long been the standard for desktop and server computing."
    }), "\n", createVNode(_components.p, {
      children: "The key difference lies in their design philosophy. ARM relies on a simpler set of instructions, allowing for lower power consumption, which is crucial for battery-powered devices. x86 architectures offer a broad set of instructions, optimized for high performance in complex computing tasks. Both have their pros and cons, but with ARM’s growing presence in the server and desktop markets, it’s becoming more important to understand how to work with both."
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/arm-vs-x86-vps-server-benchmarks/",
        children: "ARM vs x86: A Benchmark Comparison You Need to See"
      }), " article will provide more details about the benchmarks and where you can create an ARM VPS."]
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Get an ARM Server"
    }), "\n", createVNode(_components.p, {
      children: "Some other docker articles that can help you in your docker journey:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/add-users-to-docker-container/",
          children: "Add Users to a Docker Container"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/copy-multiple-files-in-one-layer-using-a-dockerfile/",
          children: "Copy Multiple Files in One Layer Using a Dockerfile"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/redirect-docker-logs-to-a-single-file/",
          children: "Redirect Docker Logs to a Single File"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/docker-env-vars/",
          children: "Environment Variables ARG and ENV in Docker"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "steps-to-install-docker--docker-compose-for-ubuntu-arm-systems",
      children: "Steps to Install Docker & Docker-compose for Ubuntu ARM Systems"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-1-update-package-list",
      children: "Step 1: Update Package List"
    }), "\n", createVNode(_components.p, {
      children: "Start by updating the package list to make sure you have the latest version of the packages."
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "sudo:"
        }), " Run the command as a superuser."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "apt-get:"
        }), " Ubuntu package management utility."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "update:"
        }), " Fetches the package list from the repository."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2-install-required-packages",
      children: "Step 2: Install Required Packages"
    }), "\n", createVNode(_components.p, {
      children: "Before installing Docker, you’ll need to install some essential packages."
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ca-certificates"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " curl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " gnupg"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lsb-release"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ca-certificates:"
        }), " For secure web communication."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "curl:"
        }), " Command-line tool for transferring data."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "gnupg:"
        }), " For key management."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "lsb-release:"
        }), " Provides info about the Linux distribution."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3-create-keyring-directory",
      children: "Step 3: Create Keyring Directory"
    }), "\n", createVNode(_components.p, {
      children: "Create a directory to store the Docker GPG key."
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/apt/keyrings"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "mkdir:"
        }), " Make directory command."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "“-p”:"
        }), " Create parent directories as needed."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4-add-docker-gpg-key",
      children: "Step 4: Add Docker GPG Key"
    }), "\n", createVNode(_components.p, {
      children: "Download and add the Docker GPG key to the keyring directory."
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
            children: " https://download.docker.com/linux/debian/gpg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " gpg"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --dearmor"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -o"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/apt/keyrings/docker.gpg"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-5-add-docker-repository",
      children: "Step 5: Add Docker Repository"
    }), "\n", createVNode(_components.p, {
      children: "Add the Docker repository to your sources list."
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  \"deb [arch=$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "dpkg"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --print-architecture"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ") signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  jammy stable\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tee"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/apt/sources.list.d/docker.list"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " > "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/dev/null"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "“dpkg —print-architecture”:"
        }), " Prints the system architecture."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "tee:"
        }), " Reads from standard input and writes to standard output and files."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-6-update-package-list-again",
      children: "Step 6: Update Package List Again"
    }), "\n", createVNode(_components.p, {
      children: "Run an update again to fetch packages from the newly added Docker repository."
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-7-install-docker-and-docker-compose",
      children: "Step 7: Install Docker and Docker-Compose"
    }), "\n", createVNode(_components.p, {
      children: "Finally, install Docker and Docker-Compose."
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-ce"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-ce-cli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " containerd.io"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-compose-plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-compose"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "docker-ce:"
        }), " Docker Community Edition."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "docker-ce-cli:"
        }), " Docker CLI."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "containerd.io:"
        }), " Container runtime."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "docker-compose-plugin:"
        }), " Compose CLI plugin."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "docker-compose:"
        }), " To define and run multi-container Docker applications."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In case you are interested to have a web panel that can help you manage your applications and be used as a reverse proxy you can check the bellow course:"
    }), "\n", createVNode($$Button, {
      link: "https://webdoze.net/courses/cloudpanel-setup/",
      text: "CloudPanel Setup Course"
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "And there you have it! You’ve successfully installed Docker and Docker-Compose on your Ubuntu ARM system. With these tools at your disposal, you’re now ready to begin containerizing applications and taking full advantage of what Docker has to offer. Happy Docking!"
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

const url = "src/content/posts/install-docker-ubuntu-arm.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-docker-ubuntu-arm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-docker-ubuntu-arm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
