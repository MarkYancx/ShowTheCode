// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
//那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
// 最快的 Promise 失败 Promise.race 就失败
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 1)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 2)
})

Promise.race([p1, p2]).then((value) => {
    console.log(value) // 2
})

Promise.race([p1, p2, 3]).then((value) => {
    console.log(value) // 3
})
