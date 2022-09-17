<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-dialog v-model="phoneCallingDialog" persistent width="2000">
    <v-card height="60vh" width="70vh" color="black">
      <v-card-text></v-card-text>
      <v-row justify="center">
        <v-avatar color="teal" size="56">
          <img
            src="./../../assets/keirou_obaachan.png"
            class="avatar-picture"
          />
        </v-avatar>
      </v-row>
      <h4 class="text-center">おばあちゃん</h4>
      <v-row justify="center" class="orange lighten-2 ma-1">
        <p class="text-caption">日本</p>
      </v-row>
      <!-- <div class="d-flex justify-center pr-3">{{ time }}</div> -->
      {{ value }}

      <v-row class="orange lighten-3 pa-1">
        <v-col>
          <v-row justify="center">
            <v-btn variant="text" icon="mdi-timer"></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">消音</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-btn
              variant="text"
              icon="mdi-dialpad"
              @click="phoneTelDialog = false"
            ></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">キーパッド</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-btn
              variant="text"
              icon="mdi-volume-high"
              @click="phoneTelDialog = false"
            ></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">スピーカー</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-btn
              variant="text"
              icon="mdi-plus"
              @click="phoneTelDialog = false"
            ></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">通話を追加</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-btn
              variant="text"
              icon="mdi-video-outline"
              @click="phoneTelDialog = false"
            ></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">Facetime</p>
          </v-row>
        </v-col>
      </v-row>
      <div>
        <v-row class="orange">
          <v-col>
            <v-row justify="space-around" class="d-flex">
              <v-btn
                fab
                color="red"
                rounded
                @click="phoneCallingDialog = false"
                icon="mdi-phone-hangup"
              >
                <v-icon color="white">mdi-phone-hangup</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-card-text></v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "PhoneCallingPannel",
  data() {
    return {};
  },
  method: {},
  props: {
    phoneCallingDialog: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
};
</script>
<style>
.avatar-picture {
  width: 48px;
  height: 48px;
}
</style>
