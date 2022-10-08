function sleep(delay) {
    return new Promise((_, reject) => {
        setTimeout(() => reject('超时了'), delay)
    })
}

function request() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('成功了'), 1000)
    })
}

function timeoutPromise(requestFn, delay) {
    return new Promise((resolve, reject) => {
        const promises = [requestFn(), sleep(delay)]
        for (const promise of promises) {
            promise.then(res => resolve(res), err => reject(err))
        }
    })
}

function timeoutPromise2(requestFn, delay) {
    return Promise.race([requestFn(), sleep(delay)])
}


timeoutPromise(request, 2000).then(res => console.log(res)).catch(err => console.log(err))

