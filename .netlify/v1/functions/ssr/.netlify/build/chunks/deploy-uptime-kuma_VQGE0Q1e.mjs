import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { i as img1 } from './01createservice_BDqyFF-V.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const img2 = new Proxy({"src":"/_astro/02chooseuptimekuma.hDWC8-mW.png","width":2684,"height":1568,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/02chooseuptimekuma.png";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/03uptimekumaconfigs.C-40tr9v.jpeg","width":2756,"height":1156,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/03uptimekumaconfigs.jpeg";
							}
							
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/04accessuptimekuma.Bkq_rydH.png","width":4296,"height":1540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/04accessuptimekuma.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-03-16T00:00:00.000Z",
  "title": "How To Deploy Uptime Kuma With One Click",
  "description": "Learn how to deploy Uptime Kuma with 1 click in docker via Coolify.",
  "image": "../../assets/images/23/03/Uptime_Kuma_Install_Coolify.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["coolify", "tutorials"],
  "canonical": "https://www.bitdoze.com/deploy-uptime-kuma/"
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
    "slug": "-uptime-kuma-video-with-deployment",
    "text": "🎥 Uptime Kuma Video with Deployment"
  }, {
    "depth": 2,
    "slug": "3-deploy-the-uptime-kuma-service-with-coolify",
    "text": "3. Deploy the Uptime Kuma service with Coolify"
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
    "slug": "33-configure-coolify-uptime-kuma",
    "text": "3.3 Configure Coolify Uptime Kuma"
  }, {
    "depth": 3,
    "slug": "34-access-uptime-kuma",
    "text": "3.4 Access Uptime Kuma"
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
        href: "https://www.bitdoze.com/uptime-kuma-tool/",
        children: "Uptime Kuma"
      }), " is an open source monitoring tool that you can install on your VPS via Docker. Uptime Kuma will help you monitor your website and send alerts when it is down. In this tutorial, we will see how we can install it via Coolify with just 1 click."]
    }), "\n", createVNode(_components.p, {
      children: ["If you don’t know, Coolify is a self-hosted Heroku or Netlify alternative that also allows you to deploy various Docker apps. For more details you can check out: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/coolify-install-heroku-alternative/",
        children: "Coolify Install A Free Heroku and Netlify Self-Hosted Alternative"
      }), " where we go into more detail."]
    }), "\n", createVNode(_components.h2, {
      id: "1-deploy-a-vps-server",
      children: "1. Deploy A VPS server"
    }), "\n", createVNode(_components.p, {
      children: ["To host Uptime Kume in a Docker container you need a VPS server, there are a lot of services that can help you with this, the most known are ", createVNode(_components.a, {
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
      children: "In this tutorial, we are going to use Hetzner for this where we have the VPS created and we can ssh to it to have Coolify installed and then deploy Uptime Kuma."
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
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["If you are interested in how to monitor your CPU and have an automatic email sent when the load is too high, you should have a look at ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/monitor-cpu-usage-and-send-email-alerts-in-linux/",
        children: "Monitor CPU Usage and Send Email Alerts in Linux"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "-uptime-kuma-video-with-deployment",
      children: "🎥 Uptime Kuma Video with Deployment"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/GYbqyhs4suk",
      label: "How To Deploy Uptime Kuma With One Click"
    }), "\n", " ", "\n", createVNode(_components.h2, {
      id: "3-deploy-the-uptime-kuma-service-with-coolify",
      children: "3. Deploy the Uptime Kuma service with Coolify"
    }), "\n", createVNode(_components.h3, {
      id: "31-point-domain-or-subdomain-to-vps",
      children: "3.1 Point Domain or Subdomain to VPS"
    }), "\n", createVNode(_components.p, {
      children: "We need a domain or subdomain that we can use to access Uptime Kuma, in this tutorial we are going to use CloudFlare and point a subdomain to the VPS server where we have Coolify installed. We will not be using the CloudFlare proxy and will leave it disabled. All you need to do is add an A record and point it to the server IP."
    }), "\n", createVNode(_components.h3, {
      id: "32-create-a-service",
      children: "3.2 Create a service"
    }), "\n", createVNode(_components.p, {
      children: ["You need to go to Create New Resource and select ", createVNode(_components.strong, {
        children: "Service"
      }), ". From there select the ", createVNode(_components.strong, {
        children: "UptimeKuma"
      }), " service as shown in the images below:"]
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "Coolify service create"
    }), "\n", createVNode($$Picture, {
      src: img2,
      alt: "Coolify choose UptimeKuma"
    }), "\n", createVNode(_components.h3, {
      id: "33-configure-coolify-uptime-kuma",
      children: "3.3 Configure Coolify Uptime Kuma"
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
        }), " - you choose the Uptime Kuma version you want to install"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "URL (FQDN)"
        }), " - you add the domain or sudomain that you want to use"]
      }), "\n"]
    }), "\n", createVNode($$Picture, {
      src: img3,
      alt: "Coolify UptimeKuma Configs"
    }), "\n", createVNode(_components.p, {
      children: "After what needs to be done is to hit Save and Deploy button."
    }), "\n", createVNode(_components.h3, {
      id: "34-access-uptime-kuma",
      children: "3.4 Access Uptime Kuma"
    }), "\n", createVNode(_components.p, {
      children: "After deploy is finished you should go and access Uptime Kuma dashboard with the URL you have added in the configs. The first time you will be prompted to create a user and a password."
    }), "\n", createVNode($$Picture, {
      src: img4,
      alt: " UptimeKuma Access"
    }), "\n", createVNode(_components.p, {
      children: "After you create the account you can add your website that needs to be monitored and configure the notifications. The configs will be stored on the disks with docker volums and in case you redeploy it you will not lose any data."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "This is how you can easely deploy Uptime Kuma with the help off Coolify, the config has everything that it needs and you can access it securely with an SSL certificate."
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

const url = "src/content/posts/deploy-uptime-kuma.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-uptime-kuma.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/deploy-uptime-kuma.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
