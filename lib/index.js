const codes = {
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  white: [37, 39]
};

Object.keys(codes).forEach(function(key) {
  const val = codes[key];
  String.prototype.__defineGetter__(key, function() {
    return `\u001b[${val[0]}m${this}\u001b[${val[1]}m`
  });
});