<template>
  <div>
    实验室管理
    <el-button type="primary">添加实验室</el-button>
    <ul>
      <li v-for="(item, index) of labList" :key="index">
        渲染/{{ item.id }} /{{ item.number }} /{{ item.machine }}/{{
          item.choice
        }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { LAB_LISTS } from "@/store/VuexTypes";
import { useStore } from "vuex";
import { State } from "@/store";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    store.dispatch(LAB_LISTS);
    const labList = computed(() => store.state.labList);
    return {
      labList,
    };
  },
});
</script>
