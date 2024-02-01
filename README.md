# Vini Boilerplate

A Next.js template for building apps with Radix UI and Tailwind CSS.

# Use this template

```bash
  pnpm create next-app -e https://github.com/vinihvc/vini-boilerplate my-app
```

## Features

- Radix UI Primitives
- Next with `appdir`
- Tailwind CSS
- Fonts with `@next/font`
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Storybook
- Biome
- Husky + lint-staged
- Components by [shadcn/ui](https://ui.shadcn.com/)

### Class Merging

The `cn` util handles conditional classes and class merging.

### Input

```ts
cn("px-2 bg-neutral-100 py-2 bg-neutral-200");
// Outputs `p-2 bg-neutral-200`
```

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
