// var num = 10    // 60； 65
// var obj = {
//     num: 20
// }
// obj.fn = (function (num) {
//     this.num = num * 3
//     num++    // 21
//     return function (n) {
//         this.num += n    // 60 + 5 = 65；20 + 10 =30
//         num++   // 21 + 1 = 22；22 + 1 = 23
//         console.log(num)
//     }
// })(obj.num)
// var fn = obj.fn
// fn(5)   // 22
// obj.fn(10)   // 23
// console.log(num, obj.num)    // 65, 30
// console.log(this.num)
// console.log(global.num)

function fn (s) {
    let map = new Map();
    let res = -1;
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], i);
            continue;
        }
        let index = map.get(s[i]);
        res = Math.max(res, i - index - 1);
    }
    return res;
}

s = "cabbac"
console.log(fn(s));

