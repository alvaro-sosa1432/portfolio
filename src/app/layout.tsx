import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const bitcountGridDouble = localFont({
  src: "./font/BitcountGridDouble-Regular.ttf",
  weight: "400",
  style: "normal",
});
import "./globals.css";

const poppins = Poppins({
  weight: ["200", "400", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Alvaro sosa | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`${poppins.variable} ${bitcountGridDouble.className}  antialiased  max-w-[100vw] overflow-x-hidden  h-full overflow-y-auto `}
      >
        {children}
      </body>
    </html>
  );
}
