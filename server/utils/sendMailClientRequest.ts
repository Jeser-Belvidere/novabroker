import nodemailer from "nodemailer";

export const sendMailClientRequest = async ({
  name,
  mail,
  phone,
}: {
  name: string;
  mail: string;
  phone: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"novabroker" <novabroker@yandex.ru>',
      to: "novabroker@yandex.ru",
      subject: "Новая заявка",
      text: "Новая заявка",
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          .email-container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }
          .header {
            background: #053326;
            color: #dabb8d;
            text-align: center;
            padding: 20px;
            font-size: 24px;
          }
          .body {
            padding: 20px;
            color: #053326;
          }
          .footer {
            text-align: center;
            background: #eeeeee;
            padding: 10px;
            font-size: 12px;
            color: #777777;
          }
          .date {
            color: #777777;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            NOVABROKER
          </div>
          <div class="body">
            <h1>Новая заявка</h1>
            <p>Почта клиента: <b>${mail}</b></p>
            <p>Имя клиента: <b>${name}</b></p>
            <p>Телефон клиента: <b>${phone}</b></p>
            <p class="date">Время сервера: <b>${new Date(Date.now())}</b></p>
          </div>
          <div class="footer">
            © ${new Date(Date.now()).getFullYear()} Novabroker.
          </div>
        </div>
      </body>
    </html>
  `,
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};
