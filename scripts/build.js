const path = require("path");
const url = require("@rollup/plugin-url");
const babel = require("@rollup/plugin-babel");
const buble = require("@rollup/plugin-buble");
const alias = require("@rollup/plugin-alias");
const cjs = require("@rollup/plugin-commonjs");
const node = require("@rollup/plugin-node-resolve");
const aliases = require("./alias.js");

console.log(process.env.TARGET, node);

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
    format: "es"
  },
  cjs: {
    entry: resolve("core/index.js"),
    dest: resolve("dist/yyui.spinner.cjs.js"),
    format: "cjs"
  },
  umd: {
    entry: resolve("core/index.js"),
    dest: resolve("dist/yyui.spinner.js"),
    format: "umd",
    plugins: [node(), cjs()]
  },
  "esm-browser": {
    entry: resolve("core/index.js"),
    dest: resolve("dist/yyui.spinner.esm.browser.js"),
    format: "es",
    transpile: false
  }
};

const getConfig = name => {
  const build = builds[name];
  const config = {
    input: build.entry,
    plugins: [url(), babel(), alias(Object.assign({}, aliases))].concat(
      build.plugins || []
    ),
    output: {
      file: build.dest,
      format: build.format
    }
  };
  if (build.transpile !== false) {
    config.plugins.push(buble());
  }
  return config;
};

module.exports = getConfig(process.env.TARGET);
