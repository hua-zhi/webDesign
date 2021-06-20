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
<style scoped></style>
