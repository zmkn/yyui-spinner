import path from "path";
import buble from "@rollup/plugin-buble";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import aliases from "./alias.js";
import string from "./string.js";

const resolve = p => {
  const base = p.split("/")[0];
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1));
  } else {
    return path.resolve(__dirname, "../", p);
  }
};

const builds = {
  esm: {
    entry: resolve("core/index.js"),
    dest: resolve("dist/yyui.spinner.esm.js"),
    format: "esm"
  },
  umd: {
    entry: resolve("core/index.js"),
    dest: resolve("dist/yyui.spinner.js"),
    format: "umd",
    plugins: [nodeResolve(), commonjs()]
  }
};

const getConfig = name => {
  const options = builds[name];
  const config = {
    input: options.entry,
    plugins: [
      string(),
      alias({
        entries: Object.assign({}, aliases)
      }),
      babel({
        exclude: ["**/node_modules/**"],
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled"
      }),
      buble()
    ].concat(options.plugins || []),
    output: {
      file: options.dest,
      format: options.format,
      name: options.moduleName || "Spinner"
    }
  };
  return config;
};

module.exports = getConfig(process.env.TARGET);
