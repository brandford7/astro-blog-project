import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-09-06T00:00:00.000Z",
  "title": "Secure Your Docker Stack: A Comprehensive Guide to Docker Compose Secrets",
  "description": "Learn how to effectively use secrets in Docker Compose to secure your containerized applications. This comprehensive guide covers setup, implementation, best practices, and real-world examples.",
  "image": "../../assets/images/24/09/docker-compose-secrets.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/docker-compose-secrets/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "understanding-docker-secrets",
    "text": "Understanding Docker Secrets"
  }, {
    "depth": 3,
    "slug": "what-are-docker-secrets",
    "text": "What are Docker Secrets?"
  }, {
    "depth": 3,
    "slug": "benefits-of-using-secrets-in-docker-compose",
    "text": "Benefits of using secrets in Docker Compose"
  }, {
    "depth": 2,
    "slug": "setting-up-docker-secrets",
    "text": "Setting Up Docker Secrets"
  }, {
    "depth": 3,
    "slug": "creating-secret-files",
    "text": "Creating secret files"
  }, {
    "depth": 3,
    "slug": "using-the-docker-secret-create-command",
    "text": "Using the docker secret create command"
  }, {
    "depth": 2,
    "slug": "implementing-secrets-in-docker-compose",
    "text": "Implementing Secrets in Docker Compose"
  }, {
    "depth": 3,
    "slug": "add-the-docker-external-secret-created-previousely",
    "text": "Add the Docker External Secret Created Previousely"
  }, {
    "depth": 4,
    "slug": "syntax-for-declaring-secrets-in-docker-composeyml",
    "text": "Syntax for declaring secrets in docker-compose.yml"
  }, {
    "depth": 4,
    "slug": "accessing-secrets-in-containers",
    "text": "Accessing secrets in containers"
  }, {
    "depth": 3,
    "slug": "integrating-secrets-directly-into-docker-compose-files",
    "text": "Integrating Secrets Directly into Docker Compose Files"
  }, {
    "depth": 4,
    "slug": "step-1-define-secrets",
    "text": "Step 1: Define Secrets"
  }, {
    "depth": 4,
    "slug": "step-2-use-secrets-in-services",
    "text": "Step 2: Use Secrets in Services"
  }, {
    "depth": 4,
    "slug": "step-3-access-secrets-in-containers",
    "text": "Step 3: Access Secrets in Containers"
  }, {
    "depth": 3,
    "slug": "differences-between-external-and-internal-docker-compose-secrets",
    "text": "Differences Between External and Internal Docker Compose Secrets"
  }, {
    "depth": 4,
    "slug": "external-secrets",
    "text": "External Secrets"
  }, {
    "depth": 4,
    "slug": "internal-secrets",
    "text": "Internal Secrets"
  }, {
    "depth": 4,
    "slug": "key-differences",
    "text": "Key Differences"
  }, {
    "depth": 4,
    "slug": "when-to-use-each-type",
    "text": "When to Use Each Type"
  }, {
    "depth": 2,
    "slug": "best-practices",
    "text": "Best Practices"
  }, {
    "depth": 3,
    "slug": "naming-conventions",
    "text": "Naming conventions"
  }, {
    "depth": 3,
    "slug": "version-control-considerations",
    "text": "Version control considerations"
  }, {
    "depth": 3,
    "slug": "rotating-secrets",
    "text": "Rotating secrets"
  }, {
    "depth": 3,
    "slug": "additional-best-practices",
    "text": "Additional best practices"
  }, {
    "depth": 2,
    "slug": "example-use-cases",
    "text": "Example Use Cases"
  }, {
    "depth": 3,
    "slug": "database-credentials",
    "text": "Database credentials"
  }, {
    "depth": 3,
    "slug": "api-keys",
    "text": "API keys"
  }, {
    "depth": 3,
    "slug": "ssl-certificates",
    "text": "SSL certificates"
  }, {
    "depth": 3,
    "slug": "jwt-signing-keys",
    "text": "JWT signing keys"
  }, {
    "depth": 2,
    "slug": "limitations-and-alternatives",
    "text": "Limitations and Alternatives"
  }, {
    "depth": 3,
    "slug": "swarm-mode-requirement",
    "text": "Swarm mode requirement"
  }, {
    "depth": 3,
    "slug": "other-options-for-managing-sensitive-data",
    "text": "Other options for managing sensitive data"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Docker Compose is a powerful tool for defining and running multi-container Docker applications. It allows developers to use a YAML file to configure application services, networks, and volumes, simplifying the process of managing complex containerized environments. However, as applications grow in complexity and sensitivity, managing confidential information such as API keys, passwords, and other secrets becomes increasingly challenging."
    }), "\n", createVNode(_components.p, {
      children: "In today’s security-conscious world, protecting sensitive data is paramount. Hardcoding secrets directly into Dockerfiles or Docker Compose files is a risky practice that can lead to security breaches if these files are exposed. This is where Docker secrets come into play, offering a secure way to manage sensitive information in containerized environments."
    }), "\n", createVNode(_components.p, {
      children: "This article will guide you through the process of using secrets in Docker Compose, helping you enhance the security of your Docker-based applications without compromising on convenience or functionality."
    }), "\n", createVNode(_components.h2, {
      id: "understanding-docker-secrets",
      children: "Understanding Docker Secrets"
    }), "\n", createVNode(_components.h3, {
      id: "what-are-docker-secrets",
      children: "What are Docker Secrets?"
    }), "\n", createVNode(_components.p, {
      children: "Docker secrets are a feature provided by Docker to manage sensitive data securely. A secret is a blob of data, such as a password, SSH private key, SSL certificate, or any other piece of data that should not be transmitted over a network or stored unencrypted in a Dockerfile or in your application’s source code."
    }), "\n", createVNode(_components.p, {
      children: "Docker secrets are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Encrypted at rest"
      }), "\n", createVNode(_components.li, {
        children: "Encrypted during transit"
      }), "\n", createVNode(_components.li, {
        children: "Mounted as files in the container"
      }), "\n", createVNode(_components.li, {
        children: "Centrally managed by Docker Swarm (required for Docker secrets)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "benefits-of-using-secrets-in-docker-compose",
      children: "Benefits of using secrets in Docker Compose"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Enhanced Security"
          }), ": Secrets are encrypted and only accessible to services that explicitly need them, reducing the risk of exposure."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Centralized Management"
          }), ": All secrets are managed in one place, making it easier to update, rotate, or revoke them as needed."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Separation of Concerns"
          }), ": Developers can work with Docker Compose files without needing access to the actual secret values."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Version Control Friendly"
          }), ": Since secrets are not stored in the Docker Compose file itself, you can safely version control your configuration without exposing sensitive data."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Runtime Injection"
          }), ": Secrets are injected into containers at runtime, not build time, allowing for more flexible and secure deployments."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Scalability"
          }), ": As your application scales, Docker secrets provide a consistent way to manage sensitive data across multiple containers and nodes."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By leveraging Docker secrets in your Docker Compose setup, you can significantly improve the security posture of your containerized applications while maintaining the ease of use that Docker Compose provides."
    }), "\n", createVNode(_components.h2, {
      id: "setting-up-docker-secrets",
      children: "Setting Up Docker Secrets"
    }), "\n", createVNode(_components.p, {
      children: "Setting up Docker secrets involves two main steps: creating the secret files and using the Docker CLI to add these secrets to your Docker environment."
    }), "\n", createVNode(_components.h3, {
      id: "creating-secret-files",
      children: "Creating secret files"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Create a file containing your secret information. For example:"
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
                  color: "#56B6C2"
                },
                children: "echo"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " \"mysupersecretpassword\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " > "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "db_password.txt"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Ensure the file permissions are restricted:"
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
                children: "chmod"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 400"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " db_password.txt"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "using-the-docker-secret-create-command",
      children: ["Using the ", createVNode(_components.code, {
        children: "docker secret create"
      }), " command"]
    }), "\n", createVNode(_components.p, {
      children: "Once you have your secret file, you can create a Docker secret using the following command:"
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
      "data-language": "bash",
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
            children: " secret"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " my_db_password"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db_password.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command does the following:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "docker secret create"
        }), " is the command to create a new secret"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "my_db_password"
        }), " is the name you’re giving to this secret in Docker"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "db_password.txt"
        }), " is the file containing the secret"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You can verify the secret was created by running:"
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
      "data-language": "bash",
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
            children: " secret"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Common Commands"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Command"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "docker secret create"
            })
          }), createVNode(_components.td, {
            children: "Creates a new secret"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "docker secret ls"
            })
          }), createVNode(_components.td, {
            children: "Lists all secrets"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "docker secret inspect"
            })
          }), createVNode(_components.td, {
            children: "Shows details of a specific secret"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "docker secret rm <secret>"
            })
          }), createVNode(_components.td, {
            children: "Removes a secret"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Remember, after creating the secret, you can safely delete the local file as Docker now securely stores the secret."
    }), "\n", createVNode(_components.h2, {
      id: "implementing-secrets-in-docker-compose",
      children: "Implementing Secrets in Docker Compose"
    }), "\n", createVNode(_components.h3, {
      id: "add-the-docker-external-secret-created-previousely",
      children: "Add the Docker External Secret Created Previousely"
    }), "\n", createVNode(_components.p, {
      children: ["To use secrets in your Docker Compose setup, you need to declare them in your ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file and then configure your services to access these secrets. This will use the secret that you have defined initialy external."]
    }), "\n", createVNode(_components.h4, {
      id: "syntax-for-declaring-secrets-in-docker-composeyml",
      children: "Syntax for declaring secrets in docker-compose.yml"
    }), "\n", createVNode(_components.p, {
      children: "Here’s an example of how to declare and use secrets in a Docker Compose file:"
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
            children: "'3.8'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "  myapp"
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
            children: "myapp:latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "my_db_password"
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
            children: "DB_PASSWORD_FILE=/run/secrets/my_db_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  my_db_password"
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
      children: "Let’s break this down:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The ", createVNode(_components.code, {
          children: "secrets"
        }), " section at the root level declares which secrets this compose file uses."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "external: true"
        }), " indicates that this secret has been created externally (using ", createVNode(_components.code, {
          children: "docker secret create"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: ["In the ", createVNode(_components.code, {
          children: "services"
        }), " section, we list the secrets that should be made available to the service."]
      }), "\n", createVNode(_components.li, {
        children: ["The ", createVNode(_components.code, {
          children: "environment"
        }), " section shows how to reference the secret file path"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "accessing-secrets-in-containers",
      children: "Accessing secrets in containers"
    }), "\n", createVNode(_components.p, {
      children: ["Docker mounts secrets as files under ", createVNode(_components.code, {
        children: "/run/secrets/<secret_name>"
      }), " in the container. In the example above, the secret would be accessible at ", createVNode(_components.code, {
        children: "/run/secrets/my_db_password"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "To use the secret in your application, you would read the contents of this file. Here’s an example in Python:"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "with"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'/run/secrets/my_db_password'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'r'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " secret_file:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    db_password "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " secret_file."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "read"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "strip"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
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
            children: "# Now use db_password to connect to your database"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Remember, it’s the responsibility of your application code to read the secret from the file and use it appropriately."
    }), "\n", createVNode(_components.h3, {
      id: "integrating-secrets-directly-into-docker-compose-files",
      children: "Integrating Secrets Directly into Docker Compose Files"
    }), "\n", createVNode(_components.p, {
      children: "This section uses directly the docker compose file to define the secret you don’t need to create it before:"
    }), "\n", createVNode(_components.h4, {
      id: "step-1-define-secrets",
      children: "Step 1: Define Secrets"
    }), "\n", createVNode(_components.p, {
      children: ["First, define the secrets in your ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file."]
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
            children: "'3.7'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  my_secret"
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
            children: "    file"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./my_secret.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "step-2-use-secrets-in-services",
      children: "Step 2: Use Secrets in Services"
    }), "\n", createVNode(_components.p, {
      children: "Next, reference the secrets in your service definitions."
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
            children: "  my_service"
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
            children: "my_image"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "my_secret"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "step-3-access-secrets-in-containers",
      children: "Step 3: Access Secrets in Containers"
    }), "\n", createVNode(_components.p, {
      children: ["The secrets will be available in your container at ", createVNode(_components.code, {
        children: "/run/secrets"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cat"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run/secrets/my_secret"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Configuration"
      })
    }), "\n", createVNode(_components.p, {
      children: "Here’s a complete example:"
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
            children: "'3.7'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  db_password"
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
            children: "    file"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./db_password.txt"
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
            children: "  database"
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
            children: "mysql:latest"
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
            children: "      MYSQL_ROOT_PASSWORD_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/db_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "db_password"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["A fule exemple confiuration can be checked for ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/traefik-wildcard-certificate/",
        children: "traefik setup with wildcard certificat"
      }), " in here you have a full docker compose file will the things."]
    }), "\n", createVNode(_components.h3, {
      id: "differences-between-external-and-internal-docker-compose-secrets",
      children: "Differences Between External and Internal Docker Compose Secrets"
    }), "\n", createVNode(_components.p, {
      children: "Docker Compose allows you to work with two types of secrets: external and internal. Understanding the differences between these types is crucial for effective secret management."
    }), "\n", createVNode(_components.h4, {
      id: "external-secrets",
      children: "External Secrets"
    }), "\n", createVNode(_components.p, {
      children: "External secrets are created and managed outside of the Docker Compose file, typically using the Docker CLI or a secret management system."
    }), "\n", createVNode(_components.p, {
      children: "Characteristics:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Created independently of the Docker Compose file"
      }), "\n", createVNode(_components.li, {
        children: ["Referenced in the Compose file using the ", createVNode(_components.code, {
          children: "external: true"
        }), " attribute"]
      }), "\n", createVNode(_components.li, {
        children: "Provide better separation of concerns and enhanced security"
      }), "\n", createVNode(_components.li, {
        children: "Can be shared across multiple services and stacks"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "internal-secrets",
      children: "Internal Secrets"
    }), "\n", createVNode(_components.p, {
      children: "Internal secrets are defined directly within the Docker Compose file."
    }), "\n", createVNode(_components.p, {
      children: "Characteristics:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Defined and managed within the Docker Compose file"
      }), "\n", createVNode(_components.li, {
        children: ["Can be created from files, ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/docker-env-vars/",
          children: "environment variables"
        }), ", or directly in the Compose file"]
      }), "\n", createVNode(_components.li, {
        children: "Easier to set up for development and testing environments"
      }), "\n", createVNode(_components.li, {
        children: "Less secure as they may be visible in the Compose file"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "key-differences",
      children: "Key Differences"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Management:"
        }), " External secrets are managed outside the Compose file, while internal secrets are defined within it."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security:"
        }), " External secrets offer better security as they’re not visible in the Compose file."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reusability:"
        }), " External secrets can be easily shared across multiple services and stacks."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deployment:"
        }), " Internal secrets are easier to deploy in development environments but may require additional steps in production."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Versioning:"
        }), " External secrets can be versioned independently of the application code."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "when-to-use-each-type",
      children: "When to Use Each Type"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Use external secrets for:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Production environments"
          }), "\n", createVNode(_components.li, {
            children: "Sensitive data that needs to be shared across multiple services"
          }), "\n", createVNode(_components.li, {
            children: "When you need to manage secrets independently of your application code"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Use internal secrets for:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Development and testing environments"
          }), "\n", createVNode(_components.li, {
            children: "Quick prototyping"
          }), "\n", createVNode(_components.li, {
            children: "When the secret is specific to a single service and doesn’t need to be shared"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By understanding these differences, you can choose the most appropriate method for managing secrets in your Docker Compose projects, balancing security needs with ease of use and deployment considerations."
    }), "\n", createVNode(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", createVNode(_components.p, {
      children: "When working with Docker secrets, following best practices ensures optimal security and manageability. Here are some key recommendations:"
    }), "\n", createVNode(_components.h3, {
      id: "naming-conventions",
      children: "Naming conventions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Use descriptive names: Choose secret names that clearly indicate their purpose, e.g., ", createVNode(_components.code, {
          children: "prod_db_password"
        }), " instead of ", createVNode(_components.code, {
          children: "secret1"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Use consistent prefixes: For example, use ", createVNode(_components.code, {
          children: "prod_"
        }), " for production secrets and ", createVNode(_components.code, {
          children: "dev_"
        }), " for development secrets."]
      }), "\n", createVNode(_components.li, {
        children: "Avoid including sensitive information in names: The secret name itself shouldn’t reveal any confidential data."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
            children: "secrets"
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
            children: "  prod_api_key"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  dev_db_password"
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
    }), "\n", createVNode(_components.h3, {
      id: "version-control-considerations",
      children: "Version control considerations"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Never commit actual secret values to version control."
      }), "\n", createVNode(_components.li, {
        children: ["Use ", createVNode(_components.code, {
          children: ".gitignore"
        }), " to exclude files containing secrets."]
      }), "\n", createVNode(_components.li, {
        children: ["Consider using a ", createVNode(_components.code, {
          children: ".env.example"
        }), " file to show which environment variables are needed, without including actual values."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Example ", createVNode(_components.code, {
        children: ".gitignore"
      }), " entry:"]
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
            children: "*.env"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "secrets/"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "rotating-secrets",
      children: "Rotating secrets"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Regularly update secrets to minimize the impact of potential breaches."
      }), "\n", createVNode(_components.li, {
        children: ["Use Docker’s secret rotation feature in Swarm mode:\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: "Create a new secret with a versioned name."
          }), "\n", createVNode(_components.li, {
            children: "Update your service to use the new secret."
          }), "\n", createVNode(_components.li, {
            children: "Remove the old secret after ensuring all services are updated."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "bash",
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
            children: " secret"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db_password_v2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new_password.txt"
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
            children: " service"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --secret-rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db_password_v1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --secret-add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db_password_v2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " myservice"
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
            children: " secret"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db_password_v1"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "additional-best-practices",
      children: "Additional best practices"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Limit secret access: Only give services access to the secrets they absolutely need."
      }), "\n", createVNode(_components.li, {
        children: "Use secret drivers: Consider using external secret management systems through Docker secret drivers for advanced use cases."
      }), "\n", createVNode(_components.li, {
        children: "Audit secret usage: Regularly review which services are using which secrets and revoke unnecessary access."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-use-cases",
      children: "Example Use Cases"
    }), "\n", createVNode(_components.p, {
      children: "Docker secrets can be used in various scenarios to enhance the security of your containerized applications. Here are some common use cases:"
    }), "\n", createVNode(_components.h3, {
      id: "database-credentials",
      children: "Database credentials"
    }), "\n", createVNode(_components.p, {
      children: "Securely manage database passwords without hardcoding them in your application or Docker files."
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
            children: "'3.8'"
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
            children: "      POSTGRES_PASSWORD_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/db_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "db_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  app"
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
            children: "myapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "db_password"
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
            children: "      DB_PASSWORD_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/db_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  db_password"
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
    }), "\n", createVNode(_components.h3, {
      id: "api-keys",
      children: "API keys"
    }), "\n", createVNode(_components.p, {
      children: "Safely use API keys in your services without exposing them in your code or configuration files."
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
            children: "'3.8'"
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
            children: "  api_service"
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
            children: "api_service"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "api_key"
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
            children: "      API_KEY_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/api_key"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  api_key"
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
    }), "\n", createVNode(_components.h3, {
      id: "ssl-certificates",
      children: "SSL certificates"
    }), "\n", createVNode(_components.p, {
      children: "Manage SSL certificates securely for services that require HTTPS."
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
            children: "'3.8'"
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
            children: "  web"
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
            children: "nginx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "site_certificate"
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
            children: "site_key"
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
            children: "./nginx.conf:/etc/nginx/nginx.conf:ro"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  site_certificate"
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
            children: "    file"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./certs/site.crt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  site_key"
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
            children: "    file"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./certs/site.key"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "jwt-signing-keys",
      children: "JWT signing keys"
    }), "\n", createVNode(_components.p, {
      children: "Securely manage keys used for signing JSON Web Tokens (JWTs) in authentication services."
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
            children: "'3.8'"
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
            children: "  auth_service"
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
            children: "auth_service"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "jwt_private_key"
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
            children: "jwt_public_key"
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
            children: "      JWT_PRIVATE_KEY_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/jwt_private_key"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      JWT_PUBLIC_KEY_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/jwt_public_key"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  jwt_private_key"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  jwt_public_key"
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
      children: "By leveraging Docker secrets in these scenarios, you can significantly enhance the security of your containerized applications while maintaining flexibility and ease of management."
    }), "\n", createVNode(_components.h2, {
      id: "limitations-and-alternatives",
      children: "Limitations and Alternatives"
    }), "\n", createVNode(_components.p, {
      children: "While Docker secrets provide a robust solution for managing sensitive information in containerized environments, it’s important to be aware of their limitations and consider alternatives when necessary."
    }), "\n", createVNode(_components.h3, {
      id: "swarm-mode-requirement",
      children: "Swarm mode requirement"
    }), "\n", createVNode(_components.p, {
      children: "The primary limitation of Docker secrets is that they require Docker Swarm mode to be enabled. This can be a significant drawback for users who prefer to use Docker in standalone mode or with other orchestration tools like Kubernetes."
    }), "\n", createVNode(_components.p, {
      children: "Implications:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Not suitable for single-node deployments without Swarm"
      }), "\n", createVNode(_components.li, {
        children: "May require architectural changes in existing non-Swarm setups"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "other-options-for-managing-sensitive-data",
      children: "Other options for managing sensitive data"
    }), "\n", createVNode(_components.p, {
      children: "Given the limitations of Docker secrets, here are some alternatives to consider:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Environment Variables"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Pros: Simple to use, widely supported"
          }), "\n", createVNode(_components.li, {
            children: "Cons: Can be exposed through system calls, not encrypted at rest"
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: "Example:"
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
                children: "  app"
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
                children: "myapp"
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
                children: "DB_PASSWORD=mysecretpassword"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Config Management Tools"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Options: Ansible, Puppet, Chef"
          }), "\n", createVNode(_components.li, {
            children: "Pros: Powerful, flexible, can manage configurations across multiple servers"
          }), "\n", createVNode(_components.li, {
            children: "Cons: Require additional setup and knowledge"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Cloud Provider Secret Management Services"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Options: AWS Secrets Manager, Google Cloud Secret Manager, Azure Key Vault"
          }), "\n", createVNode(_components.li, {
            children: "Pros: Highly secure, integrated with cloud ecosystems"
          }), "\n", createVNode(_components.li, {
            children: "Cons: Vendor lock-in, potential cost implications"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "HashiCorp Vault"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Pros: Highly secure, platform-agnostic, supports dynamic secrets"
          }), "\n", createVNode(_components.li, {
            children: "Cons: Complex setup, requires additional infrastructure"
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: "Example integration:"
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
                children: "  app"
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
                children: "myapp"
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
                children: "VAULT_ADDR=http://vault:8200"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "    entrypoint"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"vault-agent\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"-config=/vault-agent-config.hcl\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "]"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Docker Config"
          }), ":"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Similar to Docker secrets but for non-sensitive configuration data"
          }), "\n", createVNode(_components.li, {
            children: "Can be used in conjunction with secrets for a comprehensive configuration management strategy"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "When choosing an alternative, consider factors such as your specific security requirements, existing infrastructure, team expertise, and scalability needs."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Using secrets in Docker Compose adds a vital layer of security to your applications. By keeping sensitive information out of your codebase, you reduce the risk of leaks and unauthorized access."
    }), "\n", createVNode(_components.p, {
      children: "Start implementing secrets today to bolster your application’s security. With these steps, you’ll handle confidential data more responsibly and effectively, ensuring a safer deployment environment."
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

const url = "src/content/posts/docker-compose-secrets.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-compose-secrets.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-compose-secrets.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
