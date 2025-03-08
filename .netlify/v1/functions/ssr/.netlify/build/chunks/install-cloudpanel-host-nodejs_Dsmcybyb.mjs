import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import 'clsx';

const sanity = new Proxy({"src":"/_astro/sanity_node.CtAy66Ab.jpeg","width":1902,"height":1134,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/sanity_node.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-02-02T00:00:00.000Z",
  "title": "How To Install CloudPanel and Host Node.js Apps",
  "description": "Learn how to install CloudPanel and host Node.js apps in minutes! Follow our easy step-by-step guide for a quick set up with no coding experience required.",
  "image": "../../assets/images/23/instal-cloudpanel-host-nodejs.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["cloudpanel", "node", "tutorials"],
  "canonical": "https://www.bitdoze.com/install-cloudpanel-host-nodejs/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "video-with-cloudpanel-install-and-nodejs-configs",
    "text": "Video With CloudPanel Install and Node.js Configs"
  }, {
    "depth": 2,
    "slug": "1-how-to-install-cloudpanel",
    "text": "1. How To Install Cloudpanel"
  }, {
    "depth": 3,
    "slug": "11-update-the-os",
    "text": "1.1 Update the OS:"
  }, {
    "depth": 3,
    "slug": "12-install-cloudpanel",
    "text": "1.2 Install CloudPanel:"
  }, {
    "depth": 3,
    "slug": "13-access-cloudpanel-admin",
    "text": "1.3 Access CloudPanel Admin"
  }, {
    "depth": 3,
    "slug": "14-create-an-admin-subdomain",
    "text": "1.4 Create an Admin Subdomain:"
  }, {
    "depth": 2,
    "slug": "2-run-your-nodejs-app-on-cloudpanel",
    "text": "2. Run Your Node.js App on CloudPanel"
  }, {
    "depth": 3,
    "slug": "21-add-a-nodejs-webiste-in-cloudpanel",
    "text": "2.1 Add a Node.JS Webiste in CloudPanel"
  }, {
    "depth": 3,
    "slug": "22-point-the-domain-to-cloudpanel",
    "text": "2.2 Point the Domain to CloudPanel"
  }, {
    "depth": 3,
    "slug": "23-generate-the-ssl-certificate",
    "text": "2.3 Generate the SSL certificate"
  }, {
    "depth": 3,
    "slug": "24-install-strapi-to-cloudpanel",
    "text": "2.4 Install Strapi to CloudPanel"
  }, {
    "depth": 3,
    "slug": "25-build-strapi-admin-panel",
    "text": "2.5 Build Strapi Admin Panel"
  }, {
    "depth": 3,
    "slug": "26-run-strapi",
    "text": "2.6 Run Strapi"
  }, {
    "depth": 3,
    "slug": "27-create-the-admin-user",
    "text": "2.7 Create The admin User"
  }, {
    "depth": 2,
    "slug": "3enable-auto-start-with-pm2",
    "text": "3.Enable Auto Start With PM2"
  }, {
    "depth": 3,
    "slug": "31-install-the-latest-pm2-via-npm",
    "text": "3.1 Install the latest pm2 via npm"
  }, {
    "depth": 3,
    "slug": "32-start-the-app-and-save-the-config",
    "text": "3.2 Start The App and save the config"
  }, {
    "depth": 3,
    "slug": "33-add-cron-to-start-strapi-on-reboot",
    "text": "3.3 Add Cron To Start Strapi On Reboot"
  }, {
    "depth": 2,
    "slug": "conlcusions",
    "text": "Conlcusions"
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
        href: "https://www.cloudpanel.io/",
        children: "CloudPanel"
      }), " is a free hosting panel that can be installed on VPS servers and can help with hosting websites including node.js applications."]
    }), "\n", createVNode(_components.p, {
      children: "Cloudpanel is a simple and nice hosting panel that runs on top of Nginx and MySql or Maria DB and can help you run various applications from PHP ones to Python or node.js."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Below is a list of what CloudPanel has to offer:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "File Manager"
      }), "\n", createVNode(_components.li, {
        children: "IP & Bot Blocking"
      }), "\n", createVNode(_components.li, {
        children: "Varnish Cache & Redis"
      }), "\n", createVNode(_components.li, {
        children: "SSH/FTP"
      }), "\n", createVNode(_components.li, {
        children: "Firewall"
      }), "\n", createVNode(_components.li, {
        children: "Cron Jobs"
      }), "\n", createVNode(_components.li, {
        children: "Vhost Editor"
      }), "\n", createVNode(_components.li, {
        children: "Remote Backup with Rclone"
      }), "\n", createVNode(_components.li, {
        children: "Free Let’s Encrypt Certificates"
      }), "\n", createVNode(_components.li, {
        children: "Cloudflare Integration"
      }), "\n", createVNode(_components.li, {
        children: "User Management"
      }), "\n", createVNode(_components.li, {
        children: "System resources usage graphs"
      }), "\n", createVNode(_components.li, {
        children: "Multiple PHP versions"
      }), "\n", createVNode(_components.li, {
        children: "MySQL and MariaDB support"
      }), "\n", createVNode(_components.li, {
        children: "Node.js, Python support"
      }), "\n", createVNode(_components.li, {
        children: "Nginx Web Server"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Minimum requirements:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Minimum 1 core"
      }), "\n", createVNode(_components.li, {
        children: "Minimum 2 GB RAM"
      }), "\n", createVNode(_components.li, {
        children: "10 GB of disk space"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["CloudPanel has direct cloud integrations with ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/do",
        children: "DigitalOcean"
      }), ", ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/vultr",
        children: "Vultr"
      }), ", ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/hetzner",
        children: "Hetzner"
      }), ", AWS or Google Cloud. These integrations can help you create snapshots and enable automatic snapshot creations from CloudPanel UI."]
    }), "\n", createVNode(_components.p, {
      children: ["In this article and video I will use Hetzner to create the VPS and Ubuntu 22.04 to host my node.js application, I have made a review and benchmark off ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/digitalocean-vs-vultr-vs-hetzner/",
        children: "DigitalOcean vs Vultr vs Hetzner"
      }), " so you can check that to see the exact differences."]
    }), "\n", createVNode(_components.p, {
      children: ["If you are interested on how you can monitor your CPU and have an automatic email sent when load is too big you should check: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/monitor-cpu-usage-and-send-email-alerts-in-linux/",
        children: "Monitor CPU Usage and Send Email Alerts in Linux"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "video-with-cloudpanel-install-and-nodejs-configs",
      children: "Video With CloudPanel Install and Node.js Configs"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/5KndMFz-VKQ",
      label: "How To Install CloudPanel and Host Node.js Apps"
    }), "\n", createVNode(_components.p, {
      children: "In case you are interested to have a web panel that can help you manage your applications and be used as a reverse proxy you can check the bellow course:"
    }), "\n", createVNode($$Button, {
      link: "https://webdoze.net/courses/cloudpanel-setup/",
      text: "CloudPanel Setup Course"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can also check ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/cloudpanel-setup-dockge/",
          children: "Setup CloudPanel with Docker and Dokge"
        }), " to use CloudPanel as a reverse proxy to your Docker containers and ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/cloudpanel-remote-backups/",
          children: "CloudPanel Remote Backups"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "1-how-to-install-cloudpanel",
      children: "1. How To Install Cloudpanel"
    }), "\n", createVNode(_components.p, {
      children: "After you have your VPS created you need to SSH to it and run the below command:"
    }), "\n", createVNode(_components.h3, {
      id: "11-update-the-os",
      children: "1.1 Update the OS:"
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
            children: "apt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " && "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "apt"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -y"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upgrade"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " && "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "apt"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -y"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " curl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " wget"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "12-install-cloudpanel",
      children: "1.2 Install CloudPanel:"
    }), "\n", createVNode(_components.p, {
      children: ["I use MariaDB 10.9 for this install and Hetzner as a cloud provider you can check ", createVNode(_components.a, {
        href: "https://www.cloudpanel.io/docs/v2/getting-started/hetzner-cloud/installation/installer/",
        children: "Cloudpanel Install Doc"
      }), " to check the options:"]
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
              color: "#D19A66"
            },
            children: " -sS"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://installer.cloudpanel.io/ce/v2/install.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -o"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " \"2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sha256sum"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -c"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " && "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CLOUD=hetzner"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DB_ENGINE=MARIADB_10.9"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bash"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install.sh"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "13-access-cloudpanel-admin",
      children: "1.3 Access CloudPanel Admin"
    }), "\n", createVNode(_components.p, {
      children: ["You can access the CloudPanel admin with the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://serverIpAddress:8443",
          children: "https://serverIpAddress:8443"
        })
      }), " but in the next steps, we are going to go and create a subdomain and use it to access CloudPanel in the future."]
    }), "\n", createVNode(_components.h3, {
      id: "14-create-an-admin-subdomain",
      children: "1.4 Create an Admin Subdomain:"
    }), "\n", createVNode(_components.p, {
      children: "To access CloudPanel securely and have an SSL certificate we need to create a subdomain and point it to the CloudPanel VPS server. I am using CloudFlare for this and I just go and add an A record under DNS on the domain I want to host."
    }), "\n", createVNode(_components.p, {
      children: "Next, we need to go and add it to the CloudPanel Admin area in Settings. And add it there to secure the admin area."
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
      id: "2-run-your-nodejs-app-on-cloudpanel",
      children: "2. Run Your Node.js App on CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: "Next, we will deploy a Node.js app that we are going to host with CloudPanel. To do this we are going to add the application to CloudPanel."
    }), "\n", createVNode(_components.h3, {
      id: "21-add-a-nodejs-webiste-in-cloudpanel",
      children: "2.1 Add a Node.JS Webiste in CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: "You just need to click add a site and add your domain with node.js version with username and passwords as in the picture below:"
    }), "\n", createVNode($$Picture, {
      src: sanity,
      alt: "CloudPanel Add Sanity"
    }), "\n", createVNode(_components.h3, {
      id: "22-point-the-domain-to-cloudpanel",
      children: "2.2 Point the Domain to CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: "I will use CloudFlare for this and I will add an A record to my domain or subdomain that will point to my VPS server. I will also enable CloudFlare on it to benefit from the speed improvements."
    }), "\n", createVNode(_components.p, {
      children: "From the SSL/TLS tab in CloudPanel, I will generate a Let’s Encrypt certificate so the website works over HTTPS."
    }), "\n", createVNode(_components.h3, {
      id: "23-generate-the-ssl-certificate",
      children: "2.3 Generate the SSL certificate"
    }), "\n", createVNode(_components.p, {
      children: "Next, you need to go under SSL/TLS and generate an SSL Let’s Encrypt certificate for your domain."
    }), "\n", createVNode(_components.h3, {
      id: "24-install-strapi-to-cloudpanel",
      children: "2.4 Install Strapi to CloudPanel"
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
            children: " sudo"
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
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " created"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " when"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " website"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " adde"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "d>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " htdocs"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " && "
          }), createVNode(_components.span, {
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " npx"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " create-strapi-app@latest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " www.domain.com"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then you will be asked to configure the admin panel you will be able to do that at ", createVNode(_components.a, {
        href: "https://www.domain.com/admin",
        children: "https://www.domain.com/admin"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "25-build-strapi-admin-panel",
      children: "2.5 Build Strapi Admin Panel"
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
            children: " htdocs/www.domain.com/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "NODE_ENV"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "production"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " npm"
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
    }), "\n", createVNode(_components.h3, {
      id: "26-run-strapi",
      children: "2.6 Run Strapi"
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
            children: "NODE_ENV"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "production"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " npm"
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
              color: "#ABB2BF"
            },
            children: "> strapi start"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Project"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " information"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "┌────────────────────┬──────────────────────────────────────────────────┐"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "               │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Thu"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Feb"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 02"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2023"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10:04:46"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " GMT+0000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (Coordinated "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "…"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Launched"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1047"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ms"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                                          │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Environment"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " production"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                                       │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Process"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 121469"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                                           │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Version"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4.6.0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (node "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "v14.21.2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")                            │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Edition"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Community"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                                        │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Database"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sqlite"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                                           │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "└────────────────────┴──────────────────────────────────────────────────┘"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Actions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " available"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "One"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " more"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " thing..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " first"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " administrator"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 💻"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " by"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " going"
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
            children: " administration"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " panel"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " at:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "┌───────────────────────────┐"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http://0.0.0.0:1337/admin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "└───────────────────────────┘"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "27-create-the-admin-user",
      children: "2.7 Create The admin User"
    }), "\n", createVNode(_components.p, {
      children: ["Now you just need to visit the website you chose with Admin like: ", createVNode(_components.a, {
        href: "https://www.domain.com/admin",
        children: "https://www.domain.com/admin"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Here just add your details with the password"
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
      id: "3enable-auto-start-with-pm2",
      children: "3.Enable Auto Start With PM2"
    }), "\n", createVNode(_components.p, {
      children: "The node.js app will not start by itself in case the server reboots, so if you don’t want to go and manually start it we need to enable pm2 to auto-restart it."
    }), "\n", createVNode(_components.h3, {
      id: "31-install-the-latest-pm2-via-npm",
      children: "3.1 Install the latest pm2 via npm"
    }), "\n", createVNode(_components.p, {
      children: ["For a complete guide on PM2, check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/pm2-manage-apps/",
        children: "Manage Applications with PM2"
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
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pm2@latest"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -g"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "32-start-the-app-and-save-the-config",
      children: "3.2 Start The App and save the config"
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " npm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " strapi-app"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " save"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "33-add-cron-to-start-strapi-on-reboot",
      children: "3.3 Add Cron To Start Strapi On Reboot"
    }), "\n", createVNode(_components.p, {
      children: "Find the current path:"
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
              color: "#E06C75"
            },
            children: " $PATH"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Edit the user crontab and add the action:"
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
            children: "crontab"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "PATH"
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
            children: "output"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pat"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "h>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "@reboot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " resurrect"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " &> /dev/null"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "eg:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "PATH"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/home/bitdoze-strapi/.nvm/versions/node/v14.21.2/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "@reboot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " resurrect"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " &> /dev/null"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can check with crontab -l to see if crontab for the user was added ok.\r\nAfter you can reboot the server and see if the process is up with pm2 status"
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
            children: "bitdoze-strapi@ubuntu-2gb-hil-2:~$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " status"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "┌─────┬───────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " namespace"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " version"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pid"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " uptime"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ↺"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " status"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cpu"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mem"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " watching"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├─────┼───────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " strapi-app"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0.39.1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fork"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1521"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 50s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " online"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 0%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 56.7mb"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bit…"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " disabled"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "└─────┴───────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "conlcusions",
      children: "Conlcusions"
    }), "\n", createVNode(_components.p, {
      children: "This is how you can easily have CloudPanel installed on any VPS and you can host your node.js apps or other types of apps you want. I have been using CloudPanel for more than a year now and I can say it didn’t disappointed with anything till now."
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
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

const url = "src/content/posts/install-cloudpanel-host-nodejs.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-cloudpanel-host-nodejs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/install-cloudpanel-host-nodejs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
