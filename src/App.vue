<template>
  <v-app>
    <v-main>
      <router-view />
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon color="white">≡</v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>liteAge-kun</v-app-bar-title>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <div class="d-flex justify-end pr-3">残り{{ timer }}秒</div>

      <div>
        <v-row align="start" no-gutters style="height: 800px">
          <v-col cols="3">
            <v-card class="pa-2 ma-2" outlined tile>
              <p class="pb-2">問題文</p>
              <p>お題</p>
              <p>おばあちゃんと会話しよう</p>
              <v-btn color="red">問題を終了する</v-btn>
            </v-card>
          </v-col>
          <v-col cols="9">

            <v-toolbar height="35" color="white">
              <v-spacer></v-spacer>  
              <v-icon icon="mdi-wifi-strength-2" size="x-small"  class="ml-2"></v-icon>
                <v-icon icon="mdi-signal-cellular-outline" size="x-small" class="ml-2"></v-icon>
                <v-icon icon="mdi-battery" size="x-small" class="ml-2"></v-icon>
                <span class="ml-2">18:30</span>
                <v-avatar></v-avatar>
            </v-toolbar>
            <div>
              <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                <v-toolbar-title>おばあちゃん</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn class="ml-1" variant="text" icon="mdi-magnify"></v-btn>
                <v-btn  class="ml-1" variant="text" icon="mdi-phone" @click="click">
                </v-btn>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </v-toolbar>
            </div>
            <div>     
            <v-toolbar v-show="show" >
              <v-col>
                <v-row>
                  <v-btn class="ml-4" variant="text" icon="mdi-phone"></v-btn>
                </v-row>
                <v-row>
                  <p class="text-caption">&nbsp;&nbsp;&nbsp;&nbsp;音声通話</p>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-row>
                  <v-btn class="ml-4" right="" variant="text" icon="mdi-video"></v-btn>
                </v-row>
                <v-row>
                  <p class="text-caption">&nbsp;&nbsp;ビデオ通話</p>
                </v-row>
              </v-col>
            </v-toolbar>
          </div>
            <v-card class="pa-2 ma-2" outlined tile>
              <v-layout class="justify-start pb-3" v-if="true">
                <v-avatar color="teal" size="56"></v-avatar>
                <v-card outlined color="rgb(239	239	239)">
                  <v-card-text>メッセージ</v-card-text>
                </v-card>
              </v-layout>
              <v-layout class="justify-end pb-3" v-if="true">
                <v-card outlined color="rgb(134	217	123)">
                  <v-card-text>メッセージ</v-card-text>
                </v-card>
              </v-layout>
            </v-card>
            <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
              <v-icon icon="mdi-plus" class="ml-3"></v-icon>
              <v-icon icon="mdi-camera" class="ml-3"></v-icon>
              <v-icon icon="mdi-image" class="ml-3"></v-icon>
              <v-form class="d-flex" style="flex-grow: 1; flex-shrink: 1">
                <v-text-field placeholder="メッセージを入力してください"></v-text-field>
              </v-form>
              <v-icon icon="mdi-microphone" class="ml-3"></v-icon>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-toolbar>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>

 
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      timer: 5 * 60,
      show: false
    };
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    timerCount: function () {
      this.timer--;
    },

    startTimer: function () {
      let self = this;
      setInterval(function () {
        self.timerCount();
      }, 1000);
    },
    click: function(){
      this.show = !this.show
    }

  },
});
</script>
