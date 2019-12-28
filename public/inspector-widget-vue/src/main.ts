import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import { constructFirebaseApp, constructStore } from './config';
import { constructRolesAdapter } from './config/constructRolesAdapter';

Vue.config.productionTip = false;

const firebase = constructFirebaseApp();
const firestoreRolesAdapter = constructRolesAdapter(firebase.firestore());
Vue.use(Vuex);

new Vue({
  router,
  store: constructStore(firestoreRolesAdapter, firebase.auth()),
  provide() {
    return {
      firebase,
      ...firestoreRolesAdapter.spreadToProvide(),
    };
  },
  created() {},
  render: h => h(App),
}).$mount('#app');
