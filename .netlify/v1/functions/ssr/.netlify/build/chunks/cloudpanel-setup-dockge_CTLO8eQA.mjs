import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { i as imag3$1 } from './dockge-add_BwfTAtgV.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/cp-add-proxy-1.CPN_nUCS.png","width":2320,"height":2194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/cp-add-proxy-1.png";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/cp-add-proxy-2.B0Hkuoo4.png","width":2106,"height":1170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/cp-add-proxy-2.png";
							}
							
							return target[name];
						}
					});

const imag3 = new Proxy({"src":"/_astro/cp-open-ports.BeWevIGw.png","width":2400,"height":1232,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/cp-open-ports.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-02-13T00:00:00.000Z",
  "title": "Setup CloudPanel As Reverse Proxy with Docker and Dockge",
  "description": "Use CloudPanel as a reverse proxy with Dockge for managing your Docker containers.",
  "image": "../../assets/images/24/02/cloudpanel-dockge-setup.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["cloudpanel", "dockge"],
  "canonical": "https://www.bitdoze.com/cloudpanel-setup-dockge/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-create-a-vps-server",
    "text": "1. Create a VPS server"
  }, {
    "depth": 2,
    "slug": "2-update-the-vps-server",
    "text": "2. Update the VPS server"
  }, {
    "depth": 2,
    "slug": "3-install-cloudpanel",
    "text": "3. Install CloudPanel"
  }, {
    "depth": 2,
    "slug": "4-access-cloudpanel-admin",
    "text": "4. Access CloudPanel Admin"
  }, {
    "depth": 2,
    "slug": "5-create-an-admin-subdomain",
    "text": "5. Create an Admin Subdomain:"
  }, {
    "depth": 2,
    "slug": "6-install-docker-and-docker-compose",
    "text": "6. Install Docker and Docker Compose"
  }, {
    "depth": 2,
    "slug": "7-install-dockge",
    "text": "7. Install Dockge"
  }, {
    "depth": 3,
    "slug": "71-add-reverse-proxy-in-cloudpanel",
    "text": "7.1 Add Reverse Proxy in CloudPanel"
  }, {
    "depth": 3,
    "slug": "72-create-the-directories-for-dockge",
    "text": "7.2 Create the Directories For Dockge"
  }, {
    "depth": 3,
    "slug": "73-install-dockge",
    "text": "7.3 Install Dockge"
  }, {
    "depth": 3,
    "slug": "74-point-domainsubdomain-to-dockge",
    "text": "7.4 Point Domain/Subdomain to Dockge"
  }, {
    "depth": 3,
    "slug": "75-create-an-ssl-certificate",
    "text": "7.5 Create an SSL certificate"
  }, {
    "depth": 3,
    "slug": "76-access-dockge-and-create-a-user-and-password",
    "text": "7.6 Access Dockge and Create a User and Password."
  }, {
    "depth": 3,
    "slug": "77-open-cloudpanel-firewall-ports",
    "text": "7.7 Open CloudPanel Firewall Ports"
  }, {
    "depth": 2,
    "slug": "8-deploy-first-app",
    "text": "8. Deploy First App"
  }, {
    "depth": 2,
    "slug": "9-activate-backups",
    "text": "9. Activate backups"
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
      }), " is a hosting panel that is light and packed with a lot of features. It will help you host PHP, Python or NodeJs apps with just one click. Besides this, it has also a feature that will allow use it as a reverse proxy for your docker apps."]
    }), "\n", createVNode(_components.p, {
      children: "You can use other alternatives as reverse proxy for your self-hosted apps but in case you want to host also websites that are not in docker this will be a good alternative."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
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
    }), "\n", createVNode(_components.p, {
      children: ["In this article, we are going to see how you can Install CloudPanel Docker and Dockge and make the most of your VPS. ", createVNode(_components.a, {
        href: "https://dockge.kuma.pet/",
        children: "Dockge"
      }), " is a panel that can help you host docker apps with just one click I have made an article here: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/dockge-install/",
        children: "Dockge Install"
      }), " that will provide more details on the panel."]
    }), "\n", createVNode(_components.p, {
      children: "CloudPanel will be used as a proxy server that will send the traffic to your Docker containers and Dockge will be the app that will help you administrate these docker containers and deploy apps easily."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["If you are interested to see some free cool open source self hosted apps you can check ", createVNode(_components.a, {
          href: "https://toolhunt.net/sh/",
          children: "toolhunt.net self hosted section"
        }), "."]
      }), "\n"]
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/BuoyvbDVBe0",
      label: "Setup CloudPanel As Reverse Proxy with Docker and Dockge"
    }), "\n", createVNode(_components.h2, {
      id: "1-create-a-vps-server",
      children: "1. Create a VPS server"
    }), "\n", createVNode(_components.p, {
      children: ["You will need a VPS server where you can host your docker containers I am recommending ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/hetzner",
        children: "Hetzner"
      }), ", for more details check this ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/hetzner-cloud-review/",
        children: "Hetzner Review"
      }), " and you can check also: ", createVNode(_components.a, {
        href: "https://www.wpdoze.com/digitalocean-vs-vultr-vs-hetzner/",
        children: "DigitalOcean vs Vultr vs Hetzner"
      })]
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
      children: "The VPS process is easy and you just need a Ubuntu server, CloudPanel and Dockge are working on ARM and x86_64 also."
    }), "\n", createVNode(_components.h2, {
      id: "2-update-the-vps-server",
      children: "2. Update the VPS server"
    }), "\n", createVNode(_components.p, {
      children: "First thing always is to update your Ubuntu to use the latest packages:"
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
            children: " upgrade"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "3-install-cloudpanel",
      children: "3. Install CloudPanel"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["I have also created a course that will help you get going with Cloudpanel if you are a beginner, check ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://webdoze.net/courses/cloudpanel-setup/",
            children: "CloudPanel Setup Course"
          })
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["I use MariaDB 10.11 for this install and Hetzner as a cloud provider you can check ", createVNode(_components.a, {
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
            children: " \"85762db0edc00ce19a2cd5496d1627903e6198ad850bbbdefb2ceaa46bd20cbd install.sh\""
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
            children: " DB_ENGINE=MARIADB_10.11"
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
    }), "\n", createVNode(_components.h2, {
      id: "4-access-cloudpanel-admin",
      children: "4. Access CloudPanel Admin"
    }), "\n", createVNode(_components.p, {
      children: ["You can access the CloudPanel admin with the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://serverIpAddress:8443",
          children: "https://serverIpAddress:8443"
        })
      }), " , here you will need to create an account that will be used. In the next steps, we are going to go and create a subdomain and use it to access CloudPanel in the future."]
    }), "\n", createVNode(_components.h2, {
      id: "5-create-an-admin-subdomain",
      children: "5. Create an Admin Subdomain:"
    }), "\n", createVNode(_components.p, {
      children: "To access CloudPanel securely and have an SSL certificate we need to create a subdomain and point it to the CloudPanel VPS server. I am using CloudFlare for this and I just go and add an A record under DNS on the domain I want to host. You can use what DNS provider you have, you just need to point the subdomain/domain A record to the server IP."
    }), "\n", createVNode(_components.p, {
      children: "Next, we need to go and add it to the CloudPanel Admin area in Settings. And add it there to secure the admin area."
    }), "\n", createVNode(_components.h2, {
      id: "6-install-docker-and-docker-compose",
      children: "6. Install Docker and Docker Compose"
    }), "\n", createVNode(_components.p, {
      children: "Now that you have your VPS created and CloudPanel set, you will need to install docker, the below will need to be done to have docker UP and running:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
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
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ca-certificates"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " curl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " gnupg"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lsb-release"
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
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/apt/keyrings"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " -fsSL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://download.docker.com/linux/debian/gpg"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " gpg"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --dearmor"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -o"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/apt/keyrings/docker.gpg"
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
              color: "#56B6C2"
            },
            children: " \\"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  \"deb [arch=$("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "dpkg"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --print-architecture"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ") signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "
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
              color: "#98C379"
            },
            children: "  jammy stable\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tee"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /etc/apt/sources.list.d/docker.list"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " > "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/dev/null"
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
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
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
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-ce"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-ce-cli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " containerd.io"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-compose-plugin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker-compose"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Everything is also explained in ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/install-docker-ubuntu-arm/",
        children: "Install Docker & Docker-compose for Ubuntu"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "7-install-dockge",
      children: "7. Install Dockge"
    }), "\n", createVNode(_components.p, {
      children: "In the next part, we will go and install Dockge on a subdomain/domain in CloudPanel, under this user we are going to keep our Dockge installation and the future apps."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "In this way, if you have CloudPanel external backup activated you will backup all the apps and Dockge at once."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "71-add-reverse-proxy-in-cloudpanel",
      children: "7.1 Add Reverse Proxy in CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: ["In this part, we are going to add the Reverse Proxy in CloudPanel with the port that we are going to use for Dockge. ", createVNode(_components.code, {
        children: "Under Sites - Add Site"
      }), " you choose ", createVNode(_components.code, {
        children: "Create a Reverse Proxy"
      })]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "CloudPanel Create a Reverse Proxy"
    }), "\n", createVNode(_components.p, {
      children: ["In the next part you will add the domain with the user password and port that Dockge will use, in my case will be the ", createVNode(_components.code, {
        children: "5000"
      }), " port."]
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "CloudPanel Create a Reverse Proxy"
    }), "\n", createVNode(_components.p, {
      children: "You choose what you want to use."
    }), "\n", createVNode(_components.h3, {
      id: "72-create-the-directories-for-dockge",
      children: "7.2 Create the Directories For Dockge"
    }), "\n", createVNode(_components.p, {
      children: "After you have the website added you will need to open a terminal to your server and under the path where website is created in CloudPanel you create the dockge directories:"
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
              color: "#56B6C2"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /home/"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "use"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "r>"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/htdocs/"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "websit"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "e>"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#eg:"
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
            children: " /home/bitdoze-dockge/htdocs/dockge.bitdoze.com/"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You just replace the ", createVNode(_components.code, {
        children: "<user>"
      }), " and ", createVNode(_components.code, {
        children: "<website>"
      }), " with your specific details, from point 7.1"]
    }), "\n", createVNode(_components.p, {
      children: "Create the directories:"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dockge-stacks"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " dockge"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "dockge"
        }), " - will be used to have the app installed"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "dockge-stacks"
        }), " - will be the place where all the apps will reside"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "73-install-dockge",
      children: "7.3 Install Dockge"
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"3.8\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "services"
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
              color: "#E06C75"
            },
            children: "  dockge"
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
              color: "#E06C75"
            },
            children: "    image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "louislam/dockge:1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    restart"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "unless-stopped"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    ports"
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
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5000:5001"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    volumes"
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
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/var/run/docker.sock:/var/run/docker.sock"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./data:/app/data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/home/<user>/htdocs/<website>/dockge-stacks:/home/<user>/htdocs/<website>/dockge-stacks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    environment"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Tell Dockge where to find the stacks"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "DOCKGE_STACKS_DIR=/home/<user>/htdocs/<website>/dockge-stacks"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In the above files you have to replace:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Port"
        }), " - in my case I am using 5000 so you just replace with your port the left one"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Volumes"
        }), " - ", createVNode(_components.code, {
          children: "/home/<user>/htdocs/<website>/dockge-stacks:/home/<user>/htdocs/<website>/dockge-stacks"
        }), " will need to be replaces with your paths from previous point"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "DOCKGE_STACKS_DIR"
        }), " - same as previous is the path where you will have your stacks."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "A full example is:"
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
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"3.8\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "services"
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
              color: "#E06C75"
            },
            children: "  dockge"
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
              color: "#E06C75"
            },
            children: "    image"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "louislam/dockge:1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    restart"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "unless-stopped"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    ports"
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
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "5000:5001"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    volumes"
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
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/var/run/docker.sock:/var/run/docker.sock"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./data:/app/data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/home/bitdoze-dockge/htdocs/dockge.bitdoze.com/dockge-stacks:/home/bitdoze-dockge/htdocs/dockge.bitdoze.com/dockge-stacks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    environment"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "      # Tell Dockge where to find the stacks"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "DOCKGE_STACKS_DIR=/home/bitdoze-dockge/htdocs/dockge.bitdoze.com/dockge-stacks"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://dockge.kuma.pet/",
        children: "Dokge Compose Create"
      }), " can help you create the exact docker-compose file."]
    }), "\n", createVNode(_components.p, {
      children: ["After you save the file with the name ", createVNode(_components.code, {
        children: "compose.yaml"
      }), " and run:"]
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
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " compose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " up"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will bring up the Dockge app that will run on port ", createVNode(_components.code, {
        children: "5000"
      }), " in my case."]
    }), "\n", createVNode(_components.h3, {
      id: "74-point-domainsubdomain-to-dockge",
      children: "7.4 Point Domain/Subdomain to Dockge"
    }), "\n", createVNode(_components.p, {
      children: "In your DNS provider, you need to create an A record that will be sent to the server IP."
    }), "\n", createVNode(_components.h3, {
      id: "75-create-an-ssl-certificate",
      children: "7.5 Create an SSL certificate"
    }), "\n", createVNode(_components.p, {
      children: ["The domain that will be used for Dockge will need to be secured with SSL, you need to go into CloudPanel under ", createVNode(_components.code, {
        children: "Sites - Manage Site - SSL/TLS"
      }), " and generate an SSL certificate, a Let’s Encrypt one."]
    }), "\n", createVNode(_components.h3, {
      id: "76-access-dockge-and-create-a-user-and-password",
      children: "7.6 Access Dockge and Create a User and Password."
    }), "\n", createVNode(_components.p, {
      children: "First time when you access Dockge you will be prompted to create a user and a password, you just need to create one. You access Dockge with the domain you have used for installation."
    }), "\n", createVNode(_components.h3, {
      id: "77-open-cloudpanel-firewall-ports",
      children: "7.7 Open CloudPanel Firewall Ports"
    }), "\n", createVNode(_components.p, {
      children: "By default CloudPanel is activating a firewall and only a couple of ports are opened like 8443,443,22 and 80 if you want to not assign domains or subdomains to your docker apps you should go and open the ranges that you are going to use for your docker apps."
    }), "\n", createVNode(_components.p, {
      children: ["To open the ports you should go under ", createVNode(_components.strong, {
        children: "Admin Area - Security - Add Rule"
      }), " and open the ranges as in the picture:"]
    }), "\n", createVNode($$Picture, {
      src: imag3,
      alt: "CloudPanel Port Open"
    }), "\n", createVNode(_components.p, {
      children: "This will allow access to the ports from outside."
    }), "\n", createVNode(_components.h2, {
      id: "8-deploy-first-app",
      children: "8. Deploy First App"
    }), "\n", createVNode(_components.p, {
      children: "Now you are set you can access Dockge and start deploy your apps."
    }), "\n", createVNode($$Picture, {
      src: imag3$1,
      alt: "Dockge Add Compose"
    }), "\n", createVNode(_components.p, {
      children: "Below there are some articles with apps that you can deploy on Dockge:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/umami-analytics-install/",
          children: "Install Umami Analytics"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/outline-install/",
          children: "Install Outline Wiki"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/slash-docker-deploy/",
          children: "Slash Install"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "At the end when the app is deployed you will need to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1. Create a Reverse Proxy in CloudPanel"
        }), " - same as you did for Dockge you will need to Create a website in CloudPanel as a Reverse Proxy and add the domain/subdomain that you will use with the port you have given to that app."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "2. Point the Subdomain/Domain to Server"
        }), " - In your DNS manager add A record to the server for domain or subdomain that you are going to use"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "3. Create SSL Certificate"
        }), " - your app will need to have an SSL certificate you need to go into CloudPanel under ", createVNode(_components.code, {
          children: "Sites - Manage Site - SSL/TLS"
        }), " and generate an SSL certificate, a Let’s Encrypt one."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "9-activate-backups",
      children: "9. Activate backups"
    }), "\n", createVNode(_components.p, {
      children: ["To secure your apps in case something happens you can go and activate CloudPanel external backups to Dropbox, S3, Google Drive or any SMTP you may have. You can go under ", createVNode(_components.strong, {
        children: "Admin Area - Backups"
      }), " and activate the rClone backups to external source."]
    }), "\n", createVNode(_components.p, {
      children: "You can also enable Hetzner snapshots if you want to be better protected, in function of your VPS provider CloudPanel is offering integrations."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["I have also created a course that will help you get going with Cloudpanel if you are a beginner, check ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://webdoze.net/courses/cloudpanel-setup/",
            children: "CloudPanel Setup Course"
          })
        })]
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

const url = "src/content/posts/cloudpanel-setup-dockge.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/cloudpanel-setup-dockge.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/cloudpanel-setup-dockge.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
