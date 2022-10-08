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
// let newFn = ycxCurrying(sum);

// console.log(newFn(1)(2, 3));



// 2022-08-12
// curry化的输入是啥，输出是啥？
// 输入一个函数，输出也是一个函数，当函数的参数值到达指定数量的时候，则运行
function ycxCurrying2(fn) {
    let args1 = [...arguments].slice(1)
    let curried = function (...args2) {
        args1 = args1.concat(args2)
        if (args1.length >= fn.length) {
            return fn.apply(this, args1)
        } else {
            return curried
        }
    }
    return curried
}


let newFn2 = ycxCurrying2(sum,1);
console.log(newFn2(1)(2, 3, 4));
// 2022-08-29
// 也可以输入一些参数，但是我没写，在arguments里统一
function ycxCuurying3(fn) {
    let len = fn.length
    let args1 = [...arguments].slice(1)
    let curried = function () {
        let args2 = arguments
        args1 = args1.concat(args2)
        if (args1.length >= fn.length) {
            return fn.apply(this, args1)
        } else {
            return curried
        }
    }
    return curried
}


// 2022 09- 13
function ycxCurrying4(fn) {
    let len = fn.length
    let args1 = [...arguments].slice(1)
    let curried = function (...args2) {
        args1 = args1.concat(args2)
        if (args1.length >= fn.length) 
            return fn.apply(this, args1)
        else
            return curried
    }
    return curried
}



