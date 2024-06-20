import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  /*Diferencia entre componente y elementos */
  /*
    Un Componente es una factoria de elementos, es una funcion que al ejecutarla te devuelve un elemento
    los componentes crean elementos y react los renderiza!!! importante**
  */

  /*El elemento es lo que renderiza React! */

  const formattedUserName = <span>@dixon</span>; //pasando elementos como props

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formattedUserName}
        isFollowing={true}
        userName="dixon"
        name="Dixon Jesus"
      />
      <TwitterFollowCard
        formatUserName={formattedUserName}
        isFollowing
        userName="tesla"
        name="Elon Musk"
      />
      <TwitterFollowCard
        formatUserName={formattedUserName}
        userName="dixon"
        name="Dixon Jesus"
      />
      <TwitterFollowCard
        formatUserName={formattedUserName}
        userName="dixon"
        name="Dixon Jesus"
      />
    </section>
  );
}
