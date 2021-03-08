import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export function HeaderMenu(){
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
      <section>
        <img src="https://www.fcamara.com.br/images/home/home-intro.png" alt="logoIntro" className="logoIntro"/>
        <h3 className="titleIntro">INOVAÇÃO E TECNOLOGIA PARA PROMOVER</h3>
        <h1 className="titleOrange">Transformação cultural,<br /> digital e cognitiva</h1>
        <p className="txtTitle">em organizações que buscam resultados<br /> tangíveis e escaláveis</p>
        <button className="btnOrange">FALE COM NOSSOS ESPECIALISTAS <ArrowRightAltIcon style={{width: "50px", top:"15px", position: "absolute"}} /></button>
        <button className="btnDown"><ArrowDownwardIcon/></button>
      </section>
    </div>
  );
}