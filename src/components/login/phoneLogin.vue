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
import {getCode} from '../../plugins/api' //获取验证码
import {compareCode} from '../../plugins/api' //核对验证码
import {login} from '../../plugins/api' //登录接口
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
        // 登录
        toLogin() {
            var that = this
            var code = this.inputCode
            if(!code){
                this.$message({
                    message: '请先获取验证码',
                    type: 'warning'
                });
                return;
            }
            compareCode(code).then(function(res){
                var data = res.data
                if(data == 1){
                    that.$message({
                        message: '请先获取验证码',
                        type: 'warning'
                    });
                    return;
                }else if(data == 2){
                    that.$message({
                        message: '验证码错误',
                        type: 'error'
                    });
                    return;
                }else if(data == 3){
                    var phone = that.inputPhone //电话号码
                    var code = that.inputCode //验证码
                    if(!phone && !code){
                        that.$message({
                            message: '请把表单填写完整',
                            type: 'warning'
                        });
                        return;
                    }
                    login({userPhone:phone}).then(function(res){
                        var code = res.data.code
                        var id = res.data.data.userId
                        var avatar = res.data.data.userAvatar
                        if(id){
                            sessionStorage.setItem('id',JSON.stringify(id)); // 存入用户id
                            that.$store.commit('changeAvatar', avatar) //登陆后更新缓存数据，展示用户头像
                        }
                        if(code == 'ok'){
                            that.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                        }else{
                            that.$message({
                                message: '登录失败',
                                type: 'success'
                            });
                            that.$router.push({path:'/'}) 
                        }
                            console.log(res)
                    }).catch(function(res){
                            console.log(res)
                    })
                }
                console.log(res)
            })
        },
        //获取验证码
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
            var phone = this.inputPhone //输入的电话号码
            if(!phone){
                this.$message({
                    message: '电话号码不能为空',
                    type: 'warning'
                });
                return;
            }
            //发送验证码
            getCode(phone).then(function(res){
                var data = res.data
                if(data == 1){
                    that.$message({
                        message: '验证码发送成功',
                        type: 'success'
                    });
                } else{
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


