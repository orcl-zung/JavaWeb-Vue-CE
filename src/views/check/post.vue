<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="待审核" name="first">
      <el-table :data="tableData" style="width: 100%">
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
      <el-table-column  label="操作">
        <template slot-scope="props">
          <el-button size="mini" @click="handlePass(props.$index, props.row)">通过</el-button>
          <el-button size="mini" type="danger" @click="handleunPass(props.$index, props.row)">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-tab-pane>
    <el-tab-pane label="审核通过" name="second">
      <el-table :data="tableDataTwo" style="width: 100%">
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
      <el-table-column  label="操作">
        <template slot-scope="props">
          <!-- <el-button size="mini" @click="handleEdit(props.$index, props.row)">通过</el-button> -->
          <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-tab-pane>
    <el-tab-pane label="审核未通过" name="third">
      <el-table :data="tableDataThree" style="width: 100%">
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
      <el-table-column  label="操作">
        <template slot-scope="props">
          <!-- <el-button size="mini" @click="handleEdit(props.$index, props.row)">通过</el-button> -->
          <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-tab-pane>
  </el-tabs>
  

</template>

<script>
import {unpassPost} from '../../plugins/api' //审核不通过
import {passPost} from '../../plugins/api' //审核通过
import {uncheckPost} from '../../plugins/api' //管理员未审核订单
import {checkPasPost} from '../../plugins/api' //管理员审核通过订单
import {checkunPasPost} from '../../plugins/api' //管理员审核未通过订单
export default {
    name:'post',
    data(){
      return{
        activeName: 'first',
        tableData: [], //未审核
        tableDataTwo:[], //审核通过
        tableDataThree:[], //审核未通过
        multipleSelection: [],
      }
    },
    created(){
      var that = this
      uncheckPost().then(res=>{
        if(res.data.code == 'ok'){
          var data  = res.data.data
          that.tableData = data
        }else{
          that.$message({
            type: 'error',
            message: '获取订单信息失败'
          });
        }
        console.log(res)
      })
    },
    methods: {
      //通过审核
      handlePass(index, row) {
        var that = this
        var userid = JSON.parse(sessionStorage.getItem('id')) //用户id
        var id = row.bid
        this.$confirm('确定通过该信息的审核吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          passPost({
            releaseUserId:userid,
            bid:id
          }).then(function(res){
            if(res.data.code == 'ok'){
              that.$message({
                type: 'success',
                message: '审核完成'
              }); 
              //未审核的信息
              uncheckPost().then(res=>{
                if(res.data.code == 'ok'){
                  var data  = res.data.data
                  that.tableData = data
                }else{
                  that.$message({
                    type: 'error',
                    message: '获取订单信息失败'
                  });
                }
                console.log(res)
              })
            }else{
              that.$message({
                type: 'error',
                message: '审核失败'
              });  
            }
            console.log(res)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消审核'
          });          
        });
      },

      //不通过审核
      handleunPass(index, row) {
        var that = this
        var userid = JSON.parse(sessionStorage.getItem('id')) //用户id
        var id = row.bid
        this.$confirm('确定不通过该信息的审核吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          unpassPost({
            releaseUserId:userid,
            bid:id
          }).then(function(res){
            if(res.data.code == 'ok'){
              that.$message({
                type: 'success',
                message: '审核完成'
              });  
              //未审核的信息
              uncheckPost().then(res=>{
                if(res.data.code == 'ok'){
                  var data  = res.data.data
                  that.tableData = data
                }else{
                  that.$message({
                    type: 'error',
                    message: '获取订单信息失败'
                  });
                }
                console.log(res)
              })
            }else{
              that.$message({
                type: 'error',
                message: '审核失败'
              });  
            }
            console.log(res)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消审核'
          });          
        });
      },
      //点击tab
      handleClick(tab, event) {
        var that = this
        var name = tab.name
        if(name == 'first'){
          //未审核
          uncheckPost().then(res=>{
            if(res.data.code == 'ok'){
              var data  = res.data.data
              that.tableData = data
            }else{
              that.$message({
                type: 'error',
                message: '获取订单信息失败'
              });
            }
            console.log(res)
          })
        }else if(name == 'second'){
          //审核通过
          checkPasPost().then(function(res){
            if(res.data.code == 'ok'){
              var data = res.data.data
              that.tableDataTwo = data
            }else{
              that.$message({
                type: 'error',
                message: '获取用户信息失败'
              });
            }
          })
        }else if(name == 'third'){
          //审核未通过
          checkunPasPost().then(function(res){
            if(res.data.code == 'ok'){
              var data = res.data.data
              that.tableDataThree = data
            }else{
              that.$message({
                type: 'error',
                message: '获取用户信息失败'
              });
            }
            console.log(res)
          })
        }
        console.log(tab.name);
      },
      toggleSelection(rows) {
        if (rows) {
            rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
            });
        } else {
            this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        var that = this
        var userid = row.userId
        this.$confirm('确定删除该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteUser({userId:userid}).then(function(res){
            if(res.data.code == 'ok'){
              that.$message({
                type: 'success',
                message: '删除成功!'
              });
            }else{
              that.$message({
                type: 'error',
                message: '操作失败，请稍后尝试'
              });
            }
            console.log(res)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
        console.log(row.userId);
      }
  }
}
</script>

<style scoped>
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
>>>.el-tabs__item{
  width:33.3%;
  text-align: center;
}
>>>.el-tabs__active-bar{
  width:33.3%
}
>>>.el-tabs__nav{
  width:100%;
}
/* 头像 */
.avatar{
  width:50px;
  height:50px;
  border-radius: 50%;
}
>>>.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  border-bottom-color:#409EFF
}
</style>