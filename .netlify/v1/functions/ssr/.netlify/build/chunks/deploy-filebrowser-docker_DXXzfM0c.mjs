import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { i as imag1 } from './cloudflare-tunel-setup_dnqH4QSI.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-07-26T00:00:00.000Z",
  "title": "Simplify File Management with Docker Filebrowser: Easy Setup Guide",
  "description": "Learn how you can install Filebrowser with the help of Docker and docker compose to manage your server files with a UI",
  "image": "../../assets/images/24/04/easy-file-management.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["self-hosted"],
  "canonical": "https://www.bitdoze.com/deploy-filebrowser-docker/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-set-up-filebrowser-with-docker-compose",
    "text": "How To Set Up Filebrowser with Docker Compose"
  }, {
    "depth": 3,
    "slug": "1-prerequisites",
    "text": "1. Prerequisites"
  }, {
    "depth": 3,
    "slug": "2-create-a-docker-compose-file",
    "text": "2. Create A Docker Compose File"
  }, {
    "depth": 3,
    "slug": "3-create-the-filebrowserdb-and-settingsjson",
    "text": "3. Create the filebrowser.db and settings.json"
  }, {
    "depth": 3,
    "slug": "4-deploy-filebrowser",
    "text": "4. Deploy Filebrowser"
  }, {
    "depth": 3,
    "slug": "5-configure-the-cloudflare-tunnels-for-ssl-and-domain-access",
    "text": "5. Configure the CloudFlare Tunnels for SSL and Domain Access"
  }, {
    "depth": 3,
    "slug": "6-access-the-filebrowser-ui",
    "text": "6. Access the Filebrowser UI"
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
        href: "https://filebrowser.org/",
        children: "Filebrowser"
      }), " is a powerful web-based file manager that allows you to easily manage your files and folders from any device with a web browser. It provides a user-friendly interface for uploading, deleting, previewing, renaming, and editing files, as well as creating and managing user accounts with customizable permissions."]
    }), "\n", createVNode(_components.p, {
      children: "One of the best ways to set up Filebrowser is by using Docker, which simplifies the installation and deployment process. In this guide, we’ll walk you through the steps to set up Filebrowser with Docker Compose, a tool that makes it easy to manage and deploy multi-container Docker applications."
    }), "\n", createVNode(_components.p, {
      children: ["If you’re interested in exploring other useful Docker containers for your home server setup, check out our comprehensive guide: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource provides a wealth of information on various containers that can enhance your home server’s capabilities, including media management, networking tools, and productivity applications."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-set-up-filebrowser-with-docker-compose",
      children: "How To Set Up Filebrowser with Docker Compose"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/9KT2sF7CQsg",
      label: "Docker Filebrowser Install"
    }), "\n", createVNode(_components.h3, {
      id: "1-prerequisites",
      children: "1. Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before you begin, make sure you have the following prerequisites in place:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["VPS where you can host FlowiseAI, you can use one from ", createVNode(_components.a, {
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
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can use also Traefik as a reverse proxy for your apps. I have created a full tutorial with Dockge install also to manage your containers on: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/traefik-proxy-docker/",
          children: "How to Use Traefik as A Reverse Proxy in Docker"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Having all of this you will be ready to move to next step and add the containers in Dockge."
    }), "\n", createVNode(_components.h3, {
      id: "2-create-a-docker-compose-file",
      children: "2. Create A Docker Compose File"
    }), "\n", createVNode(_components.p, {
      children: ["Create a new file named ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " in your preferred directory and add the following configuration:"]
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
            children: "  filebrowser"
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
            children: "filebrowser/filebrowser:v2-s6"
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
            children: "filebrowser"
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
            children: "/opt/stacks:/srv"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " # Change to match your directory"
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
            children: "./filebrowser.db:/database/filebrowser.db"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " # Change to match your directory"
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
            children: "./settings.json:/config/settings.json"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " # Change to match your directory"
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
            children: "      PUID"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "$(id -u)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      PGID"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "$(id -g)"
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
            children: "5040:80"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " # Change the port if needed"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In this configuration, we’re using the ", createVNode(_components.code, {
        children: "filebrowser/filebrowser:v2-s6"
      }), " Docker image, which is the latest stable version of Filebrowser. The ", createVNode(_components.code, {
        children: "volumes"
      }), " section maps the necessary directories and files for Filebrowser to function, including the file storage directory (", createVNode(_components.code, {
        children: "/opt/stacks"
      }), "), the database file (", createVNode(_components.code, {
        children: "filebrowser.db"
      }), "), and the settings file (", createVNode(_components.code, {
        children: "settings.json"
      }), "). You’ll need to update these paths to match your own setup."]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "environment"
      }), " section sets the user and group IDs for the Filebrowser container, which is important for file permissions. The ", createVNode(_components.code, {
        children: "ports"
      }), " section exposes the Filebrowser web interface on port ", createVNode(_components.code, {
        children: "5040"
      }), ", which you can change if needed."]
    }), "\n", createVNode(_components.h3, {
      id: "3-create-the-filebrowserdb-and-settingsjson",
      children: ["3. Create the ", createVNode(_components.code, {
        children: "filebrowser.db"
      }), " and ", createVNode(_components.code, {
        children: "settings.json"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["In the same directory as your ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file, create the following files:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "filebrowser.db:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " filebrowser.db"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "settings.json:"
      }), "\r\nFetch the ", createVNode(_components.a, {
        href: "https://github.com/filebrowser/filebrowser/blob/master/docker/root/defaults/settings.json",
        children: "Filebrowser settings file"
      }), " and create one with:"]
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
            children: "vi"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " settings.json"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Then paste the following configuration:"
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
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"port\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "80"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"baseURL\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"address\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"log\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"stdout\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"database\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/database/filebrowser.db\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"root\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/srv\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In case you are seeing the bellow error:"
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
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024/04/25"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 07:17:26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /database/filebrowser.db"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024/04/25"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 07:17:26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /database/filebrowser.db:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " permission"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " denied"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Just grant the ", createVNode(_components.code, {
        children: "filebrowser.db"
      }), " the rights you are seeing in the startup of the container, this happens when you are running with root the docker install:"]
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
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "GID/UID"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "───────────────────────────────────────"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "filebrowser"
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
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "User"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UID:"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    911"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "User"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " GID:"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    1001"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "filebrowser"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "───────────────────────────────────────"
          })]
        })]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "chown"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 911:1001"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " filebrowser.db"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-deploy-filebrowser",
      children: "4. Deploy Filebrowser"
    }), "\n", createVNode(_components.p, {
      children: ["In the same directory as your ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file, run the following command to start the Filebrowser container:"]
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
      children: "You can check that the container is running with the following command:"
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
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "grep"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " filebrowser"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "5-configure-the-cloudflare-tunnels-for-ssl-and-domain-access",
      children: "5. Configure the CloudFlare Tunnels for SSL and Domain Access"
    }), "\n", createVNode(_components.p, {
      children: "To securely access your Filebrowser instance from the internet, you’ll need to set up a reverse proxy like CloudFlare Tunnels. This will provide SSL/TLS encryption and allow you to access Filebrowser using a domain or subdomain."
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
      id: "6-access-the-filebrowser-ui",
      children: "6. Access the Filebrowser UI"
    }), "\n", createVNode(_components.p, {
      children: ["Once you’ve set up the CloudFlare Tunnels (or another reverse proxy), you can access the Filebrowser web interface using the domain or subdomain you configured. The default login credentials are ", createVNode(_components.code, {
        children: "admin/admin"
      }), ", but you should change the password immediately after your first login."]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "By following this guide, you’ve successfully set up Filebrowser using Docker Compose, which simplifies the installation and deployment process. Filebrowser provides a user-friendly way to manage your files and folders, and the Docker-based setup ensures that it’s easy to maintain and scale as your needs grow."
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

const url = "src/content/posts/deploy-filebrowser-docker.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-filebrowser-docker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-filebrowser-docker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
