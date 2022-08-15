// // 实现一个自己的call，名叫_call
// Function.prototype._call = function (target) {
//     // target为指针
//     target['fn'] = this;
//     console.log(this);
//     const result = target['fn']([...arguments].shift());
//     delete target['fn'];
//     return result;
// }

Function.prototype._call = function(context,...args){
    // 处理容错
    console.log(this);//[Function: myFn]    obj._call()因此里面的this是 obj
    context = (typeof context === 'object' ? context : window)
    args = args ? args : []
    //给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol();
    context[key] = this;
    //通过隐式绑定的方式调用函数
    const result = context[key](...args);
    //删除添加的属性
    delete context[key]
    //返回函数调用的返回值
    return result
}
const myFn = function () {
    
}
let a = {}
myFn._call(a)