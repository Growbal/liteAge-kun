<template>
  <v-col cols="3">
    <v-card class="pa-2 ma-1" :height="'78vh'" outlined tile>
      <div class="">
        <v-card-title>問題1</v-card-title>
        <v-card-text
          >おばあちゃんに文章を送って、ありがとうの連絡を貰おう</v-card-text
        >
      </div>
      <v-card-actions>
        <v-btn color="red">ヒント</v-btn>
      </v-card-actions>
      <div>
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
              <v-btn color="primary" text @click="dialog = false">
                いいえ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
<style></style>
