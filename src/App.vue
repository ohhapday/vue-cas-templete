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
      <layout-header></layout-header>
      <layout-aside></layout-aside>
    </div>
    <!--
    <select name="sch_is_complete" id="sch_is_complete" class="form-control input-sm select2" data-column="3" title="">
      <option value="" disabled>전체</option>
      <option value="0">진행</option>
      <option value="1">완료</option>
    </select>
    -->
  </div>
</template>

<script>
  import layoutHeader from './components/Layout/Header.vue';
  import layoutAside from './components/Layout/Aside.vue';
  import 'select2';

  export default {
    components: {
      'layout-header': layoutHeader,
      'layout-aside': layoutAside
    },
    mounted: function () {
      $('select').select2();
    }
  };
</script>

<style src="select2/dist/css/select2.min.css"></style>

<style>
  a:focus, a:hover {
    color: #23527c;
    text-decoration: none;
  }
</style>
