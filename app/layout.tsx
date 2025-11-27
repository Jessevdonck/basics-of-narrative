import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const BASE_PATH = '/basics-of-narrative';

export const metadata: Metadata = {
  title: "Character Gallery | Ironworks",
  description: "The characters from Ironworks",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/images/favicon.png`,
      },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
