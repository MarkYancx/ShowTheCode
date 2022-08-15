// const arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)); // [1, 2, 3, 4]
// 调用api
const arr = [1, [2, [3, 4]], {five:5}];
console.log(arr.flat(Infinity))





const flatten = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 注意！！！！！！！！！！！！！！
            // 这里不能是push，如果用push了。原来的数组还会是一个数组
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(flatten(arr)); 


// 思考：输入一个数组，把里面所有括号去掉
function flat2(arr) {
    let newArr = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flat2(item))
        } else {
            newArr.push(item)
        }
    })
    return newArr
}
console.log(flat2(arr));