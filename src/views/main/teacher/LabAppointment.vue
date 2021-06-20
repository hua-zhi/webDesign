<template>
  <div class="container">
    <div class="big">
      <div class="item">
        学期：<select id="one" class="form-control" name="site">
          <option value="1">2020-2021-1</option>
          <option value="2">2020-2021-2</option>
          <option value="3">2021-2022-1</option>
          <option value="4">2021-2022-2</option>
          <option value="5">2022-2023-1</option>
          <option value="6">2022-2023-2</option></select
        >至<select id="two" class="form-control" name="site2">
          <option value="1">2020-2021-1</option>
          <option value="2">2020-2021-2</option>
          <option value="3">2021-2022-1</option>
          <option value="4">2021-2022-2</option>
          <option value="5">2022-2023-1</option>
          <option value="6">2022-2023-2</option>
        </select>
      </div>
      <!-- <div class="item">
      实验室:<select v-model="value" placeholder="-请选择-">
        <option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
        </option>
      </select>
    </div> -->
      <div class="item">
        人数:<select name="number" id="number">
          <option value="1">=</option>
          <option value="2">></option>
          <option value="3">=</option></select
        ><input type="text" class="number" size="mini" />
      </div>
      <div class="item">
        周次:<select name="weeks">
          <option value="1">第1周</option>
          <option value="2">第2周</option>
          <option value="3">第3周</option>
          <option value="4">第4周</option>
          <option value="5">第5周</option>
          <option value="6">第6周</option>
          <option value="7">第7周</option>
          <option value="8">第8周</option>
          <option value="9">第9周</option>
          <option value="10">第10周</option>
          <option value="11">第11周</option>
          <option value="12">第12周</option>
          <option value="12">第13周</option>
          <option value="13">第14周</option>
          <option value="14">第15周</option>
          <option value="15">第16周</option>
          <option value="16">第17周</option>
          <option value="17">第18周</option>
          <option value="18">第19周</option></select
        >至<select name="weeks">
          <option value="1">第1周</option>
          <option value="2">第2周</option>
          <option value="3">第3周</option>
          <option value="4">第4周</option>
          <option value="5">第5周</option>
          <option value="6">第6周</option>
          <option value="7">第7周</option>
          <option value="8">第8周</option>
          <option value="9">第9周</option>
          <option value="10">第10周</option>
          <option value="11">第11周</option>
          <option value="12">第12周</option>
          <option value="13">第13周</option>
          <option value="14">第14周</option>
          <option value="15">第15周</option>
          <option value="16">第16周</option>
          <option value="17">第17周</option>
          <option value="18">第18周</option>
          <option value="19">第19周</option>
        </select>
      </div>
      <div class="item">
        星期:<select name="week" id="week">
          <option value="1">一</option>
          <option value="2">二</option>
          <option value="3">三</option>
          <option value="4">四</option>
          <option value="5">五</option>
          <option value="6">六</option>
          <option value="7">日</option></select
        >至<select name="week" id="week">
          <option value="1">一</option>
          <option value="2">二</option>
          <option value="3">三</option>
          <option value="4">四</option>
          <option value="5">五</option>
          <option value="6">六</option>
          <option value="7">日</option>
        </select>
      </div>
      <div class="item">
        节次<select name="section" id="section">
          <option value="1">第1节</option>
          <option value="2">第2节</option>
          <option value="3">第3节</option>
          <option value="4">第4节</option>
          <option value="5">第5节</option>
          <option value="6">第6节</option>
          <option value="7">第7节</option>
          <option value="8">第8节</option>
          <option value="9">第9节</option>
          <option value="10">第10节</option>
          <option value="11">第11节</option>
          <option value="12">第12节</option></select
        >至<select name="section" id="section">
          <option value="1">第1节</option>
          <option value="2">第2节</option>
          <option value="3">第3节</option>
          <option value="4">第4节</option>
          <option value="5">第5节</option>
          <option value="6">第6节</option>
          <option value="7">第7节</option>
          <option value="8">第8节</option>
          <option value="9">第9节</option>
          <option value="10">第10节</option>
          <option value="11">第11节</option>
          <option value="12">第12节</option>
        </select>
      </div>
      <div class="item">
        <el-button plain type="success" class="select">查询</el-button>
      </div>
    </div>
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
          <el-button
            size="mini"
            type="success"
            :disabled="!result"
            @click="appointmant(scope.$index, scope.row)"
          >
            预约
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table"></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { LabLists } from "@/role/LabLists";
import { LAB_LISTS } from "@/store/VuexTypes";
import { useStore } from "vuex";
import { State } from "@/store";
export default defineComponent({
  setup() {
    const store = useStore<State>();
    store.dispatch(LAB_LISTS);
    const labList = computed(() => store.state.labList);
    const result = ref(true);
    const appointmant = () => {
      console.log("appointmant");
      alert("预约成功");
    };
    // const appointmant =
    return {
      labList,
      result,
      appointmant,
    };
  },
});
</script>
<style scoped>
.item {
  display: inline-block;
  padding: 10px;
  margin: 10px;
}
</style>
