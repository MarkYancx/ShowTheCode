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