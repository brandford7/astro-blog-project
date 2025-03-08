import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import 'clsx';

const frontmatter = {
  "date": "2024-07-10T00:00:00.000Z",
  "title": "Top 100+ Linux Commands You MUST Know",
  "description": "Unlock the full potential of Linux with this essential guide to the top 100+ commands. Enhance your command-line skills, improve productivity, and master the Linux environment with these must-know commands and tips.",
  "image": "../../assets/images/24/07/linux-commands.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux"],
  "canonical": "https://www.bitdoze.com/linux-commands/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "section-1-basic-commands",
    "text": "Section 1: Basic Commands"
  }, {
    "depth": 3,
    "slug": "11-navigating-the-filesystem",
    "text": "1.1. Navigating the Filesystem"
  }, {
    "depth": 4,
    "slug": "pwd---print-working-directory",
    "text": "pwd - Print Working Directory"
  }, {
    "depth": 4,
    "slug": "ls---list-directory-contents",
    "text": "ls - List Directory Contents"
  }, {
    "depth": 4,
    "slug": "cd---change-directory",
    "text": "cd - Change Directory"
  }, {
    "depth": 3,
    "slug": "12-file-operations",
    "text": "1.2. File Operations"
  }, {
    "depth": 4,
    "slug": "touch---create-an-empty-file",
    "text": "touch - Create an Empty File"
  }, {
    "depth": 4,
    "slug": "cp---copy-files-and-directories",
    "text": "cp - Copy Files and Directories"
  }, {
    "depth": 4,
    "slug": "mv---move-or-rename-files-and-directories",
    "text": "mv - Move or Rename Files and Directories"
  }, {
    "depth": 4,
    "slug": "rm---remove-files-and-directories",
    "text": "rm - Remove Files and Directories"
  }, {
    "depth": 3,
    "slug": "13-viewing-and-editing-files",
    "text": "1.3. Viewing and Editing Files"
  }, {
    "depth": 4,
    "slug": "cat---concatenate-and-display-files",
    "text": "cat - Concatenate and Display Files"
  }, {
    "depth": 4,
    "slug": "more---view-file-contents-page-by-page",
    "text": "more - View File Contents Page by Page"
  }, {
    "depth": 4,
    "slug": "less---view-file-contents-with-backward-navigation",
    "text": "less - View File Contents with Backward Navigation"
  }, {
    "depth": 4,
    "slug": "head---display-the-first-part-of-a-file",
    "text": "head - Display the First Part of a File"
  }, {
    "depth": 4,
    "slug": "tail---display-the-last-part-of-a-file",
    "text": "tail - Display the Last Part of a File"
  }, {
    "depth": 4,
    "slug": "nano---simple-text-editor",
    "text": "nano - Simple Text Editor"
  }, {
    "depth": 4,
    "slug": "vim---advanced-text-editor",
    "text": "vim - Advanced Text Editor"
  }, {
    "depth": 2,
    "slug": "section-2-system-information-and-management",
    "text": "Section 2: System Information and Management"
  }, {
    "depth": 3,
    "slug": "21-system-information",
    "text": "2.1. System Information"
  }, {
    "depth": 4,
    "slug": "uname---print-system-information",
    "text": "uname - Print System Information"
  }, {
    "depth": 4,
    "slug": "top---task-manager-for-linux",
    "text": "top - Task Manager for Linux"
  }, {
    "depth": 4,
    "slug": "htop---interactive-process-viewer",
    "text": "htop - Interactive Process Viewer"
  }, {
    "depth": 4,
    "slug": "df---report-file-system-disk-space-usage",
    "text": "df - Report File System Disk Space Usage"
  }, {
    "depth": 4,
    "slug": "du---estimate-file-space-usage",
    "text": "du - Estimate File Space Usage"
  }, {
    "depth": 3,
    "slug": "22-user-and-group-management",
    "text": "2.2. User and Group Management"
  }, {
    "depth": 4,
    "slug": "whoami---display-the-current-user",
    "text": "whoami - Display the Current User"
  }, {
    "depth": 4,
    "slug": "id---display-user-and-group-information",
    "text": "id - Display User and Group Information"
  }, {
    "depth": 4,
    "slug": "useradd---add-a-new-user",
    "text": "useradd - Add a New User"
  }, {
    "depth": 4,
    "slug": "usermod---modify-a-user-account",
    "text": "usermod - Modify a User Account"
  }, {
    "depth": 4,
    "slug": "passwd---change-user-password",
    "text": "passwd - Change User Password"
  }, {
    "depth": 4,
    "slug": "groupadd---add-a-new-group",
    "text": "groupadd - Add a New Group"
  }, {
    "depth": 3,
    "slug": "23-process-management",
    "text": "2.3. Process Management"
  }, {
    "depth": 4,
    "slug": "ps---report-a-snapshot-of-current-processes",
    "text": "ps - Report a Snapshot of Current Processes"
  }, {
    "depth": 4,
    "slug": "kill---terminate-a-process",
    "text": "kill - Terminate a Process"
  }, {
    "depth": 4,
    "slug": "pkill---terminate-processes-by-name",
    "text": "pkill - Terminate Processes by Name"
  }, {
    "depth": 4,
    "slug": "bg---resume-a-suspended-job-in-the-background",
    "text": "bg - Resume a Suspended Job in the Background"
  }, {
    "depth": 4,
    "slug": "fg---bring-a-job-to-the-foreground",
    "text": "fg - Bring a Job to the Foreground"
  }, {
    "depth": 2,
    "slug": "section-3-networking-commands",
    "text": "Section 3: Networking Commands"
  }, {
    "depth": 3,
    "slug": "31-basic-networking",
    "text": "3.1. Basic Networking"
  }, {
    "depth": 4,
    "slug": "ping---send-icmp-echo_request-to-network-hosts",
    "text": "ping - Send ICMP ECHO_REQUEST to Network Hosts"
  }, {
    "depth": 4,
    "slug": "ifconfig---configure-network-interfaces-deprecated-use-ip-instead",
    "text": "ifconfig - Configure Network Interfaces (deprecated, use ip instead)"
  }, {
    "depth": 4,
    "slug": "ip---showmanipulate-routing-devices-policy-routing-and-tunnels",
    "text": "ip - Show/Manipulate Routing, Devices, Policy Routing, and Tunnels"
  }, {
    "depth": 4,
    "slug": "netstat---network-statistics",
    "text": "netstat - Network Statistics"
  }, {
    "depth": 4,
    "slug": "ss---another-utility-to-investigate-socket-statistics",
    "text": "ss - Another Utility to Investigate Socket Statistics"
  }, {
    "depth": 3,
    "slug": "32-data-transfer",
    "text": "3.2. Data Transfer"
  }, {
    "depth": 4,
    "slug": "scp---secure-copy-remote-file-copy",
    "text": "scp - Secure Copy (Remote File Copy)"
  }, {
    "depth": 4,
    "slug": "rsync---remote-file-and-directory-synchronization",
    "text": "rsync - Remote File and Directory Synchronization"
  }, {
    "depth": 4,
    "slug": "wget---non-interactive-network-downloader",
    "text": "wget - Non-Interactive Network Downloader"
  }, {
    "depth": 4,
    "slug": "curl---transfer-data-from-or-to-a-server",
    "text": "curl - Transfer Data from or to a Server"
  }, {
    "depth": 2,
    "slug": "section-4-advanced-commands",
    "text": "Section 4: Advanced Commands"
  }, {
    "depth": 3,
    "slug": "41-package-management",
    "text": "4.1. Package Management"
  }, {
    "depth": 4,
    "slug": "apt-get---apt-package-handling-utility-debian-based",
    "text": "apt-get - APT Package Handling Utility (Debian-based)"
  }, {
    "depth": 4,
    "slug": "yum---package-manager-for-rpm-based-distributions",
    "text": "yum - Package Manager for RPM-based Distributions"
  }, {
    "depth": 4,
    "slug": "dnf---next-generation-package-management-fedora",
    "text": "dnf - Next Generation Package Management (Fedora)"
  }, {
    "depth": 4,
    "slug": "snap---package-management-system-for-snaps",
    "text": "snap - Package Management System for Snaps"
  }, {
    "depth": 3,
    "slug": "42-disk-management",
    "text": "4.2. Disk Management"
  }, {
    "depth": 4,
    "slug": "fdisk---partition-table-manipulator",
    "text": "fdisk - Partition Table Manipulator"
  }, {
    "depth": 4,
    "slug": "mkfs---build-a-linux-file-system",
    "text": "mkfs - Build a Linux File System"
  }, {
    "depth": 4,
    "slug": "mount---mount-a-file-system",
    "text": "mount - Mount a File System"
  }, {
    "depth": 4,
    "slug": "umount---unmount-a-file-system",
    "text": "umount - Unmount a File System"
  }, {
    "depth": 3,
    "slug": "43-system-monitoring-and-performance",
    "text": "4.3. System Monitoring and Performance"
  }, {
    "depth": 4,
    "slug": "vmstat---report-virtual-memory-statistics",
    "text": "vmstat - Report Virtual Memory Statistics"
  }, {
    "depth": 4,
    "slug": "iostat---report-cpu-and-io-statistics",
    "text": "iostat - Report CPU and I/O Statistics"
  }, {
    "depth": 4,
    "slug": "sar---collect-report-or-save-system-activity-information",
    "text": "sar - Collect, Report, or Save System Activity Information"
  }, {
    "depth": 2,
    "slug": "section-5-scripting-and-automation",
    "text": "Section 5: Scripting and Automation"
  }, {
    "depth": 3,
    "slug": "51-shell-scripting-basics",
    "text": "5.1. Shell Scripting Basics"
  }, {
    "depth": 4,
    "slug": "creating-and-running-shell-scripts",
    "text": "Creating and Running Shell Scripts"
  }, {
    "depth": 4,
    "slug": "echo---display-a-line-of-text",
    "text": "echo - Display a Line of Text"
  }, {
    "depth": 4,
    "slug": "read---read-a-line-of-input",
    "text": "read - Read a Line of Input"
  }, {
    "depth": 4,
    "slug": "variables---using-variables-in-scripts",
    "text": "Variables - Using Variables in Scripts"
  }, {
    "depth": 4,
    "slug": "loops---for-while-and-until-loops",
    "text": "Loops - For, While, and Until Loops"
  }, {
    "depth": 4,
    "slug": "conditionals---if-else-elif-statements",
    "text": "Conditionals - If, Else, Elif Statements"
  }, {
    "depth": 3,
    "slug": "52-task-scheduling",
    "text": "5.2. Task Scheduling"
  }, {
    "depth": 4,
    "slug": "cron---schedule-commands-to-run-at-specific-times",
    "text": "cron - Schedule Commands to Run at Specific Times"
  }, {
    "depth": 4,
    "slug": "at---schedule-commands-to-run-once",
    "text": "at - Schedule Commands to Run Once"
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
    h3: "h3",
    h4: "h4",
    hr: "hr",
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
      children: "Linux, an open-source operating system, has become a cornerstone in the tech world, powering everything from servers and supercomputers to smartphones and home appliances. Its flexibility, security, and robustness make it a preferred choice for developers, system administrators, and tech enthusiasts alike. One of the most powerful aspects of Linux is its command-line interface (CLI), which allows users to interact directly with the system through text-based commands."
    }), "\n", createVNode(_components.p, {
      children: "The CLI is not just a tool for the tech-savvy; it’s an essential skill for anyone looking to harness the full potential of Linux. From managing files and processes to configuring networks and automating tasks, the command line offers unparalleled control and efficiency."
    }), "\n", createVNode(_components.p, {
      children: "This article aims to provide a comprehensive guide to essential Linux commands, catering to both beginners and advanced users. Whether you’re just starting your Linux journey or looking to deepen your command-line expertise, this guide will equip you with the knowledge you need to navigate and manage your Linux system effectively."
    }), "\n", createVNode(_components.h2, {
      id: "section-1-basic-commands",
      children: "Section 1: Basic Commands"
    }), "\n", createVNode(_components.h3, {
      id: "11-navigating-the-filesystem",
      children: "1.1. Navigating the Filesystem"
    }), "\n", createVNode(_components.p, {
      children: "Navigating the filesystem is fundamental to using Linux. Here are some basic commands to get you started:"
    }), "\n", createVNode(_components.h4, {
      id: "pwd---print-working-directory",
      children: [createVNode(_components.code, {
        children: "pwd"
      }), " - Print Working Directory"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "pwd"
      }), " command displays the current directory you’re working in. This is particularly useful when you need to confirm your location within the filesystem."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/home/username"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "ls---list-directory-contents",
      children: [createVNode(_components.code, {
        children: "ls"
      }), " - List Directory Contents"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ls"
      }), " command lists the contents of a directory. It has several options to enhance its functionality:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-l"
        }), ": Long listing format, showing detailed information about each file."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-a"
        }), ": Include hidden files (those starting with a dot)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-h"
        }), ": Human-readable format, making file sizes easier to read."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-R"
        }), ": Recursively list subdirectories."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Desktop"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Documents"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Downloads"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Music"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Pictures"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Videos"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
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
            children: "total"
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
            children: "drwxr-xr-x"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4096"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jan"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Desktop"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "drwxr-xr-x"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4096"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jan"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Documents"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  .."
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  .bashrc"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  .profile"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Desktop"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Documents"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "total"
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
            children: "drwxr-xr-x"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 4.0K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jan"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Desktop"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "drwxr-xr-x"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 4.0K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jan"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Documents"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -R"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: ".:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Desktop"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  Documents"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "./Desktop:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "file1.txt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "./Documents:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "file2.txt"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "cd---change-directory",
      children: [createVNode(_components.code, {
        children: "cd"
      }), " - Change Directory"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "cd"
      }), " command changes the current directory. Here are some common usages:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "cd .."
        }), ": Move up one directory level."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "cd /"
        }), ": Move to the root directory."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "cd ~/Documents"
        }), ": Move to the Documents directory in your home folder (the tilde ", createVNode(_components.code, {
          children: "~"
        }), " represents the home directory)."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " .."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/home"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /var/log"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/var/log"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ~/Documents"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pwd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "/home/username/Documents"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "12-file-operations",
      children: "1.2. File Operations"
    }), "\n", createVNode(_components.p, {
      children: "Managing files is a core task in any operating system. Here are some essential commands for file operations:"
    }), "\n", createVNode(_components.h4, {
      id: "touch---create-an-empty-file",
      children: [createVNode(_components.code, {
        children: "touch"
      }), " - Create an Empty File"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "touch"
      }), " command creates an empty file or updates the timestamp of an existing file."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " touch"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ls"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -l"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "-rw-r--r--"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Jan"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "cp---copy-files-and-directories",
      children: [createVNode(_components.code, {
        children: "cp"
      }), " - Copy Files and Directories"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "cp"
      }), " command copies files or directories. Key options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-r"
        }), ": Recursively copy directories."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-i"
        }), ": Prompt before overwriting files."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-v"
        }), ": Verbose mode, showing files being copied."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file1.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file2.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cp"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -r"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir1/"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dir2/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cp"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file1.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file2.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cp"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file1.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file2.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "mv---move-or-rename-files-and-directories",
      children: [createVNode(_components.code, {
        children: "mv"
      }), " - Move or Rename Files and Directories"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "mv"
      }), " command moves or renames files and directories."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file1.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file2.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mv"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /path/to/destination/"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "rm---remove-files-and-directories",
      children: [createVNode(_components.code, {
        children: "rm"
      }), " - Remove Files and Directories"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "rm"
      }), " command removes files or directories. Important options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-r"
        }), ": Recursively remove directories."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-f"
        }), ": Force removal without prompting."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file1.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rm"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -rf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " directory/"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "13-viewing-and-editing-files",
      children: "1.3. Viewing and Editing Files"
    }), "\n", createVNode(_components.p, {
      children: "Viewing and editing files is a frequent task. Here are some commands to help with that:"
    }), "\n", createVNode(_components.h4, {
      id: "cat---concatenate-and-display-files",
      children: [createVNode(_components.code, {
        children: "cat"
      }), " - Concatenate and Display Files"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "cat"
      }), " command displays the contents of a file."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " cat"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hello,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " World!"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "more---view-file-contents-page-by-page",
      children: [createVNode(_components.code, {
        children: "more"
      }), " - View File Contents Page by Page"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "more"
      }), " command allows you to view file contents one page at a time."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " more"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "less---view-file-contents-with-backward-navigation",
      children: [createVNode(_components.code, {
        children: "less"
      }), " - View File Contents with Backward Navigation"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "less"
      }), " command is similar to ", createVNode(_components.code, {
        children: "more"
      }), " but allows backward navigation."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " less"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "head---display-the-first-part-of-a-file",
      children: [createVNode(_components.code, {
        children: "head"
      }), " - Display the First Part of a File"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "head"
      }), " command shows the first 10 lines of a file by default."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " head"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "tail---display-the-last-part-of-a-file",
      children: [createVNode(_components.code, {
        children: "tail"
      }), " - Display the Last Part of a File"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "tail"
      }), " command shows the last 10 lines of a file by default. The ", createVNode(_components.code, {
        children: "-f"
      }), " option allows real-time updates."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tail"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tail"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -f"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logfile.txt"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "nano---simple-text-editor",
      children: [createVNode(_components.code, {
        children: "nano"
      }), " - Simple Text Editor"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "nano"
      }), " is a straightforward text editor that’s easy to use."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nano"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "vim---advanced-text-editor",
      children: [createVNode(_components.code, {
        children: "vim"
      }), " - Advanced Text Editor"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "vim"
      }), " is a powerful text editor with extensive features for advanced users."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " vim"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "With these basic commands, you can navigate the filesystem, manage files, and view or edit their contents efficiently. Mastering these commands is the first step towards becoming proficient in Linux."
    }), "\n", createVNode(_components.h2, {
      id: "section-2-system-information-and-management",
      children: "Section 2: System Information and Management"
    }), "\n", createVNode(_components.p, {
      children: "Understanding and managing system information is crucial for maintaining a healthy Linux environment. This section covers commands that provide insights into system status, user management, and process control."
    }), "\n", createVNode(_components.h3, {
      id: "21-system-information",
      children: "2.1. System Information"
    }), "\n", createVNode(_components.p, {
      children: "These commands allow you to gather detailed information about your Linux system."
    }), "\n", createVNode(_components.h4, {
      id: "uname---print-system-information",
      children: [createVNode(_components.code, {
        children: "uname"
      }), " - Print System Information"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "uname"
      }), " command displays system information. Useful options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-a"
        }), ": Print all system information."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-r"
        }), ": Print the kernel release."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-s"
        }), ": Print the kernel name."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " uname"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Linux"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " hostname"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5.4.0-42-generic"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " uname"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -r"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "5.4.0-42-generic"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " uname"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -s"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Linux"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "top---task-manager-for-linux",
      children: [createVNode(_components.code, {
        children: "top"
      }), " - Task Manager for Linux"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "top"
      }), " command provides a dynamic, real-time view of running processes, including CPU and memory usage."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " top"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "htop---interactive-process-viewer",
      children: [createVNode(_components.code, {
        children: "htop"
      }), " - Interactive Process Viewer"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "htop"
      }), " is an enhanced version of ", createVNode(_components.code, {
        children: "top"
      }), ", offering a more user-friendly interface and additional features."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " htop"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "df---report-file-system-disk-space-usage",
      children: [createVNode(_components.code, {
        children: "df"
      }), " - Report File System Disk Space Usage"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "df"
      }), " command reports the amount of disk space used and available on file systems. The ", createVNode(_components.code, {
        children: "-h"
      }), " option displays the output in a human-readable format."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " df"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
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
            children: "      Size"
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
            children: "udev"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "            1.9G"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.9G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   0%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev"
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
            children: "           393M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  1.3M"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  392M"
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
            children: "/dev/sda1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        20G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   15G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  4.5G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  77%"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "du---estimate-file-space-usage",
      children: [createVNode(_components.code, {
        children: "du"
      }), " - Estimate File Space Usage"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "du"
      }), " command estimates the file space usage. Key options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-h"
        }), ": Human-readable format."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-s"
        }), ": Summarize the total."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -h"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "4.0K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    ./Desktop"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "8.0K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    ./Documents"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "12K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " du"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "12K"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     ."
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "22-user-and-group-management",
      children: "2.2. User and Group Management"
    }), "\n", createVNode(_components.p, {
      children: "Managing users and groups is essential for system security and organization."
    }), "\n", createVNode(_components.h4, {
      id: "whoami---display-the-current-user",
      children: [createVNode(_components.code, {
        children: "whoami"
      }), " - Display the Current User"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "whoami"
      }), " command shows the username of the current user."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " whoami"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "id---display-user-and-group-information",
      children: [createVNode(_components.code, {
        children: "id"
      }), " - Display User and Group Information"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "id"
      }), " command displays user and group information for the current user or a specified user."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " id"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "uid"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "gid"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "groups"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ",27"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
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
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "uid"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "gid"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "groups"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ",27"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "useradd---add-a-new-user",
      children: [createVNode(_components.code, {
        children: "useradd"
      }), " - Add a New User"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "useradd"
      }), " command creates a new user. Important options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-m"
        }), ": Create a home directory for the new user."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-G"
        }), ": Specify supplementary groups."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " useradd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newuser"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " useradd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -G"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newuser"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "usermod---modify-a-user-account",
      children: [createVNode(_components.code, {
        children: "usermod"
      }), " - Modify a User Account"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "usermod"
      }), " command modifies an existing user account. Key options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-aG"
        }), ": Add the user to supplementary groups."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " usermod"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -aG"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newuser"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "passwd---change-user-password",
      children: [createVNode(_components.code, {
        children: "passwd"
      }), " - Change User Password"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "passwd"
      }), " command changes the password for a user."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " passwd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newuser"
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
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UNIX"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " password:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Retype"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UNIX"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " password:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "passwd:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " password"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " updated"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " successfully"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "groupadd---add-a-new-group",
      children: [createVNode(_components.code, {
        children: "groupadd"
      }), " - Add a New Group"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "groupadd"
      }), " command creates a new group."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " groupadd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " newgroup"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "23-process-management",
      children: "2.3. Process Management"
    }), "\n", createVNode(_components.p, {
      children: "Managing processes is vital for maintaining system performance and stability."
    }), "\n", createVNode(_components.h4, {
      id: "ps---report-a-snapshot-of-current-processes",
      children: [createVNode(_components.code, {
        children: "ps"
      }), " - Report a Snapshot of Current Processes"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ps"
      }), " command provides a snapshot of current processes. Useful options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-e"
        }), ": Display all processes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-f"
        }), ": Full-format listing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-u"
        }), ": Display processes for a specific user."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ps"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "PID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TTY"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          TIME"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CMD"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        00:00:01"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " systemd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        00:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " kthreadd"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ps"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -ef"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        PID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  PPID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  C"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " STIME"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TTY"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          TIME"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CMD"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "root"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "         1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        00:00:01"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /sbin/init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "root"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "         2"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        00:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [kthreadd]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ps"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " username"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "UID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        PID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  PPID"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  C"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " STIME"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " TTY"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "          TIME"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CMD"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  1234"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  5678"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 12:34"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "        00:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /usr/bin/bash"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "kill---terminate-a-process",
      children: [createVNode(_components.code, {
        children: "kill"
      }), " - Terminate a Process"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "kill"
      }), " command sends a signal to terminate a process. The most common signal is ", createVNode(_components.code, {
        children: "-9"
      }), " (SIGKILL), which forces termination."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " kill"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -9"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PID"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "pkill---terminate-processes-by-name",
      children: [createVNode(_components.code, {
        children: "pkill"
      }), " - Terminate Processes by Name"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "pkill"
      }), " command terminates processes based on their name."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pkill"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " processname"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "bg---resume-a-suspended-job-in-the-background",
      children: [createVNode(_components.code, {
        children: "bg"
      }), " - Resume a Suspended Job in the Background"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "bg"
      }), " command resumes a suspended job in the background."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bg"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " %1"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "fg---bring-a-job-to-the-foreground",
      children: [createVNode(_components.code, {
        children: "fg"
      }), " - Bring a Job to the Foreground"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "fg"
      }), " command brings a background job to the foreground."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fg"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " %1"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "These commands provide essential tools for monitoring and managing your Linux system, ensuring you can keep your environment running smoothly and efficiently."
    }), "\n", createVNode(_components.h2, {
      id: "section-3-networking-commands",
      children: "Section 3: Networking Commands"
    }), "\n", createVNode(_components.p, {
      children: "Networking is a critical aspect of any operating system, and Linux provides a robust set of commands to manage and troubleshoot network connections. This section covers essential networking commands for both basic and advanced network management."
    }), "\n", createVNode(_components.h3, {
      id: "31-basic-networking",
      children: "3.1. Basic Networking"
    }), "\n", createVNode(_components.p, {
      children: "These commands help you perform fundamental networking tasks such as checking connectivity and configuring network interfaces."
    }), "\n", createVNode(_components.h4, {
      id: "ping---send-icmp-echo_request-to-network-hosts",
      children: [createVNode(_components.code, {
        children: "ping"
      }), " - Send ICMP ECHO_REQUEST to Network Hosts"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ping"
      }), " command checks the network connectivity between your system and another host. It sends ICMP ECHO_REQUEST packets and waits for a response. The output shows the time it takes for each packet to travel to the host and back."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ping"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " google.com"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "PING"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " google.com"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (172.217.164.110) 56("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "84"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") bytes of data."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "64"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 172.217.164.110:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " icmp_seq="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ttl="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "54"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " time="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "10.3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ms"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "64"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 172.217.164.110:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " icmp_seq="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ttl="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "54"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " time="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "10.2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ms"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "ifconfig---configure-network-interfaces-deprecated-use-ip-instead",
      children: [createVNode(_components.code, {
        children: "ifconfig"
      }), " - Configure Network Interfaces (deprecated, use ", createVNode(_components.code, {
        children: "ip"
      }), " instead)"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ifconfig"
      }), " command is used to configure network interfaces. However, it is deprecated in favor of the ", createVNode(_components.code, {
        children: "ip"
      }), " command."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ifconfig"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "eth0:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " flags="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "4163"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "UP,BROADCAST,RUNNING,MULTICAS"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "T>  "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "mtu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1500"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "        inet"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 192.168.1.10"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  netmask"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 255.255.255.0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  broadcast"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 192.168.1.255"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "        inet6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fe80::a00:27ff:fe4e:66a1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  prefixlen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 64"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  scopeid"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0x20"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "lin"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "k>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "        ether"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 08:00:27:4e:66:a1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  txqueuelen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  (Ethernet)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "        RX"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " packets"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 308"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 25624"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (25.6 "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "KB"
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
            children: "        RX"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " errors"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  dropped"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  overruns"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  frame"
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
            children: "        TX"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " packets"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 308"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  bytes"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 25624"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (25.6 "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "KB"
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
            children: "        TX"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " errors"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  dropped"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " overruns"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  carrier"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  collisions"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "ip---showmanipulate-routing-devices-policy-routing-and-tunnels",
      children: [createVNode(_components.code, {
        children: "ip"
      }), " - Show/Manipulate Routing, Devices, Policy Routing, and Tunnels"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ip"
      }), " command is the modern replacement for ", createVNode(_components.code, {
        children: "ifconfig"
      }), " and provides more functionality. Here are some common usages:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ip a"
        }), ": Show all IP addresses."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ip link"
        }), ": Show network interfaces."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ip"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "1:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lo:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "LOOPBACK,UP,LOWER_U"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "mtu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 65536"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qdisc"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " noqueue"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UNKNOWN"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " group"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qlen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    link/loopback"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 00:00:00:00:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " brd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ff:ff:ff:ff:ff:ff"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    inet"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 127.0.0.1/8"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scope"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " host"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "       valid_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " forever"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " preferred_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " forever"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    inet6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ::1/128"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scope"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " host"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "       valid_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " forever"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " preferred_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " forever"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " eth0:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "BROADCAST,MULTICAST,UP,LOWER_U"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "mtu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1500"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qdisc"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pfifo_fast"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " group"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qlen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    link/ether"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 08:00:27:4e:66:a1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " brd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ff:ff:ff:ff:ff:ff"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    inet"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 192.168.1.10/24"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " brd"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 192.168.1.255"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scope"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " global"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dynamic"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " eth0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "       valid_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 86397sec"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " preferred_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 86397sec"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    inet6"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fe80::a00:27ff:fe4e:66a1/64"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scope"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " link"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "       valid_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " forever"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " preferred_lft"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " forever"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ip"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " link"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "1:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " lo:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "LOOPBACK,UP,LOWER_U"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "mtu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 65536"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qdisc"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " noqueue"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UNKNOWN"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DEFAULT"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " group"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qlen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    link/loopback"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 00:00:00:00:00:00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " brd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ff:ff:ff:ff:ff:ff"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " eth0:"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "BROADCAST,MULTICAST,UP,LOWER_U"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "P> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "mtu"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1500"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qdisc"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pfifo_fast"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " state"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " UP"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mode"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " DEFAULT"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " group"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " qlen"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    link/ether"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 08:00:27:4e:66:a1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " brd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ff:ff:ff:ff:ff:ff"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "netstat---network-statistics",
      children: [createVNode(_components.code, {
        children: "netstat"
      }), " - Network Statistics"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "netstat"
      }), " command provides various network-related statistics such as network connections, routing tables, interface statistics, masquerade connections, and multicast memberships. Key options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-tuln"
        }), ": Show TCP and UDP listening ports."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " netstat"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -tuln"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Active"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Internet"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " connections"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (only "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "servers"
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
            children: "Proto"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Recv-Q"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Send-Q"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Address"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "           Foreign"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Address"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "         State"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "        0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 0.0.0.0:22"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              0.0.0.0:"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "               LISTEN"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tcp6"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "       0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " :::22"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                   :::"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                    LISTEN"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "udp"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "        0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 0.0.0.0:68"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "              0.0.0.0:"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "ss---another-utility-to-investigate-socket-statistics",
      children: [createVNode(_components.code, {
        children: "ss"
      }), " - Another Utility to Investigate Socket Statistics"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "ss"
      }), " command is a modern replacement for ", createVNode(_components.code, {
        children: "netstat"
      }), " and provides more detailed information about network connections. Key options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-tuln"
        }), ": Show TCP and UDP listening ports."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ss"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -tuln"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Netid"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  State"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "      Recv-Q"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Send-Q"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    Local"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Address:Port"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                 Peer"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Address:Port"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    LISTEN"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      128"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "                   *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ":22"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "                              *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "tcp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    LISTEN"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      128"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                  :::22"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "                             :::"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "udp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    UNCONN"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "                     *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ":68"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "                              *"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "*"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "32-data-transfer",
      children: "3.2. Data Transfer"
    }), "\n", createVNode(_components.p, {
      children: "These commands are used for transferring data between hosts, whether for copying files or downloading content from the web."
    }), "\n", createVNode(_components.h4, {
      id: "scp---secure-copy-remote-file-copy",
      children: [createVNode(_components.code, {
        children: "scp"
      }), " - Secure Copy (Remote File Copy)"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "scp"
      }), " command securely copies files between hosts over SSH. Here are some common usages:"]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " file.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user@remote:/path/to/destination/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " scp"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user@remote:/path/to/source/file.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /local/destination/"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "rsync---remote-file-and-directory-synchronization",
      children: [createVNode(_components.code, {
        children: "rsync"
      }), " - Remote File and Directory Synchronization"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "rsync"
      }), " command synchronizes files and directories between two locations. Key options include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-a"
        }), ": Archive mode, which preserves permissions, timestamps, and other attributes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-v"
        }), ": Verbose mode, showing detailed output."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-z"
        }), ": Compress file data during the transfer."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rsync"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -avz"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /local/directory/"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user@remote:/path/to/destination/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " rsync"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -avz"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " user@remote:/path/to/source/"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /local/destination/"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "wget---non-interactive-network-downloader",
      children: [createVNode(_components.code, {
        children: "wget"
      }), " - Non-Interactive Network Downloader"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "wget"
      }), " command downloads files from the web non-interactively, making it ideal for scripts and automated tasks."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " wget"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http://example.com/file.zip"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "curl---transfer-data-from-or-to-a-server",
      children: [createVNode(_components.code, {
        children: "curl"
      }), " - Transfer Data from or to a Server"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "curl"
      }), " command transfers data to or from a server using various protocols, including HTTP, HTTPS, FTP, and more. Here are some common usages:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Download a file:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -O"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http://example.com/file.zip"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Send a POST request with data:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -d"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"param1=value1&param2=value2\""
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -X"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " POST"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http://example.com/resource"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Fetch headers from a URL:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " curl"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -I"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " http://example.com"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "These networking commands provide essential tools for managing and troubleshooting network connections, as well as transferring data between hosts. Mastering these commands will enable you to handle a wide range of networking tasks efficiently."
    }), "\n", createVNode(_components.h2, {
      id: "section-4-advanced-commands",
      children: "Section 4: Advanced Commands"
    }), "\n", createVNode(_components.p, {
      children: "Advanced commands in Linux allow users to perform complex tasks such as package management, disk management, and system monitoring. These commands are essential for system administrators and power users who need to maintain and optimize their Linux systems."
    }), "\n", createVNode(_components.h3, {
      id: "41-package-management",
      children: "4.1. Package Management"
    }), "\n", createVNode(_components.p, {
      children: "Package management is crucial for installing, updating, and removing software on your Linux system. Different Linux distributions use different package management systems."
    }), "\n", createVNode(_components.h4, {
      id: "apt-get---apt-package-handling-utility-debian-based",
      children: [createVNode(_components.code, {
        children: "apt-get"
      }), " - APT Package Handling Utility (Debian-based)"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "apt-get"
      }), " command is used for handling packages in Debian-based distributions like Ubuntu. Common commands include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "update"
        }), ": Update the package list."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "upgrade"
        }), ": Upgrade all installed packages."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "install"
        }), ": Install a new package."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "remove"
        }), ": Remove an installed package."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " upgrade"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
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
            children: " package_name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " apt-get"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package_name"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "yum---package-manager-for-rpm-based-distributions",
      children: [createVNode(_components.code, {
        children: "yum"
      }), " - Package Manager for RPM-based Distributions"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "yum"
      }), " command is used for managing packages in RPM-based distributions like CentOS and Red Hat. Common commands include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "install"
        }), ": Install a new package."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "update"
        }), ": Update all installed packages."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "remove"
        }), ": Remove an installed package."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
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
            children: " package_name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " yum"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " yum"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package_name"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "dnf---next-generation-package-management-fedora",
      children: [createVNode(_components.code, {
        children: "dnf"
      }), " - Next Generation Package Management (Fedora)"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "dnf"
      }), " command is the modern replacement for ", createVNode(_components.code, {
        children: "yum"
      }), " in Fedora and other RPM-based distributions. It offers improved performance and better dependency management."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package_name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " update"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " dnf"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package_name"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "snap---package-management-system-for-snaps",
      children: [createVNode(_components.code, {
        children: "snap"
      }), " - Package Management System for Snaps"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "snap"
      }), " command is used to manage snap packages, which are self-contained applications. Common commands include:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "install"
        }), ": Install a snap package."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "remove"
        }), ": Remove a snap package."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "list"
        }), ": List installed snap packages."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " snap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package_name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " snap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " remove"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package_name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " snap"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " list"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "42-disk-management",
      children: "4.2. Disk Management"
    }), "\n", createVNode(_components.p, {
      children: "Disk management involves creating, modifying, and managing disk partitions and filesystems."
    }), "\n", createVNode(_components.h4, {
      id: "fdisk---partition-table-manipulator",
      children: [createVNode(_components.code, {
        children: "fdisk"
      }), " - Partition Table Manipulator"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "fdisk"
      }), " command is used to create and manipulate disk partitions. Here is an example of creating a new partition:"]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " fdisk"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Command"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (m "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " help"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): n"
          })]
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
            children: " type:"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "   p"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   primary"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (1 "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "primary,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " extended,"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " free"
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
            children: "   e"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   extended"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Select"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (default "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): p"
          })]
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
            children: " number"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (1-4, "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "default"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "First"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sector"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (2048-20971519, "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "default"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2048"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): 2048"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Last"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sector,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +sectors"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " or"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +size{K,M,G,T,P}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (2048-20971519, "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "default"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 20971519"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): +1G"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Command"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (m "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " help"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): w"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "The"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " partition"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " table"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " has"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " been"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " altered!"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "mkfs---build-a-linux-file-system",
      children: [createVNode(_components.code, {
        children: "mkfs"
      }), " - Build a Linux File System"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "mkfs"
      }), " command is used to create a filesystem on a partition."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mkfs.ext4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /dev/sda1"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "mount---mount-a-file-system",
      children: [createVNode(_components.code, {
        children: "mount"
      }), " - Mount a File System"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "mount"
      }), " command is used to mount a filesystem."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
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
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "umount---unmount-a-file-system",
      children: [createVNode(_components.code, {
        children: "umount"
      }), " - Unmount a File System"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "umount"
      }), " command is used to unmount a filesystem."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sudo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " umount"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " /mnt"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "43-system-monitoring-and-performance",
      children: "4.3. System Monitoring and Performance"
    }), "\n", createVNode(_components.p, {
      children: "Monitoring system performance is essential for maintaining a healthy Linux environment. These commands help you track system resources and performance metrics."
    }), "\n", createVNode(_components.h4, {
      id: "vmstat---report-virtual-memory-statistics",
      children: [createVNode(_components.code, {
        children: "vmstat"
      }), " - Report Virtual Memory Statistics"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "vmstat"
      }), " command reports virtual memory statistics, including processes, memory, paging, block IO, traps, and CPU activity."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " vmstat"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "procs"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -----------memory----------"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " ---swap--"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -----io----"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -system--"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " ------cpu-----"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " r"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  b"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   swpd"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   free"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   buff"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  cache"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   si"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   so"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    bi"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    bo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   cs"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " us"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sy"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " wa"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " st"
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
              color: "#D19A66"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  13172"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    12"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    10"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "   35"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "   45"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 98"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "  0"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "iostat---report-cpu-and-io-statistics",
      children: [createVNode(_components.code, {
        children: "iostat"
      }), " - Report CPU and I/O Statistics"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "iostat"
      }), " command reports CPU and I/O statistics, helping you identify performance bottlenecks."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " iostat"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Linux"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5.4.0-42-generic"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (hostname) \t01/01/2021 \t_x86_64_\t("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CPU"
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
              color: "#61AFEF"
            },
            children: "avg-cpu:"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  %user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   %nice"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " %system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " %iowait"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  %steal"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   %idle"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "           1.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0.50"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0.10"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "   98.40"
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
            children: "             tps"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    kB_read/s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    kB_wrtn/s"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    kB_read"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    kB_wrtn"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sda"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "               1.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "         5.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "         3.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "       500"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "       300"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "sar---collect-report-or-save-system-activity-information",
      children: [createVNode(_components.code, {
        children: "sar"
      }), " - Collect, Report, or Save System Activity Information"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "sar"
      }), " command collects and reports system activity information, including CPU usage, memory usage, and network activity. Here are some common usages:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Report CPU usage every second for three iterations:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sar"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -u"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Linux"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5.4.0-42-generic"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (hostname) \t01/01/2021 \t_x86_64_\t("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CPU"
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
              color: "#61AFEF"
            },
            children: "01:00:01"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     CPU"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     %user"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     %nice"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   %system"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   %iowait"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "    %steal"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     %idle"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "01:00:02"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     all"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      1.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.50"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.10"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     98.40"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "01:00:03"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     all"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      1.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.50"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.10"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     98.40"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "01:00:04"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "     all"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      1.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.50"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.10"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      0.00"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     98.40"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Report memory usage:"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " sar"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -r"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Linux"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5.4.0-42-generic"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (hostname) \t01/01/2021 \t_x86_64_\t("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " CPU"
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
              color: "#61AFEF"
            },
            children: "01:00:01"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " kbmemfree"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " kbmemused"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  %memused"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " kbbuffers"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  kbcached"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "  kbcommit"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   %commit"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "01:00:02"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     43.63"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     13172"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      12.3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "01:00:03"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     43.63"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     13172"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      12.3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "01:00:04"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " AM"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     43.63"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     13172"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "     94456"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "    122104"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "      12.3"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "These advanced commands provide powerful tools for managing packages, disks, and system performance, enabling you to maintain and optimize your Linux environment effectively."
    }), "\n", createVNode(_components.h2, {
      id: "section-5-scripting-and-automation",
      children: "Section 5: Scripting and Automation"
    }), "\n", createVNode(_components.p, {
      children: "Scripting and automation are powerful aspects of Linux that allow users to automate repetitive tasks, manage system configurations, and perform complex operations with ease. This section covers the basics of shell scripting and task scheduling."
    }), "\n", createVNode(_components.h3, {
      id: "51-shell-scripting-basics",
      children: "5.1. Shell Scripting Basics"
    }), "\n", createVNode(_components.p, {
      children: "Shell scripting involves writing scripts using a shell language like Bash to automate tasks. Here are some fundamental concepts and commands to get you started."
    }), "\n", createVNode(_components.h4, {
      id: "creating-and-running-shell-scripts",
      children: "Creating and Running Shell Scripts"
    }), "\n", createVNode(_components.p, {
      children: ["A shell script is a text file containing a series of commands. To create a shell script, use a text editor to write your commands and save the file with a ", createVNode(_components.code, {
        children: ".sh"
      }), " extension. To run the script, you need to make it executable and then execute it."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " nano"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " myscript.sh"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Add the following content to the script:"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "#!/bin/bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello, World!\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Make the script executable and run it:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " chmod"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +x"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " myscript.sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ./myscript.sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hello,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " World!"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "echo---display-a-line-of-text",
      children: [createVNode(_components.code, {
        children: "echo"
      }), " - Display a Line of Text"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "echo"
      }), " command prints text to the terminal."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello, World!\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hello,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " World!"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "read---read-a-line-of-input",
      children: [createVNode(_components.code, {
        children: "read"
      }), " - Read a Line of Input"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "read"
      }), " command reads a line of input from the user."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " read"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -p"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Enter your name: \""
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello, "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "!\""
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "variables---using-variables-in-scripts",
      children: "Variables - Using Variables in Scripts"
    }), "\n", createVNode(_components.p, {
      children: "Variables store data that can be used and manipulated within a script."
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " name=\"John\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello, "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$name"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "!\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Hello,"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " John!"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "loops---for-while-and-until-loops",
      children: "Loops - For, While, and Until Loops"
    }), "\n", createVNode(_components.p, {
      children: "Loops allow you to execute a block of code multiple times."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "For Loop"
        }), ":"]
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
      "data-language": "bash",
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
              color: "#E06C75"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " in"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 5"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "do"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Iteration "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$i"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "While Loop"
        }), ":"]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "while"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " -le"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "do"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Count is "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$count"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$(("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "))"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Until Loop"
        }), ":"]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "until"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " -gt"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "do"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Count is "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$count"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "$(("
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "))"
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
    }), "\n", createVNode(_components.h4, {
      id: "conditionals---if-else-elif-statements",
      children: "Conditionals - If, Else, Elif Statements"
    }), "\n", createVNode(_components.p, {
      children: "Conditionals execute different blocks of code based on certain conditions."
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
              color: "#C678DD"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " -eq"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Count is 5\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "elif"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "$count"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " -lt"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Count is less than 5\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "else"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "  echo"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Count is greater than 5\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fi"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "52-task-scheduling",
      children: "5.2. Task Scheduling"
    }), "\n", createVNode(_components.p, {
      children: "Task scheduling allows you to automate the execution of scripts and commands at specific times or intervals."
    }), "\n", createVNode(_components.h4, {
      id: "cron---schedule-commands-to-run-at-specific-times",
      children: [createVNode(_components.code, {
        children: "cron"
      }), " - Schedule Commands to Run at Specific Times"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "cron"
      }), " daemon runs scheduled tasks at specified times. You can use the ", createVNode(_components.code, {
        children: "crontab"
      }), " command to edit the cron table and schedule tasks."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Crontab Syntax"
        }), ":"]
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "* * * * * command_to_execute"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- - - - -"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "| | | | |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "| | | | +----- Day of the week (0 - 7) (Sunday is both 0 and 7)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "| | | +------- Month (1 - 12)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "| | +--------- Day of the month (1 - 31)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "| +----------- Hour (0 - 23)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "+------------- Minute (0 - 59)"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Examples"
        }), ":"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Run a script every day at 2 AM:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crontab"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
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
            children: " /path/to/script.sh"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Run a script every 5 minutes:"
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " crontab"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " -e"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "*/5 * * * * /path/to/script.sh"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "at---schedule-commands-to-run-once",
      children: [createVNode(_components.code, {
        children: "at"
      }), " - Schedule Commands to Run Once"]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "at"
      }), " command schedules a command to run once at a specified time."]
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
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " at"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 2:00"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " PM"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "at"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "/path/to/script.sh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "at"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> <"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "EO"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "T>"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "These scripting and automation commands provide powerful tools for managing and automating tasks on your Linux system, enabling you to increase efficiency and reduce manual effort."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Mastering Linux commands is essential for anyone looking to harness the full potential of the operating system. From basic file operations and system management to advanced networking and scripting, these commands provide the tools you need to navigate, manage, and optimize your Linux environment effectively."
    }), "\n", createVNode(_components.p, {
      children: ["Remember, practice is key to becoming proficient with these commands. Explore beyond the listed commands, experiment with different options, and refer to the man pages (", createVNode(_components.code, {
        children: "man command"
      }), ") for detailed information."]
    }), "\n", createVNode(_components.p, {
      children: "For further learning and practice, consider exploring online tutorials, Linux forums, and communities. The more you practice, the more confident and efficient you will become in using the Linux command line."
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

const url = "src/content/posts/linux-commands.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/linux-commands.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/linux-commands.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
