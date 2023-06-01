<template>
  <div class="index">
    <div class="index-wrapper">
      <div class="index-wrapper-item panel">
        <Panel :offers="Currency" :route="'send'" :label="'Отдаете'" :placeholder="'Поиск валюты'"
               :inputClass="'input-search'"></Panel>
      </div>
      <div class="index-wrapper-item panel">
        <Panel :offers="filteredDeals(searchedValue)" :label="'Получаете'" :route="'get'" :placeholder="'Поиск валюты'"
               :inputClass="'input-search'" @searchedValue="e=>searchedValue=e"></Panel>
      </div>
      <div class="index-wrapper-item panel" v-if="sendId&&getId">
        <div class="panel-body">
          <div class="panel-body-wrapper change-wrapper">
            <div class="change">
              <ChangeItem :label="'Отдаете'" :ImageId="sendId" :item="formInfo?.from"></ChangeItem>
              <ChangeItem :label="'Отдаете'" :ImageId="getId" :item="formInfo?.to"></ChangeItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const {Currency, filteredDeals, formInfo, sendId, getId} = storeToRefs(useMain())
const searchedValue = ref<string>("")


</script>
<style scoped lang="less">
.index {

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -24px 0 0 -24px;

    &-item {
      width: calc(100% / 3 - 24px);
      margin: 24px 0 0 24px
    }
  }
}
</style>