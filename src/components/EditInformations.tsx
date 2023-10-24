import React, { useContext, useState, useEffect } from "react";
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
import Cookies from 'js-cookie';

const EditInformation = (): JSX.Element => {
  const navigate = useNavigate();
  const { user } = UserInfos();
  const { setUser } = useContext(UserContext);
  const token = Cookies.get("token");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isTokenValid = Cookies.get("token");
    const checkToken = async () => {
      if (!isTokenValid) {
        localStorage.removeItem("userData");
        navigate("/");
      }
    };

    checkToken();
  }, []);
  

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
    } else {
      navigate('/');
    }
  },[]);

  const [enteredPassword, setEnteredPassword] = useState("")
  const [enteredPasswordTwo, setEnteredPasswordTwo] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredProfession, setEnteredProfession] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredCity, setEnteredCity] = useState("");

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
      isFormValid = false;
      toast.error("Senha inválida: min 8 caracteres.");
    }

    if (enteredPasswordTwo !== enteredPassword) {
      isFormValid = false;
      toast.error("As senhas precisam ser iguais.");
    }

    if (enteredName.trim() === "") {
      isFormValid = false;
      toast.error("Nome inválido");
    }

    if (enteredDate.trim().length < 10) {
      isFormValid = false;
      toast.error("Data inválida");
    }

    if (enteredProfession.trim() === "") {
      isFormValid = false;
      toast.error("Profissão inválida");
    }

    if (enteredCountry.trim() === "") {
      isFormValid = false;
      toast.error("País inválido");
    }

    if (enteredCity.trim() === "") {
      isFormValid = false;
      toast.error("Cidade inválida");
    }

    if (isFormValid) {
      try {
        await api
          .put(
            `/users/${user?.id}`,
            {
              enteredProfession,
              enteredName,
              enteredDate,
              enteredCountry,
              enteredCity,
              password: enteredPasswordTwo,
              email: user?.email,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setUser(response.data);
            localStorage.setItem("userData", JSON.stringify(response.data));
            navigate("/profile");
          })
          .catch((error) => {
            toast.error("Erro ao salvar os dados.");
          });
      } catch (error: AxiosError | any) {
        toast.error("Erro: Tente novamente mais tarde.");
      }
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Toaster />
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
                <div className="inputs-edit">
                  <Input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                  />

                  <Input
                    type="password"
                    id="repet-password"
                    placeholder="Repetir senha"
                    value={enteredPasswordTwo}
                    onChange={passwordTwoChangeHandler}
                  />
                </div>
              </div>
              <div className="form-actions-edit">
                <Link to="/profile">
                  {!loading &&<ButtonCreate type="submit" onClick={submitFormHandler}>
                    Salvar
                  </ButtonCreate>}
                </Link>
                  {loading &&<ButtonCreate disabled>
                    Aguarde...
                  </ButtonCreate>}
              </div>
            </form>
          </div>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default EditInformation;
