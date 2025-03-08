import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-07-10T00:00:00.000Z",
  "title": "Top 100+ GIT Commands You MUST Know",
  "description": "Discover the top 100+ GIT commands every developer must know to streamline version control and boost productivity. ",
  "image": "../../assets/images/24/07/git-commands.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["git"],
  "canonical": "https://www.bitdoze.com/git-commands/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "section-1-basic-git-commands",
    "text": "Section 1: Basic Git Commands"
  }, {
    "depth": 3,
    "slug": "11-git-init",
    "text": "1.1 git init"
  }, {
    "depth": 3,
    "slug": "12-git-clone",
    "text": "1.2 git clone"
  }, {
    "depth": 3,
    "slug": "13-git-status",
    "text": "1.3 git status"
  }, {
    "depth": 3,
    "slug": "14-git-add",
    "text": "1.4 git add"
  }, {
    "depth": 3,
    "slug": "15-git-commit",
    "text": "1.5 git commit"
  }, {
    "depth": 3,
    "slug": "16-git-config",
    "text": "1.6 git config"
  }, {
    "depth": 2,
    "slug": "section-2-branching-and-merging",
    "text": "Section 2: Branching and Merging"
  }, {
    "depth": 3,
    "slug": "21-git-branch",
    "text": "2.1 git branch"
  }, {
    "depth": 3,
    "slug": "22-git-checkout",
    "text": "2.2 git checkout"
  }, {
    "depth": 3,
    "slug": "23-git-merge",
    "text": "2.3 git merge"
  }, {
    "depth": 3,
    "slug": "24-git-rebase",
    "text": "2.4 git rebase"
  }, {
    "depth": 3,
    "slug": "25-git-branch--d",
    "text": "2.5 git branch -d"
  }, {
    "depth": 2,
    "slug": "section-3-remote-repositories",
    "text": "Section 3: Remote Repositories"
  }, {
    "depth": 3,
    "slug": "31-git-remote",
    "text": "3.1 git remote"
  }, {
    "depth": 3,
    "slug": "32-git-fetch",
    "text": "3.2 git fetch"
  }, {
    "depth": 3,
    "slug": "33-git-pull",
    "text": "3.3 git pull"
  }, {
    "depth": 3,
    "slug": "34-git-push",
    "text": "3.4 git push"
  }, {
    "depth": 3,
    "slug": "35-git-remote--v",
    "text": "3.5 git remote -v"
  }, {
    "depth": 2,
    "slug": "section-4-viewing-and-exploring-history",
    "text": "Section 4: Viewing and Exploring History"
  }, {
    "depth": 3,
    "slug": "41-git-log",
    "text": "4.1 git log"
  }, {
    "depth": 3,
    "slug": "42-git-diff",
    "text": "4.2 git diff"
  }, {
    "depth": 3,
    "slug": "43-git-show",
    "text": "4.3 git show"
  }, {
    "depth": 3,
    "slug": "44-git-blame",
    "text": "4.4 git blame"
  }, {
    "depth": 3,
    "slug": "45-git-shortlog",
    "text": "4.5 git shortlog"
  }, {
    "depth": 2,
    "slug": "section-5-undoing-changes",
    "text": "Section 5: Undoing Changes"
  }, {
    "depth": 3,
    "slug": "51-git-reset",
    "text": "5.1 git reset"
  }, {
    "depth": 3,
    "slug": "52-git-revert",
    "text": "5.2 git revert"
  }, {
    "depth": 3,
    "slug": "53-git-clean",
    "text": "5.3 git clean"
  }, {
    "depth": 3,
    "slug": "54-git-stash",
    "text": "5.4 git stash"
  }, {
    "depth": 3,
    "slug": "55-git-cherry-pick",
    "text": "5.5 git cherry-pick"
  }, {
    "depth": 2,
    "slug": "section-6-advanced-git-commands",
    "text": "Section 6: Advanced Git Commands"
  }, {
    "depth": 3,
    "slug": "61-git-bisect",
    "text": "6.1 git bisect"
  }, {
    "depth": 3,
    "slug": "62-git-tag",
    "text": "6.2 git tag"
  }, {
    "depth": 3,
    "slug": "63-git-submodule",
    "text": "6.3 git submodule"
  }, {
    "depth": 3,
    "slug": "64-git-archive",
    "text": "6.4 git archive"
  }, {
    "depth": 3,
    "slug": "65-git-reflog",
    "text": "6.5 git reflog"
  }, {
    "depth": 2,
    "slug": "section-7-collaboration-and-contribution",
    "text": "Section 7: Collaboration and Contribution"
  }, {
    "depth": 3,
    "slug": "71-git-cherry",
    "text": "7.1 git cherry"
  }, {
    "depth": 3,
    "slug": "72-git-apply",
    "text": "7.2 git apply"
  }, {
    "depth": 3,
    "slug": "73-git-format-patch",
    "text": "7.3 git format-patch"
  }, {
    "depth": 3,
    "slug": "74-git-send-email",
    "text": "7.4 git send-email"
  }, {
    "depth": 3,
    "slug": "75-git-request-pull",
    "text": "7.5 git request-pull"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Git, a distributed version control system, has become an indispensable tool for developers and DevOps professionals worldwide. Its ability to track changes, manage code versions, and facilitate collaboration on projects makes it a cornerstone of modern software development. Whether you’re working on a solo project or contributing to a large team, mastering Git commands is essential for efficient and effective version control."
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will cover 100+ essential Git commands that every developer should know. These commands range from basic operations to advanced techniques, providing a comprehensive guide to navigating and utilizing Git. Each command will be explained with examples to help you understand its usage and practical applications."
    }), "\n", createVNode(_components.h2, {
      id: "section-1-basic-git-commands",
      children: "Section 1: Basic Git Commands"
    }), "\n", createVNode(_components.h3, {
      id: "11-git-init",
      children: "1.1 git init"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git init"
      }), " command is used to initialize a new Git repository. This command sets up all the necessary files and directories that Git needs to track changes in your project."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " my_project"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " my_project"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Initialized"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " empty"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " repository"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /path/to/my_project/.git/"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "mkdir my_project"
        }), ": Creates a new directory named ", createVNode(_components.code, {
          children: "my_project"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "cd my_project"
        }), ": Changes the current directory to ", createVNode(_components.code, {
          children: "my_project"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git init"
        }), ": Initializes a new Git repository in the current directory. After running this command, a ", createVNode(_components.code, {
          children: ".git"
        }), " directory is created, which contains all the metadata and object database for the repository."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "12-git-clone",
      children: "1.2 git clone"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git clone"
      }), " command is used to create a copy of an existing repository. This is particularly useful when you want to contribute to a project or use an existing project as a starting point."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/user/repository.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Cloning"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " into"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'repository'..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enumerating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Counting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (10/10), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Compressing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (8/8), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Total"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (delta "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), reused 10 ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "delta"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), pack-reused 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Unpacking"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (10/10), done."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git clone https://github.com/user/repository.git"
        }), ": Clones the repository located at the specified URL into a new directory named ", createVNode(_components.code, {
          children: "repository"
        }), ". The command downloads all the files, branches, and commits from the remote repository."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "13-git-status",
      children: "1.3 git status"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git status"
      }), " command shows the current state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " status"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "On"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " up"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " date"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'origin/main'."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Untracked"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "use"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"git add <file>...\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " include"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " what"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " committed"
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
            children: "    newfile.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "nothing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " added"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " commit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " but"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " untracked"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " present"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (use "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"git add\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " track"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git status"
        }), ": Displays the status of the working directory and staging area. In this example, it shows that there is an untracked file named ", createVNode(_components.code, {
          children: "newfile.txt"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "14-git-add",
      children: "1.4 git add"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git add"
      }), " command adds file contents to the staging area. This command is used to prepare changes for the next commit."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git add newfile.txt"
        }), ": Adds the file ", createVNode(_components.code, {
          children: "newfile.txt"
        }), " to the staging area. This means that the changes in ", createVNode(_components.code, {
          children: "newfile.txt"
        }), " will be included in the next commit."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "15-git-commit",
      children: "1.5 git commit"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git commit"
      }), " command records changes to the repository. It takes a snapshot of the changes in the staging area and saves them in the repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " commit"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Add newfile.txt\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[main 1a2b3c4] Add newfile.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " changed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " insertion"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "+"
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
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 100644"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git commit -m \"Add newfile.txt\""
        }), ": Creates a new commit with the message “Add newfile.txt”. The commit includes the changes that were staged with ", createVNode(_components.code, {
          children: "git add"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "16-git-config",
      children: "1.6 git config"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git config"
      }), " command is used to configure Git settings. It can set user information, such as name and email, and other preferences."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --global"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user.name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"John Doe\""
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --global"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user.email"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"johndoe@example.com\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git config --global user.name \"John Doe\""
        }), ": Sets the global Git user name to “John Doe”."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git config --global user.email \"johndoe@example.com\""
        }), ": Sets the global Git user email to “", createVNode(_components.a, {
          href: "mailto:johndoe@example.com",
          children: "johndoe@example.com"
        }), "”."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these basic Git commands, you can start managing your projects more effectively. These commands form the foundation of Git usage, enabling you to initialize repositories, track changes, and commit updates. In the next section, we will explore branching and merging, which are crucial for managing different versions of your code."
    }), "\n", createVNode(_components.h2, {
      id: "section-2-branching-and-merging",
      children: "Section 2: Branching and Merging"
    }), "\n", createVNode(_components.p, {
      children: "Branching and merging are fundamental concepts in Git that allow developers to work on different features or fixes simultaneously without interfering with the main codebase. This section will cover essential commands for managing branches and merging changes."
    }), "\n", createVNode(_components.h3, {
      id: "21-git-branch",
      children: "2.1 git branch"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git branch"
      }), " command is used to list, create, or delete branches. Branches are pointers to specific commits, allowing you to isolate your work."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# List all branches"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "* main"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  feature-branch"
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
            children: "# Create a new branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new-feature"
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
            children: "# Delete a branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature-branch"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Deleted"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature-branch"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (was "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1a2b3c4"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git branch"
        }), ": Lists all the branches in the repository. The ", createVNode(_components.code, {
          children: "*"
        }), " indicates the current branch."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git branch new-feature"
        }), ": Creates a new branch named ", createVNode(_components.code, {
          children: "new-feature"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git branch -d feature-branch"
        }), ": Deletes the branch named ", createVNode(_components.code, {
          children: "feature-branch"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "22-git-checkout",
      children: "2.2 git checkout"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git checkout"
      }), " command is used to switch branches or restore working tree files. This command changes the current branch to the specified branch."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Switch to an existing branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " checkout"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new-feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Switched"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'new-feature'"
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
            children: "# Create and switch to a new branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " checkout"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -b"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " another-feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Switched"
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
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'another-feature'"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git checkout new-feature"
        }), ": Switches the current branch to ", createVNode(_components.code, {
          children: "new-feature"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git checkout -b another-feature"
        }), ": Creates a new branch named ", createVNode(_components.code, {
          children: "another-feature"
        }), " and switches to it."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "23-git-merge",
      children: "2.3 git merge"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git merge"
      }), " command is used to merge changes from one branch into another. This is typically done to integrate changes from a feature branch into the main branch."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Switch to the main branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " checkout"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Switched"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'main'"
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
            children: "# Merge changes from 'new-feature' into 'main'"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " merge"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new-feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Updating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4..5d6e7f8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Fast-forward"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " newfile.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " changed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " insertion"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "+"
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
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 100644"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git checkout main"
        }), ": Switches to the ", createVNode(_components.code, {
          children: "main"
        }), " branch."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git merge new-feature"
        }), ": Merges the changes from the ", createVNode(_components.code, {
          children: "new-feature"
        }), " branch into the ", createVNode(_components.code, {
          children: "main"
        }), " branch. The output shows the details of the merge, including the commit range and the files affected."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "24-git-rebase",
      children: "2.4 git rebase"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git rebase"
      }), " command is used to reapply commits on top of another base tip. This command is useful for maintaining a linear project history."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Switch to the feature branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " checkout"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature-branch"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Switched"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'feature-branch'"
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
            children: "# Rebase onto the main branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rebase"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "First,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rewinding"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " head"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " replay"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " work"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " top"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " it..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Applying:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git checkout feature-branch"
        }), ": Switches to the ", createVNode(_components.code, {
          children: "feature-branch"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git rebase main"
        }), ": Reapplies the commits from ", createVNode(_components.code, {
          children: "feature-branch"
        }), " on top of the ", createVNode(_components.code, {
          children: "main"
        }), " branch. This process rewinds the commits in ", createVNode(_components.code, {
          children: "feature-branch"
        }), ", applies the changes from ", createVNode(_components.code, {
          children: "main"
        }), ", and then replays the commits from ", createVNode(_components.code, {
          children: "feature-branch"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "25-git-branch--d",
      children: "2.5 git branch -d"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git branch -d"
      }), " command is used to delete a branch. This command ensures that the branch being deleted has been fully merged before deletion."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Delete a fully merged branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature-branch"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Deleted"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature-branch"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (was "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1a2b3c4"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
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
            children: "# Force delete an unmerged branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -D"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " unmerged-branch"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Deleted"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " unmerged-branch"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (was "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5d6e7f8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git branch -d feature-branch"
        }), ": Deletes the ", createVNode(_components.code, {
          children: "feature-branch"
        }), " if it has been fully merged."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git branch -D unmerged-branch"
        }), ": Force deletes the ", createVNode(_components.code, {
          children: "unmerged-branch"
        }), " even if it hasn’t been merged."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By understanding and utilizing these branching and merging commands, you can effectively manage different versions of your code and collaborate with other developers. These commands provide the flexibility to work on multiple features simultaneously and integrate changes seamlessly."
    }), "\n", createVNode(_components.h2, {
      id: "section-3-remote-repositories",
      children: "Section 3: Remote Repositories"
    }), "\n", createVNode(_components.p, {
      children: "Remote repositories are versions of your project that are hosted on the internet or another network. They allow you to collaborate with other developers, share your code, and keep your work synchronized across multiple locations. This section covers essential commands for managing remote repositories."
    }), "\n", createVNode(_components.h3, {
      id: "31-git-remote",
      children: "3.1 git remote"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git remote"
      }), " command is used to manage the set of tracked repositories. It allows you to add, remove, and view remote repositories."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# List all remote repositories"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (fetch)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (push)"
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
            children: "# Add a new remote repository"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upstream"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/another-user/repository.git"
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
            children: "# Remove a remote repository"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upstream"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git remote -v"
        }), ": Lists all the remote repositories along with their URLs. The output shows the remote name (", createVNode(_components.code, {
          children: "origin"
        }), ") and the URL for fetching and pushing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git remote add upstream https://github.com/another-user/repository.git"
        }), ": Adds a new remote repository named ", createVNode(_components.code, {
          children: "upstream"
        }), " with the specified URL."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git remote remove upstream"
        }), ": Removes the remote repository named ", createVNode(_components.code, {
          children: "upstream"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "32-git-fetch",
      children: "3.2 git fetch"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git fetch"
      }), " command downloads objects and refs from another repository. It updates your local copy with the latest changes from the remote repository without merging them into your working directory."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " origin"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enumerating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Counting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (5/5), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Compressing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (3/3), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Total"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (delta "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), reused 5 ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "delta"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), pack-reused 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Unpacking"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (5/5), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "From"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/user/repository"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   1a2b3c4..5d6e7f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "       -> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "origin/main"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git fetch origin"
        }), ": Fetches the latest changes from the remote repository named ", createVNode(_components.code, {
          children: "origin"
        }), ". The output shows the objects that were downloaded and the branches that were updated."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "33-git-pull",
      children: "3.3 git pull"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git pull"
      }), " command fetches from and integrates with another repository or a local branch. It is a combination of ", createVNode(_components.code, {
        children: "git fetch"
      }), " and ", createVNode(_components.code, {
        children: "git merge"
      }), ", allowing you to update your local branch with the latest changes from the remote repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pull"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enumerating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Counting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (5/5), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Compressing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (3/3), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "remote:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Total"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (delta "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), reused 5 ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "delta"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), pack-reused 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Unpacking"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (5/5), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "From"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/user/repository"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "       -> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "FETCH_HEAD"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Updating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4..5d6e7f8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Fast-forward"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " newfile.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " changed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " insertion"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "+"
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
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 100644"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git pull origin main"
        }), ": Fetches the latest changes from the ", createVNode(_components.code, {
          children: "main"
        }), " branch of the remote repository named ", createVNode(_components.code, {
          children: "origin"
        }), " and merges them into the current branch. The output shows the objects that were downloaded and the details of the merge."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "34-git-push",
      children: "3.4 git push"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git push"
      }), " command updates remote refs along with associated objects. It is used to upload your local changes to a remote repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " push"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enumerating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Counting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (5/5), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Delta"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " compression"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " up"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " threads"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Compressing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (3/3), done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Writing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " objects:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 100%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (3/3), 300 bytes | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "300.00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " KiB/s,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Total"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (delta "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), reused 0 ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "delta"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
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
            children: "To"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/user/repository.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   1a2b3c4..5d6e7f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " -> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "main"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git push origin main"
        }), ": Pushes the changes from the local ", createVNode(_components.code, {
          children: "main"
        }), " branch to the ", createVNode(_components.code, {
          children: "main"
        }), " branch of the remote repository named ", createVNode(_components.code, {
          children: "origin"
        }), ". The output shows the objects that were uploaded and the branches that were updated."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "35-git-remote--v",
      children: "3.5 git remote -v"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git remote -v"
      }), " command shows the URLs of the remote repositories. It is useful for verifying the remote repositories that are configured for your project."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (fetch)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (push)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git remote -v"
        }), ": Lists all the remote repositories along with their URLs for fetching and pushing."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these commands for managing remote repositories, you can efficiently collaborate with other developers and keep your work synchronized across multiple locations. These commands allow you to fetch updates, push your changes, and manage remote repositories with ease."
    }), "\n", createVNode(_components.h2, {
      id: "section-4-viewing-and-exploring-history",
      children: "Section 4: Viewing and Exploring History"
    }), "\n", createVNode(_components.p, {
      children: "Understanding the history of your project is crucial for tracking changes, debugging issues, and collaborating with team members. Git provides several commands to view and explore the commit history, which can help you gain insights into the evolution of your codebase."
    }), "\n", createVNode(_components.h3, {
      id: "41-git-log",
      children: "4.1 git log"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git log"
      }), " command shows the commit logs, providing a detailed history of changes made to the repository. It displays the commit hash, author, date, and commit message."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " log"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (HEAD -> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "main,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " origin/main"
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
            children: "Author:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " John"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Doe"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "johndoe@example.co"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "m>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Date:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Mon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Oct"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 18"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 14:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2021"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0400"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Author:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jane"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Smith"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "janesmith@example.co"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "m>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Date:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Sun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Oct"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 17"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2021"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0400"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    Fix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bug"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git log"
        }), ": Displays the commit history in reverse chronological order. Each commit includes the commit hash, author, date, and message."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "42-git-diff",
      children: "4.2 git diff"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git diff"
      }), " command shows the differences between commits, the working directory, and the staging area. It highlights the changes made to files, making it easier to review modifications."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Show changes between working directory and staging area"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " diff"
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
            children: "# Show changes between two commits"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " diff"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git diff"
        }), ": Displays the changes between the working directory and the staging area."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git diff 1a2b3c4 5d6e7f8"
        }), ": Shows the differences between the commits with hashes ", createVNode(_components.code, {
          children: "1a2b3c4"
        }), " and ", createVNode(_components.code, {
          children: "5d6e7f8"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "43-git-show",
      children: "4.3 git show"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git show"
      }), " command displays various types of objects, including commits, trees, and blobs. It is commonly used to view the details of a specific commit."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " show"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "commit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (HEAD -> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "main,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " origin/main"
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
            children: "Author:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " John"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Doe"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "johndoe@example.co"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "m>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Date:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Mon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Oct"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 18"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 14:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2021"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0400"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
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
            children: " --git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a/newfile.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " b/newfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 100644"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 0000000..e69de29"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git show 5d6e7f8"
        }), ": Displays the details of the commit with hash ", createVNode(_components.code, {
          children: "5d6e7f8"
        }), ", including the commit message and the changes made to files."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "44-git-blame",
      children: "4.4 git blame"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git blame"
      }), " command shows what revision and author last modified each line of a file. This command is useful for identifying the origin of changes and understanding the history of specific lines in a file."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blame"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "5d6e7f8e"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (John "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Doe"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2021-10-18"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 14:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0400"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Line 1 of newfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git blame newfile.txt"
        }), ": Displays the commit hash, author, date, and content of each line in ", createVNode(_components.code, {
          children: "newfile.txt"
        }), ". This information helps track the origin of changes."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "45-git-shortlog",
      children: "4.5 git shortlog"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git shortlog"
      }), " command summarizes the ", createVNode(_components.code, {
        children: "git log"
      }), " output, grouping commits by author and providing a count of commits per author. It is useful for generating a summary of contributions."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " shortlog"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sn"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  John"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Doe"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "     5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Jane"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Smith"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git shortlog -sn"
        }), ": Displays a summary of commits, grouped by author, with the number of commits made by each author. The ", createVNode(_components.code, {
          children: "-s"
        }), " option shows the commit count, and the ", createVNode(_components.code, {
          children: "-n"
        }), " option sorts the output by the number of commits."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these commands for viewing and exploring history, you can gain valuable insights into your project’s development and make informed decisions based on the commit history. These commands help you track changes, understand the evolution of your codebase, and collaborate more effectively with your team."
    }), "\n", createVNode(_components.h2, {
      id: "section-5-undoing-changes",
      children: "Section 5: Undoing Changes"
    }), "\n", createVNode(_components.p, {
      children: "In the course of development, it’s common to make mistakes or need to revert changes. Git provides several commands to undo changes, whether you need to reset your working directory, revert commits, or clean up untracked files. This section covers essential commands for undoing changes in your repository."
    }), "\n", createVNode(_components.h3, {
      id: "51-git-reset",
      children: "5.1 git reset"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git reset"
      }), " command is used to reset the current HEAD to a specified state. It can modify the staging area and working directory to match the specified commit."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Soft reset: move HEAD to the specified commit, but leave the changes in the working directory and staging area"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reset"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --soft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " HEAD~1"
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
            children: "# Mixed reset: move HEAD to the specified commit and update the staging area, but leave the working directory unchanged"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reset"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --mixed"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " HEAD~1"
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
            children: "# Hard reset: move HEAD to the specified commit and update both the staging area and working directory"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reset"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --hard"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " HEAD~1"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git reset --soft HEAD~1"
        }), ": Moves HEAD to the previous commit (", createVNode(_components.code, {
          children: "HEAD~1"
        }), "), but keeps the changes in the working directory and staging area."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git reset --mixed HEAD~1"
        }), ": Moves HEAD to the previous commit and updates the staging area to match, but leaves the working directory unchanged."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git reset --hard HEAD~1"
        }), ": Moves HEAD to the previous commit and updates both the staging area and working directory to match, effectively discarding any changes."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "52-git-revert",
      children: "5.2 git revert"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git revert"
      }), " command creates a new commit that undoes the changes introduced by a previous commit. This is useful for safely undoing changes without altering the commit history."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " revert"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[main 9a8b7c6] Revert "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Add new feature\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " changed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deletion"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git revert 5d6e7f8"
        }), ": Creates a new commit that undoes the changes introduced by the commit with hash ", createVNode(_components.code, {
          children: "5d6e7f8"
        }), ". The output shows the details of the revert commit."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "53-git-clean",
      children: "5.3 git clean"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git clean"
      }), " command removes untracked files from the working directory. This is useful for cleaning up files that are not tracked by Git and not needed in the repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Show which files would be removed"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clean"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -n"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Would"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " untracked_file.txt"
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
            children: "# Remove untracked files"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clean"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
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
            children: " untracked_file.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git clean -n"
        }), ": Displays which untracked files would be removed without actually removing them."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git clean -f"
        }), ": Removes untracked files from the working directory."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "54-git-stash",
      children: "5.4 git stash"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git stash"
      }), " command temporarily saves changes in a dirty working directory without committing them. This is useful for quickly switching branches or pulling updates without losing your current work."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Stash changes"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " stash"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Saved"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " working"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " directory"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " index"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " WIP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
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
            children: "# List stashed changes"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "stash@"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "{0}"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " WIP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
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
            children: "# Apply stashed changes"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " stash"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apply"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git stash"
        }), ": Saves the current changes in the working directory and staging area to a new stash."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git stash list"
        }), ": Lists all stashed changes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git stash apply"
        }), ": Applies the most recent stash to the working directory."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "55-git-cherry-pick",
      children: "5.5 git cherry-pick"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git cherry-pick"
      }), " command applies the changes introduced by an existing commit to the current branch. This is useful for selectively applying specific commits."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cherry-pick"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[main 9a8b7c6] Add new feature"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " changed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " insertion"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "+"
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
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 100644"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git cherry-pick 5d6e7f8"
        }), ": Applies the changes introduced by the commit with hash ", createVNode(_components.code, {
          children: "5d6e7f8"
        }), " to the current branch. The output shows the details of the cherry-picked commit."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these commands for undoing changes, you can effectively manage and correct mistakes in your repository. These commands provide the flexibility to reset, revert, clean, stash, and cherry-pick changes, ensuring that your project remains in a stable and consistent state."
    }), "\n", createVNode(_components.h2, {
      id: "section-6-advanced-git-commands",
      children: "Section 6: Advanced Git Commands"
    }), "\n", createVNode(_components.p, {
      children: "Advanced Git commands provide powerful tools for more complex tasks such as debugging, managing submodules, and creating archives. Mastering these commands can significantly enhance your ability to manage large projects and troubleshoot issues efficiently."
    }), "\n", createVNode(_components.h3, {
      id: "61-git-bisect",
      children: "6.1 git bisect"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git bisect"
      }), " command uses a binary search algorithm to find the commit that introduced a bug. This command is invaluable for debugging and pinpointing the exact commit where things went wrong."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Start the bisect process"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bisect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
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
            children: "# Mark the current commit as bad"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bisect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bad"
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
            children: "# Mark an earlier commit as good"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bisect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " good"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
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
            children: "# Git will now check out a commit halfway between the good and bad commits"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Test the code and mark the commit as bad or good"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bisect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bad"
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
            children: "# Repeat the process until the offending commit is found"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git bisect start"
        }), ": Starts the bisect process."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git bisect bad"
        }), ": Marks the current commit as bad."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git bisect good 1a2b3c4"
        }), ": Marks the commit with hash ", createVNode(_components.code, {
          children: "1a2b3c4"
        }), " as good."]
      }), "\n", createVNode(_components.li, {
        children: "Git will then check out a commit halfway between the good and bad commits. You need to test the code and mark the commit as bad or good until the offending commit is found."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "62-git-tag",
      children: "6.2 git tag"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git tag"
      }), " command is used to create, list, delete, or verify a tag object signed with GPG. Tags are useful for marking specific points in the project’s history, such as releases."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Create a lightweight tag"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tag"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " v1.0"
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
            children: "# Create an annotated tag"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tag"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " v1.0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Version 1.0 release\""
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
            children: "# List all tags"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tag"
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
            children: "# Delete a tag"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tag"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " v1.0"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git tag v1.0"
        }), ": Creates a lightweight tag named ", createVNode(_components.code, {
          children: "v1.0"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git tag -a v1.0 -m \"Version 1.0 release\""
        }), ": Creates an annotated tag named ", createVNode(_components.code, {
          children: "v1.0"
        }), " with a message."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git tag"
        }), ": Lists all tags in the repository."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git tag -d v1.0"
        }), ": Deletes the tag named ", createVNode(_components.code, {
          children: "v1.0"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "63-git-submodule",
      children: "6.3 git submodule"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git submodule"
      }), " command is used to initialize, update, or inspect submodules. Submodules allow you to keep a Git repository as a subdirectory of another Git repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Add a submodule"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " submodule"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " path/to/submodule"
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
            children: "# Initialize submodules"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " submodule"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " init"
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
            children: "# Update submodules"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " submodule"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
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
            children: "# Remove a submodule"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " submodule"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deinit"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " path/to/submodule"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " .git/modules/path/to/submodule"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " path/to/submodule"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git submodule add https://github.com/user/repository.git path/to/submodule"
        }), ": Adds a submodule located at the specified URL to the specified path."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git submodule init"
        }), ": Initializes the submodules."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git submodule update"
        }), ": Updates the submodules to match the commit specified in the superproject."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git submodule deinit -f path/to/submodule"
        }), ": Deinitializes the submodule."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "rm -rf .git/modules/path/to/submodule"
        }), ": Removes the submodule’s directory."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git rm -f path/to/submodule"
        }), ": Removes the submodule from the repository."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "64-git-archive",
      children: "6.4 git archive"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git archive"
      }), " command is used to create an archive of files from a named tree. This can be useful for creating backups or distributing a specific version of the project."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Create a tar archive of the current branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " archive"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --format=tar"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --output=archive.tar"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " HEAD"
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
            children: "# Create a zip archive of a specific commit"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " archive"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --format=zip"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --output=archive.zip"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git archive --format=tar --output=archive.tar HEAD"
        }), ": Creates a tar archive of the current branch and saves it as ", createVNode(_components.code, {
          children: "archive.tar"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git archive --format=zip --output=archive.zip 1a2b3c4"
        }), ": Creates a zip archive of the commit with hash ", createVNode(_components.code, {
          children: "1a2b3c4"
        }), " and saves it as ", createVNode(_components.code, {
          children: "archive.zip"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "65-git-reflog",
      children: "6.5 git reflog"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git reflog"
      }), " command is used to manage the reference logs, which record when the tips of branches and other references were updated in the local repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Show the reflog for the current branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reflog"
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
            children: "# Show the reflog for a specific branch"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reflog"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " show"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
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
            children: "# Delete the reflog entries older than a specified time"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reflog"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " expire"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --expire=90.days.ago"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --all"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git reflog"
        }), ": Displays the reflog for the current branch."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git reflog show main"
        }), ": Displays the reflog for the ", createVNode(_components.code, {
          children: "main"
        }), " branch."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git reflog expire --expire=90.days.ago --all"
        }), ": Deletes the reflog entries older than 90 days for all references."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these advanced Git commands, you can handle more complex tasks and troubleshoot issues more effectively. These commands provide powerful tools for debugging, managing submodules, creating archives, and maintaining a clean and organized repository."
    }), "\n", createVNode(_components.h2, {
      id: "section-7-collaboration-and-contribution",
      children: "Section 7: Collaboration and Contribution"
    }), "\n", createVNode(_components.p, {
      children: "Collaboration and contribution are key aspects of using Git, especially in team environments. Git provides several commands that facilitate working with others, applying patches, and generating summaries of changes. This section covers essential commands for collaboration and contribution."
    }), "\n", createVNode(_components.h3, {
      id: "71-git-cherry",
      children: "7.1 git cherry"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git cherry"
      }), " command is used to find commits that have not yet been applied upstream. This is useful for identifying changes that need to be pushed or reviewed."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cherry"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5d6e7f8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Fix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bug"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git cherry -v"
        }), ": Lists commits that are in the current branch but not in the upstream branch. The ", createVNode(_components.code, {
          children: "+"
        }), " indicates commits that are unique to the current branch, while ", createVNode(_components.code, {
          children: "-"
        }), " indicates commits that are already in the upstream branch."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "72-git-apply",
      children: "7.2 git apply"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git apply"
      }), " command applies a patch to files and/or to the index. This is useful for applying changes that have been shared as patches."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Apply a patch file"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apply"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " patch.diff"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git apply patch.diff"
        }), ": Applies the changes from the patch file ", createVNode(_components.code, {
          children: "patch.diff"
        }), " to the working directory."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "73-git-format-patch",
      children: "7.3 git format-patch"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git format-patch"
      }), " command prepares patches for email submission. It generates patch files from commits, which can be shared and applied using ", createVNode(_components.code, {
        children: "git apply"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Generate patch files for the last 3 commits"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " format-patch"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "0001-Add-new-feature.patch"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "0002-Fix-bug-in-feature.patch"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "0003-Update-documentation.patch"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git format-patch -3"
        }), ": Creates patch files for the last 3 commits. Each patch file contains the changes from a single commit."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "74-git-send-email",
      children: "7.4 git send-email"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git send-email"
      }), " command sends a collection of patches as emails. This is useful for submitting patches to a mailing list or a project maintainer."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Send patch files via email"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " send-email"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ".patch"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git send-email *.patch"
        }), ": Sends all patch files in the current directory as emails. The command prompts for email configuration and recipient information."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "75-git-request-pull",
      children: "7.5 git request-pull"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "git request-pull"
      }), " command generates a summary of pending changes, which can be sent to a project maintainer to request a pull. This is useful for formally requesting that your changes be merged into the upstream repository."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example Usage:"
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
      "data-language": "bash",
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
            children: " git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " request-pull"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " origin/main"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "The"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " following"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " changes"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " since"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " commit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1a2b3c4:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  Fix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bug"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (2021-10-17 "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "10:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0400"
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
              color: "#61AFEF"
            },
            children: "are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " available"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " repository"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " at:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  https://github.com/user/repository.git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " you to fetch changes up to 5d6e7f8:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (2021-10-18 "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "14:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -0400"
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
              color: "#61AFEF"
            },
            children: "----------------------------------------------------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " feature"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "git request-pull origin/main https://github.com/user/repository.git main"
        }), ": Generates a summary of changes from the ", createVNode(_components.code, {
          children: "main"
        }), " branch in the local repository that are not in the ", createVNode(_components.code, {
          children: "origin/main"
        }), " branch. The summary includes a description of the changes and a link to the repository."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these commands for collaboration and contribution, you can effectively work with other developers, share your changes, and request that your contributions be reviewed and merged. These commands facilitate a smooth workflow for team projects and open-source contributions."
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

const url = "src/content/posts/git-commands.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/git-commands.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/git-commands.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
