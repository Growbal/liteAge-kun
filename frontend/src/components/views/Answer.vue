<template>
  <v-main>
    <EasyDataTable
      :headers="headers"
      :items="items"
      class="elevation-1"
    ></EasyDataTable>
    <div class="d-flex justify-center pa-5">合計：{{ totalScore }}点</div>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as api from "../../db-util/index";
import type { Header, Item } from "vue3-easy-data-table";

const userId = 1;
const questoinId = 1;
const waypointStatusMaximum = 3;

export default defineComponent({
  name: "Answer",
  data() {
    return {
      waypointScores: {} as number[],
      totalScore: 0 as number,
    };
  },
  methods: {},
  mounted() {
    // ToDo: とりあえず動くように連想配列にした。indexを気にせずに使えるようにしたい。
    for (let i = 1; i < waypointStatusMaximum + 1; i++) {
      api.getWaypointScore(userId, questoinId, i).then((score: number) => {
        this.waypointScores[i] = score;
      });
    }
    api.getTotalScore(userId).then((score: number) => {
      this.totalScore = score;
    });
  },
  computed: {
    headers: function (): Header[] {
      return [
        { text: "大項目", value: "question" },
        { text: "項目", value: "waypoint" },
        { text: "点数", value: "score", sortable: true },
      ];
    },

    items: function (): Item[] {
      return [
        {
          question: "LINE",
          waypoint: "おばあちゃんとテキストのやりとりができている",
          score: this.waypointScores[1],
        },
        {
          question: "",
          waypoint: "おばあちゃんからキャリアでの電話を拒否した",
          score: this.waypointScores[2],
        },
        {
          question: "",
          waypoint: "Lineから折り返しの電話をする",
          score: this.waypointScores[3],
        },
      ];
    },
  },
});
</script>
