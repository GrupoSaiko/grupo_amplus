import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";
import Footer from "./Footer";

const inter = Noto_Sans({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Grupo Amplus",
  description: "Grupo Amplus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
