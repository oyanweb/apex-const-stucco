import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"], // choose weights you need
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apex Exteriors | Construction & Stucco",
  description: "Construction and stucco services in Toronto",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
