Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            Promise.resolve(p).then(resolve, reject);
            // 或者
            // Promise.resolve(p).then(resolve).catch(reject)
        })
    })
}