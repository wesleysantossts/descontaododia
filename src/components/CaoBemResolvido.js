import { useEffect, useState } from "react";
import "./styles/CaoBemResolvido.css";
import { endOfToday, getTime } from "date-fns";

export function Contador(){
  const [dias, setDias] = useState("");
  const [horas, setHoras] = useState("");
  const [minutos, setMinutos] = useState("");
  const [segundos, setSegundos] = useState("");

  var countDownDate = getTime(endOfToday());
  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setDias(("00" + days).slice(-2))
    setHoras(("00" + hours).slice(-2))
    setMinutos(("00" + minutes).slice(-2))
    setSegundos(("00" + seconds).slice(-2))
      
    // Output the result in an element with id="demo"
    // document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    // document.getElementsByClassName("dias").createElement("span").innerHTML = days;
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      return x;
      // document.getElementById("countdown").innerHTML = "EXPIRADO";
    }
  }, 1000);

  return(
    <div id="countdown">
      <div className="dias">
        <h4>{dias}</h4>
        <p>Dias</p>
      </div>
      <div className="horas">
        <h4>{horas}</h4>
        <p>Horas</p>
      </div>
      <div className="minutos">
        <h4>{minutos}</h4>
        <p>Minutos</p>
      </div>
      <div className="segundos">
        <h4>{segundos}</h4>
        <p>Segundos</p>
      </div>
    </div>
  )
}