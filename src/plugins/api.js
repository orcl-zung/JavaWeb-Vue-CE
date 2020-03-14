let axios = window.axios;
let urlConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }

export const register =(data)=> { return axios.post("/register",data)} //注册
export const loginPas =(data)=> { return axios.get("/loginPas",{params:data})} //密码登录
export const loginCode =(data)=> { return axios.get("/loginCode",{params:data})} //验证码登录
export const userInfo =(data)=> { return axios.get("/userInfo",{params:data})} //查看个人信息
export const getCode =(data)=> { return axios.get("/msgCode",{params:data})} //获取验证码
