import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-01-10T00:00:00.000Z",
  "title": "How to Find the Largest Files on Your Mac with This Simple Script!",
  "description": "Learn how to efficiently find and manage large files on your Mac using a simple Bash script. Free up valuable storage space today!",
  "image": "../../assets/images/25/01/find-big-file.jpg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["mac"],
  "canonical": "https://www.bitdoze.com/mac-find-big-files/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "common-methods-for-finding-large-files",
    "text": "Common Methods for Finding Large Files"
  }, {
    "depth": 3,
    "slug": "built-in-tools",
    "text": "Built-in Tools"
  }, {
    "depth": 3,
    "slug": "third-party-applications",
    "text": "Third-Party Applications"
  }, {
    "depth": 2,
    "slug": "how-to-find-the-biggest-files-on-your-mac",
    "text": "How to Find the Biggest Files on Your Mac"
  }, {
    "depth": 3,
    "slug": "script",
    "text": "Script"
  }, {
    "depth": 3,
    "slug": "run-the-script",
    "text": "Run the Script"
  }, {
    "depth": 2,
    "slug": "related-terminal-tools",
    "text": "Related Terminal Tools"
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
      children: "Finding and managing large files on your Mac is crucial for maintaining optimal performance and storage space. Over time, various files can consume significant disk space:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Video files and media projects"
      }), "\n", createVNode(_components.li, {
        children: "Virtual machine images"
      }), "\n", createVNode(_components.li, {
        children: "Large application installers"
      }), "\n", createVNode(_components.li, {
        children: "Old backup files"
      }), "\n", createVNode(_components.li, {
        children: "Downloaded content"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This guide will show you how to efficiently identify and manage large files using a simple Bash script, helping you reclaim valuable storage space on your Mac."
    }), "\n", createVNode(_components.h2, {
      id: "common-methods-for-finding-large-files",
      children: "Common Methods for Finding Large Files"
    }), "\n", createVNode(_components.h3, {
      id: "built-in-tools",
      children: "Built-in Tools"
    }), "\n", createVNode(_components.p, {
      children: "macOS provides several built-in options for managing storage:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "About This Mac > Storage"
        }), ": Offers a general overview but lacks detailed file information"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Finder’s storage management"
        }), ": Good for basic cleanup but not comprehensive"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Disk Utility"
        }), ": Primarily for disk management rather than file size analysis"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "third-party-applications",
      children: "Third-Party Applications"
    }), "\n", createVNode(_components.p, {
      children: "While there are many paid applications available for disk space management, they often:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Require installation and regular updates"
      }), "\n", createVNode(_components.li, {
        children: "May include unnecessary features"
      }), "\n", createVNode(_components.li, {
        children: "Could impact system performance"
      }), "\n", createVNode(_components.li, {
        children: "Usually come with a subscription cost"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is why a simple script can be more efficient and cost-effective."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool Mac Apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/mac/",
          children: "toolhunt.net mac apps section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-find-the-biggest-files-on-your-mac",
      children: "How to Find the Biggest Files on Your Mac"
    }), "\n", createVNode(_components.h3, {
      id: "script",
      children: "Script"
    }), "\n", createVNode(_components.p, {
      children: "The following Bash script is designed to identify and display the largest files on your Mac. It searches through your file system while excluding certain directories that typically contain system files or temporary data."
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
            children: "# Default number of files to show if not specified"
          })
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
            children: "-z"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "$1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
              color: "#E06C75"
            },
            children: "    num_files"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "20"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "else"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    num_files"
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
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fi"
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
            children: "# Print disk space information"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " \"===========================================\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"DISK SPACE INFORMATION\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"===========================================\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "df"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "awk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'NR==2 {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    printf \"Total Space: %s\\n\", $2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    printf \"Used Space:  %s\\n\", $3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    printf \"Free Space:  %s\\n\", $4"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    printf \"Usage:       %s\\n\", $5"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "}'"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " \"===========================================\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
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
            children: "# Print script start message"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " \"Searching for the "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$num_files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " largest files on your Mac...\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"This may take a while depending on your system size...\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"You may be prompted for sudo password to search all directories\""
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
            children: "# Create temporary file to store results"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "tmp_file"
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
            children: "# Use sudo to ensure we can access all directories"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Exclude system directories that might cause issues"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " find"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\ "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "                                                                                                                                                            -not"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -path"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/System/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -prune"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\)"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    -not"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -path"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/private/var/vm/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -prune"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\)"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    -not"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -path"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/Library/Caches/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -prune"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\)"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " \\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    -type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " f"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -print0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " 2>"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/dev/null"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    xargs"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " 2>"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/dev/null"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    sort"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    head"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$num_files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " > "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$tmp_file"
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
            children: "# Clear screen and print results in a formatted way"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " \"===========================================\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"TOP "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$num_files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " LARGEST FILES ON YOUR SYSTEM\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"===========================================\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " \"Size  |  File Path\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"-------------------------------------------\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "while"
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
            children: " line"
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
              color: "#E06C75"
            },
            children: "    size"
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$line"
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
            children: "awk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " '{print $1}'"
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
              color: "#E06C75"
            },
            children: "    file"
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$line"
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
            children: " -f2-"
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
              color: "#56B6C2"
            },
            children: "    printf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"%-6s | %s\\n\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$size"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$file"
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
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$tmp_file"
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"===========================================\""
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
            children: "# Clean up temporary file"
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
            children: "$tmp_file"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Scan complete!\""
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "run-the-script",
      children: "Run the Script"
    }), "\n", createVNode(_components.p, {
      children: "To run this script:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Open Terminal"
          }), ": You can find Terminal in Applications > Utilities or by searching for it using Spotlight (Cmd + Space)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Create a New Script File"
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " find_large_files.sh"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Paste the script into the editor and save it by pressing ", createVNode(_components.code, {
            children: "CTRL + X"
          }), ", then ", createVNode(_components.code, {
            children: "Y"
          }), ", and ", createVNode(_components.code, {
            children: "Enter"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Make the Script Executable"
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "chmod"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " +x"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " find_large_files.sh"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Run the Script"
          }), ":\r\nExecute the script by typing:"]
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
                children: "./find_large_files.sh"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [number_of_files]"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Replace ", createVNode(_components.code, {
            children: "[number_of_files]"
          }), " with how many of the largest files you want to display (default is 20).\r\nIn this process you will be promted for a password and will be asked to give various wrights to the terminal to make queries."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "View Results"
          }), ": The script will display disk space information followed by a list of the largest files found on your Mac."]
        }), "\n"]
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
              color: "#98C379"
            },
            children: "==========================================="
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "DISK"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SPACE"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " INFORMATION"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "==========================================="
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Total"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Space:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 460Gi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Used"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Space:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  10Gi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Free"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Space:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  369Gi"
          })]
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
            children: "       3%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "==========================================="
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Searching"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 20"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " largest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Mac..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "This"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " may"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " take"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " while"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " depending"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " size..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "You"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " may"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " prompted"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " password"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " search"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " all"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " directories"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Password:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Sorry,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " try"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " again."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Password:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "==========================================="
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "TOP"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 20"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " LARGEST"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " FILES"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ON"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " YOUR"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SYSTEM"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "==========================================="
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Size"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  |  "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "File"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Path"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-------------------------------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "13G"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/.diffusionbee/downloaded_assets/FLUX.1-schnell_flux_schnell_q5p_NNC_all.sqlite"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "13G"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/.diffusionbee/downloaded_assets/FLUX.1-dev_flux_dev_q5p_NNC_all.sqlite"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "8.4G"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/.ollama/models/blobs/sha256-6e41c39f4490a9e8b7a65916425c6ed97f04ed95bab991c4ab6a462ff84d1608"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "1.9G"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/.ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "949M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve.app/Contents/MacOS/Resolve"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "929M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Volumes/Recovery/434769EB-F939-481F-88EE-514C0C40DFD7/usr/standalone/firmware/arm64eBaseSystem.dmg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "869M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Desktop/ytvideos/ghostty"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " capcut_h264.mov"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "759M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Documents/ai"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " images"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tools.mp4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "687M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Desktop/ytvideos/ai"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " image"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tools.mp4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "611M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Desktop/ytvideos/ghostty"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " yt.mp4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "585M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/CapCut.app/Contents/Frameworks/libVECreator.dylib"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "551M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Desktop/ytvideos/1219.mov"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "528M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Documents/ghostty.mp4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "516M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Users/dragos/Desktop/ytvideos/mac"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mini"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " m4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ollama"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " phi-4.mov"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "514M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Control"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Panels"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Setup.app/Contents/Frameworks/libQt6WebEngineCore.6.dylib"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "504M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/Docker.app/Contents/Resources/linuxkit/boot.img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "313M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/Logi"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Tune.app/Contents/Frameworks/Electron"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Framework.framework/Versions/A/Electron"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Framework"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "307M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve.app/Contents/Applications/Electron.app/Contents/Frameworks/Electron"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Framework.framework/Versions/A/Electron"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Framework"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "277M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/Ollama.app/Contents/Frameworks/Electron"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Framework.framework/Versions/A/Electron"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Framework"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "235M"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/Applications/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve/DaVinci"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Resolve.app/Contents/Libraries/libtorch_cpu.dylib"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "==========================================="
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Scan"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " complete!"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "6",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Take Action"
        }), ": Now you can choose to delete or keep the files that are very big, is up to you."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "related-terminal-tools",
      children: "Related Terminal Tools"
    }), "\n", createVNode(_components.p, {
      children: "If you’re getting comfortable with terminal-based tools, these might enhance your experience:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.bitdoze.com/ghostty-terminal/",
          children: "Ghostty Terminal"
        }), " - A modern terminal emulator offering enhanced features and better performance"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.bitdoze.com/install-wezterm-mac/",
          children: "WezTerm"
        }), " - A powerful terminal emulator with extensive customization options"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.bitdoze.com/tmux-basics/",
          children: "Tmux Basics"
        }), " - Learn to use Tmux for better terminal session management and productivity"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Managing disk space is crucial for maintaining optimal performance on your Mac, especialy with the prices that Apple are charging on storage :)."
    }), "\n", createVNode(_components.p, {
      children: "By utilizing this Bash script, you can efficiently identify large files that may no longer be needed, allowing you to free up valuable storage space."
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

const url = "src/content/posts/mac-find-big-files.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/mac-find-big-files.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/mac-find-big-files.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
