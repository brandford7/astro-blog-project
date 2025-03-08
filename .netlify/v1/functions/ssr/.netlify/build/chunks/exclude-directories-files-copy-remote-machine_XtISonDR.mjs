import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-07-07T00:00:00.000Z",
  "title": "How to Exclude Directories or Files When Copying to a Remote Machine",
  "description": "Let's see exactly what needs to be done when we want to use scp or rsync to exclude files or folders when coppyng to remote machine.\"",
  "image": "../../assets/images/23/07/linux-scp-rsync-exclude-files.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux-commands"],
  "canonical": "https://www.bitdoze.com/exclude-directories-files-copy-remote-machine/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "excluding-files-or-directories-with-rsync",
    "text": "Excluding Files or Directories with Rsync"
  }, {
    "depth": 2,
    "slug": "excluding-files-with-scp",
    "text": "Excluding Files with SCP"
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
      children: "In Linux we can use 2 commands to move files or directories to a remote server or from a remote server"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "scp"
        }), " - secure copy"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "rsync"
        }), " - remote sync"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "From the scp and rsync the better choice is to use rsync as it offers more options and a straight forward way to exclude what you want easily. So without making this longer let’s see the way to use both rsync and scp to exclude files."
    }), "\n", createVNode(_components.h2, {
      id: "excluding-files-or-directories-with-rsync",
      children: "Excluding Files or Directories with Rsync"
    }), "\n", createVNode(_components.p, {
      children: "When using Rsync, you can easily exclude specific directories or files from the synchronization process. This allows you to fine-tune your sync to only include the data that is relevant to you. Here’s how you can exclude files with Rsync:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Use the ", createVNode(_components.code, {
            children: "--exclude"
          }), " option: Rsync provides the ", createVNode(_components.code, {
            children: "--exclude"
          }), " option, followed by the path of the file or directory you want to exclude. You can use this option multiple times to exclude multiple files or directories. For example:"]
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
          "data-language": "shell",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "rsync"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'dir1'"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'dir2'"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " source/"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " destination/"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["This command will exclude ", createVNode(_components.code, {
            children: "dir1"
          }), " and ", createVNode(_components.code, {
            children: "dir2"
          }), " from the synchronization process."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Exclude files based on patterns: Rsync also allows you to exclude files based on specific patterns. For instance, you can exclude all files with a certain extension or exclude files with a particular naming pattern. Here’s an example:"
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
          "data-language": "shell",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "rsync"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " '*.txt'"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'backup*'"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " source/"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " destination/"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["In this case, all files with the ", createVNode(_components.code, {
            children: ".txt"
          }), " extension and files starting with ", createVNode(_components.code, {
            children: "backup"
          }), " will be excluded."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Exclude directories recursively: If you want to exclude directories and their subdirectories, you can use the ", createVNode(_components.code, {
            children: "--exclude-dir"
          }), " option. This option works similarly to ", createVNode(_components.code, {
            children: "--exclude"
          }), " but applies to directories instead. Here’s an example:"]
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
          "data-language": "shell",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "rsync"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude-dir"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'dir1'"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude-dir"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'dir2'"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " source/"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " destination/"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["This command will exclude ", createVNode(_components.code, {
            children: "dir1"
          }), " and ", createVNode(_components.code, {
            children: "dir2"
          }), " along with their subdirectories."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "To exclude multiple directories or files, you can specify them using a comma-separated list. For example, to exclude both “docs” and “tmp” directories, you can use the command:"
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
          "data-language": "shell",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "rsync"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -av"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --exclude="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "\"docs,tmp\""
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " source_directory"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " destination_directory"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Note: Remember, when using Rsync, the order of the ", createVNode(_components.code, {
          children: "--exclude"
        }), " or ", createVNode(_components.code, {
          children: "--exclude-dir"
        }), " options matters. Rsync processes them from left to right, so place more specific exclusions before more general ones."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "excluding-files-with-scp",
      children: "Excluding Files with SCP"
    }), "\n", createVNode(_components.p, {
      children: "SCP (Secure Copy) is a popular choice but is not the best one if you would like to exclude files. SCP does not offer a default command that you can use and exclude any file or directory you want."
    }), "\n", createVNode(_components.p, {
      children: "However you can try excluding files or directories with SCP with extglob, this works in bash so enable extglob you do:"
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "shopt"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " extglob"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "After you can run your SCP command:"
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "scp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " !"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(*.txt) "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "root@centos7:/tmp/"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will copy everything in the current directory except the txt files to the remote server /tmp locations."
    }), "\n", createVNode(_components.p, {
      children: "The extglob extended pattern matching list is below one:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Pattern"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "?(pattern-list)"
            })
          }), createVNode(_components.td, {
            children: "Matches zero or one occurrence of the given patterns."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "*(pattern-list)"
            })
          }), createVNode(_components.td, {
            children: "Matches zero or more occurrences of the given patterns."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "+(pattern-list)"
            })
          }), createVNode(_components.td, {
            children: "Matches one or more occurrences of the given patterns."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "@(pattern-list)"
            })
          }), createVNode(_components.td, {
            children: "Matches one of the given patterns."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "!(pattern-list)"
            })
          }), createVNode(_components.td, {
            children: "Matches anything except the given patterns."
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "If you want more linux related articles you should check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/benchmark-cloud-servers/",
          children: "How to Benchmark Cloud Servers (VPS)"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/monitor-cpu-usage-and-send-email-alerts-in-linux/",
          children: "Monitor CPU Usage and Send Email Alerts in Linux"
        })
      }), "\n"]
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

const url = "src/content/posts/exclude-directories-files-copy-remote-machine.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/exclude-directories-files-copy-remote-machine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/exclude-directories-files-copy-remote-machine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
