// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.indexof
es6id: 21.1.3.8
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var indexOf = String.prototype.indexOf;

assert.sameValue(typeof indexOf, 'function');

assert.throws(TypeError, function() {
  indexOf.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  indexOf.call(null, '');
}, 'null');
