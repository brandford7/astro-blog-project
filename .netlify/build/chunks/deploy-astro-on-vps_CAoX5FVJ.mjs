import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const img1 = new Proxy({"src":"/_astro/cloudpanel-change-root.CpFY4jcH.jpeg","width":4872,"height":2404,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/cloudpanel-change-root.jpeg";
							}
							
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/cloudflare_dns.D46KUtL5.jpeg","width":2720,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/cloudflare_dns.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-02-03T00:00:00.000Z",
  "title": "How To Deploy Static Website Astro.JS on VPS Servers",
  "description": "Learn how to deploy a node.js static website Astro on a VPS server easily.",
  "image": "../../assets/images/23/deploy-astro-vps.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["cloudpanel", "astro", "tutorials"],
  "canonical": "https://www.bitdoze.com/deploy-astro-on-vps/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "video-with-astrojs-deployment-on-vps",
    "text": "Video With Astro.JS Deployment on VPS"
  }, {
    "depth": 2,
    "slug": "deploy-astrojs-on-your-vps-with-cloudpanel",
    "text": "Deploy Astro.JS on Your VPS With CloudPanel"
  }, {
    "depth": 3,
    "slug": "1-add-the-website-to-cloudpanel",
    "text": "1. Add The Website to CloudPanel"
  }, {
    "depth": 3,
    "slug": "2-point-the-website-dns-to-the-server-ip",
    "text": "2. Point the Website DNS to the server IP"
  }, {
    "depth": 3,
    "slug": "3-generate-an-ssl-certificate-for-the-website",
    "text": "3. Generate an SSL Certificate for the Website"
  }, {
    "depth": 3,
    "slug": "4-install-nodejs-on-your-website-user",
    "text": "4. Install Node.js on your website user"
  }, {
    "depth": 3,
    "slug": "5-remove-the-current-website-to-add-a-new-one-with-astro",
    "text": "5. Remove the current website to add a new one with Astro:"
  }, {
    "depth": 3,
    "slug": "6-add-an-astro-website",
    "text": "6. Add an Astro Website"
  }, {
    "depth": 3,
    "slug": "7-build-your-website",
    "text": "7. Build your website"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "There are a lot of free options where you can deploy Astro.js websites like CloudFlare Pages, Vercel, or Netlify all of them for free but with some limitations."
    }), "\n", createVNode(_components.p, {
      children: ["I have even created a tutorial of how you can ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/deploy-astrojs-cloudflare/",
        children: "deploy astro.js on CloudFlare Pages"
      }), " but you may want to use your own VPS server for it to not reach the limits of a free solution."]
    }), "\n", createVNode(_components.p, {
      children: ["In this tutorial we are going to see how you can deploy an astro.js blog or any website on your own VPS server, you can use any VPS provider you want, the most known are ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/do",
        children: "DigitalOcean"
      }), ", ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/vultr",
        children: "Vultr"
      }), ", ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/hetzner",
        children: "Hetzner"
      }), ", I have also written an article and made a video with the benchmarks here: ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/digitalocean-vs-vultr-vs-hetzner/",
        children: "DigitalOcean vs Vultr vs Hetzner"
      }), " you can check it out."]
    }), "\n", createVNode(_components.p, {
      children: ["To deploy Astro in this tutorial we will need to have the VPS server created and have CloudPanel installed, if you don’t know CloudPanel is a hosting panel that can help you host different websites from PHP ones to Node.JS ones to static ones. It is fast and can help you manage your VPS easily, you can check the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-cloudpanel-host-nodejs/",
        children: "Install CloudPanel and Host Node.js Apps"
      }), " to see exactly how you can install it."]
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.p, {
      children: ["If you are interested on how you can monitor your CPU and have an automatic email sent when load is to big you should check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/monitor-cpu-usage-and-send-email-alerts-in-linux/",
        children: "Monitor CPU Usage and Send Email Alerts in Linux"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "video-with-astrojs-deployment-on-vps",
      children: "Video With Astro.JS Deployment on VPS"
    }), "\n", createVNode(_components.p, {
      children: ["You can check this tutorial showing how you can deploy Astro on your VPS with a Heroko or Netlify alternative Coolify: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/coolify-install-heroku-alternative/",
        children: "Coolify Install A Free Heroku and Netlify Self-Hosted Alternative"
      }), " or ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/deploy-astro-easypanel/",
        children: "How to Deploy Astro on Your VPS with EasyPanel"
      })]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/kMtVBvO87pg",
      label: "How To Deploy Static Website Astro.JS on VPS Servers"
    }), "\n", createVNode(_components.h2, {
      id: "deploy-astrojs-on-your-vps-with-cloudpanel",
      children: "Deploy Astro.JS on Your VPS With CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: "Let’s get into this tutorial and see how we can have our website deployed on a VPS server."
    }), "\n", createVNode(_components.h3, {
      id: "1-add-the-website-to-cloudpanel",
      children: "1. Add The Website to CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: "The first step is to go and add the website to CloudPanel, you just go and hit the Add Site and choose the static site option, you need to add your website URL with the website user and password."
    }), "\n", createVNode(_components.p, {
      children: ["After you need to go and edit the root directory to point to ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "http://www.domain.com/dist",
          children: "www.domain.com/dist"
        })
      }), " the dist directory is used by Astro to deploy the static content when you build it. Check the below picture:"]
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "CloudPanel change root directory"
    }), "\n", createVNode(_components.h3, {
      id: "2-point-the-website-dns-to-the-server-ip",
      children: "2. Point the Website DNS to the server IP"
    }), "\n", createVNode(_components.p, {
      children: "The next thing to do is to go and point the A record of the domain to your server IP, I am doing this in CloudFlare and I have also activated the proxy for this domain."
    }), "\n", createVNode($$Picture, {
      src: img2,
      alt: "Clodflare DNS settings"
    }), "\n", createVNode(_components.h3, {
      id: "3-generate-an-ssl-certificate-for-the-website",
      children: "3. Generate an SSL Certificate for the Website"
    }), "\n", createVNode(_components.p, {
      children: "This is done from the CloudPanel SSL/TLS interface you just need to go there on the website and hit the new Let’s Encrypt Certificate."
    }), "\n", createVNode(_components.p, {
      children: "Now the website will have its certificate and can be accessed over HTTPS."
    }), "\n", createVNode(_components.h3, {
      id: "4-install-nodejs-on-your-website-user",
      children: "4. Install Node.js on your website user"
    }), "\n", createVNode(_components.p, {
      children: ["Astro is using node.js so we need to have node.js working on the user used for the website for this you just need to follow the below steps, also the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-nodejs-using-nvm-macos-ubuntu/",
        children: "Install Node.js using NVM on MacOS and Ubuntu"
      }), " can help you:"]
    }), "\n", createVNode(_components.p, {
      children: "Login with SSH to the VPS server and go under the user used for the website:"
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
            children: "ssh"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "ke"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "y> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "root@serverip"
          })]
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
            children: " su"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "website_use"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "r>"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Install NVM:"
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
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://raw.githubusercontent.com/creationix/nvm/master/install.sh"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/.bashrc"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Install Node.js:"
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
            children: "nvm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --lts"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "5-remove-the-current-website-to-add-a-new-one-with-astro",
      children: "5. Remove the current website to add a new one with Astro:"
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
              color: "#56B6C2"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " htdocs"
          })]
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
            children: " -rf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " www.domain.com"
          })]
        })]
      })
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.h3, {
      id: "6-add-an-astro-website",
      children: "6. Add an Astro Website"
    }), "\n", createVNode(_components.p, {
      children: ["Add the Astro website, if you have a GitHub repo you can use the ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/link-github-with-ssh-maco-linux/",
        children: "Link GitHub with A SSH Key"
      }), " for more details. In this article, I will add a clean Astro website\r\nBe sure to know Where would you like to create your new project? to add the exact folder with the domain name you deleted."]
    }), "\n", createVNode(_components.h3, {
      id: "7-build-your-website",
      children: "7. Build your website"
    }), "\n", createVNode(_components.p, {
      children: "After you make the modifications you can build your website:"
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
            children: " astro"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " build"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "This is the easiest way to host astro.js on your own VPS, this can be used on any static website you just need to add the proper destination folder for your static website."
    }), "\n", createVNode(_components.p, {
      children: "Using CloudFlare on the website will assure that will be fast and can be secured with additional security rules."
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.p, {
      children: "In case you are interested to have a web panel that can help you manage your applications and be used as a reverse proxy you can check the bellow course:"
    }), "\n", createVNode($$Button, {
      link: "https://webdoze.net/courses/cloudpanel-setup/",
      text: "CloudPanel Setup Course"
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

const url = "src/content/posts/deploy-astro-on-vps.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-astro-on-vps.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-astro-on-vps.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
