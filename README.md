# strict equality
usage:
```js
const areStrictlyEqual = require("@10xly/strict-equals")
console.log(areStrictlyEqual(3, 3)) // true

console.log(areStrictlyEqual(3, 4)) // false
```
ponyfill for `===`