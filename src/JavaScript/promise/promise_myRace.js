Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            Promise.resolve(p).then(resolve, reject);
            // 或者
            // Promise.resolve(p).then(resolve).catch(reject)
        })
    })
}

// 2022.08.29
Promise.myRace2 = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            Promise.resolve(p).then(data => {
                resolve(data)
                return
            }).catch(err => {
                reject(err)
                return
            })
        })
    })
}