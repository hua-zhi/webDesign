<template>
  <div>教师管理</div>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) of teacherlist" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.tel }}</td>
        <td>{{ item.email }}</td>
        <td>
          <button
            type="button"
            class="button delButton"
            size="mini"
            @click="removeItem(index)"
            title="删除"
          >
            删除
          </button>
        </td>
      </tr>
    </thead>
  </table>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { USER_LISTS } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    store.dispatch(USER_LISTS);
    const teacherlist = computed(() => store.state.userList);
    return {
      teacherlist,
    };
  },
});
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
table th,
table td {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}
button {
  background-color: #23a182;
  color: white;
  padding: 10px 25px;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
}
button:hover {
  background-color: rgb(24, 109, 69);
}
</style>
