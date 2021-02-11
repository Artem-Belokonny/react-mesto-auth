import logo from "./../images/logo-white.svg";
import { Link } from 'react-router-dom';

function Header({
  subtitle,
  link='#',
  textBtn,
  handleSignOut,
  userData
}) {
  return (
    <header className="header">
      <a href={link} className="header__logo-link">
        <img src={logo} alt="Логотип" className="header__logo" />
      </a>
      <div className="header__container">
        <p className="header__login">{userData}</p>
        <p><Link to={link} className="header__login header__login-link">{subtitle}</Link></p>
        <button onClick={handleSignOut} className="header__login header__button ">{textBtn}</button>
      </div>
    </header>
  );
}

export default Header;
