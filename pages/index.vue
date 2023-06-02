<template>
  <div class="index">
    <div class="index-wrapper">
      <div class="index-wrapper-item panel">
        <Panel :offers="filteredDeals<currencyItemsType[]>(Currency as currencyItemsType[],searchedFirst)"
               :route="'send'" :label="'Отдаете'" :placeholder="'Поиск валюты'"
               :inputClass="'input-search'" @searchedValue="e=>searchedFirst=e"></Panel>
      </div>
      <div class="index-wrapper-item panel">
        <Panel :offers="filteredDeals<currencyItemsType[]>(CurrencyBack as currencyItemsType[],searchedSecond)"
               :label="'Получаете'" :route="'get'" :placeholder="'Поиск валюты'"
               :inputClass="'input-search'" @searchedValue="e=>searchedSecond=e"></Panel>
      </div>
      <div class="index-wrapper-item panel" v-if="sendId&&getId">
        <div class="panel-body">
          <div class="panel-body-wrapper change-wrapper">
            <div class="change" v-if="formInfo">

              <div class="change-item">
                <h3> Отдаете </h3>
                <div class="change-item-wrapper">
                  <div class="input">
                    <span><NuxtImg :src="filteredImage(sendId).logo.simple" v-if="filteredImage"/> {{
                        formInfo?.from.currency
                      }}</span>
                    <input type="number" :min="formInfo.from.min" :max="formInfo?.from.max" v-model="FirstCurrency"
                           @input="e=>Calc(e,'first')">
                  </div>
                  <div class="change-range">
                    <div>Мин.: {{ formInfo.from.min + ' ' + formInfo.from.currency }}</div>
                    <div>Макс.: {{ formInfo.from.max + ' ' + formInfo.from.currency }}</div>
                  </div>
                </div>
              </div>
              <div class="change-item">
                <h3> Получаете </h3>
                <div class="change-item-wrapper">
                  <div class="input">
                    <span><NuxtImg :src="filteredImage(getId).logo.simple"
                                   v-if="filteredImage"/> {{ formInfo.to.currency }}</span>
                    <input type="number" :min="formInfo.to.min" :max="formInfo.to.max" v-model="SecondCurrency"
                           @input="e=>Calc(e,'second')">
                  </div>
                  <div class="change-range">
                    <div>Мин.: {{ formInfo.to.min + ' ' + formInfo.to.currency }}</div>
                    <div>Макс.: {{ formInfo.to.max + ' ' + formInfo.to.currency }}</div>
                  </div>
                </div>
              </div>
            </div>
            <form @submit.prevent="" class="form">
              <h2>Ваши реквизиты</h2>
              <InputSearch class="form-item" :placeholder="'ФИО Получателя'" :inputClass="'input-form'">
                <NuxtImg src="avatar.svg"></NuxtImg>
              </InputSearch>
              <InputSearch class="form-item" :placeholder="'Почта получателя'" :inputClass="'input-form'">
                <NuxtImg src="mail.svg"></NuxtImg>
              </InputSearch>
              <div class="policy form-item">
                <NuxtImg src="checkbox-uncheck.svg"></NuxtImg>
                <div>
                  Я согласен с обработкой
                  <NuxtLink to="/">персональных данных</NuxtLink>
                  и
                  <NuxtLink to="/">принимаю правила обмена</NuxtLink>
                </div>
              </div>
              <Button class="form-item"><span><NuxtImg src="refresh.svg"></NuxtImg></span> Перейти к оплате</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {currencyItemsType} from "~/types/global.types";

const {Currency, CurrencyBack, formInfo, sendId, getId, filteredImage} = storeToRefs(useMain())
const searchedFirst = ref<string>("")
const searchedSecond = ref<string>("")

let FirstCurrency = useState<number>()
let SecondCurrency = useState<number>()


const Calc = (e: Event, str: string): void => {

  if (str === "first") {
    SecondCurrency.value = formInfo.value.course.toFixed(2) * e.target.value
  } else {
    FirstCurrency.value = formInfo.value.course.toFixed(2) * e.target.value
  }

}

</script>
<style scoped lang="less">
.index {
  margin: 20px 0;

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -24px 0 0 -24px;

    &-item {
      width: calc(100% / 3 - 24px);
      margin: 24px 0 0 24px;
      @media @lg {
        width: 100%;
      }
    }
  }
}

.form {
  margin: 25px 0 0;

  &-item {
    margin: 20px 0 0;
  }

  &-item:first-child {
    margin: 0;
  }

  .button {
    margin: 20px auto 0;
  }
}
</style>