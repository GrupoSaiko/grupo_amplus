import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

/**
 * Handle send a contact email to amplus
 * @param {Request} req - Next request
 * @returns {Promise<NextResponse>}
 */
export async function POST(req) {
  try {
    /**
     * @type {import("@/app/customHooks/useContact/types").ContactFormBody}
     */
    const { email, enterprise, message, name, phone, device, ip } =
      await req.json();

    const mailjet = new Mailjet({
      apiKey: process.env.MAILJET_APPI_KEY,
      apiSecret: process.env.MAILJET_APPI_SECRET,
    });

    const data = await mailjet.post("send", { version: "v3.1"  }).request({
      Messages: [
        {
          From: {
            Email: "redes@praxia.mx",
            Name: "Redes Praxia",
          },
          To: [
            
            {
              Email: "jperez@saiko.mx",
              Name: "José Luis",
            },
          ],
          TemplateID: 5478464,
          TemplateLanguage: true,
          Subject: "Praxia Documentos",
          Variables: {
            nombre: name,
            correo: email,
            telefono: phone,
            empresa: enterprise,
            mensaje: message,
            ip,
            dispositivo: device,
          },
        },
      ],
    });

    return NextResponse.json(
      {
        message: "Nos contactaremos lo más pronto posible 💻",
        data:data.response.data
      },
      {
        status: data.response.status,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "No pudimos recibir el mensaje, estamos arreglando el sitio 😖",
      },
      {
        status: 500,
      }
    );
  }
}
