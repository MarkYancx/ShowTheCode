Promise.myResolve = function (value) {
    if (value instanceof Promise)
        return value;
    if (value instanceof Object && 'then' in value) {
        return new Promise((resolve, reject) => {
            value.then(resolve, reject);
        })
    }
    return new Promise((resolve) => {
        resolve(value)
    })
}

// 测试一下，还是用刚才的例子
// 1. 非Promise对象，非thenable对象
Promise.myResolve(1).then(console.log) // 1

// 2. Promise对象成功状态
const p2 = new Promise((resolve) => resolve(2))

Promise.myResolve(p2).then(console.log) // 2

// 3. Promise对象失败状态
const p3 = new Promise((_, reject) => reject('err3'))

Promise.myResolve(p3).catch(console.error) // err3

// 4. thenable对象
const p4 = {
    then(resolve) {
        setTimeout(() => resolve(4), 1000)
    }
}
Promise.myResolve(p4).then(console.log) // 4

// 5. 啥都没传
Promise.myResolve().then(console.log) // undefined

