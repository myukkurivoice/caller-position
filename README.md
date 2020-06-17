# caller-position -- node module to get caller filename, and line number.
===========================================

## Description

get caller filename, and line number.
to use for debug, and testing.

## Install

```bash
npm install --save git+https://github.com/myukkurivoice/caller-position#master
````

## Usage

As a node module:

```js
var caller = require('caller-position');

console.log(caller.caller());

console.log(caller.position());
```

returning value example are,

```
{ filename_base: 'test.js', line_no: '3', line_pos: '20' }

test.js:3
```

