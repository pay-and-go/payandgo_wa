import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import { createProvider } from "./vue-apollo";

import "primevue/resources/themes/bootstrap4-light-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

Vue.config.productionTip = false;
Vue.component("Card", Card);
Vue.component("InputText", InputText);
Vue.component("Button", Button);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
