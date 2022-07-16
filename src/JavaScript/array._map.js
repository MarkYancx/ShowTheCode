 Array.prototype._map = function (Fn) {
                const array = this;
                const newArray = new Array(array.length);
                console.log(arguments)
                for (let i = 0; i < array.length; i++) {
                    let result = Fn.call(this,array[i],i,array);
                    newArray[i] = result;
                }
                return newArray;
}
let arr = [1, 2];
console.log(arr._map(i => i * 2));