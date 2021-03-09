import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import styles from '../styles/components/HomeParceiros.module.css';

export function HomeParceiros(){

  return(
    <div className={styles.containerParceiros}>
      <div className={styles.conteudo}>
        <p>NOSSOS CASES</p>
        <h1>Somos parceiros das melhores empresas</h1>
      </div>
      <div className={styles.circles}>
        <span>....</span>
        <span>....</span>
        <span>....</span>
        <span>....</span>
        <span>....</span>
      </div>
      <div className={styles.circlesSmall}>
        <span>..</span>
        <span>..</span>
        <span>x</span>
      </div>
      <div className={styles.empresas}>
        <div className={styles.movieRowLeft}>
          <NavigateBeforeIcon style={{fontSize: 50, color: "#FE4400"}} />
        </div>
        <div className={styles.empresasRow}>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-01.png" alt="Riachuelo"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-02.png" alt="ViaVarejo"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-03.png" alt="Walmart"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-04.png" alt="Dasa"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-05.png" alt="Linx"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-06.png" alt="Sodexo"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-07.png" alt="Movida"/></span>
          <span><img className={styles.empresasLogo} src="https://www.fcamara.com.br/images/home/logos-clientes/logo-08.png" alt="Drogasil"/></span>
        </div>
        <div className={styles.movieRowRight}>
          <NavigateNextIcon style={{fontSize: 50, color: "#FE4400"}} />
        </div>
      </div>
    </div>
  )
}