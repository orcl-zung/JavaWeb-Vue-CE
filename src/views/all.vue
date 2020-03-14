<template>
  <div class="box">
        <table>
            <caption>thrift服务监控</caption>
            <thead>
                <td>名称</td>
                <td>IP地址</td>
                <td>端口</td>
                <td>状态</td>
            </thead>
            <tbody>
                <tr v-for='(item,index) in list' :key='index'>
                    <td>{{item.thriftName}}</td>
                    <td>{{item.thriftIp}}</td>
                    <td>{{item.thriftPort}}</td>
                    <td class="normal" v-if="item.status == '正常'">{{item.status}}</td>
                    <td class="abnormal" v-if="item.status == '异常'">{{item.status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {allData} from '../plugins/api'
export default {
    name:'all',
    data() {
        return {
            list:[],
            timer:'',
            isNormal:true,
            isAbnormal:false
        }
    },
    methods:{
        getData:function(){
            var that = this
            allData().then(function(res){
                var data = res.data.data
                that.list = data
                console.log(data)
            })
        }
    },
    created: function () {
        setInterval(this.getData, 30000);
        this.getData()
    },
    
}
</script>

<style>
table{
    width:100%;
    border-collapse: collapse;
    border:1px solid #ddd;
    text-align: center;
    font-size: 15px;
}
/* 标题 */
caption{
    font-size: 20px;
    font-weight: bold;
    margin-top:20px;
    margin-bottom:20px;
}
/* 表格行 */
tr,td{
    border:1px solid #ddd;
    height:40px;
    line-height: 40px;
}
/* 表头的背景 */
thead td{
    background-color:rgb(239, 239, 247);
}
/* 状态为正常时 */
.normal{
    color:green;
    position: relative;
}
.normal::before{
    content: '';
    border-radius: 10px;
    border:4px solid green;
    position: absolute;
    left:35%;
    top:40%;
}
/* 状态为异常时 */
.abnormal{
    color:red;
    position: relative;
}
.abnormal::before{
    content: '';
    border-radius: 10px;
    border:4px solid red;
    position: absolute;
    left:35%;
    top:40%;
}
/* 表格内容的字体 */
tr td{
    color:gray;
}
</style>