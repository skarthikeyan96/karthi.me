import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
   const site = "https://karthi.me";
   const canonicalURL = site + useRouter().pathname

  return (
    <>
      <Head>
        <link rel ="canonical"  href={canonicalURL}/>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
