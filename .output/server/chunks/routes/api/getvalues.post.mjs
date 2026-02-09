import { d as defineEventHandler, r as readBody, l as log } from '../../nitro/nitro.mjs';
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

const getTKSData = async (data) => {
  try {
    const apiKey = process.env.TKS_KEY;
    if (!apiKey) {
      throw new Error("No TKS_KEY provided");
    }
    const TKS_URL = `https://api1.tks.ru/auto.json/json/${apiKey}/legacy/`;
    const queryParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      queryParams.append(key, value);
    });
    const urlString = TKS_URL + "?" + queryParams.toString();
    const res = await fetch(urlString);
    if (res.status === 500) {
      throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440\u0430");
    }
    return await res.json();
  } catch (error) {
    log("error", "Error in /api/getvalues.post", `${error}, data: ${JSON.stringify(data)}`);
    return {
      error: error.message
    };
  }
};
const getvalues_post = defineEventHandler(async (event) => {
  try {
    const formValues = await readBody(event);
    const TKSData = await getTKSData(formValues);
    return TKSData;
  } catch (error) {
    log("error", "Error in /api/getvalues.post", error);
  }
});

export { getvalues_post as default };
//# sourceMappingURL=getvalues.post.mjs.map
