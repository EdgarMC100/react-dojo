import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { AppProviders } from "@/components/AppProviders"
import { AppShell } from "@/components/AppShell"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: {
    default: "React Dojo",
    template: "%s — React Dojo",
  },
  description: "Simple way to learn React: read it, edit it, run it.",
  metadataBase: new URL("https://react-dojo.vercel.app"),
  openGraph: {
    title: "React Dojo",
    description: "Simple way to learn React: read it, edit it, run it.",
    url: "https://react-dojo.vercel.app",
    images: [{ url: "/og-image.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Dojo",
    description: "Simple way to learn React: read it, edit it, run it.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  )
}
