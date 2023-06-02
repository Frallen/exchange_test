<template>
  <div class="container">
    <slot></slot>
  </div>
  <Preloader v-show="isLoading"></Preloader>
</template>

<script setup lang="ts">
const {getCurrentState} = useMain()
const {isLoading} = storeToRefs(useMain())
await getCurrentState()
</script>

<style scoped lang="less">

</style>