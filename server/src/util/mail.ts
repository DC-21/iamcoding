import { StatusCodes } from "http-status-codes";
import { createTransport } from "nodemailer";

interface ETypes {
  to: string;
  from: string;
  subject: string;
  name: string;
  activationCode: string;
}

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMail({
  to,
  from,
  subject,
  name,
  activationCode,
}: ETypes) {
  try {
    const html = `
      <p>Hello ${name},</p>
      <p>Thank you for registering! Please activate your account using the following code:</p>
      <p>Activation Code: ${activationCode}</p>
      <p>Thank you!</p>
    `;

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    console.log("Email sent", info);
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      message: "Error sending Email",
    };
  }
}
