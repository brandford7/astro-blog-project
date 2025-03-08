import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-11-14T00:00:00.000Z",
  "title": "How To Compare Two Folders Content and See Different Files in Terminal",
  "description": "Learn how you can compare two folders and see the different files in terminal in a linux or MacOs",
  "image": "../../assets/images/23/11/compare-folders-content-differences.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux-commands"],
  "canonical": "https://www.bitdoze.com/compare-folders-content-differences/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "compare-two-folders-content-and-see-different-files-in-terminal",
    "text": "Compare Two Folders Content and See Different Files in Terminal"
  }, {
    "depth": 2,
    "slug": "enhance-the-diff-command-and-filter-the-results",
    "text": "Enhance The Diff Command and Filter The Results"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
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
      children: "If you have two folders that contain similar files, you might want to compare them and see what are the differences. For example, you might have a backup folder that is supposed to be identical to your original folder, but you are not sure if they are in sync. Or you might have two versions of a project that you want to merge or update."
    }), "\n", createVNode(_components.p, {
      children: "For me I needed to check the different files in two repos, I contracted someone to help me with some issues on this website in astro.js and he provided me the zip archive with the finished code. I needed to see what are the modified files so I could understand what changed."
    }), "\n", createVNode(_components.p, {
      children: "In this article, you will learn how to compare two folders’ content and see different files in the terminal using some simple commands. This can be done in the terminal and will work in MacOS or Linux, on Windows can also work but you need the Windows subsystem to have access to the command."
    }), "\n", createVNode(_components.p, {
      children: "By the end of this article, you will be able to compare any two folders and find out what files are added, deleted, modified, or unchanged."
    }), "\n", createVNode(_components.h2, {
      id: "compare-two-folders-content-and-see-different-files-in-terminal",
      children: "Compare Two Folders Content and See Different Files in Terminal"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "diff"
      }), " command is a command-line utility that compares two files or directories line by line and displays the differences between them. It also tells you what changes you need to make to one file or directory to make it match the other one. The basic syntax of the diff command is:"]
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
            children: "diff"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [options] file1 file2"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "or"
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
            children: "diff"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [options] dir1 dir2"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "To compare two directories, you need to use the -rq option"
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
            children: "diff"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rq"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir2"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "-r"
          }), " option, which stands for recursive. This option tells the diff command to compare all the files and subdirectories inside the specified directories. For example, if you have two directories named dir1 and dir2, you can compare them by running:"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "-q"
          }), " makes the output more concise and readable -q option stands for brief. This option tells the diff command to only report when files differ, without showing the details of the differences. For example, if you run:"]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "diff"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rq"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /Users/dbalota/websites/bitdoze-astro-bkw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The output will look something like this:"
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
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " .DS_Store"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/assets/favicons:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Grammarly.c8npGa4ajbhi8fee1ud80d82.dmg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/assets/favicons:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " favicon.ico"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/assets/favicons:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " favicon.png"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/assets/favicons:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " favicon.svg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/config/menu.json"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/config/menu.json"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/content/posts/add-accordion-carrd.mdx"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/content/posts/add-accordion-carrd.mdx"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/content/posts:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " compare-folders-content-differences.mdx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/content/posts/opnform-open-source.mdx"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/content/posts/opnform-open-source.mdx"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " .DS_Store"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/layouts/Base.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/Base.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/layouts/PostSingle.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/PostSingle.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/layouts/Posts.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/Posts.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/components:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " .DS_Store"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/layouts/components/SimilarPosts.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/components/SimilarPosts.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/layouts/components/widgets/Button.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/components/widgets/Button.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/layouts/partials/Footer.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/layouts/partials/Footer.astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/pages/[regular].astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/pages/[regular].astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/pages/authors/[single].astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/pages/authors/[single].astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " differ"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/websites/bitdoze-astro-bkw/src/styles/base.scss"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /Users/dbalota/Desktop/orange-facturi/easypanel/bitdoze/src/styles/base.scss"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " diffe"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In the above output, you can see that it will give you the exact files which are different."
    }), "\n", createVNode(_components.h2, {
      id: "enhance-the-diff-command-and-filter-the-results",
      children: "Enhance The Diff Command and Filter The Results"
    }), "\n", createVNode(_components.p, {
      children: "One way to filter the output of the diff command is to use the grep command, which can search for a pattern in the input and print only the matching lines. For example, if we want to compare two directories, dir1 and dir2, and exclude a certain file from the comparison, we can use the following command:"
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
            children: "diff"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rq"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir2"
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
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "fil"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "e>"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The pipe symbol (|) redirects the output of the diff command to the input of the grep command. The ", createVNode(_components.strong, {
        children: "grep -v"
      }), " option tells the grep command to invert the match, meaning that it will print only the lines that do not contain the pattern. The pattern is the name of the file we want to exclude, enclosed in angle brackets. For example, if we want to exclude the file README.md, we can use:"]
    }), "\n", createVNode(_components.p, {
      children: ["Another way to filter the output of the diff command is to use the ", createVNode(_components.strong, {
        children: "grep -i"
      }), " option, which tells the grep command to ignore the case of the pattern. This can be useful if we want to compare two directories and find the files that have the same name but different cases. For example, if we want to compare dir1 and dir2 and find the files that have the name file.txt, regardless of the case, we can use the following command:"]
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
            children: "diff"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rq"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir2"
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
            children: " file.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The grep -i option tells the grep command to match the pattern file.txt in any case, such as File.txt, FILE.TXT, or fiLe.TxT. For example, if dir1 contains File.txt and dir2 contains file.txt, the command will print:"
    }), "\n", createVNode(_components.p, {
      children: "Files dir1/File.txt and dir2/file.txt differ"
    }), "\n", createVNode(_components.p, {
      children: "By using these filters, we can enhance the diff command and make it more flexible and powerful for our purposes."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: ["This easy is to compare two folders with subdirectories and see exactly what fails are different, with the terminal on Linux or MacOS you don’t need any app besides the command diff. You can enhance the command with grep to find exactly what you are interested in and also you can use ", createVNode(_components.strong, {
        children: "-u"
      }), " option to see the exact changes."]
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

const url = "src/content/posts/compare-folders-content-differences.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/compare-folders-content-differences.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/compare-folders-content-differences.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
