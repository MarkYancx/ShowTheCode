let arr = [1, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined]

let unique1 = arr => Array.from(new Set(arr))

console.log(unique1(arr));
// console.log('1');

let unique2 = arr => {
    let map = new Map();
    let ans =[]
    arr.forEach(item => {
        if (!map.has(item)) {
            map.set(item, true);
            ans.push(item)
        }
    })
    return ans;
}
console.log(unique2(arr));

let unique3 = arr => {
  let brr = []
  arr.forEach(item => {
    // 使用 indexOf  返回数组是否包含某个值 没有就返回 -1 有就返回下标
    if(brr.indexOf(item) === -1) brr.push(item)
    // 或者使用 includes 返回数组是否包含某个值  没有就返回false  有就返回true
    // if(!brr.includes(item)) brr.push(item)
  })
  return brr
}
console.log(unique3(arr));

let unique4 = arr => {
    let ans = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
    return ans;
}
console.log(unique4(arr));