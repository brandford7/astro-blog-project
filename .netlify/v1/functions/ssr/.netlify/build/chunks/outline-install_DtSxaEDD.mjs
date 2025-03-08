import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import 'clsx';

const img1 = new Proxy({"src":"/_astro/slack-oauth.DQuCQ2lN.jpeg","width":2340,"height":1998,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/slack-oauth.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-02-06T00:00:00.000Z",
  "title": "How to Install Outline Wiki on Docker",
  "description": "Learn how you can install Outline Wiki with docker compose to have a self hosted notion alternative.",
  "image": "../../assets/images/24/02/outline-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/outline-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "outline-overview",
    "text": "Outline Overview"
  }, {
    "depth": 3,
    "slug": "key-features",
    "text": "Key Features"
  }, {
    "depth": 3,
    "slug": "outline-as-a-notion-alternative",
    "text": "Outline as a Notion Alternative"
  }, {
    "depth": 3,
    "slug": "considerations",
    "text": "Considerations"
  }, {
    "depth": 2,
    "slug": "what-you-should-know-before-installing-outline",
    "text": "What you Should know Before Installing Outline"
  }, {
    "depth": 2,
    "slug": "how-to-install-outline-with-docker-compose",
    "text": "How To Install Outline with Docker Compose"
  }, {
    "depth": 3,
    "slug": "1-prerequisites",
    "text": "1. Prerequisites"
  }, {
    "depth": 3,
    "slug": "2-get-slack-credentials",
    "text": "2. Get Slack credentials"
  }, {
    "depth": 3,
    "slug": "3-docker-compose-file",
    "text": "3. Docker Compose File"
  }, {
    "depth": 3,
    "slug": "4-create-the-outline-env-file",
    "text": "4. Create The outline env file."
  }, {
    "depth": 3,
    "slug": "5-deploy-outline",
    "text": "5. Deploy Outline"
  }, {
    "depth": 3,
    "slug": "6-grant-outline-permissions-to-add-images",
    "text": "6. Grant Outline Permissions to Add images"
  }, {
    "depth": 3,
    "slug": "7-configure-the-cloudflare-tunnels",
    "text": "7. Configure the CloudFlare Tunnels"
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
        href: "https://www.getoutline.com/",
        children: "Outline"
      }), " is a modern team knowledge base and wiki designed to help teams organize their internal documentation, product specs, support answers, meeting notes, onboarding materials, and more. It is positioned as a more focused alternative to Notion, which is an all-in-one workspace that includes a wider range of features such as project management, databases, and content management systems."]
    }), "\n", createVNode(_components.h2, {
      id: "outline-overview",
      children: "Outline Overview"
    }), "\n", createVNode(_components.h3, {
      id: "key-features",
      children: "Key Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Intuitive Editing Experience: Outline offers a fast editor with markdown support, slash commands, and interactive embeds."
      }), "\n", createVNode(_components.li, {
        children: "Simple Integrations: It integrates with tools like Slack, Figma, and Loom, and also provides an open API for additional integrations."
      }), "\n", createVNode(_components.li, {
        children: "Language Support: Outline supports right-to-left (RTL) text and is available in 17 languages."
      }), "\n", createVNode(_components.li, {
        children: "Open Source: The source code for Outline is publicly available, and it can be self-hosted on your own infrastructure."
      }), "\n", createVNode(_components.li, {
        children: "Real-time Collaboration: The platform is designed for real-time collaboration, making document editing and sharing seamless."
      }), "\n", createVNode(_components.li, {
        children: "Dark Mode: A dark mode is available for users who prefer it."
      }), "\n", createVNode(_components.li, {
        children: "Security & Permissions: Outline allows for detailed management of user permissions."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "outline-as-a-notion-alternative",
      children: "Outline as a Notion Alternative"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Focus on Knowledge Base: Outline is primarily a knowledge base and documentation platform, whereas Notion is an all-in-one workspace."
      }), "\n", createVNode(_components.li, {
        children: "Open Source: For those who prefer open-source solutions, Outline is a strong contender."
      }), "\n", createVNode(_components.li, {
        children: "Simplicity: Outline is considered to be simpler and more straightforward compared to Notion, which has a steeper learning curve due to its extensive features."
      }), "\n", createVNode(_components.li, {
        children: "Real-time Collaboration: Outline emphasizes real-time collaboration and has been described as closer to a wiki in terms of its functionality."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "considerations",
      children: "Considerations"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Limited Use Cases: Outline is more limited in scope compared to Notion, focusing mainly on documentation and knowledge sharing."
      }), "\n", createVNode(_components.li, {
        children: "Self-Hosting: Outline can be self-hosted, which is an important consideration for teams with specific privacy or infrastructure requirements."
      }), "\n", createVNode(_components.li, {
        children: "No Mobile Apps: Outline does not have mobile apps, which may be a limitation for some users."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In summary, Outline is a streamlined, open-source knowledge base and wiki that can serve as a simpler, more focused alternative to Notion for teams looking to organize their internal documentation and collaborate in real-time. It is particularly appealing to those who prefer open-source software and want to avoid the complexity of an all-in-one tool like Notion."
    }), "\n", createVNode(_components.p, {
      children: "If you are looking for other not taking apps that are simpler you can check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/docmost-docker-install/",
          children: "Docmost Docker Compose Install"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/memos-install/",
          children: "How to Install Memos with Docker Compose"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Outline can be deployed on a server that has a minimum of 1 CPU and 512MB of RAM. It’s lightweight and can be installed anywhere."
    }), "\n", createVNode(_components.h2, {
      id: "what-you-should-know-before-installing-outline",
      children: "What you Should know Before Installing Outline"
    }), "\n", createVNode(_components.p, {
      children: "Below are some of the things that you should keep in mind if you are trying to install Outline"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Authentication"
        }), " - to authenticate in the app you will need a 3PP, you can use Google Authentication (if you are a Workspace user), Slack or Microsoft, you can also use your own image with oidc-server"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Storage"
        }), " - files can be stored on S3 buckets or locally, you can use Amazon S3 or Minio image to store files."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Databases"
        }), " - it uses Redis and Postgress SQL for databases."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-install-outline-with-docker-compose",
      children: "How To Install Outline with Docker Compose"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/IY1jONuTEic",
      label: "Outline Install"
    }), "\n", createVNode(_components.p, {
      children: "In this section, we are going to see what exactly we need to do to have Outline working on our docker compose as easily as possible. We are going to store the files locally as Outline is permitting this now."
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequisites",
      children: "1. Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host Slash, you can use one from ", createVNode(_components.a, {
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
        }), " for the full tutorial.\r\nCloudFlare Tunnels are configured for your VPS server, the details are in the article here I deployed ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/dockge-install/",
          children: "Dockge"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can use also Traefik as a reverse proxy for your apps. I have created a full tutorial with Dockge install also to manage your containers on: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Having all of this you will be ready to move to next step and add the container in dockge."
    }), "\n", createVNode(_components.h3, {
      id: "2-get-slack-credentials",
      children: "2. Get Slack credentials"
    }), "\n", createVNode(_components.p, {
      children: ["Slack is free to use and we are going to use Slack as an authentication method for our Outline. To do this you need to go in Slack in ", createVNode(_components.a, {
        href: "https://api.slack.com/apps/",
        children: "Slack API Apps"
      }), " and you are going to create an app. In there under ", createVNode(_components.strong, {
        children: "OAuth & Permissions"
      }), " you add your redirect URL it needs to be with ", createVNode(_components.code, {
        children: "/auth/slack.callback"
      }), " at the end, in my case:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "https://docs.bitdoze.com/auth/slack.callback"
          })
        })
      })
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "Slack Oauth"
    }), "\n", createVNode(_components.p, {
      children: ["After you can go under ", createVNode(_components.strong, {
        children: "Basic Information"
      }), " and get your ", createVNode(_components.code, {
        children: "Client ID"
      }), " and ", createVNode(_components.code, {
        children: "Client Secret"
      }), ". You will need them in the next section"]
    }), "\n", createVNode(_components.h3, {
      id: "3-docker-compose-file",
      children: "3. Docker Compose File"
    }), "\n", createVNode(_components.p, {
      children: "Docker-compose file will make all of this possible and now we have the below file created for outline that can be used:"
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
            children: "\"3.2\""
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
            children: "  outline"
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
            children: "docker.getoutline.com/outlinewiki/outline:latest"
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
            children: "outline-app"
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
            children: "outline-app"
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
            children: "3000:3000"
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
            children: "./storage-data:/var/lib/outline/data"
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
            children: "postgres"
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
            children: "redis"
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
            children: "      PGSSLMODE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "disable"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      SECRET_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${SECRET_KEY}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      UTILS_SECRET"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${UTILS_SECRET}"
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
            children: "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@outline-postgres:5432/${POSTGRES_DB}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      REDIS_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "redis://outline-redis:6379"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      URL"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${URL}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      PORT"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${PORT}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      FILE_STORAGE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "local"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      FILE_STORAGE_LOCAL_ROOT_DIR"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/var/lib/outline/data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      FILE_STORAGE_UPLOAD_MAX_SIZE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "26214400"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      SLACK_CLIENT_ID"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${SLACK_CLIENT_ID}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      SLACK_CLIENT_SECRET"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "${SLACK_CLIENT_SECRET}"
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
            children: "  redis"
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
            children: "outline-redis"
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
            children: "outline-redis"
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
            children: "redis"
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
            children: "./redis.conf:/redis.conf"
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
            children: "redis-server"
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
            children: "/redis.conf"
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
            children: "CMD"
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
            children: "redis-cli"
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
            children: "ping"
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
            children: "10s"
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
            children: "30s"
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
            children: "3"
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
            children: "  postgres"
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
            children: "postgres"
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
            children: "outline-postgres"
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
            children: "outline-postgres"
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
            children: "./database-data:/var/lib/postgresql/data"
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
            children: "CMD"
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
            children: "pg_isready"
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
            children: "30s"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This docker compose file for Outline has all the required options to run Outline with local storage for images, all the secrets and details will be kept in the env file."
    }), "\n", createVNode(_components.p, {
      children: "The Outline environments are set to use local storage and connections to DB’s."
    }), "\n", createVNode(_components.p, {
      children: "The file has local disk for DB, Outline and Redis to store all the details. The recommendation is to use a exact version for images in case you don’t want problems when you redeploy this and things update. You want to control your version so in case it gets updated to not mess everything for you."
    }), "\n", createVNode(_components.h3, {
      id: "4-create-the-outline-env-file",
      children: "4. Create The outline env file."
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: ".env"
      }), " file has all the secrets and variables to have this working in my case it’s looking like below:"]
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
            children: "POSTGRES_USER='user'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "POSTGRES_PASSWORD='pass'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "POSTGRES_DB='outline'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "SECRET_KEY=d1155bc02c5bfd6b2a4c3313113b0b5f0360366aa3b68c56c5299bc4da4efdf8"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "UTILS_SECRET=14fec600b3d8b3524421785aef5711805a0a93d21f9ca7f251de88b675862eb"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "URL=https://docs.bitdoze.com"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "PORT=3000"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "SLACK_CLIENT_ID=444642289953.6587112119140"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "SLACK_CLIENT_SECRET=dbdcb40d85dc3097511179945e2a4bc7"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In here you see you have:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "SERVER_IP which is the public IP of the server, I couldn’t make this work with the localhost you can try."
      }), "\n", createVNode(_components.li, {
        children: "Postgres users and passwords"
      }), "\n", createVNode(_components.li, {
        children: ["secrets for outline which are generated with: ", createVNode(_components.code, {
          children: "openssl rand -hex 32"
        })]
      }), "\n", createVNode(_components.li, {
        children: "URL and Port - here you will use what you like for your application"
      }), "\n", createVNode(_components.li, {
        children: ["Slack Details - the ", createVNode(_components.code, {
          children: "Client ID"
        }), " and ", createVNode(_components.code, {
          children: "Client Secret"
        }), " generated in setp 2 can be found here."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Dockge has a UI where you can add all of this and change them in case you need."
    }), "\n", createVNode(_components.h3, {
      id: "5-deploy-outline",
      children: "5. Deploy Outline"
    }), "\n", createVNode(_components.p, {
      children: "Now you have the docker-compose file and .env details, what remains to be done is to go in dockde and add a name for your stack and hit deploy. Things should start.\r\nIf you just want to use docker compose to run this you just do:"
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
      children: "This will start all the stacks and you can verify them with:"
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
            children: " ps"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "6-grant-outline-permissions-to-add-images",
      children: "6. Grant Outline Permissions to Add images"
    }), "\n", createVNode(_components.p, {
      children: ["Only with these configs if you try to upload an image will fail as you will not be able to write into the path where images are stored. nodejs user is used by app and needs access there. ", createVNode(_components.a, {
        href: "https://docs.getoutline.com/s/hosting/doc/file-storage-N4M0T6Ypu7",
        children: "Outline File Storage"
      }), " documentation has some details about this. To make this working you will need to run:"]
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
              color: "#56B6C2"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /opt/stacks/outline"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "chown"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1001"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ./storage-data"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "chown with 1001 on the disk path will make sure that the user has permissions there."
    }), "\n", createVNode(_components.h3, {
      id: "7-configure-the-cloudflare-tunnels",
      children: "7. Configure the CloudFlare Tunnels"
    }), "\n", createVNode(_components.p, {
      children: "You need to let CloudFlare Tunel to know which port is using, you just need to go in the Access - Tunnels and choose the tunnel you created and add a hostname that will link a domain or subdomain and the service and port . This will need to be as for the URL you have set in the .env file."
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
    }), "\n", createVNode(_components.p, {
      children: "And that’s about it, now you can use outline, test it and see how it works."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: ["Outline documentation can be scary if you are a newbie in docker and Linux, this tutorial was simplified so you can start and install Outline as easy as possible to test it and use it. For other configurations and official doc you can check: ", createVNode(_components.a, {
        href: "https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t",
        children: "Outline Docker Installation"
      })]
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

const url = "src/content/posts/outline-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/outline-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/outline-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
