// ycx get 2022.06.21
// 主要思想，将formation字符串replace掉
function formatDate(oDate, sFormation) {
    let add0=function(num){
        if(num<10)
            return 0+''+num;
        else
            return num;
    }
    let dict={
        'YYYY':oDate.getFullYear(),
        'yyyy':oDate.getFullYear(),
        'YY':oDate.getFullYear()%100,
        'yy':oDate.getFullYear()%100,
        'MM':add0(oDate.getMonth()+1),
        'M':oDate.getMonth()+1,
        'DD':add0(oDate.getDate()),
        'D':oDate.getDate(),
        'HH':add0(oDate.getHours()),
        'H':oDate.getHours(),
        'hh':add0(oDate.getHours()%12),
        'h':oDate.getHours()%12,
        'mm':add0(oDate.getMinutes()),
        'm':oDate.getMinutes(),
        'ss':add0(oDate.getSeconds()),
        's':oDate.getSeconds(),
        'w':function(){
            let day=['日','一','二','三','四','五','六'];
            return day[oDate.getDay()];
        }(),
    }
    for(let key in dict){
        sFormation=sFormation.replace(key,dict[key]);
    }
    return sFormation;
}
let result=formatDate(new Date(1609430400000),'YYYY-MM-DD HH:mm:ss')
console.log(result)