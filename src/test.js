function functionFunction(str) {
    /*
    function strAdd() {
        return [...arguments].join(', ');
    }
    function curry(fn, argLength) {
        
        const curried = function (...args) {
            if (args.length >= argLength) {
                return fn.apply(this, args);
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2))
                }
            }
        }
        return curried;
    }
    return curry(strAdd, 2)(str)
    */
    function strAdd() {
        return Array.prototype.join.call(arguments, ', ');
    }
    function curry(fn, fnArgLength) {
        let args = [];
        const curried = function (...args2) {
            args = args.concat(args2);
            if (args.length >= fnArgLength) {
                return fn.apply(this, args.slice(0,fnArgLength));
            } else {
                return curried;
            }
        }
        return curried;
    }
    return curry(strAdd, 2)(str)
}

let test = function () {
    return functionFunction('Hello')('Wordl')
}
console.log(test());
