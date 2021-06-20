<template>
  <div>
    <el-button plain type="sucess" @click="addItem"> 添加实验室 </el-button>
    <el-table
      row-key="date"
      ref="filterTable"
      :data="labList"
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
        prop="number"
        label="编号"
        width="180"
        sortable
        column-key="number"
      ></el-table-column>
      <el-table-column
        prop="machine"
        label="机器数量"
        width="180"
        sortable
        column-key="machine"
      ></el-table-column>
      <el-table-column
        prop="choice"
        label="可选状态"
        width="180"
        sortable
        column-key="choice"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="180"
        column-key="description"
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
    <!-- 删除对话框 -->
    <el-dialog
      title="删除"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>实验室删除后将无法复原，确定删除？</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
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
      dialogVisible: false,
      // removeItem,
      // addItem,
    };
  },
});
</script>
<style scoped>
.el-button {
  padding: 10px 25px;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
}
.rl-button:hover {
  background-color: rgb(24, 109, 69);
}
</style>
