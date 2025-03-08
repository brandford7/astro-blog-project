import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-01-23T00:00:00.000Z",
  "title": "How To Extract Text From PDF In Command Line On Linux",
  "description": "Learn how to extract text from PDF files in command line on Linux using a simple and powerful tool called poppler-utils.",
  "image": "../../assets/images/24/01/extract-text-pdf-cmd.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["tutorials"],
  "canonical": "https://www.bitdoze.com/pdf-extract-text-linux-cmd/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-poppler-utils",
    "text": "What is poppler-utils?"
  }, {
    "depth": 2,
    "slug": "how-to-install-poppler-utils",
    "text": "How to install poppler-utils?"
  }, {
    "depth": 2,
    "slug": "how-to-use-pdftotext",
    "text": "How to use pdftotext?"
  }, {
    "depth": 2,
    "slug": "how-to-customize-the-output-format",
    "text": "How to customize the output format?"
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
      children: "Merging PDF files on Linux can be efficiently done through the command line using the pdfunite utility from the poppler-utils package. This method is particularly useful for users who prefer working within a terminal or for those who need to handle PDF operations in batch scripts or automation tasks."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-poppler-utils",
      children: "What is poppler-utils?"
    }), "\n", createVNode(_components.p, {
      children: "Poppler-utils is a collection of command-line utilities for manipulating PDF files. It is based on the poppler library, which is a fork of the xpdf library. Poppler-utils includes several tools, such as:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pdfinfo:"
        }), " prints information about a PDF file, such as title, author, pages, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pdftotext:"
        }), " converts a PDF file to plain text."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pdftohtml:"
        }), " converts a PDF file to HTML."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pdfimages:"
        }), " extracts images from a PDF file."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pdfseparate:"
        }), " splits a PDF file into single-page PDF files."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pdfunite:"
        }), " ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/pdf-merge-linux-cmd/",
          children: "merges several PDF"
        }), " files into one."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will focus on the pdfunite tool, which allows us to merge PDF files in command line on Linux."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-install-poppler-utils",
      children: "How to install poppler-utils?"
    }), "\n", createVNode(_components.p, {
      children: "Poppler-utils is available in the official repositories of most Linux distributions. You can install it using your package manager. For example, on Debian-based systems, such as Ubuntu, you can use the following command:"
    }), "\n", createVNode(_components.p, {
      children: "For Debian-based systems like Ubuntu, you can install poppler-utils using the following command:"
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
            children: " poppler-utils"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "For Red Hat-based systems such as Fedora or CentOS, use:"
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
            children: " yum"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " poppler-utils"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "To verify that poppler-utils is installed, you can run the following command:"
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
            children: "pdftotext"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You should see something like this:"
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
            children: "pdftotext version 0.86.1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Copyright 2005-2019 The Poppler Developers - http://poppler.freedesktop.org"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Copyright 1996-2011 Glyph & Cog, LLC"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-use-pdftotext",
      children: "How to use pdftotext?"
    }), "\n", createVNode(_components.p, {
      children: "The syntax of pdftotext is very simple. You just need to specify the PDF file that you want to convert to text, and optionally the name of the output text file. For example, if you want to convert a file called input.pdf to a file called output.txt, you can use the following command:"
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
            children: "pdftotext"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " input.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " output.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "If you do not specify the output file name, pdftotext will use the same name as the input file, but with the .txt extension. For example, if you want to convert a file called input.pdf to a file called input.txt, you can use the following command:"
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
            children: "pdftotext"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " input.pdf"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You can also use the - option to read the PDF file from the standard input or write the text to the standard output. For example, if you want to convert a PDF file that is piped from another command, you can use the following command:"
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
            children: "cat"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " input.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pdftotext"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-customize-the-output-format",
      children: "How to customize the output format?"
    }), "\n", createVNode(_components.p, {
      children: "Pdftotext has several options that allow you to customize the output format of the text. Here are some of the most useful ones:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "-layout: preserves the original layout of the PDF file, including columns, tables, etc."
      }), "\n", createVNode(_components.li, {
        children: "-raw: keeps the original order of the text, but ignores the layout."
      }), "\n", createVNode(_components.li, {
        children: "-htmlmeta: generates an HTML file with meta information, such as title, author, etc."
      }), "\n", createVNode(_components.li, {
        children: "-bbox: generates an HTML file with bounding box information for each word."
      }), "\n", createVNode(_components.li, {
        children: "-f number: specifies the first page to convert."
      }), "\n", createVNode(_components.li, {
        children: "-l number: specifies the last page to convert."
      }), "\n", createVNode(_components.li, {
        children: "-enc encoding: specifies the encoding of the output text, such as UTF-8, ISO-8859-1, etc."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For example, if you want to convert the first 10 pages of a PDF file to an HTML file with meta information and bounding boxes, you can use the following command:"
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
            children: "pdftotext"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -htmlmeta"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -bbox"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " input.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " output.html"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You can see the full list of options by running the following command:"
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
            children: "pdftotext"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "pdftotext"
      }), " utility from the ", createVNode(_components.code, {
        children: "poppler-utils"
      }), " package provides a simple and efficient way to extract text from PDF files on Linux. Whether you need to extract text for data analysis, content repurposing, or any other reason, ", createVNode(_components.code, {
        children: "pdftotext"
      }), " can be a valuable tool in your Linux command line toolkit."]
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

const url = "src/content/posts/pdf-extract-text-linux-cmd.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pdf-extract-text-linux-cmd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pdf-extract-text-linux-cmd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
