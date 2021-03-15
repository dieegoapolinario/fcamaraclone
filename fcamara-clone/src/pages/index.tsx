import styles from '../styles/pages/Home.module.css';

import { HomeIntro } from "../components/HomeIntro";
import { HomeParceiros } from "../components/HomeParceiros";
import { HomeServices } from '../components/HomeServices';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeIntro />
    </div>
  )
}
