import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/keila-project.BE5RLcDl.png","width":3340,"height":1484,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/keila-project.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/creae-keila.D-Z7xPJe.png","width":2038,"height":1772,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/creae-keila.png";
							}
							
							return target[name];
						}
					});

const imag3 = new Proxy({"src":"/_astro/keila-interface.BJtypOys.png","width":3238,"height":1872,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/keila-interface.png";
							}
							
							return target[name];
						}
					});

const imag4 = new Proxy({"src":"/_astro/keila-stats.BCx56RLL.png","width":3334,"height":1856,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/keila-stats.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-11-28T00:00:00.000Z",
  "title": "How to Launch Your Own Newsletter Platform with Keila and Docker",
  "description": "Deploy Keila self-hosted newsletter on your server with Docker and EasyPanel. ",
  "image": "../../assets/images/23/11/keila-setup.jpeg",
  "categories": ["tools"],
  "authors": ["Dragos"],
  "tags": ["easypanel", "email"],
  "canonical": "https://www.bitdoze.com/keila-setup/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-install-keila",
    "text": "How to Install Keila"
  }, {
    "depth": 3,
    "slug": "1deploy-a-hetzner-vps",
    "text": "1.Deploy a Hetzner VPS"
  }, {
    "depth": 3,
    "slug": "2-install-easypanelio",
    "text": "2. Install Easypanel.io"
  }, {
    "depth": 3,
    "slug": "3-create-an-easypanel-project",
    "text": "3. Create an Easypanel Project"
  }, {
    "depth": 3,
    "slug": "4-create-keila-in-eaasypanel",
    "text": "4. Create Keila in EaasyPanel"
  }, {
    "depth": 3,
    "slug": "5-add-your-domain-to-the-installation",
    "text": "5. Add your domain to the installation"
  }, {
    "depth": 3,
    "slug": "6-configure-keila",
    "text": "6. Configure Keila"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.keila.io/",
        children: "Keila"
      }), " is an open source email newsletter tool that allows you to create and send engaging campaigns to your contacts."]
    }), "\n", createVNode(_components.p, {
      children: "Some of the features of Keila are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Easy import of contacts: You can upload a CSV file with your existing contacts and start sending newsletters right away."
      }), "\n", createVNode(_components.li, {
        children: "Custom data and tags: You can add any information you want to your contacts and use it to filter them or personalize your campaigns."
      }), "\n", createVNode(_components.li, {
        children: "Smart segments: You can create subsets of your contacts based on criteria you define with a visual editor or a query language."
      }), "\n", createVNode(_components.li, {
        children: "Privacy and data ownership: You can host Keila on your servers and keep full control of your data. Keila also respects the privacy of your contacts and gives you useful statistics without tracking them."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Keila can be deployed easily to your server with the help of Docker, you will need to use an SMTP to send the campaigns, if you don’t have a SMTP service that you are using you can check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/mail-baby-review/",
        children: "Mail.Baby Review"
      }), " a service that can help you send emails on a budget."]
    }), "\n", createVNode(_components.p, {
      children: ["Keila can help you create forms to collect emails but does not have a double opt-in option like ", createVNode(_components.a, {
        href: "https://listmonk.app/",
        children: "ListMonk"
      }), " yet, this is under work."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-install-keila",
      children: "How to Install Keila"
    }), "\n", createVNode(_components.p, {
      children: "In this article, we are going to see everything that needs to be done to set Keila and start sending newsletters, we are going to use EasyPanel for this as it offers easy control and setup."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/lpvAGQwO0RA",
      label: "Keila Setup"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "1deploy-a-hetzner-vps",
      children: "1.Deploy a Hetzner VPS"
    }), "\n", createVNode(_components.p, {
      children: ["The first part is to have a server ready where we can deploy Easypanel, my preferred choice is Easypanel. The recommendation for Easypanel is to have at least 2 CPUs and 2 GB of memory and you can use an Ubuntu installation. In the video, we go into detail about how you can do that on Hetzner. You can check this ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/hetzner-cloud-review/",
        children: "Hetzner Review"
      }), " for more details if you are not aware of Hetzner and what it can do."]
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.h3, {
      id: "2-install-easypanelio",
      children: "2. Install Easypanel.io"
    }), "\n", createVNode(_components.p, {
      children: "To do this you just need to run a simple command and Easypanel will be installed:"
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
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sSL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://get.easypanel.io"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sh"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The complete ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/easypanel-modern-server-control-panel/",
        children: "EasyPanel Setup tutorial"
      }), " can be followed to properly set EasyPanel."]
    }), "\n", createVNode(_components.h3, {
      id: "3-create-an-easypanel-project",
      children: "3. Create an Easypanel Project"
    }), "\n", createVNode(_components.p, {
      children: "After you install EasyPanel you will need to add your first project and go and choose the Keila from the templates they have, as in the below picture:"
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "EasyPanel Keila Choose"
    }), "\n", createVNode(_components.h3, {
      id: "4-create-keila-in-eaasypanel",
      children: "4. Create Keila in EaasyPanel"
    }), "\n", createVNode(_components.p, {
      children: "Next, you will need to add the details for deploying Keila:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "App Service Name: name of the app in easypanel"
      }), "\n", createVNode(_components.li, {
        children: ["App Service Image: use ", createVNode(_components.code, {
          children: "pentacent/keila:latest"
        }), " to use the latest one."]
      }), "\n", createVNode(_components.li, {
        children: "Database Service Name: name for the DB container service"
      }), "\n", createVNode(_components.li, {
        children: ["SMTP details: System From Email, SMTP Email Host,SMTP Email Port, SMTP Email Username, SMTP Email Password, if you don’t have an SMTP provider you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/mail-baby-review/",
          children: "Mail.Baby Review"
        })]
      }), "\n"]
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "Create Keila"
    }), "\n", createVNode(_components.p, {
      children: ["At the end you hit ", createVNode(_components.code, {
        children: "create"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Then you will be prompted to use the generated user and password that can be changed later:"
    }), "\n", createVNode(_components.p, {
      children: ["Login with ", createVNode(_components.a, {
        href: "mailto:changeme@easypanel.io",
        children: "changeme@easypanel.io"
      }), ":password123 - change this from the administration panel."]
    }), "\n", createVNode(_components.h3, {
      id: "5-add-your-domain-to-the-installation",
      children: "5. Add your domain to the installation"
    }), "\n", createVNode(_components.p, {
      children: ["By default, easypanel will use his domain for this, but you can add your domain or subdomain to access Keila, to do this you need to go under project ", createVNode(_components.code, {
        children: "domains"
      }), " in EasyPanel and add your own. ", createVNode(_components.br, {}), "\nYou need first to point the A record to the EasyPanel server IP for the domain for this to work."]
    }), "\n", createVNode(_components.h3, {
      id: "6-configure-keila",
      children: "6. Configure Keila"
    }), "\n", createVNode(_components.p, {
      children: "After you set up the domain you can access Keila and change the password for the admin user, also you can add your first project and senders you have. You can use different senders for different projects. The video has more details about this."
    }), "\n", createVNode($$Picture, {
      src: imag3,
      alt: "Keila Interface"
    }), "\n", createVNode(_components.p, {
      children: "Now you can import your contacts, create forms and start sending newsletters."
    }), "\n", createVNode(_components.p, {
      children: "Keila has statistics for your campaigns and after you send one you will have the stats as below:"
    }), "\n", createVNode($$Picture, {
      src: imag4,
      alt: "EasyPanel Keila Choose"
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.keila.io/",
        children: "Keila"
      }), " is a light newsletter alternative that you can self-host easily and start sending emails fast, it has statistics about campaigns sent and can help you manage things easily. With the help of EasyPanel you can host it easily."]
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

const url = "src/content/posts/keila-setup.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/keila-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/keila-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
