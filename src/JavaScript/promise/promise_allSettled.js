// Promise.allSettled()方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，
// 并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是fulfilled还是rejected），
// 返回的 Promise 对象才会发生状态变更, 一旦发生状态变更，状态总是fulfilled，不会变成rejected

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
const p11 = Promise.allSettled([p1, p2, p3])
    .then((res) => console.log(JSON.stringify(res, null, 2)))

// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "fulfilled",
    "value": 3
  }
]
*/

// 2. 有一个Promise失败了
const p12 = Promise.allSettled([p1, p2, p4])
    .then((res) => console.log(JSON.stringify(res, null, 2)))

// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "rejected",
    "reason": "err4"
  }
]
*/

// 3. 有两个Promise失败了
const p13 = Promise.allSettled([p1, p4, p5])
    .then((res) => console.log(JSON.stringify(res, null, 2)))

// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "rejected",
    "reason": "err4"
  },
  {
    "status": "rejected",
    "reason": "err5"
  }
]
*/
