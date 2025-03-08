import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { i as img1 } from './groq-mistral-streamlit_STNBM9mC.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-01T00:00:00.000Z",
  "title": "How to Integrate FREE Groq API and Mistral LLM into Your Streamlit App",
  "description": "Learn How to Integrate Groq API and Mistral LLM into Your Streamlit App to ",
  "image": "../../assets/images/24/02/groq-api-mistral-streamlit.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["groq", "streamlit"],
  "canonical": "https://www.bitdoze.com/groq-api-mistral-streamlit/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "video-with-groq-api-mistral-and-streamlit",
    "text": "Video with Groq API, Mistral and Streamlit"
  }, {
    "depth": 2,
    "slug": "how-to-use-groq-api-with-python",
    "text": "How To Use Groq API with Python"
  }, {
    "depth": 2,
    "slug": "how-to-use-groq-api-with-streamlit",
    "text": "How To Use Groq API with Streamlit"
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
      children: "The Groq LPU™ Inference Engine is a specialized processing system developed by Groq to handle computationally intensive applications, particularly Large Language Models (LLMs). The LPU stands for Language Processing Unit™ and is designed to provide exceptional sequential performance, high accuracy, and instant memory access."
    }), "\n", createVNode(_components.p, {
      children: "It aims to overcome bottlenecks in LLMs related to compute density and memory bandwidth, offering faster text generation compared to traditional processors like GPUs"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://groq.com/",
        children: "Groq"
      }), " allows you to use for free the LLMs : Llama-2 and Mistral, the latest one started to be known after Microsoft invested in them."]
    }), "\n", createVNode(_components.p, {
      children: "Groq allows you to chat with both LLMs for FREE and see how fast things are. Lately, Groq released the API that will allow you to build apps on top of it and harvest the speed that Groq has."
    }), "\n", createVNode(_components.p, {
      children: "Groq has also a playground similar to OpenAI that will allow you to chat with the LLMs and add system roles."
    }), "\n", createVNode(_components.h2, {
      id: "video-with-groq-api-mistral-and-streamlit",
      children: "Video with Groq API, Mistral and Streamlit"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/uika9hrAdro",
      label: "Integrate FREE Groq API and Mistral LLM into Your Streamlit App"
    }), "\n", createVNode(_components.h2, {
      id: "how-to-use-groq-api-with-python",
      children: "How To Use Groq API with Python"
    }), "\n", createVNode(_components.p, {
      children: "Groq has a Python package that can be used, you just need to install it with:"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "pip install groq"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "After you can use it as below:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Imports"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "import os:"
        }), " This imports the standard ", createVNode(_components.code, {
          children: "os"
        }), " library, which provides ways to interact with the operating system. It’s used here to access environment variables."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "from groq import Groq:"
        }), " Imports the necessary ", createVNode(_components.code, {
          children: "Groq"
        }), " class from the Groq Python library for interacting with the Groq API."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "API Key Setup"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "client "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Groq"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " api_key"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "os.environ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"GROQ_API_KEY\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.code, {
            children: "api_key=os.environ.get(\"GROQ_API_KEY\")"
          })
        }), ": This retrieves the Groq API key stored in an environment variable named “GROQ_API_KEY”. It’s a more secure way of managing the API key than including it directly in the code."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.code, {
            children: "client = Groq(...)"
          })
        }), ": This creates a Groq client object, which is your primary way of interacting with the Groq API."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Chat Completion Function"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "completion "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " client.chat.completions."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "create"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " model"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"mixtral-8x7b-32768\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " messages"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[ "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " temperature"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " max_tokens"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5640"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " top_p"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " stream"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "True"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: " stop"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "client.chat.completions.create()"
        }), ": This function call initiates a chat completion task using the Groq API. It’s designed for generating conversational text responses."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "model=“mixtral-8x7b-32768”"
        }), ": Selects a specific Groq language model for the task."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "messages=[…]"
        }), ": A list defining the initial conversation structure:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "\"role\": \"system\""
            }), ": Designates a system message."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "\"content\": \"...\""
            }), ": Provides instructions that tell the model to act like a YouTube expert focused on generating titles for a given keyword"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "temperature=0.5"
        }), ": Controls randomness in output. Lower values lead to more predictable results."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "max_tokens=5640"
        }), ": Sets a maximum limit on the number of tokens (roughly words or word parts) in the generated response."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "top_p=1"
        }), ": Influences the sampling of tokens during generation."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "stream=True"
        }), ": Requests that the output is streamed as it’s generated, rather than providing the entire output all at once."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "stop=None"
        }), ": No specific stop sequence is indicated."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Output Handling"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " chunk "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " completion:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(chunk.choices["
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "].delta.content "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.code, {
            children: "for chunk in completion"
          })
        }), ": Iterates over the streamed results from the chat completion task."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.code, {
            children: "print(chunk.choices[0].delta.content or \"\", end=\"\")"
          })
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Prints the content of the first suggested title (", createVNode(_components.code, {
              children: "chunk.choices[0]"
            }), ")."]
          }), "\n", createVNode(_components.li, {
            children: ["The ", createVNode(_components.code, {
              children: "or \"\""
            }), " handles cases where there might not be content."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "end=\"\""
            }), " prevents adding a newline after each title, keeping the output in a single line."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "An example of complete code would be:"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " os"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " groq "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " Groq"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "client "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Groq"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  api_key"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "os.environ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"GROQ_API_KEY\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "completion "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " client.chat.completions."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "create"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  model"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"mixtral-8x7b-32768\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  messages"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      \"role\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"system\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      \"content\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"You are a YouTube expert creator who likes to write engaging titles for a keyword. "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "You will provide 10 attention Grabbing Youtube titles on keywords specified by the user.\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      \"role\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"user\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      \"content\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Install WordPress on Docker\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  ],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  temperature"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  max_tokens"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5640"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  top_p"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  stream"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "True"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "  stop"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " chunk "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " completion:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(chunk.choices["
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "].delta.content "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The above will provide 10 YouTube video titles for the video ", createVNode(_components.code, {
        children: "Install WordPress on Docker"
      }), ". And if you run it you will see that results are provided very fast."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-use-groq-api-with-streamlit",
      children: "How To Use Groq API with Streamlit"
    }), "\n", createVNode(_components.p, {
      children: ["If you want to add a UI to your Python code you can do that easily with Streamlit or any other ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/best-python-web-frameworks/",
        children: "Python UI Library"
      })]
    }), "\n", createVNode(_components.p, {
      children: "First, thing will be to install Streamlit near Groq:"
    }), "\n", createVNode(_components.p, {
      children: "To do that for my previous example you will have a code like:"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "pip install streamlit"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Then you will have the Python with Streamlit code:"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " os"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " streamlit "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " st"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " groq "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " Groq"
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
            children: "# Function to get Groq completions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " get_groq_completions"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: "user_content"
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
              color: "#ABB2BF"
            },
            children: "    client "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Groq"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        api_key"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "os.environ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"GROQ_API_KEY\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    completion "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " client.chat.completions."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "create"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        model"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"mixtral-8x7b-32768\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        messages"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                \"role\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"system\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                \"content\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"You are a YouTube expert creator who likes to write engaging titles for a keyword. "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "You will provide 10 attention-grabbing YouTube titles on keywords specified by the user.\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                \"role\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"user\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                \"content\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": user_content"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "            }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        temperature"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        max_tokens"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5640"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        top_p"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        stream"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "True"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "        stop"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "None"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    result "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " chunk "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " completion:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        result "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " chunk.choices["
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "].delta.content "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " result"
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
            children: "# Streamlit interface"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "():"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"YouTube Title Generator\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    user_content "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "text_input"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Enter the keyword for YouTube titles:\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Generate Titles\""
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
              color: "#C678DD"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " user_content:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "                st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "warning"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Please enter a keyword before generating titles.\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "                return"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "info"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Generating titles... Please wait.\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        generated_titles "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " get_groq_completions"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(user_content)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "success"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Titles generated successfully!\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
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
            children: "        # Display the generated titles"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "markdown"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"### Generated Titles:\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        st."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "text_area"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "generated_titles, "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "height"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " __name__"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"__main__\""
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
              color: "#61AFEF"
            },
            children: "    main"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The Streamlit-Mistral-Groq code was generated with the help of ChatGPT as I don’t know that well either of the codes but is fully functional. You can use AI tools to help you build some things. At the end you can go and run the Streamlit App with"
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
      "data-language": "python",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "streamlit run app.py"
          })
        })
      })
    }), "\n", createVNode($$Picture, {
      src: img1,
      alt: "Streamlit Groq App"
    }), "\n", createVNode(_components.p, {
      children: ["When you are ready you can go and deploy the app for free in Streamlit Cloud or on your own VPS with: ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/streamlit-deploy-vps-cloudflare/",
        children: "Deploy Streamlit on a VPS and Proxy to Cloudflare Tunnels"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Groq can help you build very fast AI applications because of their faster LPU and Mistral is an LLM that is not for behind ChatGPT 4, you can use both FREE and see if they are useful to you."
    }), "\n", createVNode(_components.p, {
      children: "I hope this article motivated you to start and see what both have to offer."
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

const url = "src/content/posts/groq-api-mistral-streamlit.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/groq-api-mistral-streamlit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/groq-api-mistral-streamlit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
