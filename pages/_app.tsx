import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

const useNextScript = true;

function MyApp({ Component, pageProps }: AppProps) {
  if (useNextScript) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_CONTAINER_ID}`}
      />
      <Script
        strategy="beforeInteractive"
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTM_CONTAINER_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
  } else {
    return (
      <>
        <Component {...pageProps} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_CONTAINER_ID}`}
        />
        <script
          id="gtag-init"
          async
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GTM_CONTAINER_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </>
    );
  }
}

export default MyApp


declare global {
  interface Window { gtag: any; }
}
