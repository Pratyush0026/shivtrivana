import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Shivtrivana - Transform Your Talent Journey",
  description:
    "Leading recruitment agency connecting exceptional talent with visionary organizations. Expert staffing solutions across all industries.",
  keywords: "recruitment, staffing, talent acquisition, executive search, hiring, careers, jobs",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#5B1A8F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
