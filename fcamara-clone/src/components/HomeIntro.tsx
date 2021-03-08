import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export function HomeIntro(){
  return(
    <div>
      <header>
          <a href="#" className="logo"><img src="https://blog.fcamara.com.br/wp-content/uploads/2019/10/Logotipo-FCamara.png" alt="logo-fcamara" /></a>
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
      <div className="navSocial">
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
      <section className="sec">
        <img src="https://www.fcamara.com.br/images/home/home-intro.png" alt="logoIntro" className="logoIntro"/>
        <h3>INOVAÇÃO E TECNOLOGIA PARA PROMOVER</h3>
        <h1>Transformação cultural,<br /> digital e cognitiva</h1>
        <p>em organizações que buscam resultados<br /> tangíveis e escaláveis</p>
        <button className="btnOrange">FALE COM NOSSOS ESPECIALISTAS <ArrowRightAltIcon style={{width: "50px", top:"15px", position: "absolute"}} /></button>
        <button className="btnDown"><ArrowDownwardIcon/></button>
      </section>
    </div>
  );
}