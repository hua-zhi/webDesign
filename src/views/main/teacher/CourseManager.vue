<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      @cell-click="cClick"
      :cell-style="cStyle"
    >
      <el-table-column :label="tableLabel" align="center ">
        <el-table-column
          prop="daytime"
          label=""
          fixed
          align="center"
          width="60"
        ></el-table-column>
        <el-table-column
          prop="time"
          label=""
          fixed
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column :index="1" prop="Monday" label="星期一" align="center">
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Monday.name }} &nbsp;<br />
              {{ scope.row.Monday.classes }} &nbsp;
              {{ scope.row.Monday.population }}<br />
              {{ scope.row.Monday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Monday"></div>
          </template>
        </el-table-column>
        <el-table-column
          :index="2"
          prop="Tuesday"
          label="星期二"
          align="center"
        >
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Tuesday.name }} &nbsp;<br />
              {{ scope.row.Tuesday.classes }} &nbsp;
              {{ scope.row.Tuesday.population }}<br />
              {{ scope.row.Tuesday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Tuesday"></div>
          </template>
        </el-table-column>
        <el-table-column
          :index="3"
          prop="Wednesday"
          label="星期三"
          align="center"
        >
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Wednesday.name }} &nbsp;<br />
              {{ scope.row.Wednesday.classes }} &nbsp;
              {{ scope.row.Wednesday.population }}<br />
              {{ scope.row.Wednesday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Wednesday"></div>
          </template>
        </el-table-column>
        <el-table-column
          :index="4"
          prop="Thursday"
          label="星期四"
          align="center"
        >
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Thursday.name }} &nbsp;<br />
              {{ scope.row.Thursday.classes }} &nbsp;
              {{ scope.row.Thursday.population }}<br />
              {{ scope.row.Thursday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Thursday"></div>
          </template>
        </el-table-column>
        <el-table-column :index="5" prop="Friday" label="星期五" align="center">
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Friday.name }} &nbsp;<br />
              {{ scope.row.Friday.classes }} &nbsp;
              {{ scope.row.Friday.population }}<br />
              {{ scope.row.Friday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Friday"></div>
          </template>
        </el-table-column>
        <el-table-column
          :index="6"
          prop="Saturday"
          label="星期六"
          align="center"
        >
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Saturday.name }} &nbsp;<br />
              {{ scope.row.Saturday.classes }} &nbsp;
              {{ scope.row.Saturday.population }}<br />
              {{ scope.row.Saturday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Saturday"></div>
          </template>
        </el-table-column>
        <el-table-column :index="7" prop="Sunday" label="星期日" align="center">
          <template v-slot="scope">
            <div v-if="!custom">
              {{ scope.row.Sunday.name }} &nbsp;<br />
              {{ scope.row.Sunday.classes }} &nbsp;
              {{ scope.row.Sunday.population }}<br />
              {{ scope.row.Sunday.software }}
            </div>
            <div v-if="custom" v-html="scope.row.Sunday"></div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      item: "",
      courseDialog: false,
      tableData: [
        {
          index: 1,
          daytime: "上午",
          time: "第一节",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        {
          index: 2,
          daytime: "上午",
          time: "第二节",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        {
          index: 3,
          daytime: "下午",
          time: "第三节",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        {
          index: 4,
          daytime: "下午",
          time: "第四节",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        {
          index: 5,
          daytime: "晚上",
          time: "第五节",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      ],
    };
  },
});
</script>
