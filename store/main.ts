import {setLoading} from "~/composables/minxins";
import * as qs from "qs";
import {currencyItemsType, formType} from "~/types/global.types";

// получение всех элементов
export const populate = (): string => {
    return qs.stringify(
        {
            populate: "*",
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
};


interface stateType {
    isLoading: boolean
    Currency: currencyItemsType[] | null
    CurrencyBack: currencyItemsType[] | null
    sendId: number | null,
    getId: number | null,
    formInfo: formType | null
}

export const useMain = defineStore("main", {
    state: (): stateType => ({
        isLoading: false,
        Currency: null,
        CurrencyBack: null,
        getId: null,
        sendId: null,
        formInfo: null
    }),
    getters: {
        filteredDeals: (state) => {
            return (query: string) => query ? state.CurrencyBack?.filter(p => p.name.toLowerCase().includes(query)) : state.CurrencyBack
        },
    },
    actions: {
        async getCurrentState() {
            setLoading(true)

            const {data, error} = await useFetch(`${useRuntimeConfig().public.URL}?${populate()}`)

            if (error.value) {

            } else {
                this.Currency = data.value as currencyItemsType[]
                this.CurrencyBack = data.value as currencyItemsType[]
            }
            setLoading(false)
        },
        async senFrom(id: number) {
            setLoading(true)
            const {data, error} = await useFetch(`${useRuntimeConfig().public.URL}/from/${id}/?${populate()}`)

            if (error.value) {

            } else {
                let numbers = data.value as [number]

                this.CurrencyBack = this.Currency?.filter(p => numbers.some(k => k === p.ids[0])) ?? this.Currency
            }

            setLoading(false)
        },
        async getPrice() {
            if (this.sendId && this.getId) {
                setLoading(true)
                const {
                    data,
                    error
                } = await useFetch(`${useRuntimeConfig().public.URL}/pair/${this.sendId}/${this.getId}`)

                if (error.value) {

                } else {
                    this.formInfo=data.value as formType
                }

                setLoading(false)
            }

        }

    }
})