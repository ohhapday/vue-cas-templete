<!-- /**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2017/11/23
 * Time: 오전 10:01
 * 메인페이지 등에서 공통된 Component를 사용할 경우 row에 slot를 지정하여 구분한다.
 */ -->

<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'row',
    created() {

    }
  };
</script>
