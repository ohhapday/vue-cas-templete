<template>
  <div class="counter-event-example">
    <p>{{total}}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        total: 'test'
      };
    }
  };
</script>
