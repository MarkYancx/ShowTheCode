// newFn = fn.bind(obj)
Function.prototype._bind = function (obj, ...arguments1) {
    // this值指的是fn
    const _this = this;
    
    return function (...arguments2) {
        return _this.apply(obj, arguments1.concat(arguments2));
    }
}