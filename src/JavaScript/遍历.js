let simpleColors = {
    colorA: 'white',
    colorB: 'black'
};
let natureColors = {
    colorC: 'green',
    colorD: 'yellow',
    colorSymbolValue: Symbol('color'),
    [Symbol('colorSymbolKey')]: 'symbolkey'
};
Object.setPrototypeOf(natureColors, simpleColors);
console.log(Object.keys(natureColors));; // => ['colorC', 'colorD']
natureColors['colorA'];    // => 'white'
natureColors['colorB'];    // => 'black'

console.log(`以下为for in的输出`);
// 输出5个，3个自己的，两个继承的，没有以symbol为key的输出
for (let i in natureColors) {
    console.log(i);
}

console.log(`以下为Object.keys()的输出`);
// 输出3个，3个自己的，没有继承的，没有以symbol为key的输出
console.log(Object.keys(natureColors));

console.log(`以下为Object.getOwnPropertyNames的输出`);
// 输出3个，3个自己的，没有继承的，没有以symbol为key的输出
console.log(Object.getOwnPropertyNames(natureColors));

console.log(`以下为Object.getOwnPropertySymbols的输出`);
// 输出1个，symbol为key的输出
console.log(Object.getOwnPropertySymbols(natureColors));


console.log(`以下为Reflect.ownKeys()的输出`);
// 输出4个，symbol为key的输出，以及3个自己的属性
console.log(Reflect.ownKeys(natureColors));




