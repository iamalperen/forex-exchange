import {reactive} from 'vue'

export const state = reactive({
    selectedExchange: '',
    exchangeList: [],
    selectedSymbol: '',
    symbolList: [],
    selectedSymbolClosePrices: [],
    selectedInterval: 'D'
})