import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const stats = defineEventHandler(() => {
  return {
    cpuUsage: process.cpuUsage(),
    ramUsage: process.memoryUsage()
  };
});

export { stats as default };
//# sourceMappingURL=stats.mjs.map
