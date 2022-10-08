// Ajax是Asynchronous JavaScript And XML的简称，它允许我们在不刷新整个页面的情况下，就可以异步获取数据，并更新页面的部分内容。

// 那么Ajax的工作流程是怎样的呢？大体来说，可以分为四步：

// 页面当中的事件或者函数触发Ajax请求的时候，建立XMLHttpRequest对象，以进行接下来的Ajax请求。
// 调用XMLHttpRequest的open函数
// XMLHttpRequest向服务器发送请求
// 服务器处理请求之后，会把响应返回到网页，此时，XMLHttpRequest会监听到这个响应，并执行响应的代码。
// 接下来，根据上面的四步，我们实现自己的Ajax。

// 第一步：创建XMLHttpRequest对象
var xhttp = new XMLHttpRequest()

// 第二步：调用XMLHttpRequest的open函数
// open(method, url, async)
// 这个方法有三个参数：

// 第一个参数method说明了使用哪种请求方法，是GET还是POST，还是其他方法。对于已经熟悉使用插件发送ajax的我们，无需赘述。
// 第二个参数是url，请求文件的地址。
// 第三个参数是async，这是一个boolean值，表明是否要发送异步请求，
// 应该被设置成为true（true也是默认值），false非必要时不要使用，因为会阻塞JS执行，直到收到响应为止
xhttp.open('GET', '/hello')

// 第三步：XMLHttpRequest向服务器发送请求
xhttp.send()


// 第四步 处理响应
// 0：UNSENT：代理被创建，但尚未调用open()方法
// 1：OPENED：open() 方法已经被调用
// 2：HEADERS_RECEIVED：send() 方法已经被调用，并且头部和状态已经可获得
// 3：LOADING：下载中； responseText 属性已经包含部分数据
// 4：DONE：下载操作已完成
// readyState这五个状态是顺序执行的，每次都会触发onreadystatechange。readyState变为4之后，整个响应就接收完成了。

// XMLHttpRequest的status属性是HTTP状态码，我们应该都比较熟悉，200代表请求成功。

// responseText：得到字符串形式的响应数据。（responseXML则是XML格式的响应数据
xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
        if (xhttp.status == 200) {
            // success
        } else {
            // fail
        }
    }
    
}