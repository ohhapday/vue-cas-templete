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
      <transition name="custom-classes-transition"
                  enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
        <p v-if="show">hello</p>
      </transition>
    </section>
  </div>
</template>

<script>
  import 'animate.css';

  export default {
    name: '',
    data() {
      return {
        show: true,
      };
    },
  };
</script>
