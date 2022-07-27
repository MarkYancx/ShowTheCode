import axiso from 'axios';
import { ElMessage } from 'element-plus'


// 请求
const http = axios.create({
    baseURL: "https://www.xxx.xxx",
    timeout: 6000
})

// 请求拦截

http.interceptors.request.use(config => {
    let token = localStorage.getItem('token') || '';
    config.headers.Authorization = token;
    return config
}, err => {
    console.log(err)
})

http.interceptors.response.use(

    arr => {
        // 对响应码的处理
        switch (arr.data.meta.status) {
            case 200:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'success',
                })
                break;
            case 201:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'success',
                })
                break;
            case 204:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'success',
                })
                break;
            case 400:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'warning',
                })
                break;
            case 401:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'warning',
                })
                break;
            case 403:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'warning',
                })
                break;
            case 404:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'warning',
                })
                break;
            case 422:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'warning',
                })
                break;
            case 500:
                ElMessage({
                    message: arr.data.meta.msg,
                    type: 'error',
                })
                break;
        }
        return arr.data.data
    }, err => {
        console.log(err);
    }
)


export default http