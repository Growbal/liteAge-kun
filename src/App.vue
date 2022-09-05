<template>
  <v-app>
    <v-main>
      <router-view />
      <MainHeader />
      <div class="execpannel">
        <v-row align="start" no-gutters style="height: 800px">
          <QuestionPannel />
            <v-col cols="9" >
              <div class="d-flex justify-center pr-3">残り{{ timer }}秒</div>
              <div class="linepannel">
                <PhoneHeader />
                <LineTitle v-on:click="click" />
                <v-toolbar v-show="show">
                  <v-col>
                    <v-row justify="end">
                      <v-dialog v-model="lineTelDialog" persistent width="2000">
                        <template v-slot:activator="{ isActive: on, props: attrs }">
                          <v-btn v-bind="attrs" v-on="on" class="ml-4" variant="text" icon="mdi-phone"></v-btn>
                        </template>
                        <v-card height="50vh" width="50vh">
                          <v-card-text></v-card-text>
                          <v-row justify="center">
                            <v-avatar color="teal" size="56">
                              <img src="./assets/keirou_obaachan.png" class="avatar-picture">
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
                                  <v-btn variant="text" icon="mdi-microphone-outline"></v-btn>
                                </v-row>
                                <v-row justify="center">
                                  <p class="text-caption">マイクをオフ</p>
                                </v-row>
                              </v-col>
                              <v-col>
                                <v-row justify="center">
                                  <v-btn variant="text" icon="mdi-close-circle" @click="lineTelDialog = false"></v-btn>
                                </v-row>
                                <v-row justify="center">
                                  <p class="text-caption">ビデオを終了</p>
                                </v-row>
                              </v-col>
                              <v-col>
                                <v-row justify="center">
                                  <v-btn variant="text" icon="mdi-volume-source"></v-btn>
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
              <v-card class="pa-5" height="52vh" >
                <div v-for="chat in chats">
                  <v-layout class="justify-start pb-3" v-if="!chat.isUser">
                    <v-avatar color="teal" size="56">
                      <img src="./assets/keirou_obaachan.png" class="avatar-picture" />
                    </v-avatar>
                    <v-card outlined color="rgb(239	239	239)" class="chat-message">
                      <v-card-text>{{ chat.message }}</v-card-text>
                    </v-card>
                    <p class="text-caption pl-3 chat-capition">{{ nowTime }}</p>
                  </v-layout>
                  <v-layout class="justify-end pb-3" v-if="chat.isUser">
                    <p class="text-caption pr-3 chat-capition">
                    <p style="width: 100%">既読</p>
                    <p>{{ nowTime }}</p>
                    </p>
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
                <v-form class="d-flex" style="flex-grow: 1; flex-shrink: 1" @submit.prevent="sendMessage">
                  <v-text-field v-model="chatMessage" placeholder="メッセージを入力してください"></v-text-field>
                </v-form>
                <v-icon icon="mdi-microphone" class="ml-3"></v-icon>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </v-toolbar>
            </div>
            </v-col>
        </v-row>
      </div>

      <v-dialog v-model="phoneTelDialog" persistent width="2000">
        <template v-slot:activator="{ isActive: on, props: attrs }">
          <v-btn v-bind="attrs" v-on="on" class="ml-4" variant="text" icon="mdi-phone"></v-btn>
        </template>
        <v-card height="50vh" width="70vh" color="black">
          <v-card-text></v-card-text>
          <v-row justify="center">
            <v-avatar color="teal" size="56">
              <img src="./assets/keirou_obaachan.png" class="avatar-picture">
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
                  <v-btn variant="text" icon="mdi-close-circle" @click="phoneTelDialog = false"></v-btn>
                </v-row>
                <v-row justify="center">
                  <p class="text-caption">メッセージを送信</p>
                </v-row>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-btn variant="text" icon="mdi-close-circle" @click="phoneTelDialog = false"></v-btn>
          <v-card-text></v-card-text>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from './components/parts/MainHeader.vue';
import QuestionPannel from './components/parts/QuestionPannel.vue';
import PhoneHeader from './components/parts/PhoneHeader.vue';
import LineTitle from './components/parts/LineTitle.vue';


let oneceTelephone: boolean = false;
let timer: any = null;
const botMessagesAll: string[] = ["111", "222", "333", "444"];
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
      lineTelDialog:false,
      phoneTelDialog:false,
      chats: [] as Chat[],
      chatMessage: "" as string,
      botMessageNumber: 0 as number,
      
    };
  },

   mounted() {
    timer = this.startTimer();
    let chat: Chat = {
      id: 1,
      isUser: false,
      message: botMessagesAll[this.botMessageNumber],
    };
    this.chats.push(chat);
    this.botMessageNumber++;
  },
  components:{
    MainHeader,
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
    
    startTimer: function () {
      let self = this;
      setInterval(function () {
        self.timerCount();
      }, 1000);
    },

    click: function(){
      this.show = !this.show
    },

    nextChatId: function () {
      return this.chats.slice(-1)[0].id + 1;
    },

    sendMessage: function () {
      if (this.chatMessage == "") {
        return;
      }

      if(!oneceTelephone) {
        setTimeout(() => {
          this.phoneTelDialog = true
        }, 5000);
        oneceTelephone = true;
      }
      
      let userChat: Chat = {
        id: this.nextChatId(),
        isUser: true,
        message: this.chatMessage,
      };
      this.chats.push(userChat);
      this.chatMessage = "";

      setTimeout(() => {
        let botChat: Chat = {
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
  background-color: brown;
}
.linepannel{
  background-color: white;
}
</style>