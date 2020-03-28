<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="所有用户" name="first">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户头像">
                <img v-if='props.row.userAvatar' :src='props.row.userAvatar' class="avatar"/>
                <span v-else>无</span>
              </el-form-item>
              <el-form-item label="用户密码">
                <span>{{ props.row.userPassword }}</span>
              </el-form-item>
              <el-form-item label="一句话介绍">
                <span>{{ props.row.userIntroduce }}</span>
              </el-form-item>
              <el-form-item label="手机号码">
                <span>{{ props.row.userPhone }}</span>
              </el-form-item>
              <el-form-item label="个人简介">
                <span>{{ props.row.userAbtract }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="用户 ID" prop="userId"></el-table-column>
        <el-table-column  label="用户名称" prop="userName"></el-table-column>
        <el-table-column  label="年龄" prop="userAge"></el-table-column>
        <el-table-column  label="性别" prop="userGender"></el-table-column>
        <el-table-column  label="用户真实姓名" prop="userRealName"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="props">
            <el-button size="mini" @click="handleEdit(props.$index, props.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="未删除用户" name="second">
      <el-table :data="tableDataTwo" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户头像">
                <img v-if='props.row.userAvatar' :src='props.row.userAvatar' class="avatar"/>
                <span v-else>无</span>
              </el-form-item>
              <el-form-item label="用户密码">
                <span>{{ props.row.userPassword }}</span>
              </el-form-item>
              <el-form-item label="一句话介绍">
                <span>{{ props.row.userIntroduce }}</span>
              </el-form-item>
              <el-form-item label="手机号码">
                <span>{{ props.row.userPhone }}</span>
              </el-form-item>
              <el-form-item label="个人简介">
                <span>{{ props.row.userAbtract }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="用户 ID" prop="userId"></el-table-column>
        <el-table-column  label="用户名称" prop="userName"></el-table-column>
        <el-table-column  label="年龄" prop="userAge"></el-table-column>
        <el-table-column  label="性别" prop="userGender"></el-table-column>
        <el-table-column  label="用户真实姓名" prop="userRealName"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="props">
            <el-button size="mini" @click="handleEdit(props.$index, props.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="已删除用户" name="third">
      <el-table :data="tableDataThree" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户头像">
                <img v-if='props.row.userAvatar' :src='props.row.userAvatar' class="avatar"/>
                <span v-else>无</span>
              </el-form-item>
              <el-form-item label="用户密码">
                <span>{{ props.row.userPassword }}</span>
              </el-form-item>
              <el-form-item label="一句话介绍">
                <span>{{ props.row.userIntroduce }}</span>
              </el-form-item>
              <el-form-item label="手机号码">
                <span>{{ props.row.userPhone }}</span>
              </el-form-item>
              <el-form-item label="个人简介">
                <span>{{ props.row.userAbtract }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column  label="用户 ID" prop="userId"></el-table-column>
        <el-table-column  label="用户名称" prop="userName"></el-table-column>
        <el-table-column  label="年龄" prop="userAge"></el-table-column>
        <el-table-column  label="性别" prop="userGender"></el-table-column>
        <el-table-column  label="用户真实姓名" prop="userRealName"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="props">
            <!-- <el-button size="mini" @click="handleEdit(props.$index, props.row)">编辑</el-button> -->
            <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">恢复</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
  

</template>

<script>
import {deleteUser} from '../../plugins/api' //管理员删除用户
import {allUser} from '../../plugins/api' //所有用户
import {unDeleteUser} from '../../plugins/api' //未删除用户
import {deletedUser} from '../../plugins/api' //已删除用户
export default {
    name:'userManager',
    data(){
      return{
        activeName: 'first',
        tableData: [], //所有用户
        tableDataTwo:[], //未删除用户
        tableDataThree:[], //已删除用户
        multipleSelection: [],
      }
    },
    created(){
        allUser().then(res=>{
            var data = res.data.data
            this.tableData = data
            console.log(res)
        })
    },
    methods: {
      //点击tab
      handleClick(tab, event) {
        var that = this
        var name = tab.name
        if(name == 'first'){
          //获取所有用户
          allUser().then(res=>{
            if(res.data.code == 'ok'){
              var data = res.data.data
              that.tableData = data
              console.log(res)
            }else{
              that.$message({
                type: 'error',
                message: '获取用户信息失败'
              });
            }
          })
        }else if(name == 'second'){
          //未删除用户
          unDeleteUser().then(function(res){
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
          //已删除用户
          deletedUser().then(function(res){
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
</style>