import type { Metadata } from "next";
import localFont from "next/font/local";
import { Oleo_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ButtonUp from "@/components/button-up";
import Footer from "@/components/footer";

const myCustomFont = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

const oleoScriptFont = Oleo_Script({
  weight: ["400", "700"],
  variable: "--oleo-script-font",
});

export const metadata: Metadata = {
  title: "Naeem Abood",
  description: "Naeem Abood Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myCustomFont.variable} ${oleoScriptFont.variable} bg-[#1A1A1A] font-montserrat`}
      >
        <ButtonUp />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
