import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { i as img1 } from './01createservice_BDqyFF-V.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const img2 = new Proxy({"src":"/_astro/choose_plausible_analytics.BMkXDGMr.jpeg","width":2626,"height":1204,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/choose_plausible_analytics.jpeg";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/plausible-configs.Cr0-UB2a.png","width":2610,"height":2096,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/plausible-configs.png";
							}
							
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/plausible-secrets.Cxi3rIoo.jpeg","width":2850,"height":1740,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/plausible-secrets.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-03-17T07:00:00.000Z",
  "title": "How To Install Plausible  With One Click",
  "description": "Learn how to install Plausible Analytics with 1 click in docker via Coolify on your own server.",
  "image": "../../assets/images/23/03/plausible-install.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["coolify", "tutorials"],
  "canonical": "https://www.bitdoze.com/install-plausible-analytics/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-deploy-a-vps-server",
    "text": "1. Deploy A VPS server"
  }, {
    "depth": 2,
    "slug": "2-installing-coolify",
    "text": "2. Installing Coolify"
  }, {
    "depth": 2,
    "slug": "-plausible-install-video",
    "text": "🎥 Plausible Install Video"
  }, {
    "depth": 2,
    "slug": "3-deploy-the-plausible-service-with-coolify",
    "text": "3. Deploy the Plausible service with Coolify"
  }, {
    "depth": 3,
    "slug": "31-point-domain-or-subdomain-to-vps",
    "text": "3.1 Point Domain or Subdomain to VPS"
  }, {
    "depth": 3,
    "slug": "32-create-a-service",
    "text": "3.2 Create a service"
  }, {
    "depth": 3,
    "slug": "33-configure-coolify-plausible-analytics",
    "text": "3.3 Configure Coolify Plausible Analytics"
  }, {
    "depth": 3,
    "slug": "34-add-extra-configs-in-secrets",
    "text": "3.4 Add Extra Configs in Secrets"
  }, {
    "depth": 3,
    "slug": "35-access-plausible-analytics",
    "text": "3.5 Access Plausible Analytics"
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
        href: "https://www.bitdoze.com/plausible-tool/",
        children: "Plausible Analytics"
      }), " can help you take control of your analytics and stop relying on Google Analytics. In this tutorial, we will see everything that needs to be done to deploy Plausible in Docker via Coolify on your own server. The process is easy to do and will help you to have your own analytics and not share the details with other providers like Google Analytics."]
    }), "\n", createVNode(_components.p, {
      children: ["If you don’t know, Coolify is a self-hosted Heroku or Netlify alternative that also allows you to deploy various Docker apps. For more details you can check out: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/coolify-install-heroku-alternative/",
        children: "Coolify Install A Free Heroku and Netlify Self-Hosted Alternative"
      }), " where we go into more detail."]
    }), "\n", createVNode(_components.p, {
      children: "Plausible is using a config file to enable some variables, you can do that in the Coolify interface in the secrets area, so in case you want to add an SMTP server or integrate it with Google Web Console if you want, we will take a look at that part when we reach the step for that."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "1-deploy-a-vps-server",
      children: "1. Deploy A VPS server"
    }), "\n", createVNode(_components.p, {
      children: ["To host Plausible in a Docker container you need a VPS server, there are a lot of services that can help you with this, the most known are ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/do",
        children: "DigitalOcean"
      }), ", ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/vultr",
        children: "Vultr"
      }), ", ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/hetzner",
        children: "Hetzner"
      }), ", I also wrote an article and made a video with the benchmarks here: ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/digitalocean-vs-vultr-vs-hetzner/",
        children: "DigitalOcean vs Vultr vs Hetzner"
      }), " you can check it out."]
    }), "\n", createVNode(_components.p, {
      children: "In this tutorial we are going to use Hetzner for this where we have the VPS created and we can ssh to it to have Coolify installed and then deploy Plausible Analitycs."
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.h2, {
      id: "2-installing-coolify",
      children: "2. Installing Coolify"
    }), "\n", createVNode(_components.p, {
      children: ["Coolify can be installed with a simple command, you can also check my tutorial for complete steps including the SSL certificate: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/coolify-install-heroku-alternative/",
        children: "Coolify Install"
      })]
    }), "\n", createVNode(_components.p, {
      children: "We will install Coolify on a Ubuntu 22.04 server. To do this, you just need to SSH to the VPS server and run the following command"
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
            children: "wget"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -q"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://get.coollabs.io/coolify/install.sh"
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
              color: "#ABB2BF"
            },
            children: "-O "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "install.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bash"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ./install.sh"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you are interested in how to monitor your CPU and have an automatic email sent when the load is too high, you should have a look at ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/monitor-cpu-usage-and-send-email-alerts-in-linux/",
        children: "Monitor CPU Usage and Send Email Alerts in Linux"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "-plausible-install-video",
      children: "🎥 Plausible Install Video"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/RNnuXCUhHF4",
      label: "How To Install Plausible  With One Click"
    }), "\n", createVNode(_components.h2, {
      id: "3-deploy-the-plausible-service-with-coolify",
      children: "3. Deploy the Plausible service with Coolify"
    }), "\n", createVNode(_components.h3, {
      id: "31-point-domain-or-subdomain-to-vps",
      children: "3.1 Point Domain or Subdomain to VPS"
    }), "\n", createVNode(_components.p, {
      children: "We need a domain or subdomain that we can use to access Plausible, in this tutorial we are going to use CloudFlare and point a subdomain to the VPS server where we have Coolify installed. We will not be using the CloudFlare proxy and will leave it disabled. All you need to do is add an A record and point it to the server IP."
    }), "\n", createVNode(_components.h3, {
      id: "32-create-a-service",
      children: "3.2 Create a service"
    }), "\n", createVNode(_components.p, {
      children: ["You need to go to Create New Resource and select ", createVNode(_components.strong, {
        children: "Service"
      }), ". From there select the ", createVNode(_components.strong, {
        children: "Plausible Analytics"
      }), " service as shown in the images below:"]
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "Coolify service create"
    }), "\n", createVNode($$Picture, {
      src: img2,
      alt: "Coolify choose Plausible Analytics"
    }), "\n", createVNode(_components.h3, {
      id: "33-configure-coolify-plausible-analytics",
      children: "3.3 Configure Coolify Plausible Analytics"
    }), "\n", createVNode(_components.p, {
      children: "The next thing on the list is to configure the Coolify service, in there you need to add the below:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Name"
        }), " - here you add the name of your deployment"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Version / Tag"
        }), " - you choose the Plausible Analytics version you want to install"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "URL (FQDN)"
        }), " - you ad the domain or sudomain that you want to use"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Admin Email Address"
        }), " - enter the admin email address"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Admin User Name"
        }), " - enter admin user name"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Authentication"
        }), " - should be enabled if you choose to have it internet facing and more secure."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Registration"
        }), " - you can allow them or not allow registration in function of needs. the secure way is to not allow them or invite only."]
      }), "\n"]
    }), "\n", createVNode($$Picture, {
      src: img3,
      alt: "Coolify Plausible Configs"
    }), "\n", createVNode(_components.p, {
      children: "After what needs to be done is to hit Save to save all the configs."
    }), "\n", createVNode(_components.h3, {
      id: "34-add-extra-configs-in-secrets",
      children: "3.4 Add Extra Configs in Secrets"
    }), "\n", createVNode(_components.p, {
      children: ["Plausible has various configs that can be activated, for the list check ", createVNode(_components.a, {
        href: "https://plausible.io/docs/self-hosting-configuration",
        children: "Plausible Config"
      }), ". For instance with the secrets you can change the passwords and add SMTP details if you want to link Plausible to an email server. Below are the configs for adding the smtp server with an image."]
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
              color: "#E06C75"
            },
            children: "SMTP_USER_PWD"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "smtp"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " pass"
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
              color: "#E06C75"
            },
            children: "SMTP_USER_NAME"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "smtp"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " user"
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
              color: "#E06C75"
            },
            children: "SMTP_HOST_PORT"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "smtp"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " port"
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
              color: "#E06C75"
            },
            children: "SMTP_HOST_ADDR"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "smtp"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " server"
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
              color: "#E06C75"
            },
            children: "MAILER_EMAIL"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " email"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode($$Picture, {
      src: img4,
      widths: [200, 400, 900],
      sizes: "(max-width: 900px) 100vw, 900px",
      alt: "Plausible Secrets"
    }), "\n", createVNode(_components.p, {
      children: "After you just need to hit Deploy and Coolify will start deploy the docker containers."
    }), "\n", createVNode(_components.h3, {
      id: "35-access-plausible-analytics",
      children: "3.5 Access Plausible Analytics"
    }), "\n", createVNode(_components.p, {
      children: "After deploy is finished you should go and access Plausible dashboard with the URL you have added in the configs. The first time you will be prompted to create a user and a password."
    }), "\n", createVNode(_components.p, {
      children: "After you create the account you can add your websites. The configs will be stored on the disks with docker volumes and in case you redeploy it you will not lose any data."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "This is how you can easily deploy Plausible with the help of Coolify, the config has everything that it needs and you can access it securely with an SSL certificate. In case you want to update it you can do it easily from Coolify interface."
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

const url = "src/content/posts/install-plausible-analytics.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-plausible-analytics.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-plausible-analytics.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
