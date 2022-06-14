import "./styles/CaoBemResolvido.css";
import {Helmet} from "react-helmet";

import {Depoimentos} from "../components/CaoBemResolvido.js";

import {FaWhatsapp, FaLightbulb} from "react-icons/fa";
import {BiHomeHeart} from "react-icons/bi";
import {MdOutlinePets} from "react-icons/md";
import {GiLoveInjection} from "react-icons/gi";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import depo1 from "./styles/assets/img/depoimento1.png";
import depo2 from "./styles/assets/img/depoimento2.png";
import depo3 from "./styles/assets/img/depoimento3.png";
import depo4 from "./styles/assets/img/depoimento4.jpeg";
import satisfacaoGarantida from "./styles/assets/img/satisfacaoGarantida.png";

export default function CaoBemResolvido(){
  return(
    <>
      <Helmet>
        <title>Cão Bem Resolvido</title>
        {/* Até 120 caracteres */}
        <meta name="description" content="Adestre seu cachorro hoje!" />
        <link rel="icon" type="image/png" href="iconCaoBemResolvido.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="iconCaoBemResolvido.png" sizes="16x16" />
        <link rel="canonical" href="https://descontaododia.store/caobemresolvido" />
      </Helmet>
      <header className="headerCBR">
        <div className="bgHeader">
          <div className="containerHeader">
            <h1>DESCUBRA COMO ADESTRAR O SEU PRÓPRIO CÃO EM ATÉ 14 DIAS!</h1><br/><br/><br/>
            <p><strong>Sem brigar com ele</strong> e mesmo que você não entenda NADA de Cachorro!</p>

            <iframe src="https://www.youtube.com/embed/eHWPAgBzW4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <button onClick={()=> window.location.assign("https://go.hotmart.com/P71561841A?ap=b082")}>Quero que meu cachorro me obedeça!</button><br/><br/>
            <sub>Acesso por apenas 12x <strong>R$29,64</strong></sub>
          </div>
        </div>
      </header>
      <main>
        <div className="containerMain">
          <section className="resultadosUm">
            <div className="bgResultadosUm">
              <Depoimentos>
                <h2>Donos de cães de todo Brasil já tiveram suas vidas e de seus amiguinhos transformadas</h2>
                <img src={depo1} alt="Depoimento 1" width="60%" height="70%"/>
                <img src={depo2} alt="Depoimento 2" width="60%" height="70%"/>
                <img src={depo3} alt="Depoimento 3" width="60%" height="70%"/>
                <sub>Esses(as) são alunos(as) do Cão Bem Resolvido que se dedicaram e seguiram as instruções do programa. Os resultados variam para cada pessoa.</sub>
              </Depoimentos>
            </div>
          </section>
          <section className="metodoUm">
            <div className="conteudoMetodoUm">
              <h2>O único curso que você precisa para se dar bem com seu melhor amigo!</h2>
              <p>Eu desenvolvi o treinamento Cão Bem Resolvido <strong>para você conseguir finalmente conseguir ter um cão adestrado de uma vez por todas</strong>.</p>
              <p>São várias vídeo aulas de 5-10 minutos em que eu te mostro na prática como eu adestro cães e <strong>como você resolverá problemas como xixi e cocô, mordidas, chorar quando fica sozinho, passeio puxando e muito mais</strong>.</p>
              
            </div>
          </section>
          <section className="metodoDois">
            <div className="conteudoMetodoDois">
              <h2>Apenas 15 minutinhos por dia</h2>
              <p>Você vai precisar de <strong>apenas de 15 minutinhos por dia</strong> para aplicar as minhas técnicas e resolver os seus problemas com o seu melhor amigo.</p>
              <p>Vou te mostrar como você vai conseguir resolver todos os problemas que você está passando com o seu cão de <strong>forma muito fácil e didática</strong>.</p>
              <p>Além disso eu vou te dar um <strong>suporte personalizado no meu Grupo VIP</strong>, lá eu tiro todas as dúvidas dos alunos diariamente.</p> 
              <p>Agora é com você, estou te esperando!</p>
              <div className="btnSatisfacao">
                <button onClick={()=> window.location.assign("https://go.hotmart.com/P71561841A?ap=b082")}>Só 15 minutos? Eu quero!</button>
                <img src={satisfacaoGarantida} alt="satisfação garantida" width="80%"/>
              </div>
            </div>
          </section>
          <section className="pqServe">
            <div className="conteudoPqServe">
              <h2>Esse treinamento serve para mim?</h2>
              <p>Esse treinamento serve para <strong>todos que querem ter uma convivência feliz com os seus pets e ter mais tempo para brincar com eles ao invés de brigar</strong>.</p>
              <div className="gridPqServe">
                <div>
                  <BiHomeHeart size={80} />
                  <p>Apaixonados por cães</p>
                </div>
                <div>
                  <MdOutlinePets size={80} />
                  <p>Tutores de primeira viagem</p>
                </div>
                <div>
                  <FaLightbulb size={80} />
                  <p>Tutores com experiência e adestradores</p>
                </div>
                <div>
                  <GiLoveInjection size={80} />
                  <p>Estudantes e médicos veterinários</p>
                </div>
              </div>
            </div>
          </section>
          <section className="depoimentoUnico">
            <div className="conteudoDepoimentoUnico">
              <h2>Resultado que você não terá em outro lugar</h2>
              <div>
                <ImQuotesLeft className="quoteUm" size={40}/> 
                <img src={depo4} alt="Site Descontao do Dia - Depoimento Brunna Póvoa"/>
                <ImQuotesRight className="quoteDois" size={40} />
                <p>Assim como a Brunna Póvoa, <strong>você também consegue</strong> ter o resultado desejado com o seu amiguinho.</p>
              </div>
            </div>
          </section>
          <section className="modulos">
            <div className="conteudoModulos">
              <h2>Aqui está o que você vai receber</h2>
              <p>Acesso online a todas as vídeo aulas sobre como adestrar seu pet e não ter mais dor de cabeça por causa das malcriações dele.</p>
              <div className="accordionModulos">
                <div className="tabs">
                  
                  <div className="tab">
                    <input type="checkbox" id="chck1"/>
                    <label className="tab-label" for="chck1">Módulo 01 - Alimentação</label>
                    <div className="tab-conteudo">
                      <p>A alimentação influencia diretamente na ansiedade e no xixi e cocô do seu cachorro. Nesse módulo você vai saber como alimentar o seu cão da maneira correta.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck2"/>
                    <label className="tab-label" for="chck2">Módulo 02 - Ansiedade e Agitação em Excesso</label>
                    <div className="tab-conteudo">
                      <p>Nesse módulo você vai aprender como controlar a ansiedade e agitação do seu cachorro e deixá-lo calmo e tranquilo a maior parte do tempo na sua casa.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck3"/>
                    <label className="tab-label" for="chck3">Módulo 03 - Mordidas e Roer móveis</label>
                    <div className="tab-conteudo">
                      <p>Nesse módulo eu mostro na prática exercícios para você finalmente fazer o seu cachorro entender que ele não pode ficar te mordendo e além disso mostrar o que ele pode morder.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck4"/>
                    <label className="tab-label" for="chck4">Módulo 04 - Independência</label>
                    <div className="tab-conteudo">
                      <p>Nesse módulo você vai aprender como deixar o seu cachorro independente. Ele finalmente vai parar de ficar chorando quando você não está perto, vai saber dormir sozinho e ficar bem sozinho ao longo do dia.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck5"/>
                    <label className="tab-label" for="chck5">Módulo 05 - Xixi e Cocô</label>
                    <div className="tab-conteudo">
                      <p>Aqui você vai aprender TUDO sobre como resolver o xixi e cocô do seu cachorro. Ele finalmente vai parar de errar e vai fazer em um só lugar.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck6"/>
                    <label className="tab-label" for="chck6">Módulo 06 - Obediência Básica à Avançada</label>
                    <div className="tab-conteudo">
                      <p>Seu cachorro vai aprender todos os comandos importantes, do básico ao avançado e vai te obedecer sempre que você mandar.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck7"/>
                    <label className="tab-label" for="chck7">Módulo 07 - Ensinando Boas Maneiras</label>
                    <div className="tab-conteudo">
                      <p>Nesse módulo você vai aprender como fazer o seu cachorro se comportar nas situações do dia a dia, como receber visitas, nao subir na mesa, não ficar pulando, não ficar latindo, você vai aprender TUDO isso nesse módulo.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
          <section className="bonus"></section>
          <section className="resultadosDois">
            <div className="conteudoResultadosDois">
              
            </div>
          </section>
          <section className="garantia"></section>
          <section className="futurePassing"></section>
          <section className="resultadosTres"></section>
          {/* <section className="midia"></section> */}
          <section className="cta"></section>
          <section className="faq"></section>
        </div>
        <a id="whatsapp" href="https://api.whatsapp.com/send?phone=5513988135562&text=Ol%C3%A1!%20Gostaria%20de%20esclarecer%20minhas%20d%C3%BAvidas%20sobre%20o%20curso%20C%C3%A3o%20Bem%20Resolvido." rel="noreferrer" target="_blank"><FaWhatsapp size={"70%"}/></a>
      </main>
      <footer>
        <div>
          <h2>Ainda tem dúvidas?</h2>
          <p>Me manda uma mensagem no Whatsapp que eu vou tirar qualquer dúvida que você tenha.</p>
          <a href="https://api.whatsapp.com/send?phone=5513988135562&text=Ol%C3%A1!%20Gostaria%20de%20esclarecer%20minhas%20d%C3%BAvidas%20sobre%20o%20curso%20C%C3%A3o%20Bem%20Resolvido." rel="noreferrer" target="_blank">
            <FaWhatsapp size={35}/>
            <span>Falar comigo no Whatsapp</span>
          </a>
          <p>Descontão do Dia ©2022 – Todos os Direitos Reservados!</p>
          <p>
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site não é endossado pelo Facebook de qualquer maneira. FACEBOOK é uma marca comercial de FACEBOOK, Inc.

            Aviso: Qualquer menção ou informação referente a valores citada neste site e de seus produtos e serviços são somente ilustrativas não devem ser consideradas promessa de resultado ou ganho comum, exato ou promessa de renda no futuro. As dicas e sugestões das aulas contidas no site não garantem qualquer tipo de resultados, uma vez que isso depende exclusivamente do trabalho e dedicação individual de cada um. Todas as informações dos visitantes, como nome e e-mail são protegidas, e não serão compartilhadas, divulgadas, ou vendidas para terceiros. Ao se registrar nesse site, o usuário cadastrado poderá receber outras promoções de cursos sobre marketing digital, empreendedorismo e negócios.
          </p>
        </div>
      </footer>
    </>
  )
}