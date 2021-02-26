import React from "react";
import Welcome from "../components/Welcome.js";
import { useHistory, withRouter, Link } from 'react-router-dom';
import Header from "../components/Header.js";

function Register({onRegister}) {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
      onRegister(data)
      .then(() => history.push('/signin'))
      .catch((err) => {
        alert(err);
      });
    }

  return (
    <>
      <Header subtitle="Войти" link="/signin"/>
      <Welcome
        onSubmit={handleSubmit}
        name="register"
        title="Регистрация"
        textBtn="Зарегистрироваться"
        childrenInput={
          <>
            <input
              className="welcome__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              id="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="welcome__input"
              type="password"
              name="password"
              required
              placeholder="Пароль"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
          </>
        }
        childrenSubtitle={
          <span className="welcome__subtitle">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="welcome__subtitle-link">Войти</Link>
          </span>
        }
      />
    </>
  );
}

export default withRouter(Register);
