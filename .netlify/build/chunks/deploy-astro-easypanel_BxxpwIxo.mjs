import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/easypanel-general.DFls8w2n.png","width":2180,"height":1980,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/easypanel-general.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/ep-domains.CppjPgtN.png","width":2132,"height":648,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/ep-domains.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-11-15T00:00:00.000Z",
  "title": "How to Deploy Astro on Your VPS with EasyPanel",
  "description": "Learn how to deploy Astro static website on your own VPS with EasyPanel",
  "image": "../../assets/images/23/11/deploy-astro-easypanel.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["easypanel", "astro"],
  "canonical": "https://www.bitdoze.com/deploy-astro-easypanel/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "deploy-astro-on-your-vps-with-easypanel",
    "text": "Deploy Astro on Your VPS with EasyPanel"
  }, {
    "depth": 3,
    "slug": "1-instal-easypanel",
    "text": "1. Instal EasyPanel"
  }, {
    "depth": 3,
    "slug": "2-create-a-github-repo",
    "text": "2. Create a GitHub Repo"
  }, {
    "depth": 3,
    "slug": "3-install-astro-and-make-the-configs",
    "text": "3. Install Astro and Make the Configs"
  }, {
    "depth": 4,
    "slug": "31-deploy-an-astro-blog",
    "text": "3.1 Deploy An Astro Blog"
  }, {
    "depth": 4,
    "slug": "32-configure-astro-static",
    "text": "3.2 Configure Astro Static"
  }, {
    "depth": 4,
    "slug": "33-push-to-github",
    "text": "3.3 Push to GitHub"
  }, {
    "depth": 3,
    "slug": "4-add-astro-to-easypanel",
    "text": "4. Add Astro to EasyPanel"
  }, {
    "depth": 4,
    "slug": "41-configure-astro-repo",
    "text": "4.1 Configure Astro Repo"
  }, {
    "depth": 4,
    "slug": "42-enable-auto-deploy",
    "text": "4.2 Enable Auto Deploy"
  }, {
    "depth": 4,
    "slug": "43-add-a-domain",
    "text": "4.3 Add A Domain"
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
    h4: "h4",
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
      children: "Astro is a web framework that lets you build fast and scalable websites with your favorite UI library. Astro can render your pages to static HTML for better performance, SEO, and accessibility. You can also use Astro to create dynamic web applications and APIs with any backend service. Astro supports multiple UI frameworks, such as React, Svelte, Vue, and more."
    }), "\n", createVNode(_components.p, {
      children: "You can mix and match them in the same project, or use Astro’s template syntax. Astro also has a rich ecosystem of plugins, themes, and integrations that make it easy to extend and customize your website. Whether you want to create a blog, a portfolio, a marketing site, or a web app, Astro can help you achieve your goals."
    }), "\n", createVNode(_components.p, {
      children: ["In this tutorial, we are going to see how you can deploy Astro on your own VPS with the help of ", createVNode(_components.a, {
        href: "https://easypanel.io/",
        children: "EasyPanel"
      }), ". I have created a detailed article and video of how you can install EasyPanel and what has to offer it can be found under: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/easypanel-modern-server-control-panel/",
        children: "Easypanel.io: A Modern Hosting Panel for Applications and Databases"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Other useful Astro articles you may want to check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/deploy-astro-on-vps/",
          children: "How To Deploy Static Website Astro.JS on VPS Servers"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/coolify-install-heroku-alternative/",
          children: "Coolify Install A Free Heroku and Netlify Self-Hosted Alternative"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/deploy-astrojs-cloudflare/",
          children: "How To Deploy An Astro.JS Blog On Cloudflare"
        })
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "deploy-astro-on-your-vps-with-easypanel",
      children: "Deploy Astro on Your VPS with EasyPanel"
    }), "\n", createVNode(_components.p, {
      children: "In this part, we are going to see all the steps we need to do to have an Astro static website deployed in EasyPanel and have it hosted on your server."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/l-yohC7xD38",
      label: "Deploy Astro on Your VPS with EasyPanel"
    }), "\n", createVNode(_components.h3, {
      id: "1-instal-easypanel",
      children: "1. Instal EasyPanel"
    }), "\n", createVNode(_components.p, {
      children: ["The first step is to have EasyPanel installed and used in a VPS, this can be done with a simple command you can check the full tutorial in: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/easypanel-modern-server-control-panel/",
        children: "Easypanel.io: A Modern Hosting Panel for Applications and Databases"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "2-create-a-github-repo",
      children: "2. Create a GitHub Repo"
    }), "\n", createVNode(_components.p, {
      children: ["To deploy Astro you need a GitHub account and you need to create a repo where you will add Astro with all the packages. You can follow the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/link-github-with-ssh-maco-linux/",
        children: "Link GitHub with A SSH Key to MacOS or Linux"
      }), " it has all the details you need to create the repo and link it to your laptop."]
    }), "\n", createVNode(_components.h3, {
      id: "3-install-astro-and-make-the-configs",
      children: "3. Install Astro and Make the Configs"
    }), "\n", createVNode(_components.p, {
      children: "Now the fun part is coming and we will start installing Astro. You can create a new installation or you can use a predefined theme, in this tutorial we are going to deploy it from scratch."
    }), "\n", createVNode(_components.h4, {
      id: "31-deploy-an-astro-blog",
      children: "3.1 Deploy An Astro Blog"
    }), "\n", createVNode(_components.p, {
      children: "First, you need to go into the repo you have created and be sure is empty, then you can run:"
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " astro@latest"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You just use the ”.” for the project name as already you are in the repo that will be used for GitGub. You can also initiate a new repo with Astro is up to you."
    }), "\n", createVNode(_components.h4, {
      id: "32-configure-astro-static",
      children: "3.2 Configure Astro Static"
    }), "\n", createVNode(_components.p, {
      children: ["To have this working on EasyPanel we will need to install a node.js package and make some configurations in the package.json file so EasyPanel knows how to work with Astro.\r\nFirst, install ", createVNode(_components.strong, {
        children: "serve"
      }), " package:"]
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " serve"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Serve will be needed in the start option so it tells to use /dist folder as: ", createVNode(_components.strong, {
        children: "“start”: “serve dist/”"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The package.json will look like this:"
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
            children: "  \"name\""
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
            children: "  \"type\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"module\""
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
            children: "  \"version\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"0.0.1\""
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
            children: "  \"scripts\""
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
              color: "#E06C75"
            },
            children: "    \"dev\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"astro dev\""
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
            children: "    \"start\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"serve dist/\""
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
            children: "    \"build\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"astro build\""
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
            children: "    \"preview\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"astro preview\""
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
            children: "    \"astro\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"astro\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"dependencies\""
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
              color: "#E06C75"
            },
            children: "    \"@astrojs/mdx\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"^1.1.5\""
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
            children: "    \"@astrojs/node\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"^6.0.3\""
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
            children: "    \"@astrojs/rss\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"^3.0.0\""
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
            children: "    \"@astrojs/sitemap\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"^3.0.3\""
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
            children: "    \"astro\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"^3.5.4\""
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
            children: "    \"serve\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"^14.2.1\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
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
    }), "\n", createVNode(_components.p, {
      children: "In the script section, you see the command and in dependencies you see the serve package."
    }), "\n", createVNode(_components.p, {
      children: "You can check that everything is working fine with :"
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dev"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " build"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The above commands will be used by EasyPanel and in case there are issues you will want to know before pushing everything to the repo."
    }), "\n", createVNode(_components.h4, {
      id: "33-push-to-github",
      children: "3.3 Push to GitHub"
    }), "\n", createVNode(_components.p, {
      children: "Now we finished with the configs and we will need to update the repo with the changes and Astro, just follow the below commands:"
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
            children: " \"added astro\""
          })]
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
            children: " push"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-add-astro-to-easypanel",
      children: "4. Add Astro to EasyPanel"
    }), "\n", createVNode(_components.h4, {
      id: "41-configure-astro-repo",
      children: "4.1 Configure Astro Repo"
    }), "\n", createVNode(_components.p, {
      children: ["Now what you need to do is to add your repo in EasyPanel, to do that you need to create a project then on ", createVNode(_components.strong, {
        children: "Service"
      }), " add an ", createVNode(_components.strong, {
        children: "App"
      }), " in the video you will see the details."]
    }), "\n", createVNode(_components.p, {
      children: ["In the ", createVNode(_components.strong, {
        children: "Project - General - Source"
      }), " you configure your GitHub repo with the owner and repo like in the picture:"]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "easypanel general"
    }), "\n", createVNode(_components.p, {
      children: ["After just hit ", createVNode(_components.strong, {
        children: "Save"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Then another window will appear called ", createVNode(_components.strong, {
        children: "Build**"
      }), " where you should choose the ", createVNode(_components.strong, {
        children: "Nixpacks"
      }), " and ", createVNode(_components.strong, {
        children: "Save"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After you hit ", createVNode(_components.strong, {
        children: "Deploy"
      }), " and under ", createVNode(_components.strong, {
        children: "Deployments"
      }), " you watch how the magic is happening and the Astro application starts to be deployed."]
    }), "\n", createVNode(_components.p, {
      children: ["The GitHub repo needs to be public, in case you have a private one you will need to add a GitHub token in ", createVNode(_components.strong, {
        children: "EasyPanel - Settings - GitHub"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "42-enable-auto-deploy",
      children: "4.2 Enable Auto Deploy"
    }), "\n", createVNode(_components.p, {
      children: "The auto update will make the image to be updated with the latest changes from the repo. So in case you modify a file or add a new one EasyPanel will pull the latest version. This can be done in 2 ways:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hitting Auto Deploy"
        }), " - in case you are using a token with EasyPanel you can just hit Auto Deply. This will add a webkook on the GitHub repo and EasyPanel will get notified when the update is happening."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Add The WebHook"
        }), " - you can manually fetch the Webhook from ", createVNode(_components.strong, {
          children: "General"
        }), " in the project and add it to your repo."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "43-add-a-domain",
      children: "4.3 Add A Domain"
    }), "\n", createVNode(_components.p, {
      children: ["Now you can check that everything is working by opening the domain that EasyPanel is assigning and add your own. You can go under ", createVNode(_components.strong, {
        children: "Domains"
      }), " and add your URL. You need first to point the domain to the server IP with an ", createVNode(_components.strong, {
        children: "A"
      }), " record."]
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "easypanel domain"
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Now you should have a fully functional static Astro website working on your VPS server with the help of EasyPanel. You can deploy as many you want including in the free option."
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

const url = "src/content/posts/deploy-astro-easypanel.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-astro-easypanel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-astro-easypanel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
