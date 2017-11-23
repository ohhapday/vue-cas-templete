<!-- /**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2017/11/20
 * Time: 오후 1:52
 *
 */ -->

<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap style="height: 500px;"></va-content-wrap>
    </div>
  </div>
</template>

<script>
  import store from './vuex/store.js';
  import slideMenuItems from './lib/slideMenuItems.js';

  import VANaviBar from './components/NaviBar.vue';
  import VASlider from './components/Slider.vue';
  import VAContentWrap from './ContentWrap.vue';

  export default {
    name: 'app',
    data() {
      return {
        slideMenuItems: slideMenuItems
      };
    },
    components: {
      'va-navibar': VANaviBar,
      'va-slider': VASlider,
      'va-content-wrap': VAContentWrap,
    },
    store,
    /* mounted() {
      $('button').on('click', function () {
        store.dispatch('changeName');
      });
    }, */
  };
</script>

<style>
  body::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, .3);
  }
</style>
