import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Updated fonts to Inter and Nunito for professional healthcare aesthetic
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for PacienteX
  title: "PacienteX - Orientación médica rápida por WhatsApp",
  description:
    "Ayudamos a instituciones de salud a ordenar la demanda y priorizar la atención. Orientación médica por WhatsApp sin reemplazar al profesional de la salud.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <CHANGE> Updated lang to Spanish and font classes
    <html lang="es-AR">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
