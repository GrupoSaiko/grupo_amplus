import { Noto_Sans } from "next/font/google";
import "./globals.css";
import "./not-found.css";
import OAtuh from "@/app/OAuth";

const inter = Noto_Sans({ subsets: ["latin"], weight: "300" });

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Grupo Amplus",
  description: "Grupo Amplus",
  creator: "Grupo Amplus",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <OAtuh>
          <main>{children}</main>
        </OAtuh>
      </body>
    </html>
  );
}
