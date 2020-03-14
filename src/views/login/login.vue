<template>
  <div class="box">
    <div class="login">
        <router-view />
    </div>
  </div>
</template>

<script>
export default {
    name:'loginPage',
}
</script>

<style scoped>
.box{
    width:100%;
    height:100%;
    background-image: url(../../assets/2.jpg);
    background-size: 100% 100%;
    background-repeat: repeat-x;
    position: fixed;
}
.login{
    position: absolute;
    top:50%;
    right:200px;
    transform: translate(0,-50%);
}
</style>