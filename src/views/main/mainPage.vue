<template>
  <div class="box">
    <div class="top">
      <div class="top_top">
        <div class="left">
          <i class="el-icon-search"></i>
          <span class="seach">筛选搜索</span>
        </div>
        <div class="right">
          <el-row>
            <el-button @click="clear">重置</el-button>
            <el-button type="primary">查询结果</el-button>
          </el-row>
        </div>
      </div>
      <div class="top_bottom">
        <div class="item">
          <span>跑腿类型：</span>
          <el-select v-model="kind" placeholder="跑腿类型">
            <el-option label="代买商品" value="代买商品"></el-option>
            <el-option label="代送物品" value="代送物品"></el-option>
            <el-option label="代取物品" value="代取物品"></el-option>
            <el-option label="代排队" value="代排队"></el-option>
          </el-select>
        </div>
        <div class="item">
          <span>跑腿费：</span>
          <el-select v-model="money" placeholder="跑腿费">
            <el-option label="1~20元" value="1~20元"></el-option>
            <el-option label="21~50元" value="21~50元"></el-option>
            <el-option label="51~100元" value="51~100元"></el-option>
            <el-option label="100元以上" value="100元以上"></el-option>
          </el-select>
        </div>
        <div class="item">
          <span>商品重量：</span>
          <el-select v-model="weight" placeholder="商品重量：">
            <el-option label="1~10千克" value="1~10千克"></el-option>
            <el-option label="11~15千克" value="11~15千克"></el-option>
            <el-option label="16~20千克" value="16~20千克"></el-option>
            <el-option label="20千克以上" value="20千克以上"></el-option>
          </el-select>
        </div>
        <div class="item">
          <span>购买时间：</span>
          <el-select v-model="time" placeholder="购买时间">
            <el-option label="半小时以内" value="半小时以内"></el-option>
            <el-option label="半小时~一小时" value="半小时~一小时"></el-option>
            <el-option label="一小时~两小时" value="一小时~两小时"></el-option>
            <el-option label="两小时以上" value="两小时以上"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'mainPage',
    data() {
      return {
        kind: '',
        money: '',
        weight:'',
        time:''
    }
  },
  methods:{
    clear:function(){
      this.kind = '',
      this.money = '',
      this.weight = '',
      this.time = ''
    }
  }
}
</script>

<style scoped>
.box{
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding:10px;
  box-sizing: border-box;
}
.top{
  width:100%;
  border:1px solid #eee;
  border-radius: 10px;
  padding:20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.top_top{
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.seach{
  margin-left:10px;
  font-size: 18px;
  font-weight: bold;
}
.el-icon-search{
  font-size: 20px;
}
.top_bottom{
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top:20px
}
</style>