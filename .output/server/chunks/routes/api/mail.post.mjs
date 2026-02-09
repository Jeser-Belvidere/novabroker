import { d as defineEventHandler, r as readBody, a as createError, s as sendMailClientRequest, b as sendMailError, l as log } from '../../nitro/nitro.mjs';
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

const mail_post = defineEventHandler(async (event) => {
  try {
    const { mail, phone, name } = await readBody(event);
    if (!mail || !phone || !name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Not correct request"
      });
    }
    sendMailClientRequest({ mail, phone, name });
    return {
      status: "ok"
    };
  } catch (e) {
    sendMailError(e);
    log("error", "Error in /api/mail.post", e);
    throw e;
  }
});

export { mail_post as default };
//# sourceMappingURL=mail.post.mjs.map
