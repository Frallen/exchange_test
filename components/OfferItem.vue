<template>

  <div class="item" @click="onSubmit" :class="{'item-active':isActiveOffer}">
    <span class="icon" v-show="isActiveOffer">
      <NuxtImg src="next.svg"></NuxtImg>
    </span>
    <span class="info">
      <span class="info-img">
        <NuxtImg :src="item.logo.simple"></NuxtImg>
      </span>
      <span class="info-state">
        <span class="info-state-title">{{ item.name }}</span>
        <span class="info-state-additional">{{ item.currency[0] }}</span>
      </span>
    </span>

  </div>
</template>

<script setup lang="ts">
import {currencyItemsType} from "~/types/global.types";

const {sendFrom, getPrice} = useMain()
const {sendId, getId} = storeToRefs(useMain())
const isActiveOffer = ref<number>()

interface propsType {
  item: currencyItemsType
  route: string
}

const {item, route} = defineProps<propsType>()


const onSubmit = async () => {
  if (route === "send") {
    await sendFrom(item.ids[0])
    sendId.value = item.ids[0]
  } else {
    getId.value = item.ids[0]
  }
  await getPrice()
  isActiveOffer.value === item.ids[0] ? isActiveOffer.value = 0 : isActiveOffer.value = item.ids[0]
}

</script>

<style scoped lang="less">
span {
  display: block;
}

.item {
  .br(7px);
  display: flex;
  cursor: pointer;
  width: fit-content;
  .trs(0.3s);

  .icon {
    margin: 0 14px 0 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    display: flex;
    align-items: center;

    &-img {
      max-width: 30px;
      max-height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-state {
      margin: 0 0 0 10px;

      &-title {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #fff;
      }

      &-additional {
        margin: 5px 0 0;
        display: block;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: @gray;
        text-transform: uppercase;
      }
    }

  }
}

.item-active {
  background: @thin_black;
  padding: 8px 13px;
  .trs(0.3s);
}
</style>