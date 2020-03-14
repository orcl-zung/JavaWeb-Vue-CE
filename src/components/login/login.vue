<template>
    <div class="one">
        <div class="top">
            <i class="el-icon-s-promotion"></i>
            <span class="textLogin">登录</span>
        </div>
        <div class="center">
            <el-menu  :default-active="this.$route.path"  :router="true" :unique-opened="true"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/index/login/passwordLogin">用户名/密码登录</el-menu-item>
                <el-menu-item index="/index/login/phoneLogin">手机验证登录</el-menu-item>
            </el-menu>
        </div>
        <div class="container">  
            <router-view/>
        </div>
        <div class="bottom">
            <span>Or</span>
            <a href="" @click.prevent="toRegister" class="register">注册</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
      data () {
      return {
        checked: false
      };
    },
    methods: {
        toRegister:function(){
            this.$router.push({path:'/index/register'})
        },
        toPasLogin:function(){
            this.$router.push({path:'/index/login/passwordLogin'})
        },
         toPhoneLogin:function(){
            this.$router.push({path:'/index/login/phoneLogin'})
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
  
}
</script>

<style scoped>
a{
    text-decoration: none;
    color:black;
}
.one{
    width:400px;
    border:1px solid #eee;
    border-radius: 10px;
    margin: 10px;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.top{
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    height:80px;
}
.textLogin{
    margin-left:10px;
    font-weight: bolod;
}
.center{
    width:100%;
    display: flex;
    flex-direction: row;
    height:50px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.el-menu--horizontal>.el-menu-item{
    width:50%;
    height:40px;
    line-height: 40px;
    text-align: center;
}
.el-menu.el-menu--horizontal{
    width:80%;
} 
.el-menu--horizontal>.el-menu-item.is-active{
   background-color: #409EFF;
   color:white;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: #409EFF;
    color:white;
    border-bottom-color: #409EFF;
}
.main{
    width:80%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
}
.name,.phone{
    width:50%;
    padding:6px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
}
.phone{
    border:1px solid #eee;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.name{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    border-left:1px solid #eee;
}
.submit{
    width:80%;
    margin-top:20px;
}
.el-button--primary {
    width:100%;
    padding:8px 20px;
}
.bottom{
    width:80%;
    margin-top: 10px;
}
.bottom span{
    margin-right: 10px;
}
.container{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.register{
    color:#409EFF;
}
</style>