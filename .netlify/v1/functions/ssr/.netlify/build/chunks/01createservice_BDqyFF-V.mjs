const img1 = new Proxy({"src":"/_astro/01createservice.Ch4ebPPI.png","width":1176,"height":770,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/brandfordko/react/bitdoze-astro-bkw/src/assets/images/23/03/01createservice.png";
							}
							
							return target[name];
						}
					});

export { img1 as i };
