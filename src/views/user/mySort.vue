<template>
<div>
  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="120"></el-table-column>
    <el-table-column prop="id" label="序号" width="150"></el-table-column>
    <el-table-column prop="title" label="标题" width="250"></el-table-column>
    <el-table-column prop="place" label="地点" width="300"></el-table-column>
    <el-table-column prop="validTime" label="时效" width="200"></el-table-column>
    <el-table-column  label="申请时间" width="150">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="weight" label="重量" width="150"></el-table-column>
    <el-table-column prop="status" label="状态" width="150"></el-table-column>
    <el-table-column prop="isFinish" label="是否完成订单" width="150"></el-table-column>
    <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column> -->
  </el-table>
  <!-- <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div> -->
  </div>
</template>

<script>
export default {
    name:'mySort',
     data() {
      return {
        tableData: [{
          id:1,
          title:'衣服',
          place:'学校',
          validTime:'两小时',
          date: '2016-05-03',
          weight:'2KG',
          status: '未完成',
          isFinish: '未完成'
        }],
        multipleSelection: []
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
      }
    }
}
</script>

<style scoped>
.el-table--enable-row-transition .el-table__body td{
  text-align: center;
}
.el-table td, .el-table th.is-leaf{
  text-align: center;
}
</style>