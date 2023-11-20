import * as yup from "yup";

const MIN_STANDAR = {
  value: 1,
  message: "Mínimo 1 caracter",
};

const MAX_STANDAR = {
  value: 256,
  message: "Máximo 256 caracteres",
};

export const validateContact = yup.object({
  name: yup
    .string()
    .required("Required")
    .max(MAX_STANDAR.value, MAX_STANDAR.message)
    .min(MIN_STANDAR.value, MIN_STANDAR.message)
    .typeError("El nombre debe ser un texto"),

  email: yup
    .string()
    .email("Escribe un correo válido")
    .required("Correo obligatorio")
    .max(MAX_STANDAR.value, MAX_STANDAR.message)
    .min(MIN_STANDAR.value, MIN_STANDAR.message)
    .typeError("El correo debe de ser texto"),

  enterprise: yup
    .string()
    .nullable(true)
    .default(null)
    .max(MAX_STANDAR.value, MAX_STANDAR.message)
    .typeError("Nombre de la empresa debe ser texto o texto vacío"),

  message: yup
    .string()
    .nullable(true)
    .default(null)
    .max(1000, "Máximo 1000 caracteres")
    .typeError("El mensaje debe ser un texto o texto vacío"),

  phone: yup
    .string()
    .required("Teléfono obligatorio")
    .max(10, "Maximo 10 números")
    .min(10,"Minimo 10 números"),
});
