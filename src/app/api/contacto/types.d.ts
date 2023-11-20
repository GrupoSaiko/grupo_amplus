import { ContactFormI } from "@/app/customHooks/useContact/types";
import { NextApiRequest } from "next";

export interface PostContact extends Request {
  body: ContactFormI;
}
