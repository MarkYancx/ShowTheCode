// symbol 英文意思为 符号、象征、标记、记号，
// 在 js 中更确切的翻译应该为 独一无二的值，理解了它的意思之后再看起来就简单多了。
const s = Symbol();//注意不能使用new来创建
console.log(typeof s); // symbol



const a = Symbol('foo') //传入的参数代表对生成Symbol的一种描述

const b = Symbol('foo')

console.log(a === b) // false

// 作为对象的key
