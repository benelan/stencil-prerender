# Stencil Prerender

I've been trying to get the [`hydrate`](https://stenciljs.com/docs/hydrate-app) bundle working and have a few issues:

1. Assets are not loading
2. The components flash on initial load

I'm wondering if I'm doing something wrong, or if you have any suggestions to fix the above issues. The prerendering happens in `server.js`

## Repro Steps

1. Run:
    ```bash
    git clone git@github.com:benelan/stencil-prerender.git
    cd stencil-prerender
    npm i
    npm run dev
    ```
2. Open the app in the browser
3. Click on the big blue "Calcite" link
4. Notice that components flash when they load and that there is a banana icon next to the header. The components flashing when dynamically importing on the client side makes sense, so that's not an issue
5. Shutdown the dev server
6. run `npm run server`
7. Open the app in the browser
8. Click on the big blue "Calcite" link
9. Notice that the components flash on initial load and there is no banana icon. You can see the flash if you refresh the `/calcite` route as well. However, if you click back and forth between the "Home" and "Calcite" blue links it works great after the initial load.


It seems like prerendering and hydrating the components should prevent this flash. Maybe the hydration is causing a React VDOM diff and a rerender? Do you have any working examples for using the `hydrate` bundle that I can use as reference?


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
