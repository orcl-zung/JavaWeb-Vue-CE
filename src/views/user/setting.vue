<template>
  <div class="box">
    <div class="top">
      <div class="top_top">
        <span>您的基础信息</span>
      </div>
      <div class="top_bottom">
        <div class="item">
          <span>会员名</span>
          <span class="name">xxx</span>
        </div>
        <div class="item">
          <span>绑定手机:</span>
          <span class="opt">xxxxxxxxxxx</span>
          <span class="opt"><a href="">修改手机</a></span>
        </div>
         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'setting'
}
</script>

<style scoped>
a{
  text-decoration: none;
  color:rgb(39, 28, 184)
}
.box{
  width:100%;
  height:100%;
  padding:10px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.top{
  width:50%;
  height:100px;
  border:1px solid #eee;
  border-radius: 10px;
  padding:15px 25px;
}
.top_top{
  font-size: 18px;
  font-weight: bold;
}
.top_bottom{
  margin-left:20px;
  margin-top:10px;
  display: flex;
  flex-direction: column;

}
.item{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.name{
  margin-left:45px
}
.opt{
  margin-left:30px
}
</style>