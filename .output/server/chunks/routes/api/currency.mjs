import { d as defineEventHandler, c as currencyStorage } from '../../nitro/nitro.mjs';
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

const currency = defineEventHandler(() => {
  return currencyStorage.getCurrencyData();
});

export { currency as default };
//# sourceMappingURL=currency.mjs.map
