const img1 = new Proxy({"src":"/_astro/groq-mistral-streamlit.DJ6VWFuR.png","width":3252,"height":1602,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/24/02/groq-mistral-streamlit.png";
							}
							
							return target[name];
						}
					});

export { img1 as i };
