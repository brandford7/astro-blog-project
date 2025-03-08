import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/nexterm-interface.BgwUvGXk.png","width":3000,"height":1522,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/09/nexterm-interface.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/nexterm-add-server.C4fCfDA9.png","width":1392,"height":886,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/09/nexterm-add-server.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-09-05T00:00:00.000Z",
  "title": "Combine NexTerm & Docker for Unmatched SSH, VNC & RDP Management",
  "description": "Learn how you can install NexTerm on docker with docker-compose and manage easier your SSH, RDP or VNC connections.",
  "image": "../../assets/images/24/09/nexterm-docker-install.png",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/nexterm-docker-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nexterm--features",
    "text": "NexTerm  Features"
  }, {
    "depth": 2,
    "slug": "install-nexterm-on-docker",
    "text": "Install NexTerm on Docker"
  }, {
    "depth": 3,
    "slug": "1-prerequizites",
    "text": "1. Prerequizites"
  }, {
    "depth": 3,
    "slug": "2-nexterm-docker-compose-file",
    "text": "2. Nexterm Docker Compose File"
  }, {
    "depth": 3,
    "slug": "3-start-the-container",
    "text": "3. Start the Container"
  }, {
    "depth": 3,
    "slug": "4-add-first-connections-to-nexterm",
    "text": "4. Add First Connections to NexTerm"
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
        href: "https://nexterm.dev/",
        children: "Nexterm"
      }), " is an innovative open-source server management tool designed to simplify the management of SSH, VNC, and RDP connections. It is currently in development and available for preview, offering a modern and user-friendly interface that enhances the server management experience. Nexterm aims to provide a seamless solution for administrators looking to manage multiple server connections efficiently, all while being built on Docker for easy deployment and scalability. The project is actively developed, and users are encouraged to provide feedback to help shape its future features and functionalities."]
    }), "\n", createVNode(_components.h2, {
      id: "nexterm--features",
      children: "NexTerm  Features"
    }), "\n", createVNode(_components.p, {
      children: "Nexterm boasts a variety of features that cater to the needs of system administrators:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Multi-Protocol Support"
          }), ": Nexterm supports SSH, VNC, and RDP protocols, allowing users to manage different types of connections from a single interface."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "User-Friendly Interface"
          }), ": The application is designed with an intuitive layout, organizing connections into folders and tabs for easy navigation."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Two-Factor Authentication"
          }), ": To enhance security, Nexterm includes two-factor authentication, ensuring that only authorized users can access server connections."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Session Management"
          }), ": Users can manage their sessions effectively, keeping track of active connections and their statuses."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Customizable Snippets"
          }), ": Nexterm allows users to create and manage command snippets, making it easier to execute frequently used commands quickly. (future planned)"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Active Development"
          }), ": The project is in its early stages, with plans for future enhancements, including integration with AI tools and improved synchronization features."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "install-nexterm-on-docker",
      children: "Install NexTerm on Docker"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/O4NmTxLXfrE",
      label: "Nexterm install docker"
    }), "\n", createVNode(_components.p, {
      children: "Setting up Nexterm on Docker is straightforward, allowing users to get started quickly. Below are the steps to install Nexterm using Docker."
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequizites",
      children: "1. Prerequizites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host NexTerm, you can use one from ", createVNode(_components.a, {
          href: "https://go.bitdoze.com/hetzner",
          children: "Hetzner"
        }), " You can use a VPS to have Memos installed but performances will not be that good. In our test we are using a 8 CPUs 16 GB RAM and is bearly moving or use a ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/best-mini-pc-home-server/",
          children: "Mini PC as Home Server"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Traefic with Docker set up, you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        }), " or ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-wildcard-certificate/",
          children: "Traefik FREE Let’s Encrypt Wildcard Certificate With CloudFlare Provider"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Docker and Dockge installed on your server, you can check the ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/dockge-install/",
          children: "Dockge - Portainer Alternative for Docker Management"
        }), " for the full tutorial."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-nexterm-docker-compose-file",
      children: "2. Nexterm Docker Compose File"
    }), "\n", createVNode(_components.p, {
      children: ["To deploy Nexterm, you will need a ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file. Here’s a sample configuration:"]
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "services"
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
              color: "#E06C75"
            },
            children: "  nexterm"
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
              color: "#E06C75"
            },
            children: "    restart"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "always"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    volumes"
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
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./nexterm:/app/data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "germannewsmaker/nexterm:1.0.1-OPEN-PREVIEW"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    networks"
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
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "traefik-net"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    labels"
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
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "traefik.enable=true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "traefik.http.routers.nexterm.rule=Host(`nexterm.domain.com`)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "traefik.http.routers.nexterm.entrypoints=https"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "traefik.http.services.nexterm.loadbalancer.server.port=6989"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "networks"
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
              color: "#E06C75"
            },
            children: "  traefik-net"
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
              color: "#E06C75"
            },
            children: "    external"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can check ", createVNode(_components.a, {
        href: "https://docs.nexterm.dev/preview",
        children: "NexTerm doc"
      }), " to see if something changed in the docker-compose file."]
    }), "\n", createVNode(_components.p, {
      children: "The provided Docker Compose configuration for Nexterm includes the following key elements:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Image"
          }), ": The Nexterm container uses the ", createVNode(_components.code, {
            children: "germannewsmaker/nexterm:1.0.1-OPEN-PREVIEW"
          }), " image, which is the current preview version of the Nexterm application."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Networks"
          }), ": The Nexterm container is connected to the ", createVNode(_components.code, {
            children: "traefik-net"
          }), " network, which is likely an external network set up for routing purposes."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Labels"
          }), ": The configuration includes several labels for Traefik, a popular reverse proxy and load balancer:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "traefik.enable=true"
            }), ": Enables Traefik for this service."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "traefik.http.routers.memos.rule=Host("
            }), "nexterm.domain.com", createVNode(_components.code, {
              children: ")"
            }), ": Specifies the domain name (", createVNode(_components.code, {
              children: "nexterm.domain.com"
            }), ") for which Traefik should route traffic to this service."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "traefik.http.routers.memos.entrypoints=https"
            }), ": Configures Traefik to use the HTTPS entry point for this service."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "traefik.http.services.memos.loadbalancer.server.port=6989"
            }), ": Specifies the port (6989) on which the Nexterm service is listening for incoming traffic."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In summary, this configuration sets up the Nexterm container to use the latest preview image, connects it to a Traefik-managed network, and configures Traefik to route traffic to the Nexterm service using the specified domain name and HTTPS protocol. The Nexterm service is expected to be listening on port 6989 inside the container."
    }), "\n", createVNode(_components.h3, {
      id: "3-start-the-container",
      children: "3. Start the Container"
    }), "\n", createVNode(_components.p, {
      children: ["Once you have your ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file ready, you can start the Nexterm container using the following command:"]
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
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " compose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " up"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command runs Nexterm in detached mode, allowing it to operate in the background."
    }), "\n", createVNode(_components.h3, {
      id: "4-add-first-connections-to-nexterm",
      children: "4. Add First Connections to NexTerm"
    }), "\n", createVNode(_components.p, {
      children: ["After starting the container, you can access the Nexterm web interface at ", createVNode(_components.code, {
        children: "https://nexterm.domain.com"
      }), ". From there, you can begin adding your first connections by entering the necessary details for each server you wish to manage.\r\nIn the beginning you will be prompted to create a user and a password that you will use for login. After you can go and add your SSH, RDP or VNC connections."]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "NexTerm UI"
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "NexTerm Add server"
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Combining Nexterm with Docker provides a powerful solution for managing server connections through SSH, VNC, and RDP. The ease of installation and the array of features make it an attractive option for system administrators looking for a modern management tool. As Nexterm continues to develop, it promises to evolve into a comprehensive platform that addresses the needs of users in diverse environments. By leveraging Docker, users can enjoy a scalable and efficient infrastructure that enhances their server management capabilities."
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

const url = "src/content/posts/nexterm-docker-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/nexterm-docker-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/nexterm-docker-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
