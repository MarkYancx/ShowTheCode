// 手写一个_new
// 调用方式为_new(className,...args)
const _new = (className, ...args) {
    obj1 = {};
    Fn= [...arguments].shift();
    obj1.__proto__ = Fn.prototype;
    Fn.apply(obj1, arguments);
    return obj1;

}
