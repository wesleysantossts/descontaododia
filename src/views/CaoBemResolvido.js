import "./styles/CaoBemResolvido.css";
import {FaWhatsapp} from "react-icons/fa";

import {Depoimentos} from "../components/CaoBemResolvido.js";

import depo1 from "./styles/assets/img/depoimento1.png";
import depo2 from "./styles/assets/img/depoimento2.png";
import depo3 from "./styles/assets/img/depoimento3.png";

export default function CaoBemResolvido(){
  return(
    <>
      <header className="headerCBR">
        <div className="bgHeader">
          <div className="containerHeader">
            <h1>DESCUBRA COMO ADESTRAR O SEU PRÓPRIO CÃO EM ATÉ 14 DIAS!</h1><br/><br/><br/>
            <p><strong>Sem brigar com ele</strong> e mesmo que você não entenda NADA de Cachorro!</p>

            <iframe src="https://www.youtube.com/embed/eHWPAgBzW4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <button>Quero que meu cachorro me obedeça!</button><br/><br/>
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
              <button>Só 15 minutos? Eu quero!</button>
            </div>
          </section>
          <section className="depoimentoUm"></section>
          <section className="modulos"></section>
          <section className="bonus"></section>
          <section className="resultadosDois"></section>
          <section className="garantia"></section>
          <section className="futurePassing"></section>
          <section className="resultadosTres"></section>
          <section className="midia"></section>
          <section className="cta"></section>
          <section className="faq"></section>
        </div>
        <a id="whatsapp" href="https://wa.me/message/ESYSX4KPAHWXH1" rel="noreferrer" target="_blank"><FaWhatsapp size={"70%"}/></a>
      </main>
    </>
  )
}