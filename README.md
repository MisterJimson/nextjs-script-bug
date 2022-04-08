This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# This is a repo to reproduce a bug with Next Script

With `useNextScript` set to true in `pages/_app.tsx`
- Go to [http://localhost:3000/test1](http://localhost:3000/test1) to reproduce the issue on page load
- Go to [http://localhost:3000/test2](http://localhost:3000/test1) to reproduce the issue on button click

In both cases you should see the NextJS error dialog.




With `useNextScript` set to false in `pages/_app.tsx`
- Go to [http://localhost:3000/test1](http://localhost:3000/test1) to try to reproduce the issue on page load
- Go to [http://localhost:3000/test2](http://localhost:3000/test1) to try to reproduce the issue on button click

In both cases no errors are thrown.
