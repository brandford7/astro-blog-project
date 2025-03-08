import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-01-10T00:00:00.000Z",
  "title": "How To Add A Contact Form To Any Static Website",
  "description": "Add a contact for to any static website free and easy in 2024 with formsubmit.co.",
  "image": "../../assets/images/24/01/contact-form-static-websites.jpeg",
  "categories": ["cms"],
  "authors": ["Dragos"],
  "tags": ["astro", "tutorials"],
  "canonical": "https://www.bitdoze.com/add-contact-form-static-websites/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-you-add-the-contact-form-to-any-static-website",
    "text": "How You Add The Contact Form to Any Static Website"
  }, {
    "depth": 3,
    "slug": "1-create-your-form",
    "text": "1. Create your Form"
  }, {
    "depth": 3,
    "slug": "2-point-the-action-attribute",
    "text": "2. Point the action Attribute"
  }, {
    "depth": 3,
    "slug": "3-submit-the-form-once",
    "text": "3. Submit the form once"
  }, {
    "depth": 3,
    "slug": "4-customize-the-form-with-formsubmitco-options",
    "text": "4. Customize the form with formsubmit.co options"
  }, {
    "depth": 4,
    "slug": "page-redirect-after-form-is-submitted",
    "text": "Page Redirect After Form Is Submitted"
  }, {
    "depth": 4,
    "slug": "add-cc-to-emails",
    "text": "Add CC to emails"
  }, {
    "depth": 2,
    "slug": "how-you-add-the-contact-form-to-astro",
    "text": "How You Add The Contact Form to Astro"
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
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["In the past, I have created a tutorial with ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/add-contact-form-astro/",
        children: "OpnForms to add a contact form to Astro"
      }), " back then OpnForms had a free option that was sending also an email when the form was submitted but since then things changed and the email send feature was added behind a pay option."]
    }), "\n", createVNode(_components.p, {
      children: ["Since then I have searched to see the best free contact option to use for a static website and I have come across ", createVNode(_components.a, {
        href: "https://formsubmit.co/",
        children: "formsubmit.co"
      }), " a web service that allows you to connect your HTML forms to an email endpoint and receive email notifications of form submissions. You do not need any coding or backend skills to use it. You just need to point your form’s action attribute to the Formsubmit.co URL and confirm your email address. You can also customize your form features, such as reply, subject, copy, and reCAPTCHA."]
    }), "\n", createVNode(_components.p, {
      children: "What I like about formsubmit.co besides the fact that is easy to use is the reCAPTCHA that will block spam. I have tested a few similar services in the past and I was receiving a lot of spam."
    }), "\n", createVNode(_components.h2, {
      id: "how-you-add-the-contact-form-to-any-static-website",
      children: "How You Add The Contact Form to Any Static Website"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/vSABo52iPAs",
      label: "Add Contact Form To Static Websites"
    }), "\n", createVNode(_components.h3, {
      id: "1-create-your-form",
      children: "1. Create your Form"
    }), "\n", createVNode(_components.p, {
      children: ["Design a form for your website using HTML. You can use any elements you want, such as ", createVNode(_components.code, {
        children: "<input>"
      }), ", ", createVNode(_components.code, {
        children: "<select>"
      }), ", and ", createVNode(_components.code, {
        children: "<textarea>"
      }), ", but make sure to include a name attribute for each element that you want to receive the submission data. For example, you can create a simple contact form like this:"]
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
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"contact-form\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Name:</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"text\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"name\""
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
            children: "\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " required"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"email\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Email:</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"email\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"email\""
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
            children: "\"email\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " required"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"message\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Message:</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "textarea"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"message\""
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
            children: "\"message\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " required"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "textarea"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"submit\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Send</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-point-the-action-attribute",
      children: "2. Point the action Attribute"
    }), "\n", createVNode(_components.p, {
      children: ["Point the action attribute of your form to the formsubmit.co URL with your email address as the parameter. This will enable submissions to be sent to your email address. For example, if your email address is ", createVNode(_components.a, {
        href: "mailto:your@email.com",
        children: "your@email.com"
      }), ", you can add this attribute to your form:"]
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
            children: "form"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"contact-form\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  action"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://formsubmit.co/your@email.com\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  method"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"POST\""
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
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The form will look like this:"
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
            children: "form"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"contact-form\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  action"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://formsubmit.co/your@email.com\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  method"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"POST\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Name:</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"text\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"name\""
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
            children: "\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " required"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"email\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Email:</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"email\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"email\""
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
            children: "\"email\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " required"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"message\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Message:</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "textarea"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"message\""
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
            children: "\"message\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " required"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "textarea"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"submit\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Send</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-submit-the-form-once",
      children: "3. Submit the form once"
    }), "\n", createVNode(_components.p, {
      children: "Submit the form once on your website or visit the URL in your browser. A confirmation email will be sent to you with a link, which you will have to click to confirm your email address. This is a one-time step to verify that you own the email address."
    }), "\n", createVNode(_components.h3, {
      id: "4-customize-the-form-with-formsubmitco-options",
      children: "4. Customize the form with formsubmit.co options"
    }), "\n", createVNode(_components.p, {
      children: "You are all set to go! Now, whenever someone submits the form on your website, you will receive an email notification with the form data. You can also customize your form features, such as reply, subject, copy, and reCAPTCHA, by using special name attributes prefixed with an underscore."
    }), "\n", createVNode(_components.h4, {
      id: "page-redirect-after-form-is-submitted",
      children: "Page Redirect After Form Is Submitted"
    }), "\n", createVNode(_components.p, {
      children: ["You can redirect it to a page ", createVNode(_components.code, {
        children: "Thank You"
      }), " after the form is submitted or any other page you just need to add ", createVNode(_components.em, {
        children: createVNode(_components.code, {
          children: "_next"
        })
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
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"hidden\""
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
            children: "\"_next\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " value"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://yourdomain.co/thanks.html\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "add-cc-to-emails",
      children: "Add CC to emails"
    }), "\n", createVNode(_components.p, {
      children: ["You can send email to others with the ", createVNode(_components.em, {
        children: createVNode(_components.code, {
          children: "cc"
        })
      }), " attribute as below:"]
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
            children: "input"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  type"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"hidden\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"_cc\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  value"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"another@email.com,yetanother@email.com\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "/>"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can check all the attributes in the ", createVNode(_components.a, {
        href: "https://formsubmit.co/documentation",
        children: "formsubmit.co documentation"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "how-you-add-the-contact-form-to-astro",
      children: "How You Add The Contact Form to Astro"
    }), "\n", createVNode(_components.p, {
      children: "I am having my blog built in Astro and I need this to work there. Initially, when I only added the above I got an error:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Make sure your form has the method=“POST” attribute"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["I am using ViewTransition in Astro and I think that caused the problem, to fix that I just added the ", createVNode(_components.code, {
        children: "data-astro-reload"
      }), " to the form and everything worked, just as below:"]
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
            children: "form"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  id"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"contact-form\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  action"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"https://formsubmit.co/your@email.com\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  method"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"POST\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  data-astro-reload"
          })
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
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This made the contact form to work on Astro."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://formsubmit.co/",
        children: "formsubmit.co"
      }), " provides an easy way to add a contact form to any static website, you don’t need to be an expert you just add the email endpoint and you are ready to go.\r\nI hope you enjoyed this tutorial and found it useful. If you have any feedback or questions, please let us know by using the contact form."]
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

const url = "src/content/posts/add-contact-form-static-websites.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-contact-form-static-websites.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-contact-form-static-websites.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
