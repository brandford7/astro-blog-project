import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { i as imag1 } from './cloudflare-tunel-setup_dnqH4QSI.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-06-12T00:00:00.000Z",
  "title": "How to Deploy PGvector and PGadmin on Docker and Ditch Pinecone",
  "description": "Learn how you can install Postgres PGvector database and PGadmin on Docker Compose for your projects.",
  "image": "../../assets/images/24/05/deploy-pgvector-docker.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/deploy-pgvector-pgadmin-docker/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-deploy-pgvector-and-pgadmin-on-docker",
    "text": "How to Deploy PGvector and PGadmin on Docker"
  }, {
    "depth": 3,
    "slug": "1-prerequisites",
    "text": "1. Prerequisites"
  }, {
    "depth": 3,
    "slug": "2-docker-compose-file",
    "text": "2. Docker Compose File"
  }, {
    "depth": 3,
    "slug": "3-environment-variables-file",
    "text": "3. Environment Variables File"
  }, {
    "depth": 3,
    "slug": "4-deploying-pgvector-and-pgadmin",
    "text": "4. Deploying PGVector and PGAdmin"
  }, {
    "depth": 3,
    "slug": "5-accessing-the-postgresql-database-with-pgadmin",
    "text": "5. Accessing the PostgreSQL Database with PGAdmin"
  }, {
    "depth": 3,
    "slug": "6-configure-the-cloudflare-tunnels",
    "text": "6. Configure the CloudFlare Tunnels"
  }, {
    "depth": 3,
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
      children: [createVNode(_components.strong, {
        children: "PostgreSQL"
      }), " is a powerful, open-source object-relational database system known for its robustness, extensibility, and compliance with SQL standards. It has been actively developed for over 35 years and is widely used for managing complex data workloads."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "PGVector"
      }), " is an extension for PostgreSQL that enables vector similarity search, allowing you to store, query, and index vectors. This is particularly useful for applications involving high-dimensional data, such as recommendation systems, image search, and natural language processing."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "PGAdmin"
      }), " is a web-based graphical user interface (GUI) management tool for PostgreSQL. It simplifies database administration tasks, providing a user-friendly interface for executing SQL queries, managing database objects, and monitoring database performance."]
    }), "\n", createVNode(_components.p, {
      children: "Pgvector can store embeddings generated by AI models, such as those from OpenAI. This integration allows for efficient similarity searches and retrieval-augmented generation (RAG), where embeddings help find relevant information to augment AI model responses"
    }), "\n", createVNode(_components.p, {
      children: "Pgvector transforms PostgreSQL into a powerful vector database, enabling efficient storage and querying of embeddings. This capability is essential for AI applications that rely on vector similarity, such as recommendation systems, NLP, and image search. With enhancements from pgvectorscale, PostgreSQL can now compete with specialized vector databases, offering high performance and scalability at a lower cost"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-deploy-pgvector-and-pgadmin-on-docker",
      children: "How to Deploy PGvector and PGadmin on Docker"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/WSkP9EkBsh0",
      label: "How to Deploy PGvector and PGadmin on Docker and Ditch Pinecone"
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequisites",
      children: "1. Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host PGvector, you can use one from ", createVNode(_components.a, {
          href: "https://go.bitdoze.com/hetzner",
          children: "Hetzner"
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
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Dockge and CloudFlare tunnels are optional, they are just here to help us deploy easier the compose file and have a subdomain added to the PGAdmin so we can access it via SSL with CloudFlare Protection. They are not mandatory you can use what ever stack you like."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can use also Traefik as a reverse proxy for your apps. I have created a full tutorial with Dockge install also to manage your containers on: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-docker-compose-file",
      children: "2. Docker Compose File"
    }), "\n", createVNode(_components.p, {
      children: "The following Docker Compose file sets up a PostgreSQL database with the PGVector extension and a PGAdmin instance for database management."
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
            children: "  db"
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
            children: "pgvector_db"
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
            children: "pgvector_db_container"
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
            children: "ankane/pgvector"
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
            children: "5432:5432"
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
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "POSTGRES_DB=${POSTGRES_DB}"
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
            children: "POSTGRES_USER=${POSTGRES_USER}"
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
            children: "POSTGRES_PASSWORD=${POSTGRES_PASSWORD}"
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
            children: "POSTGRES_HOST_AUTH_METHOD=trust"
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
            children: "./local_pgdata:/var/lib/postgresql/data"
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
            children: "  pgadmin"
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
            children: "dpage/pgadmin4"
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
            children: "pgadmin4_container"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5016:80"
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
            children: "\"$UID:$GID\""
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
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "PGADMIN_DEFAULT_EMAIL=${PGADMIN_DEFAULT_EMAIL}"
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
            children: "PGADMIN_DEFAULT_PASSWORD=${PGADMIN_DEFAULT_PASSWORD}"
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
            children: "./pgadmin-data:/var/lib/pgadmin"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation of the Docker Compose File"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "services"
        }), ": Defines the services to be run.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "db"
            }), ": This service sets up the PostgreSQL database with the PGVector extension.\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "hostname"
                }), ": Sets the hostname for the container."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "container_name"
                }), ": Names the container for easier identification."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "image"
                }), ": Uses the ", createVNode(_components.code, {
                  children: "ankane/pgvector"
                }), " image, which includes PostgreSQL with the PGVector extension."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "ports"
                }), ": Maps port 5432 on the host to port 5432 in the container."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "restart"
                }), ": Ensures the container restarts unless stopped manually."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "environment"
                }), ": Sets environment variables for the PostgreSQL database."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "volumes"
                }), ": Mounts a local directory to persist PostgreSQL data."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "healthcheck"
                }), ": Configures a health check to ensure the database is ready."]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "pgadmin"
            }), ": This service sets up the PGAdmin web interface.\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "image"
                }), ": Uses the ", createVNode(_components.code, {
                  children: "dpage/pgadmin4"
                }), " image."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "container_name"
                }), ": Names the container for easier identification."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "restart"
                }), ": Ensures the container restarts unless stopped manually."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "ports"
                }), ": Maps port 5016 on the host to port 80 in the container."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "user"
                }), ": Sets the user ID and group ID for the container."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "environment"
                }), ": Sets environment variables for PGAdmin."]
              }), "\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "volumes"
                }), ": Mounts a local directory to persist PGAdmin data."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-environment-variables-file",
      children: "3. Environment Variables File"
    }), "\n", createVNode(_components.p, {
      children: ["Create a ", createVNode(_components.code, {
        children: ".env"
      }), " file with the following content to set the necessary environment variables:"]
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
            children: "POSTGRES_DB='vector'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "PGADMIN_DEFAULT_PASSWORD=pgpass"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "PGADMIN_DEFAULT_EMAIL=bitdoze1@gmail.com"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Here you can add your users and passwords, POSTGRES ones are for the database and PGADMIN are to access the UI for administrating the PGvector database."
    }), "\n", createVNode(_components.h3, {
      id: "4-deploying-pgvector-and-pgadmin",
      children: "4. Deploying PGVector and PGAdmin"
    }), "\n", createVNode(_components.p, {
      children: "To deploy the services, run the following command:"
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
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This command will start the PostgreSQL database with PGVector and the PGAdmin web interface in detached mode."
    }), "\n", createVNode(_components.h3, {
      id: "5-accessing-the-postgresql-database-with-pgadmin",
      children: "5. Accessing the PostgreSQL Database with PGAdmin"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Open your web browser and navigate to ", createVNode(_components.code, {
          children: "http://ip:5016"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Log in using the email and password specified in the ", createVNode(_components.code, {
          children: ".env"
        }), " file."]
      }), "\n", createVNode(_components.li, {
        children: ["Register a new server in PGAdmin using the following details:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Host name/address"
            }), ": ", createVNode(_components.code, {
              children: "pgvector_db"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Port"
            }), ": ", createVNode(_components.code, {
              children: "5432"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Username"
            }), ": The value of ", createVNode(_components.code, {
              children: "POSTGRES_USER"
            }), " from the ", createVNode(_components.code, {
              children: ".env"
            }), " file."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Password"
            }), ": The value of ", createVNode(_components.code, {
              children: "POSTGRES_PASSWORD"
            }), " from the ", createVNode(_components.code, {
              children: ".env"
            }), " file."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "6-configure-the-cloudflare-tunnels",
      children: "6. Configure the CloudFlare Tunnels"
    }), "\n", createVNode(_components.p, {
      children: ["You need to let CloudFlare Tunel know which port to use, you just need to go in ", createVNode(_components.strong, {
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
        }), " to use CloudPanel as a reverse proxy to your Docker containers."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Deploying PostgreSQL with PGVector and PGAdmin using Docker simplifies the setup process and provides a powerful environment for managing high-dimensional data and performing vector similarity searches. This setup is ideal for AI-based applications and other use cases requiring efficient data management and analysis."
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

const url = "src/content/posts/deploy-pgvector-pgadmin-docker.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-pgvector-pgadmin-docker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-pgvector-pgadmin-docker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
