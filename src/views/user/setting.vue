<template>
  <div class="box">
    <div class="top">
      <div class="top_top">
        <span>您的基础信息</span>
      </div>
      <div class="top_bottom">
        <div class="item">
          <span>会员名</span>
          <span class="name">xxx</span>
        </div>
        <div class="item">
          <span>绑定手机:</span>
          <span class="opt">xxxxxxxxxxx</span>
          <span class="opt"><a href="">修改手机</a></span>
        </div>
         
      </div>
    </div>
<<<<<<< HEAD
    <div class="bottom">
      <div class="top_top">
        <span>修改密码</span>
      </div>
      <div class="top_bottom">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input v-model="form.oldPassword" show-password  placeholder="请输入旧密码"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="form.newPassword" show-password  placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="aginPassword">
            <el-input v-model="form.aginPassword" show-password  placeholder="请确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="bottomBtn">
              <el-button type="primary" @click="submit">确认</el-button>
              <el-button @click="resetForm">重置</el-button>
            </div>
          </el-form-item>
        </el-form>
         
      </div>
    </div>
=======
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
  </div>
</template>

<script>
import {updatePassword} from '../../plugins/api' //修改密码
export default {
<<<<<<< HEAD
  name:'setting',
  data(){
    var validateOldPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('旧密码不能为空'));
      }else{
        callback();
      }
    };
    var validateNewPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('新密码不能为空'));
      }else{
        callback();
      }
    };
    var validateAginPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请确认密码'));
      }else{
        callback();
      }
    };
    return{
      form:{
        oldPassword:'',
        newPassword:'',
        aginPassword:''
      },
      rules: {
        oldPassword: [
          { validator: validateOldPassword, trigger: 'blur' }
        ],
        newPassword: [
          { validator: validateNewPassword, trigger: 'blur' }
        ],
        aginPassword: [
          { validator: validateAginPassword, trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    //确认修改
    submit(){
      var that = this
      var id = JSON.parse(sessionStorage.getItem('id')) //用户id
      var oldPassword = this.form.oldPassword
      var newPassword = this.form.newPassword
      var aginPassword = this.form.aginPassword
      if(oldPassword == newPassword){
        this.$message({
          message: '新密码不能与旧密码一致，请重置',
          type: 'warning'
        });
        return;
      }else if(aginPassword != newPassword){
        this.$message({
          message: '密码输入不一致，请重置',
          type: 'warning'
        });
        return;
      }
      updatePassword({
        userId:id,
        oldPwd:oldPassword,
        newPwd:newPassword
      }).then(function(res){
        var code = res.data.code
        if(code == 'ok'){
          that.$message({
            message: '密码修改成功,请重新登陆',
            type: 'success'
          });
          that.form = {}
          that.$router.push({path:'/index/login'})
        }else{
          that.$message({
            message: '原密码输入不正确，请重试!',
            type: 'error'
          });
        }
        console.log(res)
      })

    },
    //重置
    resetForm(){
      this.form = {}
    }
  }
=======
  name:'setting'
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
}
</script>

<style scoped>
a{
  text-decoration: none;
  color:rgb(39, 28, 184)
}
.box{
  width:100%;
<<<<<<< HEAD
  height:100vh;
  padding:20px;
=======
  height:100%;
  padding:10px;
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  /* align-items: center; */
  /* justify-content: center; */
=======
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
}
.top{
  width:50%;
  height:100px;
  border:1px solid #eee;
  border-radius: 10px;
  padding:15px 25px;
}
<<<<<<< HEAD
.bottom{
  width:50%;
  border:1px solid #eee;
  border-radius: 10px;
  padding:15px 25px;
  margin-top:30px
}
=======
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
.top_top{
  font-size: 18px;
  font-weight: bold;
}
.top_bottom{
  margin-left:20px;
  margin-top:10px;
  display: flex;
  flex-direction: column;

}
.item{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.name{
  margin-left:45px
}
.opt{
  margin-left:30px
}
<<<<<<< HEAD
.bottomBtn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
=======
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
</style>