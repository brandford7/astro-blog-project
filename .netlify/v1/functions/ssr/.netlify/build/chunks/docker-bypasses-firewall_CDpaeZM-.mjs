import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-01-17T00:00:00.000Z",
  "title": "How to Fix Docker Bypassing Firewall: A Complete Guide",
  "description": "Learn how you can fix the docker security issue that is bypassing the firewall",
  "image": "../../assets/images/25/01/fix-docker-bypass-firewall.jpg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/docker-bypasses-firewall/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "understanding-the-problem-why-docker-bypasses-the-firewall",
    "text": "Understanding the Problem: Why Docker Bypasses the Firewall"
  }, {
    "depth": 2,
    "slug": "solutions-configuring-the-firewall-to-control-docker-traffic",
    "text": "Solutions: Configuring the Firewall to Control Docker Traffic"
  }, {
    "depth": 3,
    "slug": "1-using-localhost-binding-the-simplest-fix",
    "text": "1. Using Localhost Binding (The Simplest Fix)"
  }, {
    "depth": 3,
    "slug": "2-using-a-cloud-firewall",
    "text": "2. Using a Cloud Firewall"
  }, {
    "depth": 3,
    "slug": "3-using-traefik-as-a-reverse-proxy",
    "text": "3. Using Traefik as a Reverse Proxy"
  }, {
    "depth": 3,
    "slug": "4-advanced-firewall-configurations-working-with-iptables-and-ufw",
    "text": "4. Advanced Firewall Configurations: Working with iptables and UFW"
  }, {
    "depth": 4,
    "slug": "working-with-iptables",
    "text": "Working with iptables"
  }, {
    "depth": 4,
    "slug": "working-with-firewalld",
    "text": "Working with firewalld"
  }, {
    "depth": 4,
    "slug": "using-ufw-uncomplicated-firewall",
    "text": "Using UFW (Uncomplicated Firewall)"
  }, {
    "depth": 4,
    "slug": "using-docker-compose-networks",
    "text": "Using Docker Compose Networks"
  }, {
    "depth": 2,
    "slug": "conclusion-keeping-your-docker-containers-secure",
    "text": "Conclusion: Keeping Your Docker Containers Secure"
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
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I recently discovered something quite surprising while setting up Docker containers on my VPS - Docker can actually bypass your system’s firewall rules! If you’re ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/secure-ssh-server-linux/",
        children: "managing your own servers"
      }), " and running Docker containers, this is something you definitely need to know about."]
    }), "\n", createVNode(_components.h2, {
      id: "understanding-the-problem-why-docker-bypasses-the-firewall",
      children: "Understanding the Problem: Why Docker Bypasses the Firewall"
    }), "\n", createVNode(_components.p, {
      children: "Here’s what I learned: When you set up Docker on your system, it creates its own networking setup that works a bit differently than you might expect. Let me break down what’s actually happening behind the scenes."
    }), "\n", createVNode(_components.p, {
      children: "Docker’s default behavior prioritizes ease of use for container networking, which involves automatically setting up these firewall rules. While this makes container networking more straightforward and user-friendly, it can inadvertently create security vulnerabilities if not managed properly. Docker needs this level of network control to efficiently handle inter-container communication and external access, but it’s crucial to understand and manage these automatic configurations."
    }), "\n", createVNode(_components.p, {
      children: ["By default, Docker sets up something called a bridge network (usually named ", createVNode(_components.code, {
        children: "docker0"
      }), "). Think of it as Docker creating its own little private network inside your system. When you run a container with a port mapping like this:"]
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
            children: "  myapp"
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
            children: "nginx"
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
            children: "\"8080:80\""
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
      children: ["You might think you’re just opening port 8080 on localhost, but what’s actually happening is more complex. Docker is binding to ", createVNode(_components.code, {
        children: "0.0.0.0:8080"
      }), ", which means it’s accessible from anywhere, not just your local machine. This is similar to the issue I encountered when ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-containers-home-server/",
        children: "setting up containers for my home server"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "The real kicker is that Docker modifies your iptables (the Linux firewall) directly to make this work. It adds its own rules before your regular firewall rules, which means those carefully crafted firewall configurations you set up might not be doing what you expect for your Docker containers."
    }), "\n", createVNode(_components.p, {
      children: "Here’s a quick way to see this in action. Try running:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " iptables"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "grep"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You’ll probably see several rules that Docker has added to your firewall configuration - these are what can bypass your regular firewall rules."
    }), "\n", createVNode(_components.p, {
      children: "This behavior is by design - Docker needs to efficiently manage container networking and provide seamless communication between containers and the outside world. However, this convenience comes with security implications that need to be carefully considered and managed. In the following sections, I’ll show you exactly how to fix this and secure your Docker containers properly while maintaining the functionality you need."
    }), "\n", createVNode(_components.h2, {
      id: "solutions-configuring-the-firewall-to-control-docker-traffic",
      children: "Solutions: Configuring the Firewall to Control Docker Traffic"
    }), "\n", createVNode(_components.p, {
      children: "After discovering this security concern, I’ve found several effective ways to handle it. Let me share the most practical solutions I’ve implemented and tested."
    }), "\n", createVNode(_components.h3, {
      id: "1-using-localhost-binding-the-simplest-fix",
      children: "1. Using Localhost Binding (The Simplest Fix)"
    }), "\n", createVNode(_components.p, {
      children: ["The easiest solution I’ve found is to explicitly bind containers to localhost. Instead of letting Docker bind to all interfaces (", createVNode(_components.code, {
        children: "0.0.0.0"
      }), "), we can force it to only listen on ", createVNode(_components.code, {
        children: "127.0.0.1"
      }), ". Here’s how to do it in your docker-compose.yml:"]
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
            children: "  myapp"
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
            children: "nginx"
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
            children: "\"127.0.0.1:8080:80\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "While this is the simplest solution, it does have limitations. If you need other services on the same host to access the container, or if you plan to expose the service directly without a reverse proxy, this method won’t work. In such cases, you’ll need to consider alternative approaches like those discussed below."
    }), "\n", createVNode(_components.h3, {
      id: "2-using-a-cloud-firewall",
      children: "2. Using a Cloud Firewall"
    }), "\n", createVNode(_components.p, {
      children: "One approach I’ve come to really appreciate is using a cloud firewall instead of relying solely on the VPS firewall. Cloud providers offer various firewall solutions:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "AWS Security Groups: Configure inbound/outbound rules at the instance level"
      }), "\n", createVNode(_components.li, {
        children: "Google Cloud Firewall Rules: Network-level filtering with tag-based rules"
      }), "\n", createVNode(_components.li, {
        children: "DigitalOcean Cloud Firewalls: Similar to AWS security groups"
      }), "\n", createVNode(_components.li, {
        children: "Hetzner Cloud Firewall: Network-level filtering before traffic reaches your VPS"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These firewalls operate at the network level, meaning they can’t be bypassed by Docker’s internal networking configuration."
    }), "\n", createVNode(_components.p, {
      children: "The advantage here is that these firewalls can’t be bypassed by Docker’s networking tricks because they operate at a higher level. Here’s what I typically do:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Allow only necessary ports (usually 80, 443 for web traffic, and 22 for SSH)"
      }), "\n", createVNode(_components.li, {
        children: "Block all other incoming traffic"
      }), "\n", createVNode(_components.li, {
        children: "Configure specific rules for any additional services"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-using-traefik-as-a-reverse-proxy",
      children: "3. Using Traefik as a Reverse Proxy"
    }), "\n", createVNode(_components.p, {
      children: ["I’ve found that using ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/traefik-proxy-docker/",
        children: "Traefik as a reverse proxy"
      }), " is one of the most elegant solutions. Here’s a basic setup:"]
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
            children: "'3'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "  traefik"
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
            children: "traefik:v2.10"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    command"
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
            children: "\"--providers.docker=true\""
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
            children: "\"--api.dashboard=true\""
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
            children: "\"--api.authentication.basic.users=admin:$$apr1$$xyz123$$\""
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " # Use htpasswd to generate"
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
            children: "\"--certificatesresolvers.letsencrypt.acme.tlschallenge=true\""
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
            children: "\"--certificatesresolvers.letsencrypt.acme.email=your@email.com\""
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
            children: "\"127.0.0.1:80:80\""
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
            children: "/var/run/docker.sock:/var/run/docker.sock:ro"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    labels"
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
            children: "\"traefik.enable=true\""
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
            children: "\"traefik.http.routers.dashboard.middlewares=auth@file\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  myapp"
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
            children: "nginx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    labels"
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
            children: "\"traefik.enable=true\""
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
            children: "\"traefik.http.routers.myapp.rule=Host(`your-domain.com`)\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    # Notice: no ports exposed directly!"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "When using Traefik, ensure you secure the proxy itself:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Enable HTTPS with automatic Let’s Encrypt certificates"
      }), "\n", createVNode(_components.li, {
        children: "Add authentication for the Traefik dashboard"
      }), "\n", createVNode(_components.li, {
        children: "Use secure headers and middleware"
      }), "\n", createVNode(_components.li, {
        children: "Regularly update Traefik to the latest version"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This setup is particularly secure because:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Only Traefik’s ports are exposed, and they’re bound to localhost"
      }), "\n", createVNode(_components.li, {
        children: "Other containers don’t expose ports directly"
      }), "\n", createVNode(_components.li, {
        children: "All traffic is routed through Traefik"
      }), "\n", createVNode(_components.li, {
        children: "Built-in SSL/TLS support with automatic certificate management"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-advanced-firewall-configurations-working-with-iptables-and-ufw",
      children: "4. Advanced Firewall Configurations: Working with iptables and UFW"
    }), "\n", createVNode(_components.p, {
      children: "After setting up the basic protections, I learned there are more sophisticated ways to control Docker’s network access. Let me share how to handle this using different firewall tools."
    }), "\n", createVNode(_components.h4, {
      id: "working-with-iptables",
      children: "Working with iptables"
    }), "\n", createVNode(_components.p, {
      children: "The DOCKER-USER chain is special because Docker specifically avoids modifying rules within this chain, making it a safe place for administrators to add their custom firewall rules that will persist. This chain is processed before Docker’s automatic rules, giving you precise control over incoming container traffic."
    }), "\n", createVNode(_components.p, {
      children: "Here’s how I set it up:"
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
            children: "# Allow established connections"
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
            children: " iptables"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " eth0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ACCEPT"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " conntrack"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --ctstate"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ESTABLISHED,RELATED"
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
            children: "# Allow specific IPs (replace with your trusted IPs)"
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
            children: " iptables"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " eth0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 203.0.113.1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ACCEPT"
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
            children: "# Drop everything else"
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
            children: " iptables"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " eth0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DROP"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "To make these rules permanent (survive reboots), I use:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " netfilter-persistent"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " save"
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
            children: " netfilter-persistent"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reload"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "working-with-firewalld",
      children: "Working with firewalld"
    }), "\n", createVNode(_components.p, {
      children: "‘firewalld’ uses the concept of “zones” to represent different network environments and applies different rules based on the active zone. To effectively manage Docker traffic, you can create specific zones for your Docker interfaces and networks."
    }), "\n", createVNode(_components.p, {
      children: "Here’s how you can configure firewalld to control traffic to Docker networks:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Create a Zone for Docker:"
      }), "\n"]
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --permanent"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --new-zone=docker"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Bind Docker Interfaces:"
      }), "\n"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# For default docker0 bridge"
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --permanent"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --zone=docker"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --add-interface=docker0"
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
            children: "# For user-defined networks (replace br-xxx with your network interface)"
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --permanent"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --zone=docker"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --add-interface=br-xxx"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "Define Rules within the Docker Zone:"
      }), "\n"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Allow specific ports"
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --permanent"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --zone=docker"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --add-port=8080/tcp"
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
            children: "# Allow specific services"
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --permanent"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --zone=docker"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --add-service=http"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: "Apply and Verify:"
      }), "\n"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Reload firewalld"
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --reload"
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
            children: "# Verify configuration"
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
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --zone=docker"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --list-all"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "For user-defined Docker networks, you’ll need to:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Identify the bridge interface name:"
      }), "\n"]
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
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " inspect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " network_name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "grep"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Interface\""
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Add the interface to your firewall zone:"
      }), "\n"]
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " firewall-cmd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --permanent"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --zone=docker"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --add-interface=br-xxxxx"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "using-ufw-uncomplicated-firewall",
      children: "Using UFW (Uncomplicated Firewall)"
    }), "\n", createVNode(_components.p, {
      children: "Setting DEFAULT_FORWARD_POLICY to “ACCEPT” is necessary because Docker requires the ability to forward traffic through its bridge network. This setting allows containers to communicate with the outside world through the host’s network interface. However, this makes it even more important to carefully configure your container-specific rules."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["First, edit ", createVNode(_components.code, {
          children: "/etc/default/ufw"
        }), ":"]
      }), "\n"]
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
              color: "#E06C75"
            },
            children: "DEFAULT_FORWARD_POLICY"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"ACCEPT\""
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: ["Then, create Docker-specific rules in ", createVNode(_components.code, {
          children: "/etc/ufw/after.rules"
        }), ":"]
      }), "\n"]
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
            children: "# NAT table rules"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "*nat"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: ":POSTROUTING"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ACCEPT"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [0:0]"
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
            children: "# Forward traffic through eth0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " POSTROUTING"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 172.17.0.0/16"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " !"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -o"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " docker0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " MASQUERADE"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "COMMIT"
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
            children: "# Don't delete these required lines"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "*filter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: ":ufw-user-forward"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [0:0]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: ":ufw-docker-logging-deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [0:0]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: ":DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [0:0]"
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
            children: "# Docker user chain"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " RETURN"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 10.0.0.0/8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " RETURN"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 172.16.0.0/12"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " RETURN"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 192.168.0.0/16"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ufw-user-forward"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-A"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER-USER"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -j"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DROP"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "COMMIT"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "Apply the changes:"
      }), "\n"]
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reload"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "using-docker-compose-networks",
      children: "Using Docker Compose Networks"
    }), "\n", createVNode(_components.p, {
      children: "One thing that really helped me secure my containers was using custom networks in Docker Compose. Understanding the difference between internal and external networks is crucial for security:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Internal networks (", createVNode(_components.code, {
            children: "internal: true"
          }), "):"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Completely isolated from external networks"
          }), "\n", createVNode(_components.li, {
            children: "Containers can’t make outbound connections"
          }), "\n", createVNode(_components.li, {
            children: "Perfect for sensitive services like databases"
          }), "\n", createVNode(_components.li, {
            children: "Only containers within the same internal network can communicate"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["External networks (", createVNode(_components.code, {
            children: "internal: false"
          }), "):"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Allow containers to access the internet"
          }), "\n", createVNode(_components.li, {
            children: "Can be accessed from outside the Docker host"
          }), "\n", createVNode(_components.li, {
            children: "Suitable for public-facing services"
          }), "\n", createVNode(_components.li, {
            children: "Need careful firewall configuration"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Here’s an example of how I organize my containers with network isolation:"
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
            children: "'3'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "networks"
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
            children: "  frontend"
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
            children: "    internal"
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
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  # Allows external access"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  backend"
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
            children: "    internal"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "   # Completely isolated from external access"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "  web"
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
            children: "nginx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    networks"
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
            children: "frontend"
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
            children: "\"127.0.0.1:8080:80\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    security_opt"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ":      "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Advanced security options"
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
            children: "no-new-privileges:true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  api"
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
            children: "node"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    networks"
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
            children: "frontend"
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
            children: "backend"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    depends_on"
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
            children: "database"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  database"
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
            children: "mysql"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    networks"
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
            children: "backend"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "    # Only connected to internal network"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      MYSQL_ROOT_PASSWORD_FILE"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/run/secrets/db_root_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    secrets"
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
            children: "db_root_password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    security_opt"
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
            children: "no-new-privileges:true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "secrets"
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
            children: "  db_root_password"
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
            children: "    file"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "./secrets/db_password.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This setup ensures that:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The database is completely isolated from external access"
      }), "\n", createVNode(_components.li, {
        children: "The API service can communicate with both web and database"
      }), "\n", createVNode(_components.li, {
        children: "All external access must go through localhost"
      }), "\n", createVNode(_components.li, {
        children: "Additional security measures like secrets and security options are implemented"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For more complex setups, you might want to implement additional security measures:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Network Segmentation:"
      }), "\n"]
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
            children: "networks"
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
            children: "  frontend"
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
            children: "    internal"
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    ipam"
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
            children: "      config"
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
            children: "        - "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "subnet"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "172.20.0.0/24"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  backend"
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
            children: "    internal"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    ipam"
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
            children: "      config"
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
            children: "        - "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "subnet"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "172.20.1.0/24"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Network Encryption (for swarm mode):"
      }), "\n"]
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
            children: "networks"
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
            children: "  backend"
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
            children: "    driver"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "overlay"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    driver_opts"
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
            children: "      encrypted"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"true\""
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "Rate Limiting with Traefik:"
      }), "\n"]
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
            children: "  web"
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
            children: "    labels"
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
            children: "\"traefik.http.middlewares.ratelimit.ratelimit.average=100\""
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
            children: "\"traefik.http.middlewares.ratelimit.ratelimit.burst=50\""
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: "Container Resource Limits:"
      }), "\n"]
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
            children: "  web"
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
            children: "    deploy"
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
            children: "      resources"
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
            children: "        limits"
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
            children: "          cpus"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'0.50'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "          memory"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "512M"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "        reservations"
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
            children: "          cpus"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'0.25'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "          memory"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "256M"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "When managing these networks, it’s important to regularly audit their configuration:"
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
            children: "# List all networks"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
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
            children: "# Inspect network configuration"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " inspect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " frontend"
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
            children: "# Check container connectivity"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " connect"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " test-network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " container-name"
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
            children: "# Monitor network usage"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " stats"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --format"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"table {{.Name}}\\t{{.NetIO}}\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Remember to periodically clean up unused networks:"
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
            children: "# Remove unused networks"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " prune"
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
            children: "# Remove specific network"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " network-name"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["When managing multiple containers, I also find it helpful to use ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/docker-compose-secrets/",
        children: "Docker Compose secrets"
      }), " for additional security."]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion-keeping-your-docker-containers-secure",
      children: "Conclusion: Keeping Your Docker Containers Secure"
    }), "\n", createVNode(_components.p, {
      children: "After spending considerable time learning about Docker’s networking quirks and implementing various security measures, I’ve realized that securing Docker containers isn’t as straightforward as it might seem at first. However, it’s definitely manageable once you understand what’s happening under the hood."
    }), "\n", createVNode(_components.p, {
      children: "Here’s what I’ve learned to be the most important takeaways:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Always Start with the Basics"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Bind containers to localhost when possible"
          }), "\n", createVNode(_components.li, {
            children: ["Use reverse proxies like ", createVNode(_components.a, {
              href: "https://www.bitdoze.com/traefik-proxy-docker/",
              children: "Traefik"
            }), " for external access"]
          }), "\n", createVNode(_components.li, {
            children: ["Regularly ", createVNode(_components.a, {
              href: "https://www.bitdoze.com/clean-docker-overlay2-dir/",
              children: "clean up unused Docker resources"
            }), " to maintain a clean, secure environment"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Layer Your Security"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Don’t rely on just one security measure"
          }), "\n", createVNode(_components.li, {
            children: "Combine host firewall rules with Docker network isolation"
          }), "\n", createVNode(_components.li, {
            children: "Consider using cloud firewalls as an additional security layer"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Best Practices I Now Follow"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Regularly audit exposed ports using ", createVNode(_components.code, {
              children: "docker ps"
            })]
          }), "\n", createVNode(_components.li, {
            children: "Keep Docker and containers updated"
          }), "\n", createVNode(_components.li, {
            children: ["Use the principle of least privilege when ", createVNode(_components.a, {
              href: "https://www.bitdoze.com/add-users-to-docker-container/",
              children: "managing Docker users"
            })]
          }), "\n", createVNode(_components.li, {
            children: ["Document all ", createVNode(_components.a, {
              href: "https://www.bitdoze.com/docker-commands/",
              children: "Docker commands"
            }), " and configurations for easy maintenance"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Remember, security is an ongoing process. I recommend regularly reviewing your Docker networking setup and firewall rules to ensure they’re still appropriate for your needs."
    }), "\n", createVNode(_components.p, {
      children: "A quick checklist I use for any new Docker deployment:"
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
            children: "# Check exposed ports"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " ps"
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
            children: "# Review network configurations"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " network"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
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
            children: "# Verify firewall rules"
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
            children: " iptables"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "grep"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DOCKER"
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
            children: "# Check Docker daemon configuration"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " info"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The most important thing I’ve learned is that while Docker’s default networking behavior might seem concerning at first, there are plenty of tools and techniques available to secure it properly. The key is understanding how these pieces fit together and implementing the right combination of security measures for your specific needs."
    }), "\n", createVNode(_components.p, {
      children: ["If you’re just getting started with Docker, you might want to check out how to ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/copy-multiple-files-in-one-layer-using-a-dockerfile/",
        children: "copy multiple files efficiently in Dockerfiles"
      }), " and other basic Docker concepts before diving deep into security configurations."]
    }), "\n", createVNode(_components.p, {
      children: "By following these guidelines and regularly reviewing your security setup, you can run Docker containers confidently while maintaining proper security controls. Remember, security isn’t about implementing every possible measure, but about choosing the right combination of tools and practices that work for your specific situation."
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

const url = "src/content/posts/docker-bypasses-firewall.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-bypasses-firewall.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/docker-bypasses-firewall.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
