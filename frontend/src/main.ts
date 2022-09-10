import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { loadFonts } from "./plugins/webfontloader";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

const vuetify = createVuetify({
  components,
  directives,
});

loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.component("EasyDataTable", Vue3EasyDataTable);
app.mount("#app");
