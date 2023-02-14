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
  description: "next.js app directory template with themes support",
  creator: "gabxyz",
  icons: {
    icon: "/favicon.ico",
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
  },
  openGraph: {
    title: "next-app-themes",
    description: "next.js app directory template with themes support",
    url: "https://next-app-themes.vercel.app",
    siteName: "next-app-themes",
    images: [
      {
        url: "https://next-app-themes.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={clsx("font-sans", fontSans.variable)}>
        <Providers>{children}</Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
