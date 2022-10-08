function debounce(fn, time) {
    let timer = null
    return function () {
        if (timer != null)
            clearTimeout(timer)
        let args = arguments
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, time)
    }
}


// 2022-08-11
// setTimeout的this如果使用普通函数的话，会指向window，因此，我们使用箭头函数来绑定this指针
// 也可以用普通函数，只需要在外面用that记录一下即可
function debounce1(fn, delay) {
    let timer = null
    return function () {
        if (timer)
            clearTimeout(timer)
        // arguments是这个匿名函数里的传的值
        let args = arguments

        timer = setTimeout(() => {
            // fn()
            fn.apply(this, args)
        },delay)
    }
}
// 2022.08.29
function deboumce2(fn, delay) {
    let timer = null
    return function () {
        if (timer)
            clearTimeout(timer)
        let args = arguments
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
    
}