import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/cf-proxy.D0DrTEL3.jpeg","width":2494,"height":92,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/cf-proxy.jpeg";
							}
							
							return target[name];
						}
					});

const imag2 = new Proxy({"src":"/_astro/cf-waf-bloc-ai.7odoGH9H.jpeg","width":2486,"height":1568,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/cf-waf-bloc-ai.jpeg";
							}
							
							return target[name];
						}
					});

const imag3 = new Proxy({"src":"/_astro/cf-waf-ip-block.Dc5sV04u.png","width":2338,"height":832,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/cf-waf-ip-block.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-02-09T00:00:00.000Z",
  "title": "Stop AI Crawler Bots: How to Safeguard Your Website",
  "description": "Let's see the various alternatives that exist to block all AI Crawler bots that try to access your website content.",
  "image": "../../assets/images/24/02/block-ai-crawlers.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["ai"],
  "canonical": "https://www.bitdoze.com/block-ai-crawlers/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-block-ai-crawler-bots-to-access-website-content",
    "text": "How to Block AI Crawler Bots To Access Website Content"
  }, {
    "depth": 3,
    "slug": "1-block-ai-crawler-bots-via-waf",
    "text": "1. Block AI Crawler Bots via WAF"
  }, {
    "depth": 3,
    "slug": "2-block-ai-crawler-bots-via-robotstxt",
    "text": "2. Block AI Crawler Bots via robots.txt"
  }, {
    "depth": 3,
    "slug": "3-block-ai-crawler-bots-via-ip",
    "text": "3. Block AI Crawler Bots via IP"
  }, {
    "depth": 3,
    "slug": "4-block-ai-crawler-via-content-tags",
    "text": "4. Block AI Crawler via Content Tags"
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
      children: "If you are a content writer you may not be happy with the fact that AI is using your content and you may want to block them. Lately, AI has taken off and there are a lot of AI-powered options that will try to use your content."
    }), "\n", createVNode(_components.p, {
      children: "Also, the development of AI-powered search responses started to kick off and you have tools like Perplexity, Microsoft Copilot, Gemini and ARC Browser in the future that will respond to your questions directly by crawling the best content and providing answers."
    }), "\n", createVNode(_components.p, {
      children: "This creates a problem for blog owners as the traffic is not sent to your site anymore, in this way you lose audience and money."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "I am not saying that what websites have become now is good as most of them have 1000 ads, but still, some respect the visitors and are not bombarding you with all sorts of ads. Plus you have an option to use an add blocker."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But with AI there is a risk that no one will write as they will not be incentivized in any way, the visitor will not subscribe to his social media, not join the newsletter or will not make the money anymore to pay his mortgage."
    }), "\n", createVNode(_components.p, {
      children: "In this article, we are going to see the various ways that exist and will help you block AI Crawler but let Search Engine Crawlers still index your content."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-block-ai-crawler-bots-to-access-website-content",
      children: "How to Block AI Crawler Bots To Access Website Content"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/4s5I5Bz-IDE",
      label: "Stop AI Crawler Bots: How to Safeguard Your Website"
    }), "\n", createVNode(_components.p, {
      children: ["There are a few ways to protect your content from ", createVNode(_components.strong, {
        children: "AI Crawlers"
      }), " and in this article, we will go through them and see how you can set them app."]
    }), "\n", createVNode(_components.h3, {
      id: "1-block-ai-crawler-bots-via-waf",
      children: "1. Block AI Crawler Bots via WAF"
    }), "\n", createVNode(_components.p, {
      children: "WAF (Web Application Firewall) are gateways that stand between the visitor (AI Crawler) and your website, this is the best option that you can use to block AI Crawlers to reach your content."
    }), "\n", createVNode(_components.p, {
      children: ["One free option that can be used in CloudFlare Free WAF, they have introduced a ", createVNode(_components.strong, {
        children: "Verified Bot Category"
      }), " that will help you block various things like:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Search Engine Crawler"
      }), "\n", createVNode(_components.li, {
        children: "Aggregator"
      }), "\n", createVNode(_components.li, {
        children: "AI Crawler"
      }), "\n", createVNode(_components.li, {
        children: "Page Preview"
      }), "\n", createVNode(_components.li, {
        children: "Advertising"
      }), "\n", createVNode(_components.li, {
        children: "Academic Research"
      }), "\n", createVNode(_components.li, {
        children: "Accessibility"
      }), "\n", createVNode(_components.li, {
        children: "Feed Fetcher"
      }), "\n", createVNode(_components.li, {
        children: "Security"
      }), "\n", createVNode(_components.li, {
        children: "Webhooks"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://blog.cloudflare.com/ai-bots",
        children: "Clauflare WAF Bot Category"
      }), " can be checked for more details."]
    }), "\n", createVNode(_components.p, {
      children: "To use CloudFlare Free WAF to block AI Crawlers you need to:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. Website to use CloudFlare."
      })
    }), "\n", createVNode(_components.p, {
      children: "You need to use CloudFlare as a DNS provider and have your website go through them."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. CloudFlare Proxy needs to be activated"
      })
    }), "\n", createVNode(_components.p, {
      children: "The website needs to be proxied through CloudFlare otherwise will not work. So just as in below picture:"
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "Cloudflare Proxy"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. Create the CloudFlare WAF Rule"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In the Free WAF you have 5 rules that can be used and you can create 1 just for this. To activate it go to ", createVNode(_components.strong, {
        children: "Security - WAF"
      }), " and hit create a new Rule. In there you need to set:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rule name"
        }), " - add a name so you know what is used for"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Field"
        }), " - choose Verified Bot Category"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Operator"
        }), " - equals"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Value"
        }), " - AI Crawler"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Choose action"
        }), " - Block"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deploy"
        }), " - hit deploy"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The Expression Preview should be:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "(cf.verified_bot_category eq \"AI Crawler\")"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Just as in the image:"
    }), "\n", createVNode($$Picture, {
      src: imag2,
      alt: "Cloudflare WAF Block AI Crawler"
    }), "\n", createVNode(_components.p, {
      children: "Then let this for a couple of minutes to be active."
    }), "\n", createVNode(_components.p, {
      children: "Now you should be set to go, you can track the stats in the main WAF section and see how many were stopped after some time."
    }), "\n", createVNode(_components.h3, {
      id: "2-block-ai-crawler-bots-via-robotstxt",
      children: "2. Block AI Crawler Bots via robots.txt"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "robots.txt"
      }), " is a file where you can specify what is allowed and what is not allowed to be fetched by crawlers. All the bots should check this file and see if they have access to fetch your content ( in theory). The major companies are doing this as otherwise they can have legal problems and they can be sued but don’t expect everyone to do this."]
    }), "\n", createVNode(_components.p, {
      children: "Because of the above, this is not a bulletproof solution to block AI Crawler and should be used in combination with a WAF, plus you will need to add the AI agents as they appear to catch them all."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Block AI Crawlers with ", createVNode(_components.code, {
          children: "robots.txt"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The sintax for this is as bellow:"
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
            children: "user-agent: {AI-Ccrawlers-Bot-Name-Here}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "disallow: /"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You just need to replace the ", createVNode(_components.code, {
        children: "AI-Ccrawlers-Bot-Name-Here"
      }), " with the AI bot that you want to be blocked."]
    }), "\n", createVNode(_components.p, {
      children: "An example for the OpenAI is:"
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
            children: "User-agent: GPTBot"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Disallow: /"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "User-agent: ChatGPT-User"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Disallow: /"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This will block all the pages on your website, you can alter the ", createVNode(_components.code, {
        children: "Disallow"
      }), " , you can add specific pages and so on. To allow someting you just need to use ", createVNode(_components.code, {
        children: "Allow"
      }), " instead of ", createVNode(_components.code, {
        children: "Disallow"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "User-agent: GPTBot"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Allow: /"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "User-agent: ChatGPT-User"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Allow: /"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-block-ai-crawler-bots-via-ip",
      children: "3. Block AI Crawler Bots via IP"
    }), "\n", createVNode(_components.p, {
      children: "Another way to block AI Crawlers is to block the IP address of the bot in the firewall. When communication is happening between AI bot and your webserver it will use an IP, you have the option to block the IP address of the bots in the firewall."
    }), "\n", createVNode(_components.p, {
      children: "If you are self-hosting your website on a VPS on linux you have a firewall utility that can be used to block the IP’s."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "ufw"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "ufw"
      }), " is a utility that can help you with this. For instance if we are going to check the ", createVNode(_components.a, {
        href: "https://platform.openai.com/docs/plugins/bot",
        children: "openAI IPs"
      }), " and block then you should run:"]
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
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 23.98.142.176/28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 80"
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
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 23.98.142.176/28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 443"
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
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 40.84.180.224/28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 80"
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
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 40.84.180.224/28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 443"
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
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 40.84.180.224/28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 80"
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
            children: " ufw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deny"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 13.65.240.240/28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " port"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 443"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This method implies that you should know the IP addresses of all the AI bots so you can add them here. Also, they can change over time but in case you are seeing a lot of traffic you can check the logs and see the exact IP."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "cPanel Firewall"
      })
    }), "\n", createVNode(_components.p, {
      children: "If you are using cPanel or another hosting panel you should have a firewall option in there that can be used and block the IPs, so you are covered in case cPanel is used. Again you should know the IP’s"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "CloudFlare WAF IP Access Rules"
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you are on CloudFlare they got you covered, in ", createVNode(_components.strong, {
        children: "Security - WAF"
      }), " section under ", createVNode(_components.strong, {
        children: "Tools"
      }), " you have the option to block or allow certan IP’s or ranges, all for free."]
    }), "\n", createVNode($$Picture, {
      src: imag3,
      alt: "Cloudflare WAF IP Block AI Crawler"
    }), "\n", createVNode(_components.h3, {
      id: "4-block-ai-crawler-via-content-tags",
      children: "4. Block AI Crawler via Content Tags"
    }), "\n", createVNode(_components.p, {
      children: ["Another option that can be used is to add a tag to your page directly that ", createVNode(_components.code, {
        children: "should"
      }), " prevent AI from crawling your pages. This is the same as for ", createVNode(_components.code, {
        children: "robots.txt"
      }), " the Bot should check it and not do anything if this is set."]
    }), "\n", createVNode(_components.p, {
      children: "It should be added in the head section of your website or page that you don’t want to be Crawl by AI:"
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
        children: createVNode(_components.span, {
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
            children: "meta"
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
            children: "\"robots\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " content"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"noai, noimageai\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "noai"
      }), " directive is intended to prevent all content on the page from being used by AI, while the ", createVNode(_components.code, {
        children: "noimageai"
      }), " directive is specifically aimed at preventing images from being used for AI training purposes."]
    }), "\n", createVNode(_components.p, {
      children: ["If you are on WordPress you can check your SEO plugin to see if this is enabled and if so you would be able to block the complete website or only pages. A WordPress plugin for WordPress that can do that in case your SEO plugin doesn’t offer this is: ", createVNode(_components.a, {
        href: "https://wordpress.org/plugins/simple-noai-and-noimageai/",
        children: "Simple NoAI and NoImageAI"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "These are some of the ways that you can block AI Crawler Bots from using your content if you have a serious issue with AI using your content then you should use all to be protected, other then this you can check your access logs and see there who slips thru the cracks."
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

const url = "src/content/posts/block-ai-crawlers.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/block-ai-crawlers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/block-ai-crawlers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
