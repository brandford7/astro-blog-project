import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-08-16T05:00:00.000Z",
  "title": "How To Clean All Docker Images With Disks and Everything",
  "description": "Learn how to declutter your Docker environment. Our guide shows you how to remove images, containers, volumes, and networks, freeing up valuable disk space. Follow step-by-step instructions to start fresh with Docker.",
  "image": "../../assets/images/23/08/docker-cleanup.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/cleanup-all-docker-things/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-clean-all-docker-images-with-disks-and-everything",
    "text": "How To Clean All Docker Images With Disks and Everything"
  }, {
    "depth": 3,
    "slug": "1stop-all-running-containers",
    "text": "1.Stop All Running Containers:"
  }, {
    "depth": 3,
    "slug": "2remove-all-containers",
    "text": "2.Remove All Containers:"
  }, {
    "depth": 3,
    "slug": "3remove-all-images",
    "text": "3.Remove All Images:"
  }, {
    "depth": 3,
    "slug": "4remove-all-volumes",
    "text": "4.Remove All Volumes:"
  }, {
    "depth": 3,
    "slug": "5remove-all-networks",
    "text": "5.Remove All Networks:"
  }, {
    "depth": 3,
    "slug": "6system-wide-cleanup",
    "text": "6.System-wide Cleanup:"
  }, {
    "depth": 3,
    "slug": "7disk-settings-and-everything",
    "text": "7.Disk Settings and Everything:"
  }, {
    "depth": 3,
    "slug": "warning",
    "text": "Warning:"
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
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I was responsible for maintaining the analytics platform for several websites using plausible.io, which I had set up using Docker and docker-compose. The other day, I noticed there was an update available for the plausible.io Docker image. Eager to benefit from the latest features, I updated the docker-compose image configuration and tried to apply the update."
    }), "\n", createVNode(_components.p, {
      children: "To my surprise, the update failed. After checking the logs, I realized the problem was with the PostgreSQL database version. I had version 12, but the new plausible.io image required version 14. I thought the quickest solution would be to revert the PostgreSQL database to its previous state using the old image."
    }), "\n", createVNode(_components.p, {
      children: ["After restoring the database and trying to restart ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-plausible-analytics/",
        children: "plausible.io"
      }), ", I faced another issue: the websites were no longer accessible through the analytics platform. I decided to ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/updating-container-docker-compose/",
        children: "pull the latest images again"
      }), ", hoping this would resolve the problem. However, I was met with a new error:"]
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
            children: "ERROR:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " plausible_plausible_events_db_1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Cannot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " container"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " service"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " plausible_events_db:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/docker/volumes/plausible_event-data/_data:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " no"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " such"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " directory"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Additionally, there was a warning:"
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
            children: "WARNING:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Service"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"plausible_events_db\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/var/lib/clickhouse\""
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
            children: " previous"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " container."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Host"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mapping"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"plausible_event-data2\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " has"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " no"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " effect."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " existing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " containers"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (with "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "docker-compose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm plausible`"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "It became clear to me that I needed to take more drastic measures. I decided to do a clean install of everything and remove the previous plausible.io configurations."
    }), "\n", createVNode(_components.p, {
      children: "I have started doing that but in the beginning, I only cleaned the images and volumes had an issue and so on. In the below steps you will find everything you need to do a proper docker cleanup to install the new images fresh."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-clean-all-docker-images-with-disks-and-everything",
      children: "How To Clean All Docker Images With Disks and Everything"
    }), "\n", createVNode(_components.h3, {
      id: "1stop-all-running-containers",
      children: "1.Stop All Running Containers:"
    }), "\n", createVNode(_components.p, {
      children: "First, you need to stop all running containers because you can’t remove a container that is currently running."
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
            children: " stop"
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command stops all running containers by listing all container IDs and then stopping them."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "If you have more containers there that don’t need to be stopped you can only stop them."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2remove-all-containers",
      children: "2.Remove All Containers:"
    }), "\n", createVNode(_components.p, {
      children: "After stopping all containers, you can remove them."
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command removes all containers by listing all container IDs and then removing them."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "If you have containers that should not be removed just remove them one by one not with all."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3remove-all-images",
      children: "3.Remove All Images:"
    }), "\n", createVNode(_components.p, {
      children: "Once all containers are removed, you can remove all images."
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command removes all images by listing all image IDs and then removing them."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Again if you don’t want all images to be removed remove what you don’t need."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4remove-all-volumes",
      children: "4.Remove All Volumes:"
    }), "\n", createVNode(_components.p, {
      children: "Docker volumes are used to persist data from a certain container or to share data between containers. To remove all unused volumes:"
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
            children: " volume"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " prune"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command removes all unused volumes. The -f or —force flag will bypass the confirmation prompt."
    }), "\n", createVNode(_components.h3, {
      id: "5remove-all-networks",
      children: "5.Remove All Networks:"
    }), "\n", createVNode(_components.p, {
      children: "To remove all unused networks:"
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " prune"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command removes all unused networks. The -f or —force flag will bypass the confirmation prompt."
    }), "\n", createVNode(_components.h3, {
      id: "6system-wide-cleanup",
      children: "6.System-wide Cleanup:"
    }), "\n", createVNode(_components.p, {
      children: "Docker provides a command that cleans up containers, images, volumes, and networks that are not associated with a container:"
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
      children: "The -a flag tells Docker to remove all unused images, not just dangling ones. The -f or —force flag will bypass the confirmation prompt."
    }), "\n", createVNode(_components.h3, {
      id: "7disk-settings-and-everything",
      children: "7.Disk Settings and Everything:"
    }), "\n", createVNode(_components.p, {
      children: "If you want to clean up disk space further, you may need to look into the Docker data directory, which is usually located at /var/lib/docker/ on Linux systems. Be very careful with this step, as it will remove all Docker data:"
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
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/docker"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "After this, you may need to restart the Docker service:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " systemctl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " restart"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Do this only if you don’t have other docker images and you want a fresh start."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "warning",
      children: "Warning:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "These commands will remove all your Docker containers, images, volumes, and networks. They will also free up disk space, but you will lose all data associated with your Docker containers and images. Make sure you have backed up important data before running these commands."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "In this way, you clean up all the docker things if you bump into issues and you want a fresh start. Be sure to take a backup before in case you need something. Also if this is a production environment you should also do a basic test before with a downtime."
    }), "\n", createVNode(_components.p, {
      children: "Good luck with your Docker cleanup!"
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

const url = "src/content/posts/cleanup-all-docker-things.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/cleanup-all-docker-things.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/cleanup-all-docker-things.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
