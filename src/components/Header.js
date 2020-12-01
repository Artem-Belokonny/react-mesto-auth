import logo from './../images/logo-white.svg'

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo-link">
        <img src={logo} alt="Логотип" className="header__logo" />
      </a>
    </header>
  );
}

export default Header;