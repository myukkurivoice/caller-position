# caller-position -- node module for returning caller filename, and line number.
===========================================

## Description

get caller filename, and line number.
to use for debug, and testing.

## Install

```bash
npm install --save git+https://github.com/taku-o/caller-position#master
````

## Usage

As a node module:

```js
var mod = require('caller-position');

console.log(mod.caller());
```

returning value example is,

```
{ filename_base: 'test.js', line_no: '3', line_pos: '20' }
```

