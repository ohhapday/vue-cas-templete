// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
}).$mount('#app');

/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  created: function () {
    console.log(this);
  }
});
*/
