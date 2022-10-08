function myCreate(proto) {
    let fn = function () { }
    fn.prototype = proto
    return new fn()
}