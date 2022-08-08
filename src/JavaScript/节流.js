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