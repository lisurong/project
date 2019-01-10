<template>
<el-container>
  <el-header height="80px">
    <el-col :span="6">HYBRID</el-col>
    <el-col :span="18">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-header>
  <ContentM></ContentM>
  <el-footer height="50px">Copyright © 2016.Company name All rights reserved.More Templates</el-footer>
 </el-container> 
</template>


<script>

import ContentM from './content.vue'

export default {
  name: 'Index',
  components: {
    ContentM
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header{
  background:rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
}
.el-menu{
  background: none;
  border: none;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  color:#fff;
}
.el-menu--horizontal>.el-submenu{

}
.el-footer{
  background: #4A4A4A;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  color:#fff;
  line-height: 50px;
}
</style>
