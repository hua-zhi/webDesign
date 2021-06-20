<template>
  <el-button plain type="success" @click="addItem"> 添加教师 </el-button>
  <el-table
    row-key="date"
    ref="filterTable"
    :data="teacherlist"
    height="500px"
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      label="序号"
      width="180"
      sortable
      column-key="id"
    ></el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
      sortable
      column-key="name"
    ></el-table-column>
    <el-table-column
      prop="tel"
      label="邮箱"
      width="180"
      sortable
      column-key="tel"
    ></el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="180"
      column-key="email"
    ></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button size="mini" type="danger" @click="dialogVisible = true">
          <!-- @click="handleDelete(scope.$index, labinfolist, scope.row)" -->
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
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
<style scoped></style>
