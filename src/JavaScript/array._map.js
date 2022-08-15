// const { isArrayLike } = require("lodash");

 Array.prototype._map = function (Fn) {
                const array = this;
                const newArray = new Array(array.length);
                console.log(arguments)
                for (let i = 0; i < array.length; i++) {
                    let result = Fn.call(this,array[i],i,array);
                    newArray[i] = result;
                }
                return newArray;
}
let arr = [1, 2];
console.log(arr._map(i => i * 2));


// 2022-08-11
// 手写一个map方法，map的输入是一个函数，这个函数有三个参数
// 返回值是什么？不太清楚.。答：返回一个新的数组，并不会改变原数组的值
// 核心功能是把参数中的item进行fn中的运算
// 这个只是简化版
Array.prototype._map2 = function (fn) {
    // 首先获取array,调用肯定是arr.map2，所以this就是array
    let arr = this
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // 对于每个item，执行fn的方法
        newArr[i] = fn.call(this, arr[i], i, arr)
    }

    return newArr
}
console.log(arr._map2(i => i * 2));

// 完整版map的参数除了一个fn之外，还有一个thisArg，是执行fn时this的指定

Array.prototype._map3 = function (fn, thisArg) {
    // 首先获取array,调用肯定是arr.map2，所以this就是array
    // 这里可以判断特殊情况
    if (this == undefined) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }
    let arr = this
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // 对于每个item，执行fn的方法
        // 注意这里的不同
        newArr[i] = fn.call(thisArg, arr[i], i, arr)
    }

    return newArr
}
console.log(arr._map3(i => i * 2));