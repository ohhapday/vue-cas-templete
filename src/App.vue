<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button type="button" class="btn btn-primary" autocomplate="off"
            data-loading-text="jquery with bootstrap" @click="clickBtn">버튼</button>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'jQueryApp',
    methods: {
      clickBtn(event) {
        $(event.target).button('loading');

        setTimeout(function () {
          $(event.target).button('reset');
        }, 1000);
      }
    },
    created: function() {
      console.log(this);
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
