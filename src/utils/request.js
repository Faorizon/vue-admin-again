import axios from 'axios'

//创建axios,赋给变量 service
//手把手撸码前端API,地址 http://www.web-jshtml.cn/productApi
const BASEURL= process.env.NODE_ENV === 'product' ? '':'/api'

const service = axios.create({
    baseURL:BASEURL,
    timeout:1000,
});

//添加请求拦截器
service.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
});

//添加响应拦截器
service.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error)
})

/**
 * 使用export default时，但不能同声拥有多个default
 * 文件 import 不需要花括号
 * 
 * 反之 import 时需要花括号
*/

export default service