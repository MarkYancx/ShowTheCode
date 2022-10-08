"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// let s = "16"
// let i = 3
// let number = 5
// s = s.slice(0, i) + number + s.slice(i)
// console.log(s);
var arr = [1, 3, 5];
var total = 11;
var needNum = Infinity;
arr.sort().reverse();
ans = [];

var dfs = function dfs(cur, path, start) {
  if (cur < 0) return;

  if (cur == 0) {
    if (path.length <= needNum) {
      ans.push(_toConsumableArray(path));
      needNum = path.length;
    }

    return;
  }

  for (var i = start; i < arr.length; i++) {
    path.push(arr[i]);
    dfs(cur - arr[i], path, i);
    path.pop();
  }
};

dfs(total, [], 0);
console.log(ans);