const codes = {
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  white: [37, 39]
};

const colors = {};

Object.keys(codes).forEach(function(key) {
  const val = codes[key];
  colors[key] = function(str) {
    return `\u001b[${val[0]}m${str}\u001b[${val[1]}m`
  }
});

module.exports = colors