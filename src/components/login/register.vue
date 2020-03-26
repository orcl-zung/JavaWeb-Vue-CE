<template>
      <div class="one">
        <div class="top">
            <i class="el-icon-s-flag"></i>
            <span class="textLogin">注册</span>
        </div>
        <div class="center">
            <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="aginPas">
                    <el-input v-model="form.aginPas" show-password></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="trueName">
                    <el-input v-model="form.trueName"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input v-model="form.code"></el-input>
                    <el-row>
                        <el-button v-show="isShow" @click="getCode" type="primary" plain>获取验证码</el-button>
                        <el-button v-show="!isShow">{{count}}s后重发</el-button>
                    </el-row>
                </el-form-item>
                <div class="bottomBtn">
                    <el-button type="primary" @click="onSubmit" round>注册</el-button>
                    <el-button type="info" round>取消</el-button>
                </div>
            </el-form>
        </div>
        <div class="bottom">
            <span>Or</span>
            <a href="" @click.prevent="toLogin" class="login">登录</a>
        </div>
    </div>
</template>

<script>
import {isvalidPhone} from '../../config/validate' //验证手机号码
import {register} from '../../plugins/api' //注册接口
import {getCode} from '../../plugins/api' //获取验证码
import {compareCode} from '../../plugins/api' //核对验证码
export default { 
    name:'register',
    data() {
        // 第一张表的验证
        var validateName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }else if(value && value.length > 11){
                return callback(new Error('用户名长度不能超过11位'));
            }
            else{
                callback();
            }
        };
        var validateAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }else if(value && (value < 0 || value > 100)){
                return callback(new Error('请填写真实年龄'));
            }
            else{
                callback();
            }
        };
        var validateGender = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('性别不能为空'));
            }else{
                callback();
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('密码不能为空'));
            }
            else if(value && value.length > 15){
                return callback(new Error('密码长度不能超过15位'));
            }
            else{
                callback();
            }
        };
        var validateAginpas = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请确认密码'));
            }else{
                callback();
            }
        };
        var validateTruename = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('真实名称不能为空'));
            }else{
                callback();
            }
        };
        var validatePhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('电话号码不能为空'));
            }else if(!isvalidPhone(value)){
                return callback(new Error('请输入正确的电话号码'));
            }else{
                callback();
            }
        };
        var validateCode = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('验证码不能为空'));
            }else{
                callback();
            }
        };
        return {
            isShow:true,
            count: '',
            timer: null,
            newCode:'', //接收的验证码
            getPhone:'', //获取验证码的手机号
            form: {
                name: '',
                age: '',
                gender:'',
                password: '',
                aginPas: '',
                trueName: '',
                phone: '',
                code:'',
            }  ,
            rules: {
                name: [
                    { validator: validateName, trigger: 'blur' }
                ],
                age: [
                    { validator: validateAge, trigger: 'blur' }
                ],
                gender: [
                    { validator: validateGender, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                aginPas: [
                    { validator: validateAginpas, trigger: 'blur' }
                ],
                trueName: [
                    { validator: validateTruename, trigger: 'blur' }
                ],
                phone: [
                    { validator: validatePhone, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ],
            },
        }
    },
    methods:{
        toLogin:function(){
            this.$router.push({path:'/index/login'})
        },
        // 表单提交
        onSubmit() {
            var that = this
            var code = this.form.code
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
                    this.$message({
                        message: '请先获取验证码',
                        type: 'warning'
                    });
                    return;
                }else if(data == 2){
                    this.$message({
                        message: '验证码错误',
                        type: 'error'
                    });
                    return;
                }else if(data == 3){
                    var name = that.form.name //用户名
                    var age = that.form.age //年龄
                    var gender = that.form.gender //用户性别
                    var trueName = that.form.trueName //真实姓名
                    var phone = that.form.phone //电话号码
                    var pas = that.form.password //密码
                    var aginPas = that.form.aginPas //确认密码
                    var code = that.form.code //用户输入的验证码
                    if(!name && !age && !gender && !pas && !aginPas && !trueName && !phone && !code){
                        this.$message({
                            message: '请把表单填写完整',
                            type: 'warning'
                        });
                        return;
                    }
                    if(pas != aginPas){
                        this.$message.error('两次输入的密码不一致，请重新输入');
                        return;
                    }
                    register({
                        userName:name,
                        userAge:age,
                        userGender:gender,
                        userPassword:pas,
                        userRealName:trueName,
                        userPhone:phone,
                    }).then(function(res){
                        var code = res.data.code
                        var message = res.data.message
                        if(code == 'ok'){
                            that.$message({
                                message: '恭喜你，注册成功',
                                type: 'success'
                            });
                            that.$router.push({path:'/index/login'})
                        }else if(code == 'error' && message == '该手机号已被注册') {
                            that.$message({
                                message: '该手机号码已经被注册',
                                type: 'warning'
                            });
                        }else{
                            that.$message({
                                message: '注册失败',
                                type: 'error'
                            });
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
            var phone = this.form.phone
            console.log(phone)
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
a{
    text-decoration: none;
    color:black;
}
.login{
    color:#409EFF;
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
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}


.submit{
    width:80%;
    margin-top:20px;
}
.el-button--primary {
    margin-left:10px
}
.bottom{
    width:80%;
    margin-top: 10px;
}
.bottom span{
    margin-right: 10px;
}
.el-form{
    width:90%;
    /* margin-right:20px */
}
>>>.el-form-item__content{
    display: flex;
    flex-direction: row;
}
.el-button--info{
    margin-left:10px
}
.bottomBtn{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.el-radio-group{
    margin-top:13px
}
</style>