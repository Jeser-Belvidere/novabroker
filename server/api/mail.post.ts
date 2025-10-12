import { sendMailError } from "../utils/sendMailError";
import { sendMailClientRequest } from "../utils/sendMailClientRequest";

export default defineEventHandler(async (event) => {
  try {
    const { mail, phone, name } = await readBody(event);

    if (!mail || !phone || !name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Not correct request'
      })
    }

    sendMailClientRequest({ mail, phone, name })

    return {
      status: 'ok'
    }

  } catch (e) {
    sendMailError(e)
    log('error', 'Error in /api/mail.post', e)
    throw e
  }
});
