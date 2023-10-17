import React, { useState } from 'react';

import UolCircle from './Icons/UolCircle';
import Card from './Card/Card';
import Input from './StyledComponents/Input';
import ButtonCreate from './StyledComponents/ButtonCreate';
import './EditInformation.css';
import Select from './StyledComponents/Select';
import ProfilePicture from '../assets/images/profile-img.png';
import Pen from '../assets/images/pen.png';
import { Link } from 'react-router-dom';

const EditInformation = (): JSX.Element => {
  const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    const numericValue = newValue.replace(/\D/g, '');

    if (numericValue.length >= 1 && numericValue.length <= 8) {
      let formattedDate = '';
      for (let i = 0; i < numericValue.length; i++) {
        if (i === 2 || i === 4) {
          formattedDate += '/';
        }
        formattedDate += numericValue[i];
      }
      setEnteredDate(formattedDate);
    } else {
      setEnteredDate('');
    }
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="editions">
        <div className="image-profile">
          <Card classNameCard="edit">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <img src={Pen} alt="Pen" className="pen" />
          </Card>
        </div>
        <Card classNameCard="edit">
          <div className="edits">
            <div className="header-card-edit">
              <UolCircle />
              <h2 className="title-header-card-edit">Editar Informações</h2>
            </div>
            <form onSubmit={submitFormHandler}>
              <div className="form-inputs-edit">
                <div className="inputs_">
                  <Input type="text" id="profession" placeholder="Profissão" />
                  <Select />
                </div>
                <div className="inputs_">
                  <Input type="text" id="name" placeholder="Nome" />
                  <Input
                    type="text"
                    id="birthDate"
                    placeholder="DD/MM/AAAA"
                    maxLength={10}
                    onChange={dateChangeHandler}
                    value={enteredDate}
                  />
                </div>
                <div className="inputs-edit">
                  <Input type="text" id="country" placeholder="País" />
                  <Input type="text" id="city" placeholder="Cidade" />
                </div>
                <div className="inputs-edit">
                  <Input type="password" id="password" placeholder="Senha" />
                  <Input
                    type="password"
                    id="repet-password"
                    placeholder="Repetir senha"
                  />
                </div>
              </div>
              <div className="form-actions-edit">
                <Link to="/profile">
                  <ButtonCreate type="submit">Salvar</ButtonCreate>
                </Link>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default EditInformation;
