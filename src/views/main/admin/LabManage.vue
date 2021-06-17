<template>
  <div>
    <ul>
      <li v-for="(item, index) of LabList" :key="index">
        {{ item.id }} /{{ item.number }} /{{ item.machine }}/{{ item.choice }}
      </li>
    </ul>
  </div>
</template>
<script>
import { getLabList } from "@/api";
export default {
  data() {
    return {
      LabList: [],
    };
  },
  methods: {
    allLabList() {
      getLabList({}).then((res) => {
        if (res.sucess) {
          // 给data的allCityList 赋值接口数据
          this.LabList = res.data;
          console.log("Lablist", this.LabList);
        }
      });
    },
  },
  mounted() {
    // 页面挂在完毕后调用函数
    this.allLabList();
  },
};
</script>
