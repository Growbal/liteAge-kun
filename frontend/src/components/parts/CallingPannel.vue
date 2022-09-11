<template>
    <v-dialog v-model="phoneTelDialog" persistent width="2000">
    <template v-slot:activator="{ isActive: on, props: attrs }"> </template>
    <v-card height="60vh" width="70vh" color="black">
      <v-card-text></v-card-text>
      <v-row justify="center">
        <v-avatar color="teal" size="56">
          <img src="./../../../assets/keirou_obaachan.png" class="avatar-picture" />
        </v-avatar>
      </v-row>
      <h4 class="text-center">おばあちゃん</h4>
      <v-row justify="center" class="orange lighten-2  ma-1">
        <p class="text-caption">日本</p>
      </v-row>
      <v-row class="orange lighten-3 pa-1">
        <v-col>
          <v-row justify="center">
            <v-btn variant="text" icon="mdi-timer"></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">あとで通知</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="center">
            <v-btn variant="text" icon="mdi-message-outline" @click="phoneTelDialog = false"></v-btn>
          </v-row>
          <v-row justify="center">
            <p class="text-caption">メッセージを送信</p>
          </v-row>
        </v-col>
      </v-row>
      <div>
      <v-row class="orange">
        <v-col>
          <v-row justify="space-around" class="d-flex">
            <v-btn fab color="red" rounded @click="phonecallclose" icon="mdi-phone-hangup">
              <v-icon color="white">mdi-phone-hangup</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col >
          <v-row justify="space-around">
            <v-btn fab rounded color="green" icon="mdi-phone" @click="phonecallclose">
              <v-icon color="white">mdi-phone</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-card-text></v-card-text>
    </v-card>
  </v-dialog>
</template>