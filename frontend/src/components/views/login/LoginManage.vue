<template>
  <v-main>
    <v-row class="" justify="center">
      <v-col class="pa-6">
        <v-card class="mx-auto my-12" dark>
          <v-card-title>ユーザ一覧</v-card-title>
          <div style="padding: 50px">
            <EasyDataTable
              :headers="headers"
              :items="items"
              @click-row="showRow"
              table-class-name="customize-table"
            />
          </div>
          <v-card-actions>
            <v-row justify="center">
                <v-btn>csv変換</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="pa-1">
        <v-card>
          <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
          >
          </Bar>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { h } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface Props {
  header: Header;
  items: [];
  chartId: string;
  datasetIdKey: string;
  styles: Object;
  width?: number;
  height?: number;
  cssClasses: string;
  plugins: Object;
  
}

interface Emits {
  (e: "input", value: string): void;
}

// props defalt
const props = withDefaults(defineProps<Props>(), {
  chartId: "bar-chart",
  width: 600,
  height: 400,
  cssClasses: "",
});

const chartData = ref({
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "上位3名のスコア",
      data: [40, 20, 12],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
});
const chartOptions = ref({ responsive: true });

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Age", value: "age" },
  { text: "Score", value: "score" },
  { text: "Last Accessed", value: "lastaccessd" },
];

const items: Item[] = [
  { name: "hoge", age: 20, score: 80, lastaccessd: "2022/09/23 21:01:00" },
];
const showRow = (item: ClickRowArgument) => {
  // document.getElementById('row-clicked').innerHTML = JSON.stringify(item);
};

const getTotalScore = computed(()=>{
    api.getTotalScore(userId).then((score: number) => {
      this.totalScore = score;
    });
})


</script>

<script lang="ts">
import { defineComponent } from "vue";
import * as api from "../../../db-util/index";

export default defineComponent({
  name: "App",
});
</script>
<style>
.customize-table {
  --easy-table-body-item-padding: 10px 15px;
}
</style>
