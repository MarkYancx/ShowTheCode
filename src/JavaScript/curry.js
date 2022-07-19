function ycxCurrying(fn) {
    let args1 = [...arguments].slice(1);
    let curried = function (...args2) {
        args1 = args1.concat(args2);
        if (args1.length >= fn.length) {
            return fn.apply(this, args1);
        } else {
            return curried;
        }
    }
    return curried;
}
const sum = (a, b, c) => a + b + c;
let newFn = ycxCurrying(sum);
// console.log(newFn(1, 2)(3));
console.log(newFn(1)(2, 3));
// console.log(newFn(1));