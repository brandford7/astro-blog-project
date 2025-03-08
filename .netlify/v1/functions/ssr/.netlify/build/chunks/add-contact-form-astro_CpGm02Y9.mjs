import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import 'clsx';

const img1 = new Proxy({"src":"/_astro/opnform-settings.DPO2kH62.jpeg","width":1268,"height":6792,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/08/opnform-settings.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-08-18T06:00:00.000Z",
  "title": "How To Add A Contact Form To Astro",
  "description": "See how you can easily add a contact form to an astro website or any static website and get notified via email with no spam.",
  "image": "../../assets/images/23/08/astro-add-contact-form.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["astro", "tutorials"],
  "canonical": "https://www.bitdoze.com/add-contact-form-astro/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-add-a-contact-form-to-astro",
    "text": "How To Add A Contact Form To Astro"
  }, {
    "depth": 3,
    "slug": "1-create-a-form-in-opnform",
    "text": "1. Create a form in OpnForm"
  }, {
    "depth": 3,
    "slug": "2-get-the-enbed-code-and-insert-it-to-astro",
    "text": "2. Get The enbed Code and Insert it to Astro"
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
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this tutorial I will show you how you can easily add a contact form to your Astro website, you can use the tutorial to add a contact form to any static website like NextJS or Nuxt,etc, but in this tutorial, we are going to use Astro."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["You can check the tutorial: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/add-contact-form-static-websites/",
          children: "Add A Contact Form To Any Static Website"
        }), " OpnForms is not free any more to send emails."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["With static websites is more difficult to integrate a contact form that is sending emails and most of the time you need something external. We are going to use ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/opnform-open-source/",
        children: "OpnForms"
      }), " to create our form and add it to Astro contact page."]
    }), "\n", createVNode(_components.p, {
      children: "You don’t need any special skils to do this, get notified via email and not receive spam."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-add-a-contact-form-to-astro",
      children: "How To Add A Contact Form To Astro"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/EhE6H9nCm8U",
      label: "OpnForm - Add A Contact Form To Astro Free"
    }), "\n", createVNode(_components.h3, {
      id: "1-create-a-form-in-opnform",
      children: "1. Create a form in OpnForm"
    }), "\n", createVNode(_components.p, {
      children: ["If you don’t have an account you just need to go to ", createVNode(_components.a, {
        href: "https://opnform.com/",
        children: "OpnForm"
      }), " and create a free account. After you should go and create a new form.\r\nOpnForm allows you to add a basic form easily and change the structure and make files as required, in the video you will have all the details.\r\nYou can change the colours for your button and add a logo if you want, change the message and enable the notification via EMAIL or slack/discord.\r\nIn Security and privacy activate the Captcha."]
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "OpnForm settings"
    }), "\n", createVNode(_components.h3, {
      id: "2-get-the-enbed-code-and-insert-it-to-astro",
      children: "2. Get The enbed Code and Insert it to Astro"
    }), "\n", createVNode(_components.p, {
      children: ["I am using a ", createVNode(_components.a, {
        href: "https://astro.build/themes/details/bookworm-light/",
        children: "free Astro theme"
      }), " for this demonstration as a contact page with a form that does not send any email. I will go into form share and grab the embed code and just add it there, it will be under ", createVNode(_components.em, {
        children: "src/_pages/contact.astro"
      }), " :"]
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
        children: [createVNode(_components.span, {
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
            children: "iframe"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"border:none;width:100%;\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  height"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"410px\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  src"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://opnform.com/forms/contact-form-test-vmak0b\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "iframe"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can alter the height to look nicer in the function of the theme. In the video, you have the details."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "And that’s about it with these simple steps you have a contact form added to your Astro static website in 2 minutes and ready to receive notifications. Hope you enjoy the article, if you have something to say just go to the video and drop a comment."
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

const url = "src/content/posts/add-contact-form-astro.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-contact-form-astro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-contact-form-astro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
