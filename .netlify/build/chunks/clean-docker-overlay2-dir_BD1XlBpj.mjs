import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-05-23T00:00:00.000Z",
  "title": "Reclaim Disk Space by Cleaning Up /var/lib/docker/overlay2",
  "description": "Learn how to free up disk space on your Docker host by cleaning up the /var/lib/docker/overlay2 directory.",
  "image": "../../assets/images/24/05/free-disk-space-docker-overlay2.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/clean-docker-overlay2-dir/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-you-have-in-varlibdockeroverlay2",
    "text": "What you have in /var/lib/docker/overlay2"
  }, {
    "depth": 2,
    "slug": "reasons-for-varlibdockeroverlay2-using-a-lot-of-space",
    "text": "Reasons for /var/lib/docker/overlay2 using a lot of space"
  }, {
    "depth": 2,
    "slug": "check-the-space-used",
    "text": "Check the space used"
  }, {
    "depth": 2,
    "slug": "cleanup-varlibdockeroverlay2",
    "text": "Cleanup /var/lib/docker/overlay2"
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
      children: ["The ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory is where Docker stores the layers and metadata for all the Docker images and containers on your system. Over time, this directory can grow significantly in size, especially if you have many Docker images and containers, or if you frequently build and rebuild images. A large ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory can consume a significant amount of disk space, potentially leading to performance issues or even system crashes if the disk becomes full."]
    }), "\n", createVNode(_components.h2, {
      id: "what-you-have-in-varlibdockeroverlay2",
      children: ["What you have in ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory contains several subdirectories, each representing a Docker image or container layer. These subdirectories are named using a unique identifier (a hash value) that corresponds to the specific layer. Inside each subdirectory, you’ll find files and directories that make up the layer’s contents, such as the filesystem, metadata, and configuration files."]
    }), "\n", createVNode(_components.h2, {
      id: "reasons-for-varlibdockeroverlay2-using-a-lot-of-space",
      children: ["Reasons for ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " using a lot of space"]
    }), "\n", createVNode(_components.p, {
      children: ["There are several reasons why the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory can grow large:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Unused Images and Containers"
          }), ": When you build or pull Docker images, or create and stop containers, their layers are stored in the ", createVNode(_components.code, {
            children: "/var/lib/docker/overlay2"
          }), " directory. If you don’t remove these unused images and containers, they will continue to occupy disk space."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Cached Layers"
          }), ": Docker caches image layers to speed up the build and deployment process. However, these cached layers can accumulate over time, consuming disk space."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Large Images and Containers"
          }), ": Some Docker images and containers can be quite large, especially if they include large application binaries, libraries, or data files."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Inefficient Image Layers"
          }), ": If Docker images are not built efficiently, with unnecessary files or layers, they can consume more disk space than necessary."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "check-the-space-used",
      children: "Check the space used"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Check the space that ", createVNode(_components.code, {
          children: "/var/lib/docker/overlay2"
        }), " is using:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sh"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/docker/overlay2"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command uses the ", createVNode(_components.code, {
        children: "du"
      }), " (disk usage) utility to display the total disk space used by the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory and its contents. The ", createVNode(_components.code, {
        children: "-s"
      }), " option summarizes the total space used, and the ", createVNode(_components.code, {
        children: "-h"
      }), " option displays the size in human-readable format (e.g., KB, MB, GB)."]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Check what is using the most space (top 5):"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "root@python-server:~#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sh"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/docker/overlay2/"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sort"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -hr"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "head"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -5"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "3.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    /var/lib/docker/overlay2/b5b5b1b4abef270dbc91bdd6c385865d778b6bd8ee9568030635994a296533ab"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2.5G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    /var/lib/docker/overlay2/89048c0675f730b36077f7b967754ec94efead1d7d45b35870131f72bf412ff3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "610M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    /var/lib/docker/overlay2/dc123594104a9a124bfb4def0780c9e2e65205abf366ea37128663cc7020e444"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "559M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    /var/lib/docker/overlay2/ac6efc422ab6e481c58b22d13e6d636d0c649bf58b0ef1bd2d9e01a01c5cbd8c"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "512M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    /var/lib/docker/overlay2/4052cb983b6bb7bbe28a6dff67fd1833eb87d4ee9a606b26d925c50e7a823b31"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command lists the disk space used by each subdirectory (layer) inside ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), ". It uses the ", createVNode(_components.code, {
        children: "du"
      }), " command to get the size of each subdirectory, sorts the output in descending order (", createVNode(_components.code, {
        children: "sort -hr"
      }), "), and displays the top 5 entries (", createVNode(_components.code, {
        children: "head -5"
      }), "). This helps identify which specific layers or images are consuming the most disk space."]
    }), "\n", createVNode(_components.h2, {
      id: "cleanup-varlibdockeroverlay2",
      children: ["Cleanup ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. Remove all unused containers, networks, images, and volumes:"
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
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " prune"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "docker system prune"
      }), " command removes unused Docker objects, such as containers, networks, images, and volumes. The ", createVNode(_components.code, {
        children: "-a"
      }), " option specifies that all unused objects should be removed, and the ", createVNode(_components.code, {
        children: "-f"
      }), " option forces the removal without prompting for confirmation."]
    }), "\n", createVNode(_components.p, {
      children: ["This command is a good starting point for cleaning up the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory, as it removes any unused Docker objects that are no longer needed, freeing up disk space."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["2. Check ", createVNode(_components.code, {
          children: "/var/lib/docker/overlay2"
        }), " and see what image is using the space:"]
      })
    }), "\n", createVNode(_components.p, {
      children: "I have created an util script that can be used to check this you can do that with:"
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
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sSL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://utils.bitdoze.com/scripts/docker-overlay2-view.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bash"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["All the scripts an be found under: ", createVNode(_components.a, {
        href: "https://utils.bitdoze.com/",
        children: "utils.bitdoze.com"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The script is below:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Define the overlay2 directory"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "overlay_dir"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/var/lib/docker/overlay2\""
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
            children: "# Create a temporary file to store the results"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "temp_file"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mktemp"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Array to store used subfolders"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "used_subfolders"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
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
            children: "# Loop through each Docker image ID"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " image_id"
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
              color: "#61AFEF"
            },
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -q"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  # Inspect the image to get detailed information"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  image_info"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " inspect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$image_id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  # Get the image name (repository and tag)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  repo_tag"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " inspect"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --format"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " '{{if .RepoTags}}{{index .RepoTags 0}}{{else}}<none>{{end}}'"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$image_id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  # Check all subfolders in the overlay2 directory"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  while"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " IFS"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
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
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ''"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
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
              color: "#C678DD"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$image_info"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
            children: " -q"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Get the space used by the subfolder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      space_used"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sh"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cut"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f1"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Convert space used to bytes for sorting"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      space_used_bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sb"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cut"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f1"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Output the image ID, image name, subfolder, space used, and space used in bytes to the temporary file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "      echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$space_used_bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $space_used"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Image ID: "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$image_id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Image Name: "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$repo_tag"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Subfolder: "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$temp_file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
            children: "      # Add subfolder to the used_subfolders array"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      used_subfolders"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
              color: "#C678DD"
            },
            children: "    fi"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  done"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " < "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "<("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "find"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$overlay_dir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\" "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "-maxdepth"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -mindepth"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " d "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "-print0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "done"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Loop through all subfolders in the overlay2 directory"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "while"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " IFS"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
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
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ''"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "do"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  # Check if the subfolder is not in the used_subfolders array"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ! [[ "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\" ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "used_subfolders"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "@"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "]} \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " =~"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \" "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]]; "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    # Get the space used by the subfolder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    space_used"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sh"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cut"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f1"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    # Convert space used to bytes for sorting"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    space_used_bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sb"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cut"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f1"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    # Output the subfolder information to the temporary file"
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
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$space_used_bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " $space_used"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Image ID: N/A Image Name: N/A Subfolder: "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$subfolder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$temp_file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  fi"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "done"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " < "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "<("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "find"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$overlay_dir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\" "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "-maxdepth"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -mindepth"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " d "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "-print0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ")"
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
            children: "# Sort the results by space used in bytes (from largest to smallest) and display them"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sort"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -nr"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$temp_file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cut"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "' '"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f2-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "column"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -t"
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
            children: "# Remove the temporary file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$temp_file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This Bash script provides a detailed breakdown of the disk space used by each Docker image and its associated layers in the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory. Here’s what the script does:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["It defines the ", createVNode(_components.code, {
          children: "overlay_dir"
        }), " variable with the path to the ", createVNode(_components.code, {
          children: "/var/lib/docker/overlay2"
        }), " directory."]
      }), "\n", createVNode(_components.li, {
        children: ["It creates a temporary file to store the results using ", createVNode(_components.code, {
          children: "mktemp"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["It loops through each Docker image ID using ", createVNode(_components.code, {
          children: "docker image ls -q"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["For each image ID, it inspects the image to get detailed information using ", createVNode(_components.code, {
          children: "docker inspect"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["It gets the image name (repository and tag) using ", createVNode(_components.code, {
          children: "docker inspect --format '{{index .RepoTags 0}}'"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["It checks all subdirectories in the ", createVNode(_components.code, {
          children: "overlay_dir"
        }), " directory using ", createVNode(_components.code, {
          children: "find"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["If the subfolder is associated with the current image ID (based on the ", createVNode(_components.code, {
          children: "image_info"
        }), " output), it gets the space used by the subfolder using ", createVNode(_components.code, {
          children: "du -sh"
        }), " and ", createVNode(_components.code, {
          children: "du -sb"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "It outputs the image ID, image name, subfolder path, space used (human-readable and bytes) to the temporary file."
      }), "\n", createVNode(_components.li, {
        children: ["It adds the used subfolder to the ", createVNode(_components.code, {
          children: "used_subfolders"
        }), " array."]
      }), "\n", createVNode(_components.li, {
        children: ["After processing all images, it loops through all subdirectories in the ", createVNode(_components.code, {
          children: "overlay_dir"
        }), " directory again."]
      }), "\n", createVNode(_components.li, {
        children: ["If a subfolder is not in the ", createVNode(_components.code, {
          children: "used_subfolders"
        }), " array, it outputs the subfolder path and space used to the temporary file with “N/A” for the image ID and name."]
      }), "\n", createVNode(_components.li, {
        children: ["It sorts the results in the temporary file by space used in bytes (from largest to smallest) using ", createVNode(_components.code, {
          children: "sort -nr"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["It displays the sorted results in a tabular format using ", createVNode(_components.code, {
          children: "cut"
        }), " and ", createVNode(_components.code, {
          children: "column -t"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Finally, it removes the temporary file."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This script provides a comprehensive view of the disk space usage in the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory, allowing you to identify which Docker images and their associated layers are consuming the most space. With this information, you can make informed decisions about which images or layers to remove or optimize to reclaim disk space."]
    }), "\n", createVNode(_components.p, {
      children: "Output for the script:"
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
            children: "3.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/b5b5b1b4abef270dbc91bdd6c385865d778b6bd8ee9568030635994a296533ab"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2.5G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/89048c0675f730b36077f7b967754ec94efead1d7d45b35870131f72bf412ff3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "559M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/ac6efc422ab6e481c58b22d13e6d636d0c649bf58b0ef1bd2d9e01a01c5cbd8c"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "610M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/dc123594104a9a124bfb4def0780c9e2e65205abf366ea37128663cc7020e444"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "512M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/4052cb983b6bb7bbe28a6dff67fd1833eb87d4ee9a606b26d925c50e7a823b31"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "507M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/8cf368abcb835aff6cb6c19cc7b630a32fd5cf23698f9b0fc93a9ed738708a7d"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "441M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c6f5534c7692f17026ec630ed076f051914367334916e8bc1a7ee8b9ea3c8da6"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "271M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/a7384d24b3ef895b797fe5b65ae365b34e0aedff7544de5e90780ff202cddc03"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "241M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/78226c49fc485223aa093120075cf760af3ff184952eb3f10819652981cf5124"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "233M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/84ccf08125081b2cf089de802a25923b776ab2c4fbaa760c570223fb784b22ec"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "196M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  81bab60b840e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  netdata/netdata:edge"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/264e56fd84b5c0c899a502ad3e0e4944f041390b29af3cdb6396e9f4989d1b41"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "180M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/a5f9492730e056c8b4e687dea92944d36d3b12f50a7112a51e1a9d804eb21345"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "162M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/2de288641807d7f4146a579b42d93c62dfa5b539a9a41628592aefbb16dffb20"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "166M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/70732a3ddee8da21207391465d25e6d1980319dd594f4eac890c249a9ee5d271"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "156M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/28de4368b82e98c7bef746a5a31fe4bfafad13580552840164e4f7f57f49f607"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "212M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/7d2dab81fd1f423b10620e080d82c29f5ce1f8ddcef73f3c60ab70704af4c41b"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "121M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  81bab60b840e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  netdata/netdata:edge"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/54cae94407a6d824b0d6a5254e2c53a0e43dd824b7908cb2be30566dd0b2fd87"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "127M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  81bab60b840e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  netdata/netdata:edge"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/616d0c25253ba7eccbd94a0b34e0bb78d3f72c5149d35584aba21330f9fe8465"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "114M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  a7079537d060"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  harness/gitness:3.0.0-beta.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/eb7adfcd18fee985e866fb66c2ceda1a70dd5b5b923012c11d772dc5bf42b012"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "118M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/bcc513179de454299c4dc84463d3dec4dc70ddb1dee9bb179b39e76e7ad9070a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "116M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/4dcda8262d4dcddea3460b0cc8352136699b49fde2e43dcbfc888979f3cdb24d"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "89M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c719f12c5c660788646618912cafe8f9511dff366e88571d7b39ce36e4249b2c"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "91M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/a9a75fc152f24f5dcb849d735594a42c71c15a72250213cc04691cd6848bca42"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "88M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/836a250971cab36b72e36bcabc4f2b48e4c1054c26830d7306b795cac3e337fb"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "108M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/24bf466ef126eabfdf0e67c297462938fe27dafdc89ea24aabeff793ef946dda"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "82M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/7a7a28d3b59658445437522404eee89ad0a709fda04b1a29be4726353c972dec"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "76M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/b2a9be0ddbf6cf6f43cc14bc22c3406f177a6cd600d8eb479228d6e21b02f93a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "68M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  81bab60b840e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  netdata/netdata:edge"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/56c96ee45c9d6b69bea4befa4de6399f64e43cc59f1a098e91cbb4415eb3b995"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "66M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c3a6596644eef9684bac2754082775f4a22ab092699e57f69a119f1f81db2089"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "46M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/a2b95f146415f89c5be49ae361164466e06c8f572a89fb1f3bd3ee8c14109f3c"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "41M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  a7079537d060"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  harness/gitness:3.0.0-beta.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/7ec53d7dcaa0bdef829064006eb7cd1707e5bc81329e2bcc4ca098435f7e35ea"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "36M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/169678de43422c93d84d7908bd8ffb7bc29f24c66a874a7d8dc8b6134b9b23a0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "34M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/deb7a08befba79a1da771c1fe01b25769af5b726b119739daed14c0ab6e0443f"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "15M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/17584cae6292ae28147159436ba7d81ce25f633b51d1d1931c63f3ba4290a86a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "13M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f26a189443b56e2bd58d4b29127cf27e56ce40792786c3f96f59c7236762832b"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "13M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  5e183bda51e6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  amir20/dozzle:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/19f6568f4e859b471da14ef3be4a22fd1a944d02ddf0c4e7e6e51f4841ea4696"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "14M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/09edad670708d284424a65b8ede770ede084ccb4e093ce5a68f34aeebc6806ef"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "14M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f7071dc2fa0b9ceafccf8c7c4f2a649cf2afd45db3fad514390fcdd070f8de91"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "15M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/3d3109e52bf7eca7bee228781ddd25c1bbe5a7f71629b79e9c017718e8569490"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "12M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/2c4b6fc84bd70116a94140c2244c48818b620a8169563c1063a55670fbab3f85"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "9.3M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/e581648a5e94b4cbcc465c5bfa959297e28b3393134b43c90a55ab431804e5dd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "9.2M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/4a012de19c527f3e720e0865a78997e41e048a81aa2172ca580d5f72ec017451"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "7.6M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/088898d60221b6b9287044663d3eaad6c2e35e0a945ba7041cd197311bb134cf"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "7.7M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/dee1cc2f27a0fc622000bc9dadfde261c597c738aee05c4bd5f420eb89bb5521"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "7.7M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/dee1cc2f27a0fc622000bc9dadfde261c597c738aee05c4bd5f420eb89bb5521"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "7.7M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  a7079537d060"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  harness/gitness:3.0.0-beta.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/737eb00b7ac618fe27f498f4738402115d0f62c130a3e8e5673275bc03dda87a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "6.7M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f66e314738c63153f7d5fe979454b07861f5fe49df645656079bf959d386e30d"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "4.0M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f4cf434f5995eae8c53d7745ddae7961411a462543af09d43891fb5d11447fb5"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2.8M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/8b150f3d7ebc35c34f8dcacf5cca156b121d966c76668b591834686b26397e31"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2.7M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c179768305fafe34e3217c421e93606341f2af6b33d1bdb73bf7441da9210ccd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "1.6M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/a721bb296ea20c16f958c075c9b679308dbcc2654f4c50db03384e6d709942c0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "412K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/7508c8e0187a5e6dfb9de3a6af7f5bbe06e7ba5cf8e8d76d011569b17603b2f8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "244K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  a7079537d060"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  harness/gitness:3.0.0-beta.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/b535a986525ba548407bf1018dfbdd5c4d9a9541a43bc8d5eaeee2186253d385"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "244K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  5e183bda51e6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  amir20/dozzle:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/1fb78bfe25036ef4d4a3c4f12e53b403752ca85db3c47a5d729aed2cb3e4fa2b"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "288K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c527a8de51fb12b2097c6ef772447853efaa78c2b4407ac84bc675bc8e3c599b"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "100K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/e4c8d32b00fafea8c6c4cd514fc3b85d4bb7243227e0bd3b63281995b1407423"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "48K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f26a189443b56e2bd58d4b29127cf27e56ce40792786c3f96f59c7236762832b-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "52K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f64973cf2ec7c3b32a85d96d797d7948dd1a41313bc4d28134b1b5c43511cd4e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "44K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/947da6241e914cf8a2fdf3303cfb954a4baa4bf7eab56c1a81252ff44b877d21"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "84K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/22377e49347f85a438e9f49b410464809c62af69e7ce4ab93eea505f80f27fd9"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "52K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/ea1ac89b01a118204f867706c2f5b742c58f78baed0572baadb6f770aa0c4798"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "60K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/886f61fcef063b23a687b4e75474e4fdce608262e7f4736f02b6346a6b6ce01d"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/4052cb983b6bb7bbe28a6dff67fd1833eb87d4ee9a606b26d925c50e7a823b31-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/8cf368abcb835aff6cb6c19cc7b630a32fd5cf23698f9b0fc93a9ed738708a7d-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/dc123594104a9a124bfb4def0780c9e2e65205abf366ea37128663cc7020e444-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/b5b5b1b4abef270dbc91bdd6c385865d778b6bd8ee9568030635994a296533ab-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/78226c49fc485223aa093120075cf760af3ff184952eb3f10819652981cf5124-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/a2b95f146415f89c5be49ae361164466e06c8f572a89fb1f3bd3ee8c14109f3c-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/2de288641807d7f4146a579b42d93c62dfa5b539a9a41628592aefbb16dffb20-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c6f5534c7692f17026ec630ed076f051914367334916e8bc1a7ee8b9ea3c8da6-init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  81bab60b840e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  netdata/netdata:edge"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/557dc929b44dbf8f56c017d71648e3dcf5df42d4ae45522a1c8319316dab6efb"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  53f011320bac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  filebrowser/filebrowser:v2-s6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/fbd2875f8195d4ebf67d9e43b12c2e6e8bbc3512d77d73de83897ebda68398bf"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "36K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/90831482be916d167036989bbbc74fd8ef156ef44d0eaa10180587b45cada241"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "36K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/9189514b80b1ac311df7fe79dba8c8d856f3f3c52fb3880692f69ed4112c094d"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "396K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  N/A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                            Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/l"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "40K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/b5a1a0f5473f942dd88c52f6e38689a6d3fcebf157640122ae3d54cdeec6e614"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "36K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/10da3c9a9d54a96145163ce70f680d2fee458acaf77d300c3fe33c01be4e11e1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "36K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c64fa7986a23b02391406d8b99040ea2d1261e70496d778eccaf91eb671d0072"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "36K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/3a670fdb3c2ca2b72f1f03bdff00a762641546ff45dc7eeac76feeec25b7689b"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "32K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f463aafd74960608f1ffb2fba5de101dc10fecf4f52022e19e80a9a17c41706a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/db62eb43b9a60a135d7119a46aaf84726ad7484c43ccd7542a73a32c2622926f"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/1e31a6ff9eec4981357ae5b8aa9e51f9e99b0defcb9954238f09267d64e6c6a3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/6d7e99168b19fb1de03a54e57b7dbd816bb8f6f72e0843e970795634b9e9439f"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/07cd3509e14a75f406646c468c8ef96073b7ea0ab231cae87c328cabc61c5189"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/d94c15106fa777ec5df2f18787b3bbafe13b54fc81bc3eaa4bc93a1def464a50"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/3e2ae7a5c55528b2708064323486d88b9beecb756ed556ab82f6e2b19b3b5882"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/c1eca20bdd90d0d8b65dacfbbe64742697c548a205203fef7d1ae6bea17cdf8c"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2e7228c0315e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  flowiseai/flowise:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/f6e32501c061a5237d6eb0c6fd878c0b6b3a09c52105bbc8e26dbe47eede6274"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ffb6864bc6f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/dockge:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/7ec87e3da5abb0920146610dc5aaf3b1f257ea87e8d701e696f6fbdbe51d17af"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  89c919b22c13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  zauberzeug/nicegui:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/b3d8dc9ee09fd3649da5370c3de00764309f6194a5d595a38a2a3dac8e9ac32f"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/95a75358634d89ff52294d2c59fe6cd7ea188f29e6445cbef88296a08cc2c6a6"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  a7079537d060"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  harness/gitness:3.0.0-beta.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/17145fbf43a0394832c88f2305ed5923601a4adbf86e40e3cfcf930f3d0593c7"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  a7079537d060"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  harness/gitness:3.0.0-beta.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/ad3087421c452c131c34846406a74c551c4cd23595af7e18f67bb29df94c8399"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  9a510ccf1de4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  postgres:16-alpine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "             Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/bd2aeafbfb363b9cd57102c8f4885bdfe8c4aa8339bcc281dd05d4789d99d705"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "20K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b23ac695b1b4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  louislam/uptime-kuma:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/447033b241af6fd664626609f8b7bed74275f02407f0a12e1381a916033001e3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "16K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  5e183bda51e6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  amir20/dozzle:latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Subfolder:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /var/lib/docker/overlay2/7464a99ae22b909b5657a85b7428d669ea743e5de39989e59767edbf4a9efa81"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Why there are subfolders in /", createVNode(_components.code, {
          children: "var/lib/docker/overlay2"
        }), " not corresponding to an image even after I run ", createVNode(_components.code, {
          children: "docker system prune -a -f "
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The presence of subfolders in ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " that do not correspond to Docker images, even after running ", createVNode(_components.code, {
        children: "docker system prune -a -f"
      }), ", can be attributed to several reasons:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Orphaned Layers:"
          }), " When you pull or build Docker images, each layer is stored as a directory within ", createVNode(_components.code, {
            children: "/var/lib/docker/overlay2"
          }), ". Sometimes, due to interruptions during image pulls or builds, or issues with Docker’s internal processes, these layers can become orphaned, meaning they are not associated with any active Docker image. Orphaned layers are not automatically removed by ", createVNode(_components.code, {
            children: "docker system prune"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Shared Layers:"
          }), " Docker images can share common layers. If an image is deleted but its layers are shared with other images, those layers will remain in ", createVNode(_components.code, {
            children: "/var/lib/docker/overlay2"
          }), " as they are still being used by other images. ", createVNode(_components.code, {
            children: "docker system prune"
          }), " only removes layers that are not referenced by any existing images."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Dangling Volumes:"
          }), " Docker volumes created by containers are stored in ", createVNode(_components.code, {
            children: "/var/lib/docker/volumes"
          }), ". If a volume is not associated with any active container, it becomes a dangling volume. While ", createVNode(_components.code, {
            children: "docker system prune"
          }), " removes dangling volumes, it may not remove all orphaned layers in ", createVNode(_components.code, {
            children: "/var/lib/docker/overlay2"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Incomplete Cleanup:"
          }), " In rare cases, Docker’s cleanup mechanisms may not remove all unused or orphaned resources, leaving behind residual data in ", createVNode(_components.code, {
            children: "/var/lib/docker/overlay2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "To further investigate and clean up these leftover subfolders, you can:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Manually inspect the contents of the subfolders within ", createVNode(_components.code, {
          children: "/var/lib/docker/overlay2"
        }), " to identify any leftover layers or orphaned files."]
      }), "\n", createVNode(_components.li, {
        children: ["Use tools like ", createVNode(_components.code, {
          children: "docker image prune"
        }), ", ", createVNode(_components.code, {
          children: "docker container prune"
        }), ", and ", createVNode(_components.code, {
          children: "docker volume prune"
        }), " to remove additional unused resources."]
      }), "\n", createVNode(_components.li, {
        children: "If necessary, you can delete the leftover subfolders manually, but exercise caution as deleting essential Docker files can result in data loss or system instability."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Regular maintenance and cleanup of Docker’s storage directories are essential for efficient resource utilization and preventing disk space issues."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "If you want to start fresh while keeping some of your existing data, you can create a new Docker environment by following these steps:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Stop and remove all running containers."
      }), "\n", createVNode(_components.li, {
        children: "Save any images you want to keep by creating a new image from a container or exporting the image to a tar file."
      }), "\n", createVNode(_components.li, {
        children: ["Remove all unused images with ", createVNode(_components.code, {
          children: "docker image prune -a"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Stop the Docker daemon."
      }), "\n", createVNode(_components.li, {
        children: ["Rename or move the ", createVNode(_components.code, {
          children: "/var/lib/docker"
        }), " directory to a backup location."]
      }), "\n", createVNode(_components.li, {
        children: ["Start the Docker daemon again, which will create a new, empty ", createVNode(_components.code, {
          children: "/var/lib/docker"
        }), " directory."]
      }), "\n", createVNode(_components.li, {
        children: "Import or load any images you want to keep in the new environment."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This process will effectively reset your Docker environment while allowing you to selectively keep or discard existing images and data."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: ["Maintaining the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory is crucial for efficient Docker usage and preventing disk space issues. By regularly removing unused Docker objects, monitoring disk space usage, and optimizing Docker images, you can keep the ", createVNode(_components.code, {
        children: "/var/lib/docker/overlay2"
      }), " directory at a manageable size and ensure smooth operation of your Docker environment."]
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

const url = "src/content/posts/clean-docker-overlay2-dir.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/clean-docker-overlay2-dir.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/clean-docker-overlay2-dir.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
