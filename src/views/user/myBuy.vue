<template>
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
        <el-button size="mini" @click="handleEdit(props.$index, props.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
import {myBuy} from '../../plugins/api' //我发布的代买
export default {
  name:'myBuy',
  created(){
    var id = JSON.parse(sessionStorage.getItem('id')) //用户id
    if(id){
      myBuy({releaseUserId:id}).then(res=>{
        var data = res.data.data
        this.tableData = data
        console.log(res)
      })
    }
  },
  data() {
    return {
      tableData: [], //用来存储所有发布信息
      multipleSelection: [],

    }
  },
  methods: {
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
      console.log(index, row);
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
/* >>>.el-table th.is-leaf{
  text-align: center;
}
>>> tody .demo-table-expand{
  text-align: left;
} */
</style>