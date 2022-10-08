// newFn = fn.bind(obj)
Function.prototype._bind = function (obj, ...arguments1) {
    // this值指的是fn
    const _this = this;
    
    return function (...arguments2) {
        return _this.apply(obj, arguments1.concat(arguments2));
    }
}

// 2022-09-20
// 调用  let newFn = fn._bind2(obj)
Function.prototype._bind2 = function (obj, ...arguments1) {
    const that = this
    return function (...arguments2) {
        return that.apply(obj, arguments1.concat(arguments2))
    }
}

