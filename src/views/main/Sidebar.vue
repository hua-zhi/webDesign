<template>
  <div class="sidebar">
    <template v-for="(menu1, m1index) in menuList" :key="`m1-${m1index}`">
      <h3>{{ menu1.title }}</h3>
      <template v-if="menu1?.children.length > 0">
        <ul>
          <li v-for="(menu2, m2index) in menu1.children" :key="`m2-${m2index}`">
            <router-link :to="menu2?.path">{{ menu2.title }}</router-link>
          </li>
        </ul>
      </template>
    </template>
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
.sidebar {
  background-color: rgb(234, 243, 241);
}
a {
  text-decoration: none;
  left: 0;
  color: rgb(12, 11, 11);
  background-color: rgb(164, 224, 216);
}
a:hover {
  text-shadow: 2px;
  background-color: rgb(192, 229, 221);
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  padding: 10px;
  color: black;
  text-align: left;
  margin: 10px 0;
}
</style>
