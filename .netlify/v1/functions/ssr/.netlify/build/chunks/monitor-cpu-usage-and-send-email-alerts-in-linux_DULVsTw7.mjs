import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import { $ as $$Button } from './Button_CqIQ1ybK.mjs';
import 'clsx';

const frontmatter = {
  "date": "2022-09-14T00:00:00.000Z",
  "title": "Monitor CPU Usage and Send Email Alerts in Linux",
  "description": "Let's see how we can monitor CPU usage on a server and receive emails.",
  "excerpt": "Let's see how we can monitor CPU usage on a server and receive emails.",
  "image": "../../assets/images/cpu_monitoring.jpeg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["linux", "tutorials"],
  "canonical": "https://www.bitdoze.com/monitor-cpu-usage-and-send-email-alerts-in-linux/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "youtube-video-with-details",
    "text": "Youtube Video With Details"
  }, {
    "depth": 2,
    "slug": "shell-script-to-be-used",
    "text": "Shell Script To Be Used"
  }, {
    "depth": 2,
    "slug": "activating-the-cpu-monitoring-script",
    "text": "Activating the CPU Monitoring Script"
  }, {
    "depth": 3,
    "slug": "install-ps_mem",
    "text": "Install ps_mem"
  }, {
    "depth": 3,
    "slug": "put-the-script-in-crontab",
    "text": "Put the Script in Crontab"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Monitoring the CPU is very important on a Linux server as there may be cases when your applications will need more CPU and can consume everything. You would want to be notified via email in case the CPU usage spikes and you need to do some checks."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["In case you are interested to monitor server resources like CPU, memory, disk space you can check: ", createVNode(_components.a, {
          href: "https://www.bitdoze.com/sever-monitoring/",
          children: "How To Monitor Server and Docker Resources"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For your server to be able to send emails you will need to have configured an SMTP Relay or you should have an email server hosted on the VPS that will send the alarm."
    }), "\n", createVNode(_components.p, {
      children: "In case you are using an online VPS provider like Hetzner or DigitalOcean having such a script can be very useful as it can catch problems coming from your hosting provider or your app. For more details on Hetzner, you can check this review."
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will configure a script that will run in crontab every 5 minutes and check to see if the CPU usage is above 80% in case that happens you will be notified via email with the:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Current Usage"
      }), "\n", createVNode(_components.li, {
        children: "Top 20 processes that consume high CPU"
      }), "\n", createVNode(_components.li, {
        children: "Top 10 Processes that consume high CPU using the ps command"
      }), "\n", createVNode(_components.li, {
        children: "Memory Utilization on the server"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In case you are interested to have a web panel that can help you manage your applications and be used as a reverse proxy you can check the bellow course:"
    }), "\n", createVNode($$Button, {
      link: "https://webdoze.net/courses/cloudpanel-setup/",
      text: "CloudPanel Setup Course"
    }), "\n", createVNode(_components.p, {
      children: "Having all of this in an email will help us better understand what is happening on the server we have. To build the script we are going to use shell commands."
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
    }), "\n", createVNode(_components.h2, {
      id: "youtube-video-with-details",
      children: "Youtube Video With Details"
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/FdjECMq1N2U",
      label: "Monitor CPU Usage and Send Email Alerts in Linux"
    }), "\n", createVNode(_components.h2, {
      id: "shell-script-to-be-used",
      children: "Shell Script To Be Used"
    }), "\n", createVNode(_components.p, {
      children: "Below is the script that we are going to use to help us monitor the CPU usage, this will help you monitor Ubuntu versions like 20.04 or 22.04 or RedHat distros."
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
            children: "    #!/bin/bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    cpu_idle=`top -b -n 1 | grep Cpu | awk '{print $8}'|cut -f 1 -d \".\"`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    cpuuse=`expr 100 - $cpu_idle`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    date=$(date '+%Y-%m-%d %H:%M:%S')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    if [ \"$cpuuse\" -ge 80 ]; then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    SUBJECT=\"ATTENTION: CPU load is high on $(hostname) at $(date)\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    MESSAGE=\"/tmp/Mail.out\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    TO=\"youremail@domain.com\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"CPU current usage is: $cpuuse%\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"+------------------------------------------------------------------+\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"Top 20 processes that consume high CPU\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"+------------------------------------------------------------------+\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"$(top -bn1 | head -20)\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"+------------------------------------------------------------------+\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"Top 10 Processes which consuming high CPU using the ps command\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"+------------------------------------------------------------------+\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"$(ps -eo pcpu,pid,user,args | sort -k 1 -r | head -10)\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"Memory Utilization on the server\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"+------------------------------------------------------------------+\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      echo \"$(ps_mem)\" >> $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      mail -s \"$SUBJECT\" \"$TO\" < $MESSAGE"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      rm /tmp/Mail.out"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    else"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    echo \"$date: Server CPU usage is in under threshold.CPU current usage is: $cpuuse%\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      fi"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In this script, you need to change the TO with your email and in case you want to change the threshold you put the value you want in the -ge 80 (now is 80)."
    }), "\n", createVNode(_components.h2, {
      id: "activating-the-cpu-monitoring-script",
      children: "Activating the CPU Monitoring Script"
    }), "\n", createVNode(_components.h3, {
      id: "install-ps_mem",
      children: "Install ps_mem"
    }), "\n", createVNode(_components.p, {
      children: "This is a tool that will show you better memory usage per process, to install this tool you do:"
    }), "\n", createVNode(_components.p, {
      children: "Get ps_men:"
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
            children: "      sudo wget -qO /usr/local/bin/ps_mem https://raw.githubusercontent.com/pixelb/ps_mem/master/ps_mem.py"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Make ps_mem executable:"
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
            children: "sudo chmod a+x /usr/local/bin/ps_mem"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Check the version:"
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
            children: "      ps_mem --version"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "If you are receiving an error message /usr/bin/env: ‘python’: No such file or directory, you need to create a symbolic link for /usr/bin/python. In Ubuntu 20.04 or Ubuntu 22.04, only Python 3 is installed by default."
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
            children: "      sudo ln -s /usr/bin/python3 /usr/bin/python"
          })
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "put-the-script-in-crontab",
      children: "Put the Script in Crontab"
    }), "\n", createVNode(_components.p, {
      children: "Create a file with the script under /opt/scripts or in any location you want:"
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
            children: "vi /opt/scripts/cpu-alert.sh"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Make The File Executable:"
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
            children: "sudo chmod a+x /opt/scripts/cpu-alert.sh"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Execute the Script:"
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
            children: "      /opt/scripts/cpu-alert.sh"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "The output should be on email:"
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
            children: "    CPU current usage is: 5%"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    +------------------------------------------------------------------+"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Top 20 processes that consume high CPU"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    +------------------------------------------------------------------+"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    top - 11:27:12 up 6 days, 4:31, 1 user, load average: 0.08, 0.08, 0.07"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Tasks: 204 total, 1 running, 202 sleeping, 0 stopped, 1 zombie"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    %Cpu(s): 4.1 us, 0.0 sy, 0.0 ni, 95.9 id, 0.0 wa, 0.0 hi, 0.0 si, 0.0 st"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    MiB Mem : 3827.7 total, 556.1 free, 1427.2 used, 1844.4 buff/cache"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    MiB Swap: 2048.0 total, 1276.7 free, 771.3 used. 1454.0 avail Mem"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1959 clp 20 0 1355012 63248 21020 S 6.2 1.6 127:54.60 beam.smp"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1 root 20 0 168072 9940 6204 S 0.0 0.3 2:35.24 systemd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    2 root 20 0 0 0 0 S 0.0 0.0 0:00.11 kthreadd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    3 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_gp"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_par_gp"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    5 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 netns"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    7 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 kworker/0:0H-events_highpri"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    10 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 mm_percpu_wq"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    11 root 20 0 0 0 0 S 0.0 0.0 0:00.00 rcu_tasks_rude_"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    12 root 20 0 0 0 0 S 0.0 0.0 0:00.00 rcu_tasks_trace"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    13 root 20 0 0 0 0 S 0.0 0.0 3:41.85 ksoftirqd/0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    14 root 20 0 0 0 0 I 0.0 0.0 9:58.13 rcu_sched"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    15 root rt 0 0 0 0 S 0.0 0.0 0:01.65 migration/0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    +------------------------------------------------------------------+"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Top 10 Processes that consume high CPU using the ps command"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    +------------------------------------------------------------------+"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    %CPU PID USER COMMAND"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    5.0 596375 btdo php-fpm: pool btdo.uk"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    3.5 1039 mysql /usr/sbin/mariadbd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1.4 1959 clp /app/erts-12.0/bin/beam.smp -- -root /app -progname erl -- -home /app -- -noshell -s elixir start_cli -mode embedded -setcookie S4WHAF4LH5WHSPWUHPKIVMSFISQKQJVFWEGHSP7YW6MT5LKCNDCA==== -sname plausible -config /app/releases/0.0.1/sys -boot /app/releases/0.0.1/start -boot_var RELEASE_LIB /app/lib -- -extra --no-halt"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1.2 772 redis /usr/bin/redis-server 127.0.0.1:6379"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    0.6 2677 systemd+ /usr/bin/clickhouse-server --config-file=/etc/clickhouse-server/config.xml"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    0.4 579396 root nginx: worker process"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    0.3 2071 root node server/server.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    0.1 789 root /usr/bin/containerd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    0.1 14 root [rcu_sched]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Memory Utilization on the server"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    +------------------------------------------------------------------+"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Private + Shared = RAM used    Program"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4.0 KiB + 25.5 KiB = 29.5 KiB    erl_child_setup"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    40.0 KiB + 24.5 KiB = 64.5 KiB    epmd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4.0 KiB + 82.5 KiB = 86.5 KiB    dumb-init"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    56.0 KiB + 108.5 KiB = 164.5 KiB    inet_gethost (3)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    144.0 KiB + 56.5 KiB = 200.5 KiB    cron"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    148.0 KiB + 52.5 KiB = 200.5 KiB    atd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    320.0 KiB + 0.5 KiB = 320.5 KiB    exim4"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    192.0 KiB + 136.0 KiB = 328.0 KiB    agetty (2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    268.0 KiB + 89.5 KiB = 357.5 KiB    qemu-ga"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    340.0 KiB + 104.5 KiB = 444.5 KiB    irqbalance"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    304.0 KiB + 361.5 KiB = 665.5 KiB    master"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    352.0 KiB + 361.0 KiB = 713.0 KiB    chronyd (2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    384.0 KiB + 358.5 KiB = 742.5 KiB    unattended-upgr"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    728.0 KiB + 111.5 KiB = 839.5 KiB    systemd-udevd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    652.0 KiB + 339.5 KiB = 991.5 KiB    polkitd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    732.0 KiB + 418.5 KiB = 1.1 MiB    systemd-logind"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    920.0 KiB + 243.5 KiB = 1.1 MiB    dbus-daemon"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    800.0 KiB + 391.5 KiB = 1.2 MiB    systemd-networkd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4.0 KiB + 1.3 MiB = 1.3 MiB    clckhouse-watch"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    820.0 KiB + 516.5 KiB = 1.3 MiB    systemd-resolved"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1.4 MiB + 128.5 KiB = 1.5 MiB    rsyslogd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    328.0 KiB + 1.2 MiB = 1.5 MiB    php-fpm7.1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    660.0 KiB + 902.5 KiB = 1.5 MiB    qmgr"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    708.0 KiB + 878.5 KiB = 1.5 MiB    pickup"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1.3 MiB + 458.5 KiB = 1.8 MiB    ModemManager"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    776.0 KiB + 1.2 MiB = 1.9 MiB    php-fpm7.2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    2.0 MiB + 49.5 KiB = 2.0 MiB    proftpd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    924.0 KiB + 1.2 MiB = 2.1 MiB    php-fpm7.3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1.6 MiB + 533.5 KiB = 2.2 MiB    udisksd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    2.5 MiB + 1.1 MiB = 3.6 MiB    tlsmgr"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    2.3 MiB + 1.4 MiB = 3.7 MiB    bash (2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    3.3 MiB + 992.5 KiB = 4.3 MiB    networkd-dispat"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4.3 MiB + 73.5 KiB = 4.4 MiB    memcached"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4.2 MiB + 754.0 KiB = 4.9 MiB    docker-proxy (4)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    3.6 MiB + 1.5 MiB = 5.1 MiB    sshd (2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    5.4 MiB + 5.0 MiB = 10.5 MiB    systemd (3)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    11.1 MiB + 35.5 KiB = 11.1 MiB    clp-agent"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    12.3 MiB + 1.6 MiB = 13.9 MiB    containerd-shim-runc-v2 (5)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    14.5 MiB + 2.6 MiB = 17.1 MiB    php-fpm8.0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    17.4 MiB + 23.5 KiB = 17.4 MiB    containerd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    18.9 MiB + 170.5 KiB = 19.0 MiB    redis-server"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    17.0 MiB + 3.8 MiB = 20.8 MiB    php-fpm8.1 (2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    21.4 MiB + 751.5 KiB = 22.2 MiB    multipathd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    13.9 MiB + 10.2 MiB = 24.1 MiB    systemd-journald"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    28.5 MiB + 178.5 KiB = 28.6 MiB    dockerd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    28.9 MiB + 1.3 MiB = 30.2 MiB    clickhouse"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    29.6 MiB + 15.6 MiB = 45.2 MiB    postgres (18)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    40.1 MiB + 6.0 MiB = 46.0 MiB    php-fpm7.4 (2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    47.2 MiB + 8.0 MiB = 55.3 MiB    beam.smp"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    82.3 MiB + 82.5 KiB = 82.4 MiB    node"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    72.0 MiB + 30.0 MiB = 102.0 MiB    nginx (8)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    807.7 MiB + 398.5 KiB = 808.1 MiB    mariadbd"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ---------------------------------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1.4 GiB"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ================================="
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Activating the script in crontab and creating a log for the run:"
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
            children: "    #open crontab in edit mode"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    contab -e"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    #add the bellow line"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    */5 * * * * /bin/bash /opt/scripts/cpu-alert.sh >> /opt/scripts/cpu_check_cron.log 2>&1"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The above will create a log under /opt/scripts/cpu_check_cron.log with the output when this is not sending an email."
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/do",
      text: "DigitalOcean $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/vultr",
      text: "Vultr $100 Free"
    }), "\n", createVNode($$Button, {
      link: "https://go.bitdoze.com/hetzner",
      text: "Hetzner €⁠20 Free"
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

const url = "src/content/posts/monitor-cpu-usage-and-send-email-alerts-in-linux.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/monitor-cpu-usage-and-send-email-alerts-in-linux.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/monitor-cpu-usage-and-send-email-alerts-in-linux.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
