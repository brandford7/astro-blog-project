import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-25T00:00:00.000Z",
  "title": "How To Run Any Python App in Docker with Docker Compose",
  "description": "Learn how Run Any Python App in Docker with Docker Compose and add an SSL certificate thru CloudFlare tunnels",
  "image": "../../assets/images/24/03/python-docker.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker", "python"],
  "canonical": "https://www.bitdoze.com/docker-run-python/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "create-a-dockerfile",
    "text": "Create a Dockerfile"
  }, {
    "depth": 2,
    "slug": "create-a-my-app-directory-with-your-python-scripts-and-requirementstxt",
    "text": "Create a my-app directory with your Python scripts and requirements.txt"
  }, {
    "depth": 2,
    "slug": "create-a-docker-compose-file-composeyml",
    "text": "Create a docker compose file compose.yml"
  }, {
    "depth": 2,
    "slug": "start-the-docker-compose-file",
    "text": "Start the docker compose file"
  }, {
    "depth": 2,
    "slug": "add-new-pip-package",
    "text": "Add new PIP Package"
  }, {
    "depth": 2,
    "slug": "add-domain-with-ssl-with-cloudflare-tunnels",
    "text": "Add domain with SSL with Cloudflare Tunnels"
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
      children: "Running Python apps in Docker containers using Docker Compose makes deployment simple, reproducible and scalable. In this article, we’ll guide you through the process of running any Python application in Docker using Docker Compose, targeting both beginners and intermediate users. We’ll cover everything from creating a Dockerfile and Docker Compose file to adding new PIP packages and setting up a domain with SSL using Cloudflare Tunnels."
    }), "\n", createVNode(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before we dive into the details, ensure you have the following prerequisites covered:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host WordPress, you can use one from ", createVNode(_components.a, {
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
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Docker and Docker Compose Installed"
        }), ": Docker to run containers and Docker Compose to define and share multi-container applications. Installation guides can be found on: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/install-docker-ubuntu-arm/",
          children: "How To Install Docker & Docker-compose"
        })]
      }), "\n"]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/7Nu7r8y_bDA",
      label: "How To Run Any Python App in Docker with Docker Compose"
    }), "\n", createVNode(_components.h2, {
      id: "create-a-dockerfile",
      children: "Create a Dockerfile"
    }), "\n", createVNode(_components.p, {
      children: "The Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Here’s a simple Dockerfile for a Python application:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "FROM python:3.12"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "WORKDIR /app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "COPY ./my-app/requirements.txt /app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "RUN pip install --upgrade pip"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "RUN pip install --no-cache-dir -r requirements.txt"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "FROM python:3.12"
        }), ": This line tells Docker to use the official Python 3.12 image as the base image for your application."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "WORKDIR /app"
        }), ": Sets the working directory inside the container to ", createVNode(_components.code, {
          children: "/app"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "COPY ./my-app/requirements.txt /app"
        }), ": Copies the ", createVNode(_components.code, {
          children: "requirements.txt"
        }), " file from your project into the ", createVNode(_components.code, {
          children: "/app"
        }), " directory in the container."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "RUN pip install --upgrade pip"
        }), ": Upgrades pip to its latest version inside the container."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "RUN pip install --no-cache-dir -r requirements.txt"
        }), ": Installs the Python dependencies defined in ", createVNode(_components.code, {
          children: "requirements.txt"
        }), " without storing the cache, to keep the image size small."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "create-a-my-app-directory-with-your-python-scripts-and-requirementstxt",
      children: "Create a my-app directory with your Python scripts and requirements.txt"
    }), "\n", createVNode(_components.p, {
      children: "To prepare your Python application for Docker:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: ["Create a ", createVNode(_components.code, {
              children: "requirements.txt"
            }), " file"]
          }), " with the following content:"]
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
                children: "nicegui"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                children: "streamlit"
              })
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["This file lists all the Python packages your application needs. In this case, ", createVNode(_components.code, {
            children: "nicegui"
          }), " and ", createVNode(_components.code, {
            children: "streamlit"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: ["Create a ", createVNode(_components.code, {
              children: "main.py"
            }), " file"]
          }), " with a simple NiceGUI application:"]
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
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " nicegui "
              }), createVNode(_components.span, {
                style: {
                  color: "#C678DD"
                },
                children: "import"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " ui"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "ui."
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "label"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "'Hello NiceGUI!'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "ui."
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "run"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "()"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: "This script creates a web interface with a label displaying “Hello NiceGUI!”.\r\nIn case you want to know more about NiceGUI you can check:"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/nicegui-get-started/",
          children: "NiceGUI For Beginners: Build An UI to Python App in 5 Minutes"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/nicegui-pages/",
          children: "How To Add Multiple Pages to NiceGUI"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "create-a-docker-compose-file-composeyml",
      children: ["Create a docker compose file ", createVNode(_components.code, {
        children: "compose.yml"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Docker Compose allows you to define and run multi-container Docker applications. Here’s how to set up your ", createVNode(_components.code, {
        children: "compose.yml"
      }), " for a basic Python web server:"]
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
            children: "\"3\""
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
            children: "python-server"
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
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "python main.py"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    build"
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
            children: "      context"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      dockerfile"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Dockerfile"
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
            children: "./my-app:/app"
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
            children: "\"5021:8080\""
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
      children: ["For running Streamlit, modify the ", createVNode(_components.code, {
        children: "command"
      }), " and ", createVNode(_components.code, {
        children: "ports"
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "command"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "streamlit hello"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: "\"5021:8501\""
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "version: \"3\""
        }), ": Specifies the version of the Docker Compose file format."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "services"
        }), ": Defines the services your application consists of. In this case, just one service named ", createVNode(_components.code, {
          children: "web"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "container_name"
        }), ": Names your container for easier reference."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "command"
        }), ": The command that runs your application. For NiceGUI, it’s ", createVNode(_components.code, {
          children: "python main.py"
        }), ". For Streamlit, it’s ", createVNode(_components.code, {
          children: "streamlit hello"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "build"
        }), ": Instructions to build the Docker image. It uses the current directory (", createVNode(_components.code, {
          children: "."
        }), ") and the Dockerfile named ", createVNode(_components.code, {
          children: "Dockerfile"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "volumes"
        }), ": Maps the ", createVNode(_components.code, {
          children: "./my-app"
        }), " directory on your host to ", createVNode(_components.code, {
          children: "/app"
        }), " in the container, allowing for live updates without rebuilding the image."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ports"
        }), ": Maps port ", createVNode(_components.code, {
          children: "5021"
        }), " on your host to port ", createVNode(_components.code, {
          children: "8080"
        }), " (for NiceGUI) or ", createVNode(_components.code, {
          children: "8501"
        }), " (for Streamlit) in the container, making your application accessible via ", createVNode(_components.code, {
          children: "http://localhost:5021"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "start-the-docker-compose-file",
      children: "Start the docker compose file"
    }), "\n", createVNode(_components.p, {
      children: "To start your application, run:"
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
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --force-recreate"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --build"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command builds the images if they don’t exist, starts the containers in detached mode, forces recreation of the containers, and rebuilds the images even if they exist."
    }), "\n", createVNode(_components.h2, {
      id: "add-new-pip-package",
      children: "Add new PIP Package"
    }), "\n", createVNode(_components.p, {
      children: "To add a new PIP package:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: ["Update the ", createVNode(_components.code, {
              children: "requirements.txt"
            })]
          }), " with the package you want."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Rebuild and restart your containers"
          }), " with the same command:"]
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
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --force-recreate"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --build"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This ensures your application always runs with the latest dependencies."
    }), "\n", createVNode(_components.h2, {
      id: "add-domain-with-ssl-with-cloudflare-tunnels",
      children: "Add domain with SSL with Cloudflare Tunnels"
    }), "\n", createVNode(_components.p, {
      children: "You need to let CloudFlare Tunel to know which port is using, you just need to go in the Access - Tunnels and choose the tunnel you created and add a hostname that will link a domain or subdomain and the service and port . This will need to be as for the URL you have set in the .env file."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can also check ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/cloudpanel-setup-dockge/",
          children: "Setup CloudPanel as Reverse Proxy with Docker and Dokge"
        }), " to use CloudPanel as a reverse proxy to your Docker containers."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "And that’s about it, now you can use your Python app, test it and see how it works."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Running a Python application in Docker using Docker Compose simplifies dependency management, ensures consistency across environments, and makes your application easy to deploy and scale. By following the steps outlined in this article, you can containerize any Python application, from simple scripts to complex web applications, and enjoy the benefits of Docker’s containerization technology. Whether you’re a beginner or an intermediate user, the process is straightforward and significantly enhances your development and deployment workflows."
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

const url = "src/content/posts/docker-run-python.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-run-python.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-run-python.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
