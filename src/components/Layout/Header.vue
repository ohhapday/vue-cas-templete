<!-- /**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2017/11/20
 * Time: 오후 5:17
 */ -->

<template>
  <header class="main-header">
    <a href="/todo" class="logo">
      <span class="logo-mini"><b>CAS</b></span>
      <span class="logo-lg">Global<b>CAS</b></span>
    </a>

    <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <button type="button" class="btn btn-default btn-flat" id="signout" style="margin-top: 7px;">
              Sign out
            </button>
          </li>

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'layoutHeader',
    extends: {},
    props: {
      bar: {},
      foo: {}
    },
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

