<template>
  <v-main>
    <EasyDataTable
      :headers="headers"
      :items="items"
      class="elevation-1"
    ></EasyDataTable>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as api from "../../db-util/index";
import type { Header, Item } from "vue3-easy-data-table";

interface Result {
  id: number;
  score: number;
}

export default defineComponent({
  name: "Answer",
  data() {
    return {
      results: {} as number[],
    };
  },
  methods: {},
  mounted() {
    // ToDo: とりあえず動くように連想配列にした。indexを気にせずに使えるようにしたい。
    for (let i = 1; i < 4; i++) {
      api.getWaypointScore(1, 1, i).then((score: number) => {
        this.results[i] = score;
      });
    }
    console.dir(this.results);
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
          score: this.results[1],
        },
        {
          question: "",
          waypoint: "おばあちゃんからキャリアでの電話を拒否した",
          score: this.results[2],
        },
        {
          question: "",
          waypoint: "Lineから折り返しの電話をする",
          score: this.results[3],
        },
      ];
    },
  },
});
</script>
