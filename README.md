# node_colors
node.js console with colors

## Install

```sh
$ npm i @zhangfuxing/colors
```  

## Useage  

### getter mode  

```js  
require('@zhangfuxing/colors');

console.log('test'.red);
```

### function mode  

```js  
const colors = require('@zhangfuxing/colors/fn');

console.log(colors.green('test'));
```

### text colors  

* red 
* green
* yellow
* blue
* white

### background colors

* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgWhite