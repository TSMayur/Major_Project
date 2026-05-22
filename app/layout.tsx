import type React from "react"
import type { Metadata } from "next"
// REMOVED: import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// REMOVED: const _inter = ...
// REMOVED: const _merriweather = ...

export const metadata: Metadata = {
  title: "EdgeLearn - AI Tutor",
  description: "Your personalized, offline AI learning assistant",
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
    <html lang="en">
      {/* REMOVED: _inter.className */}
      {/* ADDED: font-sans to use the system font defined in globals.css */}
      <body className={`antialiased font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}