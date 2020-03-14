<template>
  <div class="container">
        <div class="push">
            <div class="username">
                <el-input placeholder="请输入电话号码" prefix-icon="el-icon-phone" v-model="inputPhone" ></el-input>
            </div>
            <div class="password">
                <el-input placeholder="请输入验证码" prefix-icon="el-icon-message" v-model="inputCode" ></el-input>
                <el-row>
                    <el-button v-show="isShow" @click="getCode" type="info">获取验证码</el-button>
                    <el-button v-show="!isShow">{{count}}s后重发</el-button>
                </el-row>
            </div>
            <div class="submit">
                <el-row>
                    <el-button  type="primary" @click="toLogin">登录</el-button>
                </el-row>
            </div>
        </div>
  </div>
</template>

<script>
import {loginCode} from '../../plugins/api'
import {getCode} from '../../plugins/api'
export default {
    name:'phoneLogin',
    data(){
        return{
            isShow:true, //xxx秒后重发
            count: '', //计时
            timer: null,
            inputPhone:'', //电话号码
            inputCode:'', //验证码
            newCode:'', //获取到的验证码
            getPhone:'', //获取到的手机号
        }
    },
    methods: {
        toLogin:function(){
            var that = this
            var inputPhone = this.inputPhone //电话号码
            var inputCode = this.inputCode //输入的验证码
            var newCode = this.newCode //获取到的验证码
            var getPhone = this.getPhone //获取到的手机号
            if(!inputPhone){
                this.$message({
                    message: '电话号码不能为空',
                    type: 'warning'
                });
                return;
            }else if(!inputCode){
                this.$message({
                    message: '请输入验证码',
                    type: 'warning'
                });
                return;
            }
            loginCode({
                phone:inputPhone
            }).then(function(res){
                var err_code = res.data.err_code
                if(err_code == 2){
                    that.$message({
                        message: '电话号码还未注册',
                        type: 'warning'
                    });
                    return;
                }
                if(res.data[0]){
                    var newCode = that.newCode //获取到的验证码
                    var inputCode = that.inputCode //输入的验证码
                    var inputPhone = that.inputPhone //输入的手机号
                    var getPhone = that.getPhone //获取到的手机号
                    if(inputCode != newCode){
                        that.$message({
                            message: '验证码输入错误',
                            type: 'error'
                        });
                        return;
                    }
                    if(inputPhone != getPhone){
                        that.$message({
                            message: '请重新获取验证码',
                            type: 'warning'
                        });
                        return;
                    }
                    that.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    that.$router.push({path:'/firstPage'})
                }
                console.log(res)
            }).catch(function(res){
                console.log(res)
            }) 
        },
        getCode:function(){
            var that = this
            const num = 60;
            if (!this.timer) {
                this.count = num;
                this.isShow = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= num) {
                        this.count--;
                    } else {
                        this.isShow = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
            //发送验证码
            getCode({
                phone:that.inputPhone, //输入的验证码
            }).then(function(res){
                if(res.data.msg == 'ok'){
                    that.$message({
                        message: '验证码发送成功',
                        type: 'success'
                    });
                    var newCode = res.data.code //接收到的验证码
                    var getPhone = res.data.phone //收验证码的电话号码
                    that.newCode = newCode
                    that.getPhone = getPhone
                }else{
                    that.$message({
                        message: '验证码发送失败',
                        type: 'error'
                    });
                }  
                console.log(res)
            }).catch(function(res){
                console.log(res)
            })
        }
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
.username input{
    width:86%;
    height:20px;
    border-radius: 6px;
    border-width: none;
    border-style: none;
    padding:8px;
    margin-left:5px;
}
.password input{
    width:50%;
    height:20px;
    border-radius: 6px;
    border-width: none;
    border-style: none;
    padding:8px;
    margin-left:5px;
}
.el-icon-phone,.el-icon-message{
    font-size: 20px;
}
.el-button--primary{
    height:36px;
}
.submit{
    width:80%;
    margin-top:20px;
}
.el-button--primary {
    width:100%;
    padding:8px 20px;
}
.el-button--info{
    margin-left:10px;
}
</style>


