import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { Icon, InlineIcon } from '@iconify/react';
import facebookOutline from '@iconify-icons/eva/facebook-outline';
import linkedinOutline from '@iconify-icons/eva/linkedin-outline';
import instagramOutlined from '@iconify-icons/ant-design/instagram-outlined';
import youtubeIcon from '@iconify-icons/feather/youtube';
import glassdoorIcon from '@iconify-icons/simple-icons/glassdoor';

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
          <a href="#"><strong>PT / EN</strong></a>
      </header>
      <nav>
        <a href="https://www.facebook.com/grupo.fcamara/">
          <Icon icon={facebookOutline} style={{fontSize: "25px", color: "#fa5c23"}} />
        </a>
        <a href="https://www.linkedin.com/company/fcamara-consulting-&-training/">
          <Icon icon={linkedinOutline} style={{fontSize: "25px", color: "#fa5c23"}} />
        </a>
        <a href="https://www.instagram.com/grupo.fcamara/">
          <Icon icon={instagramOutlined} style={{fontSize: "25px", color: "#fa5c23"}} />
        </a>
        <a href="https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw">
          <Icon icon={youtubeIcon} style={{fontSize: "25px", color: "#fa5c23"}} />
        </a>
        <a href="https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm">
          <Icon icon={glassdoorIcon} style={{fontSize: "20px", color: "#fa5c23"}} />
        </a>
      </nav>
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