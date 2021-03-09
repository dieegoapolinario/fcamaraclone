import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

import { HomeIntro } from "../components/HomeIntro";
import { HomeParceiros } from "../components/HomeParceiros";
import { HomeServices } from '../components/HomeServices';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>        
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
      </Head>

      <HomeIntro />
      </div>
  )
}
