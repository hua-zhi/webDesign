<template>
  <el-container class="container">
    <el-header class="header">
      <img src="@/assets/logo.png" alt class="image" />
      <span>实验室管理系统</span>
      <!-- <button size="mini" style="right: 10px">退出</button> -->
    </el-header>
    <el-container>
      <el-aside width="200px"> <sidebar /> </el-aside>
      <el-container>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/main/Sidebar.vue";

export default defineComponent({
  components: { sidebar },
});
</script>
<style scoped>
.header {
  background-color: #36a886;
  display: inline-block;
  width: 100%;
  height: 80px !important;
  justify-content: space-between;
}
.header span {
  position: absolute;
  margin: 0 250px;
  top: 30px;
  font-size: 30px;
  color: white;
}

/*
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 300px;
}
.el-main {
  background-color: #a3e9cc;
  color: #333;
  text-align: center;
  line-height: 160px;
} */
</style>
