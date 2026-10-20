import { n as defineTask, c as currencyStorage, l as log } from '../nitro/nitro.mjs';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'xml2js';
import 'vue';
import 'node:url';
import '@iconify/utils';
import 'consola';

const update = defineTask({
  meta: {
    name: "currency:update",
    description: "Run currency updates"
  },
  run() {
    currencyStorage.updateCurrencyData();
    log("info", "Running task to update currency...");
    return { result: "Success" };
  }
});

export { update as default };
//# sourceMappingURL=update.mjs.map
