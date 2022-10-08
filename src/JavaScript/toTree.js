// 使用递归函数，函数的输入就是pid，初值为null或者root的pid
// 这个函数的输出就是以当前的pid为pid的数组
// 遍历所有的元素，如果当前的元素pid 等于当前pid，就
// 把这个元素的pid传进去,然后得到新数组
// 


const arr = [
    { id: '01', name: '张大大', pid: '', job: '项目经理' },
    { id: '02', name: '小亮', pid: '01', job: '产品leader' },
    { id: '03', name: '小美', pid: '01', job: 'UIleader' },
    { id: '04', name: '老马', pid: '01', job: '技术leader' },
    { id: '05', name: '老王', pid: '01', job: '测试leader' },
    { id: '06', name: '老李', pid: '01', job: '运维leader' },
    { id: '07', name: '小丽', pid: '02', job: '产品经理' },
    { id: '08', name: '大光', pid: '02', job: '产品经理' },
    { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
    { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
    { id: '11', name: '小华', pid: '04', job: '后端工程师' },
    { id: '12', name: '小李', pid: '04', job: '后端工程师' },
    { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
    { id: '14', name: '小强', pid: '05', job: '测试工程师' },
    { id: '15', name: '小涛', pid: '06', job: '运维工程师' },
    { id: '16', name: '小才', pid: '07', job: '运维工程师' },
]
function filterArray(data, pid) {
    var tree = []
    var temp
    for (var i = 0; i < data.length; i++) {
        if (data[i].pid == pid) {
            var obj = data[i]
            temp = filterArray(data, data[i].id)
            if (temp.length > 0) {
                obj.children = temp
            }
            // console.log(1,obj);
            tree.push(obj)
        }
    }
    return tree
}
// console.log(JSON.stringify(filterArray(arr, '')))
console.log(filterArray(arr, ''));

