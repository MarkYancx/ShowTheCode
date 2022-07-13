// 基于setTimeout 实现setInterval

let timeMap = {}
let id = 0;

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
    console.log(new Date());
}, 1000);

setTimeout(() => {
    myClearInterval(myId);
}, 3000)