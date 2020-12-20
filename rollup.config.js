// rollup.config.js

import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
  },
  plugins: [resolve({ jsnext: true, main: true, browser: true })],
};
