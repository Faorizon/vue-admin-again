/**
 * 引入拦截器 
 */
import service from '@/utils/request.js'

export default {
    /**
     * 获取验证码
     */
    getSms(data){
        // return service.post('/getSms/',{
        //     action:'获取验证码',
        //     params
        // })
        return service.request({
            method:"post",
            url:"/getSms/",
            data:data
        })
    },
    /**
     * 获取用户角色
     */
    getUserRole(data){
        return service.request({
            method:'post',
            url:"/userRole/",
            data
        })
    },
    /**
     * 登录
    */
   login(data){
       return service.request({
           method:'post',
           url:"/login/",
           data
       })
   },
    /**
     * 注册
     */
    register(data){
        return service.request({
            method:'post',
            url:"/register/",
            data
        })
    }
}