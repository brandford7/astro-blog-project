import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/pm2-monit.DG8AGE66.png","width":3136,"height":1716,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/01/pm2-monit.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-01-19T00:00:00.000Z",
  "title": "How to Manage Applications with PM2: A Complete Guide",
  "description": "Learn how to use PM2, a powerful and easy-to-use process manager for Node.js, to run and monitor your applications in production. Whether you are using Node.js, Python, or any other language, PM2 can help you improve the scalability, performance, and reliability of your applications.",
  "image": "../../assets/images/24/01/pm2-manage.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["pm2"],
  "canonical": "https://www.bitdoze.com/pm2-manage-apps/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-pm2",
    "text": "What is PM2"
  }, {
    "depth": 2,
    "slug": "how-to-install-pm2",
    "text": "How to Install PM2"
  }, {
    "depth": 2,
    "slug": "how-to-manage-applications-with-pm2",
    "text": "How to Manage Applications with PM2"
  }, {
    "depth": 3,
    "slug": "best-practices-for-managing-applications-with-pm2",
    "text": "Best Practices for Managing Applications with PM2"
  }, {
    "depth": 4,
    "slug": "nodejs-applications",
    "text": "Node.js Applications"
  }, {
    "depth": 4,
    "slug": "python-applications",
    "text": "Python Applications"
  }, {
    "depth": 3,
    "slug": "how-to-start-your-application-with-pm2",
    "text": "How to Start Your Application with PM2"
  }, {
    "depth": 4,
    "slug": "you-can-use-a-json-to-start-your-application",
    "text": "You can use a JSON to start your application"
  }, {
    "depth": 4,
    "slug": "you-can-use-command-line",
    "text": "You can use command line:"
  }, {
    "depth": 3,
    "slug": "how-to-check-the-status-and-logs-of-your-application-with-pm2",
    "text": "How to Check the Status and Logs of Your Application with PM2"
  }, {
    "depth": 3,
    "slug": "how-to-monitor-the-performance-of-your-application-with-pm2",
    "text": "How to Monitor the Performance of Your Application with PM2"
  }, {
    "depth": 3,
    "slug": "how-to-manage-the-state-of-your-application-with-pm2",
    "text": "How to Manage the State of Your Application with PM2"
  }, {
    "depth": 3,
    "slug": "how-to-configure-automatic-restarts-with-pm2-for-your-application",
    "text": "How to Configure Automatic Restarts with PM2 for Your Application"
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
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "If you are developing applications for the web, you know how important it is to have a reliable and efficient way to run and manage them in production. You need a process manager that can help you run your applications in the background, scale them up or down, monitor their status and performance, handle errors and crashes, and more."
    }), "\n", createVNode(_components.p, {
      children: "PM2 is a process manager for Node.js applications that can also be used to manage applications written in any other language, such as Python, Ruby, PHP, etc. PM2 is powerful, easy to use, and has a lot of features that can make your life easier as a developer. In this article, we will show you how to use PM2 to manage your applications, and explain the benefits of using PM2 for your projects."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-pm2",
      children: "What is PM2"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://pm2.keymetrics.io/",
        children: "PM2"
      }), " is a process manager for Node.js applications that can also be used to manage applications written in any other language. PM2 is an open-source project that has been developed since 2014, and has over 30 million downloads on npm. PM2 is used by many companies and organizations, such as Microsoft, Netflix, NASA, IBM, and more."]
    }), "\n", createVNode(_components.p, {
      children: "PM2 allows you to run your applications in the background, as daemon processes, without blocking your terminal or console. PM2 can also help you scale your applications horizontally or vertically, by running multiple instances of your application on the same or different machines. PM2 can also monitor your applications, and provide you with useful information, such as the status, logs, memory, cpu, event loop, and network usage of your applications. PM2 can also handle errors and crashes gracefully, by restarting your applications automatically, and keeping them alive. PM2 can also provide you with a web interface, where you can access the same dashboard as the command-line interface, but from your browser."
    }), "\n", createVNode(_components.p, {
      children: "PM2 supports applications written in any language, such as Node.js, Python, Ruby, PHP, etc. PM2 can also run any type of application, such as web servers, microservices, cron jobs, chatbots, etc. PM2 can also run any type of script, such as shell scripts, bash scripts, python scripts, etc."
    }), "\n", createVNode(_components.p, {
      children: "PM2 is designed to be simple and intuitive, and has a lot of features and options that you can customize to suit your needs. PM2 is also well-documented, and has a large and active community that can help you with any questions or issues that you may have."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-install-pm2",
      children: "How to Install PM2"
    }), "\n", createVNode(_components.p, {
      children: "Before you can use PM2 to manage your applications, you need to install PM2 on your system. PM2 is a Node.js module, so you need to have Node.js and npm installed first. You can check the official documentation for Node.js installation instructions for your operating system."
    }), "\n", createVNode(_components.p, {
      children: "Once you have Node.js and npm installed, you can install PM2 globally with the following command:"
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -g"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pm2"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will install PM2 as a global module that you can access from anywhere on your system. You can verify that PM2 is installed by running:"
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --version"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This should display the current version of PM2 that you have installed."
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
            children: "[PM2] PM2 Successfully daemonized"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5.3.0"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-manage-applications-with-pm2",
      children: "How to Manage Applications with PM2"
    }), "\n", createVNode(_components.p, {
      children: "In this section, we are going to see how you can use PM2 to run your node.js applications or python ones. First, we will start with some of the things you need to look at before being informed."
    }), "\n", createVNode(_components.h3, {
      id: "best-practices-for-managing-applications-with-pm2",
      children: "Best Practices for Managing Applications with PM2"
    }), "\n", createVNode(_components.p, {
      children: "Depending on the type and language of your application, there are some best practices that you should follow when managing your applications with PM2. Here are some of the best practices for managing Node.js and Python applications with PM2."
    }), "\n", createVNode(_components.h4, {
      id: "nodejs-applications",
      children: "Node.js Applications"
    }), "\n", createVNode(_components.p, {
      children: "Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a browser. Node.js is also the platform that PM2 is built on, and that PM2 supports natively. PM2 can run and manage any Node.js application, such as web servers, microservices, cron jobs, chatbots, etc."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the best practices for managing Node.js applications with PM2:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "node"
        }), " interpreter to run your Node.js applications. PM2 will automatically detect and use the node interpreter if you don’t specify one."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "cluster mode"
        }), " to run your Node.js applications. The ", createVNode(_components.code, {
          children: "cluster"
        }), " mode allows you to run multiple instances of your application, and enable load balancing and inter-process communication between them. The ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/pm2-fork-cluster/",
          children: "cluster mode"
        }), " can improve the performance and scalability of your Node.js applications, especially on multi-core machines. PM2 will automatically use the cluster mode if you don’t specify one."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "max"
        }), " value for the ", createVNode(_components.code, {
          children: "instances"
        }), " field to run as many instances of your application as the number of CPU cores on your system. This can optimize the resource utilization and throughput of your Node.js applications. PM2 will automatically use the max value if you don’t specify one."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "--watch"
        }), " option to enable the watch mode for your Node.js applications. The watch mode allows PM2 to monitor the changes in your code, and reload your applications automatically. The watch mode can help you with the development and testing of your Node.js applications, as you don’t have to restart them manually every time you make a change. You can enable the watch mode by adding the ", createVNode(_components.code, {
          children: "--watch"
        }), " option to your PM2 start command, or by setting the watch field to true in your JSON configuration file."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "python-applications",
      children: "Python Applications"
    }), "\n", createVNode(_components.p, {
      children: "Python is a popular and versatile programming language that can be used for web development, data science, machine learning, and more. PM2 can also run and manage any Python application, such as web servers, microservices, cron jobs, chatbots, etc."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the best practices for managing Python applications with PM2:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "python"
        }), " interpreter to run your Python applications. PM2 can use any interpreter that you have installed on your system, such as python, python3, python2, etc. You need to specify the interpreter that you want to use."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "fork"
        }), " mode to run your Python applications. The ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/pm2-fork-cluster/",
          children: "fork mode"
        }), " allows you to run each instance of your application in a separate process, without any load balancing or inter-process communication. The ", createVNode(_components.code, {
          children: "fork"
        }), " mode is more suitable for Python applications, as Python has a global interpreter lock (GIL) that prevents multiple threads from executing Python code at the same time. You need to specify the fork mode in your JSON configuration file or command."]
      }), "\n", createVNode(_components.li, {
        children: ["Use a fixed number for the ", createVNode(_components.code, {
          children: "instances"
        }), " field to run a specific number of instances of your application. You can choose the number of instances that best suits your needs, depending on the resources and workload of your Python applications."]
      }), "\n", createVNode(_components.li, {
        children: ["Use the ", createVNode(_components.code, {
          children: "--no-autorestart"
        }), " option to disable the automatic restarts for your Python applications. PM2 will restart your applications automatically if they exit with a non-zero exit code, which can happen for various reasons, such as syntax errors, exceptions, signals, etc. However, this can also cause an infinite loop of restarts, if your Python applications have some persistent issues that prevent them from running properly. You can disable the automatic restarts by adding the ", createVNode(_components.code, {
          children: "--no-autorestart"
        }), " option to your PM2 start command, or by setting the autorestart field to false in your JSON configuration file."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "how-to-start-your-application-with-pm2",
      children: "How to Start Your Application with PM2"
    }), "\n", createVNode(_components.h4, {
      id: "you-can-use-a-json-to-start-your-application",
      children: "You can use a JSON to start your application"
    }), "\n", createVNode(_components.p, {
      children: "Below is an example:"
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
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"apps\""
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
            children: "      \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"your-app-name\""
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
            children: "      \"script\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"your-app-script.py\""
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
            children: "      \"interpreter\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"python3\""
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
            children: "      \"instances\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"max\""
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
            children: "      \"exec_mode\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"cluster\""
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
            children: "      \"env\""
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
            children: "        \"your-env-variable\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"your-env-value\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      }"
          })
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
            children: "  ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Here is a brief explanation of the main fields in the JSON configuration file:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "name: The name of your application. This will be used by PM2 to identify and display your application."
      }), "\n", createVNode(_components.li, {
        children: "script: The path to the main script of your application. This is the entry point of your application that PM2 will execute."
      }), "\n", createVNode(_components.li, {
        children: "interpreter: The interpreter to use to run your script. In this case, we are using python3, but you can also specify the full path to your Python executable if you have multiple versions installed."
      }), "\n", createVNode(_components.li, {
        children: "instances: The number of instances of your application that you want to run. You can specify a fixed number, or use max to run as many instances as the number of CPU cores on your system."
      }), "\n", createVNode(_components.li, {
        children: "exec_mode: The execution mode of your application. You can use fork to run each instance in a separate process, or cluster to enable load balancing and inter-process communication between your instances."
      }), "\n", createVNode(_components.li, {
        children: ["env: The ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/pm2-env-vars/",
          children: "environment variables"
        }), " that you want to pass to your application. You can specify any key-value pairs that you need for your application."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can save this file as ", createVNode(_components.code, {
        children: "your-app-config.json"
      }), " in the same directory as your Python script, or in any other location that you prefer. You can also customize the file name as you wish, as long as it has a ", createVNode(_components.code, {
        children: ".json"
      }), " extension."]
    }), "\n", createVNode(_components.p, {
      children: "More complex one for streamlit would be:"
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
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  \"apps\""
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
            children: "      \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"streamlit-app\""
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
            children: "      \"script\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"streamlit\""
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
            children: "      \"args\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"run\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"app.py\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "      \"cwd\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/path/to/your/streamlit/app\""
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
            children: "      \"interpreter\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"python3\""
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
            children: "      \"instances\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
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
              color: "#E06C75"
            },
            children: "      \"autorestart\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
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
            children: "      \"watch\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "false"
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
            children: "      \"max_memory_restart\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"1G\""
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
            children: "      \"log_date_format\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"YYYY-MM-DD HH:mm Z\""
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
            children: "      \"error_file\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/path/to/your/log/pm2/streamlit-app-error.log\""
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
            children: "      \"out_file\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"/path/to/your/log/pm2/streamlit-app-out.log\""
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
            children: "      \"merge_logs\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
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
            children: "  ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Then to run it just do:"
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
            children: " pm2-config.json"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "you-can-use-command-line",
      children: "You can use command line:"
    }), "\n", createVNode(_components.p, {
      children: "Command line is easeier and you can start a command right away with:"
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
            children: "#node"
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
            children: " your_app.js"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-node-app"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#python"
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
            children: " your_app.py"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-python-app"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --interpreter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " python3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#python streamlit app"
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
            children: " 'streamlit run path/to/app/app.py'"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " my-streamlit-app"
          })]
        })]
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "root@streamlit:~/streamlit-app/streamlit-tools# pm2 start  'streamlit run  app.py' --name my-streamlit-app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[PM2] Starting /usr/bin/bash in fork_mode (1 instance)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[PM2] Done."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "┌────┬─────────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ id │ name                │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├────┼─────────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ 0  │ my-streamlit-app    │ default     │ N/A     │ fork    │ 9484     │ 0s     │ 0    │ online    │ 0%       │ 10.3mb   │ root     │ disabled │"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "how-to-check-the-status-and-logs-of-your-application-with-pm2",
      children: "How to Check the Status and Logs of Your Application with PM2"
    }), "\n", createVNode(_components.p, {
      children: "PM2 provides several commands and features that allow you to check the status and logs of your application easily and effectively. Here are some of the most useful ones:"
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " status"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name:"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will display the status of your application, such as the name, the id, the mode, the pid, the uptime, the memory, and the cpu usage."
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will display the logs of your application, and show you any output or errors that your application generates. You can also use the —lines option to specify the number of lines to display, or the —err option to display only the error logs, or the —out option to display only the output logs."
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logrotate"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will rotate the logs of your application, and create a new log file every day. This can help you manage the size and number of your log files, and avoid filling up your disk space. You can also use the —rotate-interval option to specify the interval of log rotation, or the —max-size option to specify the maximum size of a log file, or the —retain option to specify the number of log files to keep."
    }), "\n", createVNode(_components.h3, {
      id: "how-to-monitor-the-performance-of-your-application-with-pm2",
      children: "How to Monitor the Performance of Your Application with PM2"
    }), "\n", createVNode(_components.p, {
      children: "PM2 provides several commands and features that allow you to monitor the performance of your application easily and effectively. Here are some of the most useful ones:"
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " monit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will open a dashboard that shows you the performance metrics of your application, such as the memory, the cpu, the event loop, and the network usage. You can also see the logs, the processes, and the custom metrics of your application on the same dashboard."
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "pm2 monit"
    }), "\n", createVNode(_components.h3, {
      id: "how-to-manage-the-state-of-your-application-with-pm2",
      children: "How to Manage the State of Your Application with PM2"
    }), "\n", createVNode(_components.p, {
      children: "PM2 provides several commands and features that allow you to manage the state of your application easily and effectively. Here are some of the most useful ones:"
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " stop"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will stop your application gracefully, and free up the resources that it was using. You can also use the —kill-timeout option to specify the timeout for the graceful stop, or the —force option to force the stop without waiting for the graceful stop."
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " restart"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will restart your application, and reload any changes that you made to your code or configuration file. You can also use the —update-env option to update the environment variables of your application, or the —only option to restart only a specific instance of your application."
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " reload"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name:"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will reload your application gracefully, without losing any requests or connections. This is similar to the restart command, but more gentle and smooth. You can also use the —update-env option to update the environment variables of your application, or the —only option to reload only a specific instance of your application."
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " delete"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your-app-name"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This will delete your application from PM2, and remove it from the list of applications that PM2 manages. You can also use the —force option to force the delete without stopping the application first."
    }), "\n", createVNode(_components.h3, {
      id: "how-to-configure-automatic-restarts-with-pm2-for-your-application",
      children: "How to Configure Automatic Restarts with PM2 for Your Application"
    }), "\n", createVNode(_components.p, {
      children: "PM2 can help you keep your application alive, by restarting it automatically if it exits with a non-zero exit code, which can happen for various reasons, such as syntax errors, exceptions, signals, etc. PM2 can also restart your application automatically if it exceeds a certain memory limit, which can happen if your application has a memory leak or a high memory consumption."
    }), "\n", createVNode(_components.p, {
      children: "To configure the automatic restarts with PM2 for your application, you can use the following fields in your JSON configuration file or in your command line:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "autorestart"
        }), ": This field determines whether PM2 should restart your application automatically or not. The default value is true, which means that PM2 will restart your application automatically. You can set this field to false if you want to disable the automatic restarts for your application."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "max_memory_restart"
        }), ": This field specifies the maximum memory limit for your application, in megabytes. If your application exceeds this limit, PM2 will restart it automatically. The default value is 0, which means that PM2 will not restart your application based on the memory limit. You can set this field to any positive number if you want to enable the memory-based restarts for your application."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "min_uptime"
        }), ": This field specifies the minimum uptime for your application, in milliseconds. If your application exits before this time, PM2 will consider it as an abnormal exit, and restart it automatically. The default value is 1000, which means that PM2 will restart your application if it exits within one second. You can set this field to any positive number if you want to adjust the minimum uptime for your application."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "max_restarts"
        }), ": This field specifies the maximum number of restarts for your application, within a certain time window. If your application reaches this limit, PM2 will stop trying to restart it, and mark it as errored. The default value is 15, which means that PM2 will try to restart your application up to 15 times, within 15 minutes. You can set this field to any positive number if you want to adjust the maximum restarts for your application."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If you want the app to be restarted automatically when the server is rebooted you should:"
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
            children: "pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " startup"
          })]
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
            children: " save"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The pm2 startup command is used to generate and configure a startup script for your operating system, ensuring that PM2 starts automatically when your system boots up. This command requires root (or administrator) privileges because it involves modifying system configurations."
    }), "\n", createVNode(_components.p, {
      children: "To do that for a different user you can:"
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
            children: " env"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PATH="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$PATH"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ":/usr/bin"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " startup"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " systemd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your_user"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --hp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /home/your_user"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Replace your_user with your actual username. Running this command will create a systemd service to start PM2 on boot."
    }), "\n", createVNode(_components.p, {
      children: "The pm2 save command is used to save the current list of running processes managed by PM2. It generates a dump file containing information about the running applications and their configurations. This dump file is then used by PM2 to restore the processes on system reboot."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, PM2 is a powerful tool for managing Python, nodejs or other applications . With its simple and user-friendly interface, it allows developers to easily deploy and monitor their applications in a production environment. By using PM2, you can ensure that your Python applications are running smoothly and efficiently."
    }), "\n", createVNode(_components.p, {
      children: "One of the key benefits of using PM2 is its process management capabilities. It allows you to easily start, stop, restart, and reload your application processes with just a few simple commands. Additionally, PM2 provides built-in load balancing features that help distribute incoming traffic across multiple instances of your application, ensuring high availability and optimal performance."
    }), "\n", createVNode(_components.p, {
      children: "Furthermore, PM2 offers detailed monitoring functionality that enables you to keep track of important metrics such as CPU usage, memory consumption, and response times. This real-time monitoring allows you to quickly identify any issues or bottlenecks in your application’s performance so that you can take appropriate measures to address them."
    }), "\n", createVNode(_components.p, {
      children: "Overall, by leveraging the power of PM2 for managing your Python applications, you can streamline your development workflow and enhance the stability and scalability of your projects. So why wait? Start using PM2 today and experience the benefits it brings to managing Python applications effortlessly!"
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

const url = "src/content/posts/pm2-manage-apps.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pm2-manage-apps.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/pm2-manage-apps.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
