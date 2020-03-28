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
            <el-button type="primary" @click="toSeach">查询结果</el-button>
          </el-row>
        </div>
      </div>
      <div class="top_bottom">
        <div class="item">
          <!-- <span>跑腿类型：</span> -->
          <el-select v-model="kind" placeholder="跑腿类型">
            <el-option label="代买" value="代买"></el-option>
            <el-option label="代送" value="代送"></el-option>
            <el-option label="代取" value="代取"></el-option>
            <el-option label="代排队" value="代排队"></el-option>
          </el-select>
        </div>
        <div class="item">
          <span>发布时间：</span>
          <el-date-picker v-model="time" type="datetimerange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
        <div class="item">
          <span>跑腿费：</span>
          <el-select v-model="money" placeholder="跑腿费">
            <el-option label="1~20元" value="1~20元"></el-option>
            <el-option label="20~50元" value="20~50元"></el-option>
            <el-option label="50~100元" value="50~100元"></el-option>
            <el-option label=">100元" value=">100元"></el-option>
          </el-select>
        </div>
        <div class="item">
          <span>商品重量：</span>
          <el-select v-model="weight" placeholder="物品重量：">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
            <el-option label="1~10kg" value="1~10kg"></el-option>
            <el-option label="10~15kg" value="10~15kg"></el-option>
            <el-option label="15~20kg" value="15~20kg"></el-option>
            <el-option label="20kg以上" value="20kg以上"></el-option>
          </el-select>
<<<<<<< HEAD
=======
=======
            <el-option label="1~10千克" value="1~10千克"></el-option>
            <el-option label="11~15千克" value="11~15千克"></el-option>
            <el-option label="16~20千克" value="16~20千克"></el-option>
            <el-option label="20千克以上" value="20千克以上"></el-option>
          </el-select>
        </div>
        <div class="item">
          <span>发布时间：</span>
          <el-date-picker v-model="time" type="datetimerange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
>>>>>>> 5db1772f9706f53ae3dbc727bf5a2b2e5f92e27a
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
        </div>
        
      </div>
    </div>
    <div class="bottom">
      <!-- 代买 -->
      <el-table :data="tableDataBuy" style="width: 100%" v-if='isBuy'>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="收货地址">
                <span>{{ props.row.shippingAddress }}</span>
              </el-form-item>
              <el-form-item label="购买地址">
                <span>{{ props.row.buyAddress }}</span>
              </el-form-item>
              <el-form-item label="收货的备注地址">
                <span>{{ props.row.shippingNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="购买的备注地址">
                <span>{{ props.row.buyNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="收货电话">
                <span>{{ props.row.shippingPhone }}</span>
              </el-form-item>
              <el-form-item label="购买要求">
                <span>{{ props.row.purchaseRequest }}</span>
              </el-form-item>
              <el-form-item label="商品价格">
                <span>{{ props.row.commodityPrices }}</span>
              </el-form-item>
              <el-form-item label="购买时间">
                <span>{{ props.row.buyTime | time}}</span>
              </el-form-item>
              <el-form-item label="商品重量">
                <span>{{ props.row.goodsWeight }}</span>
              </el-form-item>
              <el-form-item label="跑腿费">
                <span>{{ props.row.runningFee }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="商品 ID" prop="bid"></el-table-column>
        <el-table-column  label="购买类型" prop="buyContent"></el-table-column>
        <el-table-column  label="申请时间" prop="applyTime"></el-table-column>
        <el-table-column  label="状态" prop="status"></el-table-column>
        <el-table-column  label="是否完成订单" prop="isFinish"></el-table-column>
      </el-table>
      <!-- 代取 -->
      <el-table :data="tableDataGet" style="width: 100%" v-if='isGet'>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="取货地址">
                <span>{{ props.row.takeAddress }}</span>
              </el-form-item>
              <el-form-item label="收货地址">
                <span>{{ props.row.shippingAddress }}</span>
              </el-form-item>
              <el-form-item label="取货的备注地址">
                <span>{{ props.row.takeNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="收货的备注地址">
                <span>{{ props.row.shippingNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="取货电话">
                <span>{{ props.row.takePhone }}</span>
              </el-form-item>
              <el-form-item label="收货电话">
                <span>{{ props.row.shippingPhone }}</span>
              </el-form-item>
              <el-form-item label="取货时间">
                <span>{{ props.row.takeTime | time }}</span>
              </el-form-item>
              <el-form-item label="跑腿费">
                <span>{{ props.row.runningFee }}</span>
              </el-form-item>
              <el-form-item label="商品重量">
                <span>{{ props.row.goodsWeight }}</span>
              </el-form-item>
              <el-form-item label="备注留言">
                <span>{{ props.row.noteMessage }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="商品 ID" prop="tid"></el-table-column>
        <el-table-column  label="物品类型" prop="takeContent"></el-table-column>
        <el-table-column  label="申请时间" prop="applyTime"></el-table-column>
        <el-table-column  label="状态" prop="status"></el-table-column>
        <el-table-column  label="是否完成订单" prop="isFinish"></el-table-column>
      </el-table>
      <!-- 代送 -->
      <el-table :data="tableDataPost" style="width: 100%" v-if='isPost'>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="发货地址">
                <span>{{ props.row.sendAddress }}</span>
              </el-form-item>
              <el-form-item label="收货地址">
                <span>{{ props.row.shippingAddress }}</span>
              </el-form-item>
              <el-form-item label="发货的备注地址">
                <span>{{ props.row.shippingNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="收货的备注地址">
                <span>{{ props.row.shippingNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="收货电话">
                <span>{{ props.row.sendPhone }}</span>
              </el-form-item>
              <el-form-item label="收货电话">
                <span>{{ props.row.shippingPhone }}</span>
              </el-form-item>
              <el-form-item label="发货时间">
                <span>{{ props.row.deliveryTime | time }}</span>
              </el-form-item>
              <el-form-item label="备注留言">
                <span>{{ props.row.noteMessage }}</span>
              </el-form-item>
              <el-form-item label="商品重量">
                <span>{{ props.row.goodsWeight }}</span>
              </el-form-item>
              <el-form-item label="跑腿费">
                <span>{{ props.row.runningFee }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="商品 ID" prop="sid"></el-table-column>
        <el-table-column  label="购买类型" prop="sendContent"></el-table-column>
        <el-table-column  label="申请时间" prop="applyTime"></el-table-column>
        <el-table-column  label="状态" prop="status"></el-table-column>
        <el-table-column  label="是否完成订单" prop="isFinish"></el-table-column>
      </el-table>
      <!-- 代排队 -->
      <el-table :data="tableDataSort" style="width: 100%" v-if='isSort'>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="排队地址">
                <span>{{ props.row.queueAddress }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.queueNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="排队的备注地址">
                <span>{{ props.row.queueNotedAddress }}</span>
              </el-form-item>
              <el-form-item label="排队时间">
                <span>{{ props.row.queueTime |time}}</span>
              </el-form-item>
              <el-form-item label="排队时长">
                <span>{{ props.row.queueTimeLength }}</span>
              </el-form-item>
              <el-form-item label="跑腿费">
                <span>{{ props.row.runningFee }}</span>
              </el-form-item>
              <el-form-item label="备注留言">
                <span>{{ props.row.noteMessage }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="商品 ID" prop="qid"></el-table-column>
        <el-table-column  label="排队类型" prop="queueType"></el-table-column>
        <el-table-column  label="申请时间" prop="applyTime"></el-table-column>
        <el-table-column  label="状态" prop="status"></el-table-column>
        <el-table-column  label="是否完成订单" prop="isFinish"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import {allBuyInfo} from '../../plugins/api' //所有代买
=======
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
import {searchBuy} from '../../plugins/api' //搜索代买
import {searchPost} from '../../plugins/api' //搜索代送
import {searchGet} from '../../plugins/api' //搜索代取
import {searchSort} from '../../plugins/api' //搜索代排队
export default {
    name:'mainPage',
    data() {
      return {
        isBuy:true,
        isPost:false,
        isSort:false,
        isGet:false,
        kind: '',
        money: '',
        weight:'',
        time:'',
        tableDataBuy:[],
        tableDataPost:[],
        tableDataGet:[],
        tableDataSort: [],
    }
  },
<<<<<<< HEAD
  created(){
    var that = this
    allBuyInfo().then(function(res){
      var data = res.data.data
      that.tableDataBuy = data
      console.log(data)
    })
  },
=======
  // created(){
  //   console.log(this.$route.params.id)
  // },
>>>>>>> b65b59ab0d5449b2ee7bc59db5a5c251f9bad8a4
  methods:{
    //重置
    clear:function(){
      this.kind = '',
      this.money = '',
      this.weight = '',
      this.time = ''
    },
    //查询
    toSeach(){
      var that = this
      var kind = this.kind //搜索类型
      var price = this.money
      var weight = this.weight
      var dateLower = this.time[0] //开始时间
      var dateHigher = this.time[1] //结束时间
      console.log(price)
       console.log(weight)
        console.log(dateLower)
         console.log(dateHigher)
      if(kind == '代买'){
        searchBuy({
          price:price,
          weight:weight,
          dateLower:dateLower,
          dateHigher:dateHigher
        }).then(function(res){
          if(res.data.code == 'ok'){
            var data = res.data.data
            that.tableDataBuy = data
          }
          console.log(res)
        })
      }else if(kind == '代取'){
        searchGet({
          price:price,
          weight:weight,
          dateLower:dateLower,
          dateHigher:dateHigher
        }).then(function(res){
          if(res.data.code == 'ok'){
            var data = res.data.data
            that.tableDataGet = data
          }
          console.log(res)
        })
      }else if(kind == '代送'){
        searchPost({
          price:price,
          weight:weight,
          dateLower:dateLower,
          dateHigher:dateHigher
        }).then(function(res){
          if(res.data.code == 'ok'){
            var data = res.data.data
            that.tableDataPost = data
          }
          console.log(res)
        })
      }else if(kind == '代排队'){
        searchSort({
          price:price,
          weight:weight,
          dateLower:dateLower,
          dateHigher:dateHigher
        }).then(function(res){
          if(res.data.code == 'ok'){
            var data = res.data.data
            that.tableDataSoet = data
          }
          console.log(res)
        })
      }
      console.log(this.kind)
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
.bottom{
  width:100%;
  border:1px solid #eee;
  border-radius: 10px;
  padding:20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top:40px
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

>>>.demo-table-expand {
    font-size: 0;
  }
>>>.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
>>>.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
>>>.demo-table-expand label{
  width:110px
}
</style>