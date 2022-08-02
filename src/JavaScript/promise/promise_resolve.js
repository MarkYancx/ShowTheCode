// Promise.resolve(value) 方法返回一个以给定值解析后的Promise 对象。


// 如果这个值是一个 promise ，那么将返回这个 promise ；

// 如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，
// 采用它的最终状态；否则返回的promise将以此值完成。

// 1. 非Promise对象，非thenable对象
Promise.resolve(1).then(console.log) // 1

// 2. Promise对象成功状态
const p2 = new Promise((resolve) => resolve(2))

Promise.resolve(p2).then(console.log) // 2

// 3. Promise对象失败状态
const p3 = new Promise((_, reject) => reject('err3'))

Promise.resolve(p3).catch(console.error) // err3

// 4. thenable对象
const p4 = {
    then(resolve) {
        setTimeout(() => resolve(4), 1000)
    }
}
Promise.resolve(p4).then(console.log) // 4

// 5. 啥都没传
Promise.resolve().then(console.log) // undefined
