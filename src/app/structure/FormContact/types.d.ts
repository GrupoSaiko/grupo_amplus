import { ContactFormI, ReturnUseContact } from "@/app/customHooks/useContact/types";
import { UseFormReturn } from "react-hook-form";

export interface StateFormContact {
  isSendingEmail: boolean;
}

export interface PropsFormContact
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children?: JSX.Element | JSX.Element[];

  /**
   * Callback executed when the email was sended correctly
   * @returns {void}
   */
  onSended?: () => void;
}

export interface ContextFormContact extends ReturnUseContact {
  // form: UseFormReturn<ContactFormI>;
  idForm:string;
}
