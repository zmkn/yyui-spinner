import path from "path";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
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
    entry: resolve("core/spinner.js"),
    dest: resolve("dist/yyui.spinner.esm.js"),
    format: "esm"
  },
  cjs: {
    entry: resolve("core/spinner.js"),
    dest: resolve("dist/yyui.spinner.cjs.js"),
    format: "cjs"
  },
  umd: {
    entry: resolve("core/spinner.js"),
    dest: resolve("dist/yyui.spinner.js"),
    format: "umd"
  },
  "esm-min": {
    entry: resolve("core/spinner.js"),
    dest: resolve("dist/yyui.spinner.esm.min.js"),
    format: "esm",
    plugins: [terser()]
  },
  "cjs-min": {
    entry: resolve("core/spinner.js"),
    dest: resolve("dist/yyui.spinner.cjs.min.js"),
    format: "cjs",
    plugins: [terser()]
  },
  "umd-min": {
    entry: resolve("core/spinner.js"),
    dest: resolve("dist/yyui.spinner.min.js"),
    format: "umd",
    plugins: [terser()]
  }
};

const getConfig = name => {
  const options = builds[name];
  const config = {
    input: options.entry,
    plugins: [
      nodeResolve(),
      commonjs(),
      string(),
      alias({
        entries: Object.assign({}, aliases)
      }),
      babel({
        exclude: [/node_modules/, /@babel\/runtime/],
        babelHelpers: "runtime"
      })
    ].concat(options.plugins || []),
    output: [
      {
        file: options.dest,
        format: options.format,
        name: options.moduleName || "Spinner"
      }
    ]
  };
  return config;
};

module.exports = getConfig(process.env.TARGET);
