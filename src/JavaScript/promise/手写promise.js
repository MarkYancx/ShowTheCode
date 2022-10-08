const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
    var self = this
    this.state = PENDING
    this.value = null
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    function resolve(value) {
        if (value instanceof MyPromise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = RESOLVED
                self.value = value
                self.resolvedCallbacks.forEach(callback => {
                    callback(value)
                })
            }
        },0)
    }
    function reject(value) {
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能转变
            if (self.state === PENDING) {
                // 修改状态
                self.state = REJECTED;

                // 设置传入的值
                self.value = value;

                // 执行回调函数
                self.rejectedCallbacks.forEach(callback => {
                    callback(value);
                });
            }
        }, 0);
    }
    // 将两个方法传入函数执行
    try {
        fn(resolve, reject);
    } catch (e) {
        // 遇到错误时，捕获错误，执行 reject 函数
        reject(e);
    }
}
MyPromise.prototype.then = function (onResolved, onRejected) {
    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved)
        this.rejectedCallbacks.push(onRejected)
    }

    if (this.state === RESOLVED) {
        onResolved(this.value);
    }

    if (this.state === REJECTED) {
        onRejected(this.value);
    }

}