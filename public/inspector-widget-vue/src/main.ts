import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { constructFirebaseApp } from "./config";

Vue.config.productionTip = false;

const firebase = constructFirebaseApp();

new Vue({
  router,
  provide() {
    return {
      firebase
    };
  },
  render: h => h(App)
}).$mount("#app");
