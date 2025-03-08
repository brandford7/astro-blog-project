import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const githubssh1 = new Proxy({"src":"/_astro/github_ssh_key.DgraSufP.jpeg","width":3346,"height":1726,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/2210/github_ssh_key.jpeg";
							}
							
							return target[name];
						}
					});

const githubssh2 = new Proxy({"src":"/_astro/github_add_ssh_key.D_Fx6vu5.jpeg","width":1776,"height":1236,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/2210/github_add_ssh_key.jpeg";
							}
							
							return target[name];
						}
					});

const githubssh3 = new Proxy({"src":"/_astro/create_repo.Clp_QYGw.jpeg","width":2281,"height":2012,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/2210/create_repo.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2022-10-07T00:00:00.000Z",
  "title": "Link GitHub with A SSH Key to MacOS or Linux",
  "description": "A tutorial that you can follow to create your first GitHub repo and link it via SSH to your laptop.",
  "image": "../../assets/images/2210/link-github-with-ssh.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["git", "tutorials"],
  "canonical": "https://www.bitdoze.com/link-github-with-ssh-maco-linux/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "link-github-with-a-ssh-key-to-macos-or-linux",
    "text": "Link GitHub with A SSH Key to MacOS or Linux"
  }, {
    "depth": 3,
    "slug": "generate-an-ssh-key-on-mac-or-linux",
    "text": "Generate an SSH Key on Mac or Linux"
  }, {
    "depth": 3,
    "slug": "get-the-public-key-and-add-it-to-github",
    "text": "Get The Public Key and add it to GitHub"
  }, {
    "depth": 3,
    "slug": "add-the-ssh-key-to-github",
    "text": "Add the SSH Key to GitHub"
  }, {
    "depth": 2,
    "slug": "youtube-video-with-details",
    "text": "Youtube Video With Details"
  }, {
    "depth": 2,
    "slug": "create-a-github-repo-and-push-from-your-laptop",
    "text": "Create A GitHub Repo and Push From Your Laptop"
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
      children: [createVNode(_components.a, {
        href: "https://github.com/",
        children: "GitHub"
      }), " is a public repository where you can store your git projects. Most of the services offer integrations with GitHub and you can use it to store your projects or to store your static websites like Gatsy or Astro."]
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will see how you can create a private repo on GitHub and connect it to your laptop with an SSH key."
    }), "\n", createVNode(_components.h2, {
      id: "link-github-with-a-ssh-key-to-macos-or-linux",
      children: "Link GitHub with A SSH Key to MacOS or Linux"
    }), "\n", createVNode(_components.p, {
      children: "The first thing should be to have a GitHub account, to do that you just register to them. After we can go and proceed with the SSH key creation and add it to GitHub."
    }), "\n", createVNode(_components.h3, {
      id: "generate-an-ssh-key-on-mac-or-linux",
      children: "Generate an SSH Key on Mac or Linux"
    }), "\n", createVNode(_components.p, {
      children: "In this step we are going to generate the Key the below command should work on all systems:"
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
            children: "ssh-keygen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -t"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rsa"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -b"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4096"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -C"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"your_email@example.com\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "When you will get the prompts just hit enter to place the key into the default ~/.ssh directory. I will not set up a passphrase."
    }), "\n", createVNode(_components.h3, {
      id: "get-the-public-key-and-add-it-to-github",
      children: "Get The Public Key and add it to GitHub"
    }), "\n", createVNode(_components.p, {
      children: "Now that the key is created we need to get the public key and add it to GitHub."
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
            children: "cat"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.ssh/id_rsa.pub"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "add-the-ssh-key-to-github",
      children: "Add the SSH Key to GitHub"
    }), "\n", createVNode(_components.p, {
      children: ["The output of the above command should be added to GitHub under ", createVNode(_components.strong, {
        children: "Profile - Settings - SSH and GPG Keys - New SSH key"
      })]
    }), "\n", createVNode($$Picture, {
      src: githubssh1,
      alt: "GitHub Profile add Key"
    }), "\n", createVNode(_components.p, {
      children: "There you set a Title and under Key, you add the output from above."
    }), "\n", createVNode($$Picture, {
      src: githubssh2,
      alt: "GitHub Profile add Key 2"
    }), "\n", createVNode(_components.p, {
      children: "Now your GitHub account should be linked to the laptop and you can"
    }), "\n", createVNode(_components.h2, {
      id: "youtube-video-with-details",
      children: "Youtube Video With Details"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/aGWACCA2Kcg",
      label: "Link GitHub with A SSH Key to MacOS or Linux"
    }), "\n", createVNode(_components.h2, {
      id: "create-a-github-repo-and-push-from-your-laptop",
      children: "Create A GitHub Repo and Push From Your Laptop"
    }), "\n", createVNode(_components.p, {
      children: ["Now what remains to do is to create our GitHub repo and push it to GitHub. From your profile on the left side hit the ", createVNode(_components.strong, {
        children: "New Repo"
      }), " and choose the below details:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Repository name"
        }), " - add the name you like your repo to have, I have used test-repo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Description"
        }), " - set a description for your repo, this is optional"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Private or Public"
        }), " - chose if the repo should be only for you."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["And that’s about it after you just hit the ", createVNode(_components.strong, {
        children: "Create repository"
      })]
    }), "\n", createVNode($$Picture, {
      src: githubssh3,
      alt: "GitHub create repo"
    }), "\n", createVNode(_components.p, {
      children: "After we should go into our laptop and create a directory where the repo should be and initiate it."
    }), "\n", createVNode(_components.p, {
      children: "Create the directory:"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " test-repo"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Go and initiate it, install git if you don,t have it:"
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
            children: "#mac install"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#Ubuntu install"
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
            children: " apt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#go into the folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " test-repo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#initiate the repo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " init"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Add a file to the repo”"
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"# test-repo for Bit Doze\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " >> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "README.md"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "After a file is added you need to add it to the repo with, the below command:"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ."
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Commit the change:"
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
            children: "git"
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
            children: " \"added read me file\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Set the branch to main:"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " main"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Link the folder with the GitHub repo:"
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
            children: "git"
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
            children: " origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git@github.com:bitdoze/test-repo.git"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Push the changes:"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " push"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "In case you want to fetch an existing repo you can do it with:"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git@github.com:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "rep"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "o>"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "After you can do your modifications and push it back after."
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

const url = "src/content/posts/link-github-with-ssh-maco-linux.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/link-github-with-ssh-maco-linux.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/link-github-with-ssh-maco-linux.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
