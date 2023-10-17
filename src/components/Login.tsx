import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UolCircle from './Icons/UolCircle';
import Card from './Card/Card';
import Input from './StyledComponents/Input';
import ButtonCreate from './StyledComponents/ButtonCreate';
import ButtonCreateAlt from './StyledComponents/ButtonCreateAlt';

import './Form.css';

const Login = (): JSX.Element => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    if (!enteredEmail.includes('@') || enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false);
      event.preventDefault();
    }

    if (enteredPassword.trim() === '' || enteredPassword.trim().length < 8) {
      setEnteredPasswordIsValid(false);
      event.preventDefault();
      return;
    }
    setEnteredEmailIsValid(true);
    setEnteredPasswordIsValid(true);
  };

  return (
    <section className="register">
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
              <p className="invalid-input">Senha inválida</p>
            )}
            <fieldset className="checkbox__login">
              <label className="checkbox-field">
                Lembrar minha senha
                <input type="checkbox" id="habit1" />
                <span className="checkmark" />
              </label>
            </fieldset>
            <div className="form-actions">
              <Link to="/profile">
                <ButtonCreate type="submit" onClick={submitFormHandler}>
                  Entrar na conta
                </ButtonCreate>
              </Link>
              <Link to="/register">
                <ButtonCreateAlt type="submit">Criar conta</ButtonCreateAlt>
              </Link>
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
