function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}

const obj1 = {
    name: 'init',
    arr: [1, [2, 3], 4],
};
const obj4 = deepClone(obj1) // 一个深拷贝方法
obj4.name = "update";
obj4.arr[1] = [5, 6, 7]; // 新对象跟原对象不共享内存

console.log('obj1', obj1) // obj1 { name: 'init', arr: [ 1, [ 2, 3 ], 4 ] }
console.log('obj4', obj4) // obj4 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }



// 
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let result;
    if (obj instanceof Array) {
        result = [];
    } else if (obj instanceof Object) {
        result = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}
obj1 = {
    name: 'liyuegang',
    age: 24,
}
obj2 = deepClone(obj1)
console.log(obj2)