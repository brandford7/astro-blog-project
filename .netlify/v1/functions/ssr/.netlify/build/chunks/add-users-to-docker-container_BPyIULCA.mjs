import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2023-07-03T00:00:00.000Z",
  "title": "How to Add Users to a Docker Container",
  "description": "Learn how to How to Add Users to a Docker Container to maker your work easier",
  "image": "../../assets/images/23/07/add-users-docker-container.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["docker"],
  "canonical": "https://www.bitdoze.com/add-users-to-docker-container/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-add-users-to-docker-container",
    "text": "Why Add Users to Docker Container?"
  }, {
    "depth": 3,
    "slug": "1-enhanced-security",
    "text": "1. Enhanced Security"
  }, {
    "depth": 3,
    "slug": "2-isolation-of-processes",
    "text": "2. Isolation of Processes"
  }, {
    "depth": 3,
    "slug": "3-better-resource-management",
    "text": "3. Better Resource Management"
  }, {
    "depth": 3,
    "slug": "4-collaboration-and-multi-tenancy",
    "text": "4. Collaboration and Multi-tenancy"
  }, {
    "depth": 3,
    "slug": "5-auditing-and-accountability",
    "text": "5. Auditing and Accountability"
  }, {
    "depth": 2,
    "slug": "creating-users-in-docker",
    "text": "Creating Users in Docker"
  }, {
    "depth": 3,
    "slug": "adding-users-to-docker-containers",
    "text": "Adding Users to Docker Containers"
  }, {
    "depth": 3,
    "slug": "managing-user-permissions",
    "text": "Managing User Permissions"
  }, {
    "depth": 2,
    "slug": "granting-permissions-to-docker-users",
    "text": "Granting Permissions to Docker Users"
  }, {
    "depth": 3,
    "slug": "understanding-user-roles",
    "text": "Understanding User Roles"
  }, {
    "depth": 3,
    "slug": "granting-permissions",
    "text": "Granting Permissions"
  }, {
    "depth": 2,
    "slug": "best-practices-for-user-management-in-docker-container",
    "text": "Best Practices for User Management in Docker Container"
  }, {
    "depth": 3,
    "slug": "1-use-non-root-users",
    "text": "1. Use Non-Root Users"
  }, {
    "depth": 3,
    "slug": "2-create-a-dedicated-user",
    "text": "2. Create a Dedicated User"
  }, {
    "depth": 3,
    "slug": "3-implement-user-namespaces",
    "text": "3. Implement User Namespaces"
  }, {
    "depth": 3,
    "slug": "4-limit-container-capabilities",
    "text": "4. Limit Container Capabilities"
  }, {
    "depth": 3,
    "slug": "5-use-volume-permissions-wisely",
    "text": "5. Use Volume Permissions Wisely"
  }, {
    "depth": 3,
    "slug": "6-regularly-update-containers-and-base-images",
    "text": "6. Regularly Update Containers and Base Images"
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Managing users in Docker containers is a crucial aspect of container security and access control. By assigning specific user privileges, you can ensure that only authorized individuals are able to interact with your containers. In this article, we will explore the steps on how to add users to a Docker container, allowing you to tightly control who can access and modify containerized environments."
    }), "\n", createVNode(_components.p, {
      children: "When it comes to adding users to a Docker container, there are a few different approaches you can take depending on your requirements. One approach involves creating a user in the Docker image itself, allowing for user-specific permissions and restrictions within the container. Another option is to map a host user to a user within the container, granting the same privileges as the host user. Both methods provide flexibility to tailor access levels based on your needs."
    }), "\n", createVNode(_components.p, {
      children: "In this guide, we will delve into the intricacies of adding users to Docker containers using these different approaches. Whether you’re looking to enhance security or streamline collaboration within your containerized environments, these techniques will empower you to manage user access effectively. So, let’s dive in and explore the steps involved in adding users to Docker containers!"
    }), "\n", createVNode(_components.h2, {
      id: "why-add-users-to-docker-container",
      children: "Why Add Users to Docker Container?"
    }), "\n", createVNode(_components.p, {
      children: "When working with Docker containers, adding users to your containers can bring several benefits. Let’s explore why it’s important:"
    }), "\n", createVNode(_components.h3, {
      id: "1-enhanced-security",
      children: "1. Enhanced Security"
    }), "\n", createVNode(_components.p, {
      children: "By adding users to Docker containers, you can follow the principle of least privilege. This means giving each user only the permissions they need to perform their specific tasks within the container. By restricting access to sensitive resources, you can reduce the risk of unauthorized activities or potential security breaches."
    }), "\n", createVNode(_components.h3, {
      id: "2-isolation-of-processes",
      children: "2. Isolation of Processes"
    }), "\n", createVNode(_components.p, {
      children: "Adding users allows for better isolation of processes within a container. Each user can have their own set of permissions and can execute tasks independently. This separation helps prevent interference between different processes, ensuring a more stable and secure container environment."
    }), "\n", createVNode(_components.h3, {
      id: "3-better-resource-management",
      children: "3. Better Resource Management"
    }), "\n", createVNode(_components.p, {
      children: "When multiple users are added to a Docker container, it becomes easier to allocate and control resources efficiently. Each user can have their own resource limits, preventing a single user or process from monopolizing system resources. This ensures fair distribution and optimal utilization of available resources."
    }), "\n", createVNode(_components.h3, {
      id: "4-collaboration-and-multi-tenancy",
      children: "4. Collaboration and Multi-tenancy"
    }), "\n", createVNode(_components.p, {
      children: "Adding users to Docker containers facilitates collaboration among team members. Each user can have their own credentials to access the container, allowing them to work on shared projects without sharing login credentials. It enhances accountability and enables multiple users to work simultaneously on different tasks or applications within the same container."
    }), "\n", createVNode(_components.h3, {
      id: "5-auditing-and-accountability",
      children: "5. Auditing and Accountability"
    }), "\n", createVNode(_components.p, {
      children: "By assigning unique user identities to individuals or processes within a Docker container, it becomes easier to track and audit activities. Each action can be attributed to a specific user, enabling better accountability and troubleshooting in case of issues or errors."
    }), "\n", createVNode(_components.p, {
      children: "In summary, adding users to Docker containers enhances security, enables process isolation, optimizes resource management, promotes collaboration, and facilitates auditing and accountability. By following these best practices, you can create a more controlled and secure container environment."
    }), "\n", createVNode(_components.h2, {
      id: "creating-users-in-docker",
      children: "Creating Users in Docker"
    }), "\n", createVNode(_components.p, {
      children: "When working with Docker containers, it can be useful to create multiple users with different privileges and access rights. In this section, we will explore how to add users to Docker containers effectively."
    }), "\n", createVNode(_components.p, {
      children: "Some other docker articles that can help you in your docker journey:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/copy-multiple-files-in-one-layer-using-a-dockerfile/",
          children: "Copy Multiple Files in One Layer Using a Dockerfile"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/install-docker-ubuntu-arm/",
          children: "Install Docker & Docker-compose for Ubuntu ARM"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/redirect-docker-logs-to-a-single-file/",
          children: "Redirect Docker Logs to a Single File"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/docker-env-vars/",
          children: "Environment Variables ARG and ENV in Docker"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "adding-users-to-docker-containers",
      children: "Adding Users to Docker Containers"
    }), "\n", createVNode(_components.p, {
      children: "To add users to Docker containers, follow these steps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Create a new user"
          }), ": Inside the Docker container, use the ", createVNode(_components.code, {
            children: "adduser"
          }), " command to create a new user. Specify the username and any additional parameters as required."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Assign user permissions"
          }), ": Depending on the requirements, you can assign different permissions to the user, such as granting administrative access or limiting them to read-only capabilities."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Set up user environment"
          }), ": Customize the user’s environment by installing necessary software, configuring settings, and ensuring required dependencies are met."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Switch to the new user"
          }), ": Once the user is created, use the ", createVNode(_components.code, {
            children: "su"
          }), " command to switch to the newly created user account and test its functionalities. This step helps ensure that the user has the intended access and can work within the container."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "managing-user-permissions",
      children: "Managing User Permissions"
    }), "\n", createVNode(_components.p, {
      children: "By default, Docker containers run with root privileges. However, it’s recommended to create users with appropriate permissions to prevent potential security issues. To manage user permissions within Docker containers, consider the following:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: ["Use ", createVNode(_components.code, {
              children: "USER"
            }), " instruction"]
          }), ": In your Dockerfile, specify the default user for the container using the ", createVNode(_components.code, {
            children: "USER"
          }), " instruction. This ensures that the container runs using the specified user account instead of the root account."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Grant sudo access selectively"
          }), ": If a user requires administrative privileges within the container, you can selectively grant them with ", createVNode(_components.code, {
            children: "sudo"
          }), " access. Ensure to evaluate the need for such access to maintain security."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Leverage user namespaces"
          }), ": Docker allows us to leverage user namespaces to provide additional isolation for users within the container. This is particularly useful to restrict root-like privileges to a specific user without the actual root access."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By following these practices, you can create a secure and efficient environment by adding users to Docker containers with the appropriate permissions."
    }), "\n", createVNode(_components.h2, {
      id: "granting-permissions-to-docker-users",
      children: "Granting Permissions to Docker Users"
    }), "\n", createVNode(_components.p, {
      children: "When it comes to managing users within a Docker container, granting the appropriate permissions is crucial. In this section, we will explore the steps required to grant permissions to Docker users effectively."
    }), "\n", createVNode(_components.h3, {
      id: "understanding-user-roles",
      children: "Understanding User Roles"
    }), "\n", createVNode(_components.p, {
      children: "Before diving into the details, let’s take a moment to understand the concept of user roles in a Docker container. Docker provides three distinct user roles: root, standard, and custom."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Root"
          }), ": The root user has unrestricted access to the Docker container and can perform any action without any limitations. However, it is important to note that granting root access to users should be done judiciously due to security implications."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Standard"
          }), ": The standard user role is more restricted compared to the root user. Standard users have limited permissions and cannot execute certain privileged operations within the Docker container. This is the recommended role for most users."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Custom"
          }), ": Docker also allows you to create custom user roles where you can define very granular permissions according to your specific requirements. However, creating custom roles often requires advanced knowledge and should be done cautiously."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "granting-permissions",
      children: "Granting Permissions"
    }), "\n", createVNode(_components.p, {
      children: "Now that we have a basic understanding of user roles, let’s go through the process of granting permissions:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Create a Docker user"
          }), ": Begin by creating a new user within the Docker container using the ", createVNode(_components.code, {
            children: "useradd"
          }), " command. For example:"]
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
                children: "$ useradd -s /bin/bash -m dockeruser"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Assign desired permissions"
          }), ": After creating the user, you can assign the appropriate permissions based on the user role. If you want to grant standard user permissions, it is recommended to add the user to the ", createVNode(_components.code, {
            children: "docker"
          }), " group using the ", createVNode(_components.code, {
            children: "usermod"
          }), " command. For instance:"]
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
                children: "$ usermod -aG docker dockeruser"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Verify user permissions"
          }), ": To ensure that the permissions are correctly assigned, you can use the ", createVNode(_components.code, {
            children: "docker"
          }), " command followed by the ", createVNode(_components.code, {
            children: "run"
          }), " option and any desired command. For example:"]
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
                children: "$ docker run --rm -it --user dockeruser busybox id"
              })
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["This command will start a container with the specified user (", createVNode(_components.code, {
            children: "dockeruser"
          }), " in this case) and execute the ", createVNode(_components.code, {
            children: "id"
          }), " command, which will display the user’s information if the permissions are correctly granted."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Test and refine permissions"
          }), ": Finally, it is essential to thoroughly test the assigned permissions to ensure that users can perform their intended tasks without any hindrance. This may involve running various commands or performing typical operations within the Docker container to validate the permissions granted."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By following these steps, you can effectively grant permissions to Docker users while maintaining a secure environment within your container. Remember to strike the right balance between granting sufficient privileges and protecting the integrity and security of your containerized applications."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "User Role"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Root"
          }), createVNode(_components.td, {
            children: "Unrestricted access with full privileges"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Standard"
          }), createVNode(_components.td, {
            children: "Restricted permissions for most operations"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Custom"
          }), createVNode(_components.td, {
            children: "Customized permissions based on specific requirements"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Remember, it’s crucial to assign permissions based on the principle of least privilege, granting only the necessary permissions to users to minimize the risk of unauthorized actions within the Docker container."
    }), "\n", createVNode(_components.h2, {
      id: "best-practices-for-user-management-in-docker-container",
      children: "Best Practices for User Management in Docker Container"
    }), "\n", createVNode(_components.p, {
      children: "When working with Docker containers, it’s essential to implement proper user management practices to ensure security and maintain control over your systems. Here are some best practices to consider:"
    }), "\n", createVNode(_components.h3, {
      id: "1-use-non-root-users",
      children: "1. Use Non-Root Users"
    }), "\n", createVNode(_components.p, {
      children: "Running containers as the root user is not recommended because it poses security risks. Instead, create and use non-root users within your containers. This helps minimize the potential impact of any security vulnerabilities and restricts the privileges of the container."
    }), "\n", createVNode(_components.h3, {
      id: "2-create-a-dedicated-user",
      children: "2. Create a Dedicated User"
    }), "\n", createVNode(_components.p, {
      children: "Consider creating a dedicated user specifically for running your containerized application. By isolating your application within its own user account, you can further enhance security. This user should only have the necessary privileges required for the application to function correctly."
    }), "\n", createVNode(_components.h3, {
      id: "3-implement-user-namespaces",
      children: "3. Implement User Namespaces"
    }), "\n", createVNode(_components.p, {
      children: "User namespaces provide an additional layer of isolation by mapping the non-root user inside the container to a different user outside the container. This allows the container to run as a non-root user while still functioning as intended. By enabling user namespaces, you reduce the risk of privilege escalation attacks."
    }), "\n", createVNode(_components.h3, {
      id: "4-limit-container-capabilities",
      children: "4. Limit Container Capabilities"
    }), "\n", createVNode(_components.p, {
      children: ["Container capabilities define the operations a container can perform within the host system. Restricting unnecessary capabilities minimizes the potential attack surface. Docker provides the ", createVNode(_components.code, {
        children: "--cap-drop"
      }), " flag to drop specific capabilities and the ", createVNode(_components.code, {
        children: "--cap-add"
      }), " flag to add back specific capabilities, allowing fine-grained control over the privileges of your containers."]
    }), "\n", createVNode(_components.h3, {
      id: "5-use-volume-permissions-wisely",
      children: "5. Use Volume Permissions Wisely"
    }), "\n", createVNode(_components.p, {
      children: "When mounting volumes into your containers, ensure that the permissions are properly set. Avoid giving overly permissive file permissions to mounted volumes to prevent unauthorized access. Follow the principle of least privilege and grant only the necessary permissions required by your application."
    }), "\n", createVNode(_components.h3, {
      id: "6-regularly-update-containers-and-base-images",
      children: "6. Regularly Update Containers and Base Images"
    }), "\n", createVNode(_components.p, {
      children: "Keeping your containers and base images up to date is crucial for maintaining security. Regularly check for updates and security patches and apply them promptly to ensure that your containers are protected against known vulnerabilities. Consider implementing an automated update process to streamline this task."
    }), "\n", createVNode(_components.p, {
      children: "By following these best practices, you can enhance the security and manageability of your Docker containers. Combined with other containerization practices, such as image scanning and network segmentation, you can build a robust and secure container environment."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "In this article, we explored the process of adding users to a Docker container. By following a few simple steps, you can enhance the security and manageability of your containers. Let’s recap what we’ve learned:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Create a new user"
          }), ": Use the ", createVNode(_components.code, {
            children: "adduser"
          }), " command to create a new user within the container. This user will have limited privileges and help isolate applications."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Assign proper permissions"
          }), ": Ensure that the new user has the necessary permissions to perform required tasks. Use the ", createVNode(_components.code, {
            children: "chown"
          }), " and ", createVNode(_components.code, {
            children: "chmod"
          }), " commands to modify ownership and access rights."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Switch to the new user"
          }), ": Once the new user is created, switch to their account using the ", createVNode(_components.code, {
            children: "su"
          }), " command. This allows you to operate within the container using reduced privileges."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Adjust user namespaces"
          }), ": Docker provides the option to use user namespaces to further isolate user identities between the host and containers. This can be configured in the Docker daemon."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Test and verify"
          }), ": After implementing the user modifications, test the container to ensure everything functions as expected. Verify that the new user can perform necessary tasks while maintaining proper security measures."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Adding users to Docker containers brings an extra layer of protection and control. By limiting the privileges of the users operating within the container, you can mitigate potential security risks. Furthermore, user isolation aids in managing multiple applications within a single host environment."
    }), "\n", createVNode(_components.p, {
      children: "Remember that each container may have its own specific requirements when it comes to user management. It’s essential to understand and evaluate these requirements before implementing any changes. Use the information provided in this article as a starting point, and adapt it to the specific needs of your containerized applications."
    }), "\n", createVNode(_components.p, {
      children: "By following best practices and staying informed about Docker’s ongoing developments, you can effectively manage users within containers and create a more secure environment for your applications."
    }), "\n", createVNode(_components.p, {
      children: "Keep exploring Docker’s documentation and community resources for further insights and updates. Happy containerizing!"
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

const url = "src/content/posts/add-users-to-docker-container.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-users-to-docker-container.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-users-to-docker-container.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
