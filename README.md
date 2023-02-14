# next-app-themes

![](https://github.com/gabxyz/next-app-themes/blob/main/public/demo.gif)

## What is this

This is a basic next.js starter template with themes support in the new `app` directory.

**Check the [Live Demo](https://next-app-themes.vercel.app)**

### Main

- [Next.js](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com/docs)

### UI

- [Radix Primitives](https://www.radix-ui.com)
- [Radix Colors](https://www.radix-ui.com/colors)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

### Plugins

- [windy-radix-palette](https://github.com/brattonross/windy-radix-palette)
- [tailwindcss-radix](https://github.com/ecklf/tailwindcss-radix)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

### Utilities

- [next-themes](https://github.com/pacocoursey/next-themes)
- [clsx](https://github.com/lukeed/clsx)
- [prettier](https://prettier.io)
- [eslint](https://eslint.org)

### Others

- [Vercel Analytics](https://vercel.com/analytics)

Also some custom transitions from [Carbon Design System](https://carbondesignsystem.com/guidelines/motion/overview)

## How does it work

To make [next-themes](https://github.com/pacocoursey/next-themes) work with the `app` directory, I basically implemented [this solution](https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564), commented by [@WITS](https://github.com/WITS) in an issue in the next-themes repository.

This template comes with a `providers.tsx` component that is used to render `ThemeProvider` from [next-themes](https://github.com/pacocoursey/next-themes) using the "use client" directive, which is required for [third-party packages in the new `app` directory](https://beta.nextjs.org/docs/rendering/server-and-client-components#rendering-third-party-context-providers-in-server-components). The `providers.tsx` component is rendered inside the body tag in the root `layout.tsx`.

There's also a `theme-select.tsx` component, that uses the `useTheme` hook to handle theme state and `useState` hooks for handling display value and animation states. This component was built with radix's [dropdown-menu](https://www.radix-ui.com/docs/primitives/components/dropdown-menu) primitive and uses [framer-motion](https://www.framer.com/motion) for the animations.

## Usage

You don't need to use tailwind `dark:` selectors for dark mode styles, since it's all handled automatically with [radix colors]() and [windy-radix-palette](). I strongly recommend checking out the [radix colors docs](https://www.radix-ui.com/docs/colors), they have detailed palette composition sections that help you understand how to use their color system.

You can also style any [radix primitive](https://www.radix-ui.com) component using the `rdx-*:` prefix in tailwind classes. See more in [tailwindcss-radix](https://github.com/ecklf/tailwindcss-radix)

**Clone it**

```bash
git clone https://github.com/gabxyz/next-app-themes [your app name]
```

**Install the dependencies**

```bash
pnpm i
```
