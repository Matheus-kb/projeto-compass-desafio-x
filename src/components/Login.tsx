import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../config/api";
import Cookies from 'js-cookie';

import UolCircle from "./Icons/UolCircle";
import Card from "./Card/Card";
import Input from "./StyledComponents/Input";
import ButtonCreate from "./StyledComponents/ButtonCreate";
import ButtonCreateAlt from "./StyledComponents/ButtonCreateAlt";

import "./Form.css";
import { UserContext } from "../context/userContext";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
    setEnteredEmailIsValid(true);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
    setEnteredPasswordIsValid(true);
  };

  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!enteredEmail.includes("@") || enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
    }

    if (enteredPassword.trim() === "" || enteredPassword.trim().length < 8) {
      setEnteredPasswordIsValid(false);
      return;
    }

    try {
      const response = await api.post("/login", {
        email: enteredEmail,
        password: enteredPassword,
      });
      if (response.status === 200) {
        Cookies.set("token", response.data.accessToken);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        setUser(response.data.user);
        navigate("/profile");
      } else {
        toast.error("Erro: Credencias inseridas são invalidas.");
      }
    } catch (error) {
      toast.error("Erro: Verifique suas credencias, ou tente novamente mais tarde.");
    }
    setLoading(false);
  };

  return (
    <section className="register">
      <Toaster />
      <div className="image">
        <p>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </p>
      </div>
      <Card>
        <div className="header-card">
          <UolCircle />
          <h2 className="title-header-card">Acesse o UOLkut</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
            {!enteredEmailIsValid && (
              <p className="invalid-input">Email Inválido</p>
            )}
            <Input
              type="password"
              id="password"
              placeholder="Senha"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
            {!enteredPasswordIsValid && (
              <p className="invalid-input">Senha inválida: min 8 caracteres</p>
            )}
            <fieldset className="checkbox__login">
              <label className="checkbox-field">
                Lembrar minha senha
                <input type="checkbox" id="habit1" />
                <span className="checkmark" />
              </label>
            </fieldset>
            <div className="form-actions">
              <ButtonCreate type="submit" onClick={submitFormHandler}>
                Entrar na conta
              </ButtonCreate>
              <Link to="/register">
                {!loading && <ButtonCreateAlt type="submit">Criar conta</ButtonCreateAlt>}
              </Link>
              {loading && <ButtonCreateAlt>Aguarde...</ButtonCreateAlt>}

            </div>
          </div>
        </form>

        <Link to="/recover-pass">
          <p id="forgot">Esqueci minha senha</p>
        </Link>
      </Card>
    </section>
  );
};

export default Login;
