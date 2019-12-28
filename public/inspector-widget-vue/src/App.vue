<template>
  <v-app id="app">
    <notifications-snackbar />
    <div v-if="authenticated">
      <role-guard-component :role="viewerRole">
        <main-view />
      </role-guard-component>
    </div>
    <v-content v-else>
      <auth-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { AuthView, RoleGuardComponent } from 'firestore-roles-vue-auth/src';
import { RolesAuthModule } from 'firestore-roles-vuex-module';
import Vue from 'vue';
import { MainView } from '@/features/main';

import NotificationsSnackbar from '@/components/misc/NotificationsSnackbar.vue';
import { RoleKey } from '@/config/roles.config';

export default Vue.extend({
  data() {
    return {
      viewerRole: RoleKey.viewer,
    };
  },
  computed: {
    authenticated(): boolean {
      return RolesAuthModule.stateOf(this).state === RolesAuthModule.AuthState.AUTHENTICATED;
    },
  },
  components: {
    AuthView,
    NotificationsSnackbar,
    RoleGuardComponent,
    MainView,
  },
});
</script>
<style lang="scss"></style>
