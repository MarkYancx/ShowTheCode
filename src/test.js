// let str = "16"
// let i = 3
// let number = 5
// str = str.slice(0, i) + number + str.slice(i)
// console.log(str);





// const myStringify = function (obj){
//     const newObj = {};
//     Object.keys(obj).sort().forEach(key => {
//         const item = obj[key];
//         let needString = item;
//         if (typeof item === 'object') {
//             if (Array.isArray(item)) {
//                 needString = JSON.stringify(item);
//             } else {
//                 needString = myStringify(item);
//             }
//         }
//         newObj[key] = needString;
//     })
//     return JSON.stringify(newObj);
// }
// const removefn = function(arr){
//     const ans = [];
//     const map = new Map();
//     for (const item of arr) {
//         let needString = item;
//         if (typeof item === 'object') {
//             if (Array.isArray(item)) {
//                 needString = JSON.stringify(item);
//             } else {
//                 needString = myStringify(item);
//             }
//         }
//         if (!map.has(needString)) {
//             map.set(needString,true)
//             ans.push(item);
//         }
//     }
//     return ans;
// }


// const path = './test3.js'
// const modu = import( `${path}`)
// var strangePrinter = function(str) {
//     const n = str.length;
//     const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
//     for (let i = n - 1; i >= 0; i--) {
//         dp[i][i] = 1;
//         for (let j = i + 1; j < n; j++) {
//             if (str[i] == str[j]) {
//                 dp[i][j] = dp[i][j - 1];
//             } else {
//                 let minNumber = Infinity
//                 for (let k = i; k < j; k++) {
//                     minNumber = Math.min(minNumber, dp[i][k] + dp[k + 1][j]);
//                 }
//                 dp[i][j] = minNumber;
//             }
//         }
//     }
//     return dp[0][n - 1];
// };


// var longestCommonPrefix = function (arr) {
//     if (arr.length === 0 || arr[0].length === 0) { return ""; }
//     var str = arr[0],
//         common = [];
//     for (let i = 0, len1 = str.length; i < len1; i++) {
//         for (let j = 1, len2 = arr.length; j < len2; j++) {
//             if (str[i] !== arr[j][i]) {
//                 return common.join("");
//             }
//         }
//         common.push(str[i]);
//     } return str;
// };



// if (arr.length === 0) return ''
//     let str = arr[0]
//     for (let j = 0; j < str.length; j++) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i][j] !== str[j]) {
//                 return arr[i].slice(0, j);
//             }
//         }
//     }
// return str
// 题
// const array = new Array(5).fill(0).map(item => {
//     return item = {
//         name:'1'
//     }
// })
// console.log(array[0]);
// const array2 = new Array(5)
// console.log(array2)
// 题
// let arr = ['1', '2', '3'].map(item => parseInt(item))
// console.log(arr);
// parseInt('1', 0)
// parseInt('2', 1)
// parseInt('100', 2)

// 题
// Object.prototype.a = function () {
//     console.log('Object');
// }

// Function.prototype.a = function () {
//     console.log('F');
// }

// function F() {
    
// }
// var f = new F()
// f.a()

// 题
// var myObj = {
//     foo: '1',
//     func: function () {
//         var foo = '2'
//         var self = this
//         console.log(this.foo);
//         console.log(self.foo);
//         return function () {
//             console.log(this.foo);
//             console.log(self.foo);
//         }

//     }
// }
// myObj.func()()

// let dp = [0]
// let max = array[0]
// for (let i = 1; i <= array.length; i++) {
//     dp[i] = array[i - 1] + Math.max(0, dp[i - 1])
//     max = Math.max(max, dp[i])
// }
// return max


// async function testSometing() {
//     console.log("执行testSometing");
//     return "testSometing";
// }

// async function testAsync() {
//     console.log("执行testAsync");
//     return Promise.resolve("hello async");
// }

// async function test() {
//     console.log("test start...");
//     const v1 =  testSometing();
//     console.log("v1",v1);
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
// }

// test();

// var promise = new Promise(resolve => {
//     console.log("promise start...");
//     resolve("promise");
// });
// promise.then(val => console.log(val));

// console.log("test end...");



// let [N, M] = [2, 3]
// let arr = [['^','v','<'],['>','>','^']]
// let arr = [['v','v','v'],['<','<','<']]

// let [N, M] = readline().split(' ').map(Number)

// let arr = new Array(N).fill(0)

// for (let i = 0; i < N; i++) {
//     arr[i] = readline().split('')
// }

// let set1 = new Set()
// let setTotal = new Set()
// let ans = 0
// const dfs = (i,j,cnt) => {
//     if (i < 0 || j < 0 || i >= N || j >= M)
//         return
//     let f = i + '-' + j
//     // if (setTotal.has(f))
//     //     return
//     if (set1.has(f))
//         return
//     cnt++
//     ans = Math.max(ans, cnt)
//     set1.add(f)
//     setTotal.add(f)
    
//     if (arr[i][j] == '^') {
//         dfs(i - 1, j, cnt)
//     }
//     if (arr[i][j] == 'v') {
//         dfs(i + 1, j, cnt)
//     }
//     if (arr[i][j] == '<') {
//         dfs(i , j - 1, cnt)
//     }
//     if (arr[i][j] == '>') {
//         dfs(i, j + 1, cnt)
//     }
        
// }
// const cal = (i, j) => {
//     cnt = 0
//     while (true) {
//         if (i < 0 || j < 0 || i >= N || j >= M)
//             break
//         let f = i + '-' + j
//         if (set1.has(f))
//             break
//         cnt++
//         ans = Math.max(ans, cnt)
//         set1.add(f)
//         setTotal.add(f)
//         console.log(i,j);
//         if (arr[i][j] == '^') {
//             i = i - 1
//             continue
//         }
//         if (arr[i][j] == 'v') {
//             i = i + 1
//             continue
//         }
//         if (arr[i][j] == '<') {
//             j = j - 1
//             continue
//         }
//         if (arr[i][j] == '>') {
//             j = j + 1
//             continue
//         }
//     }
// }
// for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//         let f2 = i + '-' + j
//         if (setTotal.has(f2))
//             continue
//         // dfs(i, j, 0)
//         cal(i,j)
//         set1.clear()
//     }
// }
// console.log(ans)




// function getOne(n) {
//     var c = 0;
//     while (n) {
//         if (n & 1) {
//             c++;
//         }
//         n >>= 1;
//     }
//     return c;
// }
// let num = parseInt(readline())
// // let num = 54054
// let ans = []
// let map = new Map()
// for (let i = 1; i <= 50; i++) {
//     if (num % i == 0 ) {
//         let tmp = num / i
//         if (tmp * getOne(tmp) == num) {
//             ans.push(tmp)
//         }
//     }
// }
// ans.sort((a, b) => a - b)
// console.log(ans.length)
// console.log(ans.join(' '))

console.log(100000000000000000 / 9);