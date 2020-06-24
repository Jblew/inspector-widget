<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app clipped-left>
        <v-toolbar-title>Inspector</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <main-view-panel />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainViewPanel from './MainViewPanel.vue';

export default Vue.extend({
  components: {
    MainViewPanel,
  },
});
</script>
<style lang="scss"></style>
