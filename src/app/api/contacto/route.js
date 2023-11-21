import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Handle send a contact email to amplus
 * @param {Request} req - Next request
 * @returns {Promise<NextResponse>}
 */
export async function POST(req) {
  try {
    /**
     * @type {import("@/app/customHooks/useContact/types").ContactFormI}
     */
    const { email, enterprise, message, name, phone } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const responseEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.RESEND_EMAIL_DEV],
      subject: "Grupo Amplus - Contacto",
      html: `
      <p>
        <b>Nombre:</b>
        ${name}
      </p>

      <p>
        <b>Correo:</b>
        ${email}
      </p>

      <p>
        <b>Teléfono:</b>
        ${phone}
      </p>

      ${
        enterprise !== null
          ? `<p>
            <b>Empresa:</b>${enterprise}
          </p>`
          : null
      }

      ${
        message !== null
          ? `<p>
            <b>Mensaje:</b>${message}
          </p>`
          : null
      }

      `,
    });

    if (responseEmail.data === null)
      return NextResponse.json(
        {
          error: responseEmail.error.message,
          message:
            "No pudimos recibir el mensaje, estamos arreglando el sitio 😖",
        },
        {
          status: responseEmail.error?.statusCode || 500,
        }
      );

    return NextResponse.json(
      {
        message: "Nos contactaremos lo más pronto posible 💻",
      },
      {
        status: 200,
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
