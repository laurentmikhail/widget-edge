This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Freshwater widget: start with the pill on selected pages

Use the same loader and widget ID. Add `data-initial-state="pill"` only on pages
that should start with the compact Festival Guide pill:

```html
<script
  defer
  src="https://widget-edge.vercel.app/loader.v3.js"
  data-widget-id="freshwater-festival-guide"
  data-initial-state="pill">
</script>
```

Omitting the attribute preserves the existing behavior: show the banner unless
the visitor previously dismissed it. With `data-initial-state="pill"`, the page
always starts with the pill, even if the visitor opened the banner elsewhere.
Clicking the pill opens the banner; closing the banner returns to the pill.
Only user interactions save the open/closed preference, so loading a pill-first
page does not change the preference used on other pages. That preference remains
shared across pages on the same origin using the same widget ID.

This option applies to the Freshwater template only. Other templates and
`loader.v1.js` retain their existing behavior. Deploy the updated `loader.v3.js`
before using the new attribute on hosted pages.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
