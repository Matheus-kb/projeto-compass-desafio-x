import { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import HeaderProfile from "../components/Header/HeaderProfile";
import InfoProfile from "../components/InfoProfile/InfoProfile";
import { UserInfos } from "../context/userInfos";
import "./ProfilePage.css";


import ProfilePhoto from "../assets/images/profile-img.png";
import Friends from "../components/InfoProfile/Friends/Friends";
import Communities from "../components/InfoProfile/Communities/Communities";
import { UserContext } from "../context/userContext";

type Props = {};
const ProfilePage = (props: Props): JSX.Element => {
  const { setUser } = useContext(UserContext);
  const { user } = UserInfos();
  const navigate = useNavigate();

  useEffect(() => {
    const isTokenValid = async () => {
      const token = await localStorage.getItem("token");
      return token !== null;
    };

    if (!isTokenValid()) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
    } else {
      navigate('/');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    return <Navigate to="/login" />;
  };

  return (
    <div>
      <HeaderProfile />
      <div className="content-profile">
        <div className="search-mobile">
          <input
            type="text"
            className="input-search-mobile"
            placeholder="Pesquisar no UOLkut"
          />
        </div>
        <div className="box-left-profile">
          <Card classNameCard="profile-photo">
            <img src={ProfilePhoto} alt="foto de perfil" />
            <p className="name-profile">{user?.enteredName}</p>
            <p className="status-profile">Casado,{user?.enteredCountry} </p>
          </Card>
          <Link to="/profile/edit-information">
            <Card classNameCard="edit-profile">
              <p>Editar meu perfil</p>
            </Card>
          </Link>
        </div>
        <div className="cards-profile-order">
          <div className="info-profile-card">
            <InfoProfile />
          </div>
          <div className="friends-card">
            <Friends />
          </div>
          <div className="communities-card">
            <Communities />
          </div>

          <div className="desktop">
            <div className="friends-card-desktop">
              <Friends />
            </div>
            <div className="communities-card-desktop">
              <Communities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
