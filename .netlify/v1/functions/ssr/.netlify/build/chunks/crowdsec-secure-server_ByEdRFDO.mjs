import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Image } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const __0_______assets_images_25_02_crowdsec1_png__ = new Proxy({"src":"/_astro/crowdsec1.DFJIyQyE.png","width":1492,"height":1300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/25/02/crowdsec1.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2025-02-06T00:00:00.000Z",
  "title": "How To Secure a VPS Sever with CrowdSec",
  "description": "Secure the VPS server by blocking firewall access with CrowdSec by monitoring SSH and Nginx logs.",
  "image": "../../assets/images/25/02/crowdsec-secure-server.jpg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux"],
  "canonical": "https://www.bitdoze.com/crowdsec-secure-server/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-crowdsec-and-how-can-it-help-you",
    "text": "What Is CrowdSec and How Can It Help You?"
  }, {
    "depth": 3,
    "slug": "understanding-crowdsec",
    "text": "Understanding CrowdSec"
  }, {
    "depth": 3,
    "slug": "benefits-of-using-crowdsec-for-securing-ssh",
    "text": "Benefits of Using CrowdSec for Securing SSH"
  }, {
    "depth": 3,
    "slug": "why-choose-crowdsec-over-alternatives",
    "text": "Why Choose CrowdSec Over Alternatives?"
  }, {
    "depth": 2,
    "slug": "install-crowdsec",
    "text": "Install CrowdSec"
  }, {
    "depth": 3,
    "slug": "step-1-add-the-crowdsec-repository",
    "text": "Step 1: Add the CrowdSec Repository"
  }, {
    "depth": 4,
    "slug": "expected-output",
    "text": "Expected Output:"
  }, {
    "depth": 3,
    "slug": "step-2-install-the-crowdsec-package",
    "text": "Step 2: Install the CrowdSec Package"
  }, {
    "depth": 4,
    "slug": "important-notes",
    "text": "Important Notes:"
  }, {
    "depth": 4,
    "slug": "sample-installation-output",
    "text": "Sample Installation Output:"
  }, {
    "depth": 3,
    "slug": "step-3-modify-api-port-if-necessary",
    "text": "Step 3: Modify API Port (If Necessary)"
  }, {
    "depth": 4,
    "slug": "example-output",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "step-4-list-installed-collections",
    "text": "Step 4: List Installed Collections"
  }, {
    "depth": 4,
    "slug": "example-output-1",
    "text": "Example Output:"
  }, {
    "depth": 2,
    "slug": "installing-the-first-remediation-component-firewall-bouncer",
    "text": "Installing the First Remediation Component (Firewall Bouncer)"
  }, {
    "depth": 3,
    "slug": "step-1-install-the-firewall-bouncer",
    "text": "Step 1: Install the Firewall Bouncer"
  }, {
    "depth": 4,
    "slug": "output-example",
    "text": "Output Example:"
  }, {
    "depth": 3,
    "slug": "step-2-verify-the-bouncer-installation",
    "text": "Step 2: Verify the Bouncer Installation"
  }, {
    "depth": 4,
    "slug": "example-output-2",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "step-3-how-the-firewall-bouncer-works",
    "text": "Step 3: How the Firewall Bouncer Works"
  }, {
    "depth": 3,
    "slug": "troubleshooting-installation-issues",
    "text": "Troubleshooting Installation Issues"
  }, {
    "depth": 3,
    "slug": "why-is-the-firewall-bouncer-important",
    "text": "Why Is the Firewall Bouncer Important?"
  }, {
    "depth": 2,
    "slug": "see-what-logs-are-monitored-by-crowdsec",
    "text": "See What Logs Are Monitored by CrowdSec"
  }, {
    "depth": 3,
    "slug": "viewing-the-log-files-monitored",
    "text": "Viewing the Log Files Monitored"
  }, {
    "depth": 4,
    "slug": "sample-output",
    "text": "Sample Output:"
  }, {
    "depth": 3,
    "slug": "log-files-used-by-crowdsec",
    "text": "Log Files Used by CrowdSec"
  }, {
    "depth": 3,
    "slug": "why-is-monitoring-logs-important",
    "text": "Why Is Monitoring Logs Important?"
  }, {
    "depth": 2,
    "slug": "linking-to-the-crowdsec-console-optional",
    "text": "Linking to the CrowdSec Console (Optional)"
  }, {
    "depth": 3,
    "slug": "why-use-the-crowdsec-console",
    "text": "Why Use the CrowdSec Console?"
  }, {
    "depth": 3,
    "slug": "how-to-connect-your-vps-to-the-crowdsec-console",
    "text": "How to Connect Your VPS to the CrowdSec Console"
  }, {
    "depth": 4,
    "slug": "step-1-create-a-crowdsec-account",
    "text": "Step 1: Create a CrowdSec Account"
  }, {
    "depth": 4,
    "slug": "step-2-generate-an-enrollment-token",
    "text": "Step 2: Generate an Enrollment Token"
  }, {
    "depth": 4,
    "slug": "step-3-enroll-your-vps-using-the-token",
    "text": "Step 3: Enroll Your VPS Using the Token"
  }, {
    "depth": 4,
    "slug": "sample-output-1",
    "text": "Sample Output:"
  }, {
    "depth": 4,
    "slug": "step-4-verify-enrollment",
    "text": "Step 4: Verify Enrollment"
  }, {
    "depth": 3,
    "slug": "benefits-of-using-the-console",
    "text": "Benefits of Using the Console"
  }, {
    "depth": 2,
    "slug": "monitoring-application-logs-eg-nginx",
    "text": "Monitoring Application Logs (e.g., Nginx)"
  }, {
    "depth": 3,
    "slug": "why-monitor-nginx-logs",
    "text": "Why Monitor Nginx Logs?"
  }, {
    "depth": 3,
    "slug": "step-1-install-the-nginx-collection",
    "text": "Step 1: Install the Nginx Collection"
  }, {
    "depth": 4,
    "slug": "example-output-3",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "step-2-update-the-acquisyaml-file",
    "text": "Step 2: Update the acquis.yaml File"
  }, {
    "depth": 3,
    "slug": "step-3-restart-the-crowdsec-service",
    "text": "Step 3: Restart the CrowdSec Service"
  }, {
    "depth": 3,
    "slug": "step-4-verify-functionality",
    "text": "Step 4: Verify Functionality"
  }, {
    "depth": 3,
    "slug": "example-scenarios-for-nginx-monitoring",
    "text": "Example Scenarios for Nginx Monitoring"
  }, {
    "depth": 2,
    "slug": "useful-crowdsec-commands",
    "text": "Useful CrowdSec Commands"
  }, {
    "depth": 3,
    "slug": "1-view-active-decisions-current-blocksbans",
    "text": "1. View Active Decisions (Current Blocks/Bans)"
  }, {
    "depth": 4,
    "slug": "example-output-4",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "2-check-recent-alerts",
    "text": "2. Check Recent Alerts"
  }, {
    "depth": 4,
    "slug": "example-output-5",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "3-view-security-metrics",
    "text": "3. View Security Metrics"
  }, {
    "depth": 4,
    "slug": "example-output-6",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "4-monitor-logs-in-real-time",
    "text": "4. Monitor Logs in Real Time"
  }, {
    "depth": 3,
    "slug": "5-list-active-detection-scenarios",
    "text": "5. List Active Detection Scenarios"
  }, {
    "depth": 4,
    "slug": "example-output-7",
    "text": "Example Output:"
  }, {
    "depth": 3,
    "slug": "6-add-or-remove-a-block-manually",
    "text": "6. Add or Remove a Block Manually"
  }, {
    "depth": 3,
    "slug": "7-unblock-an-ip",
    "text": "7. Unblock an IP"
  }, {
    "depth": 3,
    "slug": "summary-of-useful-commands",
    "text": "Summary of Useful Commands"
  }, {
    "depth": 3,
    "slug": "practical-usage-scenarios",
    "text": "Practical Usage Scenarios"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["This tutorial focuses on securing your SSH access using ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://www.crowdsec.net/",
          children: "CrowdSec"
        })
      }), ", a modern, collaborative security solution designed to protect against various attack vectors, including those targeting VPS servers. Unlike traditional security tools, CrowdSec combines log analysis, behavior detection, and community-driven threat intelligence to proactively block suspicious activity while sharing insights across its user base."]
    }), "\n", createVNode(_components.p, {
      children: "In this guide, you’ll learn:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Why securing SSH is critical for your server’s health and data integrity."
      }), "\n", createVNode(_components.li, {
        children: "What makes CrowdSec a standout security tool."
      }), "\n", createVNode(_components.li, {
        children: "How to install and configure CrowdSec on your VPS."
      }), "\n", createVNode(_components.li, {
        children: "Ways to monitor and analyze server logs, extend protection to other applications like Nginx, and link to the CrowdSec Console for centralized management."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Whether you’re a developer managing multiple servers or a small business owner hosting applications online, CrowdSec offers a reliable and straightforward way to enhance your security posture. This tutorial breaks down every step so you can follow along with confidence, even without extensive prior experience."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-crowdsec-and-how-can-it-help-you",
      children: createVNode(_components.strong, {
        children: "What Is CrowdSec and How Can It Help You?"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "understanding-crowdsec",
      children: "Understanding CrowdSec"
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec is an open-source, collaborative intrusion prevention system (IPS) designed to protect servers, services, and applications from malicious activities. It works by analyzing system logs, detecting suspicious patterns, and enabling proactive defense mechanisms. Unlike traditional security tools, CrowdSec actively shares threat intelligence with its global user community, allowing it to build a constantly evolving database of malicious IP addresses."
    }), "\n", createVNode(_components.p, {
      children: "Here’s what makes CrowdSec a unique and powerful tool:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Log Analysis:"
        }), " CrowdSec parses and analyzes logs from various sources like SSH, Nginx, and custom applications."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-time Remediation:"
        }), " It uses “bouncers” (remediation components) to automatically block malicious IPs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Collaborative Threat Intelligence:"
        }), " CrowdSec leverages a community-driven model where users share anonymized attack data to improve overall global security."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Understanding CrowdSec",
        src: __0_______assets_images_25_02_crowdsec1_png__
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What Problem Does CrowdSec Solve?"
      }), "\r\nCyberattacks such as brute force, Distributed Denial of Service (DDoS), and credential stuffing are increasing in sophistication. While firewalls and intrusion detection systems (IDS) are helpful, they often lack real-time adaptability or community-sourced intelligence. CrowdSec not only detects these attacks but also provides actionable responses and leverages insights from other users to bolster your defenses."]
    }), "\n", createVNode(_components.h3, {
      id: "benefits-of-using-crowdsec-for-securing-ssh",
      children: "Benefits of Using CrowdSec for Securing SSH"
    }), "\n", createVNode(_components.p, {
      children: "If your VPS uses SSH for remote access, leaving it unprotected can lead to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Unauthorized access via brute force attacks."
      }), "\n", createVNode(_components.li, {
        children: "Exploitation of known vulnerabilities in outdated SSH configurations."
      }), "\n", createVNode(_components.li, {
        children: "Server compromise leading to data loss or service disruption."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec enhances SSH security by:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Detecting Intrusions:"
        }), " Analyzing SSH attempt logs and identifying patterns like failed login attempts."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Blocking Threats:"
        }), " Using remediation tools (like the Firewall Bouncer) to block malicious IPs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Providing Visibility:"
        }), " Offering detailed metrics and logs for monitoring failed attempts and remediation outcomes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Adapting Dynamically:"
        }), " Updating its detection rules automatically through its community-driven hub."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-choose-crowdsec-over-alternatives",
      children: "Why Choose CrowdSec Over Alternatives?"
    }), "\n", createVNode(_components.p, {
      children: "Here’s how CrowdSec compares to other security tools:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Feature"
          }), createVNode(_components.th, {
            children: "CrowdSec"
          }), createVNode(_components.th, {
            children: "Fail2Ban"
          }), createVNode(_components.th, {
            children: "Traditional Firewalls"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Community Intelligence"
            })
          }), createVNode(_components.td, {
            children: "✔️ Global threat sharing"
          }), createVNode(_components.td, {
            children: "❌ None"
          }), createVNode(_components.td, {
            children: "❌ None"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Ease of Use"
            })
          }), createVNode(_components.td, {
            children: "✔️ Simple configuration"
          }), createVNode(_components.td, {
            children: "✔️ Moderate complexity"
          }), createVNode(_components.td, {
            children: "❌ Manual configuration required"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Multi-service Support"
            })
          }), createVNode(_components.td, {
            children: "✔️ Supports many services"
          }), createVNode(_components.td, {
            children: "✔️ Limited (e.g., SSH only)"
          }), createVNode(_components.td, {
            children: "✔️ Generic (ports only)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Scalability"
            })
          }), createVNode(_components.td, {
            children: "✔️ Cloud-friendly"
          }), createVNode(_components.td, {
            children: "✔️ Local VPS only"
          }), createVNode(_components.td, {
            children: "✔️ Network-based"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Real-time Blocking"
            })
          }), createVNode(_components.td, {
            children: "✔️ Fast with bouncers"
          }), createVNode(_components.td, {
            children: "✔️ Moderate"
          }), createVNode(_components.td, {
            children: "❌ Reactive only"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "By opting for CrowdSec, you not only protect your VPS but also contribute to a larger global effort to fight cyber threats. It’s an excellent choice for developers, system administrators, and businesses looking for cost-effective, scalable, and collaborative security solutions."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/9y6i2XjCVAw",
      label: "CrowdSec Install"
    }), "\n", createVNode(_components.h2, {
      id: "install-crowdsec",
      children: "Install CrowdSec"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Installing CrowdSec on your VPS is a straightforward process that involves adding a repository, installing the package, and configuring it to monitor logs. Below is a detailed step-by-step guide to help you get started."
    }), "\n", createVNode(_components.h3, {
      id: "step-1-add-the-crowdsec-repository",
      children: "Step 1: Add the CrowdSec Repository"
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec can be installed using its package repository for most Linux distributions. Add the repository by running the following command:"
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
            children: "curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://install.crowdsec.net"
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
            children: " sh"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "expected-output",
      children: "Expected Output:"
    }), "\n", createVNode(_components.p, {
      children: "Your system should respond with the following information, confirming the repository was successfully added:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Detected operating system as ubuntu/22."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Detected apt version as 2.4.13"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Checking for gpg..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Detected gpg..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Installing /etc/apt/sources.list.d/crowdsec_crowdsec.list..."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This command imports the necessary GPG keys and sets up the CrowdSec repository."
    }), "\n", createVNode(_components.h3, {
      id: "step-2-install-the-crowdsec-package",
      children: "Step 2: Install the CrowdSec Package"
    }), "\n", createVNode(_components.p, {
      children: "Once the repository is added, update your package index and install the CrowdSec package:"
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
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crowdsec"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "important-notes",
      children: "Important Notes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Port Usage Warning:"
        }), " CrowdSec’s local API uses ", createVNode(_components.strong, {
          children: "port 8080"
        }), " by default. Before proceeding, ensure the port is not already in use by checking with:\n", createVNode(_components.pre, {
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
                children: "netstat"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -tulpn"
              })]
            })
          })
        }), "\nIf port 8080 is busy, you can modify the configuration later (explained below)."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "sample-installation-output",
      children: "Sample Installation Output:"
    }), "\n", createVNode(_components.p, {
      children: "Here’s an example of what you might see during installation:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Need to get 60.9 MB of archives."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "After this operation, 249 MB of additional disk space will be used."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Setting up crowdsec (1.6.4) ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Machine successfully added to the local API."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "API credentials written to '/etc/crowdsec/local_api_credentials.yaml'."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Not attempting to start crowdsec, port 8080 is already used or lapi was disabled."
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-3-modify-api-port-if-necessary",
      children: "Step 3: Modify API Port (If Necessary)"
    }), "\n", createVNode(_components.p, {
      children: "If you encounter the error stating that port 8080 is in use, you’ll need to edit CrowdSec’s configuration files to change the default API port. Here’s a quick guide:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Open the configuration files for editing:\n", createVNode(_components.pre, {
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
                children: " nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/crowdsec/config.yaml"
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
                children: " nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/crowdsec/local_api_credentials.yaml"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Change the ", createVNode(_components.code, {
          children: "listen_uri"
        }), " under ", createVNode(_components.code, {
          children: "api"
        }), " to a different port, such as 8081:\n", createVNode(_components.pre, {
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
            children: createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "listen_uri"
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "127.0.0.1:8081"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Save the files and restart CrowdSec:\n", createVNode(_components.pre, {
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
                children: " service"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " crowdsec"
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
                children: "sudo"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " service"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " crowdsec"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " status"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Once updated, the service should run successfully, and you can verify its status with:"
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
            children: " service"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crowdsec"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " status"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output",
      children: "Example Output:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "● crowdsec.service - Crowdsec agent"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "     Loaded: loaded (/lib/systemd/system/crowdsec.service; enabled; vendor preset: enabled)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "     Active: active (running) since Thu 2025-02-06 06:52:02 UTC; 5s ago"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-4-list-installed-collections",
      children: "Step 4: List Installed Collections"
    }), "\n", createVNode(_components.p, {
      children: "After installation, CrowdSec automatically installs collections to monitor key services like SSH. To check the collections in use, run:"
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " collections"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output-1",
      children: "Example Output:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "COLLECTIONS"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " Name                               📦 Status    Version  Local Path"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "─────────────────────────────────────────────────────────────────────"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " crowdsecurity/linux                ✔️  enabled  0.2      ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " crowdsecurity/sshd                 ✔️  enabled  0.5      ..."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "crowdsecurity/sshd"
      }), " collection indicates SSH monitoring is active."]
    }), "\n", createVNode(_components.p, {
      children: "With CrowdSec installed and running, your VPS is now set up to detect and analyze potential threats targeting your SSH and other services."
    }), "\n", createVNode(_components.h2, {
      id: "installing-the-first-remediation-component-firewall-bouncer",
      children: "Installing the First Remediation Component (Firewall Bouncer)"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["CrowdSec relies on remediation components called “bouncers” to block malicious actors based on detected attack patterns. The ", createVNode(_components.strong, {
        children: "firewall bouncer"
      }), " is one of the most critical components for enhancing your VPS’s security since it works with your server’s firewall to block IPs flagged by CrowdSec."]
    }), "\n", createVNode(_components.p, {
      children: "Here’s how to install and verify the firewall bouncer:"
    }), "\n", createVNode(_components.h3, {
      id: "step-1-install-the-firewall-bouncer",
      children: "Step 1: Install the Firewall Bouncer"
    }), "\n", createVNode(_components.p, {
      children: ["To install the ", createVNode(_components.code, {
        children: "iptables"
      }), " firewall bouncer with CrowdSec, run the following command:"]
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
            children: " crowdsec-firewall-bouncer-iptables"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "output-example",
      children: "Output Example:"
    }), "\n", createVNode(_components.p, {
      children: "When the installation completes, you’ll see something like this:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "The following NEW packages will be installed:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  crowdsec-firewall-bouncer-iptables"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0 upgraded, 1 newly installed, 0 to remove and 4 not upgraded."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Setting up crowdsec-firewall-bouncer (0.0.31) ..."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The bouncer is now integrated into your system and ready to block malicious IPs."
    }), "\n", createVNode(_components.h3, {
      id: "step-2-verify-the-bouncer-installation",
      children: "Step 2: Verify the Bouncer Installation"
    }), "\n", createVNode(_components.p, {
      children: "After installation, check the firewall bouncer’s status and confirm it’s operating correctly:"
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bouncers"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output-2",
      children: "Example Output:"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "╭───────────────────────────────────────────────────────────────────────────────────────────────────────────────╮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ Name                            IP Address  Valid  Last API pull         Type                       Version    │"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├───────────────────────────────────────────────────────────────────────────────────────────────────────────────┤"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ cs-firewall-bouncer-1738824978  127.0.0.1   ✔️    2025-02-06T06:57:35Z  crowdsec-firewall-bouncer  v0.0.31    │"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────╯"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Key details in the output:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Name:"
        }), " The unique identifier of the bouncer."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " Indicates this is the ", createVNode(_components.code, {
          children: "crowdsec-firewall-bouncer"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Status:"
        }), " ", createVNode(_components.code, {
          children: "Valid"
        }), " confirms the bouncer is active."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Last API pull:"
        }), " Shows when the bouncer last synced with the CrowdSec engine."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3-how-the-firewall-bouncer-works",
      children: "Step 3: How the Firewall Bouncer Works"
    }), "\n", createVNode(_components.p, {
      children: ["The firewall bouncer automatically updates your firewall rules with decisions made by CrowdSec. For example, if a brute-force attack is detected on your SSH port, the bouncer will add the attacker’s IP to the blocking rules in ", createVNode(_components.code, {
        children: "iptables"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "You can manually verify the active firewall rules with:"
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
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "troubleshooting-installation-issues",
      children: "Troubleshooting Installation Issues"
    }), "\n", createVNode(_components.p, {
      children: ["If the firewall bouncer doesn’t appear in the ", createVNode(_components.code, {
        children: "cscli bouncers list"
      }), " output or isn’t working correctly:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Restart the bouncer service:"
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
                children: " systemctl"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " restart"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " crowdsec-firewall-bouncer"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the logs for errors:"
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
                children: " tail"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -f"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/log/crowdsec-firewall-bouncer.log"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-is-the-firewall-bouncer-important",
      children: "Why Is the Firewall Bouncer Important?"
    }), "\n", createVNode(_components.p, {
      children: "The firewall bouncer ensures that CrowdSec not only detects malicious activity but also takes immediate action to mitigate threats. It’s particularly effective in:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Blocking brute force attempts on SSH."
      }), "\n", createVNode(_components.li, {
        children: "Stopping known malicious IPs based on community-shared data."
      }), "\n", createVNode(_components.li, {
        children: "Protecting other services like Nginx when integrated with appropriate configurations."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By enabling the firewall bouncer, you’re taking the most critical step in actively defending your VPS from real-time attacks."
    }), "\n", createVNode(_components.h2, {
      id: "see-what-logs-are-monitored-by-crowdsec",
      children: "See What Logs Are Monitored by CrowdSec"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "CrowdSec is designed to analyze logs from various sources on your server to detect suspicious patterns and potential attacks. Upon installation, CrowdSec includes default collections for commonly used services, such as SSH and Nginx. These collections specify which log files CrowdSec monitors and define the detection scenarios for each service."
    }), "\n", createVNode(_components.h3, {
      id: "viewing-the-log-files-monitored",
      children: "Viewing the Log Files Monitored"
    }), "\n", createVNode(_components.p, {
      children: ["CrowdSec creates and uses a file called ", createVNode(_components.code, {
        children: "acquis.yaml"
      }), " to configure the log files it monitors. You can inspect this file to see the services and log locations that CrowdSec is currently set up to analyze."]
    }), "\n", createVNode(_components.p, {
      children: "Run the following command to view the log monitoring configuration:"
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
            children: " /etc/crowdsec/acquis.yaml"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "sample-output",
      children: "Sample Output:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Generated acquisition file - wizard.sh (service: nginx) / files : /var/log/nginx/error.log"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "filenames"
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
            children: "  - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/var/log/nginx/error.log"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "labels"
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
            children: "  type"
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
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Generated acquisition file - wizard.sh (service: ssh) / files :"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "journalctl_filter"
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
            children: "  - "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "_SYSTEMD_UNIT=ssh.service"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "labels"
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
            children: "  type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "syslog"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "---"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "From this example, you can see that CrowdSec is configured to monitor:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nginx logs:"
        }), " Located in ", createVNode(_components.code, {
          children: "/var/log/nginx/error.log"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "SSH logs:"
        }), " Captured from journald using the ", createVNode(_components.code, {
          children: "_SYSTEMD_UNIT=ssh.service"
        }), " filter."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This means CrowdSec will automatically analyze logs from these sources to detect scenarios such as brute force attacks, suspicious behavior, or repeated access failures."
    }), "\n", createVNode(_components.h3, {
      id: "log-files-used-by-crowdsec",
      children: "Log Files Used by CrowdSec"
    }), "\n", createVNode(_components.p, {
      children: ["CrowdSec itself generates its own set of logs to help you monitor its performance and functionality. These logs are stored in ", createVNode(_components.code, {
        children: "/var/log/"
      }), " and include the following files:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "File"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "Purpose"
            })
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "/var/log/crowdsec.log"
            })
          }), createVNode(_components.td, {
            children: "Primary log for CrowdSec’s main engine."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "/var/log/crowdsec_api.log"
            })
          }), createVNode(_components.td, {
            children: "Logs related to the CrowdSec API."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "/var/log/crowdsec-firewall-bouncer.log"
            })
          }), createVNode(_components.td, {
            children: "Logs for the firewall bouncer performance."
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "To view these logs, use commands like:"
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
            children: " tail"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/log/crowdsec.log"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "why-is-monitoring-logs-important",
      children: "Why Is Monitoring Logs Important?"
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec’s ability to monitor logs is the foundation of its detection and response capabilities. By analyzing logs from services like SSH and Nginx, it can:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Detect brute force attacks and other suspicious patterns."
      }), "\n", createVNode(_components.li, {
        children: "Share anonymized attack data with the global CrowdSec network to improve the community database."
      }), "\n", createVNode(_components.li, {
        children: "Generate actionable remediation decisions (e.g., banning IPs)."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Keeping an eye on what logs are being monitored ensures that your server is fully protected and that no critical service is left unguarded."
    }), "\n", createVNode(_components.h2, {
      id: "linking-to-the-crowdsec-console-optional",
      children: "Linking to the CrowdSec Console (Optional)"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["One of the standout features of CrowdSec is the ", createVNode(_components.strong, {
        children: "CrowdSec Console"
      }), ", a cloud-based dashboard that provides insights into your server’s security performance. The console offers centralized management, detailed attack visualization, and aggregated metrics, making it easier to monitor security events across different systems or environments."]
    }), "\n", createVNode(_components.h3, {
      id: "why-use-the-crowdsec-console",
      children: "Why Use the CrowdSec Console?"
    }), "\n", createVNode(_components.p, {
      children: "While the local CrowdSec installation provides powerful detection and remediation capabilities, the CrowdSec Console adds the following benefits:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Graphical Data Insights:"
        }), " Visualize attack patterns and blocked threats in an intuitive, graphical format."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Centralized Monitoring:"
        }), " Manage multiple CrowdSec instances across different servers from a single dashboard."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Community Intelligence:"
        }), " View global attack trends based on community-shared intelligence."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Easy Bouncer Management:"
        }), " Track and manage all active bouncers from one place."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The console is free and highly valuable for developers, system administrators, and small businesses."
    }), "\n", createVNode(_components.h3, {
      id: "how-to-connect-your-vps-to-the-crowdsec-console",
      children: "How to Connect Your VPS to the CrowdSec Console"
    }), "\n", createVNode(_components.h4, {
      id: "step-1-create-a-crowdsec-account",
      children: "Step 1: Create a CrowdSec Account"
    }), "\n", createVNode(_components.p, {
      children: ["Visit the official ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://app.crowdsec.net/signup",
          children: "CrowdSec Console signup page"
        })
      }), " to create a free account. You’ll need an email address to register."]
    }), "\n", createVNode(_components.p, {
      children: "Once logged in, you’ll gain access to the CrowdSec Console dashboard. From there, follow the steps below to enroll your server."
    }), "\n", createVNode(_components.h4, {
      id: "step-2-generate-an-enrollment-token",
      children: "Step 2: Generate an Enrollment Token"
    }), "\n", createVNode(_components.p, {
      children: ["To connect a CrowdSec instance (your VPS) to the console, you’ll need an enrollment token. Generate this token from the ", createVNode(_components.strong, {
        children: "Security Engines"
      }), " section of the console dashboard:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Log in to the CrowdSec Console."
      }), "\n", createVNode(_components.li, {
        children: ["Navigate to ", createVNode(_components.strong, {
          children: "Security Engines"
        }), " → ", createVNode(_components.strong, {
          children: "Engines"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Click on ", createVNode(_components.strong, {
          children: "Generate Enrollment Token"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Copy the generated token. You’ll need this in the next step."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "step-3-enroll-your-vps-using-the-token",
      children: "Step 3: Enroll Your VPS Using the Token"
    }), "\n", createVNode(_components.p, {
      children: ["Log in to your VPS and execute the following command, replacing ", createVNode(_components.code, {
        children: "<your-enrollment-token>"
      }), " with the token you copied earlier:"]
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " console"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " enroll"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "your-enrollment-toke"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "n>"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "sample-output-1",
      children: "Sample Output:"
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
            children: "INFO[01-10-2025"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 16:57:08]"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Successfully"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " enrolled"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " machine"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'my-vps.example.com'"
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
            children: " Console"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "step-4-verify-enrollment",
      children: "Step 4: Verify Enrollment"
    }), "\n", createVNode(_components.p, {
      children: ["After enrolling, return to the CrowdSec Console and navigate back to the ", createVNode(_components.strong, {
        children: "Engines"
      }), " section. You should see your VPS listed as an active engine."]
    }), "\n", createVNode(_components.h3, {
      id: "benefits-of-using-the-console",
      children: "Benefits of Using the Console"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-Time Alerts:"
        }), " Monitor active alerts and attacks in real time, directly from your browser."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Attack Trends:"
        }), " Understand how often your server is targeted and what type of attacks are most common."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Performance Metrics:"
        }), " Track how well CrowdSec is mitigating threats over time."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Centralized Configuration:"
        }), " Manage configurations and adjust detection scenarios for all your CrowdSec-enabled servers from one interface."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Here’s an example of what the CrowdSec Console’s overview might look like:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "Metric"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "Description"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "Example Insight"
            })
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Top IPs Blocked"
            })
          }), createVNode(_components.td, {
            children: "Shows the most frequently banned IPs."
          }), createVNode(_components.td, {
            children: "”IP X.X.X.X blocked 200 times in 24 hours.”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Attack Trends"
            })
          }), createVNode(_components.td, {
            children: "Displays common attack types."
          }), createVNode(_components.td, {
            children: "”60% of attacks in past week were SSH brute force.”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Event Timeline"
            })
          }), createVNode(_components.td, {
            children: "Visualizes when attacks occurred."
          }), createVNode(_components.td, {
            children: "”Spike of 1,000 attacks at 2 a.m. yesterday.”"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Global Intelligence"
            })
          }), createVNode(_components.td, {
            children: "Community-sourced blocklists."
          }), createVNode(_components.td, {
            children: "”50 IPs globally flagged for DoS attacks.”"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "monitoring-application-logs-eg-nginx",
      children: "Monitoring Application Logs (e.g., Nginx)"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "CrowdSec can monitor your application-specific logs, such as those from Nginx, Apache, or custom services, to detect and prevent attacks on web applications. This functionality ensures your entire server stack is secured, not just SSH. By analyzing logs from applications like Nginx, CrowdSec can detect patterns like bot attacks, vulnerability probes, or exploitation attempts."
    }), "\n", createVNode(_components.h3, {
      id: "why-monitor-nginx-logs",
      children: "Why Monitor Nginx Logs?"
    }), "\n", createVNode(_components.p, {
      children: "Nginx is a common web server used by many VPS setups to host websites and applications. Monitoring Nginx logs with CrowdSec adds the following benefits:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Detect Web Attacks:"
        }), " Identify bots, vulnerability scanners, SQL injection attempts, and other malicious activities."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Block Suspicious IPs:"
        }), " CrowdSec can instantly issue bans based on log analysis, stopping attackers before they cause harm."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Centralized Protection:"
        }), " Combine Nginx log monitoring with SSH and other logs for all-in-one remediation."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-1-install-the-nginx-collection",
      children: "Step 1: Install the Nginx Collection"
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec uses predefined “collections” to analyze specific log types. If the Nginx collection is not already installed, you can add it with the following command:"
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " collections"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crowdsecurity/nginx"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This collection includes detection scenarios tailored for Nginx logs, such as identifying SQL injection probes, directory traversal attempts, or bad user agents."
    }), "\n", createVNode(_components.h4, {
      id: "example-output-3",
      children: "Example Output:"
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
            children: "INFO[06-02-2025"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 07:00:02]"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crowdsecurity/nginx"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " installed"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " successfully"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-2-update-the-acquisyaml-file",
      children: ["Step 2: Update the ", createVNode(_components.code, {
        children: "acquis.yaml"
      }), " File"]
    }), "\n", createVNode(_components.p, {
      children: ["To enable CrowdSec to monitor your Nginx logs, you need to add their file paths to the configuration file located at ", createVNode(_components.code, {
        children: "/etc/crowdsec/acquis.yaml"
      }), ":"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Open the file for editing:"
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
                children: " vi"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/crowdsec/acquis.yaml"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Add the following entries under the ", createVNode(_components.code, {
            children: "filenames"
          }), " section for Nginx logs:"]
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
                children: "filenames"
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
                children: "  - "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "/var/log/nginx/error.log"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "  - "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "/home/*/logs/nginx/*.log"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E06C75"
                },
                children: "labels"
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
                children: "  type"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "---"
              })
            })]
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["The first path (", createVNode(_components.code, {
              children: "/var/log/nginx/error.log"
            }), ") includes the default error log for Nginx."]
          }), "\n", createVNode(_components.li, {
            children: ["The second path (", createVNode(_components.code, {
              children: "/home/*/logs/nginx/*.log"
            }), ") allows for monitoring additional application-specific logs (e.g., virtual hosts)."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Save and exit the file."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3-restart-the-crowdsec-service",
      children: "Step 3: Restart the CrowdSec Service"
    }), "\n", createVNode(_components.p, {
      children: "After updating the configuration, restart the CrowdSec service to apply the changes:"
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
            children: " systemctl"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " restart"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crowdsec"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-4-verify-functionality",
      children: "Step 4: Verify Functionality"
    }), "\n", createVNode(_components.p, {
      children: "To ensure that CrowdSec is actively monitoring Nginx logs:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Tail the CrowdSec logs in real time to see if it’s processing Nginx logs correctly:"
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
                children: " tail"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -f"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /var/log/crowdsec.log"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Check for alerts or decisions related to Nginx:"
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
                children: " cscli"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " alerts"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " list"
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
                children: " cscli"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " decisions"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " list"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If everything is working correctly, you will see entries related to Nginx logs, such as blocked IPs or detected attack scenarios."
    }), "\n", createVNode(_components.h3, {
      id: "example-scenarios-for-nginx-monitoring",
      children: "Example Scenarios for Nginx Monitoring"
    }), "\n", createVNode(_components.p, {
      children: "When you enable Nginx log monitoring, CrowdSec can detect and mitigate the following attack types:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "SQL Injection Probes:"
        }), " Attempts to exploit database vulnerabilities."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Directory Traversal Attacks:"
        }), " Malicious requests designed to access unauthorized files or directories."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bad User Agents:"
        }), " Bots or scrapers with malicious intent."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rate Limiting Violations:"
        }), " Excessive request patterns from abusive IPs."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By monitoring Nginx logs with CrowdSec, you extend protection to your web applications, ensuring that both your server infrastructure and hosted services are secure."
    }), "\n", createVNode(_components.h2, {
      id: "useful-crowdsec-commands",
      children: "Useful CrowdSec Commands"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "After installing and configuring CrowdSec, it’s crucial to know how to monitor its activity, manage alerts and bans, and optimize its effectiveness. This section provides a breakdown of the most useful CrowdSec commands, empowering you to stay on top of your server’s security."
    }), "\n", createVNode(_components.h3, {
      id: "1-view-active-decisions-current-blocksbans",
      children: createVNode(_components.strong, {
        children: "1. View Active Decisions (Current Blocks/Bans)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "decisions list"
      }), " command shows all IPs currently being blocked by CrowdSec."]
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " decisions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output-4",
      children: "Example Output:"
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
              color: "#61AFEF"
            },
            children: "╭────────────┬─────────────┬────────────┬──────────────╮"
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
            children: "  IP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Reason"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Action"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Expires"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " at"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├────────────┼─────────────┼────────────┼──────────────┤"
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
            children: " 192.168.1.1│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ssh-bf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ban"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2025-02-06T12:00:00Z"
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
            children: " 203.0.113.5│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nginx-bot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ban"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2025-02-06T23:59:59Z"
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
            children: "╰────────────┴─────────────┴────────────┴──────────────╯"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "IP:"
        }), " The IP address being blocked."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reason:"
        }), " Cause of the block (e.g., SSH brute force)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Action:"
        }), " The remediation applied (e.g., ban)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Expires at:"
        }), " The time when the block will expire."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This command is helpful for reviewing which IPs are actively banned and why they were blocked."
    }), "\n", createVNode(_components.h3, {
      id: "2-check-recent-alerts",
      children: createVNode(_components.strong, {
        children: "2. Check Recent Alerts"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "alerts list"
      }), " command displays recent security alerts generated by CrowdSec. Alerts are triggered by detection scenarios and may result in bans or other actions."]
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " alerts"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output-5",
      children: "Example Output:"
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
              color: "#61AFEF"
            },
            children: "╭───────┬───────────────────┬────────────────────┬──────────────╮"
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
            children: "  ID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Scenario"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Source"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " IP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Created"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " at"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├───────┼───────────────────┼────────────────────┼──────────────┤"
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
            children: "   1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ssh-bf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 203.0.113.5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2025-02-06"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
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
              color: "#D19A66"
            },
            children: "   2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nginx-bad-user-agent"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 198.51.100.10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2025-02-06"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "╰───────┴───────────────────┴────────────────────┴──────────────╯"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Scenario:"
        }), " The attack type detected (e.g., ", createVNode(_components.code, {
          children: "ssh-bf"
        }), " for SSH brute force)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Source IP:"
        }), " The IP address responsible for the attack."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Created at:"
        }), " When the alert was triggered."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Use this to investigate suspicious activity and identify trends in attack attempts."
    }), "\n", createVNode(_components.h3, {
      id: "3-view-security-metrics",
      children: createVNode(_components.strong, {
        children: "3. View Security Metrics"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "metrics"
      }), " command gives an overview of CrowdSec’s activity, including parsed log files, detected threats, and actions taken."]
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " metrics"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output-6",
      children: "Example Output:"
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
            children: "Local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " API"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Alerts:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "╭───────────────────────────┬───────╮"
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
            children: " Reason"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                    │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Count"
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
            children: "├───────────────────────────┼───────┤"
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
            children: " crowdsecurity/ssh-bf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 15"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
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
            children: " crowdsecurity/nginx-bot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "╰───────────────────────────┴───────╯"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Bouncer"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Metrics:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "╭────────────────────────────┬──────────────────┬───────────╮"
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
            children: " Origin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                     │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Active"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Decisions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Dropped"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├────────────────────────────┼──────────────────┼───────────┤"
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
            children: " crowdsecurity"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (engine)     │ 22               │ 14.5k     │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "╰────────────────────────────┴──────────────────┴───────────╯"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This command provides clear insight into how many attacks were detected, blocked, and their source."
    }), "\n", createVNode(_components.h3, {
      id: "4-monitor-logs-in-real-time",
      children: createVNode(_components.strong, {
        children: "4. Monitor Logs in Real Time"
      })
    }), "\n", createVNode(_components.p, {
      children: ["To watch CrowdSec in action, use the ", createVNode(_components.strong, {
        children: "tail"
      }), " command to view log entries as they are being processed."]
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
            children: " tail"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/log/crowdsec.log"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This is especially useful for troubleshooting and for seeing real-time detection events."
    }), "\n", createVNode(_components.h3, {
      id: "5-list-active-detection-scenarios",
      children: createVNode(_components.strong, {
        children: "5. List Active Detection Scenarios"
      })
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec uses predefined “scenarios” (detection rules) to identify suspicious behavior. To see which scenarios are currently enabled on your system, use:"
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scenarios"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "example-output-7",
      children: "Example Output:"
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
              color: "#61AFEF"
            },
            children: "╭───────────────────────────────┬────────╮"
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
            children: " Name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                          │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Status"
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
            children: "├───────────────────────────────┼────────┤"
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
            children: " crowdsecurity/ssh-bf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔️"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " enabled"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
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
            children: " crowdsecurity/nginx-bad-user-agent"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔️"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " enabled"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
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
            children: " crowdsecurity/http-crawl-non_statics"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ✔️"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " enabled"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  │"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "╰───────────────────────────────┴────────╯"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This ensures that CrowdSec is configured to detect relevant types of attacks, such as SSH brute force and web application abuse."
    }), "\n", createVNode(_components.h3, {
      id: "6-add-or-remove-a-block-manually",
      children: createVNode(_components.strong, {
        children: "6. Add or Remove a Block Manually"
      })
    }), "\n", createVNode(_components.p, {
      children: "You can manually add or remove an IP block using CrowdSec. This is useful if you want to preemptively block a known bad actor or whitelist a trusted IP."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Add a Manual Block:"
      })
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " decisions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
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
            children: "I"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "-t"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ban"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -r"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Manual ban\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Remove a Block:"
      })
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " decisions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " delete"
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
            children: "I"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P>"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "7-unblock-an-ip",
      children: createVNode(_components.strong, {
        children: "7. Unblock an IP"
      })
    }), "\n", createVNode(_components.p, {
      children: "If you need to remove a block for a specific IP address (e.g., if it was mistakenly added), you can do so with:"
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
            children: " cscli"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " decisions"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " delete"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --ip"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "I"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P>"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "summary-of-useful-commands",
      children: "Summary of Useful Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "Command"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.strong, {
              children: "Purpose"
            })
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo cscli decisions list"
            })
          }), createVNode(_components.td, {
            children: "List all active bans and blocks."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo cscli alerts list"
            })
          }), createVNode(_components.td, {
            children: "View recent alerts triggered by attacks."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo cscli metrics"
            })
          }), createVNode(_components.td, {
            children: "Display security metrics and performance."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo tail -f /var/log/crowdsec.log"
            })
          }), createVNode(_components.td, {
            children: "Watch logs and detections in real time."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo cscli scenarios list"
            })
          }), createVNode(_components.td, {
            children: "Show all active detection scenarios."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo cscli decisions add"
            })
          }), createVNode(_components.td, {
            children: "Manually block specific IPs."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "sudo cscli decisions delete"
            })
          }), createVNode(_components.td, {
            children: "Remove a block for a specific IP."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "practical-usage-scenarios",
      children: "Practical Usage Scenarios"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Daily Monitoring:"
        }), " Use ", createVNode(_components.code, {
          children: "cscli alerts list"
        }), " and ", createVNode(_components.code, {
          children: "cscli decisions list"
        }), " to check for recent activity and blocks."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Investigating Attacks:"
        }), " Use ", createVNode(_components.code, {
          children: "cscli metrics"
        }), " to analyze attack trends and identify patterns."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Troubleshooting Issues:"
        }), " Use ", createVNode(_components.code, {
          children: "tail -f /var/log/crowdsec.log"
        }), " to debug scenarios or log processing problems."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Fine-Tuning Detection:"
        }), " Use ", createVNode(_components.code, {
          children: "cscli scenarios list"
        }), " to enable or disable specific detection rules based on your server’s needs."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By mastering these commands, you can efficiently manage, monitor, and optimize CrowdSec to protect your VPS from cyber threats."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["Securing your VPS is a critical step in protecting your applications, data, and infrastructure from malicious cyber threats. SSH, being a common entry point for attackers, requires robust protection, and ", createVNode(_components.strong, {
        children: "CrowdSec"
      }), " provides an effective, scalable, and community-driven solution to meet that need."]
    }), "\n", createVNode(_components.p, {
      children: "In this guide, we’ve covered every step you need to take to use CrowdSec to secure your VPS:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Installing CrowdSec:"
        }), " Setting up the core CrowdSec engine to monitor and analyze server logs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Installing the Firewall Bouncer:"
        }), " Enabling automatic remediation by blocking malicious IPs at the firewall level."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Configuring Log Monitoring:"
        }), " Extending protection to application logs (e.g., Nginx) to safeguard your entire server stack."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Using Metrics and Commands:"
        }), " Leveraging CrowdSec’s metrics and commands to monitor and fine-tune your security setup."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Optional: Linking to CrowdSec Console:"
        }), " Utilizing a centralized management platform for streamlined and graphical security insights."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "CrowdSec offers key advantages over traditional security tools by combining detection, remediation, and collaborative intelligence. Here’s why it stands out:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ease of Use:"
        }), " Simple installation and configuration, even for beginners."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Real-Time Defense:"
        }), " Proactive blocking of attackers based on server activity logs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Community Intelligence:"
        }), " Benefit from global shared threat data to stay ahead of emerging threats."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Scalable:"
        }), " Protects one VPS or an entire server fleet with cloud-friendly tools."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By following this tutorial, you’ve not only secured your SSH service but also empowered your VPS to block malicious actors proactively, helping to reduce the risk of data breaches and server compromise."
    }), "\n", createVNode(_components.p, {
      children: "By taking the time to secure your server with CrowdSec, you’ve made a significant investment in your VPS’s security. Keep the system updated, monitor its performance, and continue exploring CrowdSec’s features to strengthen your defenses further. Security is an ongoing process, and with CrowdSec, you’re well-equipped to stay ahead of the curve."
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

const url = "src/content/posts/crowdsec-secure-server.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/crowdsec-secure-server.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/crowdsec-secure-server.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
