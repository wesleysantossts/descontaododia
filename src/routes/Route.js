import { Redirect, Route } from "react-router-dom";

export default function MyRoute({component: Component, isClosed, ...rest}){
  if(isClosed) return <Redirect to="/" />
  return <Route {...rest} component={Component} />
}