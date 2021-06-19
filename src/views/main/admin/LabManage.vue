<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>编号</th>
          <th>机器数量</th>
          <th>可选状态</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) of labList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.machine }}</td>
          <td>{{ item.choice }}</td>
          <td>{{ item.description }}</td>
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
    <button type="button" class="button addButton" @click="addItem">
      添加实验室
    </button>
    <!-- <ul>
      <li v-for="(item, index) of labList" :key="index">
        渲染/{{ item.id }} /{{ item.number }} /{{ item.machine }}/{{
          item.choice
        }}
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref } from "vue";
import { LAB_LISTS, ADD_LAB } from "@/store/VuexTypes";
import { useStore } from "vuex";
import { State } from "@/store";
import { Lab } from "@/role/Menu";
import { LabLists } from "@/role/LabLists";
function useLabList(Labs: Ref<Lab[]>) {
  const removeItem = (index: number) => {
    console.log(index);

    Labs.value.splice(index, 1);
  };
  return {
    removeItem,
  };
}
export default defineComponent({
  setup() {
    const store = useStore<State>();
    store.dispatch(LAB_LISTS);
    const labList = computed(() => store.state.labList);
    return {
      labList,
      // removeItem,
      // addItem,
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
