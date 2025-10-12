export default defineTask({
  meta: {
    name: "currency:update",
    description: "Run currency updates",
  },
  run() {
    CurrencyStorage.updateCurrencyData()
    log('info', "Running task to update currency...");
    return { result: "Success" };
  },
});