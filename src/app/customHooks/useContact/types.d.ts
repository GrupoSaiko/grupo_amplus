import { StateFormContact } from "@/app/structure/FormContact/types";
import { UseFormReturn } from "react-hook-form";

export interface ContactFormI {
  name: string;
  email: string;
  enterprise: string | null;
  message: string | null;
  phone: string;
}

export interface ContactFormBody extends ContactFormI{
  device:string;
  ip:string;
}

export interface ReturnUseContact extends StateFormContact {
  form: UseFormReturn<ContactFormI>;
  sendEmail: (formValues: ContactFormI) => Promise<void>;
  setBrowserInfo:(os:string,browser:string)=>void;
}
