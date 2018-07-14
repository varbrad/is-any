Simple alternative to large `or` chains in your code.

# Installation

Using `npm` or `yarn`.

```
npm install is-or
yarn add is-or
```

# Usage

CommonJS

```javascript
var isOr = require('is-or');

var d = 50
isOr(d, 20, 40, 60) // false
isOr(d, 30, 50, 70) // true
```

ES6

```javascript
import isOr from 'is-or';

const d = 60
isOr(d, 1, 2, 3) // false
isOr(d, 5, 9, 44, 28, 60, 23, 44, 11) // true
```

# Why?

Before;

```javascript
if (value === 20 || value === 25 || value === 60) {
  // do something
}
```

After;

```javascript
if (isOr(value, 20, 25, 60)) {
  // do something
}
```
