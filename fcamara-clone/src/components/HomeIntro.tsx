import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CheckIcon from '@material-ui/icons/Check';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import styles from '../styles/components/HomeIntro.module.css';

export function HomeIntro(){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
          <a href="#" className={styles.logo}><img src="https://blog.fcamara.com.br/wp-content/uploads/2019/10/Logotipo-FCamara.png" alt="logo-fcamara" /></a>
          <a href="#"><strong>quem somos</strong></a>
          <a href="#"><strong>serviços</strong></a>
          <a href="#"><strong>cases</strong></a>
          <a href="#"><strong>carreira</strong></a>
          <a href="#"><strong>programa de formação</strong></a>
          <a href="#"><strong>blog</strong></a>
          <a href="#"><strong>contato</strong></a>
          <a href="#"><strong>PT<span> / </span></strong></a>
          <a href="#"><strong>EN</strong></a>
      </header>
      <div className={styles.navSocial}>
        <a href="https://www.facebook.com/grupo.fcamara/">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/company/fcamara-consulting-&-training/">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/grupo.fcamara/">
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw">
          <YouTubeIcon />
        </a>
      </div>
      <div className={styles.logoIntro}>
        <img src="https://www.fcamara.com.br/images/home/home-intro.png" alt="logoIntro"/>
      </div>
      <section className={styles.sec}>
        <h3>INOVAÇÃO E TECNOLOGIA PARA PROMOVER</h3>
        <h1>Transformação cultural,<br /> digital e cognitiva</h1>
        <p>em organizações que buscam resultados<br /> tangíveis e escaláveis</p>
        <button className={styles.btnOrange}>FALE COM NOSSOS ESPECIALISTAS <ArrowRightAltIcon style={{width: "30px", marginBottom: "-7px"}} /></button>
      </section>
      <div className={styles.btnDown}>
        <button><ArrowDownwardIcon/></button>
      </div>

      {/*****PARCEIROS*****/}
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
        </div>
        <div className={styles.circlesX}>
          <span>X</span>
        </div>
        <div className={styles.empresas}>
        <div className={styles.movieRowLeft}>
          <NavigateBeforeIcon style={{fontSize: 70, color: "#FE4400"}} />
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
          <NavigateNextIcon style={{fontSize: 70, color: "#FE4400"}} />
        </div>
      </div>
      </div>
      
      {/*****SERVIÇOS*****/}
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
    </div>
  );
}