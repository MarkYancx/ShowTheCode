import http from './http.js'

function request({ method = "get", url, data = {}, params = {} }) {
    return http({
        method,
        url,
        data,
        params
    })
}

export default request;