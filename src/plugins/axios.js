"use strict";

import Vue from 'vue';
import axios from "axios";
// import store from '../store/index'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

// Axios.interceptors.request.use(config => {
//   // 在发送请求之前做些什么
//   //判断是否存在token，如果存在将每个页面header都添加token
//   if(store.state.avatar){
//   config.headers.common['avatar']=store.state.avatar
//   }
   
//   return config;
//   }, error => {
//   // 对请求错误做些什么
//   return Promise.reject(error);
//   });
  


const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 在发送请求之前做些什么
    // if(store.state.avatar){
    //   config.headers.common['avatar']=store.state.avatar
    //   }
    if (
      config.headers &&
      config.headers['Content-Type'] ==
      'application/x-www-form-urlencoded;charset=UTF-8'
    ) {
      let transformRequest = [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }
      ]
      config.transformRequest = transformRequest
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
