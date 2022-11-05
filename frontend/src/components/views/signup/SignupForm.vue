<template>
  <v-form>
    <v-text-field
      v-model="name"
      label="Name"
      single-line
      full-width
      :rules="[rules.required]"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      single-line
      full-width
      :rules="[rules.required, rules.emailRegexp]"
    ></v-text-field>

    <v-text-field
      v-model="password"
      name="password"
      label="Password"
      single-line
      full-width
      counter
      :append-icon="isPasswordEyeOn ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      :type="isPasswordEyeOn ? 'text' : 'password'"
      @click:append="isPasswordEyeOn = !isPasswordEyeOn"
    ></v-text-field>

    <v-btn @click="handleSignup()">サインアップ</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import * as api from "../../../db-util/index";

const emailRegexp = new RegExp(
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*[.])+[a-zA-Z]{2,}$/
);

export default defineComponent({
  name: "Signup",
  setup() {
    const router = useRouter();
    const formData = reactive({
      name: "",
      email: "",
      password: "",
    });

    return {
      ...toRefs(formData),
      handleSignup: async () => {
        await api
          .signup(formData.name, formData.email, formData.password)
          .then((res) => {
            if (res.data.success) {
              router.push({ name: "Start" });
            } else {
              alert("アカウントを作成できませんでした。");
            }
          })
          .catch(() => {
            alert("通信エラーが発生しました。");
          });
      },
    };
  },

  data() {
    return {
      isPasswordEyeOn: false,
      rules: {
        required: (value) => !!value || "Required.",
        emailRegexp: (value) =>
          !!emailRegexp.exec(value) || "正常なメールアドレスを入力してください",
      },
    };
  },
});
</script>
