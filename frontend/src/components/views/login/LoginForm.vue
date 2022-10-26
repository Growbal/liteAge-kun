<template>
  <v-form>
    <v-text-field
      v-model="email"
      label="Email"
      single-line
      full-width
      hide-details
      :rules="[rules.required]"
    ></v-text-field>
    <v-divider></v-divider>
    <v-text-field
      v-model="password"
      name="password"
      label="Password"
      single-line
      full-width
      hide-details
      counter
      :append-icon="isPasswordEyeOn ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      :type="isPasswordEyeOn ? 'text' : 'password'"
      @click:append="isPasswordEyeOn = !isPasswordEyeOn"
    ></v-text-field>

    <v-btn @click="handleLogin()">ログイン</v-btn>
    <v-btn @click="handleLogout()">ログアウト</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import * as api from "../../../db-util/index";

const emailRegexp = new RegExp(
  "^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$",
  "g"
);

export default defineComponent({
  name: "Login",
  setup() {
    const formData = reactive({
      email: "",
      password: "",
    });

    return {
      ...toRefs(formData),
      handleLogin: async () => {
        await api
          .login(formData.email, formData.password)
          .then((res) => {
            if (res?.status === 200) {
              alert("ログインしました。");
            } else {
              alert("メールアドレスかパスワードが間違っています。");
            }
          })
          .catch((e) => {
            alert("ログインに失敗しました。");
          });
      },
      handleLogout: async () => {
        await api
          .logout()
          .then((res) => {
            if (res?.status === 200) {
              alert("・ログアウトしました。");
            } else {
              alert("ログインしていません。");
            }
          })
          .catch((e) => {
            alert("ログアウトに失敗しました。");
          });
      },
    };
  },

  data() {
    return {
      isPasswordEyeOn: false,
      rules: {
        required: (value) => !!value || "Required.",
        emailRegexp: (value) => emailRegexp.exec(value),
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
});
</script>
