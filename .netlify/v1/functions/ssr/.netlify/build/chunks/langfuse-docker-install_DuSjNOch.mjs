import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { i as imag1 } from './cloudflare-tunel-setup_dnqH4QSI.mjs';
import 'clsx';

const imag2 = new Proxy({"src":"/_astro/langfuse-ui.DKXjRkGU.png","width":4430,"height":2478,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/07/langfuse-ui.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-07-19T00:00:00.000Z",
  "title": "Langfuse Docker Install: Self Hosted LangSmith Alternative",
  "description": "Learn how you can install Langfuse with docker compose and Postgres DB and take advantage of the observability software for your AI apps.",
  "image": "../../assets/images/24/07/langfuse-docker-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/langfuse-docker-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "step-by-step-guide-to-installing-langfuse-on-docker",
    "text": "Step-by-Step Guide to Installing LangFuse on Docker"
  }, {
    "depth": 3,
    "slug": "1-prerequisites",
    "text": "1. Prerequisites"
  }, {
    "depth": 3,
    "slug": "2-langfuse-docker-compose-file",
    "text": "2. Langfuse Docker Compose File"
  }, {
    "depth": 3,
    "slug": "3-env-file-for-langfuse",
    "text": "3. .env File for LangFuse"
  }, {
    "depth": 3,
    "slug": "4-deploying-the-docker-compose-file-for-langfuse",
    "text": "4. Deploying the Docker Compose File for LangFuse"
  }, {
    "depth": 3,
    "slug": "5-implementing-ssl-with-cloudflare-tunnels-for-langfuse",
    "text": "5. Implementing SSL with CloudFlare Tunnels for Langfuse"
  }, {
    "depth": 3,
    "slug": "6-access-the-langfuse-ui",
    "text": "6. Access the Langfuse UI"
  }, {
    "depth": 3,
    "slug": "7-disable-signups",
    "text": "7. Disable Signups"
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
      children: [createVNode(_components.a, {
        href: "https://langfuse.com/",
        children: "Langfuse"
      }), " is an open-source LLM engineering platform that offers a comprehensive suite of tools for observability, metrics, evaluations, prompt management, and dataset handling. As a self-hosted alternative to LangSmith, Langfuse provides developers with powerful capabilities for managing and optimizing their language model applications."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Key features of Langfuse include:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Observability:"
          }), " Langfuse allows you to instrument your application and ingest traces, providing detailed insights into your LLM’s performance and behavior."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Analytics:"
          }), " Track important metrics such as cost, latency, and quality through customizable dashboards and data exports."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Prompt Management:"
          }), " Manage, version, and deploy prompts directly within the Langfuse platform, streamlining your workflow."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Evaluations:"
          }), " Collect and calculate scores for your LLM completions, including model-based evaluations, user feedback, and manual scoring."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Experimentation:"
          }), " Test and track application behavior before deploying new versions, using datasets to benchmark performance."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "LLM Playground:"
          }), " A built-in environment for testing and iterating on prompts."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Integrations:"
          }), " Langfuse offers seamless integration with popular LLM frameworks like LlamaIndex and Langchain."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For those looking to self-host Langfuse using Docker, the platform provides a straightforward deployment process. Langfuse can be deployed as a single Docker container, making it simple to set up and maintain."
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-guide-to-installing-langfuse-on-docker",
      children: "Step-by-Step Guide to Installing LangFuse on Docker"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/Gm4HBrK63AM",
      label: "How to Install langfuse with Docker Compose"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequisites",
      children: "1. Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host Langfusew, you can use one from ", createVNode(_components.a, {
          href: "https://go.bitdoze.com/hetzner",
          children: "Hetzner"
        }), " or use a ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/best-mini-pc-home-server/",
          children: "Mini PC as Home Server"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Docker and Dockge installed on your server, you can check the ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/dockge-install/",
          children: "Dockge - Portainer Alternative for Docker Management"
        }), " for the full tutorial."]
      }), "\n", createVNode(_components.li, {
        children: ["CloudFlare Tunnels are configured for your VPS server, the details are in the article here I deployed ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/dockge-install/",
          children: "Dockge"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["OR reverse proxy with CloudPanel you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/cloudpanel-setup-dockge/",
          children: "Setup CloudPanel As Reverse Proxy with Docker and Dockge"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can use also Traefik as a reverse proxy for your apps. I have created a full tutorial with Dockge install also to manage your containers on: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-langfuse-docker-compose-file",
      children: "2. Langfuse Docker Compose File"
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
            children: "\"3.9\""
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
            children: "  langfuse-db"
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
            children: "postgres:16-alpine"
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
            children: "LangFuse-DB"
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
            children: "langfuse-db"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    healthcheck"
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
            children: "      test"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"CMD-SHELL\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}\""
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
            children: "      interval"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5s"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      timeout"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5s"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      retries"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5"
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
            children: "./langfuse-db:/var/lib/postgresql/data:rw"
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
            children: "      POSTGRES_DB"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${POSTGRES_DB}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      POSTGRES_USER"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${POSTGRES_USER}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      POSTGRES_PASSWORD"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${POSTGRES_PASSWORD}"
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
            children: "on-failure:5"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  langfuse"
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
            children: "langfuse/langfuse:latest"
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
            children: "LangFuse"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5061:3000"
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
            children: "    depends_on"
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
            children: "langfuse-db"
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
            children: "      DATABASE_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@langfuse-db:5432/${POSTGRES_DB}?sslmode=disable"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      NEXTAUTH_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "https://longfuse.bitdoze.com"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      NEXTAUTH_SECRET"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${NEXTAUTH_SECRET}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      SALT"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${SALT}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      LANGFUSE_CSP_ENFORCE_HTTPS"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      LANGFUSE_ENABLE_EXPERIMENTAL_FEATURES"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      TELEMETRY_ENABLED"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      AUTH_DISABLE_SIGNUP"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${AUTH_DISABLE_SIGNUP}"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This Docker Compose file defines two services:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "langfuse-db"
          }), ": This service sets up a PostgreSQL database using the official PostgreSQL Alpine image. It includes:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "A healthcheck to ensure the database is ready before other services start"
          }), "\n", createVNode(_components.li, {
            children: "A volume mount to persist data"
          }), "\n", createVNode(_components.li, {
            children: "Environment variables for database configuration"
          }), "\n", createVNode(_components.li, {
            children: "A restart policy to handle failures"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "langfuse"
          }), ": This service runs the main LangFuse application. It:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Uses the latest LangFuse Docker image"
          }), "\n", createVNode(_components.li, {
            children: "Exposes port 5061 for web access"
          }), "\n", createVNode(_components.li, {
            children: "Depends on the langfuse-db service"
          }), "\n", createVNode(_components.li, {
            children: "Sets various environment variables for configuration"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Key points to note:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The use of environment variables ", createVNode(_components.code, {
          children: "${VARIABLE_NAME}"
        }), " allows for easy configuration without modifying the Docker Compose file directly."]
      }), "\n", createVNode(_components.li, {
        children: "The healthcheck in the database service ensures that the database is fully operational before LangFuse attempts to connect to it."
      }), "\n", createVNode(_components.li, {
        children: "The volume mount for the database ensures that your data persists even if the container is stopped or removed."
      }), "\n", createVNode(_components.li, {
        children: "The LANGFUSE_CSP_ENFORCE_HTTPS setting is set to true, enforcing HTTPS for enhanced security."
      }), "\n", createVNode(_components.li, {
        children: "Experimental features and telemetry are disabled by default."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-env-file-for-langfuse",
      children: "3. .env File for LangFuse"
    }), "\n", createVNode(_components.p, {
      children: ["To use the environment variables referenced in the Docker Compose file, you’ll need to create a ", createVNode(_components.code, {
        children: ".env"
      }), " file in the same directory. Here’s an example of what it should contain:"]
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
              color: "#E06C75"
            },
            children: "POSTGRES_USER"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'user'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "POSTGRES_PASSWORD"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'pass'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "POSTGRES_DB"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'langfuse'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "NEXTAUTH_SECRET"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "aOlY0UgIitolkrZUWoWyVRwuo2BpUPKB/"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "t2l2ufbXSw"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "SALT"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "VBQk4V98zZ8L8xwpvI696Ixv88D5QfrciLU4fx/"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "C4VQ"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "AUTH_DISABLE_SIGNUP"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "false"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Important security considerations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Replace ‘user’ and ‘pass’ with a strong username and password for your PostgreSQL database."
      }), "\n", createVNode(_components.li, {
        children: ["The NEXTAUTH_SECRET and SALT values should be unique, randomly generated strings. You can use a tool like ", createVNode(_components.a, {
          href: "https://www.openssl.org/",
          children: "OpenSSL"
        }), " to generate these securely."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For example, to generate a secure NEXTAUTH_SECRET, you could use:"
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
            children: "openssl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rand"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -base64"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 32"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Remember, never share these secrets or commit them to version control. Treat them with the same level of security as you would any other sensitive credentials."
    }), "\n", createVNode(_components.p, {
      children: ["You have all the variables that can be used in ", createVNode(_components.a, {
        href: "https://langfuse.com/docs/deployment/self-host",
        children: "Langfuse Self-Hosting Guide"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "4-deploying-the-docker-compose-file-for-langfuse",
      children: "4. Deploying the Docker Compose File for LangFuse"
    }), "\n", createVNode(_components.p, {
      children: "Once you have your Docker Compose and .env files set up, deploying LangFuse is straightforward. Simply run the following command in the directory containing your Docker Compose file:"
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
            children: "docker-compose"
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
      children: "This command will:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Pull the necessary Docker images if they’re not already present on your system."
      }), "\n", createVNode(_components.li, {
        children: "Create and start the containers defined in your Docker Compose file."
      }), "\n", createVNode(_components.li, {
        children: "Run the containers in detached mode (-d), allowing them to run in the background."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After running this command, you should see output indicating that the containers are being created and started. Once complete, you can verify that the containers are running with:"
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
            children: "docker-compose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ps"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will show you the status of your LangFuse and PostgreSQL containers."
    }), "\n", createVNode(_components.h3, {
      id: "5-implementing-ssl-with-cloudflare-tunnels-for-langfuse",
      children: "5. Implementing SSL with CloudFlare Tunnels for Langfuse"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.cloudflare.com/products/tunnel/",
        children: "CloudFlare Tunnels"
      }), " offer a innovative solution for securely connecting your web applications to the internet without the need for public IP addresses or opening inbound ports on your firewall. This service, part of CloudFlare’s suite of security and performance tools, provides a secure tunnel between your origin server and CloudFlare’s edge network."]
    }), "\n", createVNode(_components.p, {
      children: "CloudFlare Tunnels operate on a simple yet powerful principle:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Outbound Connection"
        }), ": Your server initiates an outbound connection to CloudFlare’s network using the CloudFlare daemon (cloudflared)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tunnel Creation"
        }), ": This connection establishes a secure tunnel between your origin and CloudFlare’s edge."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Traffic Routing"
        }), ": Incoming requests to your domain are routed through this tunnel to your origin server."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Response Delivery"
        }), ": Responses from your server are sent back through the tunnel and delivered to the user."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This process effectively eliminates the need for traditional port forwarding or firewall configuration, as all traffic flows through the secure tunnel."
    }), "\n", createVNode(_components.p, {
      children: ["Go in ", createVNode(_components.strong, {
        children: "Access - Tunnels"
      }), " and choose the tunnel you created and add a hostname that will link a domain or subdomain and the service and port."]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "Cloudflare Tunnel setup"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can also check ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/cloudpanel-setup-dockge/",
          children: "Setup CloudPanel as Reverse Proxy with Docker and Dokge"
        }), " to use CloudPanel as a reverse proxy to your Docker containers or ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "6-access-the-langfuse-ui",
      children: "6. Access the Langfuse UI"
    }), "\n", createVNode(_components.p, {
      children: "Now after you set the subdomain in Cloudflare tunnels you can go and access the aplication with the url. First you will be promted to create a username and a password and after you can access the apps."
    }), "\n", createVNode(_components.p, {
      children: "You can create your first project and start tracking the AI apps you have. You need to create an API key so you can use it with Langfuse, in the video you will find all the details as well as integrating this with Flowise AI."
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "Langfuse UI"
    }), "\n", createVNode(_components.h3, {
      id: "7-disable-signups",
      children: "7. Disable Signups"
    }), "\n", createVNode(_components.p, {
      children: ["By default anyone can sign up and create an account, after you create you account you can alter the ", createVNode(_components.code, {
        children: ".env"
      }), " and change the ", createVNode(_components.code, {
        children: "AUTH_DISABLE_SIGNUP=false"
      }), " to ", createVNode(_components.code, {
        children: "AUTH_DISABLE_SIGNUP=true"
      }), "\r\nthis will not allow for new accounts to be created via sign up."]
    }), "\n", createVNode(_components.p, {
      children: "You need to restart your container for this change to be activated:"
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
            children: " pull"
          })]
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
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, as AI continues to transform industries and drive innovation, the importance of robust observability tools cannot be overstated. LangFuse on Docker offers a powerful, flexible, and cost-effective solution for organizations looking to gain deeper insights into their AI models’ performance while maintaining control over their data and infrastructure."
    }), "\n", createVNode(_components.p, {
      children: "By implementing self-hosted observability solutions like LangFuse, AI developers and organizations can unlock new levels of performance, reliability, and innovation in their AI projects. The time to act is now – start exploring how LangFuse on Docker can revolutionize your AI development process and drive your projects to new heights of success."
    }), "\n", createVNode(_components.p, {
      children: ["If you’re interested in exploring more Docker containers for your home server or self-hosted setup, including other AI and productivity tools, check out our comprehensive guide on ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource provides a wealth of options for various applications and services you can run using Docker, helping you build a powerful and versatile self-hosted environment that can complement your LangFuse installation and enhance your overall AI development ecosystem."]
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

const url = "src/content/posts/langfuse-docker-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/langfuse-docker-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/langfuse-docker-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
