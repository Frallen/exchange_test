<template>
  <div class="change-item">
    <h3>{{ label }}</h3>
    <div class="change-item-wrapper">
      <div class="input">

        <span><NuxtImg :src="searchedImage" v-if="searchedImage"/> {{ item?.currency }}</span>
        <input type="number">
      </div>
      <div class="change-range">
        <div>Мин.: {{ item?.min + ' ' + item?.currency }}</div>
        <div>Макс.: {{ item?.max + ' ' + item?.currency }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {Currency} = storeToRefs(useMain())
const searchedImage = computed(() => {

  return Currency.value?.find(p => p.ids[0] === ImageId)?.logo.simple
})
import {infoType} from "~/types/global.types";

interface propsType {
  item: infoType,
  label: string,
  ImageId: number
}

const {item, label, ImageId} = defineProps<propsType>()
</script>

<style scoped lang="less">

</style>