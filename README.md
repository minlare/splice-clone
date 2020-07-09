# splice-clone

Splice and clone javascript arrays

[![NPM](https://nodei.co/npm/splice-clone.png)](https://nodei.co/npm/splice-clone/)

## Usage

Takes an array as first argument, followed by standard `Array.prototype.splice` arguments.

```js
import spliceClone from 'splice-clone';

const arr = [1, 2, 3];

const arr2 = spliceClone(arr, 1, 0, 1.5);
// arr2 = [1, 1.5, 2, 3]
```
