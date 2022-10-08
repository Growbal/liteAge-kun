<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
import { ref, onMounted, onBeforeMount } from "vue";
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
  chartId: string;
  datasetIdKey: string;
  styles: Object; // eslint-disable-line @typescript-eslint/ban-types
  width?: number;
  height?: number;
  cssClasses: string;
  plugins: Object; // eslint-disable-line @typescript-eslint/ban-types
}
interface UserJson {
  [key: string]: UserInfo;
}
interface UserInfo {
  name: string;
  age?: number;
  score?: number;
  lastaccessd: string;
}
interface Emits {
  (e: "input", value: string): void;
}

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

let total_score: any;

onBeforeMount(async () => {
  const mockItems: Item[] = [];
  const chartUsers = [];
  const chartScores = [];
  await api.getUsers().then((score) => {
    total_score = score;
  });
  for (let i = 0; i < 2; i++) {
    mockItems.push({
      name: total_score[i].name,
      age: 0,
      score: 0,
      lastaccessd: total_score[i].updated_at,
    });
    chartUsers.push(total_score[i].name);
    chartScores.push(10);
  }
  items.value = mockItems;
  chartData.value.labels = chartUsers;
  chartData.value.datasets[0].data = chartScores;
});
const items = ref<Item[]>([]);
const showRow = (item: ClickRowArgument) => {
  // document.getElementById('row-clicked').innerHTML = JSON.stringify(item);
};
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
