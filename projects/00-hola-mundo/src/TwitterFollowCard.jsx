export function TwitterFollowCard ({ userName, name, initialIsFollowing}) {

    const imageSrc = `https://unavatar.io/${userName}`;
    return (
    <article className="tw-followCard">
            <header className="tw-followCard-header">
               <img className="tw-followCard-avatar" 
                    alt="avatar fake" 
                    src= { imageSrc }
                />
                <div className="tw-followCard-info">
                    <strong >{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}