import Vue from 'vue';
import App from './App';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

router.push({
  name: 'user', params: {userId: 123}
});

new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: {App},
  created: function () {
    console.log(this.$route);
  }
});
