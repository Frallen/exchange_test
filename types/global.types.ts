export interface currencyItemsType {
    currency: [string]
    filter: [string]
    ids: [number]
    logo: {
        simple: string
        white: string
        withBackground: string
    }
    name: string
}

export interface formType {
    bonus: number
    course: number
    from: infoType
    to: infoType
    notify: string
}
export type infoType={
    currency: string
    max: number
    min: number
    monitoringCode: string
    notify: string
    round: string
}