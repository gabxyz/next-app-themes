import clsx from "clsx"
import { ArrowRight } from "lucide-react"

import ThemeSelect from "@/components/theme-select"

interface Tools {
  toolName: string
  toolLink: string
}

interface Stack {
  category: string
  tools: Tools[]
}

const stack: Stack[] = [
  {
    category: "main",
    tools: [
      {
        toolName: "next.js",
        toolLink: "https://nextjs.org/",
      },
      {
        toolName: "typescript",
        toolLink: "https://www.typescriptlang.org/",
      },
      {
        toolName: "tailwindcss",
        toolLink: "https://tailwindcss.com/",
      },
    ],
  },
  {
    category: "ui",
    tools: [
      {
        toolName: "radix primitives",
        toolLink: "https://www.radix-ui.com/",
      },
      {
        toolName: "radix colors",
        toolLink: "https://www.radix-ui.com/colors",
      },
      {
        toolName: "framer motion",
        toolLink: "https://www.framer.com/motion/",
      },
      {
        toolName: "lucide icons",
        toolLink: "https://lucide.dev/",
      },
    ],
  },
  {
    category: "plugins",
    tools: [
      {
        toolName: "windy-radix-palette",
        toolLink: "https://github.com/brattonross/windy-radix-palette",
      },
      {
        toolName: "tailwindcss-radix",
        toolLink: "https://github.com/ecklf/tailwindcss-radix",
      },
      {
        toolName: "prettier-plugin-tailwindcss",
        toolLink: "https://github.com/tailwindlabs/prettier-plugin-tailwindcss",
      },
      {
        toolName: "simple-import-sort",
        toolLink: "https://github.com/lydell/eslint-plugin-simple-import-sort",
      },
    ],
  },
  {
    category: "utilities",
    tools: [
      {
        toolName: "next-themes",
        toolLink: "https://github.com/pacocoursey/next-themes",
      },
      {
        toolName: "clsx",
        toolLink: "https://github.com/lukeed/clsx",
      },
      { toolName: "prettier", toolLink: "https://prettier.io" },
      { toolName: "eslint", toolLink: "https://eslint.org" },
    ],
  },
  {
    category: "others",
    tools: [
      {
        toolName: "vercel analytics",
        toolLink: "https://vercel.com/analytics",
      },
    ],
  },
]
export const metadata = {
  description: "next.js app directory template with themes support",
  openGraph: {
    title: "next-app-themes",
    description: "next.js app directory template with themes support",
    url: "https://next-app-themes.vercel.app",
    siteName: "next-app-themes",
    images: [
      {
        url: "https://next-app-themes.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="mx-2 flex min-h-screen flex-col items-center justify-center gap-8 text-center text-sm md:text-base">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gabxyz/next-app-themes"
        className={clsx(
          "bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-xl font-bold text-transparent",
          "select-none hover:opacity-80 motion-safe:duration-150 motion-safe:ease-productive-standard",
        )}
      >
        next-app-themes
      </a>
      <p>
        this is a basic next.js template pre-configured to support themes in the
        new app directory
      </p>
      <ul>
        {stack.map(({ category, tools }) => (
          <li
            key={category}
            className="mt-2 flex flex-wrap items-center text-gray-12"
          >
            <span className="flex items-center font-medium">
              {category}
              <ArrowRight className="mx-1" size={16} />
            </span>
            {tools.map(({ toolName, toolLink }) => (
              <div key={toolLink} className="text-gray-11">
                <a
                  key={toolLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={toolLink}
                  className="text-gray-11 hover:text-gray-12 motion-safe:duration-200 motion-safe:ease-productive-standard"
                >
                  {toolName}
                </a>
                {tools[tools.length - 1]?.toolName !== toolName && (
                  <span className="mx-1.5 mb-0.5 inline-flex h-1 w-1 flex-none rounded-full bg-gray-11"></span>
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>
      <ThemeSelect />
      <p className="mt-16 text-sm font-medium text-slate-11">
        made by{" "}
        <a
          className="cursor-pointer font-semibold text-slate-12 hover:text-slate-11 motion-safe:duration-150 motion-safe:ease-productive-standard"
          aria-label="github profile"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/gabxyz"
        >
          gabxyz
        </a>
      </p>
    </main>
  )
}
