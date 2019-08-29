const codes = {
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  white: [37, 39],
  
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgWhite: [47, 49]
};

// Object.keys(codes).forEach(function(key) {
//   const val = codes[key];
//   String.prototype.__defineGetter__(key, function() {
//     return `\u001b[${val[0]}m${this}\u001b[${val[1]}m`
//   });
// });

// This feature is deprecated in favor of defining getters using the object initializer syntax or the Object.defineProperty() API. 
// While this feature is widely implemented, it is only described in the ECMAScript specification because of legacy usage. 
// This method should not be used since better alternatives exist.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

Object.keys(codes).forEach(function (key) {
  const val = codes[key];
  Object.defineProperty(String.prototype, key, {
    get() {
      return `\u001b[${val[0]}m${this}\u001b[${val[1]}m`
    }
  });
});

