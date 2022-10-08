// 基于setTimeout 实现setInterval
// map的作用是用来取消定时器使用的
// 实现思路：
// 在mySetInterval里定义一个新的函数fn，然后递归调用fn 

let timeMap = {}
let id = 0;
let cnt = 0
const mySetInterval = (cb, time) => {
    let timeId = id++;
    const fn = () => {
        cb();
        timeMap[timeId] = setTimeout(() => {
            fn();
        }, time);
    };
    timeMap[timeId] = setTimeout(fn, time);
    return timeId;
}

const myClearInterval = (id) => {
    clearTimeout(timeMap[id]);
    delete timeMap[id];
}

const myId = mySetInterval(() => {
    console.log(cnt++);
}, 1000);

setTimeout(() => {
    myClearInterval(myId);
}, 10000)