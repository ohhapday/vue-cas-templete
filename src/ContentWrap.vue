<!-- /**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2017/11/23
 * Time: 오전 10:01
 */ -->

<template>
	<div id="content-wrap" class="content-wrapper">
    <section class="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <button @click="show = !show">Toggle</button>

    <section>
      <transition name="page" mode="out-in">
        <p v-if="show">hello</p>
      </transition>
    </section>
	</div>
</template>

<script>
  export default {
    name: '',
    extends: {},
    data() {
      return {
        show: true,
      };
    },
    /*
    props: {
      bar: {},
      foo: {}
    },
    data() {},
    */
    computed: {},
    components: {},
    watch: {},
    methods: {},
    beforeCreate() {
    },
    mounted() {
    },
  };
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
