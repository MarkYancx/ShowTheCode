function throttle(fun, time) {
    let t1 = 0
    return function () {
        let t2 = new Date()
        if (t2 - t1 > time) {
            fun.apply(this, arguments)
            t1 = t2
        }
        
    }
}




// 2022-08-11
function throttle2(fn, delay) {
    let t1 = 0
    return function () {
        let t2 = new Date()
        // 这里不需要，可以直接arguments
        let args = arguments
        if (t2 - t1 > delay) {
            fn.apply(this, args)
            t1 = t2
        }
    }
}

// 2022-08-29
// 如果初始化t1 = 0那么第一次会立即执行，因为第一次执行的时候t2 - t1 会是一个非常大的数
function throttle3(fn, delay) {
    let t1 = 0
    return function () {
        let t2 = new Date()
        if (t2 - t1 > delay) {
            fn.apply(this, arguments)
            t1 = t2
        }
    }
}