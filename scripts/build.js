const path = require("path");
const alias = require("./alias.js");

const resolve = p => {
  const base = p.split("/")[0];
  if (alias[base]) {
    return path.resolve(alias[base], p.slice(base.length + 1));
  } else {
    return path.resolve(__dirname, "../", p);
  }
};

module.exports = {
  entry: resolve("core/index.js")
};
