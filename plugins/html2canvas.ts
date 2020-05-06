import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $html2canvas: any;
  }
}

if (process.browser) {
  Vue.prototype.$html2canvas = require('html2canvas');
  // Vue.prototype.$html2canvas = require('html2canvas')
}
