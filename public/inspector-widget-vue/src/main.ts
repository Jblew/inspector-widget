/* eslint-disable global-require */
import Vue from 'vue';
import Vuex from 'vuex';
import { RolesAuthModule } from 'firestore-roles-vuex-module';
import router from './router';
import { constructFirebaseApp, constructStore } from './config';
import { constructRolesAdapter } from './config/constructRolesAdapter';
import vuetify from './config/vuetify';
import 'firebaseui/dist/firebaseui.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

const firebase = constructFirebaseApp();
const firestoreRolesAdapter = constructRolesAdapter(firebase.firestore());

new Vue({
  router,
  store: constructStore(firestoreRolesAdapter, firebase.auth()),
  provide() {
    return {
      firebase,
      ...firestoreRolesAdapter.spreadToProvide(),
    };
  },
  created() {
    RolesAuthModule.Actions.Initialize.dispatch(this.$store.dispatch);
  },
  render: h => h(require('./App.vue').default),
  ...({ vuetify } as any), // type incompatibility
}).$mount('#app');
