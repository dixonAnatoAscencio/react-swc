export function TwitterFollowCard({
  //formattedUserName,
  //prop especial children, es todo lo que envuelve.
  children,
  userName = "unknown", //valores por defecto de las props,
  isFollowing,
}) {
  //Las props son la base de la reutilización de componentes en React.
  //Las props deberian ser inmutables, no debemos modificar ni mutarlas!!
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar Profile"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside className="tw-followCard-button">
        {/*el aside esta envolviendo un elemento boton */}
        <button className="tw-followCard-button:hover">
          {/*elemento boton envuelve un texto */}
          Seguir {/*children: el lo que envuelve un elemento (sus hijos) */}
        </button>
      </aside>
    </article>
  );
}
