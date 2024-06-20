export function TwitterFollowCard({
  formattedUserName,
  userName,
  name,
  ifFollowing,
}) {
  //Las props son la base de la reutilización de componentes en React.
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar Profile"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formattedUserName}
          </span>
        </div>
      </header>

      <aside className="tw-followCard-button">
        <button>Seguir</button>
      </aside>
    </article>
  );
}
