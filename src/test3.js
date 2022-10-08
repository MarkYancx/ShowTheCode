// function b() {
//     return{
//         a: 'a'
//     };
// }
// console.log(b());
function a() {
    console.log(this);
}
a.call(null)