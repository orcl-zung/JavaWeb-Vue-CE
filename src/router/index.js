import Vue from 'vue'
import VueRouter from 'vue-router'

import loginPage from '../views/login/login.vue'
import Login from '../components/login/login'
import Register from '../components/login/register.vue'
import passwordLogin from '../components/login/passwordLogin.vue'
import phoneLogin from '../components/login/phoneLogin.vue'
import firstPage from '../views/main/firstPage.vue'
import mainPage from '../views/main/mainPage.vue'
import get from '../views/get/get.vue'
import buy from '../views/buy/buy.vue'
import post from '../views/post/post.vue'
import sort from '../views/sort/sort.vue'
import myPost from '../views/user/myPost.vue'
import myGet from '../views/user/myGet.vue'
import myBuy from '../views/user/myBuy.vue'
import mySort from '../views/user/mySort.vue'
import setting from '../views/user/setting.vue' //设置
import userInfo from '../views/user/userInfo.vue' //用户信息
import message from '../views/user/message.vue' //消息提醒
import userManager from '../views/user/userManager.vue' //用户管理
import checkBuy from '../views/check/buy.vue'
import checkPost from '../views/check/post.vue'
import checkGet from '../views/check/get.vue'
import checkSort from '../views/check/sort.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/firstPage',
  },
  {
    path: '/index',
    name: 'loginPage',
    component: loginPage,
    children:[
      {
        path:'login',
        name:'login',
        redirect:'/index/login/passwordLogin',
        component:Login,
        children:[
          {
            path:'passwordLogin',
            name:'passwordLogin',
            component:passwordLogin
          },
          {
            path:'phoneLogin',
            name:'phoneLogin',
            component:phoneLogin
          }
        ]
      },
      {
        path:'register',
        name:'register',
        component:Register,
      }
 
    ]
  },
  {
    path:'/firstPage',
    redirect:'/firstPage/mainPage',
    name:'firstPage',
    component:firstPage,
    children:[
      {
        path:'mainPage',
        name:'mainPage',
        component:mainPage
      },
      {
        path:'buy',
        name:'buy',
        component:buy
      },
      {
        path:'post',
        name:'post',
        component:post
      },
      {
        path:'sort',
        name:'sort',
        component:sort
      },
      {
        path:'checkBuy',
        name:'checkBuy',
        component:checkBuy
      },
      {
        path:'checkPost',
        name:'checkPost',
        component:checkPost
      },
      {
        path:'checkGet',
        name:'checkGet',
        component:checkGet
      },
      {
        path:'checkSort',
        name:'checkSort',
        component:checkSort
      },
      {
        path:'myPost',
        name:'myPost',
        component:myPost
      },
      {
        path:'myGet',
        name:'myGet',
        component:myGet
      },
      {
        path:'myBuy',
        name:'myBuy',
        component:myBuy
      },
      {
        path:'mySort',
        name:'mySort',
        component:mySort
      },
      {
        path:'setting',
        name:'setting',
        component:setting
      },
      {
        path:'userInfo',
        name:'userInfo',
        component:userInfo
      },
      {
        path:'message',
        name:'message',
        component:message
      },
      {
        path:'get',
        name:'get',
        component:get
      },
      {
        path:'userManager',
        name:'userManager',
        component:userManager
      }
      
    ]
  }


]

const router = new VueRouter({
  routes
})

export default router
