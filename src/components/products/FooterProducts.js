import "../styles/main.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterProducts(props){
  return(
    <footer>
      <div>
        <h2>Ainda tem dúvidas?</h2>
        <p>Me manda uma mensagem no Whatsapp que eu vou tirar qualquer dúvida que você tenha.</p>
        <a className="whatsappDois" href={props.linkWhatsapp} rel="noreferrer" target="_blank">
          <FaWhatsapp size={35}/>
          <span>Falar comigo</span>
        </a>
        <p>Descontão do Dia ©2022 – Todos os Direitos Reservados!</p>
        <div className="politicas">
          <p><a href="/politica-de-privacidade">Política de Privacidade</a></p>
          <p><a href="/termos-de-uso">Termos de Serviço</a></p>
          <p><a href={props.linkWhatsapp}>Contato</a></p>
        </div>
        <p className="obsFacebook">
          Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site não é endossado pelo Facebook de qualquer maneira. FACEBOOK é uma marca comercial de FACEBOOK, Inc.

          Aviso: Qualquer menção ou informação referente a valores citada neste site e de seus produtos e serviços são somente ilustrativas não devem ser consideradas promessa de resultado ou ganho comum, exato ou promessa de renda no futuro. As dicas e sugestões das aulas contidas no site não garantem qualquer tipo de resultados, uma vez que isso depende exclusivamente do trabalho e dedicação individual de cada um. Todas as informações dos visitantes, como nome e e-mail são protegidas, e não serão compartilhadas, divulgadas, ou vendidas para terceiros. Ao se registrar nesse site, o usuário cadastrado poderá receber outras promoções de cursos sobre marketing digital, empreendedorismo e negócios.
        </p>
      </div>
    </footer>
  )
}