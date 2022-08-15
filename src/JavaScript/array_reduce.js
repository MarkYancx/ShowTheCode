// 先了解一下reduce的用法
// function Accumulation(...vals) {
//     return vals.reduce((t, v) => t + v, 0);
// }

// function Multiplication(...vals) {
//     return vals.reduce((t, v) => t * v, 1);
// }

// array.reduce((t, v, i, a) => {}, initValue)
Array.prototype._reduce = function (fn, initValue = 0) {
    let res = initValue
    let i = 0
    if (typeof initValue === 'undefined') {
        res = this[i]
        i++
    }
    while (i < this.length) {
        res = fn(res, this[i])
    }
    return res
}