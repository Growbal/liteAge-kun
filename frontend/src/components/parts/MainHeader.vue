<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon color="white">≡</v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>liteAge-kun</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: "MainHeader",
};
</script>
