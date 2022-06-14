import "./styles/CaoBemResolvido.css";
import {Helmet} from "react-helmet";

import {Depoimentos} from "../components/CaoBemResolvido.js";

import {FaWhatsapp, FaLightbulb} from "react-icons/fa";
import {BiHomeHeart, BiStar} from "react-icons/bi";
import {MdOutlinePets} from "react-icons/md";
import {GiLoveInjection} from "react-icons/gi";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import depo1 from "./styles/assets/img/depoimento1.png";
import depo2 from "./styles/assets/img/depoimento2.png";
import depo3 from "./styles/assets/img/depoimento3.png";
import depo4 from "./styles/assets/img/depoimento4.jpeg";
import dog1 from "./styles/assets/img/dog1.png";
import garantiaDias from "./styles/assets/img/garantiaDias.png";
import satisfacaoGarantida from "./styles/assets/img/satisfacaoGarantida.png";
import produtor from "./styles/assets/img/produtor.jpg";

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
            <h1>Descubra como adestrar o seu próprio cão em até 14 dias</h1><br/><br/><br/>
            <p><strong>Sem brigar com ele</strong> e mesmo que você não entenda NADA de Cachorro!</p>

            <iframe src="https://www.youtube.com/embed/eHWPAgBzW4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <button onClick={()=> window.location.assign("https://go.hotmart.com/P71561841A?ap=b082")}>Quero que meu cachorro me obedeça!</button><br/><br/>
            <p>Acesso por apenas 12x <strong>R$29,64</strong></p>
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
                <p>Acesso imediato por apenas 12x <strong>R$19,66</strong></p>
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
          <section className="bonusUm">
            <div className="conteudoBonus">

              <h2>E ainda...<br/>O apoio que você precisa para se manter motivado(a)</h2>
              <div>
                <h3><BiStar size={30}/>Acesso ao grupo VIP</h3>
                <p>Você vai tirar todas as dúvidas do seu Cão diretamente comigo! Eu tiro as dúvidas de todos os alunos todos os dias no grupo, mando áudios, vídeos e todos interagem entre si. Eu faço treinos personalizados para os alunos no Grupo VIP.</p>
                <h3><BiStar size={30}/>Close Friends</h3>
                <p>No meu Close Friends do Instagram você vai ter acesso a dicas diárias exclusivas sobre problemas comportamentais dos cães e aprender técnicas de adestramento que utilizo no dia a dia.</p>
              </div>
              <div className="btn">
                <a href="https://go.hotmart.com/P71561841A?ap=b082">Quero cuidar do meu cachorro como ele merece</a>
                <p>Acesso vitalício por apenas 12x <strong>R$29,64</strong></p>
              </div>
            </div>
            <img src={dog1} alt="Descontão do Dia - Imagem de cachorro pequeno" />
          </section>
          <section className="bonusDois">
            <div className="conteudoBonusDois">
              <h2>E tem mais...<br/>Um programa de adestramento completo na sua casa</h2>
              <div className="gridBonusDois">
                <div>
                  <h3>01</h3>
                  <h4>Como ensinar seu cachorro a passear</h4>
                  <p>Nesse módulo bônus você vai aprender como ensinar o seu cão a andar na coleira sem Travar ou Puxar e sem Reagir a outros cães e pessoas. Ele vai andar do seu lado sem latir pra ninguém. Mostrei todo o passo a passo na prática, com cães que nunca passearam na vida e cães que são extremamente reativos de como resolver!</p>
                </div>
                <div>
                  <h3>02</h3>
                  <h4>Como Socializar o seu Cão</h4>
                  <p>Nesse módulo você vai aprender como socializar o seu Cão para ele ser super sociável com outros cães, outras pessoas, gatos, etc. Mostrei tudo na prática como eu faço.</p>
                </div>
                <div>
                  <h3>03</h3>
                  <h4>Ebook Cão Bem Resolvido</h4>
                  <p>Preparei 5 ebooks exclusivos pra você. Neles você vai ter materiais exclusivos de como entreter o seu cão em casa e melhorar a qualidade de vida e bem estar dele.</p>
                </div>
                <div>
                  <h3>04</h3>
                  <h4>Certificado de Conclusão do Curso</h4>
                  <p>Ao final do curso quando o seu cão estiver 100% Adestrado você vai receber um certificado de conclusão do Programa Cão Bem Resolvido.</p>
                </div>
                <div>
                  <h3>05</h3>
                  <h4>Tudo Sobre Alimentação Natural</h4>
                  <p>Tudo sobre Alimentação Natural com a Médica Veterinária Nutróloga Natalia Monnerat. Ela preparou um super módulo e abordou as maiores dúvidas que as pessoas tem sobre o assunto.</p>
                </div>
                <div>
                  <h3>08</h3>
                  <h4>Tudo Sobre Adestramento de Gatos</h4>
                  <p>Nesse módulo você vai aprender tudo sobre Adestramento de Gatos com a especialista em comportamento Felino Ilda Luana. Ela mostra como resolver os principais problemas comportamentais que os gatos apresentam.</p>
                </div>
              </div>

              <div className="btn">
                <a href="https://go.hotmart.com/P71561841A?ap=b082">Quero todos esses bônus agora!</a>
                <p>Acesso vitalício por apenas 12x <strong>R$29,64</strong></p>
                <img src={satisfacaoGarantida} alt="satisfação garantida" width="80%"/>
              </div>
            </div>
          </section>
          <section className="resultadosDois">
            <div className="conteudoResultadosDois">
              <h2>Será que realmente funciona?<br/>Pergunte para eles...</h2>
              <iframe src="https://www.youtube.com/embed/NfQ7jnEwB-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/7ZpBcnwJFkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CzWb_T01BY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Esses são alunos do Cão Bem Resolvido que se dedicaram e seguiram as instruções do programa. Os resultados variam para cada pessoa.</p>
            </div>
          </section>
          <section className="garantia">
            <div className="conteudoGarantia">
              <h2>Experimente por 7 dias<br/>Você não tem nada a perder</h2>
              <img src={garantiaDias} alt="Descontão do Dia - garantia do curso Cão Bem Resolvido" />
              <p>
                Não tem dúvida, o Cão Bem Resolvido simplesmente funciona. A prova disso são as <strong>centenas de homens e mulheres com resultados incríveis</strong> e que tiveram suas vidas e de seus bichinhos transformadas. Mas se você ainda tem dúvida, vou permitir que você <strong>experimente por 7 dias</strong> e caso você não goste ou não veja nenhum resultado, basta me enviar um e-mail durante esse período que devolvo todo o valor que você pagou.
              </p>
              <p>
                Ou seja, se der certo, você consegue ter uma convivência tranquila com o seu cochorrinho e vão passar a aproveitar mais os momentos juntos. E se não gostar, você tem o seu dinheiro de volta.
              </p>
              <p>
                O único risco que você corre é de estar daqui a 14 dias aproveitando sem estresse a convivência com seu melhor amigo. Simples assim!
              </p>
              <div className="btn">
                <a href="https://go.hotmart.com/P71561841A?ap=b082">Quero testar por 7 dias</a>
                <p>Acesso 100% online e vitalício por apenas 12x <strong>R$29,64</strong></p>
              </div>
            </div>
          </section>
          <section className="autor">
            <div className="conteudoAutor">
              <h2>Bernardo Repsold</h2>
              <div></div>
              <p>Meu nome é Bernardo Repsold, conhecido nas redes sociais como Bernardo Adestra. Eu sou Médico Veterinário e trabalho com adestramento de cães a mais de 5 anos.</p>
              <p>Em todos esses anos trabalhando com cães já adestrei mais de 1000 cães e ajudei milhares de famílias a terem mais qualidade de vida com os seus cães.</p>
              <p>Foram muitos anos de estudo, muitos erros e acertos até eu chegar aonde cheguei e desenvolver o meu curso online Cão Bem Resolvido, focado em resultados rápidos, no qual eu consigo adestrar cães a ficarem super educados em até 14 dias! Minha missão é te mostrar mesmo que você não saiba nada sobre cachorro, que nunca tenha tido um ou até mesmo não tenha muito tempo para o seu cão, que é possível ter um cachorro perfeito!</p>
              <p>Eu vou estar com você durante todo esse processo!</p>
              <img src={produtor} alt="Descontão do Dia - Bernardo Repsold, adestrador do curso Cão Bem Resolvido" />
            </div>
          </section>
          <section className="futurePassing"></section>
          <section className="resultadosTres"></section>
          {/* <section className="midia"></section> */}
          <section className="cta"></section>
          <section className="faq">
            <div className="conteudoFaq">
              <h2>Perguntas Frequentes</h2>
              <p>Algumas das dúvidas que surgiram de nossos clientes antes de efetuarem a compra.</p>
              <div className="accordionFaq">
                <div className="tabs">
                  
                  <div className="tab">
                    <input type="checkbox" id="chckFaq1"/>
                    <label className="tab-label" for="chckFaq1">Por quanto tempo o curso fica disponível?</label>
                    <div className="tab-conteudo">
                      <p>O acesso do curso é vitalício. Você vai poder ver e rever o curso quantas vezes quiser.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chckFaq2"/>
                    <label className="tab-label" for="chckFaq2">Para quem é o curso?</label>
                    <div className="tab-conteudo">
                      <p>O curso é para tutores de cães que estão passando por problemas com o comportamento dos seus cães e querem resolver de forma rápida e prática.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chckFaq3"/>
                    <label className="tab-label" for="chckFaq3">Quais problemas o curso resolve?</label>
                    <div className="tab-conteudo">
                      <p>
                        Se você passa por problemas com o seu cão de: <br/><br/>
                        - Xixi e cocô nos lugares errados <br/>
                        - Problemas com passeio <br/>
                        - Ansiedade por separação <br/>
                        - Alimentação <br/>
                        - Agitação em excesso <br/> 
                        - Mordidas e destruição das coisas <br/>
                        - Falta de socialização <br/>
                        - Desobediência de forma geral <br/><br/>
                        O curso vai te ajudar muito! 
                      </p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chckFaq4"/>
                    <label className="tab-label" for="chckFaq4">O curso oferece suporte?</label>
                    <div className="tab-conteudo">
                      <p>Assim que a compra for aprovada você vai receber acesso ao meu grupo VIP lá eu tiro as dúvidas de todos os alunos todos os dias.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chckFaq5"/>
                    <label className="tab-label" for="chckFaq5">E se o curso não me ajudar por algum motivo?</label>
                    <div className="tab-conteudo">
                      <p>Caso o curso não te ajude por qualquer motivo que for basta você me mandar uma única mensagem dentro do período de 7 dias e devolvo o seu dinheiro.</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chckFaq6"/>
                    <label className="tab-label" for="chckFaq6">Em quanto tempo consigo adestrar o meu cão com seu curso?</label>
                    <div className="tab-conteudo">
                      <p>Se você seguir todo passo a passo, em 14 dias você vai ter excelentes resultados com o seu cão!</p>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chckFaq7"/>
                    <label className="tab-label" for="chckFaq7">O curso também serve para cães Adultos?</label>
                    <div className="tab-conteudo">
                      <p>Com certeza! O curso serve para cães filhotes, adultos e até mesmo idosos. Tenho cães no curso com 12 anos de idade que conseguiram ser adestrados com meu método!</p>
                    </div>
                  </div>

                </div>
              </div>
              <p>Caso você tenha alguma dúvida que não esteja aqui me chame no Whatsapp pelo botão no lado esquerdo da página ou pelo botão no final da página.</p>
            </div>
          </section>
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