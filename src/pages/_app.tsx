import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Erkan INCE | Portfolio</title>
        <meta property="og:title" content="Erkan INCE | Portfolio" />
        <meta
          property="og:description"
          content="Check out my projects and technologies I use!"
        />
        <meta
          property="og:image"
          content="https://erkanince.vercel.app/images/hero/hero.png"
        />
        <meta property="og:url" content="https://erkanince.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Erkan INCE | Portfolio" />
        <meta
          name="twitter:description"
          content="Check out my projects and technologies I use!"
        />
        <meta
          name="twitter:image"
          content="https://erkanince.vercel.app/images/hero/hero.png"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
