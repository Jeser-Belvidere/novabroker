import { CurrencyStorage } from '../utils/CurrencyStorage'

export default defineEventHandler((): TCurrencyData => {
	return CurrencyStorage.getCurrencyData()
});
