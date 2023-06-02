import {useMain} from "~/store/main";


export const overFlow = (state: boolean): void => {
    if (process.client) {
        if (state) {
            document.body.style.overflowY = "hidden";
        } else document.body.style.overflowY = "visible";
    }
};
export const setLoading = (loading: boolean): void => {
    useMain().isLoading = loading;
    overFlow(loading)
}

export const filteredDeals = <T>(state: T, query: string): T => {
    return query ? state.filter(p => p.name.toLowerCase().includes(query)) : state
}

export const createError = (): void => {
    showError({message: 'Попробуйте позже или перезагрузите страницу', statusCode: 404})
}