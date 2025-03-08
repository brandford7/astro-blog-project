import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/memos1.CQ1cN5np.png","width":4500,"height":2584,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/08/memos1.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/memos2.CgCsqH-i.jpeg","width":4118,"height":1308,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/08/memos2.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-08-14T00:00:00.000Z",
  "title": "How to Install Memos with Docker Compose: EASY STEPS!",
  "description": "Learn how you can Memos note taking app with docker compose  and Postgres DB and take advantage of a self hosted note taking app",
  "image": "../../assets/images/24/08/memos-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/memos-install/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "install-memos-with-docker-compose",
    "text": "Install Memos with Docker Compose"
  }, {
    "depth": 3,
    "slug": "1-prerequizites",
    "text": "1 Prerequizites"
  }, {
    "depth": 3,
    "slug": "2-memos-with-sqlite",
    "text": "2 Memos with SQLite"
  }, {
    "depth": 3,
    "slug": "3-memos-with-postgresql-db",
    "text": "3 Memos with PostgreSQL DB"
  }, {
    "depth": 3,
    "slug": "4-create-an-env-file",
    "text": "4 Create an .env File"
  }, {
    "depth": 3,
    "slug": "5-start-the-docker-compose-file",
    "text": "5 Start the Docker Compose File"
  }, {
    "depth": 3,
    "slug": "6-access-memos-ui-and-create-your-first-user",
    "text": "6 Access Memos UI and Create Your First User"
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
        href: "https://www.usememos.com/",
        children: "Memos"
      }), " is a self-hosted note-taking application designed for personal organization and information management. It allows users to create, store, and manage notes efficiently, providing features like markdown support, a user-friendly interface, and privacy-focused design. Memos can be run on various platforms, but using Docker Compose simplifies the deployment process, making it easy to set up and maintain."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Privacy-First Approach:"
          }), " Memos ensures that all user data is kept private and secure, allowing users to retain control over their information."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Markdown Support:"
          }), " Users can create notes using plain text with extensive Markdown syntax, facilitating easy formatting and organization."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Lightweight Architecture:"
          }), " Built with Go and React.js, Memos is designed to be lightweight, ensuring fast performance and minimal resource usage."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Customizable Features:"
          }), " Users can personalize their experience by customizing the server name, icon, description, and system styles."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Open Source:"
          }), " Memos is completely open source, allowing users to contribute to its development and customize the application as needed."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Free to Use:"
          }), " All features of Memos are available at no cost, with no hidden charges or subscriptions."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Data Persistence:"
          }), " Notes are saved in a SQLite database file, ensuring data is retained even after the application is closed."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "User-Friendly Interface:"
          }), " Memos offers an intuitive interface that makes it easy to capture and manage notes."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Multi-Device Accessibility:"
          }), " Users can access their notes from various devices, enhancing convenience and flexibility."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Collaboration Features:"
          }), " Memos allows for easy sharing of notes, enabling collaboration among users."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If you are looking for a more complex app for your note taking needs you can check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/outline-install/",
          children: "How to Install Outline Wiki on Docker"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/docmost-docker-install/",
          children: "Docmost Docker Compose Install"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "install-memos-with-docker-compose",
      children: "Install Memos with Docker Compose"
    }), "\n", createVNode(_components.p, {
      children: ["To install Memos using Docker Compose, you need to create a ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file that defines the services, networks, and volumes necessary for running the application. Below are two configurations for deploying Memos: one using SQLite and another using PostgreSQL."]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/vBa4ogLNF14",
      label: "Memos Installation"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequizites",
      children: "1 Prerequizites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host Memos, you can use one from ", createVNode(_components.a, {
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
    }), "\n", createVNode(_components.h3, {
      id: "2-memos-with-sqlite",
      children: "2 Memos with SQLite"
    }), "\n", createVNode(_components.p, {
      children: ["The following ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file sets up Memos with SQLite as the database:"]
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
            children: "  memos"
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
            children: "neosmemo/memos:stable"
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
            children: "memos"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    user"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "root"
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
            children: "./memos/:/var/opt/memos"
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
            children: "traefik.http.routers.memos.rule=Host(`memos.domain.com`)"
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
            children: "traefik.http.routers.memos.entrypoints=https"
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
            children: "traefik.http.services.memos.loadbalancer.server.port=5230"
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
      children: createVNode(_components.strong, {
        children: "Explanation of the Configuration:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "services:"
          }), " This section defines the services that Docker will run. Here, we have a single service named ", createVNode(_components.code, {
            children: "memos"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "image:"
          }), " Specifies the Docker image to use, in this case, ", createVNode(_components.code, {
            children: "neosmemo/memos:stable"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "container_name:"
          }), " Assigns a name to the container for easier management."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "user:"
          }), " Runs the container as the root user."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "restart:"
          }), " Configures the restart policy. ", createVNode(_components.code, {
            children: "unless-stopped"
          }), " means the container will restart unless explicitly stopped."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "networks:"
          }), " Connects the service to an external network named ", createVNode(_components.code, {
            children: "traefik-net"
          }), ", which is useful for routing."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "volumes:"
          }), " Maps a local directory (", createVNode(_components.code, {
            children: "./memos/"
          }), ") to the container’s data storage directory (", createVNode(_components.code, {
            children: "/var/opt/memos"
          }), "), ensuring data persistence."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "labels:"
          }), " These are used for configuring Traefik, a reverse proxy, to route traffic to the Memos service based on the specified hostname and entry points."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is the easiest way to have memos installed. You can expose also the port in case you want to use ClaudFlare tunnels or other reverse proxy or direct access with:"
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
            children: "ports"
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
              color: "#98C379"
            },
            children: "5230:5230"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-memos-with-postgresql-db",
      children: "3 Memos with PostgreSQL DB"
    }), "\n", createVNode(_components.p, {
      children: ["If you prefer to use PostgreSQL as the database, you can use the following configuration. This is for cases when you have a lot off notes to have a powerfull database. This are the ", createVNode(_components.a, {
        href: "https://www.usememos.com/docs/install/database",
        children: "memos DB options with the doc"
      }), "."]
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
            children: "  memos"
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
            children: "neosmemo/memos:stable"
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
            children: "memos"
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
              color: "#E06C75"
            },
            children: "      memos-db"
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
            children: "        condition"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "service_healthy"
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
            children: "./memos/:/var/opt/memos"
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
            children: "      MEMOS_DRIVER"
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
            children: "      MEMOS_DSN"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@memos-db:5432/${POSTGRES_DB}?sslmode=disable"
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
            children: "traefik.http.routers.memos.rule=Host(`memos.domain.com`)"
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
            children: "traefik.http.routers.memos.entrypoints=https"
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
            children: "traefik.http.services.memos.loadbalancer.server.port=5230"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  memos-db"
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
            children: "postgres:16.1-alpine"
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
            children: "./memos-db:/var/lib/postgresql/data:rw"
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
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation of the Configuration:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: "memos"
          }), " service is similar to the SQLite configuration but includes environment variables for PostgreSQL."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "depends_on:"
          }), " Ensures that the ", createVNode(_components.code, {
            children: "memos-db"
          }), " service starts before the ", createVNode(_components.code, {
            children: "memos"
          }), " service."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "environment:"
          }), " Sets environment variables for the PostgreSQL connection, including the database name, user, and password."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The ", createVNode(_components.code, {
            children: "memos-db"
          }), " service runs a PostgreSQL database, with a health check to ensure it is ready before the Memos service starts."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-create-an-env-file",
      children: ["4 Create an ", createVNode(_components.code, {
        children: ".env"
      }), " File"]
    }), "\n", createVNode(_components.p, {
      children: ["For the PostgreSQL configuration, create a ", createVNode(_components.code, {
        children: ".env"
      }), " file in the same directory as your ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file to define the environment variables:"]
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
            children: "memos"
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
            children: "memos"
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
            children: "memos"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can change the details as you like for the database details."
    }), "\n", createVNode(_components.h3, {
      id: "5-start-the-docker-compose-file",
      children: "5 Start the Docker Compose File"
    }), "\n", createVNode(_components.p, {
      children: ["To start the Memos application, run the following command in your terminal from the directory containing the ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file:"]
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
      children: "This command will download the necessary Docker images, create the containers, and start the services in detached mode."
    }), "\n", createVNode(_components.h3, {
      id: "6-access-memos-ui-and-create-your-first-user",
      children: "6 Access Memos UI and Create Your First User"
    }), "\n", createVNode(_components.p, {
      children: ["Once the containers are running, you can access the Memos web interface by navigating to ", createVNode(_components.code, {
        children: "http://memos.domain.com"
      }), " in your web browser. You will be greeted by a sign-up screen where you can create your first user account."]
    }), "\n", createVNode(_components.p, {
      children: "Then the memos UI will be like this:"
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "Memos UI"
    }), "\n", createVNode(_components.p, {
      children: "Then you have the settings area where you can change the look frok light to dark, add users or enable SSO."
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "Memos Settings"
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Setting up Memos using Docker Compose provides a straightforward way to deploy a self-hosted note-taking application. By using either SQLite or PostgreSQL, users can choose the database that best fits their needs. The configurations provided allow for easy customization and scalability, making Memos a flexible solution for personal organization and note management. Enjoy using Memos to capture and organize your thoughts efficiently!"
    }), "\n", createVNode(_components.p, {
      children: ["If you’re interested in exploring more Docker containers for your home server or self-hosted setup, including other productivity tools and applications, check out our comprehensive guide on ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource provides a wealth of options for various applications and services you can run using Docker, helping you build a powerful and versatile self-hosted environment that can complement your Memos installation and enhance your overall productivity ecosystem."]
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

const url = "src/content/posts/memos-install.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/memos-install.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/memos-install.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
