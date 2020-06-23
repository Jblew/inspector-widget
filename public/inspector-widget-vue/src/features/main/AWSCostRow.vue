<template>
  <v-row align="start">
    <v-col cols="12" md="8">
      <v-card outlined tile color="#000000">
        <a-w-s-cost-month-to-date />
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card outlined tile color="#000000">
        <a-w-s-cost-daily />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { AWSCostMonthToDate, AWSCostDaily } from '../../modules/inspector-widget-aws-cost/aws-cost-ui/src';

export default Vue.extend({
  components: {
    AWSCostMonthToDate,
    AWSCostDaily,
  },
});
</script>
<style lang="scss"></style>
