<template>
  <div class="box">
    <div class="">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <span>{{name}}</span>
          <!-- <el-tag>{{name}}</el-tag> -->
        </el-form-item>
        <el-form-item label="年龄">
          <span>{{age}}</span>
          <!-- <el-tag>{{age}}</el-tag> -->
        </el-form-item>
        <el-form-item label="性别">
          <span>{{gender}}</span>
          <!-- <el-tag>{{gender}}</el-tag> -->
        </el-form-item>
        <el-form-item label="真实名称">
          <span>{{trueName}}</span>
          <!-- <el-tag>{{trueName}}</el-tag> -->
        </el-form-item>
        <el-form-item label="电话号码">
          <span>{{phone}}</span>
          <!-- <el-tag>{{phone}}</el-tag> -->
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import {userInfo} from '../../plugins/api'
export default {
  name:'userInfo',
   data() {
      return {
          name: '', //用户名
          age: '', //年龄
          gender: '', //性别
          trueName: '', //真实姓名
          phone: '', //电话号码
        
      }
    },
    created(){
      var that = this
      var id = JSON.parse(sessionStorage.getItem('id')) //用户id
      userInfo({
        id:id,
      }).then(function(res){
        if(res.data[0]){
          that.name = res.data[0].name
          that.age = res.data[0].age
          that.gender = res.data[0].gender
          that.trueName = res.data[0].trueName
          that.phone = res.data[0].phone
        }
        console.log(res)
      }).catch(function(res){
        console.log(res)
      })
    },
    methods: {
     
    }
}
</script>

<style scoped>
.box{
  width:100%;
  height:100%;
  background-color: #fff;
  padding:20px;
  box-sizing: border-box;
}
</style>