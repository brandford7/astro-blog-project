import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-19T01:00:00.000Z",
  "title": "How to Migrate Astro to Bun on CloudFlare",
  "description": "Learn how you can migrate your Astro project to Bun in CloudFlare Pages",
  "image": "../../assets/images/24/03/migrate-astro-bun.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["bun", "astro"],
  "canonical": "https://www.bitdoze.com/migrate-astro-bun/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-install-bun",
    "text": "1. Install Bun"
  }, {
    "depth": 2,
    "slug": "2-remove-existing-lock-files",
    "text": "2. Remove Existing Lock Files"
  }, {
    "depth": 2,
    "slug": "3-install-dependencies-with-bun",
    "text": "3. Install Dependencies with Bun"
  }, {
    "depth": 2,
    "slug": "4-test-your-astro-project-locally",
    "text": "4. Test Your Astro Project Locally"
  }, {
    "depth": 2,
    "slug": "5-update-the-cloudflare-build-command",
    "text": "5. Update the Cloudflare Build Command"
  }, {
    "depth": 2,
    "slug": "6-deploy-to-cloudflare",
    "text": "6. Deploy to Cloudflare"
  }, {
    "depth": 2,
    "slug": "7-check-the-cloudflare-logs",
    "text": "7. Check the Cloudflare Logs"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Bun is a fast all-in-one JavaScript runtime that can significantly speed up your Astro projects. With Cloudflare now providing native support for Bun, it’s easier than ever to deploy Astro apps powered by Bun. This guide walks through the steps to migrate an existing Astro project from Node.js to Bun and deploy it on Cloudflare Pages."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/RUBWS6zp2us",
      label: "How to Migrate Astro to Bun on CloudFlare"
    }), "\n", createVNode(_components.h2, {
      id: "1-install-bun",
      children: "1. Install Bun"
    }), "\n", createVNode(_components.p, {
      children: "First, install Bun on your development machine. You can install it with a single command:"
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
            children: " -fsSL"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://bun.sh/install"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "bash"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will download and install the latest version of Bun."
    }), "\n", createVNode(_components.p, {
      children: ["You can check ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/bun-package-manager/",
        children: "Bun vs NPM, Yarn, PNPM, and Others"
      }), " to see some details and benchmark for Bun."]
    }), "\n", createVNode(_components.h2, {
      id: "2-remove-existing-lock-files",
      children: "2. Remove Existing Lock Files"
    }), "\n", createVNode(_components.p, {
      children: "If your Astro project used a different package manager like npm or Yarn, remove the existing lock files:"
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
            children: "# If you were using NPM:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package-lock.json"
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
            children: "# If you were using pnpm:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pnpm-lock.yaml"
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
            children: "# If you were using Yarn:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " yarn.lock"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This ensures Bun can cleanly install dependencies without conflicts from other package manager lock files."
    }), "\n", createVNode(_components.h2, {
      id: "3-install-dependencies-with-bun",
      children: "3. Install Dependencies with Bun"
    }), "\n", createVNode(_components.p, {
      children: "Now use Bun to install your project’s dependencies:"
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
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Bun will read your package.json and download the required packages much faster than Node.js."
    }), "\n", createVNode(_components.h2, {
      id: "4-test-your-astro-project-locally",
      children: "4. Test Your Astro Project Locally"
    }), "\n", createVNode(_components.p, {
      children: "Start the Astro development server using Bun:"
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
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dev"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Open ", createVNode(_components.a, {
        href: "http://localhost:4321",
        children: "http://localhost:4321"
      }), " and verify your project works as expected."]
    }), "\n", createVNode(_components.p, {
      children: "You can also test building your project for production:"
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
            children: "bun"
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Fix any issues before proceeding to deployment."
    }), "\n", createVNode(_components.h2, {
      id: "5-update-the-cloudflare-build-command",
      children: "5. Update the Cloudflare Build Command"
    }), "\n", createVNode(_components.p, {
      children: "Log into the Cloudflare dashboard and go to your Astro project’s settings."
    }), "\n", createVNode(_components.p, {
      children: "Change the build command to use Bun:"
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
            children: "bun astro build"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This tells Cloudflare to use Bun to build your Astro project."
    }), "\n", createVNode(_components.h2, {
      id: "6-deploy-to-cloudflare",
      children: "6. Deploy to Cloudflare"
    }), "\n", createVNode(_components.p, {
      children: "Commit your changes and push to your Git repository."
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " commit"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Migrate to Bun\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " push"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Cloudflare should automatically detect the update and begin building and deploying your Astro project with Bun."
    }), "\n", createVNode(_components.h2, {
      id: "7-check-the-cloudflare-logs",
      children: "7. Check the Cloudflare Logs"
    }), "\n", createVNode(_components.p, {
      children: "After pushing your changes, Cloudflare will attempt to build your project using the new settings. Monitor the build logs in the Cloudflare dashboard to ensure that the build completes successfully and that there are no errors during the process."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Migrating your Astro project to use Bun on Cloudflare can lead to faster build times and a more efficient development process. By following the steps outlined in this article, you can smoothly transition to Bun and take advantage of its performance benefits. Remember to test your project thoroughly after migration and monitor the Cloudflare build logs for any potential issues. With Bun, you’re now set to enjoy a modern and speedy JavaScript runtime for your Astro projects on Cloudflare."
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

const url = "src/content/posts/migrate-astro-bun.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/migrate-astro-bun.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/migrate-astro-bun.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
