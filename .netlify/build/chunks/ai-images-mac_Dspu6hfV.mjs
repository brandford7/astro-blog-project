import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Cn2uIOZN.mjs';
import { $ as $$Image } from './_astro_assets_LOXj4B9o.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_CV3LLrVP.mjs';
import 'clsx';

const __0_______assets_images_25_01_diffusionbee_models_jpeg__ = new Proxy({"src":"/_astro/diffusionbee-models.CWea4xd0.jpeg","width":2104,"height":1366,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/25/01/diffusionbee-models.jpeg";
							}
							
							return target[name];
						}
					});

const __1_______assets_images_25_01_diffusionbee_gen_image_png__ = new Proxy({"src":"/_astro/diffusionbee-gen-image.B_weZxWZ.png","width":722,"height":2040,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/25/01/diffusionbee-gen-image.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "date": "2025-01-12T00:00:00.000Z",
  "title": "How To Locally Generate AI Images (Flux) on Mac",
  "description": "Learn how you can use your own Mac to start and generate images with flux or stable difussion.",
  "image": "../../assets/images/25/01/easy-generate-local-images.jpg",
  "categories": ["vps"],
  "authors": ["Dragos"],
  "tags": ["mac"],
  "canonical": "https://www.bitdoze.com/ai-images-mac/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-flux",
    "text": "What is FLUX?"
  }, {
    "depth": 2,
    "slug": "why-use-diffusionbee",
    "text": "Why Use DiffusionBee?"
  }, {
    "depth": 2,
    "slug": "step-by-step-guide",
    "text": "Step-by-Step Guide"
  }, {
    "depth": 3,
    "slug": "1-download-diffusionbee",
    "text": "1. Download DiffusionBee"
  }, {
    "depth": 3,
    "slug": "2-install-diffusionbee",
    "text": "2. Install DiffusionBee"
  }, {
    "depth": 3,
    "slug": "3-launch-diffusionbee",
    "text": "3. Launch DiffusionBee"
  }, {
    "depth": 3,
    "slug": "4-access-flux-models",
    "text": "4. Access FLUX Models"
  }, {
    "depth": 3,
    "slug": "5-download-flux-models",
    "text": "5. Download FLUX Models"
  }, {
    "depth": 3,
    "slug": "6-generate-images-with-flux",
    "text": "6. Generate Images with FLUX"
  }, {
    "depth": 3,
    "slug": "7-how-much-it-takes",
    "text": "7. How Much It Takes"
  }, {
    "depth": 2,
    "slug": "tips-for-optimal-performance",
    "text": "Tips for Optimal Performance"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The new Mac Mini M4 Pro has brought unprecedented power to desktop computing, making it an excellent choice for AI image generation. In this article, we’ll explore how to use the FLUX AI model on your Mac Mini M4 using DiffusionBee, a user-friendly application that simplifies the process of creating AI-generated images."
    }), "\n", createVNode(_components.p, {
      children: ["If you are interested to see some free cool Mac Apps you can check ", createVNode(_components.a, {
        href: "https://toolhunt.net/mac/",
        children: "toolhunt.net mac apps section"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-flux",
      children: "What is FLUX?"
    }), "\n", createVNode(_components.p, {
      children: "FLUX is an advanced AI model developed by Black Forest Labs, known for producing high-quality images. It’s particularly notable for its ability to generate photorealistic results and has quickly become a favorite among AI art enthusiasts."
    }), "\n", createVNode(_components.h2, {
      id: "why-use-diffusionbee",
      children: "Why Use DiffusionBee?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://diffusionbee.com/",
        children: "DiffusionBee"
      }), " is often referred to as the fastest and easiest toolbox for running AI apps locally on Mac computers. It provides a straightforward interface for using various AI models, including FLUX, making it an ideal choice for both beginners and experienced users."]
    }), "\n", createVNode(_components.p, {
      children: "DiffusionBee key Features:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Text-to-Image Generation:"
          }), " DiffusionBee allows users to create stunning images from text prompts, transforming written descriptions into visual art using advanced AI technology."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Offline Functionality:"
          }), " The application runs entirely on your local machine, ensuring privacy and security by processing all image generation without an internet connection."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Image Editing Tools:"
          }), " DiffusionBee offers a comprehensive suite of image manipulation features, including image-to-image transformation, inpainting, outpainting, and generative fill."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "High-Resolution Outputs:"
          }), " Users can generate high-quality images with customizable dimensions, supporting resolutions up to 2K for clear, detailed visuals."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Custom Model Training:"
          }), " DiffusionBee allows users to train their own image generation models using personal datasets, enabling the creation of highly personalized and unique artistic styles."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These features make DiffusionBee a powerful and versatile tool for AI art creation, catering to both beginners and experienced artists alike."
    }), "\n", createVNode($$YouTubeEmbed, {
      url: "https://www.youtube.com/embed/lD9EJGjTKj8",
      label: "How To Locally Generate AI Images (Flux) on Mac"
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-guide",
      children: "Step-by-Step Guide"
    }), "\n", createVNode(_components.h3, {
      id: "1-download-diffusionbee",
      children: "1. Download DiffusionBee"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Visit the ", createVNode(_components.a, {
          href: "https://github.com/divamgupta/diffusionbee-stable-diffusion-ui/releases/tag/2.5.3",
          children: "DiffusionBee release page"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Download the latest version compatible with your Mac Mini M4 (arm64 architecture)."
      }), "\n", createVNode(_components.li, {
        children: "Look for a file named similar to “DiffusionBee_MPS_arm64-2.5.3.dmg” or newer."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-install-diffusionbee",
      children: "2. Install DiffusionBee"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the downloaded .dmg file in your Downloads folder."
      }), "\n", createVNode(_components.li, {
        children: "Double-click the file to open it."
      }), "\n", createVNode(_components.li, {
        children: "Drag the DiffusionBee icon into the Applications folder."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-launch-diffusionbee",
      children: "3. Launch DiffusionBee"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Open your Applications folder and double-click on the DiffusionBee app."
      }), "\n", createVNode(_components.li, {
        children: "If you encounter any security warnings, right-click the app icon, select “Open,” and confirm that you want to open the app."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4-access-flux-models",
      children: "4. Access FLUX Models"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In DiffusionBee, scroll down to the bottom of the home screen."
      }), "\n", createVNode(_components.li, {
        children: "Look for the FLUX section."
      }), "\n", createVNode(_components.li, {
        children: "Choose the flux model that you want to use."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "5-download-flux-models",
      children: "5. Download FLUX Models"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the FLUX section, you’ll see available FLUX models."
      }), "\n", createVNode(_components.li, {
        children: "Click on the download button next to the model you want to use."
      }), "\n", createVNode(_components.li, {
        children: "Wait for the download to complete. The FLUX dev model is approximately 13.6GB."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "diffusionbee models",
        src: __0_______assets_images_25_01_diffusionbee_models_jpeg__
      })
    }), "\n", createVNode(_components.h3, {
      id: "6-generate-images-with-flux",
      children: "6. Generate Images with FLUX"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Once the model is downloaded, select it from the model dropdown menu."
      }), "\n", createVNode(_components.li, {
        children: "Enter your prompt in the text field."
      }), "\n", createVNode(_components.li, {
        children: "Adjust any settings as desired (image size, number of steps, etc.)."
      }), "\n", createVNode(_components.li, {
        children: "Click the “Generate” button."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "diffusionbee generate image",
        src: __1_______assets_images_25_01_diffusionbee_gen_image_png__
      })
    }), "\n", createVNode(_components.h3, {
      id: "7-how-much-it-takes",
      children: "7. How Much It Takes"
    }), "\n", createVNode(_components.p, {
      children: "I have the M4 Pro base model with 24GB of RAM. When I am generating one image with Flux Dev and 25 steps at 704x704 it takes about 6 minutes to have an image generated. When I use the default model 30 seconds."
    }), "\n", createVNode(_components.p, {
      children: "The Flux generation on DiffusionBee is using 7 GB of RAM with 50% off GPU. THe standard one half of the RAM and GPU from Flux."
    }), "\n", createVNode(_components.h2, {
      id: "tips-for-optimal-performance",
      children: "Tips for Optimal Performance"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "For better results, try using the “FLUX.1-schnell” model on Macs with 16GB RAM."
      }), "\n", createVNode(_components.li, {
        children: "Close unnecessary applications to free up system resources."
      }), "\n", createVNode(_components.li, {
        children: "Experiment with different prompts and settings to achieve the best results."
      }), "\n", createVNode(_components.li, {
        children: "Use fewer steps for faster image generation."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Generating AI images with FLUX on your Mac Mini M4 is now easier than ever, thanks to DiffusionBee. With just one click, you can create stunning, high-quality images right on your desktop. As you explore this powerful tool, remember that the key to great AI-generated art lies in experimentation and creativity. Enjoy your journey into the world of AI art creation!"
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

const url = "src/content/posts/ai-images-mac.mdx/";
const file = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/ai-images-mac.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/content/posts/ai-images-mac.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
