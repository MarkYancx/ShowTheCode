Function.prototype._apply = function (thisArg = window, args) {
    args = args ? args : []
    // 我们要做的事情就是把这个函数，作为thisArg的一个对象，然后来调用这个对象
    // 为了这么做，同时防止key的重复，我们要用到Symbol
    let fn = Symbol('fn')
    thisArg[fn] = this
    let res = thisArg[fn](...args)
    delete thisArg[fn]
    return res
}