<template>
  <div><a-w-s-cost-month-to-date /></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AWSCostMonthToDate } from '@/modules/inspector-widget-aws-cost/ui';

export default Vue.extend({
  components: {
    AWSCostMonthToDate,
  },
});
</script>
<style lang="scss"></style>
