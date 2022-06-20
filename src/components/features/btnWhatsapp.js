import {FaWhatsapp} from "react-icons/fa";
import "../styles/features.css";

export default function BotaoWhatsapp(props){
  return(
    <>
      <a id="whatsapp" className="whatsappUm" href={props.linkWhatsapp} rel="noreferrer" target="_blank">
        <FaWhatsapp color={"white"} size={"70%"}/>
      </a>
    </>
  )
}