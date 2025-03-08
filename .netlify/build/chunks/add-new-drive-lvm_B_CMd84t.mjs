import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-03-21T00:00:00.000Z",
  "title": "How To Install A New Drive to Ubuntu LVM and Mount It",
  "description": "Learn how to install a new drive on Ubuntu using LVM (Logical Volume Manager) and mount it for persistent use. ",
  "image": "../../assets/images/24/03/add-new-drive-lvm.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux"],
  "canonical": "https://www.bitdoze.com/add-new-drive-lvm/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "step-1-check-the-drives",
    "text": "Step 1: Check the Drives"
  }, {
    "depth": 2,
    "slug": "step-2-display-physical-volumes-pv",
    "text": "Step 2: Display Physical Volumes (PV)"
  }, {
    "depth": 2,
    "slug": "step-3-create-physical-volumes-pv-on-new-disk",
    "text": "Step 3: Create Physical Volumes (PV) on New Disk"
  }, {
    "depth": 2,
    "slug": "step-4-create-a-volume-group-vg",
    "text": "Step 4: Create a Volume Group (VG)"
  }, {
    "depth": 2,
    "slug": "step-5-create-a-logical-volume-lv",
    "text": "Step 5: Create a Logical Volume (LV)"
  }, {
    "depth": 2,
    "slug": "step-6-create-a-filesystem",
    "text": "Step 6: Create a Filesystem"
  }, {
    "depth": 2,
    "slug": "step-7-mount-the-filesystem",
    "text": "Step 7: Mount the Filesystem"
  }, {
    "depth": 2,
    "slug": "step-8-make-the-mount-persistent",
    "text": "Step 8: Make the Mount Persistent"
  }, {
    "depth": 2,
    "slug": "step-9-reboot-and-verify",
    "text": "Step 9: Reboot and Verify"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This article will guide you through the process of installing a new drive to your Ubuntu system using Logical Volume Manager (LVM) and mounting it for persistent use. LVM is a flexible and powerful tool for managing disk storage, allowing you to easily resize and manage logical volumes."
    }), "\n", createVNode(_components.h2, {
      id: "step-1-check-the-drives",
      children: "Step 1: Check the Drives"
    }), "\n", createVNode(_components.p, {
      children: ["To begin, let’s check the available drives on your system using the ", createVNode(_components.code, {
        children: "lshw"
      }), " command:"]
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
            children: " lshw"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -C"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " disk"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  *-disk:0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      description:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ATA"
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
            children: "      product:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Samsung"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " SSD"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 870"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " id:"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      bus"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " info:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scsi@0:0.0.0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      logical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      version:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3B6Q"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      serial:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " S758NS0W807436T"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      size:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3726GiB"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (4TB)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      configuration:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ansiversion="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logicalsectorsize="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "512"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sectorsize="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "512"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " *-disk:1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      description:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ATA"
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
            children: "      product:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " RS512GSSD310"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " id:"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      bus"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " info:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scsi@1:0.0.0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      logical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " name:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sdb"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      version:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2A0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      serial:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " EB091502A000561"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      size:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 476GiB"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (512GB)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      capabilities:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " gpt-1.00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " partitioned"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " partitioned:gpt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      configuration:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ansiversion="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " guid=0c679d6a-d4b6-40a1-962c-75145d093352"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logicalsectorsize="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "512"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sectorsize="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "512"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command displays detailed information about the disks connected to your system. In this example, we have two disks: ", createVNode(_components.code, {
        children: "/dev/sda"
      }), " (4TB) and ", createVNode(_components.code, {
        children: "/dev/sdb"
      }), " (512GB)."]
    }), "\n", createVNode(_components.h2, {
      id: "step-2-display-physical-volumes-pv",
      children: "Step 2: Display Physical Volumes (PV)"
    }), "\n", createVNode(_components.p, {
      children: ["To display the existing physical volumes (PV) on your system, use the ", createVNode(_components.code, {
        children: "pvs"
      }), " command:"]
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
            children: " pvs"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " PV"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         VG"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        Fmt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Attr"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PSize"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    PFree"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " /dev/sdb3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  ubuntu-vg"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lvm2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a--"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "473.89g"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This output shows that there is currently one physical volume (", createVNode(_components.code, {
        children: "/dev/sdb3"
      }), ") associated with the volume group ", createVNode(_components.code, {
        children: "ubuntu-vg"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "step-3-create-physical-volumes-pv-on-new-disk",
      children: "Step 3: Create Physical Volumes (PV) on New Disk"
    }), "\n", createVNode(_components.p, {
      children: ["To create a new physical volume on the new disk (", createVNode(_components.code, {
        children: "/dev/sda"
      }), "), use the ", createVNode(_components.code, {
        children: "pvcreate"
      }), " command:"]
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
            children: " pvcreate"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"/dev/sda\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " successfully"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " created."
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Verify the creation of the new physical volume using ", createVNode(_components.code, {
        children: "lvmdiskscan"
      }), ":"]
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
            children: " lvmdiskscan"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " WARNING:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " only"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " considering"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " LVM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " devices"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " /dev/sda"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "   [      <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "3.64"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TiB]"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " LVM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " /dev/sdb3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  [    <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "473.89"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " GiB]"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " LVM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
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
            children: " LVM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " whole"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " disk"
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
            children: " LVM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " physical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-4-create-a-volume-group-vg",
      children: "Step 4: Create a Volume Group (VG)"
    }), "\n", createVNode(_components.p, {
      children: ["Create a new volume group named ", createVNode(_components.code, {
        children: "mediavg"
      }), " using the new physical volume ", createVNode(_components.code, {
        children: "/dev/sda"
      }), ":"]
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
            children: " vgcreate"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mediavg"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "volume"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " group"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"mediavg\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " successfully"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " created"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-5-create-a-logical-volume-lv",
      children: "Step 5: Create a Logical Volume (LV)"
    }), "\n", createVNode(_components.p, {
      children: ["Create a new logical volume named ", createVNode(_components.code, {
        children: "medialv"
      }), " within the ", createVNode(_components.code, {
        children: "mediavg"
      }), " volume group, using all available space:"]
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
            children: " lvcreate"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +100%FREE"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " medialv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mediavg"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Logical"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " volume"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"medialv\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " created."
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-6-create-a-filesystem",
      children: "Step 6: Create a Filesystem"
    }), "\n", createVNode(_components.p, {
      children: "Create an ext4 filesystem on the new logical volume:"
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
            children: " mkfs.ext4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/mediavg/medialv"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "mke2fs"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1.46.5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (30-Dec-2021)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Discarding"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " device"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blocks:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " filesystem"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " with"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 976753664"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 4k"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blocks"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 244195328"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " inodes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Filesystem"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UUID:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2d665675-4b2e-4a1f-9af6-4652e387d76e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Superblock"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " backups"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " stored"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " blocks:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "\t32768,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 98304,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 163840,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 229376,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 294912,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 819200,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 884736,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1605632,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2654208,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "\t4096000,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 7962624,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 11239424,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 20480000,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 23887872,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 71663616,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 78675968,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "\t102400000,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 214990848,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 512000000,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 550731776,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 644972544"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Allocating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " group"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tables:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Writing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " inode"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tables:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Creating"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " journal"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (262144 "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "blocks"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Writing"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " superblocks"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " and"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " filesystem"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " accounting"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " information:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " done"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-7-mount-the-filesystem",
      children: "Step 7: Mount the Filesystem"
    }), "\n", createVNode(_components.p, {
      children: "Create a mount point directory and mount the new filesystem:"
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
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /media/storage"
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
              color: "#98C379"
            },
            children: " /dev/mediavg/medialv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /media/storage"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Verify the mount using the ", createVNode(_components.code, {
        children: "df"
      }), " command:"]
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
            children: "df"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Filesystem"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                         Size"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Used"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Avail"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Use%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Mounted"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2.4M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/mapper/ubuntu--vg-ubuntu--lv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  466G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   23G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  424G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   6%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              7.8G"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  7.8G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   0%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/shm"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              5.0M"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  5.0M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   0%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run/lock"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sdb2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                          2.0G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  252M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  14%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /boot"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sdb1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                          1.1G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  6.1M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.1G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /boot/efi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  4.0K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run/user/1000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/mapper/mediavg-medialv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        3.6T"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  3.4T"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /media/storage"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-8-make-the-mount-persistent",
      children: "Step 8: Make the Mount Persistent"
    }), "\n", createVNode(_components.p, {
      children: ["To ensure the filesystem is mounted automatically on system boot, add an entry to the ", createVNode(_components.code, {
        children: "/etc/fstab"
      }), " file."]
    }), "\n", createVNode(_components.p, {
      children: ["Obtain the UUID of the new filesystem using ", createVNode(_components.code, {
        children: "blkid"
      }), ":"]
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
            children: " blkid"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/mediavg/medialv"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/mediavg/medialv:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UUID=\"2d665675-4b2e-4a1f-9af6-4652e387d76e\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " BLOCK_SIZE=\"4096\""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TYPE=\"ext4\""
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Edit ", createVNode(_components.code, {
        children: "/etc/fstab"
      }), " and add a line like the following, replacing ", createVNode(_components.code, {
        children: "UUID"
      }), " with the actual UUID:"]
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
              color: "#E06C75"
            },
            children: "UUID"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "2d665675-4b2e-4a1f-9af6-4652e387d76e"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " /media/storage"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ext4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " defaults"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-9-reboot-and-verify",
      children: "Step 9: Reboot and Verify"
    }), "\n", createVNode(_components.p, {
      children: "Reboot the server to ensure the new filesystem is mounted automatically:"
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
            children: " reboot"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["After the reboot, check the mounted filesystems using ", createVNode(_components.code, {
        children: "df"
      }), ":"]
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
            children: "df"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
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
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Filesystem"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                         Size"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Used"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Avail"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Use%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Mounted"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " on"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  2.4M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/mapper/ubuntu--vg-ubuntu--lv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  466G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   23G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  424G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   6%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              7.8G"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  7.8G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   0%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/shm"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              5.0M"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  5.0M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   0%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run/lock"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sdb2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                          2.0G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  252M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  14%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /boot"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/sdb1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                          1.1G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  6.1M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.1G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /boot/efi"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/dev/mapper/mediavg-medialv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        3.6T"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   28K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  3.4T"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /media/storage"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tmpfs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                              1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  4.0K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.6G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   1%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /run/user/1000"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The output should show that ", createVNode(_components.code, {
        children: "/dev/mapper/mediavg-medialv"
      }), " is mounted on ", createVNode(_components.code, {
        children: "/media/storage"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["Congratulations! You have successfully installed a new drive to your Ubuntu system using LVM, created a logical volume, formatted it with the ext4 filesystem, and mounted it persistently. You can now use the ", createVNode(_components.code, {
        children: "/media/storage"
      }), " directory to store your data on the new drive."]
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

const url = "src/content/posts/add-new-drive-lvm.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-new-drive-lvm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/add-new-drive-lvm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
