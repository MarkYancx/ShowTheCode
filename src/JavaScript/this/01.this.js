let a = 20;
var pp = {
    a:10,
}
var qq = {
    a: 40,
    acc: function () {
         init = () => {
            console.log(this.a);
            function go() {
                let a = 60;
                console.log(this.a);
            }
            go.prototype.a = 50;
            return go;
        }
        init();
    }
};
var P = qq.acc.call(pp);
// new P();