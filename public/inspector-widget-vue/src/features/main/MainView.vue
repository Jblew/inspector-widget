<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app clipped-left>
        <v-toolbar-title>Inspector</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <main-page />
        </v-container>
      </v-content>
    </v-app>
  </div>
  <!--<div><a-w-s-cost-month-to-date /> <a-w-s-cost-daily /></div>-->
</template>

<script lang="ts">
import Vue from 'vue';
import MainPage from './MainPage.vue';

export default Vue.extend({
  components: {
    MainPage,
  },
});
</script>
<style lang="scss"></style>
