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