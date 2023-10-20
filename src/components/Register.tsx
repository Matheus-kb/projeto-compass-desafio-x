import React, { useEffect, useState } from "react";
import { Link, useNavigate   } from "react-router-dom";

import UolCircle from "./Icons/UolCircle";
import Card from "./Card/Card";
import Input from "./StyledComponents/Input";
import ButtonCreate from "./StyledComponents/ButtonCreate";

import "./Form.css";

interface User {
  id?: number;
  enteredEmail: string;
  enteredPassword: string;
  enteredName: string;
  enteredDate: string;
  enteredProfession: string;
  enteredCountry: string;
  enteredCity: string;
}

const Register = (): JSX.Element => {
  const navigate = useNavigate();

  const baseUrl = "http://localhost:3000";
  const usersUrl = `${baseUrl}/users`;

  const [loadind, setLoading] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDateIsValid, setEnteredDateIsValid] = useState(true);

  const [enteredProfession, setEnteredProfession] = useState("");
  const [enteredProfessionIsValid, setEnteredProfessionIsValid] =
    useState(true);

  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredCountryIsValid, setEnteredCountryIsValid] = useState(true);

  const [enteredCity, setEnteredCity] = useState("");
  const [enteredCityIsValid, setEnteredCityIsValid] = useState(true);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    const numericValue = newValue.replace(/\D/g, "");

    if (numericValue.length >= 1 && numericValue.length <= 8) {
      let formattedDate = "";
      for (let i = 0; i < numericValue.length; i++) {
        if (i === 2 || i === 4) {
          formattedDate += "/";
        }
        formattedDate += numericValue[i];
      }
      setEnteredDate(formattedDate);
    } else {
      setEnteredDate("");
    }
  };

  const professionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredProfession(event.target.value);
  };

  const countryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCountry(event.target.value);
  };

  const cityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCity(event.target.value);
  };

  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    let isFormValid = true;
    setLoading(true);

    if (!enteredEmailIsValid) {
      isFormValid = false;
    } else {
      const existingUsers = await fetch(usersUrl).then((response) =>
        response.json()
      );

      const emailAlreadyExists = existingUsers.some(
        (user: User) => user.enteredEmail === enteredEmail
      );

      if (emailAlreadyExists) {
        setEnteredEmailIsValid(false);
        isFormValid = false;
      } else {
        setEnteredEmailIsValid(true);
      }
    }

    if (!enteredEmail.includes("@") || enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      isFormValid = false;
    } else {
      setEnteredEmailIsValid(true);
    }

    if (enteredPassword.trim().length < 8) {
      setEnteredPasswordIsValid(false);
      isFormValid = false;
    } else {
      setEnteredPasswordIsValid(true);
    }

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      isFormValid = false;
    } else {
      setEnteredNameIsValid(true);
    }

    if (enteredDate.trim().length < 10) {
      setEnteredDateIsValid(false);
      isFormValid = false;
    } else {
      setEnteredDateIsValid(true);
    }

    if (enteredProfession.trim() === "") {
      setEnteredProfessionIsValid(false);
      isFormValid = false;
    } else {
      setEnteredProfessionIsValid(true);
    }

    if (enteredCountry.trim() === "") {
      setEnteredCountryIsValid(false);
      isFormValid = false;
    } else {
      setEnteredCountryIsValid(true);
    }

    if (enteredCity.trim() === "") {
      setEnteredCityIsValid(false);
      isFormValid = false;
    } else {
      setEnteredCityIsValid(true);
    }

  

    if (isFormValid) {
      const user: User = {
        enteredEmail,
        enteredPassword,
        enteredName,
        enteredDate,
        enteredProfession,
        enteredCountry,
        enteredCity,
      };

      console.log(user);

      const res = await fetch(usersUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(res);

      setEnteredEmail("");
      setEnteredPassword("");
      setEnteredName("");
      setEnteredDate("");
      setEnteredProfession("");
      setEnteredCountry("");
      setEnteredCity("");

      navigate("/second-register");
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <section className="register create">
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
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
              {!enteredEmailIsValid && (
                <p className="invalid-input">E-mail inválido</p>
              )}
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                value={enteredPassword}
                onChange={passwordChangeHandler}
              />
              {!enteredPasswordIsValid && (
                <p className="invalid-input">
                  A senha precisa conter pelo menos 8 caracteres
                </p>
              )}
              <Input
                type="text"
                id="name"
                placeholder="Nome"
                value={enteredName}
                onChange={nameChangeHandler}
              />
              {!enteredNameIsValid && (
                <p className="invalid-input">Nome inválido</p>
              )}
              <div className="inputs">
                <Input
                  type="text"
                  id="birthDate"
                  placeholder="DD/MM/AAAA"
                  value={enteredDate}
                  maxLength={10}
                  onChange={dateChangeHandler}
                />
                <Input
                  type="text"
                  id="profession"
                  placeholder="Profissão"
                  value={enteredProfession}
                  onChange={professionChangeHandler}
                />
              </div>
              <div className="inputs">
                <Input
                  type="text"
                  id="country"
                  placeholder="País"
                  value={enteredCountry}
                  onChange={countryChangeHandler}
                />
                <Input
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  value={enteredCity}
                  onChange={cityChangeHandler}
                />
              </div>
            </div>
            <div className="form-actions">
              {!enteredDateIsValid && (
                <p className="invalid-input">Data Inválida</p>
              )}
              {!enteredProfessionIsValid && (
                <p className="invalid-input">Profissão Inválida</p>
              )}
              {!enteredCountryIsValid && (
                <p className="invalid-input">País Inválido</p>
              )}
              {!enteredCityIsValid && (
                <p className="invalid-input">Cidade Inválida</p>
              )}

                {!loadind && (
                  <ButtonCreate type="submit" onClick={submitFormHandler}>
                    Criar conta
                  </ButtonCreate>
                )}
                {loadind && <ButtonCreate disabled>Aguarde...</ButtonCreate>}
              
            </div>
          </form>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default Register;
