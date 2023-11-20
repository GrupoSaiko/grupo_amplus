import Swal from "sweetalert2";
import { isOkRes } from "../api";

/**
 * Attempt send the email for contact
 * @param {import('@/app/customHooks/useContact/types').ContactFormI} contactValues - Form data
 */
export async function attemptSendEmail(contactValues) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contacto`, {
      method: "POST",
      body: JSON.stringify(contactValues),
      headers:{
        "Content-Type":"application/json"
      }
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
}
