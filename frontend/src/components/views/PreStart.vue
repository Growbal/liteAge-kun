<template>
  <v-main>
    <v-row
      class="justify-center orange lighten-3 pa-1 ma-2"
      align-content="center"
    >
      <v-card>
        <v-card-title class="justify-center" primary-title>
          <p class="text-center">注意事項</p>
        </v-card-title>
        <v-list class="overflow-y-auto mx-auto my-10" max-height="200">
          <v-list-item v-for="item in items" :key="item.message">
            {{ item.message }}
          </v-list-item>
        </v-list>
        <!-- <v-card-actions  class="justify-center" >
                <v-btn >試験開始</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-row>
    <div>
      <v-row
        class="justify-center orange lighten-3 pa-1 ma-2"
        align-content="end"
      >
        <v-btn @click="click">テスト開始</v-btn>
      </v-row>
    </div>
  </v-main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PreStart",
  data() {
    return {
      items: [
        {
          message:
            "1. トラブルなどの理由によって、テストが中断してしまったときは、再ログインして受験し直してください。",
        },
        {
          message:
            "2. 回線の状況によっては、回答に切り替わるまでの時間が数分かかることがありますが、テスト時間には影響しませんのでご安心ください。",
        },
        {
          message:
            "3. 1問あたりの操作時間は約120分です。時間が過ぎると強制的に次の問題に移ります。なお最終問題の場合は強制的に採点画面に移り変わります。",
        },
        {
          message:
            "4. 実行操作であきらかな不要操作をした場合は、強制的に次の問題に移る可能性があります。",
        },
      ],
    };
  },
  methods: {
    click: function () {
      this.$router.push("/question/line");
    },
  },
});
</script>
