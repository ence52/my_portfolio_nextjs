import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
