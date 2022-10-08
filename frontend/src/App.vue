<script lang="ts" setup>
import MainHeader from "./components/parts/MainHeader.vue";
</script>

<template>
  <v-app>
    <v-main>
      <MainHeader />
      <router-view />
    </v-main>
  </v-app>
</template>
