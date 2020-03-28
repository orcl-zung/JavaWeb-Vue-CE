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
<<<<<<< HEAD
export const modifyInfo =(data)=> { return axios.post("/ce/user/modifyUserById",data)} //修改个人信息
=======
<<<<<<< HEAD
export const modifyInfo =(data)=> { return axios.post("/ce/user/modifyUserById",data)} //修改个人信息
=======
export const modifyInfo =(data)=> { return axios.post("/ce/user/modifyUser",data)} //修改个人信息
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
export const uploadAvatar =(data)=> { return axios.post("/ce/user/uploadUserAvatar",data,urlConfigss)} //上传头像
export const releBuy =(data)=> { return axios.post("/ce/buyGoods/releaseBuyGoods",data,urlConfigs)} //用户发布代买商品信息
export const releGet =(data)=> { return axios.post("/ce/takeGoods/releaseBuyGoods",data,urlConfigs)} //用户发布代取商品信息
export const relePost =(data)=> { return axios.post("/ce/sendGoods/releaseSendGoods",data,urlConfigs)} //用户发布代送商品信息
export const releSort =(data)=> { return axios.post("/ce/queue/releaseQueue",data,urlConfigs)} //用户发布代排队信息
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
export const myBuy =(data)=> { return axios.post("/ce/buyGoods/getBuyGoodsByReleaseId",data,urlConfigs)} //查询用户发布的代买商品信息
export const myPost =(data)=> { return axios.post("/ce/sendGoods/getSendGoodsByReleaseId",data,urlConfigs)} //查询用户发布的代送商品信息
export const myGet =(data)=> { return axios.post("/ce/takeGoods/getTakeGoodsByReleaseId",data,urlConfigs)} //查询用户发布的代取商品信息
export const mySort =(data)=> { return axios.post("/ce/queue/getQueueByReleaseId",data,urlConfigs)} //查询用户发布的代排队信息
export const allUser =(data)=> { return axios.post("/ce/user/findAllUser",data,urlConfigs)} //管理员查询所有用户
export const updatePassword =(data)=> { return axios.post("/ce/user/changePwd",data,urlConfigs)} //修改密码
export const deleteUser =(data)=> { return axios.post("/ce/user/deleteUserById",data,urlConfigs)} //管理员删除某个用户
export const unDeleteUser =(data)=> { return axios.post("/ce/user/findNotDeletedUser",data,urlConfigs)} //管理员获取未删除用户
export const deletedUser =(data)=> { return axios.post("/ce/user/findIsDeletedUser",data,urlConfigs)} //管理员获取已删除用户
export const searchBuy =(data)=> { return axios.post("/ce/buyGoods/getInfoByCondition",data,urlConfigs)} //查询代买
export const searchPost =(data)=> { return axios.post("/ce/sendGoods/getInfoByCondition",data,urlConfigs)} //查询代送
export const searchGet =(data)=> { return axios.post("/ce/takeGoods/getInfoByCondition",data,urlConfigs)} //查询代取
export const searchSort =(data)=> { return axios.post("/ce/queue/getInfoByCondition",data,urlConfigs)} //查询代排队
<<<<<<< HEAD
export const uncheckBuy =(data)=> { return axios.post("/ce/buyGoods/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代买）
export const checkPasBuy =(data)=> { return axios.post("/ce/buyGoods/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代买）
export const checkunPasBuy =(data)=> { return axios.post("/ce/buyGoods/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代买）
export const uncheckGet =(data)=> { return axios.post("/ce/takeGoods/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代取）
export const checkPasGet =(data)=> { return axios.post("/ce/takeGoods/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代取）
export const checkunPasGet =(data)=> { return axios.post("/ce/takeGoods/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代取）
export const uncheckPost =(data)=> { return axios.post("/ce/sendGoods/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代送）
export const checkPasPost =(data)=> { return axios.post("/ce/sendGoods/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代送）
export const checkunPasPost =(data)=> { return axios.post("/ce/sendGoods/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代送）
export const uncheckSort =(data)=> { return axios.post("/ce/queue/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代排队）
export const checkPasSort =(data)=> { return axios.post("/ce/queue/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代排队）
export const checkunPasSort =(data)=> { return axios.post("/ce/queue/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代排队）
export const allBuyInfo =(data)=> { return axios.post("/ce/buyGoods/getAllBuyGoods",data,urlConfigs)} //首页显示所有代买物品默认

export const passBuy =(data)=> { return axios.post("/ce/buyGoods/changeStatusToApproved",data,urlConfigs)} //管理员通过审核（代买）
export const unpassBuy =(data)=> { return axios.post("/ce/buyGoods/changeStatusToFailed",data,urlConfigs)} //管理员不通过审核（代买）

export const passGet =(data)=> { return axios.post("/ce/takeGoods/changeStatusToApproved",data,urlConfigs)} //管理员通过审核（代取）
export const unpassGet =(data)=> { return axios.post("/ce/takeGoods/changeStatusToFailed",data,urlConfigs)} //管理员不通过审核（代取）


export const passPost =(data)=> { return axios.post("/ce/sendGoods/changeStatusToApproved",data,urlConfigs)} //管理员通过审核（代送）
export const unpassPost =(data)=> { return axios.post("/ce/sendGoods/changeStatusToFailed",data,urlConfigs)} //管理员不通过审核（代送）

export const passSort =(data)=> { return axios.post("/ce/queue/changeStatusToApproved",data,urlConfigs)} //管理员通过审核（代排队）
export const unpassSort =(data)=> { return axios.post("/ce/queue/changeStatusToFailed",data,urlConfigs)} //管理员不通过审核（代排队）
=======

export const uncheckBuy =(data)=> { return axios.post("/ce/buyGoods/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代买）
export const checkPasBuy =(data)=> { return axios.post("/ce/buyGoods/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代买）
export const checkunPasBuy =(data)=> { return axios.post("/ce/buyGoods/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代买）

export const uncheckGet =(data)=> { return axios.post("/ce/takeGoods/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代取）
export const checkPasGet =(data)=> { return axios.post("/ce/takeGoods/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代取）
export const checkunPasGet =(data)=> { return axios.post("/ce/takeGoods/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代取）

export const uncheckPost =(data)=> { return axios.post("/ce/sendGoods/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代送）
export const checkPasPost =(data)=> { return axios.post("/ce/sendGoods/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代送）
export const checkunPasPost =(data)=> { return axios.post("/ce/sendGoods/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代送）

export const uncheckSort =(data)=> { return axios.post("/ce/queue/queryToAuditInfo",data,urlConfigs)} //管理员查看未审核订单（代排队）
export const checkPasSort =(data)=> { return axios.post("/ce/queue/queryApprovedInfo",data,urlConfigs)} //管理员查看审核通过订单（代排队）
export const checkunPasSort =(data)=> { return axios.post("/ce/queue/queryAuditFailedInfo",data,urlConfigs)} //管理员查看审核未通过订单（代排队）







>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4















<<<<<<< HEAD
=======
=======
export const myBuy =(data)=> { return axios.post("/ce/buyGoods/getAllBuyGoods",data,urlConfigs)} //查询所有代买商品信息
export const myPost =(data)=> { return axios.post("/ce/sendGoods/getAllSendGoods",data,urlConfigs)} //查询所有代送商品信息
export const myGet =(data)=> { return axios.post("/ce/takeGoods/getAllTakeGoods",data,urlConfigs)} //查询所有代取商品信息
export const mySort =(data)=> { return axios.post("/ce/queue/queryAllQueue",data,urlConfigs)} //查询所有代排队信息
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
