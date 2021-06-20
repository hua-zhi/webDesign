<template>
  <div>
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
          <el-button
            size="mini"
            type="danger"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <!-- @click="handleDelete(scope.$index, labinfolist, scope.row)" -->
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 删除对话框 -->
    <!-- <el-dialog
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
    </el-dialog> -->
    <!-- 编辑对话框 -->
    <el-dialog title="修改信息" v-model="dialogFormVisible">
      <el-form :model="update">
        <el-form-item label="实验室编号" :label-width="formLabelWidth">
          <el-input v-model="update.number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="机器数量" :label-width="formLabelWidth">
          <el-input v-model="update.machine" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="可选状态" :label-width="formLabelWidth">
          <el-input v-model="update.choice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述信息" :label-width="formLabelWidth">
          <el-input v-model="update.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button plain type="primary" @click="updateEdit()"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { LAB_LISTS, ADD_LAB, UPDATE_LAB, DELETE_LAB } from "@/store/VuexTypes";
import { useStore } from "vuex";
import { State } from "@/store";
import { Lab } from "@/role/Menu";
import { LabLists } from "@/role/LabLists";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    store.dispatch(LAB_LISTS);
    const labList = computed(() => store.state.labList);
    const update = ref<Lab>();
    const dialogFormVisible = ref(false);
    const handleEdit = (index: any, row: any) => {
      console.log("handleEdit");
      update.value = {
        id: row.id,
        number: row.number,
        machine: row.machine,
        choice: row.choice,
        description: row.description,
      } as Lab;
      dialogFormVisible.value = true;
    };
    const updateEdit = () => {
      console.log(update.value);
      store.dispatch(UPDATE_LAB, update.value);
      dialogFormVisible.value = false;
    };
    const handleDelete = (index: any, rows: any, row: any) => {
      console.log(rows);
      const r = window.confirm("此操作将永久删除，是否继续？");
      if (r == true) {
        setTimeout(() => {
          rows.splice(index, 1);
        }, 500);
        store.dispatch(DELETE_LAB, row.id);
      }
    };
    return {
      labList,
      dialogVisible: false,
      handleEdit,
      updateEdit,
      handleDelete,
      dialogFormVisible,
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
