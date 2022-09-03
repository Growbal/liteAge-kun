<template>
  <v-app>
    <v-main>
      <router-view />
      <h1>ほげ</h1>
      <v-alert color="rgba(255, 0, 0, 0.5)" text="{{message}}"></v-alert>
      <v-badge></v-badge>
      <p>{{ message }}</p>
      <h2 :class="numberClass">{{ number }} {{ double }}</h2>
      <button @click="add(1)">+1</button> <button @click="add(10)">+10</button>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      message: "Hello Vue3",
      number: 12,
      double: 3,
    };
  },
  computed: {
    double() {
      return this.number * 2;
    },
    numberClass() {
      if (this.number > 50) {
        return "red";
      }

      return "blue";
    },
  },
  methods: {
    add(val: number) {
      this.number = this.number + val;
    },
  },
});
</script>
