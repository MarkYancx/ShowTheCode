Promise.myAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let len = promises.length;
        let result = [];
        if (len === 0)
            return resolve(result)
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then((res) => {
                count += 1;
                result[i] = {
                    status: 'fulfilled',
                    value: res
                }
                if (count === len)
                    resolve(result)
            }).catch((err) => {
                count += 1;
                result[i] = {
                    status: 'rejected',
                    reason: err
                }
                if (count === len)
                    resolve(result);
            })
        })
    })
}


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
const p11 = Promise.myAllSettled([p1, p2, p3])
    .then((res) => console.log(JSON.stringify(res, null, 2)))