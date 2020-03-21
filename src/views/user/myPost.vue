<template>
  <el-table :data="tableData" style="width: 100%">
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
    <el-table-column  label="操作">
      <template slot-scope="props">
        <el-button  size="mini" @click="handleEdit(props.$index, props.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
import {myPost} from '../../plugins/api' //我发布的代买
export default {
  name:'myPost',
  created(){
    var id = JSON.parse(sessionStorage.getItem('id')) //用户id
    if(id){
      myPost({releaseUserId:id}).then(res=>{
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
/* >>> .el-table td, .el-table th.is-leaf{
  text-align: center;
}
>>>.demo-table-expand{
  text-align: left;
} */
</style>