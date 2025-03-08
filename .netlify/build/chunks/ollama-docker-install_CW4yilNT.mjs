import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/openwebui-pull-model.BDdMPqOY.png","width":4938,"height":2542,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/08/openwebui-pull-model.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/openweb-ui-use.CX1hBIC5.png","width":4444,"height":2580,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/08/openweb-ui-use.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-08-06T00:00:00.000Z",
  "title": "How to Setup Ollama with Open-Webui using Docker Compose",
  "description": "Learn how to Setup Ollama with Open-WebUI using Docker Compose and have your own local AI",
  "image": "../../assets/images/24/08/ollama-docker-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/ollama-docker-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-ollama",
    "text": "What is Ollama?"
  }, {
    "depth": 2,
    "slug": "what-is-open-webui",
    "text": "What is Open-Webui"
  }, {
    "depth": 2,
    "slug": "how-to-set-up-ollama-and-openwebui-with-docker-compose",
    "text": "How to Set up Ollama and openWebUI with Docker Compose"
  }, {
    "depth": 3,
    "slug": "1-prerequizites",
    "text": "1. Prerequizites"
  }, {
    "depth": 3,
    "slug": "2-docker-compose",
    "text": "2. Docker Compose"
  }, {
    "depth": 4,
    "slug": "cpu-only",
    "text": "CPU Only"
  }, {
    "depth": 4,
    "slug": "docker-compose-nvidia-gpu",
    "text": "Docker Compose NVIDIA GPU"
  }, {
    "depth": 4,
    "slug": "docker-compose-amd-gpu",
    "text": "Docker Compose AMD GPU"
  }, {
    "depth": 3,
    "slug": "3-start-the-docker-compose-file",
    "text": "3. Start the Docker Compose file"
  }, {
    "depth": 3,
    "slug": "4-access-the-open-webui",
    "text": "4. Access the Open WebUI"
  }, {
    "depth": 3,
    "slug": "5-pulling-a-model",
    "text": "5. Pulling a Model"
  }, {
    "depth": 3,
    "slug": "6-using-open-webui",
    "text": "6. Using Open-WebUI"
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
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In the rapidly evolving landscape of artificial intelligence and machine learning, tools that simplify the deployment and interaction with large language models (LLMs) are becoming increasingly valuable.\r\nTwo such tools that have gained significant attention are Ollama and Ollama-WebUI. Let’s dive into what these technologies are and how they can benefit developers, researchers, and AI enthusiasts."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-ollama",
      children: "What is Ollama?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://ollama.ai/",
        children: "Ollama"
      }), " is an open-source project that aims to make running and deploying large language models as simple and efficient as possible. It’s designed to run LLMs locally on your machine, providing a lightweight and user-friendly interface for interacting with various AI models."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Local Execution"
        }), ": Run AI models on your own hardware, ensuring privacy and control over your data."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Easy Installation"
        }), ": With a simple one-line installation process, getting started with Ollama is remarkably straightforward."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Model Management"
        }), ": Easily download, run, and manage different LLMs without complex setup procedures."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "API Integration"
        }), ": Ollama provides a RESTful API, allowing seamless integration with other applications and services."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cross-Platform Support"
        }), ": Available for macOS, Linux, and Windows, ensuring broad accessibility."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Resource Efficiency"
        }), ": Optimized to run efficiently on consumer-grade hardware, making AI accessible to a wider audience."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "One of the most significant advantages of Ollama is its ability to run models locally. This local execution not only ensures data privacy but also reduces latency, making it ideal for applications that require quick responses or handle sensitive information."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-open-webui",
      children: "What is Open-Webui"
    }), "\n", createVNode(_components.p, {
      children: ["While Ollama provides a powerful command-line interface, many users prefer a more visual and interactive experience. This is where ", createVNode(_components.a, {
        href: "https://openwebui.com/",
        children: "Open-Webui"
      }), " comes into play."]
    }), "\n", createVNode(_components.p, {
      children: "Open-Webui is a web-based graphical user interface designed specifically to work with Ollama. It provides a user-friendly front-end that allows users to interact with Ollama-managed models through a web browser. This interface bridges the gap between Ollama’s powerful backend capabilities and users who may not be comfortable with command-line interfaces."
    }), "\n", createVNode(_components.p, {
      children: "Key functionalities ofOpen-Webui include:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Model Selection"
        }), ": Easily switch between different LLMs available through Ollama."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Chat Interface"
        }), ": Engage in conversations with AI models in a familiar chat-like environment."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prompt Templates"
        }), ": Save and reuse common prompts to streamline interactions."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "History Management"
        }), ": Keep track of past conversations and easily reference or continue them."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Export Options"
        }), ": Save conversations or generated content in various formats for further use or analysis."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-set-up-ollama-and-openwebui-with-docker-compose",
      children: "How to Set up Ollama and openWebUI with Docker Compose"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/FHTYrMtLkmQ",
      label: "How to Setup Ollama with Open-Webui using Docker Compose"
    }), "\n", createVNode(_components.p, {
      children: "In this section we are going to see how we are going to set up Ollama and Open-Webui."
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequizites",
      children: "1. Prerequizites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host Ollama, you can use one from ", createVNode(_components.a, {
          href: "https://go.bitdoze.com/hetzner",
          children: "Hetzner"
        }), " You can use a VPS to have ollama installed but performances will not be that good. In our test we are using a 8 CPUs 16 GB RAM and is bearly moving. Best will be to have a GPU powered system or use a ", createVNode(_components.a, {
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
    }), "\n", createVNode(_components.h3, {
      id: "2-docker-compose",
      children: "2. Docker Compose"
    }), "\n", createVNode(_components.h4, {
      id: "cpu-only",
      children: "CPU Only"
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
      "data-language": "yml",
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
            children: "  openWebUI"
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
            children: "ghcr.io/open-webui/open-webui:main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    container_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "openwebui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "openwebui"
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
            children: "./open-webui-local:/app/backend/data"
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
            children: "\"traefik.enable=true\""
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
            children: "\"traefik.http.routers.openwebui.rule=Host(`openwebui.domain.com`)\""
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
            children: "\"traefik.http.routers.openwebui.entrypoints=https\""
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
            children: "\"traefik.http.services.openwebui.loadbalancer.server.port=8080\""
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      OLLAMA_BASE_URLS"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "http://ollama:11434"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  ollama"
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
            children: "ollama/ollama:latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    container_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ollama"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ollama"
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
            children: "./ollama-local:/root/.ollama"
          })]
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
      children: "This is adding the open-webui and adds it to traefik network, is not exposing any port to outside."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "traefik.enable=true: Enables Traefik for this service."
      }), "\n", createVNode(_components.li, {
        children: "traefik.http.routers.openwebui.rule=Host(openwebui.domain.com): Routes traffic to this service when the host matches openwebui.domain.com."
      }), "\n", createVNode(_components.li, {
        children: "traefik.http.routers.openwebui.entrypoints=https: Specifies that this service should be accessible over HTTPS."
      }), "\n", createVNode(_components.li, {
        children: "traefik.http.services.openwebui.loadbalancer.server.port=8080: Indicates that the service listens on port 8080 inside the container."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Ollama is also downloaded but is not exposing again no port."
    }), "\n", createVNode(_components.h4, {
      id: "docker-compose-nvidia-gpu",
      children: "Docker Compose NVIDIA GPU"
    }), "\n", createVNode(_components.p, {
      children: "Before we dive into the Docker Compose setup, it’s crucial to understand the importance of the NVIDIA Container Toolkit. This toolkit is essential for enabling GPU acceleration within Docker containers, allowing your AI models to run at peak performance."
    }), "\n", createVNode(_components.p, {
      children: "You install it like this:"
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
            children: " https://nvidia.github.io/libnvidia-container/gpgkey"
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
            children: " /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg"
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
              color: "#ABB2BF"
            },
            children: " && "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
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
              color: "#61AFEF"
            },
            children: "sed"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
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
            children: " /etc/apt/sources.list.d/nvidia-container-toolkit.list"
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
              color: "#D19A66"
            },
            children: " -y"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nvidia-container-toolkit"
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
            children: "# Configure NVIDIA Container Toolkit"
          })
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
            children: " nvidia-ctk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " runtime"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " configure"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --runtime=docker"
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
            children: " systemctl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " restart"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker"
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
            children: "# Test GPU integration"
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
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --gpus"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " all"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nvidia/cuda:11.5.2-base-ubuntu20.04"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nvidia-smi"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Compose File for Nvidia :"
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
      "data-language": "yml",
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
            children: "  openWebUI"
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
            children: "ghcr.io/open-webui/open-webui:main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    container_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "openwebui"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "openwebui"
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
            children: "./open-webui-local:/app/backend/data"
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
            children: "\"traefik.enable=true\""
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
            children: "\"traefik.http.routers.openwebui.rule=Host(`openwebui.my.bitdoze.com`)\""
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
            children: "\"traefik.http.routers.openwebui.entrypoints=https\""
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
            children: "\"traefik.http.services.openwebui.loadbalancer.server.port=8080\""
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      OLLAMA_BASE_URLS"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "http://ollama:11434"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  ollama"
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
            children: "ollama/ollama:latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    container_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ollama"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ollama"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    deploy"
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
            children: "      resources"
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
            children: "        reservations"
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
            children: "          devices"
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
            children: "            - "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "driver"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "nvidia"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "              capabilities"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"gpu\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "              count"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "all"
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
            children: "./ollama-local:/root/.ollama"
          })]
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
      children: "The most critical part of this setup for AI performance is the GPU configuration in the Ollama service:"
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
      "data-language": "yml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "deploy"
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
            children: "  resources"
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
            children: "    reservations"
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
            children: "      devices"
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
            children: "        - "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "driver"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "nvidia"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "          capabilities"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"gpu\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "          count"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "all"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This configuration ensures that Ollama has access to all available NVIDIA GPUs on your system. According to ", createVNode(_components.a, {
        href: "https://developer.nvidia.com/blog/nvidia-ampere-architecture-in-depth/",
        children: "NVIDIA’s benchmarks"
      }), ", GPU acceleration can provide up to 100x faster inference times compared to CPU-only setups for certain AI models."]
    }), "\n", createVNode(_components.h4, {
      id: "docker-compose-amd-gpu",
      children: "Docker Compose AMD GPU"
    }), "\n", createVNode(_components.p, {
      children: ["For users with AMD GPUs that support ", createVNode(_components.a, {
        href: "https://www.amd.com/en/products/software/rocm/ai.html",
        children: "ROCm"
      }), ", setting up Ollama and OpenWebUI using Docker Compose is a straightforward process. This configuration allows you to leverage the power of your AMD GPU for running large language models efficiently. Let’s explore how to set this up and the benefits it offers."]
    }), "\n", createVNode(_components.p, {
      children: "The only diffference here is to use the correct image:"
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
      "data-language": "yml",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ollama/ollama:rocm"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-start-the-docker-compose-file",
      children: "3. Start the Docker Compose file"
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
    }), "\n", createVNode(_components.h3, {
      id: "4-access-the-open-webui",
      children: "4. Access the Open WebUI"
    }), "\n", createVNode(_components.p, {
      children: "Now you can access the Open WebUI app, to do that you just need to use the domain you have set in the compose file. You will be promted to create a user and a password and you will do that.\r\nAfter you create the user and pasword you can alter the docker-compose file and update everything by adding :"
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
      "data-language": "yml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ENABLE_SIGNUP"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "false"
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
            children: "## run"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "docker compose up -d --force-recreate"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "5-pulling-a-model",
      children: "5. Pulling a Model"
    }), "\n", createVNode(_components.p, {
      children: "After we access the Open WebUI we will need to pul out a model and use it. In function of the server power you can choose the one best for you."
    }), "\n", createVNode(_components.p, {
      children: "Ollama offers several language models (LLMs) with fewer than 3 billion parameters. Here is a list of notable models available through Ollama that meet this criterion:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Phi-3"
          }), ": A 3B model by Microsoft, known for its strong reasoning and language understanding capabilities."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Gemma2"
          }), ": Google Gemma 2 is a high-performing and efficient model thathas 2B size"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "CodeGemma"
          }), ": This model is available in sizes of 2B and 7B, designed for various coding tasks including code completion and generation."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "DeepSeek Coder"
          }), ": A coding model with a size of 1B, trained on a vast dataset of code and natural language tokens."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "TinyLlama"
          }), ": Specifically, TinyLlama-1.1B is a lightweight model that offers decent performance for small-scale applications."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "StableLM"
          }), ": The StableLM series includes models like StableLM-Zephyr-3B, which is optimized for multilingual tasks and is lightweight enough to run on less powerful hardware."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Dolphin"
          }), ": The Dolphin model has a variant that operates at 2.8B, focusing on coding tasks."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Qwen2"
          }), ": This series includes models with sizes of 0.5B and 1.5B, suitable for various applications."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These models are particularly advantageous for users with limited computational resources, allowing for effective use in coding, reasoning, and general language tasks."
    }), "\n", createVNode(_components.p, {
      children: ["To do that you go to ", createVNode(_components.strong, {
        children: "Admin Panel - Settings - Models - Pull a model from Ollama.com"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["For this small server ", createVNode(_components.code, {
        children: "qwen2:0.5b"
      }), " or ", createVNode(_components.code, {
        children: "gemma2:2b"
      }), " is the way to go."]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "openwebui pull model"
    }), "\n", createVNode(_components.h3, {
      id: "6-using-open-webui",
      children: "6. Using Open-WebUI"
    }), "\n", createVNode(_components.p, {
      children: "After you can go ahead and start using the Open-WebUI, you choose the model and start communicating."
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "openwebui start"
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Setting up Ollama and OpenWebUI with Docker Compose provides a robust, flexible, and high-performance environment for working with large language models. By following the steps outlined in this guide, you’ll be well-equipped to harness the power of AI in your projects, whether you’re a researcher, developer, or AI enthusiast."
    }), "\n", createVNode(_components.p, {
      children: "The combination of Ollama’s efficient model management and OpenWebUI’s user-friendly interface creates a powerful toolset for AI experimentation and development. This setup allows you to run sophisticated AI models locally, ensuring data privacy and reducing latency, while also providing an intuitive interface for interaction."
    }), "\n", createVNode(_components.p, {
      children: ["If you’re interested in exploring more Docker containers for your home server or self-hosted setup, including other AI tools and applications, check out our comprehensive guide on ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource provides a wealth of options for various applications and services you can run using Docker, helping you build a powerful and versatile self-hosted environment that can complement your Ollama and OpenWebUI installation and enhance your overall AI development ecosystem."]
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

const url = "src/content/posts/ollama-docker-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/ollama-docker-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/ollama-docker-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
