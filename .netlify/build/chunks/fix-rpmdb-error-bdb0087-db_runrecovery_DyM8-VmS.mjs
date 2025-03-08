import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-05-24T00:00:00.000Z",
  "title": "Fix Cannot Open Packages Database In /var/lib/rpm DB_RUNRECOVERY: Fatal error",
  "description": "Learn how to fix the common Cannot Open Packages Database In /var/lib/rpm DB_RUNRECOVERY: Fatal error and install packages.",
  "image": "../../assets/images/24/05/fix-rpmdb-error-bdb0087-db_runrecovery.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux"],
  "canonical": "https://www.bitdoze.com/fix-rpmdb-error-bdb0087-db_runrecovery/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "causes-of-rpm-database-corruption",
    "text": "Causes of RPM Database Corruption"
  }, {
    "depth": 2,
    "slug": "steps-to-resolve-the-issue",
    "text": "Steps to Resolve the Issue"
  }, {
    "depth": 2,
    "slug": "example-commands",
    "text": "Example Commands"
  }, {
    "depth": 2,
    "slug": "additional-considerations",
    "text": "Additional Considerations"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["If you are encountering the below error message that is not allowing you to install ", createVNode(_components.code, {
        children: "rpm"
      }), " or ", createVNode(_components.code, {
        children: "yum"
      }), " packages:"]
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
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rpmdb:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BDB0113"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Thread/process"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 21929/140612494501952"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " failed:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BDB1507"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Thread"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " died"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Berkeley"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DB"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " library"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " error"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-30973"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dbenv"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "failchk:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BDB0087"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DB_RUNRECOVERY:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Fatal"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " error,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " recovery"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cannot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Packages"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " index"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (-30973)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cannot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Packages"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/rpm"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rpmdb:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BDB0113"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Thread/process"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 21929/140612494501952"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " failed:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BDB1507"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Thread"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " died"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Berkeley"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DB"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " library"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " db5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " error"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-30973"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dbenv"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "failchk:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BDB0087"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DB_RUNRECOVERY:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Fatal"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " error,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " recovery"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cannot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " open"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Packages"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/rpm"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "indicates that the RPM database (rpmdb) is corrupted. This corruption can occur due to several reasons, including interrupted package installations, updates, or removals, power failures, or other system interruptions."
    }), "\n", createVNode(_components.h2, {
      id: "causes-of-rpm-database-corruption",
      children: "Causes of RPM Database Corruption"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Interrupted Operations"
        }), ": The most common cause is the interruption of package management operations such as installation, update, or removal. This can happen if the process is manually stopped or if the system loses power during the operation."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Stale Lock Files"
        }), ": If ", createVNode(_components.code, {
          children: "rpm"
        }), ", ", createVNode(_components.code, {
          children: "yum"
        }), ", or ", createVNode(_components.code, {
          children: "dnf"
        }), " commands do not exit cleanly, they can leave behind lock files in ", createVNode(_components.code, {
          children: "/var/lib/rpm"
        }), ", which can cause subsequent operations to fail."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hardware Issues"
        }), ": Failing memory or disk can also lead to database corruption. This is less common but should be considered if the problem persists."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Software Bugs"
        }), ": There may be bugs in the RPM or Berkeley DB software that cause corruption under certain conditions."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "steps-to-resolve-the-issue",
      children: "Steps to Resolve the Issue"
    }), "\n", createVNode(_components.p, {
      children: "To fix the corrupted RPM database, you can follow these steps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Backup the Current RPM Database"
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
          "data-language": "bash",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "mkdir"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/lib/rpm/backup"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "cp"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -a"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/lib/rpm/__db"
              }), createVNode(_components.span, {
                style: {
                  color: "#E5C07B"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/lib/rpm/backup/"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Remove the Corrupted Database Files"
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
          "data-language": "bash",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "rm"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -f"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/lib/rpm/__db.[0-9][0-9]"
              }), createVNode(_components.span, {
                style: {
                  color: "#E5C07B"
                },
                children: "*"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Rebuild the RPM Database"
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
          "data-language": "bash",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "rpm"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " --rebuilddb"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Clean the Yum Cache"
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
          "data-language": "bash",
          children: createVNode(_components.code, {
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "yum"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " clean"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " all"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Verify the Integrity of the Packages File"
          }), " (Optional):"]
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
                children: "db_verify"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/lib/rpm/Packages"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Check for Hardware Issues"
          }), " (Optional):\r\nReview system logs for any hardware-related errors that might indicate failing memory or disk."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "example-commands",
      children: "Example Commands"
    }), "\n", createVNode(_components.p, {
      children: "Here is a consolidated set of commands to perform the above steps:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Backup the current RPM database"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/rpm/backup"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "cp"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/rpm/__db"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/rpm/backup/"
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
            children: "# Remove the corrupted database files"
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
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/lib/rpm/__db.[0-9][0-9]"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
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
            children: "# Rebuild the RPM database"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rpm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --rebuilddb"
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
            children: "# Clean the Yum cache"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "yum"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clean"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " all"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "additional-considerations",
      children: "Additional Considerations"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ensure Uninterrupted Operations"
        }), ": Make sure that package management operations are not interrupted. Use a UPS to prevent power failures during critical operations."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check for Automation Issues"
        }), ": If you are using automation tools, ensure they are not terminating package management processes abruptly."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Monitor System Logs"
        }), ": Regularly check system logs for any signs of hardware issues or other anomalies that could lead to database corruption."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By following these steps, you should be able to resolve the RPM database corruption and prevent it from recurring. If the problem persists, consider investigating deeper into hardware issues or potential software bugs."
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

const url = "src/content/posts/fix-rpmdb-error-bdb0087-db_runrecovery.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/fix-rpmdb-error-bdb0087-db_runrecovery.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/fix-rpmdb-error-bdb0087-db_runrecovery.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
