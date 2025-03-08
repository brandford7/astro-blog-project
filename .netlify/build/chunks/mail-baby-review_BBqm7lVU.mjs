import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/mail-baby-order.B1oAbroq.png","width":3418,"height":1534,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/11/mail-baby-order.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-11-27T00:00:00.000Z",
  "title": "Mail.Baby Review: Pros and Cons of the Budget-Friendly Email Service by Interserver",
  "description": "Mail.Baby Review: See if this SMTP email-sending solution is for you and your business.",
  "image": "../../assets/images/23/11/mail-baby-review.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["mail"],
  "canonical": "https://www.bitdoze.com/mail-baby-review/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "mailbaby-and-spf-records",
    "text": "Mail.Baby and SPF records"
  }, {
    "depth": 3,
    "slug": "why-does-mailbaby-need-your-servers-ip",
    "text": "Why does Mail.Baby need your server’s IP?"
  }, {
    "depth": 3,
    "slug": "is-there-a-way-around-this",
    "text": "Is there a way around this?"
  }, {
    "depth": 2,
    "slug": "mailbaby-sending-limits-price-quality",
    "text": "Mail.Baby Sending Limits, Price, Quality"
  }, {
    "depth": 3,
    "slug": "price",
    "text": "Price"
  }, {
    "depth": 3,
    "slug": "sending-limits",
    "text": "Sending Limits"
  }, {
    "depth": 3,
    "slug": "what-types-of-emails-are-supported",
    "text": "What Types of Emails are Supported"
  }, {
    "depth": 3,
    "slug": "security",
    "text": "Security"
  }, {
    "depth": 3,
    "slug": "email-deliverability",
    "text": "Email Deliverability"
  }, {
    "depth": 3,
    "slug": "how-you-register",
    "text": "How You Register"
  }, {
    "depth": 3,
    "slug": "my-experience-with-mailbaby",
    "text": "My Experience With Mail.Baby"
  }, {
    "depth": 2,
    "slug": "should-you-use-mailbaby",
    "text": "Should you use Mail.Baby?"
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
      children: ["Do you want to send emails without breaking the bank? Do you want to avoid the hassle of setting up your own mail server? Do you want to enjoy high deliverability and reliability? If you answered yes to any of these questions, you might be interested in ", createVNode(_components.a, {
        href: "https://mail.baby/",
        children: "Mail.Baby"
      }), ", a low-cost outbound email service by Interserver."]
    }), "\n", createVNode(_components.p, {
      children: "I have tried different email services in the past and I want to use something that is:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "not expensive"
        }), ": I want to be able to send bulk emails and not pay a ton of money."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "reliable"
        }), ": when an email is sent I want to have a high delivery rate, so my emails reach the inbox."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "use it for lists and transactional emails"
        }), ": I have servers and applications and I want to be able to use the email server for both"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "use multiple domains"
        }), ": I have more than 10 domains and sometimes I want that domain to send the email not a central one."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "secure"
        }), ": I need to connect securely to the email server."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pay as you go"
        }), ": I am not sending thousands of emails monthly I just need to be charged when I send them."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But before you sign up, there is one thing you should know: Mail.Baby might expose your server’s IP address to the public. Here’s why."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/MkbcnC8TIow",
      label: "Mail.Baby Review"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["For configuring Postfix to use an external SMTP service on your server you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/postfix-external-smtp/",
          children: "Configure Postfix to Send Email Using External SMTP Servers"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "mailbaby-and-spf-records",
      children: "Mail.Baby and SPF records"
    }), "\n", createVNode(_components.p, {
      children: "Mail.Baby is a service that allows you to send emails from your own domain name using their SMTP relay servers. To do that, you need to configure your DNS records to authorize Mail.Baby to send emails on your behalf. One of these records is the SPF (Sender Policy Framework) record, which specifies which servers are allowed to send emails from your domain."
    }), "\n", createVNode(_components.p, {
      children: "Mail.Baby requires that you add their servers and your own server’s IP address to your SPF record. For example, if your domain is example.com and your server’s IP is 123.456.789.0, your SPF record should look like this:"
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
            children: "v=spf1 include:relay.mailbaby.net ip4:123.456.789.0 -all"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This means that only Mail.Baby’s servers and your server can send emails from example.com. However, it also means that anyone who looks up your SPF record can see your server’s IP address. This can be a security risk, especially if you are using a service like Cloudflare to hide your server’s IP behind a proxy. By revealing your server’s IP, you might expose yourself to attacks or abuse."
    }), "\n", createVNode(_components.h3, {
      id: "why-does-mailbaby-need-your-servers-ip",
      children: "Why does Mail.Baby need your server’s IP?"
    }), "\n", createVNode(_components.p, {
      children: "You might wonder why Mail.Baby needs your server’s IP in the first place. After all, other email services like MXroute and MailChimp’s Mandrill don’t require this. The reason is that Mail.Baby checks your SPF record to verify that your server is authorized to send emails for your domain. This is a way to prevent spam and abuse of their service. However, this also means that they don’t accept emails from servers that are not listed in your SPF record, even if they are using your Mail.Baby credentials."
    }), "\n", createVNode(_components.h3, {
      id: "is-there-a-way-around-this",
      children: "Is there a way around this?"
    }), "\n", createVNode(_components.p, {
      children: "Unfortunately, there is no easy way to use Mail.Baby without revealing your server’s IP in your SPF record. You could try to use a different IP for sending emails, but that would require setting up another server or using a VPN. You could also try to use a subdomain for sending emails, but that would require changing your email addresses and configuring your DNS records accordingly. Neither of these options is very convenient or practical."
    }), "\n", createVNode(_components.h2, {
      id: "mailbaby-sending-limits-price-quality",
      children: "Mail.Baby Sending Limits, Price, Quality"
    }), "\n", createVNode(_components.h3, {
      id: "price",
      children: "Price"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://mail.baby/",
        children: "Mail.Baby"
      }), " charges $1 a month for the availability and then $0.20 for every 1000 emails sent. The price would be on top of the $1 a month one, so if you send 10.000 emails a month you will be charged $1 + $2 = $3. This is a very affordable service and Only Amazon SES comes close.\r\nCompared with other services the price is quite good, other services charge even 10 times more. So mail.baby has a plus from my side even if you need to pay the $1 a month."]
    }), "\n", createVNode(_components.h3, {
      id: "sending-limits",
      children: "Sending Limits"
    }), "\n", createVNode(_components.p, {
      children: "Sending limits are the following:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "6,000 emails per hour – per email address (not per Mail Baby account)."
      }), "\n", createVNode(_components.li, {
        children: "If you send over 6,000 emails in one hour, all the “excess” emails (beyond the 6,000th email) will be disregarded."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "There is a problem if you need to send more than 6000 emails an hour as you need your tool to cache them and not send more otherwise they will be lost.\r\nThis could have been done better as they could have cached the emails and sent them the next hour. You need to be careful with this limit."
    }), "\n", createVNode(_components.h3, {
      id: "what-types-of-emails-are-supported",
      children: "What Types of Emails are Supported"
    }), "\n", createVNode(_components.p, {
      children: "Mail.Baby lets you send transactional emails and marketing emails. So you can use the service for both and not need 2 services for this. I like this as not all the SMTP providers out here lets you do both, usually sending marketing emails can be quite expensive."
    }), "\n", createVNode(_components.h3, {
      id: "security",
      children: "Security"
    }), "\n", createVNode(_components.p, {
      children: "STARTTLS it is used to connect to the email server but in case your server doesn’t support TLS you can access it insecure. The ports that can be used and SMTP details can be found in the admin area.\r\nMail.Baby is scanning the email that is sent for spam so in case your server is compromised mail.baby will block the sending of the email."
    }), "\n", createVNode(_components.h3, {
      id: "email-deliverability",
      children: "Email Deliverability"
    }), "\n", createVNode(_components.p, {
      children: "I am using Mail.Baby for a couple of weeks and I can say that I didn’t have any issues all the emails that I have sent have been delivered. I have tested the service with bulk send and also to some of my inboxes on Gmail and live and I didn’t see any issues."
    }), "\n", createVNode(_components.h3, {
      id: "how-you-register",
      children: "How You Register"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Go To Interserver site and create an account: ", createVNode(_components.a, {
          href: "https://my.interserver.net/",
          children: "https://my.interserver.net/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Order Email: After you create an account you should go under ", createVNode(_components.strong, {
          children: "Mail - Order"
        }), " and get a package"]
      }), "\n"]
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "mail.baby order"
    }), "\n", createVNode(_components.h3, {
      id: "my-experience-with-mailbaby",
      children: "My Experience With Mail.Baby"
    }), "\n", createVNode(_components.p, {
      children: "I have been using them for a couple of weeks, and till now I am happy with the service they are providing, I am using them on multiple servers and I can say the emails are delivered without problems. paying the $1 a month is not a problem especially when you want the email to reach the other side.\r\nSetting up the account and connecting to the email server is not hard and all the details are on their interface."
    }), "\n", createVNode(_components.p, {
      children: "In case of issues, I will update this section."
    }), "\n", createVNode(_components.h2, {
      id: "should-you-use-mailbaby",
      children: "Should you use Mail.Baby?"
    }), "\n", createVNode(_components.p, {
      children: "Mail.Baby is a very attractive service for anyone who needs to send a lot of emails at a low price. Mail.baby is much cheaper than most other email services, and the quality and deliverability are reportedly very good. However, you should also be aware of the security risk of exposing your server’s IP address in your SPF record. If you are not comfortable with that, you might want to look for another email service."
    }), "\n", createVNode(_components.p, {
      children: "In the end it’s up to you if you want to use it or not."
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

const url = "src/content/posts/mail-baby-review.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/mail-baby-review.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/mail-baby-review.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
