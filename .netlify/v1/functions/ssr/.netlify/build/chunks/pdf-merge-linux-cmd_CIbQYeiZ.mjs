import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-01-23T00:00:00.000Z",
  "title": "How To Merge PDF Files In Command Line On Linux",
  "description": "Learn how to merge multiple PDF files into one using a simple and powerful tool called poppler-utils. This article will show you how to install poppler-utils, how to use the pdfunite command, and how to troubleshoot common errors",
  "image": "../../assets/images/24/01/merge-pdf-cmd.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["tutorials"],
  "canonical": "https://www.bitdoze.com/pdf-merge-linux-cmd/"
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
    "slug": "how-to-use-pdfunite",
    "text": "How to use pdfunite?"
  }, {
    "depth": 2,
    "slug": "how-to-troubleshoot-common-errors",
    "text": "How to troubleshoot common errors?"
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
    em: "em",
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
        }), " ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/pdf-extract-text-linux-cmd/",
          children: "converts a PDF file to plain text"
        }), "."]
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
        }), " merges several PDF files into one."]
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
            children: "pdfunite"
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
            children: "pdfunite version 0.86.1"
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
      id: "how-to-use-pdfunite",
      children: "How to use pdfunite?"
    }), "\n", createVNode(_components.p, {
      children: "The syntax of pdfunite is very simple. You just need to specify the PDF files that you want to merge, followed by the name of the output file. For example, if you want to merge file1.pdf, file2.pdf, and file3.pdf into a single file called output.pdf, you can use the following command:"
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
            children: "pdfunite"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file1.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file2.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file3.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " output.pdf"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You can also use wildcards to merge all the PDF files in a directory. For example, if you want to merge all the PDF files in the current directory into a file called output.pdf, you can use the following command:"
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
            children: "pdfunite"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ".pdf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " output.pdf"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You can also use the - option to read the PDF files from the standard input. For example, if you want to merge the PDF files that are listed in a text file called files.txt, you can use the following command:"
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
            children: "pdfunite"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " < "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "files.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " output.pdf"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The files.txt file should contain one PDF file name per line, such as:"
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
            children: "file1.pdf"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "file2.pdf"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "file3.pdf"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-troubleshoot-common-errors",
      children: "How to troubleshoot common errors?"
    }), "\n", createVNode(_components.p, {
      children: "Sometimes, you may encounter some errors when using pdfunite. Here are some common ones and how to fix them:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Permission denied:"
        }), " This means that you do not have the permission to read or write the PDF files. You can check the file permissions using the ls -l command, and change them using the chmod command. For example, to give read and write permission to the owner of the file, you can use the following command:"]
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
            children: "chmod"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " u+rw"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.pdf"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "No such file or directory:"
          }), " This means that the PDF file does not exist or the file name is incorrect. You can check the file name using the ls command, and make sure that it matches the one you typed. You can also use the tab key to autocomplete the file name."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Invalid or damaged PDF file:"
          }), " This means that the PDF file is corrupted or not a valid PDF file. You can try to repair the PDF file using the pdfinfo command with the -repair option. For example, to repair a file called file.pdf, you can use the following command:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pdfinfo"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -repair"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.pdf"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "If the repair is successful, you will see a message like this:"
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
            children: "Repairing PDF file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Done. Output file written to file.repaired.pdf"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can then use the repaired file instead of the original one."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["Merging PDF files on Linux using the command line is a quick and straightforward process with the help of ", createVNode(_components.code, {
        children: "poppler-utils"
      }), ". Whether you’re dealing with a couple of documents or a batch of files, pdfunite provides a reliable way to combine PDFs without the need for a graphical interface.\r\nRemember to check the merged document to ensure all pages are present and in the correct order. With these simple steps, you can efficiently manage PDF files on your Linux system."]
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

const url = "src/content/posts/pdf-merge-linux-cmd.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pdf-merge-linux-cmd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pdf-merge-linux-cmd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
