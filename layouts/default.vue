<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const {getCurrentState}=useMain()

await getCurrentState()
</script>

<style scoped lang="less">

</style>