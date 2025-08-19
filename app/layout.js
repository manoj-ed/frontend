import "./globals.css";
import Nav from "@/app/components/navbar/Navbar";
import Menu from "@/app/components/navbar/Menu";
import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Providers from "./store/providers.js";
// import "antd/dist/reset.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Equipments Dekho",
  description: "Find Rent Build",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="px-0 md:px-20 ">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toasterId="default"
          toastOptions={{
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <Nav />
        <Menu />
        <Providers>
            <main className="flex-grow">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
