import React, { useContext, useState } from "react";

import UolCircle from "./Icons/UolCircle";
import Card from "./Card/Card";
import Input from "./StyledComponents/Input";
import ButtonCreate from "./StyledComponents/ButtonCreate";
import "./EditInformation.css";
import Select from "./StyledComponents/Select";
import ProfilePicture from "../assets/images/profile-img.png";
import Pen from "../assets/images/pen.png";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../config/api";
import { AxiosError } from "axios";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../context/userContext";
import { UserInfos } from "../context/userInfos";


const EditInformation = (): JSX.Element => {
  const navigate = useNavigate();
  const {user} = UserInfos()
  const { setUser } = useContext(UserContext);
  const token = localStorage.getItem("token")
  const [loadind, setLoading] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const [enteredPasswordTwo, setEnteredPasswordTwo] = useState("");
  const [enteredPasswordTwoIsValid, setEnteredPasswordTwoIsValid] =
    useState(true);

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

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const passwordTwoChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPasswordTwo(event.target.value);
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

    if (enteredPassword.trim().length < 8) {
      setEnteredPasswordIsValid(false);
      isFormValid = false;
      toast.error("Senha inválida: min 8 caracteres.")
    } else {
      setEnteredPasswordIsValid(true);
    }

    if (enteredPasswordTwo !== enteredPassword) {
      setEnteredPasswordTwoIsValid(false);
      isFormValid = false;
      toast.error("As senhas precisam ser iguais.")
    } else {
      setEnteredPasswordTwoIsValid(true);
    }

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      isFormValid = false;
      toast.error("Nome inválido")
    } else {
      setEnteredNameIsValid(true);
    }

    if (enteredDate.trim().length < 10) {
      setEnteredDateIsValid(false);
      isFormValid = false;
      toast.error("Data inválida")
    } else {
      setEnteredDateIsValid(true);
    }

    if (enteredProfession.trim() === "") {
      setEnteredProfessionIsValid(false);
      isFormValid = false;
      toast.error("Profissão inválida")
    } else {
      setEnteredProfessionIsValid(true);
    }

    if (enteredCountry.trim() === "") {
      setEnteredCountryIsValid(false);
      isFormValid = false;
      toast.error("País inválido")
    } else {
      setEnteredCountryIsValid(true);
    }

    if (enteredCity.trim() === "") {
      setEnteredCityIsValid(false);
      isFormValid = false;
      toast.error("Cidade inválida")
    } else {
      setEnteredCityIsValid(true);
    }

    if (isFormValid) {
      console.log(user);
      
      try {
        await api
          .put(`/users/${user?.id}`, {enteredProfession, enteredName, enteredDate, enteredCountry, enteredCity, password:enteredPasswordTwo, email:user?.email},
           {headers: {
            Authorization: `Bearer ${token}`,
          },})
          .then((response) => {
            setUser(response.data);
            localStorage.setItem(
              "userData",
              JSON.stringify(response.data)
            );
            console.log(response.data);
            navigate("/profile");
          })
          .catch((error) => {
            toast.error("Erro ao salvar os dados.");
            console.log(error);
            
          });
      } catch (error: AxiosError | any) {
        toast.error("Erro: Tente novamente mais tarde.");
      }
    }
  };

  return (
    <React.Fragment>
      <Toaster/>
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
                  <Input
                    type="text"
                    id="profession"
                    placeholder="Profissão"
                    value={enteredProfession}
                    onChange={professionChangeHandler}
                  />
                  {/* {!enteredProfessionIsValid && (
                <p className="invalid-input">Campo inválido</p>
              )} */}
                  <Select />
                </div>
                <div className="inputs_">
                  <Input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    value={enteredName}
                    onChange={nameChangeHandler}
                  />
                  {/* {!enteredNameIsValid && (
                <p className="invalid-input">Nome inválido</p>
              )} */}
                  <Input
                    type="text"
                    id="birthDate"
                    placeholder="DD/MM/AAAA"
                    maxLength={10}
                    onChange={dateChangeHandler}
                    value={enteredDate}
                  />
                  {/* {!enteredDateIsValid && (
                <p className="invalid-input">Data inválida</p>
              )} */}
                </div>
                <div className="inputs-edit">
                  <Input
                    type="text"
                    id="country"
                    placeholder="País"
                    value={enteredCountry}
                    onChange={countryChangeHandler}
                  />
                  {/* {!enteredCountryIsValid && (
                <p className="invalid-input">País inválido</p>
              )} */}
                  <Input
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    value={enteredCity}
                    onChange={cityChangeHandler}
                  />
                  {/* {!enteredCityIsValid && (
                <p className="invalid-input">Cidade inválida</p>
              )} */}
                </div>
                <div className="inputs-edit">
                  <Input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                  />
                  {/* {!enteredPasswordIsValid && (
                <p className="invalid-input">Senha inválida</p>
              )} */}
                  <Input
                    type="password"
                    id="repet-password"
                    placeholder="Repetir senha"
                    value={enteredPasswordTwo}
                    onChange={passwordTwoChangeHandler}
                  />
                  {/* {!enteredPasswordTwoIsValid && (
                <p className="invalid-input">As senhas precisam ser iguais.</p>
              )} */}
                </div>
              </div>
              <div className="form-actions-edit">
                <Link to="/profile">
                  <ButtonCreate type="submit" onClick={submitFormHandler}>Salvar</ButtonCreate>
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
