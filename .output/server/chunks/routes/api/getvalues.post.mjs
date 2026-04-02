import { d as defineEventHandler, r as readBody, l as log, a as createError } from '../../nitro/nitro.mjs';
import { z } from 'zod';
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

const engineTypes = ["petrol", "diesel", "petrol_electric", "diesel_electric", "electric", "no_engine"];
const powerUnits = ["kvt", "ls"];
const ages = ["3", "35", "57", "7"];
const faceTypes = ["nat", "jur"];
const chassisTypes = ["shs", "nshs", "nshs2"];
const busCapacities = ["gt120", "lt120", "lt120_ec4", "lt120_ec5"];
const tsTypes = [
  "00_8703",
  "00_8704",
  "01_8703",
  "02_8703",
  "03_8703101100",
  "04_8704",
  "05_870410",
  "07_8711201000",
  "08_8711100000",
  "09_8716400000",
  "10_871610",
  "11_890399",
  "12_8903",
  "13_8702"
];
const formValuesSchema = z.object({
  cost: z.string().min(1, "Cost is required"),
  volume: z.string().min(1, "Volume is required"),
  currency: z.string().min(1, "Currency is required"),
  power: z.string().min(1, "Power is required"),
  engine_type: z.enum(engineTypes),
  power_edizm: z.enum(powerUnits),
  age: z.enum(ages),
  face: z.enum(faceTypes),
  ts_type: z.enum(tsTypes),
  mass: z.string().optional(),
  offroad: z.boolean().optional(),
  caravan: z.boolean().optional(),
  chassis: z.enum(chassisTypes).optional(),
  forwarder: z.boolean().optional(),
  buscap: z.enum(busCapacities).optional(),
  mdvs_gt_m30ed: z.boolean().optional(),
  sequential: z.boolean().optional(),
  boat_sea: z.boolean().optional(),
  pp_152_minpromtorg_cb: z.boolean().optional(),
  pp_152_minpromtorg_cost: z.number().optional(),
  pp_152_minpromtorg_poshl: z.number().optional(),
  pp_152_minpromtorg_akciz: z.number().optional(),
  pp_152_minpromtorg_nds: z.number().optional(),
  bus_municipal_cb: z.boolean().optional()
});
const getTKSData = async (data) => {
  try {
    const apiKey = process.env.TKS_KEY;
    if (!apiKey) {
      throw new Error("No TKS_KEY provided");
    }
    const TKS_URL = `https://api1.tks.ru/auto.json/json/${apiKey}/legacy/`;
    const queryParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        queryParams.append(key, String(value));
      }
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
    const body = await readBody(event);
    const result = formValuesSchema.safeParse(body);
    if (!result.success) {
      log("error", "ZOD error in /api/getvalues.post", result.error.issues);
      throw createError({
        statusCode: 400
      });
    }
    const TKSData = await getTKSData(result.data);
    return TKSData;
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    log("error", "Error in /api/getvalues.post", error);
  }
});

export { getvalues_post as default };
//# sourceMappingURL=getvalues.post.mjs.map
