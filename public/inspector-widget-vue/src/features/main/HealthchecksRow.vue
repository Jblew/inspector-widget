<template>
  <v-row align="start">
    <v-col cols="12">
      <v-card outlined tile color="#000000">
        <healthchecks-module />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { HealthchecksModule } from '../../modules/healthchecks.io/ui';

export default Vue.extend({
  components: {
    HealthchecksModule,
  },
});
</script>
<style lang="scss"></style>
