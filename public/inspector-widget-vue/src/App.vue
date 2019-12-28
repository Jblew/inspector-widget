<template>
  <v-app id="app">
    <notifications-snackbar />
    <div v-if="authenticated">
      <router-view />
    </div>
    <v-content v-else>
      <auth-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { AuthView } from 'firestore-roles-vue-auth/src';
import { RolesAuthModule } from 'firestore-roles-vuex-module';
import Vue from 'vue';

import NotificationsSnackbar from '@/components/misc/NotificationsSnackbar.vue';

export default Vue.extend({
  computed: {
    authenticated(): boolean {
      return RolesAuthModule.stateOf(this).state === RolesAuthModule.AuthState.AUTHENTICATED;
    },
  },
  components: {
    AuthView,
    NotificationsSnackbar,
  },
});
</script>
<style lang="scss"></style>
