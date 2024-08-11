import { Archivo } from "next/font/google";
import "@/styles/_globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "IAGES: Enhancing Trust and Transparency in the Indian Gold Industry",
  description: "IAGES, backed by the World Gold Council, promotes fair practices, compliance, and trust in the Indian gold industry through a unified audit framework and conduct codes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
