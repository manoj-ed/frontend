import "./globals.css";
import Nav from "@/app/components/navbar/Navbar";
import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Providers from "./store/providers.js";

export const metadata = {
  title: "Equipments Dekho",
  description: "Find Rent Build",
};

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="px-0 md:px-20">
        <Nav />
        <Providers>{children}</Providers>

        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
