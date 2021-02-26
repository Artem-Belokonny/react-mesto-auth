import React from "react";
import Welcome from "../components/Welcome.js";
import {useHistory, withRouter} from 'react-router-dom';
import Header from "../components/Header.js";

function Login({handleLogin}) {
  const history = useHistory();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(data)
    .then(() => history.push('/'))
    .catch((err) => {
      alert(err);
    });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <>
      <Header subtitle="Регистрация" link="/signup"/>
      <Welcome
        onSubmit={handleSubmit}
        name="login"
        title="Войти"
        textBtn="Вход"
        childrenInput={
          <>
            <input
              className="welcome__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="welcome__input"
              type="password"
              name="password"
              required
              placeholder="Пароль"
              value={data.password}
              onChange={handleChange}
            />
          </>
        }
      />
    </>
  );
}

export default withRouter(Login);
