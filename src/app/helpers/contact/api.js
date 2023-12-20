import Swal from "sweetalert2";
import { isOkRes } from "../api";
import { ClientJS } from 'clientjs';

/**
 * Attempt send the email for contact
 * @param {import('@/app/customHooks/useContact/types').ContactFormI} contactValues - Form data
 */
export async function attemptSendEmail(contactValues) {

  const client = new ClientJS();

  const browser = client.getBrowser();
  const os = client.getOS();

  const device = `<p>Intento de contacto por: Dispositivo ${os} en navegador ${browser}</p>`;

  try {
    const ip = await ipOverview();

    const body = JSON.stringify({
      ...contactValues,
      device,
      ip
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contacto`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    /**
     * Response of server
     * @type {import("./types").ContactResI}
     */
    const data = await res.json();

    if (isOkRes(res.status, res.ok)) {
      Swal.fire({
        title: "Correo enviado",
        text: data.message,
        icon: "success",
      });
      return true;
    }

    Swal.fire({
      title: "Ooops",
      text: data.message,
      icon: "error",
    });
    return false;
  } catch (error) {
    return false;
  }

  async function ipOverview() {
    try {
      const res = await fetch(`http://ip-api.com/json/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      /**
       * @type {import("./types").IPOverview}
       */
      const data = await res.json();

      return `<p>Contacto desde: ${data.country}, ${data.regionName}, ${data.city} ${data.zip}</p>`;
    } catch (error) {
      return "";
    }
  }
}
