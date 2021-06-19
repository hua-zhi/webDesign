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
        <el-footer class="footer">
          <el-card> 通讯地址 </el-card>
        </el-footer>
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-container {
  display: flex;
}
.header,
.footer {
  background-color: #1e886d;
  display: inline-block;
  line-height: 60px;
  width: 100%;
  justify-content: space-between;
}
.header span {
  position: absolute;
  padding: 15px;
  font-size: 30px;
  color: white;
}
.el-aside {
  background-color: #a3e9cc;
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
  flex: 1;
}
</style>
