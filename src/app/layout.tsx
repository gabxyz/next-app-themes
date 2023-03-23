import "@/styles/globals.css"

import { Inter as FontSans } from "@next/font/google"
import clsx from "clsx"

import { AnalyticsWrapper } from "@/components/analytics"
import Providers from "@/components/providers"

export const metadata = {
  title: {
    default: "next-app-themes",
    template: "%s | next-app-themes",
  },
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Next.js",
    "React",
    "Typescript",
    "JavaScript",
    "TailwindCSS",
    "next-themes",
    "App Directory",
    "Radix Primitives",
    "Radix Colors",
    "Template",
    "Website Color Themes",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "gabxyz",
    card: "summary_large_image",
  },
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("font-sans", fontSans.variable)}>
        <Providers>{children}</Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
