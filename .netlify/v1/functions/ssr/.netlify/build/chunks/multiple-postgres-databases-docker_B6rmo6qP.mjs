import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-07-26T00:00:00.000Z",
  "title": "Multiple PostgreSQL Databases in ONE Service: THE Docker Compose WAY!",
  "description": "Master multiple PostgreSQL databases effortlessly! Discover how Docker Compose simplifies your setup. Don't miss out – transform your workflow NOW!",
  "image": "../../assets/images/24/07/multiple-postgres-databases-docker.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker", "postgres"],
  "canonical": "https://www.bitdoze.com/multiple-postgres-databases-docker/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "step-1-create-the-initialization-script",
    "text": "Step 1: Create the Initialization Script"
  }, {
    "depth": 2,
    "slug": "step-2-create-the-docker-compose-file",
    "text": "Step 2: Create the Docker Compose File"
  }, {
    "depth": 2,
    "slug": "step-3-set-up-environment-variables-optional",
    "text": "Step 3: Set Up Environment Variables (Optional)"
  }, {
    "depth": 2,
    "slug": "step-4-run-the-docker-compose-stack",
    "text": "Step 4: Run the Docker Compose Stack"
  }, {
    "depth": 2,
    "slug": "step-5-verify-the-databases",
    "text": "Step 5: Verify the Databases"
  }, {
    "depth": 2,
    "slug": "different-users-and-passwords-for-databases",
    "text": "Different users and Passwords for Databases"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Docker Compose allows you to set up complex application stacks, including database services. While PostgreSQL’s official Docker image supports creating a single database by default, you can configure it to create multiple databases within one container."
    }), "\n", createVNode(_components.p, {
      children: "There are a few common reasons why you might want to set up multiple databases in the same Docker Compose service:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Development and testing environments:"
          }), " When developing or testing an application that uses multiple databases, it’s convenient to have all the databases running in a single container for simplicity."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Resource efficiency:"
          }), " Using a single container for multiple databases can be more resource-efficient than running separate containers for each database, especially in development environments."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Legacy application support:"
          }), " Some legacy applications may expect multiple databases to be available on the same server. Replicating this setup in Docker can make migration easier."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Microservices architecture:"
          }), " In a microservices architecture, you might have multiple small databases that are closely related and benefit from being grouped together."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Data isolation:"
          }), " You may want to isolate different types of data (e.g. user data, product data, analytics) into separate databases for security or organizational reasons, while still keeping them in the same service."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Multi-tenant applications:"
          }), " For applications serving multiple tenants, you might want a separate database for each tenant, but still keep them managed within a single service."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Testing database migrations:"
          }), " When testing database migrations or upgrades, it can be useful to have multiple versions or states of a database available simultaneously."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Reducing complexity:"
          }), " For smaller projects or prototypes, having all databases in one container can reduce the overall complexity of the Docker setup."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "However, it’s important to note that while this approach can be useful for development and testing, for production environments it’s generally recommended to use separate containers for different databases to ensure better isolation, scalability, and easier management. The specific needs of your project and environment should guide the decision on whether to use multiple databases in a single service or separate them into different containers."
    }), "\n", createVNode(_components.h2, {
      id: "step-1-create-the-initialization-script",
      children: "Step 1: Create the Initialization Script"
    }), "\n", createVNode(_components.p, {
      children: ["First, create a bash script that will initialize multiple databases. Save this script as ", createVNode(_components.code, {
        children: "init-multiple-databases.sh"
      }), ":"]
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
            children: "#!/bin/bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "set"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "set"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " create_user_and_database"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  local"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "$1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"  Creating user and database '"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  psql"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ON_ERROR_STOP="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$POSTGRES_USER"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --dbname"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"postgres\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <<-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "EOSQL"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        CREATE USER "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        CREATE DATABASE "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        GRANT ALL PRIVILEGES ON DATABASE "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TO "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "EOSQL"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-n"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"${"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":-"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "}\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]; "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Multiple database creation requested: "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  for"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " $("
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tr"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ','"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ' '"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    create_user_and_database"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $db"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  done"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Multiple databases created\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fi"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The script is taking a list of databases and connects to the Postgress and creates the databases and grants all privilages."
    }), "\n", createVNode(_components.h2, {
      id: "step-2-create-the-docker-compose-file",
      children: "Step 2: Create the Docker Compose File"
    }), "\n", createVNode(_components.p, {
      children: ["Create a ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file with the following content:"]
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
            children: "postgres_multi_db"
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
            children: "${POSTGRES_USER:-postgres}"
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
            children: "${POSTGRES_PASSWORD:-changeme}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "db1,db2,db3"
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
            children: "./init-multiple-databases.sh:/docker-entrypoint-initdb.d/init-multiple-databases.sh"
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
            children: "./postgres_data:/var/lib/postgresql/data"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The postgres 16 will be uses to create the container and the user and password will be fetched from ", createVNode(_components.code, {
        children: ".env"
      }), " file. The ", createVNode(_components.code, {
        children: "POSTGRES_MULTIPLE_DATABASES"
      }), " has the list with databases to be created. All the DBs will use the same user and pass. The script from previous points ", createVNode(_components.code, {
        children: "init-multiple-databases.sh"
      }), " is is loaded from the docker compose file."]
    }), "\n", createVNode(_components.h2, {
      id: "step-3-set-up-environment-variables-optional",
      children: "Step 3: Set Up Environment Variables (Optional)"
    }), "\n", createVNode(_components.p, {
      children: "Create a .env file in the same directory as your docker-compose.yml to store sensitive information:"
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
            children: "myuser"
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
            children: "mypassword"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-4-run-the-docker-compose-stack",
      children: "Step 4: Run the Docker Compose Stack"
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
      children: "Log:"
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
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "The"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " belonging"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " owned"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " by"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"postgres\"."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "This"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " must"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " also"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " own"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " process."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "The"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cluster"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initialized"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " locale"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"en_US.utf8\"."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "The"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " encoding"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " has"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " accordingly"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " been"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"UTF8\"."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "The"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " text"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " search"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"english\"."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Data"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " page"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " checksums"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " disabled."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "fixing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " permissions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " existing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " directory"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/postgresql/data"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ok"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " subdirectories"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ok"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "selecting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dynamic"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " shared"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " memory"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " implementation"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " posix"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "selecting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " max_connections"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 100"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "selecting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " shared_buffers"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 128MB"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "selecting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " time"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " zone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " configuration"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ok"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "running"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bootstrap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " script"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ok"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sh:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " locale:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " found"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:39.527"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [35] WARNING:  no usable system locales were found"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "performing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " post-bootstrap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initialization"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ok"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "syncing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " disk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ok"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Success."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " You"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " can"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " now"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |     "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pg_ctl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -D"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/postgresql/data"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logfile"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "initdb:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " warning:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " enabling"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"trust\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " authentication"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " connections"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "initdb:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " hint:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " You"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " can"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " change"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " by"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " editing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pg_hba.conf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " option"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -A,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --auth-local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --auth-host,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " next"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " time"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initdb."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "waiting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start....2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:40.720"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  starting PostgreSQL 16.3 on x86_64-pc-linux-musl, compiled by gcc ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 13.2.1_git20240309"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") 13.2.1 20240309, 64-bit"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:40.722"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  listening on Unix socket "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/var/run/postgresql/.s.PGSQL.5432\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:40.730"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [45] LOG:  database system was shut down at 2024-07-26 10:41:40 UTC"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:40.739"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  database system is ready to accept connections"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |  "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " started"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DATABASE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/usr/local/bin/docker-entrypoint.sh:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sourcing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /docker-entrypoint-initdb.d/init-multiple-databases.sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Multiple"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " creation"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " requested:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db1,db2,db3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |   "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'db1'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ROLE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DATABASE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "GRANT"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |   "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'db2'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ROLE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DATABASE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "GRANT"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |   "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'db3'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ROLE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "CREATE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DATABASE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "GRANT"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Multiple"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " databases"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " created"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "waiting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " shut"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " down....2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.202"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  received fast shutdown request"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.204"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  aborting any active transactions"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.214"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  background worker "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"logical replication launcher\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "PID"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 48"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") exited with exit code 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.214"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [43] LOG:  shutting down"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.215"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [43] LOG:  checkpoint starting: shutdown immediate"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.465"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [43] LOG:  checkpoint complete: wrote 3687 buffers ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "22.5%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " WAL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "added,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " removed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " recycled"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "0.088"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " s,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sync="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.153"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " s,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " total="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.251"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " s"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sync"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files=1196,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " longest="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.005"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " s,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " average="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.001"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " s"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "distance"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "17073"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " kB,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " estimate="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "17073"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " kB"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "lsn"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "0/259C0B8,"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " redo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lsn=0/259C0B8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.497"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [42] LOG:  database system is shut down"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |  "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " stopped"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "PostgreSQL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " init"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " process"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " complete"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "ready"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " up."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.555"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [1] LOG:  starting PostgreSQL 16.3 on x86_64-pc-linux-musl, compiled by gcc ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 13.2.1_git20240309"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") 13.2.1 20240309, 64-bit"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.555"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [1] LOG:  listening on IPv4 address "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"0.0.0.0\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", port 5432"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.555"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [1] LOG:  listening on IPv6 address "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"::\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", port 5432"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.559"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [1] LOG:  listening on Unix socket "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/var/run/postgresql/.s.PGSQL.5432\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.568"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [67] LOG:  database system was shut down at 2024-07-26 10:41:41 UTC"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024-07-26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:41:41.582"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UTC"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [1] LOG:  database system is ready to accept connections"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-5-verify-the-databases",
      children: "Step 5: Verify the Databases"
    }), "\n", createVNode(_components.p, {
      children: "To confirm that the databases were created successfully, you can connect to the PostgreSQL container and list the databases:"
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
            children: " exec"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -it"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " psql"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -U"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " myuser"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -c"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"\\l\""
          })]
        })
      })
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
            children: "root@docker-cloud:/opt/stacks/multi-postgress#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " exec"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -it"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " postgres_multi_db"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " psql"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -U"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -c"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"\\l\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "                                                     List"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " databases"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   Name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    |  "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Owner"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Encoding"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Locale"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Provider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |  "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Collate"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   |   "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Ctype"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "ICU"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Locale"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "ICU"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Rules"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |  "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " privileges"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-----------+---------+----------+-----------------+------------+------------+------------+-----------+---------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " db1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "       | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "=Tc/bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze+"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "db1"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " db2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "       | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "=Tc/bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze+"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "db2"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " db3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "       | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "=Tc/bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze+"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "db3"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " postgres"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           |"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " template0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "=c/bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " template1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UTF8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "     | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "libc"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "en_US.utf8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "=c/bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "           |         |          |                 |            |            |            |           | "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "bitdoze"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "CTc/bitdoze"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rows"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "different-users-and-passwords-for-databases",
      children: "Different users and Passwords for Databases"
    }), "\n", createVNode(_components.p, {
      children: "To handle different user permissions for each database in Docker Compose when setting up multiple PostgreSQL databases, you can modify the initialization script and Docker Compose configuration. Here’s how to achieve this:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Update the initialization script (init-multiple-databases.sh) to accept custom users and permissions:"
      }), "\n"]
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
            children: "#!/bin/bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "set"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "set"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " create_user_and_database"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    local"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "$1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    local"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "$2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    local"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " password"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "$3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "    echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Creating user '"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "' and database '"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    psql"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ON_ERROR_STOP="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$POSTGRES_USER"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --dbname"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"postgres\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <<-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "EOSQL"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        CREATE USER "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " WITH PASSWORD '"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$password"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "';"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        CREATE DATABASE "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        GRANT ALL PRIVILEGES ON DATABASE "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TO "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "EOSQL"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-n"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"${"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":-"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "}\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]; "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "    echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Multiple database creation requested: "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " db_config"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " $("
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tr"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ','"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ' '"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "        IFS"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "':'"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " read"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -r"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " password"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <<< "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$db_config"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "        create_user_and_database"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $db"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $user"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    done"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "    echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Multiple databases created\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fi"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: ["Modify your ", createVNode(_components.code, {
          children: "docker-compose.yml"
        }), " file to pass the database configurations:"]
      }), "\n"]
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
            children: "postgres_multi_db"
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
            children: "${POSTGRES_USER:-postgres}"
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
            children: "${POSTGRES_PASSWORD:-changeme}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      POSTGRES_MULTIPLE_DATABASES"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "db1:user1:pass1,db2:user2:pass2,db3:user3:pass3"
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
            children: "./init-multiple-databases.sh:/docker-entrypoint-initdb.d/init-multiple-databases.sh"
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
            children: "./postgres_data:/var/lib/postgresql/data"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Here ", createVNode(_components.code, {
        children: "POSTGRES_MULTIPLE_DATABASES: db1:user1:pass1,db2:user2:pass2,db3:user3:pass3"
      }), " will contain the DB,USER and PASS, you can add this into you ", createVNode(_components.code, {
        children: ".env"
      }), " if you want to make it secure."]
    }), "\n", createVNode(_components.p, {
      children: "This is how easy it is to have multiple databases created in docker compose for same postgres service."
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

const url = "src/content/posts/multiple-postgres-databases-docker.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/multiple-postgres-databases-docker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/multiple-postgres-databases-docker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
