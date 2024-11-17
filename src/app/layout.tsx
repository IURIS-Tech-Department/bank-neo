import { Montserrat } from "next/font/google";

import "./styles/globals.css";
import { metadata } from "./config/metadata";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} sizes="32x32" />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="manifest" href={metadata.manifest} />
      </head>
      <body className={`${montserrat.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
