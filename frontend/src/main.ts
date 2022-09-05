import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { loadFonts } from "./plugins/webfontloader";

const vuetify = createVuetify({
  components,
  directives,
});

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
