import { CurrencyStorage } from '../utils/CurrencyStorage'

export default defineEventHandler(() => {
    return CurrencyStorage.getCurrencyData()
});
