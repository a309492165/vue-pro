// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Message } from 'element-ui'

// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http://47.111.184.198:8080/equipment/'} 
else if (process.env.NODE_ENV == 'test') {    
    axios.defaults.baseURL = 'http://47.111.184.198:8080/equipment/';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'http://61.incfotech.com/test';
}

// 设置请求超时
axios.defaults.timeout = 10000;
// 设置请求头
const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,HEAD,GET,PUT,POST,DELETE,PATCH'
}
const postHeader = Object.assign({}, header, {
    'Content-Type': 'application/json;charset=UTF-8'
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http请求拦截
axios.interceptors.request.use(
    config => {
      // 登录拦截
      // debugger
      if (!config.headers.hasOwnProperty('Authorization')) {
        config.headers['Authorization'] = sessionStorage.getItem('token')
        // console.log(config.headers)
      }
      return config
    },
    error => {
      Message.error({
        message: '加载超时'
      })
      return Promise.reject(error.request)
    }
)

// http响应拦截器
axios.interceptors.response.use(
    response => {
        // debugger
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }
    },
    error => {
        if (error.response.status) {            
            switch (error.response.status) {                
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                            redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                     Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 

                // 404请求不存在
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }
)

// 导出通用请求方法
export default {
    get (url, params, timeout = 300000) {
      return axios({
        method: 'get',
        url,
        params,
        timeout,
        headers: header
      })
        .then(response => {
          return response
        })
        .then(res => {
          return res
        })
    },
    post (url, params, timeout = 300000) {
      return axios({
        method: 'post',
        url,
        data: QS.stringify(params),
        timeout,
        headers: postHeader
      })
        .then(response => {
          return response
        })
        .then(res => {
          return res
        })
    },
    delete (url, params) {
      return axios({
        method: 'delete',
        url,
        params,
        headers: header
      })
        .then(response => {
          return response
        })
        .then(res => {
          return res
        })
    },
    put (url, params) {
      return axios({
        method: 'put',
        url,
        data: params,
        headers: postHeader
      })
        .then(response => {
          return response
        })
        .then(res => {
          return res
        })
    },
    patch (url, params) {
      return axios({
        method: 'patch',
        url,
        data: params,
        headers: postHeader
      })
        .then(response => {
          return response
        })
        .then(res => {
          return res
        })
    }
}