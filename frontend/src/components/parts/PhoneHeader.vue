<template>
  <div>
    <v-toolbar height="35" color="rgb(0, 195, 0,0.5)" rounded=".rounded-b-0">
      <span class="ml-3">18:30</span>
      <v-spacer></v-spacer>
      <v-icon icon="mdi-wifi-strength-2" size="x-small" class="ml-2"></v-icon>
      <v-icon
        icon="mdi-signal-cellular-outline"
        size="x-small"
        class="ml-2"
      ></v-icon>
      <v-icon icon="mdi-battery" size="x-small" class="ml-2"></v-icon>
      <v-avatar></v-avatar>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
export default {
  name: "PhoneHeader",
};
</script>
