<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="物品类型">
      <el-radio-group v-model="radio">
        <el-radio :label="1">文件</el-radio>
        <el-radio :label="2">手机</el-radio>
        <el-radio :label="3">教材</el-radio>
        <el-radio :label="4">私人物品</el-radio>
        <el-radio :label="5">其他</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="发货地址">
      <el-input placeholder="请输入" v-model="form.region" clearable></el-input>
    </el-form-item>
    <el-form-item label="备注地址">
      <el-input placeholder="请输入" v-model="form.place" clearable></el-input>
    </el-form-item>
    <el-form-item label="收货电话">
      <el-input placeholder="请输入" v-model="form.phone" clearable></el-input>
    </el-form-item>
    <div class="bottom">
      <el-form-item label="收货地址">
        <el-input placeholder="请输入" v-model="form.buyPlace" clearable></el-input>
      </el-form-item>
      <el-form-item label="备注地址">
        <el-input placeholder="请输入" v-model="form.place2" clearable></el-input>
      </el-form-item>
      <el-form-item label="收货电话">
        <el-input placeholder="请输入" v-model="form.number" clearable></el-input>
      </el-form-item>
    </div>
    <el-form-item label="备注留言">
      <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="form.note"></el-input>
    </el-form-item>
    <el-form-item label="发货时间">
      <el-date-picker v-model="form.time"  type="datetime" placeholder="选择日期时间" ></el-date-picker>
    </el-form-item>
    <el-form-item label="商品重量">
      <el-select v-model="form.weight" placeholder="请选择商品重量">
        <el-option label="10千克以内" value="10千克以内"></el-option>
        <el-option label="10-15千克" value="10-15千克"></el-option>
        <el-option label="15-20千克" value="15-20千克"></el-option>
        <el-option label="20千克以上" value="20千克以上"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="跑腿费">
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
export default {
    name:'post',
   data() {
    return {
      radio:'',
      form: {
        name: '',
        region: '',
        place:'',
        place2:'',
        phone:'',
        number:'',
        buyPlace:'',
        note:'',
        time:'',
        weight:'',
        money:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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