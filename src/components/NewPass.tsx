import React, { useState } from 'react';

import UolCircle from './Icons/UolCircle';
import Card from './Card/Card';
import Input from './StyledComponents/Input';
import ButtonCreate from './StyledComponents/ButtonCreate';
import ButtonCreateAlt from './StyledComponents/ButtonCreateAlt';

import './Form.css';
import { Link } from 'react-router-dom';

const NewPass = (): JSX.Element => {
  const [enteredCode, setEnteredCode] = useState('');
  const [enteredCodeIsValid, setEnteredCodeIsValid] = useState(true);

  const [enteredNewPass, setEnteredNewPass] = useState('');
  const [enteredNewPassIsValid, setEnteredNewPassIsValid] = useState(true);

  const [enteredSecondPass, setEnteredSecondPass] = useState('');
  const [enteredSecondPassIsValid, setEnteredSecondPassIsValid] =
    useState(true);

  const codeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCode(event.target.value);
  };

  const newPassChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredNewPass(event.target.value);
  };

  const secondPassChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredSecondPass(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    if (enteredCode.trim().length < 6) {
      setEnteredCodeIsValid(false);
      event.preventDefault();
    } else {
      setEnteredCodeIsValid(true);
    }

    if (enteredNewPass.trim().length < 8) {
      setEnteredNewPassIsValid(false);
      event.preventDefault();
    } else {
      setEnteredNewPassIsValid(true);
    }

    if (enteredSecondPass !== enteredNewPass) {
      setEnteredSecondPassIsValid(false);
      event.preventDefault();
    } else {
      setEnteredSecondPassIsValid(true);
    }
  };

  return (
    <section className="register new">
      <div className="image">
        <p>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </p>
      </div>
      <Card>
        <div className="header-card">
          <UolCircle />
          <h2 className="title-header-card">Nova senha</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <Input
              type="text"
              id="code"
              placeholder="Informe o código"
              onChange={codeChangeHandler}
              value={enteredCode}
              maxLength={6}
            />
            {!enteredCodeIsValid && (
              <p className="invalid-input">Código Inválido</p>
            )}
            <Input
              type="password"
              id="new-pass"
              placeholder="Nova senha"
              onChange={newPassChangeHandler}
              value={enteredNewPass}
            />
            {!enteredNewPassIsValid && (
              <p className="invalid-input">
                A nova senha precisa conter pelo menos 8 caracteres
              </p>
            )}
            <Input
              type="password"
              id="confirm-pass"
              placeholder="Confirmar a senha"
              onChange={secondPassChangeHandler}
              value={enteredSecondPass}
            />
            {!enteredSecondPassIsValid && (
              <p className="invalid-input">As senhas precisam ser iguais</p>
            )}

            <div className="form-actions edit">
              <Link to="/">
                <ButtonCreate type="submit" onClick={submitFormHandler}>
                  Salvar
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

export default NewPass;
