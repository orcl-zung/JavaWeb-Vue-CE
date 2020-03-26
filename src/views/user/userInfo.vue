<template>
  <div class="box">
    <div class="left">
      <!-- 上传头像 -->
      <el-upload class="avatar-uploader"  action="#" :on-change="handChange"   list-type="picture"
      :show-file-list="false"  :on-success="handleAvatarSuccess"  :before-upload="beforeUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div class="deleteAvatar" v-if="imageUrl" @click.stop="deleteAvatar">
          <i class="el-icon-error"></i>
        </div>
      </el-upload>
      <el-form label-width="120px" :model="ruleForm" status-icon :rules="rules"  ref="ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名~" v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="一句话介绍" prop="introduce">
          <el-input placeholder="介绍一下你自己吧~" v-model="ruleForm.introduce" clearable></el-input>
        </el-form-item>
        <el-form-item label="用户真实姓名" prop="trueName">
           <el-input placeholder="请输入您的真实姓名" v-model="ruleForm.trueName" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input placeholder="请输入电话号码" v-model="ruleForm.phone" clearable></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
           <el-input placeholder="请输入您的年龄" v-model="ruleForm.age" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
           <el-input placeholder="请输入您的性别" v-model="ruleForm.sex" clearable></el-input>
        </el-form-item>
        <el-form-item label="个人简介" prop="abtract">
          <el-input  type="textarea" :rows="5" placeholder="说你想说的~" v-model="ruleForm.abtract"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="bottomBtn">
            <el-button type="primary" @click="savaInfo">保存</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-button type="primary" plain @click="toMain">返回主页</el-button>
    </el-row>
  </div>
</template>

<script>
import {uploadAvatar} from '../../plugins/api' //上传头像
import {userInfo} from '../../plugins/api' //获取用户信息
import {modifyInfo} from '../../plugins/api' //修改用户信息
export default {
  name:'userInfo',
  data() {
    // 表的验证
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'));
      }else{
        callback();
      }
    };
    var validateTrueName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入真实名称'));
      }else{
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入电话号码'));
      }else{
        callback();
      }
    };
    var validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入您的年龄'));
      }else{
        callback();
      }
    };
    var validateSex = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入您的性别'));
      }else{
        callback();
      }
    };
    return {
      imageUrl: '', //用户头像
      ruleForm:{
        name: '', //用户名
        age: '', //年龄
        trueName: '', //真实姓名
        phone: '', //电话号码
        abtract:'', //简介
        introduce:'', //一句话介绍
        sex:'', //性别
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        // introduce: [
        //   { validator: validateIntroduce, trigger: 'blur' }
        // ],
        trueName: [
          { validator: validateTrueName, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        age: [
          { validator: validateAge, trigger: 'blur' }
        ],
        sex: [
          { validator: validateSex, trigger: 'blur' }
        ],
        // abtract: [
        //   { validator: validateAbtract, trigger: 'blur' }
        // ],
      },
    }
  },
  created(){
    var that = this
    var id = JSON.parse(sessionStorage.getItem('id')) //用户id
    if(id){
      userInfo({userId:id}).then(function(res){
        var data = res.data.data[0]
        if(data){
          that.ruleForm.name = data.userName
          that.ruleForm.age = data.userAge
          that.ruleForm.sex = data.userGender
          that.ruleForm.trueName = data.userRealName
          that.ruleForm.phone = data.userPhone
          if(data.userAvatar){
            that.imageUrl = data.userAvatar
          }else{
            that.imageUrl = ''
          }
        }
        console.log(data)
      }).catch(function(res){
        console.log(res)
      })
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    //返回主页
    toMain:function(){
      this.$router.push({path:'/firstPage/mainPage'})
    },
    //添加头像后输出图片信息
    handChange(file){
      var url = file.url
      this.imageUrl = url
      console.log(file)
    },
    // 删除头像
    deleteAvatar:function(){
      this.imageUrl = ''
    },
    //保存个人信息
    savaInfo:function(){
      var that = this
      var id = JSON.parse(sessionStorage.getItem('id')) //用户id
      var name = this.ruleForm.name
      var introduce = this.ruleForm.introduce //一句话介绍
      var trueName = this.ruleForm.trueName
      var phone = this.ruleForm.phone
      var age = this.ruleForm.age
      var sex = this.ruleForm.sex
      var abtract = this.ruleForm.abtract //个人简介
      var avatar = this.imageUrl
      var time = new Date()
      if(!name || !trueName || !phone || !age || !sex){
        this.$message({
          message: '请把重要信息填写完整',
          type: 'warning'
        });
        return;
      }
      //修改用户信息
      modifyInfo({
        userId:id, //用户id
        userName:name, //用户名称
        userPhone:phone, //用户电话
        userRealName:trueName, //真实名称
        userAge:age, //年龄
        userGender:sex, //性别
        userIntroduce:introduce, //一句话介绍
        userAbtract:abtract, //简介
        userAvatar:avatar, //头像
        lastUpdateDate:time //当前时间
      }).then(function(res){
        var code = res.data.code
        if(code == 'ok'){
          that.$message({
            message: '保存成功',
            type: 'success'
          });
          that.$store.commit('changeAvatar', avatar)
        }
        console.log(res)
      }
    )},
    //上传头像
    beforeUpload(file){
      var that = this
      let fd = new FormData();
      fd.append('files',file);//传文件
      uploadAvatar(fd).then(function(res){
        console.log(res)
        var data = res.data[0]
        if(data){
          // var src = data.fileMappingSrc
          that.$message({
            message: '上传成功',
            type: 'success'
          });
          that.imageUrl = data.fileMappingSrc
         
        }else{
          that.$message({
            message: '上传失败',
            type: 'error'
          });
        }
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>
.box{
  width:100%;
  height:100vh;
  background-color: #fff;
  padding:20px;
  box-sizing: border-box;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
.left{
  width:90%;
  display: flex;
  flex-direction: row;
}
>>>.el-form-item__content{
  width:500px
}
.bottomBtn{
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
}
/* 头像部分 */
>>>.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  /* overflow: hidden; */
}
>>>.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
>>>.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
>>>.avatar {
  width: 178px;
  /* height: 178px; */
  display: block;
}
/* 删除头像 */
.deleteAvatar{
  position: absolute;
  right:-10px;
  top:-15px;
  font-size: 25px;
  color:red;
}
</style>