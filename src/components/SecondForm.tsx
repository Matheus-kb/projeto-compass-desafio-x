import React from 'react';

import UolCircle from './Icons/UolCircle';
import Card from './Card/Card';
import Input from './StyledComponents/Input';
import ButtonCreate from './StyledComponents/ButtonCreate';
import TextArea from './StyledComponents/TextArea';
import SelectEdit from './StyledComponents/SelectEdit';
import './Form.css';

import { Link } from 'react-router-dom';

const SecondForm = (): JSX.Element => {
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="register create-two">
        <div className="image">
          <p>
            Conecta-se aos seus amigos e familiares usando recados e mensagens
            instantâneas
          </p>
        </div>
        <Card>
          <div className="header-card">
            <UolCircle />
            <h2 className="title-header-card">Cadastre-se no UOLkut</h2>
          </div>
          <form onSubmit={submitFormHandler}>
            <div className="form-inputs">
              <div className="inputs">
                <TextArea id="selfdesc" placeholder="Quem sou eu" />
                <TextArea id="interests" placeholder="Interesses" />
              </div>
              <div className="input__checkbox">
                <SelectEdit />
                <Input type="number" id="kids" placeholder="Filhos" />
              </div>
              <Input
                type="text"
                id="profile-picture"
                placeholder="Foto de Perfil"
              />
              <Input type="text" id="musics" placeholder="Músicas Favoritas" />
              <Input type="text" id="movies" placeholder="Filmes Favoritos" />

              <div className="input__checkbox">
                <fieldset className="checkbox">
                  <legend>Hábitos:</legend>
                  <label className="checkbox-field">
                    Fumo
                    <input type="checkbox" id="habit1" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox-field">
                    Bebida
                    <input type="checkbox" id="habit2" />
                    <span className="checkmark" />
                  </label>
                </fieldset>
              </div>
            </div>

            <div className="form-actions">
              <Link to="/profile">
                <ButtonCreate type="submit">Criar conta</ButtonCreate>
              </Link>
            </div>
          </form>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default SecondForm;
