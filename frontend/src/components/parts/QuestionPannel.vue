<template>
  <v-col cols="3">
    <v-card class="pa-2 ma-2" :height="'78vh'" outlined tile>
      <v-card-title>問題1</v-card-title>
      <v-card-text
        >おばあちゃんと会話して、ありがとうの連絡を貰おう</v-card-text
      >
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-btn color="red">ヒント</v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ isActive: on, props: attrs }">
          <v-card-actions>
            <v-btn v-bind="attrs" v-on:click="on" color="red"
              >問題を終了する</v-btn
            >
          </v-card-actions>
        </template>
        <v-card>
          <v-card-text>問題を終了しますか？</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="answerScreen"> はい </v-btn>
            <v-btn color="primary" text @click="dialog = false"> いいえ </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card-text></v-card-text>
      <v-card-text></v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "QuestionPannel",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    answerScreen: function () {
      this.dialog = false;
      this.$router.push("/Answer");
    },
  },
  props: {
    pannelheight: {
      type: String,
      default: "78vh",
    },
  },
};
</script>
