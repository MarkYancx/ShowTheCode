// const p = Promise.all([p1, p2, p3])
// 1、只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
// 2、只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

const p1 = Promise.resolve(1)

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
    setTimeout(() => resolve(3), 3000)
})

const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')
// 1. 所有的Promise都成功了
const p11 = Promise.all([p1, p2, p3])
    .then(console.log) // [ 1, 2, 3 ]
    .catch(console.log)

// 2. 有一个Promise失败了
const p12 = Promise.all([p1, p2, p4])
    .then(console.log)
    .catch(console.log) // err4

// 3. 有两个Promise失败了，可以看到最终输出的是err4，第一个失败的返回值
const p13 = Promise.all([p1, p4, p5])
    .then(console.log)
    .catch(console.log) // err4