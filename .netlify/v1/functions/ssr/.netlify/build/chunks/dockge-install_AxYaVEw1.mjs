import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { i as imag3 } from './dockge-add_BwfTAtgV.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/dockge-main.CTeq4SaU.png","width":3584,"height":1608,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/01/dockge-main.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/dockge-container.7N17ZzNq.png","width":3578,"height":1558,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/01/dockge-container.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-01-09T00:00:00.000Z",
  "title": "Dockge Install - Portainer Alternative for Docker Management",
  "description": "Learn how Dockge can help you manage your Docker containers, stacks, and services with ease. Dockge is a web-based Docker manager that lets you self-host your own applications and services with minimal hassle.",
  "image": "../../assets/images/24/01/dockge-install.jpeg",
  "categories": ["tools"],
  "authors": ["Dragos"],
  "tags": ["dockge", "self-hosted"],
  "canonical": "https://www.bitdoze.com/dockge-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-dockge",
    "text": "What is Dockge?"
  }, {
    "depth": 2,
    "slug": "installing-dockge",
    "text": "Installing Dockge"
  }, {
    "depth": 3,
    "slug": "1-create-a-vps-server",
    "text": "1. Create a VPS server"
  }, {
    "depth": 3,
    "slug": "2-install-docker",
    "text": "2. Install Docker"
  }, {
    "depth": 3,
    "slug": "3-install-dockge",
    "text": "3. Install Dockge"
  }, {
    "depth": 3,
    "slug": "4-access-dockge",
    "text": "4. Access Dockge"
  }, {
    "depth": 3,
    "slug": "5-adding-admin-url-with-ssl-to-dockge-and-the-apps",
    "text": "5. Adding Admin URL with SSL to Dockge and the APPS"
  }, {
    "depth": 2,
    "slug": "final-notes",
    "text": "Final Notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Docker is a popular technology that allows you to run applications and services in isolated containers. Docker containers are lightweight, portable, and scalable, making them ideal for self-hosting your own applications and services."
    }), "\n", createVNode(_components.p, {
      children: "However, managing Docker containers can be challenging, especially if you have multiple containers, stacks, and services running on your server. You need to use the command line, edit configuration files, monitor the status and logs, and deal with networking and security issues."
    }), "\n", createVNode(_components.p, {
      children: "That’s where Dockge comes in. Dockge is a web-based Docker manager that simplifies the process of self-hosting your own applications and services. With Dockge, you can easily create, manage, and update your Docker containers, stacks, and services from a user-friendly interface."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will introduce Dockge, explain how it works, and show you how to install it on your server. We will also highlight some of the features and benefits of using Dockge for your self-hosting needs."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-dockge",
      children: "What is Dockge?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://github.com/louislam/dockge",
        children: "Dockge"
      }), " is a web-based Docker manager that lets you self-host your own applications and services with minimal hassle. Dockge is a Portainer alternative that is a lot simpler and can help you deploy docker-compose applications, it was developed by Louis the creator of ", createVNode(_components.a, {
        href: "https://github.com/louislam/uptime-kuma",
        children: "Uptime Kuma"
      }), " which is a well known tool that can help you monitor your applications and websites more on: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/uptime-kuma-tool/",
        children: "Uptime Kuma Self Hosted Monitoring Tool"
      })]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "Dockge UI"
    }), "\n", createVNode(_components.p, {
      children: "Dockge, you can access everything you need on a single page, without switching between multiple tabs. Whether you want to create a new container, view the logs, edit the YAML file, use the terminal, or control the container, you can do it all from one place. Dockge integrates all the essential functions into a single interface, making Docker management easy and convenient."
    }), "\n", createVNode(_components.p, {
      children: "Dockge is also a powerful tool that helps you manage Docker Compose.yaml stacks with ease. You can create, edit, start, stop, restart, and delete Docker containers and services, all defined by your compose.yaml files. Dockge provides an interactive compose.yaml editor that lets you configure your stacks without hassle. You can also communicate with your containers and services in real time through the web terminal."
    }), "\n", createVNode(_components.p, {
      children: "Dockge lets you track the progress of your container operations, such as image pulls, in real time. Dockge has a sleek and stylish user interface that enhances your productivity and enjoyment. If you like Uptime Kuma’s elegant UI/UX, you will love Dockge’s interface too. Moreover, Dockge makes it easy to convert complex “docker run” commands into Compose.yaml configurations, keeping your Compose files safe and organized on your drive. You can access and manage them using standard Docker Compose commands, giving you full control over your configuration files."
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "Dockge Container"
    }), "\n", createVNode(_components.h2, {
      id: "installing-dockge",
      children: "Installing Dockge"
    }), "\n", createVNode(_components.p, {
      children: "In this section, we are going to see everything that needs to be done to have Dockge installed and running on a VPS server."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/ouyOyAqRDyI",
      label: "Dockge"
    }), "\n", createVNode(_components.h3, {
      id: "1-create-a-vps-server",
      children: "1. Create a VPS server"
    }), "\n", createVNode(_components.p, {
      children: ["You will need a VPS server where you can host your docker containers I am recommending ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/hetzner",
        children: "Hetzner"
      }), ", for more details check this ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/hetzner-cloud-review/",
        children: "Hetzner Review"
      }), " and you can check also: ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/digitalocean-vs-vultr-vs-hetzner/",
        children: "DigitalOcean vs Vultr vs Hetzner"
      })]
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.p, {
      children: ["Or use a ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/best-mini-pc-home-server/",
        children: "Mini PC as Home Server"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The VPS process is easy and you just need a Ubuntu server, Dockge is working on ARM and x86_64 also."
    }), "\n", createVNode(_components.h3, {
      id: "2-install-docker",
      children: "2. Install Docker"
    }), "\n", createVNode(_components.p, {
      children: "Now that you have your VPS created you will need to update it and have docker installed, the below will need to be done to have docker UP and running:"
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
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
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
        }), "\n", createVNode(_components.span, {
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
        }), "\n", createVNode(_components.span, {
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
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Everything is also explained in: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-docker-ubuntu-arm/",
        children: "Install Docker & Docker-compose for Ubuntu"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "3-install-dockge",
      children: "3. Install Dockge"
    }), "\n", createVNode(_components.p, {
      children: ["Installing Dockge is easy. Here are the steps they lay out on their ", createVNode(_components.a, {
        href: "https://github.com/louislam/dockge?l#basic",
        children: "GitHub Page"
      })]
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
            children: "# Create directories that store your stacks and stores Dockge's stack"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /opt/stacks"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /opt/dockge"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /opt/dockge"
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
            children: "# Download the compose.yaml"
          })
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
            children: " https://raw.githubusercontent.com/louislam/dockge/master/compose.yaml"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --output"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " compose.yaml"
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
            children: "# Start the server"
          })
        }), "\n", createVNode(_components.span, {
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The default port in the YAML file is 5001 but you can change it if you want with your port. Below is the YAML file:"
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
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"3.8\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: "  dockge"
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
            children: "louislam/dockge:1"
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
            children: "unless-stopped"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    ports"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Host Port : Container Port"
          })
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
            children: "5001:5001"
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
            children: "/var/run/docker.sock:/var/run/docker.sock"
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
            children: "./data:/app/data"
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
            children: "      # If you want to use private registries, you need to share the auth file with Dockge:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # - /root/.docker/:/root/.docker"
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
            children: "      # Stacks Directory"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # ⚠️ READ IT CAREFULLY. If you did it wrong, your data could end up writing into a WRONG PATH."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # ⚠️ 1. FULL path only. No relative path (MUST)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # ⚠️ 2. Left Stacks Path === Right Stacks Path (MUST)"
          })
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
            children: "/opt/stacks:/opt/stacks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    environment"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Tell Dockge where is your stacks directory"
          })
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
            children: "DOCKGE_STACKS_DIR=/opt/stacks"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-access-dockge",
      children: "4. Access Dockge"
    }), "\n", createVNode(_components.p, {
      children: "To access the dockge installation and create your first user you will need to use the server IP and the port(5001 by default) in the compose.yaml file. First, you will be prompted to create your first user. After you can go and start deploying docker compose apps."
    }), "\n", createVNode($$Picture, {
      src: imag3,
      alt: "Dockge Add Compose"
    }), "\n", createVNode(_components.h3, {
      id: "5-adding-admin-url-with-ssl-to-dockge-and-the-apps",
      children: "5. Adding Admin URL with SSL to Dockge and the APPS"
    }), "\n", createVNode(_components.p, {
      children: ["If this is an internet-facing server and the APPs hosted on it will be internet facing then you will need to add a container that is handling the reverse proxy to your containers you can do that with CloudFlare tunnels or you can use the ", createVNode(_components.a, {
        href: "https://nginxproxymanager.com/",
        children: "nginx-proxy-manager"
      }), "\r\nIn the video we will see how this can be done with CloudFlare Tunnels."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can use also Traefik as a reverse proxy for your apps. I have created a full tutorial with Dockge install also to manage your containers on: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "final-notes",
      children: "Final Notes"
    }), "\n", createVNode(_components.p, {
      children: "I have only started to use Dockge and I really like it, it allows me to have also an UI to my docker compose apps. I will use it starting now and create some tutorials that will help deploy verious apps with it."
    }), "\n", createVNode(_components.p, {
      children: "Dockge is a powerful and user-friendly tool that simplifies Docker management, making it an excellent alternative to Portainer for many users. Its intuitive interface and integrated features make it easier to manage your Docker containers, especially for those who prefer working with docker-compose files."
    }), "\n", createVNode(_components.p, {
      children: ["As you explore Dockge and start deploying various applications, you might be interested in discovering more Docker containers that can enhance your self-hosted setup. For a comprehensive list of useful Docker containers for your home server or personal projects, check out our guide on ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource can provide you with ideas for new services to deploy and manage using Dockge, helping you make the most of your Docker environment."]
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

const url = "src/content/posts/dockge-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/dockge-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/dockge-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
