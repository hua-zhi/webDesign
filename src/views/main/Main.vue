<template>
  <el-container>
    <el-header><h1>东北林业大学实验室管理系统</h1></el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar />
      </el-aside>
      <el-container>
        <el-main><router-view /></el-main>
        <el-footer>通讯地址:和兴路26号</el-footer>
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
