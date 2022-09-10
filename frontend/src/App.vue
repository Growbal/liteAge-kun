<template>
  <v-app>
    <v-main>
      <MainHeader />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "./components/parts/MainHeader.vue";

export default defineComponent({
  name: "App",

  data() {
    return {};
  },

  mounted() {},
  components: {
    MainHeader,
  },
  methods: {},
  computed: {},
});
</script>
