import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../views";
import CaoBemResolvido from "../views/CaoBemResolvido";
import PoliticaDePrivacidade from "../views/PoliticaDePrivacidade";
import TermosDeUso from "../views/TermosDeUso";

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/caobemresolvido" component={CaoBemResolvido} />
      <Route exact path="/politica-de-privacidade" component={PoliticaDePrivacidade} />
      <Route exact path="/termos-de-" component={TermosDeUso} />
    </Switch>
  )
}