<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="排队类型">
      <el-radio-group v-model="radio">
        <el-radio :label="1">万能排队</el-radio>
        <el-radio :label="2">办事排队</el-radio>
        <el-radio :label="3">其他排队</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="备注信息">
      <el-input type="textarea" :rows="12" placeholder="请输入备注信息" v-model="form.note"></el-input>
    </el-form-item>
    <el-form-item label="排队地址">
      <el-input placeholder="请输入排队地址" v-model="form.region" clearable></el-input>
    </el-form-item>
    <el-form-item label="备注地址">
      <el-input placeholder="请输入备注地址" v-model="form.place" clearable></el-input>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input placeholder="请输入联系电话" v-model="form.phone" clearable></el-input>
    </el-form-item>
    <div class="bottom">
        <el-form-item label="排队时间">
            <el-date-picker v-model="form.time"  type="datetime" placeholder="选择日期时间" ></el-date-picker>
        </el-form-item>
        <el-form-item label="排队时长">
          <el-select v-model="form.timeCount" placeholder="请选择排队时长">
            <el-option label="30min以内" value="30min以内"></el-option>
            <el-option label="30min-1h" value="30min-1h"></el-option>
            <el-option label="1h-2h" value="1h-2h"></el-option>
            <el-option label="2h以上" value="2h以上"></el-option>
          </el-select>
        </el-form-item>
    </div>
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
    name:'sort',
   data() {
    return {
      radio:'',
      form: {
        name: '',
        region: '',
        timeCount:'',
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