import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { d as $$Picture } from './_astro_assets_LOXj4B9o.mjs';
import 'clsx';

const ubuntukernal = new Proxy({"src":"/_astro/ubuntu-boot.CMNgbnPz.jpeg","width":960,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/05/ubuntu-boot.jpeg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/docker-up.CaNqdtV4.jpeg","width":3166,"height":352,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/05/docker-up.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2023-05-11T06:00:00.000Z",
  "title": "Fix Kernel Panic - Not Syncing: VFS: Unable to Mount Root FS on Unknown-Block(0,0)",
  "description": "Learn how to fix the common Ubuntu error Kernel Panic - Not Syncing: VFS: Unable to Mount Root FS on Unknown-Block(0,0) with our step-by-step guide.",
  "image": "../../assets/images/23/05/fix-kernel-panic.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux"],
  "canonical": "https://www.bitdoze.com/fix-kernel-panic-unable-mount-root-fs/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-fix-kernel-panic-on-ubuntu",
    "text": "How to Fix Kernel Panic on Ubuntu"
  }, {
    "depth": 3,
    "slug": "login-to-console-and-choose-advanced-options-for-ubuntu",
    "text": "Login to Console and Choose Advanced Options For Ubuntu"
  }, {
    "depth": 3,
    "slug": "check-the-file-system",
    "text": "Check The File System"
  }, {
    "depth": 3,
    "slug": "update-the-root-fs",
    "text": "Update the root FS"
  }, {
    "depth": 3,
    "slug": "update-the-temporary-file-system",
    "text": "Update The Temporary File System"
  }, {
    "depth": 3,
    "slug": "update-your-grub",
    "text": "Update Your GRUB"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I have an Ubuntu 22.04 on an ", createVNode(_components.a, {
        href: "https://go.bitdoze.com/hetzner",
        children: "Hetzner VPS"
      }), " and I have an update of the packages to the latest version. During the update the Ubuntu Kernal updated also to the latest version which was: ", createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "5.15.0-71-generic"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "All went good and I have rebooted the server but it never went up. I have logged in to the console and I have seen that it was getting stuck during boot at the error:"
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
            children: "Kernel Panic - Not Syncing: VFS: Unable to Mount Root FS on Unknown-Block(0,0)"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Kernel Panic - Not Syncing: VFS: Unable to Mount Root FS on Unknown-Block(0,0) is a common error that can occur in Ubuntu when the system is unable to mount the root file system during boot. This error message indicates that the kernel is unable to find the root file system, which is necessary for the operating system to start up properly."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-fix-kernel-panic-on-ubuntu",
      children: "How to Fix Kernel Panic on Ubuntu"
    }), "\n", createVNode(_components.p, {
      children: "The steps below helped me move past the error and achieve a clean boot in the end. I will detail the steps so that you can follow along and effectively resolve your issue."
    }), "\n", createVNode(_components.h3, {
      id: "login-to-console-and-choose-advanced-options-for-ubuntu",
      children: "Login to Console and Choose Advanced Options For Ubuntu"
    }), "\n", createVNode(_components.p, {
      children: ["If you are not on a laptop and you are using a VPS server the provider needs to have a console that will allow you to see what is happening during boot and choose the ", createVNode(_components.strong, {
        children: "Advanced Options For Ubuntu"
      }), " in there you will have the latest Kernels to choose from and you need not to choose the latest one like in bellow picture:"]
    }), "\n", createVNode($$Picture, {
      src: ubuntukernal,
      widths: [200, 400, 900],
      sizes: "(max-width: 900px) 100vw, 900px",
      alt: "Ubuntu Boot Options"
    }), "\n", createVNode(_components.p, {
      children: "This will allow your system to boot."
    }), "\n", createVNode(_components.h3, {
      id: "check-the-file-system",
      children: "Check The File System"
    }), "\n", createVNode(_components.p, {
      children: "Login to your VPS and runn the bellow command:"
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
      "data-language": "bash",
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
            children: " fdisk"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Output:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " fdisk"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Disk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda:"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 76.3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " GiB,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 81923145728"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bytes,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 160006144"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sectors"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Disk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " model:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " QEMU"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " HARDDISK"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Units:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sectors"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 512"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 512"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bytes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Sector"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " size"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (logical/physical): 512 bytes / 512 bytes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "I/O"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " size"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (minimum/optimal): 512 bytes / 512 bytes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Disklabel"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " type:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " gpt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Disk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " identifier:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 6288F8C3-0B08-4091-9A39-F8940D8E5D62"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Device"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Start"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "       End"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   Sectors"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Size"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Type"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sda1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  528384"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 160006110"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 159477727"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   76G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Linux"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " filesystem"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sda14"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "   2048"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      4095"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      2048"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    1M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BIOS"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " boot"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sda15"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "   4096"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    528383"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    524288"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  256M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " EFI"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " System"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Partition"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " table"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " entries"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " are"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " not"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " disk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " order."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In here you will see the device for Linux filesystem in my case is ", createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "/dev/sda1"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "update-the-root-fs",
      children: "Update the root FS"
    }), "\n", createVNode(_components.p, {
      children: "Next you need to mount and update the FS:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " mount"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " mount"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --bind"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt/dev"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " mount"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --bind"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/pts"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt/dev/pts"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " mount"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --bind"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /proc"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt/proc"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " mount"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " --bind"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /sys"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt/sys"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " chroot"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "update-the-temporary-file-system",
      children: "Update The Temporary File System"
    }), "\n", createVNode(_components.p, {
      children: "Next run the bellow command:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "root@cloud:/#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update-initramfs"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -k"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5.15.0-71-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "output:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "update-initramfs:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Generating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /boot/initrd.img-5.15.0-71-generic"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In my case the problem was on ", createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "5.15.0-71-generic"
        })
      }), " Kernal that was installed with the upgrade, you need to use your kernal, which should be in the Ubuntu Advanced options."]
    }), "\n", createVNode(_components.p, {
      children: "The command update-initramfs -u -k 5.15.0-71-generic is used to update the initial RAM file system (initramfs) for the kernel version 5.15.0-71-generic in Ubuntu."
    }), "\n", createVNode(_components.p, {
      children: "The initramfs is a temporary file system that is loaded into memory during the boot process before the root file system is mounted. It contains the necessary files and drivers to initialize the hardware and load the root file system."
    }), "\n", createVNode(_components.p, {
      children: "By running this command, you are updating the initramfs for the specified kernel version and ensuring that the necessary files and drivers are available during the boot process. This can be useful if you have recently installed new hardware or made changes to the system that require updated drivers."
    }), "\n", createVNode(_components.p, {
      children: "The -u option tells the command to update the initramfs, and the -k option specifies the kernel version to update. The 5.15.0-71-generic part of the command specifies the specific kernel version to update."
    }), "\n", createVNode(_components.h3, {
      id: "update-your-grub",
      children: "Update Your GRUB"
    }), "\n", createVNode(_components.p, {
      children: "Next run:"
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
            children: "root@cloud:/#"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update-grub"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Output:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Sourcing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/etc/default/grub'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Sourcing file `/etc/default/grub.d/init-select.cfg'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Generating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " grub configuration file ..."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " linux image: /boot/vmlinuz-5.15.0-71-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initrd image: /boot/initrd.img-5.15.0-71-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " linux image: /boot/vmlinuz-5.15.0-56-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initrd image: /boot/initrd.img-5.15.0-56-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " linux image: /boot/vmlinuz-5.15.0-53-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initrd image: /boot/initrd.img-5.15.0-53-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " linux image: /boot/vmlinuz-5.15.0-46-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initrd image: /boot/initrd.img-5.15.0-46-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " linux image: /boot/vmlinuz-5.15.0-41-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Found"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " initrd image: /boot/initrd.img-5.15.0-41-generic"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Warning:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " os-prober will not be executed to detect other bootable partitions."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Systems"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on them will not be added to the GRUB boot configuration."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Check"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " GRUB_DISABLE_OS_PROBER documentation entry."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "done"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The command update-grub is used to update the GRUB bootloader configuration in Ubuntu."
    }), "\n", createVNode(_components.p, {
      children: "GRUB (Grand Unified Bootloader) is a bootloader that is used to load the Linux kernel and start the boot process for Ubuntu. The GRUB configuration file is located at /boot/grub/grub.cfg and contains information about the available kernels and boot options."
    }), "\n", createVNode(_components.p, {
      children: "When you run the update-grub command, it scans your system and detects any changes to the available kernels and boot options. It then updates the GRUB configuration file with the new information."
    }), "\n", createVNode(_components.p, {
      children: "Now you can reboot your server and should start successfully."
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

const url = "src/content/posts/fix-kernel-panic-unable-mount-root-fs.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/fix-kernel-panic-unable-mount-root-fs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/fix-kernel-panic-unable-mount-root-fs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
