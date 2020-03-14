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
import myExpress from '../views/user/myExpress.vue'
import myProduct from '../views/user/myProduct.vue'
import userInfo from '../views/user/userInfo.vue'
import message from '../views/user/message.vue'

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
        redirect:'/login/passwordLogin',
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
        path:'myExpress',
        name:'myExpress',
        component:myExpress
      },
      {
        path:'myProduct',
        name:'myProduct',
        component:myProduct
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
      }
    ]
  }


]

const router = new VueRouter({
  routes
})

export default router
