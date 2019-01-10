<template>
 <el-container>
    <el-aside></el-aside>
    <el-main></el-main>
  </el-container> 
</template>

<script>
export default {
  name: 'content'
}
</script>

<style>
.el-aside{
    background: #32C2CD;
    position: absolute;
    bottom: 60px;
    height: 100%;
    top: 0;
    z-index: 1;
}
</style>
