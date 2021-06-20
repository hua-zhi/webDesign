<template>
  <div class="sidebar">
    <el-row
      class="tac"
      v-for="(menu1, m1index) in menuList"
      :key="`m1-${m1index}`"
    >
      <el-col :span="12">
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(94 215 179)"
          text-color="#000"
          active-text-color="#36a886"
          v-if="menu1?.children.length > 0"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>{{ menu1.title }}</span>
            </template>
            <el-menu-item-group
              v-for="(menu2, m2index) in menu1.children"
              :key="`m2-${m2index}`"
            >
              <template #title></template>
              <el-menu-item index="`{m2index}`"
                ><i class="el-icon-menu"></i
                ><router-link :to="menu2?.path">{{
                  menu2.title
                }}</router-link></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <!-- <template v-for="(menu1, m1index) in menuList" :key="`m1-${m1index}`">
      <h3>{{ menu1.title }}</h3>
      <template v-if="menu1?.children.length > 0">
        <ul>
          <li v-for="(menu2, m2index) in menu1.children" :key="`m2-${m2index}`">
            <router-link :to="menu2?.path">{{ menu2.title }}</router-link>
          </li>
        </ul>
      </template>
    </template> -->
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const state: State = useStore().state;
    const menuList = state.menuList;

    return {
      menuList,
    };
  },
});
</script>
<style scoped>
.el-submenu .el-menu-item {
  color: aliceblue;
}
a {
  text-decoration: none;
  color: rgb(254, 255, 254);
  /* left: 0;
 
  background-color: rgb(164, 224, 216); */
}
/* a:hover {
  text-shadow: 2px;
  background-color: rgb(192, 229, 221);
} */
ul {
  list-style: none;
  width: 200px;
}

/* li {
  display: inline-block;
  width: 100%;
  padding: 10px;
  color: black;
  text-align: left;
  
} */
</style>
