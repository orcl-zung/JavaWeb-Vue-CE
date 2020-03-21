let axios = window.axios;
let urlConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }
  let urlConfigs = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  let urlConfigss = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
 
export const compareCode =(data)=> { return axios.post("/ce/user/compareCode",data,urlConfigs)} //比较验证码
export const getCode =(data)=> { return axios.post("/ce/user/sendMessage",data,urlConfigs)} //获取验证码
export const register =(data)=> { return axios.post("/ce/user/register",data)} //注册
export const login =(data)=> { return axios.post("/ce/user/login",data)} //登录
export const userInfo =(data)=> { return axios.post("/ce/user/findUserById",data,urlConfigs)} //获取个人信息
export const modifyInfo =(data)=> { return axios.post("/ce/user/modifyUser",data)} //修改个人信息
export const uploadAvatar =(data)=> { return axios.post("/ce/user/uploadUserAvatar",data,urlConfigss)} //上传头像
export const releBuy =(data)=> { return axios.post("/ce/buyGoods/releaseBuyGoods",data,urlConfigs)} //用户发布代买商品信息
export const releGet =(data)=> { return axios.post("/ce/takeGoods/releaseBuyGoods",data,urlConfigs)} //用户发布代取商品信息
export const relePost =(data)=> { return axios.post("/ce/sendGoods/releaseSendGoods",data,urlConfigs)} //用户发布代送商品信息
export const releSort =(data)=> { return axios.post("/ce/queue/releaseQueue",data,urlConfigs)} //用户发布代排队信息
export const myBuy =(data)=> { return axios.post("/ce/buyGoods/getAllBuyGoods",data,urlConfigs)} //查询所有代买商品信息
export const myPost =(data)=> { return axios.post("/ce/sendGoods/getAllSendGoods",data,urlConfigs)} //查询所有代送商品信息
export const myGet =(data)=> { return axios.post("/ce/takeGoods/getAllTakeGoods",data,urlConfigs)} //查询所有代取商品信息
export const mySort =(data)=> { return axios.post("/ce/queue/queryAllQueue",data,urlConfigs)} //查询所有代排队信息
