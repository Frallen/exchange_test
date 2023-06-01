<template>
  <div class="panel-heading">
    <h2>{{ label }}</h2>
    <InputSearch :placeholder="placeholder"  :inputClass="inputClass" @inputValue="e=>searchedValue=e">
      <NuxtImg src="search.svg"></NuxtImg>
    </InputSearch>
  </div>
  <div class="panel-body">

    <div class="panel-body-wrapper">
      <Offers :offers="offers" :route="route"></Offers>
    </div>
  </div>
</template>

<script setup lang="ts">
import {currencyItemsType} from "~/types/global.types";
const searchedValue = ref<string>("")
const emit = defineEmits<{ (e: "searchedValue", searchedValue: string): void }>()

watch(searchedValue, () => {
      emit("searchedValue", searchedValue.value)
    }
)

interface propsType {
  label: string
  route: string,
  offers: currencyItemsType[],
  placeholder: string,
  inputClass: string
}

const {route, offers, placeholder, inputClass} = defineProps<propsType>()

</script>

<style scoped lang="less">

</style>