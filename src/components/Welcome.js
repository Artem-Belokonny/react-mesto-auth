function Welcome({ title, textBtn, childrenInput, childrenSubtitle, onSubmit }) {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <form className="welcome__form" onSubmit={onSubmit}>
          <h2 className="welcome__title">{title}</h2>
          {childrenInput}
          <button className="welcome__button">{textBtn}</button>
        </form>
        {childrenSubtitle}
      </div>
    </section>
  );
}

export default Welcome;
