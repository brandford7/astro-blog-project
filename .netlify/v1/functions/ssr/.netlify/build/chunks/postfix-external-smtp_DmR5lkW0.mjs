import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-09-18T00:00:00.000Z",
  "title": "Configure Postfix to Send Email Using External SMTP Servers",
  "description": "Learn how you can configure Postfix to send emails with an external SMTP provider.",
  "image": "../../assets/images/24/09/postfix-external-smtp.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux"],
  "canonical": "https://www.bitdoze.com/postfix-external-smtp/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-use-postfix-with-external-smtp-service",
    "text": "Why use Postfix with external SMTP service"
  }, {
    "depth": 2,
    "slug": "smtp-services-that-can-be-used",
    "text": "SMTP services that can be used"
  }, {
    "depth": 3,
    "slug": "brevo-free-smtp",
    "text": "Brevo free SMTP"
  }, {
    "depth": 3,
    "slug": "zeptomail-from-zoho",
    "text": "Zeptomail from Zoho"
  }, {
    "depth": 3,
    "slug": "mailbaby",
    "text": "mail.baby"
  }, {
    "depth": 3,
    "slug": "amazon-ses-simple-email-service",
    "text": "Amazon SES (Simple Email Service)"
  }, {
    "depth": 3,
    "slug": "mailgun",
    "text": "Mailgun"
  }, {
    "depth": 3,
    "slug": "sendgrid",
    "text": "SendGrid"
  }, {
    "depth": 2,
    "slug": "configure-postfix-to-send-email-using-external-smtp-servers",
    "text": "Configure Postfix to Send Email Using External SMTP Servers"
  }, {
    "depth": 3,
    "slug": "manual-configs-based-on",
    "text": "Manual Configs based on"
  }, {
    "depth": 3,
    "slug": "using-the-postfix-config-script",
    "text": "Using The Postfix Config script:"
  }, {
    "depth": 3,
    "slug": "explain-what-the-script-is-doing",
    "text": "Explain what the script is doing"
  }, {
    "depth": 3,
    "slug": "testing-email",
    "text": "Testing email"
  }, {
    "depth": 4,
    "slug": "send-email",
    "text": "Send email"
  }, {
    "depth": 4,
    "slug": "check-the-mail-log",
    "text": "Check the mail log"
  }, {
    "depth": 4,
    "slug": "additional-testing-tips",
    "text": "Additional Testing Tips:"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Postfix is a powerful and versatile Mail Transfer Agent (MTA) used in many Unix-like operating systems. It serves several key purposes in email infrastructure:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Email Routing:"
          }), " Postfix efficiently routes emails between servers, ensuring messages reach their intended recipients."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Email Delivery:"
          }), " It handles the delivery of outgoing emails to their destination mail servers."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "SMTP Server:"
          }), " Postfix acts as an SMTP server, allowing applications and users to send emails through it."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Mail Queuing:"
          }), " It manages email queues, storing messages temporarily if immediate delivery isn’t possible."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Security:"
          }), " Postfix includes built-in security features to protect against spam, email spoofing, and unauthorized relaying."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Flexibility:"
          }), " It can be configured to work with various email protocols and can integrate with other email-related services."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Local Mail Delivery:"
          }), " In addition to routing, Postfix can deliver mail to local mailboxes on the server."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Policy Enforcement:"
          }), " Administrators can set up rules and policies for email handling, such as size limits or content filtering."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "why-use-postfix-with-external-smtp-service",
      children: "Why use Postfix with external SMTP service"
    }), "\n", createVNode(_components.p, {
      children: "While Postfix is capable of handling email delivery on its own, there are several compelling reasons to use it in conjunction with an external SMTP service:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Improved Deliverability:"
          }), " External SMTP providers often have better IP reputations and relationships with major email providers, increasing the chances of your emails reaching the inbox."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Scalability:"
          }), " SMTP services are designed to handle large volumes of email, allowing your system to scale without significant infrastructure changes."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Reduced Server Load:"
          }), " Offloading email sending to an external service frees up your server resources for other tasks."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Simplified Maintenance:"
          }), " You don’t need to manage the complexities of maintaining your own mail server, such as handling IP blacklists or configuring SPF, DKIM, and DMARC."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Advanced Features:"
          }), " Many SMTP services offer additional features like email tracking, analytics, and automated bounce handling."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Better Compliance:"
          }), " External providers often help ensure compliance with email regulations like GDPR, CAN-SPAM, or CASL."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Cost-Effective:"
          }), " For many organizations, using an external SMTP service can be more cost-effective than maintaining their own email infrastructure."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Reliability:"
          }), " Professional SMTP services typically offer high uptime and redundancy, ensuring your emails get sent even if your primary server goes down."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Flexibility:"
          }), " You can easily switch between different SMTP providers or use multiple providers for different purposes without major reconfiguration."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Focus on Core Business:"
          }), " By outsourcing email delivery, your team can focus on core business activities rather than email server management."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By combining Postfix with an external SMTP service, you get the best of both worlds: the flexibility and control of Postfix for local email handling, and the reliability and advanced features of a professional email delivery service for outgoing mail."
    }), "\n", createVNode(_components.p, {
      children: "Certainly. Here’s a section on SMTP services that can be used with Postfix:"
    }), "\n", createVNode(_components.h2, {
      id: "smtp-services-that-can-be-used",
      children: "SMTP services that can be used"
    }), "\n", createVNode(_components.p, {
      children: "When configuring Postfix to use an external SMTP service, there are several reliable options available. Here are some popular SMTP services that work well with Postfix:"
    }), "\n", createVNode(_components.h3, {
      id: "brevo-free-smtp",
      children: "Brevo free SMTP"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.brevo.com/",
        children: "Brevo"
      }), " (formerly known as Sendinblue) offers a robust SMTP relay service with a generous free tier:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Free plan includes 300 emails per day (9,000 per month)"
      }), "\n", createVNode(_components.li, {
        children: "Easy integration with Postfix"
      }), "\n", createVNode(_components.li, {
        children: "Advanced features like email tracking and templating"
      }), "\n", createVNode(_components.li, {
        children: "Good deliverability rates"
      }), "\n", createVNode(_components.li, {
        children: "API access for additional functionality"
      }), "\n", createVNode(_components.li, {
        children: "Paid plans available for higher volume needs"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "zeptomail-from-zoho",
      children: "Zeptomail from Zoho"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.zoho.com/zeptomail/",
        children: "Zeptomail"
      }), ", part of the Zoho ecosystem, provides a reliable SMTP service with the following features:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Free tier offering 10,000 emails"
      }), "\n", createVNode(_components.li, {
        children: "Known for excellent deliverability rates"
      }), "\n", createVNode(_components.li, {
        children: "Email validation and domain authentication included"
      }), "\n", createVNode(_components.li, {
        children: "Detailed analytics and reporting"
      }), "\n", createVNode(_components.li, {
        children: "API access for developers"
      }), "\n", createVNode(_components.li, {
        children: "Seamless integration with other Zoho products"
      }), "\n", createVNode(_components.li, {
        children: "Scalable paid plans for growing businesses"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "mailbaby",
      children: "mail.baby"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.mail.baby/",
        children: "mail.baby"
      }), " is a cost-effective SMTP relay service that focuses on simplicity:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Affordable plans starting from very low monthly fees"
      }), "\n", createVNode(_components.li, {
        children: "No free tier, but pricing is budget-friendly"
      }), "\n", createVNode(_components.li, {
        children: "Unlimited domains on all plans"
      }), "\n", createVNode(_components.li, {
        children: "Simple setup process"
      }), "\n", createVNode(_components.li, {
        children: "Good for businesses looking for a straightforward, no-frills solution"
      }), "\n", createVNode(_components.li, {
        children: "24/7 support included"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/mail-baby-review/",
        children: "mail.baby review"
      }), " for more details."]
    }), "\n", createVNode(_components.h3, {
      id: "amazon-ses-simple-email-service",
      children: "Amazon SES (Simple Email Service)"
    }), "\n", createVNode(_components.p, {
      children: "While not mentioned in your original list, Amazon SES is worth considering:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Very cost-effective, especially for high volume"
      }), "\n", createVNode(_components.li, {
        children: "62,000 free emails per month when sent from Amazon EC2"
      }), "\n", createVNode(_components.li, {
        children: "High deliverability and scalability"
      }), "\n", createVNode(_components.li, {
        children: "Detailed sending statistics"
      }), "\n", createVNode(_components.li, {
        children: "Integration with other AWS services"
      }), "\n", createVNode(_components.li, {
        children: "Pay-as-you-go pricing model"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "mailgun",
      children: "Mailgun"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.mailgun.com/",
        children: "Mailgu"
      }), " is another popular option for developers and businesses:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Free tier includes 5,000 emails for 3 months"
      }), "\n", createVNode(_components.li, {
        children: "Powerful API for developers"
      }), "\n", createVNode(_components.li, {
        children: "Advanced email validation"
      }), "\n", createVNode(_components.li, {
        children: "Excellent documentation and support"
      }), "\n", createVNode(_components.li, {
        children: "Flexible pricing based on volume"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "sendgrid",
      children: "SendGrid"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://sendgrid.com/en-us/free",
        children: "SendGrid"
      }), " iswned by Twilio, SendGrid is a widely used SMTP service:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Free plan includes 100 emails per day"
      }), "\n", createVNode(_components.li, {
        children: "Known for high deliverability rates"
      }), "\n", createVNode(_components.li, {
        children: "Comprehensive APIs and webhooks"
      }), "\n", createVNode(_components.li, {
        children: "Advanced analytics and reporting"
      }), "\n", createVNode(_components.li, {
        children: "Email validation and testing tools"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "When choosing an SMTP service to use with Postfix, consider factors such as your expected email volume, budget, required features, and ease of integration. Many of these services offer free tiers or trial periods, allowing you to test them with your Postfix setup before committing to a paid plan."
    }), "\n", createVNode(_components.h2, {
      id: "configure-postfix-to-send-email-using-external-smtp-servers",
      children: "Configure Postfix to Send Email Using External SMTP Servers"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/lEPuB0Eh8Sg",
      label: "Postfix 1 Click Setup"
    }), "\n", createVNode(_components.p, {
      children: "Configuring Postfix to use an external SMTP server involves modifying several configuration files and settings. Here’s a step-by-step guide to manually configure Postfix:"
    }), "\n", createVNode(_components.h3, {
      id: "manual-configs-based-on",
      children: "Manual Configs based on"
    }), "\n", createVNode(_components.p, {
      children: "To manually configure Postfix to use an external SMTP server, you’ll need to modify the main Postfix configuration file and create a few additional files. Here’s how to do it:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Edit the main Postfix configuration file:"
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
                children: " nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/main.cf"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Add or modify the following lines:"
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
                children: "relayhost"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " [smtp.provider.com]:587"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "smtp_sasl_auth_enable"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " yes"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "smtp_sasl_password_maps"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " hash:/etc/postfix/sasl_passwd"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "smtp_sasl_security_options"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " noanonymous"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "smtp_tls_security_level"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " may"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "header_size_limit"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 4096000"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["Replace ", createVNode(_components.code, {
            children: "[smtp.provider.com]:587"
          }), " with your SMTP provider’s server and port."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Create the SASL password file:"
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
                children: " nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sasl_passwd"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Add the following line:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: "[smtp.provider.com]:587 username:password"
              })
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["Replace ", createVNode(_components.code, {
            children: "smtp.provider.com:587"
          }), ", ", createVNode(_components.code, {
            children: "username"
          }), ", and ", createVNode(_components.code, {
            children: "password"
          }), " with your SMTP provider’s details."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Create the hash database file from the sasl_passwd file:"
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
                children: " postmap"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sasl_passwd"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Secure the sasl_passwd files:"
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
                children: " chown"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " root:root"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sasl_passwd"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sasl_passwd.db"
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
                children: " chmod"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " 0600"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sasl_passwd"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sasl_passwd.db"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "If you want to set a specific sender address for all outgoing emails:"
        }), "\n", createVNode(_components.p, {
          children: "Create and edit the sender_canonical file:"
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
                children: " nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/sender_canonical"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Add the following line:"
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
                children: "/.+/"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "    your_email@example.com"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Create the smtp_header_checks file:"
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
                children: " nano"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " /etc/postfix/smtp_header_checks"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Add the following line:"
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
                children: "/From:.*/"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " REPLACE"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " From:"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " your_email@example.com"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Update the main.cf file to use these new files:"
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
                children: " postconf"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -e"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'sender_canonical_classes = envelope_sender, header_sender'"
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
                children: " postconf"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -e"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'sender_canonical_maps = regexp:/etc/postfix/sender_canonical'"
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
                children: " postconf"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -e"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " 'smtp_header_checks = regexp:/etc/postfix/smtp_header_checks'"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Set the correct domain in /etc/mailname:"
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
                children: " echo"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " \"yourdomain.com\""
              }), createVNode(_components.span, {
                style: {
                  color: "#ABB2BF"
                },
                children: " > "
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: "/etc/mailname"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Replace “yourdomain.com” with your actual domain."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Restart Postfix to apply all changes:"
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
                children: " postfix"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These manual configurations allow you to set up Postfix with an external SMTP server. However, the process can be error-prone and time-consuming, especially for those not familiar with Postfix configuration. That’s why using an automated script, like the one provided earlier, can be beneficial. It simplifies the process, reduces the chance of errors, and saves time."
    }), "\n", createVNode(_components.h3, {
      id: "using-the-postfix-config-script",
      children: "Using The Postfix Config script:"
    }), "\n", createVNode(_components.p, {
      children: ["Using the provided script is a much simpler and less error-prone method to configure Postfix with an external SMTP server. I have created a script that will work on Debian OS like Ubuntu and other scripts on ", createVNode(_components.a, {
        href: "https://utils.bitdoze.com/",
        children: "utils.bitdoze.com"
      }), " you just need to download and run it:"]
    }), "\n", createVNode(_components.p, {
      children: "Here’s how to use it:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Download the script:"
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
                children: " https://utils.bitdoze.com/scripts/postfix-setup.sh"
              }), createVNode(_components.span, {
                style: {
                  color: "#D19A66"
                },
                children: " -o"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " postfix-setup.sh"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["This command downloads the script from the provided URL and saves it as ", createVNode(_components.code, {
            children: "postfix-setup.sh"
          }), " in your current directory."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Make the script executable (optional, but recommended):"
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
                children: "chmod"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " +x"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " postfix-setup.sh"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Run the script:"
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
                children: "bash"
              }), createVNode(_components.span, {
                style: {
                  color: "#98C379"
                },
                children: " postfix-setup.sh"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "Or, if you made it executable:"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#61AFEF"
                },
                children: "./postfix-setup.sh"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Follow the prompts:\r\nThe script will ask you for various pieces of information. Be prepared to provide:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Your SMTP username"
          }), "\n", createVNode(_components.li, {
            children: "Your SMTP password"
          }), "\n", createVNode(_components.li, {
            children: "The domain you’re using with your SMTP provider"
          }), "\n", createVNode(_components.li, {
            children: "A sender email address (optional)"
          }), "\n", createVNode(_components.li, {
            children: "Your Postfix hostname"
          }), "\n", createVNode(_components.li, {
            children: "Your SMTP server address and port"
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: "Output:"
        }), "\n"]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "root@cloud:/var/log#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bash"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " postfix-setup.sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:04:42] Step 1: Make sure you have already set up your domain with your SMTP provider and added any necessary DNS records ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "like"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SPF,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DKIM,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CNAME"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SMTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Username:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bitdoze1@gmail.com"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SMTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Password:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " domain"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SMTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " provider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (e.g. "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "example.com"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): bitdoze.ro"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sender"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " email"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " address"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (optional, "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " skip"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Postfix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (e.g. "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "yourdomain.com"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): bitdoze.ro"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SMTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " server"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (e.g. [smtp.provider.com]:587): [smtp-relay.brevo.com]:587"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:20] Step 2: Updating system and installing Postfix..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hit:1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://download.docker.com/linux/ubuntu"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " jammy"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " InRelease"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hit:2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://mirror.hetzner.com/ubuntu/packages"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " noble"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " InRelease"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hit:3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://mirror.hetzner.com/ubuntu/packages"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " noble-updates"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " InRelease"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hit:4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://mirror.hetzner.com/ubuntu/packages"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " noble-backports"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " InRelease"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hit:5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://mirror.hetzner.com/ubuntu/security"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " noble-security"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " InRelease"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Reading"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lists..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Reading"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lists..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Building"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tree..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Reading"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " information..."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mailutils"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " already"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newest"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " version"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (1:3.17-1.1build3)."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upgraded,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newly"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " installed,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 37"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upgraded."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:23] Step 3: Configuring Postfix..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:23] Backed up /etc/postfix/main.cf to /etc/postfix/main.cf.bak"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:23] Step 4: Creating /etc/postfix/sasl_passwd file with SMTP credentials..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:23] Backed up /etc/postfix/sasl_passwd to /etc/postfix/sasl_passwd.bak"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:23] Securing /etc/postfix/sasl_passwd and creating hash..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:25] Step 5: Configuring sender address settings..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:25] Resetting sender address configuration..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:25] Step 6: Configuring /etc/mailname..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:25] Backed up /etc/mailname to /etc/mailname.bak"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:25] Step 7: Restarting Postfix..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "postfix/postfix-script:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " refreshing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Postfix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mail"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[2024-09-18 06:05:27] All done! "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Postfix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " has"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " been"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " configured"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SMTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " settings."
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Review the output:\r\nThe script will show its progress and any actions it takes. It’s a good idea to review this output to ensure everything was configured correctly."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Test the configuration:\r\nAfter the script completes, it’s recommended to test your Postfix configuration by sending a test email."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Using this script offers several advantages:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Simplicity: You don’t need to manually edit configuration files or run multiple commands."
      }), "\n", createVNode(_components.li, {
        children: "Consistency: The script ensures that all necessary configurations are made in the correct way."
      }), "\n", createVNode(_components.li, {
        children: "Time-saving: What could take 30 minutes or more to do manually can be done in just a few minutes with the script."
      }), "\n", createVNode(_components.li, {
        children: "Error reduction: The script reduces the chance of typographical errors or missed steps that can occur with manual configuration."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Remember to run this script with root privileges or using sudo, as it needs to modify system configuration files. Also, always review scripts from the internet before running them to ensure they’re safe and do what you expect."
    }), "\n", createVNode(_components.h3, {
      id: "explain-what-the-script-is-doing",
      children: "Explain what the script is doing"
    }), "\n", createVNode(_components.p, {
      children: "The provided script automates the process of configuring Postfix to use an external SMTP server. Let’s break down its main functions:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Logging and Error Handling:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "The script defines functions for logging messages and checking if commands succeed."
          }), "\n", createVNode(_components.li, {
            children: "This ensures that each step is logged and any errors are caught and reported."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "File Backup:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Before modifying any configuration files, the script creates backups."
          }), "\n", createVNode(_components.li, {
            children: "This allows for easy rollback if something goes wrong."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "User Input:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "The script prompts the user for necessary information such as SMTP credentials, domain, and server details."
          }), "\n", createVNode(_components.li, {
            children: "It includes input validation to ensure that critical fields are not left empty."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "System Update and Package Installation:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Updates the system’s package list."
          }), "\n", createVNode(_components.li, {
            children: ["Installs the ", createVNode(_components.code, {
              children: "mailutils"
            }), " package if it’s not already present."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Postfix Configuration:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Modifies the main Postfix configuration file (", createVNode(_components.code, {
              children: "/etc/postfix/main.cf"
            }), ") with the provided SMTP settings."]
          }), "\n", createVNode(_components.li, {
            children: "Sets up SASL authentication for the SMTP server."
          }), "\n", createVNode(_components.li, {
            children: "Configures TLS settings for secure communication."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "SMTP Credential Management:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Creates a ", createVNode(_components.code, {
              children: "sasl_passwd"
            }), " file with the SMTP server credentials."]
          }), "\n", createVNode(_components.li, {
            children: "Secures this file by setting appropriate permissions."
          }), "\n", createVNode(_components.li, {
            children: ["Generates a hash database from the ", createVNode(_components.code, {
              children: "sasl_passwd"
            }), " file for Postfix to use."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Sender Address Configuration (Optional):"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "If a sender email is provided, it sets up sender canonical mapping and header checks."
          }), "\n", createVNode(_components.li, {
            children: "This ensures all outgoing emails use the specified sender address."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Hostname Configuration:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Updates the ", createVNode(_components.code, {
              children: "/etc/mailname"
            }), " file with the provided Postfix hostname."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Service Restart:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Reloads the Postfix service to apply all the new configurations."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Logging Completion:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Logs the successful completion of the setup process."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Throughout the script, there are checks to ensure each step completes successfully. If any step fails, the script will log an error message and exit, preventing partial or incorrect configurations."
    }), "\n", createVNode(_components.p, {
      children: "This script essentially automates what would otherwise be a manual process involving multiple command-line operations and file edits. It simplifies the setup process, reduces the chance of human error, and ensures a consistent configuration across different systems. By prompting the user for necessary information and handling the technical details internally, it makes the process of configuring Postfix with an external SMTP server accessible even to users who might not be familiar with the intricacies of Postfix configuration."
    }), "\n", createVNode(_components.h3, {
      id: "testing-email",
      children: "Testing email"
    }), "\n", createVNode(_components.p, {
      children: "After configuring Postfix to use an external SMTP server, it’s crucial to test the setup to ensure emails are being sent correctly. Here are some methods to test your email configuration:"
    }), "\n", createVNode(_components.h4, {
      id: "send-email",
      children: "Send email"
    }), "\n", createVNode(_components.p, {
      children: "You can use the command line to send test emails. Here are two examples:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Basic email send:"
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"This is a test message\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mail"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Test Subject\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " recipient@example.com"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command sends an email with the subject “Test Subject” and the body “This is a test message” to ", createVNode(_components.a, {
        href: "mailto:recipient@example.com",
        children: "recipient@example.com"
      }), "."]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Email send with custom sender:"
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
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"This is another test message\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mail"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Test Subject 2\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -r"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sender@yourdomain.com"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " recipient@example.com"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command does the same as the previous one, but also specifies a custom sender address (", createVNode(_components.a, {
        href: "mailto:sender@yourdomain.com",
        children: "sender@yourdomain.com"
      }), ") using the ", createVNode(_components.code, {
        children: "-r"
      }), " flag."]
    }), "\n", createVNode(_components.p, {
      children: ["Replace ", createVNode(_components.a, {
        href: "mailto:recipient@example.com",
        children: "recipient@example.com"
      }), " with an email address you can access to verify receipt of the test emails."]
    }), "\n", createVNode(_components.h4, {
      id: "check-the-mail-log",
      children: "Check the mail log"
    }), "\n", createVNode(_components.p, {
      children: "After sending test emails, it’s important to check the mail log for any errors or issues. You can do this using the following command:"
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
            children: "tail"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -100"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/log/mail.log"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This command displays the last 100 lines of the mail log file. Look for entries related to your test emails. Successful sending usually looks something like this:"
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
            children: "May"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 15:30:45"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " postfix/smtp[12345]:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1AB2C3D4E5F:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "recipient@example.co"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "m>"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " relay=smtp.yourprovider.com[xxx.xxx.xxx.xxx]:587,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " delay=0.8,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " delays=0.02/0.00/0.5/0.28,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dsn=2.0.0,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " status=sent"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (250 "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2.0.0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OK"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1234567890abcdef"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "If there are any issues, you’ll see error messages in the log. Common issues include authentication failures, connection problems, or relay access denied."
    }), "\n", createVNode(_components.h4, {
      id: "additional-testing-tips",
      children: "Additional Testing Tips:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Send emails to different domains: Test sending to Gmail, Outlook, Yahoo, etc., to ensure your emails are not being marked as spam by major providers."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Check spam folders: Sometimes, even when emails are sent successfully, they might end up in the recipient’s spam folder. Always check there if you don’t see the test emails in the inbox."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Use online SMTP tests: Websites like ", createVNode(_components.a, {
            href: "https://www.mail-tester.com/",
            children: "https://www.mail-tester.com/"
          }), " can provide detailed reports on your email deliverability."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Monitor your IP reputation: Use services like MXToolbox to check if your IP is on any blacklists."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Verify SPF, DKIM, and DMARC: Ensure these email authentication methods are correctly set up for your domain to improve deliverability."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By thoroughly testing your email configuration, you can catch and resolve any issues early, ensuring smooth email delivery for your applications or services using Postfix."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, configuring Postfix to use an external SMTP server is a smart choice for businesses and individuals looking to optimize their email infrastructure. It offers a balance between control and convenience, allowing you to leverage the strengths of both Postfix and professional SMTP services. By following the steps outlined in this guide and regularly maintaining your setup, you can ensure reliable, efficient, and secure email delivery for your organization"
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

const url = "src/content/posts/postfix-external-smtp.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/postfix-external-smtp.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/postfix-external-smtp.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
