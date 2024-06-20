import { useState } from "react";

//prop especial children, es todo lo que envuelve.
export function TwitterFollowCard({ children, userName = "unknown" }) {
  const [isFollowing, setIsFollowing] = useState(false); //[estado, forma de actualizar el estado]

  /*
  *1: imperativo es dar intrucciones paso a paso ej: button.addEventListener - this.getAttribute
  *2 Hay que ser declarativos en react, declarar lo que esperamos ej: tengo un estado isFollowing cuando hagas onCLick redenriza esto
  El codigo declarativo y la programacion funcional es mucho mejor

  */

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  //Las props son la base de la reutilización de componentes en React.
  //Las props deberian ser inmutables, no debemos modificar ni mutarlas!!
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        {/*el aside esta envolviendo un elemento boton */}
        <button className={buttonClassName} onClick={handleClick}>
          {/*elemento boton envuelve un texto */}
          {/*children: el lo que envuelve un elemento (sus hijos) */}
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
