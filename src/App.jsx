import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  /*Diferencia entre componente y elementos */
  /*
    Un Componente es una factoria de elementos, es una funcion que al ejecutarla te devuelve un elemento
    los componentes crean elementos y react los renderiza!!! importante**
  */
  /*El elemento es lo que renderiza React! */

  //const formattedUserName = <span>@dixon</span>; //pasando elementos como props

  //pasar objetos como props
  const dixon = { isFollowing: true, username: "dixon" };
  //puede ser mala practica, estariamos enviando informacion que no es necesaria
  //puede hacer que el componente por temas de optimizacion se re-renderize sin necesidad
  //puede hacer que sea mas complejo entender que informacion le llega al componente
  //Mejor ser declarativo y psar lo que se va a usar

  return (
    <>
      <section className="App">
        <TwitterFollowCard {...dixon}>
          {/*formatUserName={formattedUserName}*/}
          {/*Solo existen un children pero puede envolver multiples elementos, no existen childrens nombrados */}
          Dixon Jesus Anato Ascencio
        </TwitterFollowCard>

        <TwitterFollowCard userName="bibi">
          {/*formatUserName={formattedUserName}*/}
          Dixon Jesus
        </TwitterFollowCard>
      </section>
    </>
  );
}
