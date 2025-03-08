import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/use-this-template.DhJyznK-.jpeg","width":4717,"height":1964,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/2210/use-this-template.jpeg";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/deploy-cloudflare-project.BSGPnSkW.jpeg","width":2262,"height":2522,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/2210/deploy-cloudflare-project.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2022-10-18T00:00:00.000Z",
  "title": "How To Deploy An Astro.JS Blog On Cloudflare",
  "description": "Deploy an Astro.JS blog or website to CloudFlare Pages for free.",
  "image": "../../assets/images/2210/deploy-astro-cloudflare-blog.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["astro", "tutorials"],
  "canonical": "https://www.bitdoze.com/deploy-astrojs-cloudflare/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-deploy-an-astrojs-blog-on-cloudflare",
    "text": "How To Deploy An Astro.Js Blog On Cloudflare"
  }, {
    "depth": 3,
    "slug": "1-setup-nodejs-and-github",
    "text": "1. Setup Node.js and Github"
  }, {
    "depth": 3,
    "slug": "2-fetch-the-astrowind-theme-or-bit-doze-simpified-theme",
    "text": "2. Fetch the AstroWind theme or Bit Doze simpified theme"
  }, {
    "depth": 2,
    "slug": "video-with-astrojs-deploy",
    "text": "Video With Astro.js Deploy"
  }, {
    "depth": 3,
    "slug": "3-modify-the-theme-files",
    "text": "3. Modify the theme files"
  }, {
    "depth": 4,
    "slug": "31-modify-url-with-title-and-description",
    "text": "3.1 Modify URL with Title and Description"
  }, {
    "depth": 4,
    "slug": "32-modify-header-links",
    "text": "3.2 Modify Header Links"
  }, {
    "depth": 4,
    "slug": "33-modify-the-footer-links",
    "text": "3.3 Modify the footer links"
  }, {
    "depth": 4,
    "slug": "34-modify-the-logo",
    "text": "3.4 Modify the Logo"
  }, {
    "depth": 4,
    "slug": "35-modify-the-hero-with-your-description-and-social-links",
    "text": "3.5 Modify the Hero with your description and social links"
  }, {
    "depth": 4,
    "slug": "35-modify-the-main-colours",
    "text": "3.5 Modify the main colours"
  }, {
    "depth": 4,
    "slug": "36-cleanup-assets-folder-and-data-folder",
    "text": "3.6 Cleanup Assets folder and data folder"
  }, {
    "depth": 4,
    "slug": "37-add-you-articles-to-the-first-page-blog-roll",
    "text": "3.7 Add You Articles to the first page Blog Roll"
  }, {
    "depth": 3,
    "slug": "4-preview-the-changes-and-update-the-gitlab-project-with-the-latest-changes",
    "text": "4. Preview the changes and update the GitLab project with the latest changes"
  }, {
    "depth": 3,
    "slug": "5-host-the-project-in-cloudflare",
    "text": "5. Host the project in CloudFlare"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
      children: ["I am a WordPress user for years and lately, I have wanted to try something new and see how different it is. I have another website ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/",
        children: "WP Doze"
      }), " where I write about WordPress things but wanted to try something different.\r\nAfter searching online I found ", createVNode(_components.a, {
        href: "https://www.gatsbyjs.com/",
        children: "Gatsby"
      }), " a static website generator that can help you have a blog or website fast, did a lot of ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/gatsby-js-online-courses/",
        children: "Gatsby courses"
      }), " to find out what is about and eventually came across ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Astro is not around for a long time but it is here to stay, I like it as it is fast and it is easy to set it up. Same as with Gatsby in the beginning I have searched online for a lot of ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/best-astrojs-online-courses/",
        children: "Astro.js Trainings"
      }), " to see what is about and modify some aspects myself if I need it."]
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will see how you can deploy your Astro website on Cloudflare pages and have a free blog or website in the function of your needs."
    }), "\n", createVNode(_components.p, {
      children: ["I will use the ", createVNode(_components.a, {
        href: "https://github.com/bitdoze/bitdoze.com",
        children: "GitHub Bit Doze blog theme"
      }), " for the deployment and guide you through what you need to change to host your blog. The Theme is built on ", createVNode(_components.a, {
        href: "https://github.com/onwidget/astrowind",
        children: "AstroWind theme"
      }), " and you can install either as it’s the same and you should change the same thing just mine has only the blog things active."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-deploy-an-astrojs-blog-on-cloudflare",
      children: "How To Deploy An Astro.Js Blog On Cloudflare"
    }), "\n", createVNode(_components.p, {
      children: ["You can check this tutorial showing how you can deploy Astro on your VPS with a Heroko or Netlify alternative Coolify: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/coolify-install-heroku-alternative/",
        children: "Coolify Install A Free Heroku and Netlify Self-Hosted Alternative"
      }), " or ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/deploy-astro-easypanel/",
        children: "How to Deploy Astro on Your VPS with EasyPanel"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "1-setup-nodejs-and-github",
      children: "1. Setup Node.js and Github"
    }), "\n", createVNode(_components.p, {
      children: "Cloudflare Pages are using GitHub to fetch the details and node.js is needed so you can view the project before deploying it on Cloudflare to be sure is working to prepare your laptop just follow the below 2 tutorials to get you going:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/install-nodejs-using-nvm-macos-ubuntu/",
          children: "How to Install Node.js using NVM on MacOS and Ubuntu"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/link-github-with-ssh-maco-linux/",
          children: "Link GitHub with A SSH Key to MacOS or Linux"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-fetch-the-astrowind-theme-or-bit-doze-simpified-theme",
      children: ["2. Fetch the ", createVNode(_components.a, {
        href: "https://github.com/onwidget/astrowind",
        children: "AstroWind theme"
      }), " or ", createVNode(_components.a, {
        href: "https://github.com/bitdoze/bitdoze.com",
        children: "Bit Doze simpified theme"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["To do this you need to open the GitHub project and hit ", createVNode(_components.strong, {
        children: "Use this template"
      }), " button. Be sure you are logged in to have this enabled."]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "GitHub Use Template"
    }), "\n", createVNode(_components.p, {
      children: "After you just need to go and clone the project on your laptop with:"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "path"
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
            children: " repo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " hav"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "e>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#Example:"
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
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " git@github.com:bitdoze/bitdoze.com.git"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Then you will need to go and install all the packages and update them if you want. To do That you should do:"
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
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
            children: " update"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "video-with-astrojs-deploy",
      children: "Video With Astro.js Deploy"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/T7PY55WudZ4",
      label: "How To Deploy An Astro.JS Blog On Cloudflare"
    }), "\n", " ", "\n", createVNode(_components.h3, {
      id: "3-modify-the-theme-files",
      children: "3. Modify the theme files"
    }), "\n", createVNode(_components.h4, {
      id: "31-modify-url-with-title-and-description",
      children: "3.1 Modify URL with Title and Description"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://github.com/onwidget/astrowind",
        children: "AstroWind theme"
      }), " or ", createVNode(_components.a, {
        href: "https://github.com/bitdoze/bitdoze.com",
        children: "Bit Doze simplified theme"
      }), " has a config file that you need to modify it and change the details for your website. The location is under ", createVNode(_components.em, {
        children: "src/config.mjs"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Here replace the:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "name - with your website name"
      }), "\n", createVNode(_components.li, {
        children: "origin - with the URL for your website"
      }), "\n", createVNode(_components.li, {
        children: "basePathname - add something in case this is using a subdirectory"
      }), "\n", createVNode(_components.li, {
        children: "title - will be used in the main URL"
      }), "\n", createVNode(_components.li, {
        children: "description - website description"
      }), "\n", createVNode(_components.li, {
        children: "googleAnalyticsId - in case you want analytics added to the website"
      }), "\n", createVNode(_components.li, {
        children: "googleSiteVerificationId- for Google Web Central ( I recommend the use of DNS verification instead)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Other changes are for the url, category, tags. You can let them like this if you want.\r\nBelow is the file used for bitdoze.com:"
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " SITE"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Bit Doze\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  origin"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://www.bitdoze.com\""
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
            children: "  basePathname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Bit Doze Website\""
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
            children: "  description"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    \"An Website about Linux, blogging, CMS and other internet news..\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  googleAnalyticsId"
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// or \"G-XXXXXXXXXX\","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  googleSiteVerificationId"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"jyQEUqY6oYZKY6ZhkHatU7g4vVBBSb7z3Zw5bA\""
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
              color: "#ABB2BF"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " BLOG"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  disabled"
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
              color: "#E06C75"
            },
            children: "  postsPerPage"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "9"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  blog"
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
            children: "    disabled"
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
              color: "#E06C75"
            },
            children: "    pathname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"blog\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// blog main path, you can change this to \"articles\" (/articles)"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  post"
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
            children: "    disabled"
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
              color: "#E06C75"
            },
            children: "    pathname"
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// empty for /some-post, value for /pathname/some-post"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  category"
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
            children: "    disabled"
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
              color: "#E06C75"
            },
            children: "    pathname"
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// set empty to change from /category/some-category to /some-category"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  tag"
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
            children: "    disabled"
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
              color: "#E06C75"
            },
            children: "    pathname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"tag\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// set empty to change from /tag/some-tag to /some-tag"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "32-modify-header-links",
      children: "3.2 Modify Header Links"
    }), "\n", createVNode(_components.p, {
      children: ["The themes is using by default my blog categories so you need to add the categories you want and pages in the menu. To alter them you just need to open the file under ", createVNode(_components.em, {
        children: "src/components/widgets/Header.astro"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["In here just add or delete the ", createVNode(_components.em, {
        children: "li"
      }), " by modifying the ", createVNode(_components.em, {
        children: "href"
      }), " with the path you have, eg:"]
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/cms/\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    >CMS</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "To add a new thing just add a new li and change the url and name."
    }), "\n", createVNode(_components.h4, {
      id: "33-modify-the-footer-links",
      children: "3.3 Modify the footer links"
    }), "\n", createVNode(_components.p, {
      children: ["In the footer I have some links to my twitter and GitHub profile, you should change them or delete them as per your needs. This can be done from ", createVNode(_components.em, {
        children: "src/components/widgets/Footer.astro"
      })]
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    aria-label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Twitter\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://twitter.com/bitdozecom\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "Icon"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"tabler:brand-twitter\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"w-5 h-5\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "34-modify-the-logo",
      children: "3.4 Modify the Logo"
    }), "\n", createVNode(_components.p, {
      children: ["Logo is a text one, created from a gradient colour of primary and secondary, to modify it you just need to go under ", createVNode(_components.em, {
        children: "src/components/atoms/Logo.astro"
      }), " and modify the text:"]
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"bg-clip-text font-bold text-4xl text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 sm:whitespace-nowrap\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  Bit Doze</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "35-modify-the-hero-with-your-description-and-social-links",
      children: "3.5 Modify the Hero with your description and social links"
    }), "\n", createVNode(_components.p, {
      children: ["In the front page I have Hero with the welcome and social links, to modify the text icons and links you should alter the ", createVNode(_components.em, {
        children: "src/components/widgets/Hero.astro"
      }), " In here you have the h1 and div with text and ul with the social icons. This is using Astra Icon so you can add anything you want."]
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
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "h1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4 font-heading\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  Welcome to"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 sm:whitespace-nowrap\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    >Bit Doze</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "span"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"max-w-3xl mx-auto\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"text-xl text-gray-600 mb-8 dark:text-slate-400\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    Join the community to find out more about, VPS, blogging, CMS."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"flex justify-center items-center mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      aria-label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Twitter\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://twitter.com/bitdoze\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "Icon"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"tabler:brand-twitter\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"w-20 h-20\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "35-modify-the-main-colours",
      children: "3.5 Modify the main colours"
    }), "\n", createVNode(_components.p, {
      children: ["The theme is coming with the main colour that is used around the components to change the color you can take a look on ", createVNode(_components.a, {
        href: "https://tailwindcss.com/docs/customizing-colors",
        children: "tailwind colors"
      }), " and modify the ", createVNode(_components.em, {
        children: "tailwind.config.cjs"
      }), " under colors primary and secondary"]
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "colors"
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
            children: "\t\t\t\tprimary"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "colors"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "blue"
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
            children: "\t\t\t\tsecondary"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "colors"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "indigo"
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
              color: "#ABB2BF"
            },
            children: "\t\t\t},"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "36-cleanup-assets-folder-and-data-folder",
      children: "3.6 Cleanup Assets folder and data folder"
    }), "\n", createVNode(_components.p, {
      children: ["Currently, the theme has my mdx posts and images, you may want to clean up the ", createVNode(_components.em, {
        children: "src/assets/images/"
      }), " and ", createVNode(_components.em, {
        children: "data/blog/"
      }), " to add your md files with articles and things."]
    }), "\n", createVNode(_components.h4, {
      id: "37-add-you-articles-to-the-first-page-blog-roll",
      children: "3.7 Add You Articles to the first page Blog Roll"
    }), "\n", createVNode(_components.p, {
      children: ["After you added your own articles with picture to modify the first page articles you need to go under ", createVNode(_components.em, {
        children: "src/components/blog/HighlightedPosts.astro"
      }), " and add your articles. Just replace the below with your own:"]
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " ids"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  \"deploy-astrojs-cloudflare\""
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
            children: "  \"best-astrojs-online-courses\""
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
            children: "  \"link-github-with-ssh-maco-linux\""
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
            children: "  \"install-nodejs-using-nvm-macos-ubuntu\""
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
            children: "  \"gatsby-js-online-courses\""
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
            children: "  \"embed-youtube-videos-to-gatsby\""
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
              color: "#ABB2BF"
            },
            children: "];"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-preview-the-changes-and-update-the-gitlab-project-with-the-latest-changes",
      children: "4. Preview the changes and update the GitLab project with the latest changes"
    }), "\n", createVNode(_components.p, {
      children: "After we confirm the project and have added our article we can see if everything is OK and we can push the project to GitLab to host it in Cloudflare Pages."
    }), "\n", createVNode(_components.p, {
      children: "To preview the changes just run:"
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Open the localhost:3000 or the link specified to see if you have everything in order. In case everything looks good you should proceed and push the project to GitLab:"
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
            children: " \"configured my website\""
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
      id: "5-host-the-project-in-cloudflare",
      children: "5. Host the project in CloudFlare"
    }), "\n", createVNode(_components.p, {
      children: ["Cloudflare can be used to host Astro, they have also this documentation ", createVNode(_components.a, {
        href: "https://developers.cloudflare.com/pages/framework-guides/astro/",
        children: "Deploy Astro Sites"
      })]
    }), "\n", createVNode(_components.p, {
      children: "With the free account, you have 500 monthly builds and you benefit from their CDN so the website is very fast. These 500 builds are more than enough to host a blog or have a few. Every time you push an article or a change to GitHub Cloudflare will pick the latest change and will count it as a build."
    }), "\n", createVNode(_components.p, {
      children: "You need to go under Pages and add create a project. There you connect it to your git repo and begin the setup."
    }), "\n", createVNode(_components.p, {
      children: "You choose:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Production branch: main"
      }), "\n", createVNode(_components.li, {
        children: "Build command: npm run build"
      }), "\n", createVNode(_components.li, {
        children: "Build directory: dist"
      }), "\n", createVNode(_components.li, {
        children: "Environment Variables NODE_VERSION: 16"
      }), "\n"]
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "Cloudflare Astro Deploy"
    }), "\n", createVNode(_components.p, {
      children: "Then you hit save and deploy and that is all. When you want to add an article you just need to push the change and Cloudflare will do the rest."
    }), "\n", createVNode(_components.p, {
      children: "Next, you can check the below articles about Astro:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/responsive-youtube-astrojs/",
          children: "Add Responsive YouTube Videos to Astro.JS MDX"
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

const url = "src/content/posts/deploy-astrojs-cloudflare.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-astrojs-cloudflare.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-astrojs-cloudflare.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
