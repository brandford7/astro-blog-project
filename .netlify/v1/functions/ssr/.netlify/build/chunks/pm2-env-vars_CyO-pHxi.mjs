import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-01-20T00:00:00.000Z",
  "title": "Mastering Environment Variables in PM2: A Comprehensive Guide",
  "description": "Learn how to effectively pass and manage environment variables in PM2. This guide covers commands, configuration files, updating variables, best practices, and more.",
  "image": "../../assets/images/24/01/pm2-env-vars.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["pm2"],
  "canonical": "https://www.bitdoze.com/pm2-env-vars/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-the-command-to-set-an-environment-variable-when-starting-a-process-in-pm2",
    "text": "What is the command to set an environment variable when starting a process in PM2?"
  }, {
    "depth": 2,
    "slug": "how-to-update-an-environment-variable-for-a-running-application-in-pm2",
    "text": "How to update an environment variable for a running application in PM2?"
  }, {
    "depth": 2,
    "slug": "how-to-list-all-environment-variables-set-in-pm2",
    "text": "How to List All Environment Variables Set in PM2"
  }, {
    "depth": 2,
    "slug": "best-practices-for-managing-environment-variables-in-pm2",
    "text": "Best Practices for Managing Environment Variables in PM2?"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "PM2 is a powerful, feature-rich process manager for applications. It provides developers with a robust set of tools to keep applications online 24/7, manage log files, and automate common tasks. One of the key features of PM2 is its ability to manage environment variables, which are crucial for configuring applications and making them adaptable to different environments."
    }), "\n", createVNode(_components.p, {
      children: ["Environment variables in PM2 can be set in various ways, including directly in the command line when starting a process, or within the PM2 configuration file, also known as the ecosystem file. These variables can be updated even while an application is running, providing flexibility and control over the application’s environment.\r\nCheck ", createVNode(_components.a, {
        href: "https://www.bitdoze.com/pm2-manage-apps/",
        children: "How to Manage Applications with PM2"
      }), " for a complete tutorial."]
    }), "\n", createVNode(_components.p, {
      children: "In the following sections, we will delve deeper into how to set, manage, and update environment variables in PM2, along with some best practices to follow."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-the-command-to-set-an-environment-variable-when-starting-a-process-in-pm2",
      children: "What is the command to set an environment variable when starting a process in PM2?"
    }), "\n", createVNode(_components.p, {
      children: "Environment variables are variables that are defined outside of your application code, and can be accessed by your application at runtime. Environment variables are useful for storing configuration settings, secrets, or other information that you don’t want to hardcode in your application code, or that you want to change depending on the environment (such as development, testing, or production)."
    }), "\n", createVNode(_components.p, {
      children: ["To set an environment variable when starting a process in PM2, you can use the ", createVNode(_components.code, {
        children: "--env"
      }), " option, followed by the name of the environment variable and its value. For example, to set the environment variable ", createVNode(_components.code, {
        children: "PORT"
      }), " to ", createVNode(_components.code, {
        children: "3000"
      }), " when starting ", createVNode(_components.code, {
        children: "app.js"
      }), ", you can run the following command:"]
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
            children: "# Set the PORT environment variable to 3000 when starting app.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " app.js"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --env"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PORT="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "3000"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can also set multiple environment variables at once, by separating them with commas. For example, to set the environment variables ", createVNode(_components.code, {
        children: "PORT"
      }), ", ", createVNode(_components.code, {
        children: "DB_URL"
      }), ", and ", createVNode(_components.code, {
        children: "SECRET"
      }), " when starting ", createVNode(_components.code, {
        children: "app.js"
      }), ", you can run the following command:"]
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
            children: "# Set multiple environment variables when starting app.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " app.js"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --env"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PORT=3000,DB_URL=mongodb://localhost:27017/mydb,SECRET=abc123"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Alternatively, you can use the env option in your configuration file, and specify the environment variables as key-value pairs. For example, to set the same environment variables as above when starting ", createVNode(_components.code, {
        children: "app.js"
      }), ", you can use the following configuration file:"]
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "exports"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  apps"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ["
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
              color: "#E06C75"
            },
            children: "      script"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"app.js\""
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
              color: "#E06C75"
            },
            children: "      env"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "        PORT"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "3000"
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
              color: "#E06C75"
            },
            children: "        DB_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"mongodb://localhost:27017/mydb\""
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
              color: "#E06C75"
            },
            children: "        SECRET"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"abc123\""
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
            children: "      },"
          })
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
            children: "  ],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Then, you can run the following command to start your application with the configuration file:"
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
            children: "# Start app.js with the configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config.js"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The advantages of setting environment variables when starting a process in PM2 are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It allows you to pass and access configuration settings, secrets, or other information to your application without hardcoding them in your code."
      }), "\n", createVNode(_components.li, {
        children: "It allows you to change the environment variables depending on the environment (such as development, testing, or production), by using different configuration files or commands."
      }), "\n", createVNode(_components.li, {
        children: "It allows you to keep your environment variables consistent across all your processes, by using the same configuration file or command."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-update-an-environment-variable-for-a-running-application-in-pm2",
      children: "How to update an environment variable for a running application in PM2?"
    }), "\n", createVNode(_components.p, {
      children: "Sometimes, you may need to update an environment variable for a running application in PM2, without stopping or restarting the application. For example, you may want to change the value of a configuration setting, a secret, or a feature flag."
    }), "\n", createVNode(_components.p, {
      children: ["To update an environment variable for a running application in PM2, you can use the ", createVNode(_components.code, {
        children: "pm2 set"
      }), " command, followed by the name of the application, the name of the environment variable, and the new value. For example, to update the environment variable ", createVNode(_components.code, {
        children: "PORT"
      }), " to ", createVNode(_components.code, {
        children: "4000"
      }), " for the application app.js, you can run the following command:"]
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
            children: "# Update the PORT environment variable to 4000 for app.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " app.js:PORT"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4000"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This command will update the environment variable in the PM2 process list, and send a SIGUSR2 signal to the application, which will trigger a reload of the environment variables. However, this command will not update the environment variable in the configuration file, so you need to manually edit the file if you want to persist the change."
    }), "\n", createVNode(_components.p, {
      children: "The advantages of updating an environment variable for a running application in PM2 are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It allows you to change the environment variables without stopping or restarting the application, which can improve the availability and responsiveness of your application."
      }), "\n", createVNode(_components.li, {
        children: "It allows you to test different values of the environment variables, and see the effects on your application in real time."
      }), "\n", createVNode(_components.li, {
        children: "It allows you to override the environment variables that are set in the configuration file, or the system, for a specific application."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The disadvantages of updating an environment variable for a running application in PM2 are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It does not update the environment variable in the configuration file, so you need to manually edit the file if you want to persist the change."
      }), "\n", createVNode(_components.li, {
        children: ["It does not update the environment variable for all the processes of the application, if you are using ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/pm2-fork-cluster/",
          children: "cluster mode"
        }), ". You need to specify the process ID or the process name with the index to update the environment variable for a specific process. For example, to update the environment variable PORT to 4000 for the first process of app.js, you can run the following command:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "# Update the PORT environment variable to 4000 for the first process of app.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " app.js-0:PORT"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4000"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "It does not work for some environment variables that are read only once at the start of the application, such as NODE_ENV or DEBUG. You need to restart the application to apply the change for these environment variables."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-list-all-environment-variables-set-in-pm2",
      children: "How to List All Environment Variables Set in PM2"
    }), "\n", createVNode(_components.p, {
      children: ["To list all the environment variables for a specific process in PM2, you can use the pm2 env ", createVNode(_components.code, {
        children: "process_name_or_id"
      }), " command. Replace ", createVNode(_components.code, {
        children: "process_name_or_id"
      }), " with the name or ID of the process you’re interested in. This command will display all the active environment variables for the specified process.\r\nPlease note that this command only shows the environment variables for the specified process. It does not show the environment variables defined in the ecosystem file that are not currently active for the process. To see these variables, you would need to look at the ecosystem file directly."]
    }), "\n", createVNode(_components.h2, {
      id: "best-practices-for-managing-environment-variables-in-pm2",
      children: "Best Practices for Managing Environment Variables in PM2?"
    }), "\n", createVNode(_components.p, {
      children: "Environment variables are an essential part of any Node.js application, as they allow you to store and access configuration settings, secrets, or other information that you don’t want to hardcode in your application code, or that you want to change depending on the environment. However, managing environment variables in PM2 can be tricky, as you need to consider the following aspects:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Security: You need to ensure that your environment variables are not exposed to unauthorized parties, such as hackers, competitors, or malicious users. You should avoid storing your environment variables in plain text files, such as .env or .json, or in your version control system, such as Git or SVN. You should also use encryption or hashing techniques to protect your sensitive environment variables, such as passwords, tokens, or keys."
      }), "\n", createVNode(_components.li, {
        children: "Consistency: You need to ensure that your environment variables are consistent across all your processes, environments, and servers. You should use the same names, values, and formats for your environment variables, and avoid using conflicting or ambiguous names. You should also use the same configuration files or commands to set your environment variables, and avoid using different methods for different applications or environments."
      }), "\n", createVNode(_components.li, {
        children: "Maintenance: You need to ensure that your environment variables are up to date and easy to maintain. You should document your environment variables and their meanings, and keep them organized and structured. You should also review your environment variables regularly, and remove any unused or obsolete ones. You should also use the PM2 commands or features to update or reload your environment variables, and avoid manually editing or restarting your processes."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Here are some best practices for managing environment variables in PM2, based on the aspects mentioned above:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Use the configuration file to set and manage your environment variables, as it allows you to specify the environment variables for each application, or for all applications at once, in one place. You can also use different configuration files for different environments, such as development, testing, or production, by using the ", createVNode(_components.code, {
          children: "--env"
        }), " option to specify the name of the file."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "env"
        }), " option in the top level of the configuration file to set the environment variables for all applications, and use the env option in each application to override or add the environment variables for a specific application. This will help you keep your environment variables consistent and organized."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "process.env"
        }), " object to access the environment variables in your application code, and avoid using hard-coded values or global variables. This will help you keep your application code secure and flexible."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "pm2 set"
        }), " command to update an environment variable for a running application, without stopping or restarting the application. This will help you change the environment variables dynamically and efficiently."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "pm2 reload"
        }), " command to reload your application with the updated environment variables, without losing any requests or causing any downtime. This will help you apply the changes to your environment variables gracefully and reliably."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "pm2 env"
        }), " command to list all the environment variables set in PM2, and their values. This will help you check and verify your environment variables easily and quickly."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "Environment variables are an essential part of any application, as they allow you to store and access configuration settings, secrets, or other information that you don’t want to hardcode in your application code, or that you want to change depending on the environment. However, managing environment variables in PM2 can be tricky, as you need to consider the security, consistency, and maintenance aspects of your environment variables."
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

const url = "src/content/posts/pm2-env-vars.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pm2-env-vars.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pm2-env-vars.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
