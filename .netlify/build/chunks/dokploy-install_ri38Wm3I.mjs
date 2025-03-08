import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import 'clsx';

const img1 = new Proxy({"src":"/_astro/dokploy-app.BUpWqoLD.png","width":2762,"height":2304,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/05/dokploy-app.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-06-11T00:00:00.000Z",
  "title": "Dokploy Install - Ditch Vercel, Heroku and Self-Host Your SaaS",
  "description": "Dokploy install and presentation an alternative to serverless like Vercel, Heroku, etc",
  "image": "../../assets/images/24/05/dokploy-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["dokploy", "self-hosted"],
  "canonical": "https://www.bitdoze.com/dokploy-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "dokploy-features",
    "text": "Dokploy Features"
  }, {
    "depth": 2,
    "slug": "install-dokploy",
    "text": "Install Dokploy"
  }, {
    "depth": 3,
    "slug": "setup-a-vps",
    "text": "Setup A VPS"
  }, {
    "depth": 3,
    "slug": "add-swap",
    "text": "Add SWAP"
  }, {
    "depth": 3,
    "slug": "install-dokploy-1",
    "text": "Install Dokploy"
  }, {
    "depth": 3,
    "slug": "point-your-domain-or-subdomain-to-dokploy",
    "text": "Point Your Domain or Subdomain to Dokploy"
  }, {
    "depth": 2,
    "slug": "start-deploying-apps",
    "text": "Start Deploying Apps"
  }, {
    "depth": 3,
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
        href: "https://dokploy.com/",
        children: "Dokploy"
      }), " is an open-source, self-hostable Platform as a Service (PaaS) that simplifies the deployment and management of applications and databases using Docker and Traefik. It serves as a free alternative to popular platforms like Vercel, Heroku, and Netlify, offering robust features for developers who prefer to manage their own infrastructure."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "dokploy-features",
      children: "Dokploy Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Applications"
        }), ": Deploy any type of application (Node.js, PHP, Python, Go, Ruby, etc.) with ease."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Databases"
        }), ": Create and manage databases with support for MySQL, PostgreSQL, MongoDB, MariaDB, Redis, and more."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Docker Management"
        }), ": Easily deploy and manage Docker containers."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Traefik Integration"
        }), ": Automatically integrates with Traefik for routing and load balancing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-time Monitoring"
        }), ": Monitor CPU, memory, storage, and network usage."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Database Backups"
        }), ": Automate backups with support for multiple storage destinations."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/dokploy-docker-compose-app/",
        children: "Dokploy Deploy Apps with Docker Compose"
      }), " if you want to see how you can deploy any application with Docker Compose in Dokploy."]
    }), "\n", createVNode(_components.h2, {
      id: "install-dokploy",
      children: "Install Dokploy"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/XohTt3lh9qg",
      label: "Dokploy Installation"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "setup-a-vps",
      children: "Setup A VPS"
    }), "\n", createVNode(_components.p, {
      children: ["To get started with Dokploy, you need a Virtual Private Server (VPS).\r\nIn the video, we go into detail about how you can do that on Hetzner. You can check this ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/hetzner-cloud-review/",
        children: "Hetzner Review"
      }), " for more details if you are not aware of Hetzner and what it can do."]
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
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
            children: "ssh"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username@your_vps_ip"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "add-swap",
      children: "Add SWAP"
    }), "\n", createVNode(_components.p, {
      children: "Adding swap space can help improve the performance of your VPS by providing additional virtual memory. Follow these steps to add a 2GB swap file:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fallocate"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /swapfile"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " chmod"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 600"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /swapfile"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " mkswap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /swapfile"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " swapon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /swapfile"
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
            children: " '/swapfile none swap sw 0 0'"
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
              color: "#D19A66"
            },
            children: " -a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/fstab"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "install-dokploy-1",
      children: "Install Dokploy"
    }), "\n", createVNode(_components.p, {
      children: "Once your VPS is set up and swap space is added, you can install Dokploy using the following command:"
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
            children: " -sSL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://dokploy.com/install.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sh"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command will download and run the Dokploy installation script, setting up Dokploy and its dependencies on your server."
    }), "\n", createVNode(_components.h3, {
      id: "point-your-domain-or-subdomain-to-dokploy",
      children: "Point Your Domain or Subdomain to Dokploy"
    }), "\n", createVNode(_components.p, {
      children: "To access your Dokploy instance via a custom domain or subdomain, you need to configure your DNS settings:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Log in to your DNS provider"
        }), ": Access the DNS management console of your domain registrar."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Create an A Record"
        }), ": Point your domain or subdomain to the IP address of your VPS."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For example, to point ", createVNode(_components.code, {
        children: "app.yourdomain.com"
      }), " to your VPS:"]
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Type: A"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Name: app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Value: your_vps_ip"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "TTL: 3600"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "start-deploying-apps",
      children: "Start Deploying Apps"
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "Dokploy App"
    }), "\n", createVNode(_components.p, {
      children: "With Dokploy installed and your domain configured, you can start deploying applications. Dokploy supports a wide range of applications and databases, making it easy to manage your projects from a single platform."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Access Dokploy Dashboard"
        }), ": Open your web browser and navigate to ", createVNode(_components.code, {
          children: "http://your-ip-from-your-vps:3000"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Create an Admin Account"
        }), ": Follow the on-screen instructions to set up your administrative account."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deploy Applications"
        }), ": Use the Dokploy dashboard to deploy and manage your applications and databases."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Dokploy offers a powerful and flexible solution for developers looking to self-host their applications. By leveraging Docker and Traefik, Dokploy simplifies the deployment process while providing robust features for application and database management. Whether you’re working on personal projects or managing large-scale applications, Dokploy provides the tools you need to streamline your deployment workflow."
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

const url = "src/content/posts/dokploy-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/dokploy-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/dokploy-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
