import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-07-10T00:00:00.000Z",
  "title": "Top 50+ Docker Commands You MUST Know",
  "description": "Master Docker with our comprehensive guide to 50+ essential commands. From basic operations to advanced container management, this resource covers everything DevOps professionals and Docker enthusiasts need to know.",
  "image": "../../assets/images/24/07/docker-commands.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/docker-commands/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "section-1-basic-docker-commands",
    "text": "Section 1: Basic Docker Commands"
  }, {
    "depth": 3,
    "slug": "11-docker-version-and-info",
    "text": "1.1 Docker Version and Info"
  }, {
    "depth": 3,
    "slug": "12-docker-help",
    "text": "1.2 Docker Help"
  }, {
    "depth": 2,
    "slug": "section-2-working-with-docker-images",
    "text": "Section 2: Working with Docker Images"
  }, {
    "depth": 3,
    "slug": "21-pulling-images",
    "text": "2.1 Pulling Images"
  }, {
    "depth": 3,
    "slug": "22-listing-images",
    "text": "2.2 Listing Images"
  }, {
    "depth": 3,
    "slug": "23-removing-images",
    "text": "2.3 Removing Images"
  }, {
    "depth": 3,
    "slug": "24-building-images",
    "text": "2.4 Building Images"
  }, {
    "depth": 2,
    "slug": "section-3-managing-docker-containers",
    "text": "Section 3: Managing Docker Containers"
  }, {
    "depth": 3,
    "slug": "31-running-containers",
    "text": "3.1 Running Containers"
  }, {
    "depth": 3,
    "slug": "32-listing-containers",
    "text": "3.2 Listing Containers"
  }, {
    "depth": 3,
    "slug": "33-stopping-and-starting-containers",
    "text": "3.3 Stopping and Starting Containers"
  }, {
    "depth": 3,
    "slug": "34-removing-containers",
    "text": "3.4 Removing Containers"
  }, {
    "depth": 2,
    "slug": "section-4-inspecting-and-logging",
    "text": "Section 4: Inspecting and Logging"
  }, {
    "depth": 3,
    "slug": "41-inspecting-containers-and-images",
    "text": "4.1 Inspecting Containers and Images"
  }, {
    "depth": 3,
    "slug": "42-viewing-logs",
    "text": "4.2 Viewing Logs"
  }, {
    "depth": 2,
    "slug": "section-5-networking",
    "text": "Section 5: Networking"
  }, {
    "depth": 3,
    "slug": "51-managing-networks",
    "text": "5.1 Managing Networks"
  }, {
    "depth": 3,
    "slug": "52-connecting-and-disconnecting-containers",
    "text": "5.2 Connecting and Disconnecting Containers"
  }, {
    "depth": 2,
    "slug": "section-6-volumes-and-data-management",
    "text": "Section 6: Volumes and Data Management"
  }, {
    "depth": 3,
    "slug": "61-managing-volumes",
    "text": "6.1 Managing Volumes"
  }, {
    "depth": 3,
    "slug": "62-using-volumes",
    "text": "6.2 Using Volumes"
  }, {
    "depth": 2,
    "slug": "section-7-docker-compose",
    "text": "Section 7: Docker Compose"
  }, {
    "depth": 3,
    "slug": "71-basic-commands",
    "text": "7.1 Basic Commands"
  }, {
    "depth": 3,
    "slug": "72-managing-services",
    "text": "7.2 Managing Services"
  }, {
    "depth": 2,
    "slug": "section-8-advanced-commands",
    "text": "Section 8: Advanced Commands"
  }, {
    "depth": 3,
    "slug": "81-docker-exec",
    "text": "8.1 Docker Exec"
  }, {
    "depth": 3,
    "slug": "82-docker-export-and-import",
    "text": "8.2 Docker Export and Import"
  }, {
    "depth": 3,
    "slug": "83-docker-save-and-load",
    "text": "8.3 Docker Save and Load"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Docker has revolutionized the way software is developed, shipped, and deployed. By providing a consistent environment across different stages of development, Docker ensures that applications run seamlessly from development to production. This containerization technology has become a cornerstone in modern DevOps practices, enabling developers and system administrators to work more efficiently and reliably."
    }), "\n", createVNode(_components.p, {
      children: "Knowing Docker commands is essential for anyone involved in software development or system administration. These commands allow you to manage containers, images, networks, and volumes with ease, providing you with the tools needed to build, deploy, and maintain applications effectively. This article aims to provide a comprehensive list of the top 50+ Docker commands that are crucial for effective container management. Whether you are a beginner or an experienced user, mastering these commands will enhance your productivity and streamline your workflows."
    }), "\n", createVNode(_components.h2, {
      id: "section-1-basic-docker-commands",
      children: "Section 1: Basic Docker Commands"
    }), "\n", createVNode(_components.h3, {
      id: "11-docker-version-and-info",
      children: "1.1 Docker Version and Info"
    }), "\n", createVNode(_components.p, {
      children: "Understanding the version and system-wide information of Docker installed on your machine is the first step in mastering Docker commands. Here are the essential commands:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker --version"
          }), ": This command displays the version of Docker installed on your system. It’s a quick way to verify that Docker is installed and to check which version you are running."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --version"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 20.10.7,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " build"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " f0df350"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker version"
          }), ": This command provides detailed version information about the Docker client and server. It includes the version number, Git commit, and build date."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Client:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "           20.10.7"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " API"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "       1.41"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Go"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        go1.13.15"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Git"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " commit:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        f0df350"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Built:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "             Wed"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Jun"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "  2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:24"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 2021"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " OS/Arch:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "           linux/amd64"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Context:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "           default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Experimental:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "      true"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Server:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Engine:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "          20.10.7"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  API"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "      1.41"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (minimum "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "version"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 1.12"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Go"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       go1.13.15"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Git"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " commit:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       b0f5bc3"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Built:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            Wed"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Jun"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "  2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:55:04"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 2021"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  OS/Arch:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "          linux/amd64"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Experimental:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "     false"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker info"
          }), ": This command displays system-wide information about Docker, including the number of containers, images, and the storage driver in use. It’s useful for getting a comprehensive overview of your Docker environment."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " info"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Client:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Context:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Debug"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Mode:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " false"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Server:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Containers:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 2"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Running:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 1"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Paused:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 0"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Stopped:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 1"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Images:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 5"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Storage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Driver:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " overlay2"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Logging"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Driver:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " json-file"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Cgroup"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Driver:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " cgroupfs"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Plugins:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Volume:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " local"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Network:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " bridge"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " host"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ipvlan"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " macvlan"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " null"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " overlay"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  Log:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " awslogs"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " fluentd"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " gcplogs"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " gelf"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " journald"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " json-file"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " local"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " logentries"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " splunk"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " syslog"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Swarm:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " inactive"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Runtimes:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " runc"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Default"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Runtime:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " runc"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Init"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Binary:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker-init"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " containerd"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 7ad184331fa3e55e52b890ea95e65ba581ae3429"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " runc"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " b9ee9c6314599f1b4a7f497e1f1f856fe433d3b7"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " init"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " de40ad0"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Security"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Options:"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  seccomp"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "   Profile:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Kernel"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Version:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 5.8.0-53-generic"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Operating"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " System:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Ubuntu"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 20.04.2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " LTS"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " OSType:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " linux"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Architecture:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " x86_64"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " CPUs:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 4"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Total"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Memory:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 7.771GiB"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Name:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker-desktop"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ID:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 3Z4Q:KZ3F:3Z4Q:KZ3F:3Z4Q:KZ3F:3Z4Q:KZ3F"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Root"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Dir:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/lib/docker"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Debug"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Mode:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " false"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Registry:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " https://index.docker.io/v1/"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Labels:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Experimental:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " false"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Insecure"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Registries:"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  127.0.0.0/8"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " Live"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Restore"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Enabled:"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " false"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "12-docker-help",
      children: "1.2 Docker Help"
    }), "\n", createVNode(_components.p, {
      children: "Docker provides built-in help commands to assist you in understanding the usage and options of various Docker commands:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker --help"
          }), ": This command displays a list of all available Docker commands along with a brief description of each. It’s a handy reference for quickly finding the command you need."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --help"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Usage:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [OPTIONS] COMMAND"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "A"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " self-sufficient"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " runtime"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " for"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " containers"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Options:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --config"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Location"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " of"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " client"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " config"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " files"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "                       \"/root/.docker\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  -D,"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --debug"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "          Enable"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " debug"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " mode"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  -H,"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --host"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " list"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Daemon"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " socket"
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
                children: "to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " connect"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  -l,"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --log-level"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Set"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " the"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " logging"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " level"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (debug, "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "info,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " warn,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " error,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " fatal"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "                           ("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "default"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " \"info\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --tls"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                Use"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " TLS"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "; "
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "implied"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " by"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --tlsverify"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --tlscacert"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Trust"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " certs"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " signed"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " only"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " by"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " this"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " CA"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "                       \"/root/.docker/ca.pem\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --tlscert"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     Path"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " TLS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " certificate"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " file"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "                       \"/root/.docker/cert.pem\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --tlskey"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Path"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " TLS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " key"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " file"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (default "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/root/.docker/key.pem\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --tlsverify"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "          Use"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " TLS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " and"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " verify"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " the"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " remote"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  -v,"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --version"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        Print"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " version"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " information"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " and"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " quit"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Management"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Commands:"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  builder"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " builds"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  config"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " configs"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  container"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " containers"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  context"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " contexts"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  engine"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " the"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " engine"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  image"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " images"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " networks"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  node"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Swarm"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " nodes"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  plugin"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " plugins"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  secret"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [Docker "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "secrets]"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "https://www.bitdoze.com/docker-compose-secrets/"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  service"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " services"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  stack"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " stacks"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  swarm"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Swarm"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  system"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Docker"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  trust"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " trust"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " on"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " images"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  volume"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Manage"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " volumes"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Commands:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  attach"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Attach"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " local"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " standard"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " input,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " output,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " and"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " error"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " streams"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " running"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  build"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "       Build"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " an"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " image"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " from"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Dockerfile"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  commit"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Create"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " new"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " image"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " from"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container's changes"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  cp          Copy files/folders between a container and the local filesystem"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  create      Create a new container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  diff        Inspect changes to files or directories on a container's"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " filesystem"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  events"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      Get"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " real"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " time"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " events"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " from"
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
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#56B6C2"
                },
                children: "  exec"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        Run"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " command"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " in"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " running"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#C678DD"
                },
                children: "  export"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "      Export"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: " container"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "'s filesystem as a tar archive"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  history     Show the history of an image"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  images      List images"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  import      Import the contents from a tarball to create a filesystem image"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  info        Display system-wide information"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  inspect     Return low-level information on Docker objects"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  kill        Kill one or more running containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  load        Load an image from a tar archive or STDIN"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  login       Log in to a Docker registry"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  logout      Log out from a Docker registry"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  logs        Fetch the logs of a container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  pause       Pause all processes within one or more containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  port        List port mappings or a specific mapping for the container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  ps          List containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  pull        Pull an image or a repository from a registry"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  push        Push an image or a repository to a registry"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  rename      Rename a container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  restart     Restart one or more containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  rm          Remove one or more containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  rmi         Remove one or more images"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  run         Run a command in a new container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  save        Save one or more images to a tar archive (streamed to STDOUT by default)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  search      Search the Docker Hub for images"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  start       Start one or more stopped containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  stats       Display a live stream of container(s) resource usage statistics"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  stop        Stop one or more running containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  top         Display the running processes of a container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  unpause     Unpause all processes within one or more containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  update      Update configuration of one or more containers"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  version     Show the Docker version information"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  wait        Block until one or more containers stop, then print their exit codes"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "Run '"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: " COMMAND"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: " --help"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "' for more information on a command."
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker <command> --help"
          }), ": This command provides detailed help for a specific Docker command, including its usage, options, and examples. For instance, if you want to learn more about the ", createVNode(_components.code, {
            children: "docker run"
          }), " command, you can use:"]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --help"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Usage:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [OPTIONS] IMAGE [COMMAND] [ARG...]"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Run"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " command"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " in"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " new"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Options:"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  -d,"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --detach"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                         Run"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " in"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " background"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " and"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " print"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ID"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  --name"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                        Assign"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " name"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " the"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "  -p,"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --publish"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " list"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                   Publish"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " container's port(s) to the host"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  -v, --volume list                    Bind mount a volume"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --rm                                 Automatically remove the container when it exits"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  -i, --interactive                    Keep STDIN open even if not attached"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  -t, --tty                            Allocate a pseudo-TTY"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --network string                     Connect a container to a network"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --restart string                     Restart policy to apply when a container exits"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --env list                           Set environment variables"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --label list                         Set metadata on a container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --log-driver string                  Logging driver for the container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --log-opt list                       Log driver options"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --privileged                         Give extended privileges to this container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --user string                        Username or UID (format: <name|uid>[:<group|gid>])"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --workdir string                     Working directory inside the container"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --entrypoint string                  Overwrite the default ENTRYPOINT of the image"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --cpus decimal                       Number of CPUs"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --memory string                      Memory limit"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --memory-swap string                 Swap limit equal to memory plus swap: '-1' to enable unlimited swap"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --memory-reservation string          Memory soft limit"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --cpu-shares int                     CPU shares (relative weight)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --cpu-period int                     Limit CPU CFS (Completely Fair Scheduler) period"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --cpu-quota int                      Limit CPU CFS (Completely Fair Scheduler) quota"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --cpuset-cpus string                 CPUs in which to allow execution (0-3, 0,1)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  --cpuset-mems string                 MEMs in which to allow execution (0-3, 0,1)"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These basic commands form the foundation of working with Docker, providing you with essential information and help to get started."
    }), "\n", createVNode(_components.h2, {
      id: "section-2-working-with-docker-images",
      children: "Section 2: Working with Docker Images"
    }), "\n", createVNode(_components.h3, {
      id: "21-pulling-images",
      children: "2.1 Pulling Images"
    }), "\n", createVNode(_components.p, {
      children: "Docker images are the blueprints for containers, and pulling images from a registry is often the first step in using Docker. Here are the key commands for pulling images:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker pull <image>"
          }), ": This command downloads an image from a Docker registry (such as Docker Hub). If no tag is specified, Docker defaults to pulling the ", createVNode(_components.code, {
            children: "latest"
          }), " tag."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Using"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " default"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " tag:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " latest"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "latest:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pulling"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " from"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " library/ubuntu"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6d28e14ab8c8:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " complete"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "1c9383292a8f:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " complete"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6c0b1f2a1dcd:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " complete"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "Digest: sha256:4e9f2cdfd5d6b3e5d5e5c5e5d5e5e5d5e5d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker pull <image>:<tag>"
          }), ": This command downloads a specific version of an image from a Docker registry. Tags are used to specify different versions of an image."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " nginx:alpine"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "alpine:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pulling"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " from"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " library/nginx"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6d28e14ab8c8:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " complete"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "1c9383292a8f:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " complete"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6c0b1f2a1dcd:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Pull"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " complete"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "Digest: sha256:4e9f2cdfd5d6b3e5d5e5c5e5d5e5e5d5e5d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "22-listing-images",
      children: "2.2 Listing Images"
    }), "\n", createVNode(_components.p, {
      children: "Once you have pulled images, you may want to list them to see what is available on your local system. Docker provides commands to list all images:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker images"
          }), ": This command lists all images on the local system, including their repository, tag, image ID, creation date, and size."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " images"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "REPOSITORY"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "          TAG"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                 IMAGE"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ID"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            CREATED"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "             SIZE"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "ubuntu"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "              latest"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "              4e9f2cdfd5d6"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "        2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " weeks"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ago"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "         72.9MB"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "nginx"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "               alpine"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "              6d28e14ab8c8"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "        3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " weeks"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ago"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "         22.3MB"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "23-removing-images",
      children: "2.3 Removing Images"
    }), "\n", createVNode(_components.p, {
      children: "Managing disk space is crucial, especially when dealing with multiple images. Docker provides commands to remove images that are no longer needed:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker rmi <image>"
          }), ": This command removes one or more images by their image ID or repository name and tag. You can specify multiple images to remove by separating them with spaces."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " rmi"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " nginx:alpine"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Untagged:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " nginx:alpine"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Deleted:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " sha256:6d28e14ab8c8"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker rmi $(docker images -q)"
          }), ": This command removes all images on the local system. The ", createVNode(_components.code, {
            children: "-q"
          }), " flag with ", createVNode(_components.code, {
            children: "docker images"
          }), " outputs only the image IDs, which are then passed to ", createVNode(_components.code, {
            children: "docker rmi"
          }), " for removal."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " rmi"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " $("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " images"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -q"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Untagged:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu:latest"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Deleted:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " sha256:4e9f2cdfd5d6"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "24-building-images",
      children: "2.4 Building Images"
    }), "\n", createVNode(_components.p, {
      children: "Building custom images from a Dockerfile is a common practice in Docker. Here are the commands to build images:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker build -t <image>:<tag> <path>"
          }), ": This command builds an image from a Dockerfile located at the specified path. The ", createVNode(_components.code, {
            children: "-t"
          }), " flag tags the image with a name and optional tag."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " build"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -t"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp:1.0"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ."
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Sending"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " build"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " context"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " daemon"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  2.048kB"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Step"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 1/3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " FROM"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "4e9f2cdfd5d6"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Step"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 2/3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " COPY"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /app"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "Using"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " cache"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "1c9383292a8f"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Step"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 3/3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " CMD"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"python\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/app/app.py\"]"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "Using"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " cache"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "6c0b1f2a1dcd"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Successfully"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " built"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 6c0b1f2a1dcd"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Successfully"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " tagged"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp:1.0"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker build --no-cache -t <image>:<tag> <path>"
          }), ": This command builds an image without using the cache. It’s useful when you want to ensure that all steps in the Dockerfile are executed fresh."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " build"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --no-cache"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -t"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp:1.0"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ."
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Sending"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " build"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " context"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " daemon"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  2.048kB"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Step"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 1/3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " FROM"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "4e9f2cdfd5d6"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Step"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 2/3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " COPY"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /app"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "1c9383292a8f"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Step"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 3/3"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " CMD"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"python\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/app/app.py\"]"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: " ---"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "6c0b1f2a1dcd"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Successfully"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " built"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 6c0b1f2a1dcd"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Successfully"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " tagged"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp:1.0"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These commands cover the essential operations for working with Docker images, from pulling and listing to removing and building them."
    }), "\n", createVNode(_components.h2, {
      id: "section-3-managing-docker-containers",
      children: "Section 3: Managing Docker Containers"
    }), "\n", createVNode(_components.h3, {
      id: "31-running-containers",
      children: "3.1 Running Containers"
    }), "\n", createVNode(_components.p, {
      children: "Running containers is one of the core functionalities of Docker. Here are the key commands for running containers:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker run <image>"
          }), ": This command runs a container from a specified image. If the image is not available locally, Docker will pull it from the registry."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker run -d <image>"
          }), ": This command runs a container in detached mode, meaning it runs in the background."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -d"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " nginx"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "5d8c5c4b5b6a"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker run -it <image>"
          }), ": This command runs a container in interactive mode with a terminal attached. It’s useful for debugging or running commands inside the container."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -it"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "root@5d8c5c4b5b6a:/#"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "32-listing-containers",
      children: "3.2 Listing Containers"
    }), "\n", createVNode(_components.p, {
      children: "To manage running and stopped containers, Docker provides commands to list them:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker ps"
          }), ": This command lists all running containers, displaying their container ID, image, command, creation time, status, ports, and names."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ps"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "CONTAINER"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ID"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   IMAGE"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     COMMAND"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                  CREATED"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "         STATUS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "         PORTS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     NAMES"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "5d8c5c4b5b6a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   nginx"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     \"nginx -g 'daemon of...\""
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "   2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " minutes"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ago"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Up"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " minutes"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   80/tcp"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    amazing_bell"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker ps -a"
          }), ": This command lists all containers, including stopped ones. It provides a comprehensive view of all containers on the system."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ps"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -a"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "CONTAINER"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ID"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   IMAGE"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     COMMAND"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                  CREATED"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "         STATUS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                     PORTS"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     NAMES"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "5d8c5c4b5b6a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   nginx"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     \"nginx -g 'daemon of...\""
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "   2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " minutes"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ago"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Up"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " minutes"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "               80/tcp"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "1c9383292a8f"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   ubuntu"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    \"/bin/bash\""
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "              5"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " minutes"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ago"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Exited"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (0) 3 minutes ago             compassionate_morse"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "33-stopping-and-starting-containers",
      children: "3.3 Stopping and Starting Containers"
    }), "\n", createVNode(_components.p, {
      children: "Managing the state of containers involves stopping, starting, and restarting them:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker stop <container>"
          }), ": This command stops a running container. You can specify the container by its ID or name."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " stop"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "amazing_bell"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker start <container>"
          }), ": This command starts a stopped container."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " start"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "amazing_bell"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker restart <container>"
          }), ": This command restarts a running or stopped container."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " restart"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "amazing_bell"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "34-removing-containers",
      children: "3.4 Removing Containers"
    }), "\n", createVNode(_components.p, {
      children: "To free up system resources, you can remove stopped containers:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker rm <container>"
          }), ": This command removes a stopped container. You can specify the container by its ID or name."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " compassionate_morse"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "compassionate_morse"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker rm $(docker ps -a -q)"
          }), ": This command removes all stopped containers. The ", createVNode(_components.code, {
            children: "-q"
          }), " flag with ", createVNode(_components.code, {
            children: "docker ps -a"
          }), " outputs only the container IDs, which are then passed to ", createVNode(_components.code, {
            children: "docker rm"
          }), " for removal."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " $("
              }), createVNode(_components.span, {
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
                  color: "#D19A66"
                },
                children: " -a"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -q"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "compassionate_morse"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "amazing_bell"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These commands cover the essential operations for managing Docker containers, from running and listing to stopping, starting, and removing them."
    }), "\n", createVNode(_components.h2, {
      id: "section-4-inspecting-and-logging",
      children: "Section 4: Inspecting and Logging"
    }), "\n", createVNode(_components.h3, {
      id: "41-inspecting-containers-and-images",
      children: "4.1 Inspecting Containers and Images"
    }), "\n", createVNode(_components.p, {
      children: "Inspecting containers and images allows you to retrieve detailed information about their configuration and state. Here are the key commands for inspection:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker inspect <container>"
          }), ": This command provides detailed information about a container in JSON format. It includes details such as the container’s configuration, state, network settings, and more."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " inspect"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "["
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "    {"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"Id\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"5d8c5c4b5b6a\""
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
                  color: "#98C379"
                },
                children: "        \"Created\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"2021-06-02T11:56:24.123456789Z\""
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
                  color: "#98C379"
                },
                children: "        \"Path\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"nginx\""
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
                  color: "#98C379"
                },
                children: "        \"Args\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"-g\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"daemon off;\""
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        ],"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"State\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Status\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"running\""
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
                  color: "#98C379"
                },
                children: "            \"Running\""
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
                  color: "#98C379"
                },
                children: "            \"Paused\""
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
                  color: "#98C379"
                },
                children: "            \"Restarting\""
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
                  color: "#98C379"
                },
                children: "            \"OOMKilled\""
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
                  color: "#98C379"
                },
                children: "            \"Dead\""
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
                  color: "#98C379"
                },
                children: "            \"Pid\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 1234,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"ExitCode\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Error\""
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
                  color: "#98C379"
                },
                children: "            \"StartedAt\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"2021-06-02T11:56:25.123456789Z\""
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
                  color: "#98C379"
                },
                children: "            \"FinishedAt\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"0001-01-01T00:00:00Z\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"Image\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"sha256:6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "        \"ResolvConfPath\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/containers/5d8c5c4b5b6a/resolv.conf\""
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
                  color: "#98C379"
                },
                children: "        \"HostnamePath\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/containers/5d8c5c4b5b6a/hostname\""
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
                  color: "#98C379"
                },
                children: "        \"HostsPath\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/containers/5d8c5c4b5b6a/hosts\""
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
                  color: "#98C379"
                },
                children: "        \"LogPath\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/containers/5d8c5c4b5b6a/5d8c5c4b5b6a-json.log\""
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
                  color: "#98C379"
                },
                children: "        \"Name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/amazing_bell\""
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
                  color: "#98C379"
                },
                children: "        \"RestartCount\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"Driver\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"overlay2\""
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
                  color: "#98C379"
                },
                children: "        \"Platform\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"linux\""
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
                  color: "#98C379"
                },
                children: "        \"MountLabel\""
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
                  color: "#98C379"
                },
                children: "        \"ProcessLabel\""
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
                  color: "#98C379"
                },
                children: "        \"AppArmorProfile\""
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
                  color: "#98C379"
                },
                children: "        \"ExecIDs\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"HostConfig\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Binds\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"ContainerIDFile\""
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
                  color: "#98C379"
                },
                children: "            \"LogConfig\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"Type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"json-file\""
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
                  color: "#98C379"
                },
                children: "                \"Config\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {}"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"NetworkMode\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"default\""
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
                  color: "#98C379"
                },
                children: "            \"PortBindings\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {},"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"RestartPolicy\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"Name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"no\""
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
                  color: "#98C379"
                },
                children: "                \"MaximumRetryCount\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "0"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"AutoRemove\""
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
                  color: "#98C379"
                },
                children: "            \"VolumeDriver\""
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
                  color: "#98C379"
                },
                children: "            \"VolumesFrom\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CapAdd\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CapDrop\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Dns\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": [],"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"DnsOptions\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": [],"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"DnsSearch\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": [],"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"ExtraHosts\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"GroupAdd\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"IpcMode\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"private\""
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
                  color: "#98C379"
                },
                children: "            \"Cgroup\""
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
                  color: "#98C379"
                },
                children: "            \"Links\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"OomScoreAdj\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"PidMode\""
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
                  color: "#98C379"
                },
                children: "            \"Privileged\""
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
                  color: "#98C379"
                },
                children: "            \"PublishAllPorts\""
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
                  color: "#98C379"
                },
                children: "            \"ReadonlyRootfs\""
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
                  color: "#98C379"
                },
                children: "            \"SecurityOpt\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"UTSMode\""
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
                  color: "#98C379"
                },
                children: "            \"UsernsMode\""
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
                  color: "#98C379"
                },
                children: "            \"ShmSize\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 67108864,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Runtime\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"runc\""
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
                  color: "#98C379"
                },
                children: "            \"ConsoleSize\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "                0,"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: "                0"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            ],"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Isolation\""
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
                  color: "#98C379"
                },
                children: "            \"CpuShares\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Memory\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"NanoCpus\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CgroupParent\""
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
                  color: "#98C379"
                },
                children: "            \"BlkioWeight\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"BlkioWeightDevice\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"BlkioDeviceReadBps\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"BlkioDeviceWriteBps\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"BlkioDeviceReadIOps\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"BlkioDeviceWriteIOps\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpuPeriod\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpuQuota\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpuRealtimePeriod\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpuRealtimeRuntime\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpusetCpus\""
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
                  color: "#98C379"
                },
                children: "            \"CpusetMems\""
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
                  color: "#98C379"
                },
                children: "            \"Devices\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": [],"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"DeviceCgroupRules\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"DeviceRequests\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"KernelMemory\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"KernelMemoryTCP\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"MemoryReservation\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"MemorySwap\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"MemorySwappiness\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"OomKillDisable\""
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
                  color: "#98C379"
                },
                children: "            \"PidsLimit\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Ulimits\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpuCount\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"CpuPercent\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"IOMaximumIOps\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"IOMaximumBandwidth\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"MaskedPaths\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"/proc/asound\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/acpi\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/kcore\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/keys\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/latency_stats\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/timer_list\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/timer_stats\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/sched_debug\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/scsi\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"/sys/firmware\""
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            ],"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"ReadonlyPaths\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"/proc/bus\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/fs\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/irq\""
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
                  color: "#98C379"
                },
                children: "                \"/proc/sys\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"/proc/sysrq-trigger\""
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            ]"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"GraphDriver\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Data\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"LowerDir\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/overlay2/6d28e14ab8c8/lower\""
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
                  color: "#98C379"
                },
                children: "                \"MergedDir\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/overlay2/6d28e14ab8c8/merged\""
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
                  color: "#98C379"
                },
                children: "                \"UpperDir\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/overlay2/6d28e14ab8c8/upper\""
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
                  color: "#98C379"
                },
                children: "                \"WorkDir\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/lib/docker/overlay2/6d28e14ab8c8/work\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"overlay2\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"Mounts\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": [],"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"Config\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Hostname\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"5d8c5c4b5b6a\""
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
                  color: "#98C379"
                },
                children: "            \"Domainname\""
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
                  color: "#98C379"
                },
                children: "            \"User\""
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
                  color: "#98C379"
                },
                children: "            \"AttachStdin\""
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
                  color: "#98C379"
                },
                children: "            \"AttachStdout\""
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
                  color: "#98C379"
                },
                children: "            \"AttachStderr\""
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
                  color: "#98C379"
                },
                children: "            \"ExposedPorts\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"80/tcp\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {}"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Tty\""
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
                  color: "#98C379"
                },
                children: "            \"OpenStdin\""
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
                  color: "#98C379"
                },
                children: "            \"StdinOnce\""
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
                  color: "#98C379"
                },
                children: "            \"Env\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\""
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            ],"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Cmd\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"nginx\""
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
                  color: "#98C379"
                },
                children: "                \"-g\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"daemon off;\""
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            ],"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Image\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"nginx\""
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
                  color: "#98C379"
                },
                children: "            \"Volumes\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"WorkingDir\""
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
                  color: "#98C379"
                },
                children: "            \"Entrypoint\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"OnBuild\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Labels\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {},"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"StopSignal\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"SIGTERM\""
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
                  color: "#98C379"
                },
                children: "            \"StopTimeout\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Shell\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"NetworkSettings\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Bridge\""
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
                  color: "#98C379"
                },
                children: "            \"SandboxID\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "            \"HairpinMode\""
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
                  color: "#98C379"
                },
                children: "            \"LinkLocalIPv6Address\""
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
                  color: "#98C379"
                },
                children: "            \"LinkLocalIPv6PrefixLen\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"Ports\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"80/tcp\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "                    {"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                        \"HostIp\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"0.0.0.0\""
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
                  color: "#98C379"
                },
                children: "                        \"HostPort\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"32768\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "                    }"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "                ]"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"SandboxKey\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"/var/run/docker/netns/6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "            \"SecondaryIPAddresses\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"SecondaryIPv6Addresses\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"EndpointID\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "            \"Gateway\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"172.17.0.1\""
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
                  color: "#98C379"
                },
                children: "            \"GlobalIPv6Address\""
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
                  color: "#98C379"
                },
                children: "            \"GlobalIPv6PrefixLen\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"IPAddress\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"172.17.0.2\""
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
                  color: "#98C379"
                },
                children: "            \"IPPrefixLen\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 16,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"IPv6Gateway\""
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
                  color: "#98C379"
                },
                children: "            \"MacAddress\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"02:42:ac:11:00:02\""
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
                  color: "#98C379"
                },
                children: "            \"Networks\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                \"bridge\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                    \"IPAMConfig\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                    \"Links\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                    \"Aliases\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                    \"NetworkID\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "                    \"EndpointID\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "                    \"Gateway\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"172.17.0.1\""
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
                  color: "#98C379"
                },
                children: "                    \"IPAddress\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"172.17.0.2\""
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
                  color: "#98C379"
                },
                children: "                    \"IPPrefixLen\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 16,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                    \"IPv6Gateway\""
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
                  color: "#98C379"
                },
                children: "                    \"GlobalIPv6Address\""
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
                  color: "#98C379"
                },
                children: "                    \"GlobalIPv6PrefixLen\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": 0,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                    \"MacAddress\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"02:42:ac:11:00:02\""
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
                  color: "#98C379"
                },
                children: "                    \"DriverOpts\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": null"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "                }"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "            }"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        }"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "    }"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "]"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker inspect <image>"
          }), ": This command provides detailed information about an image in JSON format. It includes details such as the image’s configuration, layers, and more."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " inspect"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " nginx:alpine"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "["
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "    {"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"Id\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"sha256:6d28e14ab8c8\""
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
                  color: "#98C379"
                },
                children: "        \"RepoTags\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"nginx:alpine\""
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "        ],"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "        \"RepoDigests\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": ["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "            \"nginx@sha256:4e9f2cdfd5d6b3e5d5e5c5e5d5e5e5d5e5d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "42-viewing-logs",
      children: "4.2 Viewing Logs"
    }), "\n", createVNode(_components.p, {
      children: "Logs are crucial for debugging and monitoring the behavior of your containers. Docker provides commands to view the logs of a container:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker logs <container>"
          }), ": This command fetches the logs of a container. You can specify the container by its ID or name. It displays all the logs generated by the container since it started."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " logs"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: using the "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"epoll\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " event method"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: nginx/1.19.10"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: built by gcc 9.3.0 ("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Alpine"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 9.3.0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: OS: Linux 5.8.0-53-generic"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: getrlimit("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "RLIMIT_NOFILE"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "): 1048576:1048576"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: start worker processes"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: start worker process 30"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: start worker process 31"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker logs -f <container>"
          }), ": This command follows the logs of a container in real-time. The ", createVNode(_components.code, {
            children: "-f"
          }), " flag stands for “follow,” similar to the ", createVNode(_components.code, {
            children: "tail -f"
          }), " command in Unix-like systems. It continues to display new log entries as they are generated."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " logs"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -f"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: using the "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"epoll\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " event method"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: nginx/1.19.10"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: built by gcc 9.3.0 ("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Alpine"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 9.3.0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: OS: Linux 5.8.0-53-generic"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: getrlimit("
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "RLIMIT_NOFILE"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "): 1048576:1048576"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: start worker processes"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: start worker process 30"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021/06/02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [notice] 1#1: start worker process 31"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These commands provide essential tools for inspecting and logging, enabling you to retrieve detailed information and monitor the behavior of your containers and images."
    }), "\n", createVNode(_components.h2, {
      id: "section-5-networking",
      children: "Section 5: Networking"
    }), "\n", createVNode(_components.h3, {
      id: "51-managing-networks",
      children: "5.1 Managing Networks"
    }), "\n", createVNode(_components.p, {
      children: "Docker networking is a crucial aspect of container management, enabling communication between containers and external systems. Here are the key commands for managing Docker networks:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker network ls"
          }), ": This command lists all Docker networks on the local system, including their names, IDs, drivers, and scope."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ls"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "NETWORK"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ID"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "     NAME"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      DRIVER"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    SCOPE"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6d28e14ab8c8"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   bridge"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    bridge"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    local"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "1c9383292a8f"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   host"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      host"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      local"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6c0b1f2a1dcd"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   none"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      null"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      local"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker network create <network>"
          }), ": This command creates a new Docker network with the specified name. By default, it uses the bridge driver, but you can specify other drivers such as overlay."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " create"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_network"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "6d28e14ab8c8"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker network rm <network>"
          }), ": This command removes a Docker network by its name or ID. You can only remove networks that are not in use by any containers."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_network"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "my_network"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "52-connecting-and-disconnecting-containers",
      children: "5.2 Connecting and Disconnecting Containers"
    }), "\n", createVNode(_components.p, {
      children: "Managing the connections between containers and networks is essential for ensuring proper communication and isolation. Here are the commands to connect and disconnect containers from networks:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker network connect <network> <container>"
          }), ": This command connects a container to a specified network. You can specify the container by its ID or name."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " connect"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker network disconnect <network> <container>"
          }), ": This command disconnects a container from a specified network."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " disconnect"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These commands provide the essential tools for managing Docker networks, enabling you to create, list, remove networks, and manage container connections."
    }), "\n", createVNode(_components.h2, {
      id: "section-6-volumes-and-data-management",
      children: "Section 6: Volumes and Data Management"
    }), "\n", createVNode(_components.h3, {
      id: "61-managing-volumes",
      children: "6.1 Managing Volumes"
    }), "\n", createVNode(_components.p, {
      children: "Docker volumes are used to persist data generated by and used by Docker containers. Here are the key commands for managing Docker volumes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker volume ls"
          }), ": This command lists all Docker volumes on the local system, including their names and driver information."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " volume"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ls"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "DRIVER"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    VOLUME"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " NAME"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#C678DD"
                },
                children: "local"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "     my_volume"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#C678DD"
                },
                children: "local"
              }), createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "     another_volume"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker volume create <volume>"
          }), ": This command creates a new Docker volume with the specified name."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " volume"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " create"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_volume"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "my_volume"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker volume rm <volume>"
          }), ": This command removes a Docker volume by its name. You can only remove volumes that are not in use by any containers."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " volume"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_volume"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "my_volume"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "62-using-volumes",
      children: "6.2 Using Volumes"
    }), "\n", createVNode(_components.p, {
      children: "Mounting volumes to containers allows you to persist data and share it between containers. Here are the commands to use volumes with containers:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker run -v <volume>:/path/in/container <image>"
          }), ": This command mounts a volume to a specified path inside the container. The ", createVNode(_components.code, {
            children: "-v"
          }), " flag is used to specify the volume and the mount path."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -v"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " my_volume:/data"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker run --mount source=<volume>,target=/path/in/container <image>"
          }), ": This command is another way to mount a volume to a container using the ", createVNode(_components.code, {
            children: "--mount"
          }), " flag. It provides more options and flexibility compared to the ", createVNode(_components.code, {
            children: "-v"
          }), " flag."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --mount"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " source=my_volume,target=/data"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ubuntu"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These commands provide the essential tools for managing Docker volumes, enabling you to create, list, remove volumes, and mount them to containers for data persistence and sharing."
    }), "\n", createVNode(_components.h2, {
      id: "section-7-docker-compose",
      children: "Section 7: Docker Compose"
    }), "\n", createVNode(_components.h3, {
      id: "71-basic-commands",
      children: "7.1 Basic Commands"
    }), "\n", createVNode(_components.p, {
      children: "Docker Compose is a tool for defining and running multi-container Docker applications. Here are the key commands for working with Docker Compose:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker-compose up"
          }), ": This command starts the services defined in a ", createVNode(_components.code, {
            children: "docker-compose.yml"
          }), " file. It creates and starts containers, networks, and volumes as specified in the file."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker-compose"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " up"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Creating"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " \"myapp_default\""
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " with"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " the"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " default"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " driver"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Creating"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " volume"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " \"myapp_data\""
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " with"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " default"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " driver"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Creating"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_db_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " done"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Creating"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_web_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " done"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Attaching"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_db_1,"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_web_1"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "db_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "   | "
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021-06-02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25.123456789"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [Note] mysqld: ready "
              }), createVNode(_components.span, {
                style: {
                  color: "#C678DD"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " connections."
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "web_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "  |  "
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Running"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " on"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " http://0.0.0.0:5000/"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (Press "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "CTRL+C"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " quit"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker-compose down"
          }), ": This command stops and removes containers, networks, and volumes defined in a ", createVNode(_components.code, {
            children: "docker-compose.yml"
          }), " file. It cleans up the environment created by ", createVNode(_components.code, {
            children: "docker-compose up"
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
          "data-language": "sh",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker-compose"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " down"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Stopping"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_web_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " done"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Stopping"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_db_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " done"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Removing"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_web_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " done"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Removing"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_db_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "  ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " done"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Removing"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " network"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_default"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Removing"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " volume"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myapp_data"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "72-managing-services",
      children: "7.2 Managing Services"
    }), "\n", createVNode(_components.p, {
      children: ["Docker Compose provides commands to manage the services defined in a ", createVNode(_components.code, {
        children: "docker-compose.yml"
      }), " file:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker-compose ps"
          }), ": This command lists the containers managed by Docker Compose, including their names, states, and ports."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker-compose"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ps"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "Name"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "                Command"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "               State"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "           Ports"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "----------------------------------------------------------------------------"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "myapp_db_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "          docker-entrypoint.sh"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "   Up"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      3306/tcp"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "myapp_web_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "         flask"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "              Up"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "      0.0.0.0:5000"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "->"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "5000/tcp"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker-compose logs"
          }), ": This command displays the logs of services managed by Docker Compose. It aggregates the logs from all containers defined in the ", createVNode(_components.code, {
            children: "docker-compose.yml"
          }), " file."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker-compose"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " logs"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "db_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "   | "
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "2021-06-02"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 11:56:25.123456789"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [Note] mysqld: ready "
              }), createVNode(_components.span, {
                style: {
                  color: "#C678DD"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " connections."
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "web_1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "  |  "
              }), createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " Running"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " on"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " http://0.0.0.0:5000/"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " (Press "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "CTRL+C"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " to"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " quit"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ")"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These commands provide the essential tools for working with Docker Compose, enabling you to start, stop, and manage multi-container applications efficiently."
    }), "\n", createVNode(_components.h2, {
      id: "section-8-advanced-commands",
      children: "Section 8: Advanced Commands"
    }), "\n", createVNode(_components.h3, {
      id: "81-docker-exec",
      children: "8.1 Docker Exec"
    }), "\n", createVNode(_components.p, {
      children: ["Executing commands inside a running container is often necessary for debugging or performing administrative tasks. Here are the key commands for using ", createVNode(_components.code, {
        children: "docker exec"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker exec -it <container> <command>"
          }), ": This command runs a command in a running container. The ", createVNode(_components.code, {
            children: "-it"
          }), " flags are used to run the command in interactive mode with a terminal attached."]
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
                children: "$"
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
                children: " amazing_bell"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /bin/bash"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "root@5d8c5c4b5b6a:/#"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker exec -u <user> -it <container> <command>"
          }), ": This command runs a command as a specific user inside a running container. The ", createVNode(_components.code, {
            children: "-u"
          }), " flag specifies the user."]
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
                children: "$"
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
                children: " -u"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " www-data"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -it"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /bin/bash"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "www-data@5d8c5c4b5b6a:/$"
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "82-docker-export-and-import",
      children: "8.2 Docker Export and Import"
    }), "\n", createVNode(_components.p, {
      children: "Exporting and importing containers allows you to save and restore container states. Here are the key commands for exporting and importing containers:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker export <container> > <file.tar>"
          }), ": This command exports a container’s filesystem as a tar archive. It does not include the container’s metadata (such as environment variables and linked containers)."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " export"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " > "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "amazing_bell.tar"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker import <file.tar>"
          }), ": This command imports a tar archive as a Docker image. You can specify a repository name and tag for the imported image."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " import"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " amazing_bell.tar"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myimage:latest"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "83-docker-save-and-load",
      children: "8.3 Docker Save and Load"
    }), "\n", createVNode(_components.p, {
      children: "Saving and loading images allows you to transfer images between different Docker environments. Here are the key commands for saving and loading images:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker save -o <file.tar> <image>"
          }), ": This command saves an image to a tar archive. It includes all layers and metadata of the image."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " save"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -o"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myimage.tar"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myimage:latest"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "docker load -i <file.tar>"
          }), ": This command loads an image from a tar archive. It restores the image, including all layers and metadata."]
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " docker"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " load"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -i"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " myimage.tar"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These advanced commands provide powerful tools for executing commands inside containers, exporting and importing container states, and saving and loading images for transfer and backup."
    }), "\n", createVNode(_components.p, {
      children: "Docker commands are essential for effectively managing containers and images in your development and production environments. By mastering these commands, you can streamline your workflow, troubleshoot issues more efficiently, and take full advantage of Docker’s capabilities. Remember that Docker is constantly evolving, so it’s a good idea to regularly check the official Docker documentation for the most up-to-date information and best practices."
    }), "\n", createVNode(_components.p, {
      children: ["For a comprehensive list of Docker containers that can enhance your home server setup, check out our guide on ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "Best 100+ Docker Containers for Home Server"
      }), ". This resource provides a wealth of options for various applications and services you can run using Docker, helping you make the most of your containerized environment."]
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

const url = "src/content/posts/docker-commands.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-commands.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-commands.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
