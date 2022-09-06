<template>
  <v-app>
    <v-main>
      <router-view />
      <p>hoge</p>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as api from "../../db-util/index";

export default defineComponent({
  name: "App",
});
</script>
