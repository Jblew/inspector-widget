<template>
  <v-row align="start">
    <v-col cols="12">
      <v-card outlined tile color="#000000">
        <osowiec-log />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { OsowiecLog } from '@/modules/inspector-widget-osowiec/ui';

export default Vue.extend({
  components: {
    OsowiecLog,
  },
});
</script>
<style lang="scss"></style>
