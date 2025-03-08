import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/litellm-white.BFJBj8uB.png","width":4354,"height":1852,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/08/litellm-white.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-08-12T00:00:00.000Z",
  "title": "Install LiteLLM With Docker Compose and Simplify LLMs",
  "description": "Discover LiteLLM, the game-changing tool that simplifies LLM management, cuts costs, and boosts efficiency for developers and businesses alike.",
  "image": "../../assets/images/24/08/litellm-docker.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/litellm-docker-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-features-of-litellm",
    "text": "Key Features of LiteLLM"
  }, {
    "depth": 2,
    "slug": "how-litellm-can-help-you",
    "text": "How LiteLLM Can Help You"
  }, {
    "depth": 2,
    "slug": "litellm-deploy-options",
    "text": "LiteLLM Deploy Options"
  }, {
    "depth": 3,
    "slug": "deployment-without-a-database",
    "text": "Deployment Without a Database"
  }, {
    "depth": 3,
    "slug": "deployment-with-a-database",
    "text": "Deployment With a Database"
  }, {
    "depth": 2,
    "slug": "install-litellm-with-docker-compose",
    "text": "Install LiteLLM with Docker Compose"
  }, {
    "depth": 3,
    "slug": "prerequizites",
    "text": "Prerequizites"
  }, {
    "depth": 3,
    "slug": "install-litellm-with-docker-compose---no-database",
    "text": "Install LiteLLM with Docker Compose - NO Database"
  }, {
    "depth": 3,
    "slug": "install-litellm-with-docker-compose---with-database",
    "text": "Install LiteLLM with Docker Compose - With Database"
  }, {
    "depth": 3,
    "slug": "networks",
    "text": "Networks"
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
        href: "https://www.litellm.ai/",
        children: "LiteLLM"
      }), " is a tool designed to manage and interact with multiple large language models (LLMs) through a unified interface. It supports over 100 different LLMs, including those from HuggingFace, Bedrock, TogetherAI, and others, using the OpenAI format for API calls. This makes it a versatile solution for developers looking to integrate various LLMs into their applications."]
    }), "\n", createVNode(_components.h2, {
      id: "key-features-of-litellm",
      children: "Key Features of LiteLLM"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Unified Interface"
          }), ": LiteLLM offers a single, convenient interface to call over 100 different LLMs, such as those from HuggingFace, Bedrock, and TogetherAI, using the OpenAI API specification. This feature simplifies the integration and management of multiple models."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Cost Efficiency"
          }), ": The model is optimized to reduce computational costs, making it a more affordable option for NLP tasks. This also contributes to lowering the environmental impact associated with running large-scale models."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Flexibility and Simplicity"
          }), ": LiteLLM enables seamless transitions between various models with minimal code changes. Users can switch between models like GPT-3.5, O Lama, and Palm 2 effortlessly, which enhances the flexibility of application development."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Load Balancing"
          }), ": LiteLLM can handle a high volume of requests, supporting up to 1,500 requests per second during load tests. This capability ensures efficient processing and distribution of requests across multiple models and deployments."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Compatibility"
          }), ": It is compatible with several SDKs, including OpenAI, Anthropic, Mistral, LLamaIndex, and Langchain, allowing for diverse integration options across different platforms."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "LiteLLM Diagram"
    }), "\n", createVNode(_components.h2, {
      id: "how-litellm-can-help-you",
      children: "How LiteLLM Can Help You"
    }), "\n", createVNode(_components.p, {
      children: "LiteLLM can significantly benefit developers and organizations by providing a streamlined and efficient approach to working with LLMs. By offering a unified interface, it reduces the complexity involved in managing multiple models, thereby saving time and resources. Its cost-effective nature makes it an attractive option for businesses looking to leverage NLP capabilities without incurring high expenses. Additionally, the tool’s flexibility and compatibility with various SDKs and models make it a versatile solution for a wide range of applications, from chatbots to advanced data analysis."
    }), "\n", createVNode(_components.p, {
      children: "Overall, LiteLLM’s features and capabilities make it a powerful tool for enhancing productivity and reducing costs in NLP projects."
    }), "\n", createVNode(_components.h2, {
      id: "litellm-deploy-options",
      children: "LiteLLM Deploy Options"
    }), "\n", createVNode(_components.p, {
      children: "When deploying LiteLLM using Docker Compose, there are notable differences between deploying with and without a database."
    }), "\n", createVNode(_components.h3, {
      id: "deployment-without-a-database",
      children: "Deployment Without a Database"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Configuration Simplicity"
        }), ": Deploying LiteLLM without a database involves fewer components, making the setup process simpler. You primarily need to configure the application using a configuration file (", createVNode(_components.code, {
          children: "litellm_config.yaml"
        }), ") and run the Docker container with necessary environment variables and ports. We are going to see below."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Use Cases"
        }), ": This setup is suitable for scenarios where persistent data storage is not required, or the application can function with in-memory data or external APIs."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "deployment-with-a-database",
      children: "Deployment With a Database"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Database Requirement"
        }), ": When deploying with a database, you need to set up a Postgres database and provide a ", createVNode(_components.code, {
          children: "DATABASE_URL"
        }), " in the environment variables. This setup is essential for applications that require persistent data storage."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Additional Configuration"
        }), ": You must configure the database connection details in the environment variables and ensure that the database service is up and running before the application starts. This might involve using Docker Compose to define the startup order."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Persistence"
        }), ": Using a database allows for persistent data storage, which is crucial for applications that handle significant amounts of data or require data integrity over time. It is important to use Docker volumes to ensure data is not lost when containers are stopped or removed."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Complexity and Management"
        }), ": Deploying with a database adds complexity, as you need to manage database backups, scaling, and performance tuning. It is recommended to use separate containers for the database and application to maintain a clean separation of concerns and facilitate easier management."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In summary, deploying LiteLLM with a database provides the advantage of data persistence and is suitable for production environments, while deploying without a database is simpler and more suited for development or scenarios where persistent storage is not critical."
    }), "\n", createVNode(_components.h2, {
      id: "install-litellm-with-docker-compose",
      children: "Install LiteLLM with Docker Compose"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/j0IFFoCfihk",
      label: "LiteLLM Docker Install"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "prerequizites",
      children: "Prerequizites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host LiteLLM, you can use one from ", createVNode(_components.a, {
          href: "https://go.bitdoze.com/hetzner",
          children: "Hetzner"
        }), " You can use a VPS to have LiteLLM installed but performances will not be that good. In our test we are using a 8 CPUs 16 GB RAM and is bearly moving. Best will be to have a GPU powered system."]
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
    }), "\n", createVNode(_components.p, {
      children: "Below we are going to check both options without a database and with a database so you can use the one that you need."
    }), "\n", createVNode(_components.h3, {
      id: "install-litellm-with-docker-compose---no-database",
      children: "Install LiteLLM with Docker Compose - NO Database"
    }), "\n", createVNode(_components.p, {
      children: ["First let’s create the LiteLLM config file, you can do so by checking the list ", createVNode(_components.a, {
        href: "https://litellm.vercel.app/docs/providers",
        children: "here"
      }), "\r\n", createVNode(_components.code, {
        children: "litellm_config.yaml"
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "model_list"
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
            children: "  - "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "model_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "gpt-4o"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    litellm_params"
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
            children: "      model"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "gpt-4o"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  - "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "model_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "claude-3-5-sonnet"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    litellm_params"
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
            children: "      model"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "claude-3-5-sonnet-20240620"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Docker Compose File"
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
            children: "litellm"
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
            children: "  image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ghcr.io/berriai/litellm:main-latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  restart"
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
            children: "  command"
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
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"--config=/litellm_config.yaml\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"--detailed_debug\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  environment"
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
            children: "    LITELLM_MASTER_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${LITELLM_MASTER_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    OPENAI_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${OPENAI_API_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    ANTHROPIC_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${ANTHROPIC_API_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  volumes"
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
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./litellm_config.yaml:/litellm_config.yaml"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Image"
        }), ": Uses the Docker image ", createVNode(_components.code, {
          children: "ghcr.io/berriai/litellm:main-latest"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Restart Policy"
        }), ": Set to ", createVNode(_components.code, {
          children: "unless-stopped"
        }), ", ensuring automatic restarts unless manually stopped."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Command"
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "--config=/litellm_config.yaml"
            }), ": Specifies the configuration file."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "--detailed_debug"
            }), ": Enables verbose logging for troubleshooting."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Environment Variables"
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "LITELLM_MASTER_KEY"
            }), ": Master key for LiteLLM."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "OPENAI_API_KEY"
            }), ": API key for OpenAI."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "ANTHROPIC_API_KEY"
            }), ": API key for Anthropic."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Volumes"
        }), ": Mounts ", createVNode(_components.code, {
          children: "./litellm_config.yaml"
        }), " from the host to ", createVNode(_components.code, {
          children: "/litellm_config.yaml"
        }), " in the container for configuration access."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: ".env "
      }), "file"]
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
            children: "LITELLM_MASTER_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "sk-1234"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "OPENAI_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "openaiapikey"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ANTHROPIC_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <ANTHROPIC key>"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["For a complete file with Open WebUI. I have created the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/ollama-docker-install/",
        children: "OpenWebUI deploy with Ollama"
      }), " before and if you want to use Opem Web UI with LiteLLM below is the complete file:"]
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
            children: "traefik.http.routers.openwebui.rule=Host(`openwebui.domain.com`)"
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
            children: "traefik.http.routers.openwebui.entrypoints=https"
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
            children: "traefik.http.services.openwebui.loadbalancer.server.port=8080"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      OPENAI_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${LITELLM_MASTER_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      OPENAI_API_BASE_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "http://litellm:4000/v1"
          })]
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
            children: "  litellm"
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
            children: "ghcr.io/berriai/litellm:main-latest"
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
            children: "    command"
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
            children: "--config=/litellm_config.yaml"
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
            children: "--detailed_debug"
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
            children: "      LITELLM_MASTER_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${LITELLM_MASTER_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      OPENAI_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${OPENAI_API_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      ANTHROPIC_API_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${ANTHROPIC_API_KEY}"
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
            children: "./litellm_config.yaml:/litellm_config.yaml"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "OPENAI_API_BASE_URL is pointing to the container with Lite LLM"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "install-litellm-with-docker-compose---with-database",
      children: "Install LiteLLM with Docker Compose - With Database"
    }), "\n", createVNode(_components.p, {
      children: "To have access to advanced features and save details to database you can install LiteLLM with Postgress and have access to the UI also."
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
            children: "  litellm"
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
            children: "ghcr.io/berriai/litellm:main-latest"
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
            children: "litellm-db"
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
            children: "postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@litellm-db:5432/${POSTGRES_DB}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      LITELLM_MASTER_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${LITELLM_MASTER_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      UI_USERNAME"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${UI_USERNAME}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      UI_PASSWORD"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${UI_PASSWORD}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      STORE_MODEL_IN_DB"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"True\""
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
            children: "traefik.http.routers.litellm.rule=Host(`litellm.domain.com`)"
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
            children: "traefik.http.routers.litellm.entrypoints=https"
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
            children: "traefik.http.services.litellm.loadbalancer.server.port=4000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  litellm-db"
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
              color: "#98C379"
            },
            children: "CMD-SHELL"
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
              color: "#98C379"
            },
            children: "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"
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
            children: "./litellm-db:/var/lib/postgresql/data:rw"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "litellm"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Image"
            }), ": Uses the ", createVNode(_components.code, {
              children: "litellm"
            }), " image from GitHub Container Registry with the ", createVNode(_components.code, {
              children: "main-latest"
            }), " tag."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Networks"
            }), ": Connects the ", createVNode(_components.code, {
              children: "litellm"
            }), " service to the ", createVNode(_components.code, {
              children: "traefik-net"
            }), " network, allowing it to communicate with Traefik."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Restart Policy"
            }), ": Sets the restart policy to ", createVNode(_components.code, {
              children: "unless-stopped"
            }), ", meaning the container will always restart unless explicitly stopped."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Depends On"
            }), ": Specifies that ", createVNode(_components.code, {
              children: "litellm"
            }), " depends on the ", createVNode(_components.code, {
              children: "litellm-db"
            }), " service, ensuring the database is available before starting the application."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Environment Variables"
            }), ":\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "DATABASE_URL"
                }), ": Constructs the PostgreSQL connection string using environment variables for the user, password, and database name."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "LITELLM_MASTER_KEY"
                }), ": A security key used for the application."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "UI_USERNAME"
                }), " and ", createVNode(_components.code, {
                  children: "UI_PASSWORD"
                }), ": Credentials for accessing the application’s user interface."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "STORE_MODEL_IN_DB"
                }), ": A flag set to ", createVNode(_components.code, {
                  children: "\"True\""
                }), " to indicate that models should be stored in the database."]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Labels"
            }), " (for Traefik):\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "traefik.enable=true"
                }), ": Enables Traefik for the ", createVNode(_components.code, {
                  children: "litellm"
                }), " service."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "traefik.http.routers.litellm.rule=Host(litellm.domain.com)"
                }), ": Specifies the domain name for routing requests to ", createVNode(_components.code, {
                  children: "litellm"
                }), "."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "traefik.http.routers.litellm.entrypoints=https"
                }), ": Configures Traefik to use the HTTPS entry point for the ", createVNode(_components.code, {
                  children: "litellm"
                }), " service."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "traefik.http.services.litellm.loadbalancer.server.port=4000"
                }), ": Sets the port for the ", createVNode(_components.code, {
                  children: "litellm"
                }), " service to 4000."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "litellm-db"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Image"
            }), ": Uses the ", createVNode(_components.code, {
              children: "postgres:16-alpine"
            }), " image, which is a lightweight version of PostgreSQL based on Alpine Linux."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Networks"
            }), ": Connects the ", createVNode(_components.code, {
              children: "litellm-db"
            }), " service to the ", createVNode(_components.code, {
              children: "traefik-net"
            }), " network for communication."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Health Check"
            }), ":\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["Command: ", createVNode(_components.code, {
                  children: "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"
                }), " checks if the PostgreSQL server is ready to accept connections using the specified user and database."]
              }), "\n", createVNode(_components.li, {
                children: "Interval: Runs the health check every 5 seconds."
              }), "\n", createVNode(_components.li, {
                children: "Timeout: Sets a timeout of 5 seconds for the health check."
              }), "\n", createVNode(_components.li, {
                children: "Retries: Specifies that the health check should retry up to 5 times before marking the service as unhealthy."
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Volumes"
            }), ": Maps a local directory (", createVNode(_components.code, {
              children: "./litellm-db"
            }), ") to the PostgreSQL data directory (", createVNode(_components.code, {
              children: "/var/lib/postgresql/data"
            }), ") using read-write permissions. This ensures data persistence for the database."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Environment Variables"
            }), ":\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "POSTGRES_DB"
                }), ": Specifies the name of the database to create."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "POSTGRES_USER"
                }), ": Sets the username for the PostgreSQL server."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "POSTGRES_PASSWORD"
                }), ": Defines the password for the PostgreSQL user."]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Restart Policy"
            }), ": Sets the restart policy to ", createVNode(_components.code, {
              children: "on-failure:5"
            }), ", meaning the container will restart up to 5 times if it fails."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "networks",
      children: "Networks"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "traefik-net"
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Defines an external network named ", createVNode(_components.code, {
              children: "traefik-net"
            }), ", which is likely managed by the Traefik reverse proxy. This allows the ", createVNode(_components.code, {
              children: "litellm"
            }), " and ", createVNode(_components.code, {
              children: "litellm-db"
            }), " services to communicate with Traefik for routing and load balancing."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/traefik-proxy-docker/",
        children: "How to Use Traefik as A Reverse Proxy in Docker"
      }), " or ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/traefik-wildcard-certificate/",
        children: "Traefik FREE Let’s Encrypt Wildcard Certificate With CloudFlare Provider"
      }), " to see hwo to set up Traefik on your server."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: ".env"
      }), " file:\r\nBelow are the configs files for you env file, you can change what you don’t like:"]
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
            children: "LITELLM_MASTER_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "sk-1234"
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
            children: "litellm"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: "litellm"
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
            children: "litellm"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "UI_USERNAME"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "bitdoze"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "UI_PASSWORD"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "bitdoze"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "That’s how you can install LiteLLM and use it in your projects. With LiteLLM, you will significantly simplify the process of integrating and managing multiple language models in your applications."
    }), "\n", createVNode(_components.p, {
      children: "LiteLLM’s unified interface and support for over 100 different LLMs make it an invaluable tool for developers looking to leverage the power of various language models without the complexity of managing multiple APIs. Its cost efficiency, flexibility, and load balancing capabilities further enhance its value for both small-scale projects and large-scale deployments."
    }), "\n", createVNode(_components.p, {
      children: "By following this guide, you’ve set up a powerful infrastructure that can serve as the backbone for your AI-driven applications. Whether you’re building chatbots, content generation tools, or complex NLP systems, LiteLLM provides the flexibility and simplicity to streamline your development process."
    }), "\n", createVNode(_components.p, {
      children: ["For those interested in exploring more Docker containers to enhance your self-hosted setup or complement your LiteLLM installation, don’t forget to check out our comprehensive guide on ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource offers a wealth of options for various applications and services that can be seamlessly integrated into your Docker environment, helping you build a robust and versatile self-hosted ecosystem."]
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

const url = "src/content/posts/litellm-docker-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/litellm-docker-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/litellm-docker-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
