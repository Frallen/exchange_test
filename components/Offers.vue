<template>
  <div class="offers">
    <transition-group name="fade">
    <div class="offers-item" v-for="item in offers" :key="item.ids[0]">
        <OfferItem :item="item"  :route="route"></OfferItem>
    </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import {currencyItemsType} from "~/types/global.types";

interface propsType {
  offers: currencyItemsType[]
  route: string
}

const {offers} = defineProps<propsType>()
</script>

<style scoped lang="less">
.offers {
  display: flex;
  flex-direction: column;

  &-item {
    margin: 15px 0 0;
  }

  &-item:first-child {
    margin: 0;
  }
}
</style>