import Head from 'next/head';

import { HeaderMenu } from "../components/HomeIntro";

export default function Home() {
  return (
    <div className="container">
      <Head>        
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
      </Head>

      <HeaderMenu />
    </div>
  )
}
