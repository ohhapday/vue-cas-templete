import './lib/css';
import './lib/script';
import './lib/global';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: {
    App
  },
  mounted() {
    console.log($('button'));
  },
});
