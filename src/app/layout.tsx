import "@/styles/globals.css"

import { Inter as FontSans } from "@next/font/google"
import clsx from "clsx"

import Providers from "@/components/providers"

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
      </body>
    </html>
  )
}
