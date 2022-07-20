"use strict";

function test() {
  return Array.prototype.slice.call(arguments);
}

console.log(test(1, 2, 3));