import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../views";
import CaoBemResolvido from "../views/CaoBemResolvido";

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/caobemresolvido" component={CaoBemResolvido} />
    </Switch>
  )
}