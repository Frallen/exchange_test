<template>
  <div class="input" :class="inputClass">
    <span><slot></slot></span>
    <input type="text" v-model.trim="input" :placeholder="placeholder">
  </div>
</template>
<script setup lang="ts">

interface propsType {
  inputClass: string,
  placeholder: string,
}

const {inputClass, placeholder} = defineProps<propsType>()
const input = ref<string>()
const emit = defineEmits<{ (e: "inputValue", inputValue: string): void }>()
watch(input, () => {
  emit("inputValue", input.value as string)
})
</script>

<style scoped lang="less">

</style>