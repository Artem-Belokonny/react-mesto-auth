import editButton from "./../images/edit-button.svg";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="#" alt="Аватарка" className="profile__avatar" />
          <div className="profile__edit-avatar">
            <img
              src={editButton}
              alt="Редактировать"
              className="profile__edit-avatar-image"
              onClick={props.onEditAvatar}
            />
          </div>
        </div>
        <div className="profile__personal-info">
          <div className="profile__personal-adaptiv">
            <h1 className="profile__name"></h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            >
              <img
                src={editButton}
                alt="Редактировать"
                className="profile__edit-button-image"
              />
            </button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
