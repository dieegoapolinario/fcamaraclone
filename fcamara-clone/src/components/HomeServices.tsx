import styles from '../styles/components/HomeServices.module.css';

import CheckIcon from '@material-ui/icons/Check';

export function HomeServices(){
  return(
    <div className={styles.containerServices}>
      <div className={styles.servicesTitle}>
        <p>SERVIÇOS</p>
        <h1>Transformamos digitalmente seu negócio</h1>
        <a href="#">business</a>
        <a href="#">digital</a>
        <a href="#">data</a>
        <a href="#">cloud</a>
        <a href="#">people</a>
      </div>
      <div className={styles.logoServices}>
        <img src="https://www.fcamara.com.br/images/home/servicos-business.png" alt="logo-services"/>
      </div>
      <div className={styles.business}>
        <h2>Business</h2>
        <p><CheckIcon style={{color: "#FE4400"}} /> Consulting</p>
        <p><CheckIcon style={{color: "#FE4400"}} /> Tech Due Diligence</p>
        <p><CheckIcon style={{color: "#FE4400"}} /> Corporate Venture</p>
      </div>
    </div>
  )
}