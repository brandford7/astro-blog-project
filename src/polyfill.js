// src/polyfills.js
if (typeof MessageChannel === "undefined") {
  globalThis.MessageChannel = class {
    constructor() {
      // Dummy ports to satisfy references; adjust if your code requires more functionality.
      this.port1 = {};
      this.port2 = {};
    }
  };
}
