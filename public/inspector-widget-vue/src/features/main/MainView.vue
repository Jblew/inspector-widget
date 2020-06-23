<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app clipped-left>
        <v-toolbar-title>Inspector</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <a-w-s-cost-row />
          <osowiec-row />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AWSCostRow from './AWSCostRow.vue';
import OsowiecRow from './OsowiecRow.vue';

export default Vue.extend({
  components: {
    AWSCostRow,
    OsowiecRow,
  },
});
</script>
<style lang="scss"></style>
