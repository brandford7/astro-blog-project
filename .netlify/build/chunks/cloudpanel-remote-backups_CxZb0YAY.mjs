import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import './Button_CqIQ1ybK.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const imag1 = new Proxy({"src":"/_astro/cloudpanel-backup.BPs03Q-K.png","width":2444,"height":1682,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/03/cloudpanel-backup.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2024-03-14T00:00:00.000Z",
  "title": "Setup CloudPanel Remote Backups to OneDrive or Google Drive",
  "description": "See how you can easily setup remote backups in CloudPanel to OneDrive or Google Drive",
  "image": "../../assets/images/24/03/cloudpanel-remote-backups.png",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["cloudpanel"],
  "canonical": "https://www.bitdoze.com/cloudpanel-remote-backups/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-setup-cloudpanel-remote-backups-to-onedrive-or-google-drive",
    "text": "How to Setup CloudPanel Remote Backups to OneDrive or Google Drive"
  }, {
    "depth": 3,
    "slug": "1-create-the-folder-in-onedrive-or-google-drive",
    "text": "1. Create the folder in OneDrive or Google Drive"
  }, {
    "depth": 3,
    "slug": "2-connect-to-the-server-with-ssh-tunnel",
    "text": "2. Connect to the Server with SSH Tunnel"
  }, {
    "depth": 3,
    "slug": "3-run-rclone-config-for-onedrive",
    "text": "3. Run Rclone config for OneDrive"
  }, {
    "depth": 3,
    "slug": "4-run-rclone-config-for-google-drive",
    "text": "4. Run Rclone config for Google Drive"
  }, {
    "depth": 3,
    "slug": "5-configure-cloudpanel-remote-backups",
    "text": "5. Configure CloudPanel Remote Backups"
  }, {
    "depth": 3,
    "slug": "6-check-that-backup-has-been-done-in-onedrive-or-google-drive",
    "text": "6. Check That Backup has been done in OneDrive or Google Drive."
  }, {
    "depth": 3,
    "slug": "7-alter-the-default-backup-schedule-for-cloudpanel",
    "text": "7. Alter the default backup schedule for CloudPanel"
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
    em: "em",
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
      children: "Backup is a very important piece in every application, while self-hosting my own apps I need to make sure I have a good backup strategy so in case something happens with the website or the server I have a way to restore it. Your hosting provider account may be hacked and everything can be deleted, that’s why you need to have a remote backup that you can rely on. Is not enough to backup your apps locally or in the same provider but you should have also a remote backup that you can use in case something goes wrong."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.cloudpanel.io/",
        children: "CloudPanel"
      }), " is a good open source alternative that can help you self host your applications and offers a way to do ", createVNode(_components.a, {
        href: "https://www.cloudpanel.io/docs/v2/admin-area/backups/",
        children: "remote backups"
      }), " automatically at certain periods so you can have a better sleep. It uses ", createVNode(_components.a, {
        href: "https://rclone.org/",
        children: "Rclone"
      }), " behind the hood to do remote backups and you can choose various sources like Amazon S3, Wasabi, Digital Ocean Spaces, Dropbox, Google Drive, SFTP."]
    }), "\n", createVNode(_components.p, {
      children: "Some of them are easy to configure like Digital Ocean Spaces, Dropbox, SFTP as you do it directly in the UI interface but for others like OneDrive or Personal Google Drive you need to run through the Rclone configurations."
    }), "\n", createVNode(_components.p, {
      children: "In this article and video we are going to go through all the steps you need to do to configure remote backups in CloudPanel to OneDrive or Google Drive. The process should be the same and in the end you will have a scheduled backup that will run and store your files securely."
    }), "\n", createVNode(_components.p, {
      children: "In case you are interested on CloudPanel articles you can check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/cloudpanel-setup-dockge/",
          children: "Setup CloudPanel As Reverse Proxy with Docker and Dockge"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bitdoze.com/install-cloudpanel-host-nodejs/",
          children: "Install CloudPanel and Host Node.js Apps"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-setup-cloudpanel-remote-backups-to-onedrive-or-google-drive",
      children: "How to Setup CloudPanel Remote Backups to OneDrive or Google Drive"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/ja3TZR083pA",
      label: "Setup CloudPanel Remote Backups to OneDrive or Google Drive"
    }), "\n", createVNode(_components.p, {
      children: "Let’s go through all the steps you need to have remote backups enabled on CloudPanel and have them run automaticaly."
    }), "\n", createVNode(_components.h3, {
      id: "1-create-the-folder-in-onedrive-or-google-drive",
      children: "1. Create the folder in OneDrive or Google Drive"
    }), "\n", createVNode(_components.p, {
      children: ["First thing will be to go into your cloud provider that you have chosen to do the backups and create a folder where the backups will be stored. I have seen there are issues if the folder does not exist so that’s why you should create one from the start. For this tutorial I will create one called ", createVNode(_components.code, {
        children: "dragos-cloudpanel-backups"
      }), " that I will use."]
    }), "\n", createVNode(_components.h3, {
      id: "2-connect-to-the-server-with-ssh-tunnel",
      children: "2. Connect to the Server with SSH Tunnel"
    }), "\n", createVNode(_components.p, {
      children: "As for configuring the OneDrive or Google Drive you will need to authenticate via Browser you will need to configure an SSH Tunel to your server that will be used. To do this you just need to run:"
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
            children: "ssh"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -L"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " localhost:53682:localhost:53682"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username@remote_server"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["You just need to change ", createVNode(_components.code, {
        children: "username"
      }), " with your user of the server and ", createVNode(_components.code, {
        children: "remote_server"
      }), " with the server IP this will connect your local to the server and with ", createVNode(_components.code, {
        children: "localhost:53682"
      }), " you can access the browser to get the token. You can check more on ", createVNode(_components.a, {
        href: "https://rclone.org/remote_setup/",
        children: "Rclone doc for remote setup"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["This will work well on Mac, for Windows you should use Putty and do there the port forwarding, the WSL can also work. You can check: ", createVNode(_components.a, {
        href: "https://www.redswitches.com/blog/ssh-port-forwarding/",
        children: "How to Use SSH Port Forwarding & PuTTY"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "3-run-rclone-config-for-onedrive",
      children: "3. Run Rclone config for OneDrive"
    }), "\n", createVNode(_components.p, {
      children: "Rclone config needs to be run to set this up as you don’t have any option in the CloudPanel UI"
    }), "\n", createVNode(_components.p, {
      children: "to do this you just run :"
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
            children: "rclone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "and follow the configs as below:"
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
            children: "root@cp-dg:~#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rclone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024/03/14"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 13:27:43"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " NOTICE:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Config"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/root/.config/rclone/rclone.conf\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " defaults"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "No"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remotes"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " one"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") New remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Set configuration password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "q"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Quit config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "n/s/q"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "n"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " configure."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Choose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " number"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " below,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " own"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1Fichier"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"fichier\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Alias"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " an"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " existing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"alias\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Amazon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Drive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"amazon cloud drive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Amazon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " S3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Compliant"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Provider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (AWS, "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Alibaba,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Ceph,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Digital"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Ocean,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Dreamhost,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " IBM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " COS,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Minio,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Tencent"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " COS,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " etc"
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
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"s3\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Backblaze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " B2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"b2\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Box"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"box\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 7"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Cache"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"cache\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Citrix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Sharefile"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"sharefile\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 9"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Dropbox"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"dropbox\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Encrypt/Decrypt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"crypt\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "11"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " FTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Connection"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"ftp\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Cloud"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Storage"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (this "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Drive"
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
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"google cloud storage\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Drive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "14"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Photos"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"google photos\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Hubic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"hubic\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "16"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " In"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " memory"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " object"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"memory\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "17"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jottacloud"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"jottacloud\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "18"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Koofr"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"koofr\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "19"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Disk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"local\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Mail.ru"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Cloud"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"mailru\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "21"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Microsoft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Azure"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Blob"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Storage"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"azureblob\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "22"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Microsoft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OneDrive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"onedrive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "23"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OpenDrive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"opendrive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OpenStack"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Swift"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (Rackspace "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Cloud"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Files,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Memset"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Memstore,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OVH"
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
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"swift\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "25"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Pcloud"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"pcloud\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Put.io"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"putio\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "27"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SSH/SFTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Connection"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"sftp\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Sugarsync"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"sugarsync\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "29"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Transparently"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " chunk/split"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " large"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"chunker\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Union"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " merges"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " contents"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " several"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upstream"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fs"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"union\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "31"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Webdav"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"webdav\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "32"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Yandex"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Disk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"yandex\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "33"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Connection"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"http\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " premiumize.me"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"premiumizeme\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "35"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " seafile"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"seafile\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Storage"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "22"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "** See help "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " onedrive backend at: https://rclone.org/onedrive/ **"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "OAuth"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Client"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Id"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Leave"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blank"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " normally."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "client_id"
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
              color: "#61AFEF"
            },
            children: "OAuth"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Client"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Secret"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Leave"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blank"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " normally."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "client_secret"
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
              color: "#61AFEF"
            },
            children: "Edit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " advanced"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config?"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (y/n)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") No ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "default"
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
              color: "#61AFEF"
            },
            children: "y/n"
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
              color: "#61AFEF"
            },
            children: "Remote"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Use"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " auto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Say"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Y"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sure"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Say"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " N"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " working"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " headless"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " machine"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Yes ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "default"
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
              color: "#61AFEF"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") No"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "y/n"
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
              color: "#61AFEF"
            },
            children: "If"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " browser"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " doesn't open automatically go to the following link: http://127.0.0.1:53682/auth?state=LK_cdbrOrIT"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Log in and authorize rclone for access"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Waiting for code..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Got code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Choose a number from below, or type in an existing value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1 / OneDrive Personal or Business"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   \\ \"onedrive\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2 / Root Sharepoint site"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   \\ \"sharepoint\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3 / Type in driveID"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   \\ \"driveid\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 4 / Type in SiteID"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   \\ \"siteid\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5 / Search a Sharepoint site"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   \\ \"search\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Your choice> 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Found 1 drives, please select the one you want to use:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "0:  (personal) id=f9f661d3066d45ed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Chose drive to use:> 0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Found drive 'root' of type 'personal', URL: https://onedrive.live.com/?cid=f9f661d3066d45ed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Is that okay?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y) Yes (default)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "n) No"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y/n>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "--------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "[remote]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "token = {\"access_token\":\"EwCIA8l6BAAUTTy6dbu0OLf3Lzl3R/vfUXxq8g8AAYnaLJ3lAxqLzQiNrimK2Z60ZwmFXVR0Buqhnisc5QEW4tUHFH5eFg+/AUNEWMmTptERPkQh4BU3paTlktMnqX4oG4/6LSUPJmRAQZvQrUX5K4tGHzJ/t$\",\"expiry\":\"2024-03-14T14:28:23.186484017Z\"}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "drive_id = f9f661d3066d45ed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "drive_type = personal"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "--------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y) Yes this is OK (default)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "e) Edit this remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "d) Delete this remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y/e/d>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Current remotes:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Name                 Type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "====                 ===="
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "remote               onedrive"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "e) Edit existing remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "n) New remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "d) Delete remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "r) Rename remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "c) Copy remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "s) Set configuration password"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "q) Quit config"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "e/n/d/r/c/s/q> q"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In the above you will see that the below have been chosen:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "n) New remote"
        }), " - to create a new config file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "name> remote"
        }), " - you need to provide this exact name otherwise CloudPanel will not know what to do"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Storage> 22"
        }), " - this is for Microsoft One Drive"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "client_id - client_secret"
        }), " - just enter, nothing to do"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Edit advanced config? - n) No (default)"
        }), " - the default which is No"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Use auto config? - y) Yes (default)"
        }), " - the yes default one"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "http://127.0.0.1:53682/auth?state=LK_cdbrOrITOdn9V",
            children: "http://127.0.0.1:53682/auth?state=LK_cdbrOrITOdn9V"
          })
        }), " - link with a state will be provided that you need to use in the browser to get the token, just open it in browser."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1 / OneDrive Personal or Business"
        }), " - choose the personal"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Chose drive to use:> 0"
        }), " - the 0 drive"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "y) Yes this is OK (default)"
        }), " - the default in here"]
      }), "\n", createVNode(_components.li, {
        children: ["*", createVNode(_components.em, {
          children: "e/n/d/r/c/s/q> q"
        }), " - q to finish with settings"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This would link Rclone to one drive."
    }), "\n", createVNode(_components.h3, {
      id: "4-run-rclone-config-for-google-drive",
      children: "4. Run Rclone config for Google Drive"
    }), "\n", createVNode(_components.p, {
      children: "As for OneDrive you need to run the same:"
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
            children: "rclone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "And then choose the Google Drive options:"
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
            children: "root@cp-dg:~/.config/rclone#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rclone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2024/03/14"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 13:54:24"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " NOTICE:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Config"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/root/.config/rclone/rclone.conf\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " using"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " defaults"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "No"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remotes"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " one"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") New remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Set configuration password"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "q"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Quit config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "n/s/q"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "n"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " configure."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Choose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " number"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " below,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " own"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1Fichier"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"fichier\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Alias"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " an"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " existing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"alias\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Amazon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Drive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"amazon cloud drive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Amazon"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " S3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Compliant"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Provider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (AWS, "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Alibaba,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Ceph,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Digital"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Ocean,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Dreamhost,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " IBM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " COS,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Minio,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Tencent"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " COS,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " etc"
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
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"s3\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Backblaze"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " B2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"b2\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Box"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"box\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 7"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Cache"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"cache\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Citrix"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Sharefile"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"sharefile\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 9"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Dropbox"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"dropbox\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Encrypt/Decrypt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"crypt\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "11"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " FTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Connection"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"ftp\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Cloud"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Storage"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (this "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Drive"
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
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"google cloud storage\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "13"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Drive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "14"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Photos"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"google photos\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Hubic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"hubic\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "16"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " In"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " memory"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " object"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " system."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"memory\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "17"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jottacloud"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"jottacloud\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "18"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Koofr"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"koofr\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "19"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Disk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"local\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Mail.ru"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Cloud"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"mailru\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "21"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Microsoft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Azure"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Blob"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Storage"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"azureblob\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "22"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Microsoft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OneDrive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"onedrive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "23"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OpenDrive"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"opendrive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "24"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OpenStack"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Swift"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (Rackspace "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Cloud"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Files,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Memset"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Memstore,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " OVH"
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
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"swift\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "25"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Pcloud"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"pcloud\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "26"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Put.io"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"putio\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "27"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SSH/SFTP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Connection"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"sftp\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "28"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Sugarsync"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"sugarsync\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "29"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Transparently"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " chunk/split"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " large"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"chunker\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Union"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " merges"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " contents"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " several"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upstream"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fs"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"union\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "31"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Webdav"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"webdav\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "32"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Yandex"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Disk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"yandex\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "33"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Connection"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"http\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " premiumize.me"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"premiumizeme\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "35"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " seafile"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"seafile\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Storage"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "13"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "** See help "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " drive backend at: https://rclone.org/drive/ **"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Google"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Application"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Client"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Id"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Setting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " own"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " recommended."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "See"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " https://rclone.org/drive/#making-your-own-client-id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " how"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " own."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "If"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " leave"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blank,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " it"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " use"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " an"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " internal"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " key"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " which"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " low"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " performance."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "client_id"
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
              color: "#61AFEF"
            },
            children: "OAuth"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Client"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Secret"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Leave"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blank"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " normally."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "client_secret"
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
              color: "#61AFEF"
            },
            children: "Scope"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " that"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rclone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " should"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " use"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " when"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " requesting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " drive."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Choose"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " number"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " below,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " own"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Full"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " all"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " excluding"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Application"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Data"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Folder."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Read-only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " metadata"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " contents."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive.readonly\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " files"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " created"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " by"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rclone"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " only."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "These"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " visible"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " drive"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " website."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "File"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " authorization"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " revoked"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " when"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " deauthorizes"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " app."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive.file\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Allows"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " read"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " write"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Application"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Data"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " folder."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "This"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " is"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " visible"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " drive"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " website."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive.appfolder\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   /"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Allows"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " read-only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " metadata"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " but"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " | "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "does"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " allow"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " read"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " download"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " content."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   \\"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"drive.metadata.readonly\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "scope"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "ID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " root"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Leave"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blank"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " normally."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Fill"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " to"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " access"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Computers\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " folders"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (see "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "docs"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "), or "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " rclone to use"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " non"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " root"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " folder"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " as"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " its"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " starting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " point."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "root_folder_id"
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
              color: "#61AFEF"
            },
            children: "Service"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Account"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Credentials"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " path"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Leave"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blank"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " normally."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Needed"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " want"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " use"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SA"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " instead"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " interactive"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " login."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Leading"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "~"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " be"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " expanded"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " as"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " will"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " environment"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " variables"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " such"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " as"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " `${"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "RCLONE_CONFIG_DIR"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " value."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Press"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Enter"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "service_account_file"
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
              color: "#61AFEF"
            },
            children: "Edit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " advanced"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config?"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (y/n)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") No ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "default"
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
              color: "#61AFEF"
            },
            children: "y/n"
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
              color: "#61AFEF"
            },
            children: "Remote"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Use"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " auto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " config?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Say"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Y"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sure"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Say"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " N"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " you"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " working"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remote"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " headless"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " machine"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") Yes ("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "default"
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
              color: "#61AFEF"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") No"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "y/n"
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
              color: "#61AFEF"
            },
            children: "If"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " your"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " browser"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " doesn't open automatically go to the following link: http://127.0.0.1:53682/auth?state=lJ52bPvVGaG"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Log in and authorize rclone for access"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Waiting for code..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Got code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Configure this as a team drive?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y) Yes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "n) No (default)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y/n>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "--------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "[remote]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "scope = drive"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "token = {\"access_token\":\"ya29.a0Ad52N3_J72wn8dG4c\",\"token_type\":\"Bearer\",\"refresh_token\":\"1//0czUgUBU95R8GCgYIARAAG-JK9klco7JLyA\",\"expiry\":\"2024-03-14T14:55:20.87391752Z\"}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "--------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y) Yes this is OK (default)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "e) Edit this remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "d) Delete this remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "y/e/d>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Current remotes:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "Name                 Type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "====                 ===="
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "remote               drive"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "e) Edit existing remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "n) New remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "d) Delete remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "r) Rename remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "c) Copy remote"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "s) Set configuration password"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "q) Quit config"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "e/n/d/r/c/s/q> q"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In the above you will see that the below have been chosen:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "n) New remote"
        }), " - to create a new config file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "name> remote"
        }), " - you need to provide this exact name otherwise CloudPanel will not know what to do"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Storage> 13"
        }), " - this is for Google Drive"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "client_id - client_secret"
        }), " - just enter, nothing to do"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "scope> 1"
        }), " - Full access all files, excluding Application Data Folder."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Edit advanced config? - n) No (default)"
        }), " - the default which is No"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "root_folder_id - service_account_file"
        }), " - just hit enter"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Use auto config? - y) Yes (default)"
        }), " - the yes default one"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "http://127.0.0.1:53682/auth?state=LK_cdbrOrI",
            children: "http://127.0.0.1:53682/auth?state=LK_cdbrOrI"
          })
        }), " - link with a state will be provided that you need to use in the browser to get the token, just open it in browser."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "y) Yes this is OK (default)"
        }), " - the default in here"]
      }), "\n", createVNode(_components.li, {
        children: ["*", createVNode(_components.em, {
          children: "e/n/d/r/c/s/q> q"
        }), " - q to finish with settings"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "And after Rclone is linked to Google Drive and you can configure in CloudPanel UI."
    }), "\n", createVNode(_components.h3, {
      id: "5-configure-cloudpanel-remote-backups",
      children: "5. Configure CloudPanel Remote Backups"
    }), "\n", createVNode(_components.p, {
      children: ["Login to CloudPanel and in ", createVNode(_components.strong, {
        children: "Admin Area"
      }), " - ", createVNode(_components.strong, {
        children: "Backups"
      }), " choose ", createVNode(_components.strong, {
        children: "Custom Rclone Config"
      })]
    }), "\n", createVNode(_components.p, {
      children: "In there, you will have the settings where you choose the Frequency, Time, Retention Period (Days) and Storage Directory, the one you created earlier."
    }), "\n", createVNode($$Picture, {
      src: imag1,
      alt: "CloudPanel Create a Reverse Proxy"
    }), "\n", createVNode(_components.p, {
      children: "After you save this you can hit Create Backup so one to start now."
    }), "\n", createVNode(_components.h3, {
      id: "6-check-that-backup-has-been-done-in-onedrive-or-google-drive",
      children: "6. Check That Backup has been done in OneDrive or Google Drive."
    }), "\n", createVNode(_components.p, {
      children: ["In couple of minutes you should see that files started to be seen in the directory you created, in my case ", createVNode(_components.code, {
        children: "dragos-cloudpanel-backups"
      }), ". In function of the size you have for your apps it can take several minutes to 1h, it depends."]
    }), "\n", createVNode(_components.h3, {
      id: "7-alter-the-default-backup-schedule-for-cloudpanel",
      children: "7. Alter the default backup schedule for CloudPanel"
    }), "\n", createVNode(_components.p, {
      children: ["In case you need to have more often backups for the app or for the database you have the file ", createVNode(_components.code, {
        children: "/etc/cron.d/clp"
      })]
    }), "\n", createVNode(_components.p, {
      children: "In here you have the below 2 options that can be altered to change the schedulers, just be careful:"
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
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /usr/bin/bash"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -c"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/usr/bin/clpctl db:backup --ignoreDatabases='db1,db2' --retentionPeriod=7\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " &> /dev/null"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "15"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " clp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /home/clp/scripts/create_backup.sh"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " &> /dev/null"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "They can be altered in function of your needs to have more often DB backups for your applications."
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "This is how easy it is to configure the CloudPanel backups, in a couple of minutes you will enable remote backups in CloudPanel and will be protected in case bad things happens."
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

const url = "src/content/posts/cloudpanel-remote-backups.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/cloudpanel-remote-backups.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/cloudpanel-remote-backups.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
