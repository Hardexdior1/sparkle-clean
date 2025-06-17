import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header" 
import Footer from "./components/Footer"
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SparkleClean Pro - Professional Cleaning Services",
   icons: {
    icon: '/sparkleclean-favicon.ico',
  },
  description:
    "Transform your space into a spotless sanctuary with our professional cleaning services. Trusted by 500+ happy customers.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
