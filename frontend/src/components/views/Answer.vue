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

// let score: number;

export default defineComponent({
  name: "Answer",
  data() {
    return {
      score: 0 as number,
    };
  },
  methods: {},
  mounted() {
    api.getWaypointScore(1, 1, 1).then((result: number) => {
      this.score = result;
    });
  },
  computed: {
    headers: function () {
      return [
        { text: "大項目", value: "question" },
        { text: "項目", value: "waypoint" },
        { text: "点数", value: "score", sortable: true },
      ];
    },
    items: function () {
      return [
        {
          question: "LINE",
          waypoint: "おばあちゃんとテキストのやりとりができている",
          score: this.score,
        },
      ];
    },
  },
});
</script>
