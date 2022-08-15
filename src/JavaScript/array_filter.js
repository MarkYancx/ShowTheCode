Array.prototype._filter = function (fn, thisArg) {
    let newArr = []
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (fn.call(thisArg, arr[i], i, arr))
            newArr.push(arr[i])
    }
    return newArr
}

let arr = [1, 2,5,8,10];
console.log(arr._filter(i => i % 2 == 0));