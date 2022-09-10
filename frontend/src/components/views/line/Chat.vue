<template>
  <div class="execpannel">
    <div class="d-flex justify-center pr-3">残り{{ timer }}秒</div>
    <v-row align="start" no-gutters>
      <QuestionPannel :pannelheight="height_vh" />
      <v-col cols="9">
        <div class="linepannel" ref="lineframe" height="1200px">
          <!-- :hegiht="lainframe_height" -->
          <PhoneHeader />
          <LineTitle @click="click" />
          <v-toolbar v-show="show">
            <v-col>
              <v-row justify="end">
                <v-dialog v-model="lineTelDialog" persistent width="2000">
                  <template v-slot:activator="{ isActive: on, props: attrs }">
                    <!-- eslint-disable vue/no-unused-vars -->
                    <v-btn
                      v-bind="attrs"
                      v-on:click="on"
                      class="ml-4"
                      variant="text"
                      icon="mdi-phone"
                    ></v-btn>
                  </template>
                  <v-card height="50vh" width="50vh">
                    <v-card-text></v-card-text>
                    <v-row justify="center">
                      <v-avatar color="teal" size="56">
                        <img
                          src="./../../../assets/keirou_obaachan.png"
                          class="avatar-picture"
                        />
                      </v-avatar>
                    </v-row>
                    <h4 class="text-center">おばあちゃん</h4>
                    <v-card-text></v-card-text>
                    <v-card-text></v-card-text>
                    <v-card-text></v-card-text>
                    <v-card-actions>
                      <v-row>
                        <v-col>
                          <v-row justify="center">
                            <v-btn
                              variant="text"
                              icon="mdi-microphone-outline"
                            ></v-btn>
                          </v-row>
                          <v-row justify="center">
                            <p class="text-caption">マイクをオフ</p>
                          </v-row>
                        </v-col>
                        <v-col>
                          <v-row justify="center">
                            <v-btn
                              variant="text"
                              icon="mdi-close-circle"
                              @click="
                                lineTelDialog = false;
                                show = false;
                              "
                            >
                            </v-btn>
                          </v-row>
                          <v-row justify="center">
                            <p class="text-caption">ビデオを終了</p>
                          </v-row>
                        </v-col>
                        <v-col>
                          <v-row justify="center">
                            <v-btn
                              variant="text"
                              icon="mdi-volume-source"
                            ></v-btn>
                          </v-row>
                          <v-row justify="center">
                            <p class="text-caption">スピーカー</p>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                    <v-card-text></v-card-text>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-row justify="end">
                <p class="text-caption">&nbsp;&nbsp;&nbsp;&nbsp;音声通話</p>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-row justify="start">
                <v-btn class="ml-4" variant="text" icon="mdi-video"></v-btn>
              </v-row>
              <v-row justify="start">
                <p class="text-caption">&nbsp;&nbsp;ビデオ通話</p>
              </v-row>
            </v-col>
          </v-toolbar>
          <v-card class="pa-5" :height="heightcard">
            <div v-for="chat in chats" :key="chat.id">
              <v-layout class="justify-start pb-3" v-if="!chat.isUser">
                <v-avatar color="teal" size="56">
                  <img
                    src="./../../../assets/keirou_obaachan.png"
                    class="avatar-picture"
                  />
                </v-avatar>
                <v-card outlined color="rgb(239	239	239)" class="chat-message">
                  <v-card-text>{{ chat.message }}</v-card-text>
                </v-card>
                <p class="text-caption pl-3 chat-capition">{{ nowTime }}</p>
              </v-layout>
              <v-layout class="justify-end pb-3" v-if="chat.isUser">
                <div class="text-caption pr-3 chat-capition">
                  <p style="width: 100%">既読</p>
                  <p>{{ nowTime }}</p>
                </div>
                <v-card outlined color="rgb(134	217	123)" class="chat-message">
                  <v-card-text>{{ chat.message }}</v-card-text>
                </v-card>
              </v-layout>
            </div>
          </v-card>
          <v-toolbar prominent color="rgb(0, 195, 0,0.5)">
            <v-icon icon="mdi-plus" class="ml-3"></v-icon>
            <v-icon icon="mdi-camera" class="ml-3"></v-icon>
            <v-icon icon="mdi-image" class="ml-3"></v-icon>
            <v-form
              class="d-flex"
              style="flex-grow: 1; flex-shrink: 1"
              @submit.prevent="sendMessage"
            >
              <v-text-field
                v-model="chatMessage"
                placeholder="メッセージを入力してください"
              ></v-text-field>
            </v-form>
            <v-icon icon="mdi-microphone" class="ml-3"></v-icon>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-toolbar>
        </div>
      </v-col>
    </v-row>
  </div>

  <v-dialog v-model="phoneTelDialog" persistent width="2000">
    <template v-slot:activator="{ isActive: on, props: attrs }"> </template>
    <v-card height="50vh" width="70vh" color="black">
      <v-card-text></v-card-text>
      <v-row justify="center">
        <v-avatar color="teal" size="56">
          <img
            src="./../../../assets/keirou_obaachan.png"
            class="avatar-picture"
          />
        </v-avatar>
      </v-row>
      <h4 class="text-center">おばあちゃん</h4>
      <center>
        <p class="text-caption">日本</p>
      </center>
      <v-card-text></v-card-text>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-btn variant="text" icon="mdi-microphone-outline"></v-btn>
            </v-row>
            <v-row justify="center">
              <p class="text-caption">あとで通知</p>
            </v-row>
          </v-col>
          <v-col>
            <v-row justify="center">
              <v-btn
                variant="text"
                icon="mdi-close-circle"
                @click="phoneTelDialog = false"
              ></v-btn>
            </v-row>
            <v-row justify="center">
              <p class="text-caption">メッセージを送信</p>
            </v-row>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-row>
        <v-col>
          <v-row justify="center">
            <v-btn
              variant="text"
              icon="mdi-close-circle"
              @click="phoneTelDialog = false"
            ></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">電話を切る</p>
          </v-row>
        </v-col>
      </v-row>
      <v-card-text></v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionPannel from "./../../../components/parts/QuestionPannel.vue";
import PhoneHeader from "./../../../components/parts/PhoneHeader.vue";
import LineTitle from "./../../../components/parts/LineTitle.vue";

// let client_h = document.getElementById('test').clientHeight;
// console.log(client_h)
let oneceTelephone = false;
let timer: any = null;
const botMessagesAll: string[] = [
  "kazuくん、こんばんわ。今日お家来るんだってね。\n何時ごろにお家に来ますか。連絡待ってます。",
  "文字が見えにくいので電話します",
  "333",
  "444",
];
interface Chat {
  id: number;
  isUser: boolean;
  message: string;
}

export default defineComponent({
  name: "App",
  data() {
    return {
      timer: 5 * 60,
      show: false,
      lineTelDialog: false,
      phoneTelDialog: false,
      chats: [] as Chat[],
      chatMessage: "" as string,
      botMessageNumber: 0 as number,
      heightcard: "55vh",
      height: window.innerHeight,
      lainframe_height: 0,
      height_vh: "",
    };
  },

  mounted() {
    timer = this.startTimer();
    const chat: Chat = {
      id: 1,
      isUser: false,
      message: botMessagesAll[this.botMessageNumber],
    };
    this.chats.push(chat);
    this.botMessageNumber++;

    const dom = this.$refs.lineframe;
    const rect = dom.getBoundingClientRect();
    const lainframe_height = rect.height;
    console.log({
      height: lainframe_height,
    });
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: {
    QuestionPannel,
    PhoneHeader,
    LineTitle,
  },
  methods: {
    timerCount: function () {
      if (this.timer <= 0) {
        clearInterval(timer);
      } else {
        this.timer--;
      }
    },
    handleResize: function (lainframe_height) {
      this.height = window.innerHeight;
      this.height_vh = `${(lainframe_height * 100) / this.height}vh`;
    },
    startTimer: function () {
      const self = this; // eslint-disable-line @typescript-eslint/no-this-alias
      setInterval(function () {
        self.timerCount();
      }, 1000);
    },

    click: function () {
      this.show = !this.show;
      if (!this.show) {
        this.heightcard = "55vh";
      } else {
        this.heightcard = "45.6vh";
      }
    },

    nextChatId: function () {
      return this.chats.slice(-1)[0].id + 1;
    },

    sendMessage: function () {
      if (this.chatMessage == "") {
        return;
      }

      if (!oneceTelephone) {
        setTimeout(() => {
          this.phoneTelDialog = true;
        }, 5000);
        oneceTelephone = true;
      }

      const userChat: Chat = {
        id: this.nextChatId(),
        isUser: true,
        message: this.chatMessage,
      };
      this.chats.push(userChat);
      this.chatMessage = "";

      setTimeout(() => {
        const botChat: Chat = {
          id: this.nextChatId(),
          isUser: false,
          message: botMessagesAll[this.botMessageNumber],
        };
        this.chats.push(botChat);
        this.botMessageNumber++;
      }, Math.random() * (3000 - 1000) + 1000);
    },
  },
  computed: {
    nowTime: function () {
      const date = new Date();
      return (
        date.getHours().toString().padStart(2, "0") +
        ":" +
        date.getMinutes().toString().padStart(2, "0")
      );
    },
  },
});
</script>

<style>
.avatar-picture {
  width: 48px;
  height: 48px;
}

.chat-message {
  max-width: 50%;
}

.chat-capition {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.execpannel {
  background-color: white;
}

.linepannel {
  background-color: white;
}
</style>
