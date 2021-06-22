import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { firestorePlugin } from "vuefire";
import router from "./router";
import store from "./store";

import './assets/css/tailwind.css'

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
