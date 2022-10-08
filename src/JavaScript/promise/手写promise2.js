const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    status = PENDING
    value = null
    reason = null

    onFulfilledCallbacks = []
    onRejectedCallbacks = []

    resolve = (value) => { 
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value

            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }

    }
    then(onFulfilled, onRejected) {
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                const x = onFulfilled(this.value)
                resolvePromise(x, resolve, reject);
            } else if (this.status === REJECTED) {
                onRejected(this.reason)
            } else if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })
        return promise2
    }

}

function resolvePromise(x, resolve, reject) {
    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}


module.exports = MyPromise