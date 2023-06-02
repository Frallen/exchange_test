<template>
  <div class="preloader">

    <NuxtImg src="refresh.svg"></NuxtImg>

  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="less">
.preloader {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: @black;

  .trs(0.3s);

  img {  animation: opacity linear 1s infinite;
    height: 100px;
    width: 100px;
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>