import React, { useState } from "react";

import UolCircle from "./Icons/UolCircle";
import Card from "./Card/Card";
import Input from "./StyledComponents/Input";
import ButtonCreate from "./StyledComponents/ButtonCreate";
import ButtonCreateAlt from "./StyledComponents/ButtonCreateAlt";

import "./Form.css";
import { Link } from "react-router-dom";

const RecoverPass = (): JSX.Element => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    if (!enteredEmail.includes("@") || enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      event.preventDefault();
    } else {
      setEnteredEmailIsValid(true);
    }
  };

  return (
    <section className="register recover">
      <div className="image">
        <p>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </p>
      </div>
      <Card>
        <div className="header-card">
          <UolCircle />
          <h2 className="title-header-card">Recupere sua senha</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <Input
              type="email"
              id="email"
              placeholder="E-mail cadastrado"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
            {!enteredEmailIsValid && (
              <p className="invalid-input">Email inválido</p>
            )}
            <div className="form-actions">
              <Link to="/new-pass">
                <ButtonCreate type="submit" onClick={submitFormHandler}>
                  Enviar código
                </ButtonCreate>
              </Link>
            </div>
          </div>
        </form>

        <span className="login-redirection">Lembrou sua Senha?</span>
        <Link to="/">
          <ButtonCreateAlt type="submit">
            Entrar com as credenciais
          </ButtonCreateAlt>
        </Link>
      </Card>
    </section>
  );
};

export default RecoverPass;
