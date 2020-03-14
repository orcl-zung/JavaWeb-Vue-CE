<template>
    <div class="container">  
        <div class="push">
            <div class="username">
                <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="inputName"></el-input>
            </div>
            <div class="password">
                <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="inputPassword" show-password></el-input>
            </div>
        </div>
        <div class="remember">
            <div class="left">
                <el-checkbox v-model="checked">记住密码</el-checkbox>
            </div>
            <div class="right">
                <span class="lost">忘记密码</span>
            </div>
        </div>
        <div class="submit">
            <el-row>
                <el-button type="primary" @click="toLogin">登录</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
import {loginPas} from '../../plugins/api'
export default {
    name:'passwordLogin',
    data() {
      return {
        checked: false,
        inputName:'',
        inputPassword:''
      }
    },
    created(){
        var name = JSON.parse(sessionStorage.getItem('name')) //用户名
        var password = JSON.parse(sessionStorage.getItem('password')) //密码
        if(name){
            this.inputName = name
            this.checked = true
        }
        if(password){
            this.inputPassword = password
        }
    },
    methods:{
        toLogin:function(){
            var that = this
            var name = this.inputName //用户名
            var password = this.inputPassword //密码
            var checked = this.checked
            if(checked){
                sessionStorage.setItem('name',JSON.stringify(name)); // 存入用户信息
                sessionStorage.setItem('password',JSON.stringify(password)); // 存入用户信息
            }
            if(!name){
                this.$message({
                    message: '请输入用户名',
                    type: 'warning'
                });
            }else if(!password){
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                });
            }else{
                loginPas({
                    name:name,
                    password:password,
                }).then(function(res){
                    var id = res.data[0].id
                    sessionStorage.setItem('id',JSON.stringify(id)); // 存入用户信息
                    console.log(res)
                    var err_code = res.data.err_code
                    if(res.data[0]){
                        that.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        that.$router.push({path:'/firstPage'})
                    }else if(err_code == 2){
                        that.$message({
                            message: '用户名不存在',
                            type: 'warning'
                        });
                    }else if(err_code == 3){
                        that.$message({
                            message: '用户名或密码错误',
                            type: 'warning'
                        });
                    }else{
                        that.$message({
                            message: '登录失败',
                            type: 'error'
                        });
                    }
                }).catch(function(res){
                    console.log(res)
                })
            }
        },
    }
}
</script>

<style scoped>
.container{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.push{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.username,.password{
    width:80%;
    height:50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
}
.remember{
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}
.right .lost{
    color:#409EFF;
}
.submit{
    width:80%;
    margin-top:20px;
}
.el-button--primary {
    width:100%;
    padding:8px 20px;
}
</style>