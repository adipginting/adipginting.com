import "./globals.css";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { Lato } from "next/font/google";
import cn from "classnames";
import Hamburger from "@/_components/Hamburger";

const notosans = Lato({ weight: ["300"], subsets: ["latin"] });

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
      <body className={cn(notosans.className)}>
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
