Array.prototype._forEach = function (fn, thisArg) {

    if (this == undefined) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
    }
    let arr = this
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        
        arr[i] = fn.call(thisArg, arr[i], i, arr)
    }

}
let arr = [1, 2];
// console.log(arr._forEach(i => i * 2));
console.log(arr);