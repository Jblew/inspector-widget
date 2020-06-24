<template>
  <v-container fluid>
    <healthchecks-row />
    <a-w-s-cost-row />
    <osowiec-row />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import AWSCostRow from './AWSCostRow.vue';
import OsowiecRow from './OsowiecRow.vue';
import HealthchecksRow from './HealthchecksRow.vue';

export default Vue.extend({
  components: {
    AWSCostRow,
    OsowiecRow,
    HealthchecksRow,
  },
});
</script>
<style lang="scss"></style>
