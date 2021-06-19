<template>
  <div class="container">
    <p>实验室预约</p>
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
        <button class="select">查询</button>
      </div>
    </div>
    <div class="table">
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
                title="申请"
              >
                申请
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { LabLists } from "@/role/LabLists";
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
<style scoped>
.big {
  display: flex;
}
.item {
  display: inline-block;
  padding: 10px;
  margin: 10px;
}
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
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
}
button:hover {
  background-color: rgb(24, 109, 69);
}
</style>
