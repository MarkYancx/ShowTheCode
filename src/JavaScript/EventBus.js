class EventEmeitter {
    constructor() {
        this._events = this._events || new Map(); // 储存事件/回调键值对
        this._maxListeners = this._maxListeners || 10; // 设立监听上限
    }
}

EventEmeitter.prototype.emit = function (type, ...args) {
    let handler
    handler = this._events.get(type)
    handler.apply(this, args)
    return true
}

EventEmeitter.prototype.addListener = function (type, fn) {
    if (!this._events.get(type)) {
        this._events.set(type, fn)
    }
}


// 实例化
const emitter = new EventEmeitter();

// 监听一个名为arson的事件对应一个回调函数
emitter.addListener('arson', man => {
    console.log(`expel ${man}`);
});

// 我们触发arson事件,发现回调成功执行
emitter.emit('arson', 'low-end'); // expel low-end