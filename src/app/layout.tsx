import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Finlandica } from "next/font/google";

const finlandica = Finlandica({ subsets: ["latin"] });

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
      <body className={finlandica.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
