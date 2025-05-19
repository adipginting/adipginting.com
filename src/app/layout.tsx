import "./globals.css";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { Lato, Roboto } from "next/font/google";
import cn from "classnames";
import Hamburger from "@/_components/Hamburger";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "Adi Ginting",
  description: "Built on top of NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn(roboto.className)}>
        <div>
          <Navbar />
          <Hamburger />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
