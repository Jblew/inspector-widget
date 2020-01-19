<template>
  <div><a-w-s-cost-month-to-date /> <a-w-s-cost-daily /></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AWSCostMonthToDate, AWSCostDaily } from '@/modules/inspector-widget-aws-cost/ui';

export default Vue.extend({
  components: {
    AWSCostMonthToDate,
    AWSCostDaily,
  },
});
</script>
<style lang="scss"></style>
