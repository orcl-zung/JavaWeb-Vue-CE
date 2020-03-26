<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <el-form-item label="物品类型"  prop="radio">
      <el-radio-group v-model="form.radio">
        <el-radio :label="1">文件</el-radio>
        <el-radio :label="2">手机</el-radio>
        <el-radio :label="3">教材</el-radio>
        <el-radio :label="4">私人物品</el-radio>
        <el-radio :label="5">其他</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="取货地址"  prop="region">
      <el-input placeholder="请输入取货地址" v-model="form.region" clearable></el-input>
    </el-form-item>
    <el-form-item label="备注地址"  prop="place"> 
      <el-input placeholder="请输入取货的备注地址" v-model="form.place" clearable></el-input>
    </el-form-item>
    <el-form-item label="取货电话"  prop="phone">
      <el-input placeholder="请输入取货电话" v-model="form.phone" clearable></el-input>
    </el-form-item>
    <div class="bottom">
        <el-form-item label="收货地址"  prop="getPlace">
            <el-input placeholder="请输入收货地址" v-model="form.getPlace" clearable></el-input>
        </el-form-item>
        <el-form-item label="备注地址"  prop="placeTwo">
            <el-input placeholder="请输入收货的备注地址" v-model="form.placeTwo" clearable></el-input>
        </el-form-item>
        <el-form-item label="收货电话"  prop="number">
            <el-input placeholder="请输入收货电话" v-model="form.number" clearable></el-input>
        </el-form-item>
    </div>
    <el-form-item label="备注留言"  prop="note">
      <el-input type="textarea" :rows="8" placeholder="请输入备注留言" v-model="form.note"></el-input>
    </el-form-item>
    <el-form-item label="取货时间"  prop="time">
      <el-date-picker v-model="form.time"  type="datetime" placeholder="选择日期时间" ></el-date-picker>
    </el-form-item>
    <el-form-item label="商品重量"  prop="weight">
      <el-select v-model="form.weight" placeholder="请选择商品重量">
        <el-option label="10千克以内" value="10千克以内"></el-option>
        <el-option label="10-15千克" value="10-15千克"></el-option>
        <el-option label="15-20千克" value="15-20千克"></el-option>
        <el-option label="20千克以上" value="20千克以上"></el-option>
      </el-select>
    </el-form-item>
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
import {releGet} from '../../plugins/api' //发布代取
export default {
  name:'get',
  data() {
    // 表的验证
    var validateRadio = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('物品类型不能为空'));
      }else{
        callback();
      }
    };
    var validateRegion = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('取货地址不能为空'));
      }else{
        callback();
      }
    };
    var validatePlace = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('取货的备注地址不能为空'));
      }else{
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('收货电话不能为空'));
      }else if(!isvalidPhone(value)){
        return callback(new Error('请输入正确的电话号码'));
      }else{
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('取货电话不能为空'));
      }else if(!isvalidPhone(value)){
        return callback(new Error('请输入正确的电话号码'));
      }else{
        callback();
      }
    };
    var validatePlaceTwo = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('收货的备注地址不能为空'));
      }else{
        callback();
      }
    };
    var validatePrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('跑腿费用不能为空'));
      }else{
        callback();
      }
    };
    var validateTime = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('取货时间不能为空'));
      }else{
        callback();
      }
    };
    var validateWeight = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('商品重量不能为空'));
      }else{
        callback();
      }
    };
    var validateGetPlace = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('收货地址不能为空'));
      }else{
        callback();
      }
    };
    return {
      form: {
        radio:'',
        region: '',
        place:'',
        placeTwo:'',
        phone:'',
        number:'',
        getPlace:'',
        note:'',
        time:'',
        weight:'',
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
        placeTwo: [
          { validator: validatePlaceTwo, trigger: 'blur' }
        ],
        number: [
          { validator: validateNumber, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        getPlace: [
          { validator: validateGetPlace, trigger: 'blur' }
        ],
        time: [
          { validator: validateTime, trigger: 'blur' }
        ],
        weight: [
          { validator: validateWeight, trigger: 'blur' }
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
        this.form.radio = '文件'
      }else if(radio == 2){
        this.form.radio = '手机'
      }else if(radio == 3){
        this.form.radio = '教材'
      }else if(radio == 4){
        this.form.radio = '私人物品'
      }else if(radio == 5){
        this.form.radio = '其他'
      }
      var region = this.form.region
      var place = this.form.place
      var placeTwo = this.form.placeTwo
      var phone = this.form.phone
      var number = this.form.number
      var getPlace = this.form.getPlace
      var note = this.form.note
      var time = this.form.time
      var weight = this.form.weight
      var price = this.form.price
      var id = JSON.parse(sessionStorage.getItem('id')) //用户id
      if(id){
        if(!radio || !region || !place || !placeTwo || !phone || !number || !getPlace || !note || !time || !weight || !price){
          this.$message({
            message: '请把表单信息填写完整',
            type: 'warning'
          });
          return;
        }
        releGet({
          releaseUserId:id,
          takeContent:that.form.radio,
          takeAddress:region,
          takeNotedAddress:place,
          takePhone:phone,
          shippingAddress:getPlace,
          shippingNotedAddress:placeTwo,
          shippingPhone:phone,
          noteMessage:note,
          takeTime:time,
          goodsWeight:weight,
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