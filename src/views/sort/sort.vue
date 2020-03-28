<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <el-form-item label="排队类型"  prop="radio">
      <el-radio-group v-model="form.radio">
        <el-radio :label="1">万能排队</el-radio>
        <el-radio :label="2">办事排队</el-radio>
        <el-radio :label="3">其他排队</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="备注信息"  prop="note">
      <el-input type="textarea" :rows="12" placeholder="请输入备注信息" v-model="form.note"></el-input>
    </el-form-item>
    <el-form-item label="排队地址"  prop="region">
      <el-input placeholder="请输入排队地址" v-model="form.region" clearable></el-input>
    </el-form-item>
    <el-form-item label="备注地址"  prop="place">
      <el-input placeholder="请输入备注地址" v-model="form.place" clearable></el-input>
    </el-form-item>
    <el-form-item label="联系电话"  prop="phone">
      <el-input placeholder="请输入联系电话" v-model="form.phone" clearable></el-input>
    </el-form-item>
    <div class="bottom">
        <el-form-item label="排队时间"  prop="time">
            <el-date-picker v-model="form.time"  type="datetime" placeholder="选择日期时间" ></el-date-picker>
        </el-form-item>
        <el-form-item label="排队时长"  prop="timeCount">
          <el-select v-model="form.timeCount" placeholder="请选择排队时长">
            <el-option label="半小时以内" value="半小时以内"></el-option>
            <el-option label="0.5-1h" value="0.5-1h"></el-option>
            <el-option label="1h-2h" value="1h-2h"></el-option>
            <el-option label="2h以上" value="2h以上"></el-option>
          </el-select>
        </el-form-item>
    </div>
    <el-form-item label="跑腿费"  prop="price">
      <el-input placeholder="请输入跑腿费用（元）" v-model="form.price" clearable ></el-input>
    </el-form-item>
    <div class="btn">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定订单</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import {isvalidPhone} from '../../config/validate' //验证手机号码
import {releSort} from '../../plugins/api' //发布代排队
export default {
  name:'sort',
  data() {
    // 表的验证
    var validateRadio = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('排队类型不能为空'));
      }else{
        callback();
      }
    };
    var validateRegion = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('排队地址不能为空'));
      }else{
        callback();
      }
    };
    var validatePlace = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('备注地址不能为空'));
      }else{
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('联系电话不能为空'));
      }else if(!isvalidPhone(value)){
        return callback(new Error('请输入正确的电话号码'));
      }else{
        callback();
      }
    };
    var validateTime = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('排队时间不能为空'));
      }else{
        callback();
      }
    };
    var validateTimeCount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('排队时长不能为空'));
      }else{
        callback();
      }
    };
    var validatePrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('跑腿费不能为空'));
      }else{
        callback();
      }
    };
    return {
      form: {
        radio:'',
        note:'',
        region: '',
        place:'',
        phone:'',
        time:'',
        timeCount:'',
        price:''
      },
      rules: {
        radio: [
          { validator: validateRadio, trigger: 'blur' }
        ],
        region: [
          { validator: validateRegion, trigger: 'blur' }
        ],
        place: [
          { validator: validatePlace, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        time: [
          { validator: validateTime, trigger: 'blur' }
        ],
        timeCount: [
          { validator: validateTimeCount, trigger: 'blur' }
        ],
        price: [
          { validator: validatePrice, trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      var that = this
      var radio = this.form.radio
      if(radio == 1){
        this.form.radio = '万能排队'
      }else if(radio == 2){
        this.form.radio = '办事排队'
      }else if(radio == 3){
        this.form.radio = '其他排队'
      }
      var note = this.form.note
      var region = this.form.region
      var place = this.form.place
      var phone = this.form.phone
      var time = this.form.time
      var timeCount = this.form.timeCount
      var price = this.form.price
      var id = JSON.parse(sessionStorage.getItem('id')) //用户id
      if(id){
        if(!radio || !region || !place || !phone || !time || !timeCount || !price){
          this.$message({
            message: '请把表单信息填写完整',
            type: 'warning'
          });
          return;
        }
        releSort({
          releaseUserId:id,
          queueType:that.form.radio,
          noteMessage:note,
          queueAddress:region,
          queueNotedAddress:place,
          queuePhone:phone,
          queueTime:time,
          queueTimeLength:timeCount,
          runningFee:price
        }).then(function(res){
          var code = res.data.code
          if(code == 'ok'){
            that.$message({
              message: '订单发布成功',
              type: 'success'
            });
            that.form = {}
          }else{
            that.$message({
              message: '发布失败',
              type: 'error'
            });
          }
          console.log(res)
        })
      }else{
        that.$message({
          message: '请先登录，登陆后即可进行操作',
          type: 'warning'
        });
      }
    }
  }
}
</script>

<style scoped>
form{
  background-color: #fff;
  padding:10px;
  box-sizing: border-box;
}
.btn{
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:20px
}
.el-form-item__content>.el-input:nth-of-type(-n+5){
  width:50%;
}
.el-textarea{
  width:80%;
}
.bottom{
  padding-top:20px;
  padding-bottom:5px;
  background-color: #e6e6e6;
  margin-bottom:20px;
}
</style>