import "./globals.css";
import Nav from "@/app/components/navbar/Navbar";
import Menu from "@/app/components/navbar/Menu";
// import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Providers from "./store/providers.js";
// import "antd/dist/reset.css";
import { Toaster } from "react-hot-toast";
import { Montserrat } from "next/font/google";


export const metadata = {
  title: "Equipments Dekho",
  description: "Find Rent Build",
};

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick what you’ll use
  variable: "--font-inter", // optional CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      {/* <body className="px-0 md:px-20 max-w-7xl 2xl:px-20 mx-auto flex flex-col min-h-screen 2xl:bg-[#f5f5f5]"> */}
      <body className="px-0  max-w-7xl  mx-auto flex flex-col min-h-screen ">
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
            <main className="flex-grow bg-white">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
