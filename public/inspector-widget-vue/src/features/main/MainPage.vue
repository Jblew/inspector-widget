<template>
  <div>
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
    <v-row align="start">
      <v-col cols="12">
        <v-card outlined tile color="#000000">
          <dynamically-loaded-component />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';
import Axios from 'axios';
import { AWSCostMonthToDate, AWSCostDaily } from '@/modules/inspector-widget-aws-cost/ui';

function externalComponent(url: string): any {
  return new Promise((resolve, reject) => {
    const name = url
      .split('/')
      .reverse()[0]!
      .match(/^(.*?)\.umd/)![1];
    const script = document.createElement('script');
    script.async = true;
    script.addEventListener('load', () => {
      resolve((window as any)[name]);
    });
    script.addEventListener('error', () => {
      reject(new Error(`Error loading ${url}`));
    });
    script.src = url;
    document.head.appendChild(script);
  });
}

const componentUrl =
  'https://jedrzej.lewandowski.doctor/inspector-widget-aws-cost/AWSCostMonthToDate/AWSCostMonthToDate.d2d8246d521c1d50fd27.umd.js';

async function loadComponent() {
  try {
    const c = await externalComponent(componentUrl);
    console.log(c);
    return c;
  } catch (e) {
    console.error('Component loading error, ', e);
    throw e;
  }
}

export default Vue.extend({
  components: {
    AWSCostMonthToDate,
    AWSCostDaily,
    'dynamically-loaded-component': () => loadComponent(),
  },
});
</script>
<style lang="scss"></style>
