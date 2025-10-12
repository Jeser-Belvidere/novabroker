import { CurrencyStorage } from "../utils/CurrencyStorage";

export default defineNitroPlugin(() => {
  if (CurrencyStorage.getCurrencyData() === null) {
    log("info", "currencyStorage is empty. Loading...");
    CurrencyStorage.updateCurrencyData();
  }
});
