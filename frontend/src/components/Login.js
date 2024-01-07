import React from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";

function Login({ handleLogin }) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          setFormValue({ email: "", password: "" });
          handleLogin();
          navigate("/my-profile", { replace: true });
        }
      })
      .catch(console.error);
  };

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          value={formValue.email}
          onChange={handleChange}
          type="text"
          className="login__input login__input_type_email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          value={formValue.password}
          onChange={handleChange}
          type="password"
          className="login__input login__input_type_password"
          name="password"
          placeholder="Пароль"
          required
        />
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
