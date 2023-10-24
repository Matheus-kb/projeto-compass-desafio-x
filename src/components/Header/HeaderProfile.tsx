import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import './HeaderProfile.css';
import Expansive from '../Icons/Expansive';
import ProfileImg from '../../assets/images/profile-img.png';
import { UserContext } from '../../context/userContext';
import { UserInfos } from '../../context/userInfos';

const HeaderProfile = (props:any): JSX.Element => {
  const { setUser } = useContext(UserContext);
  const { user } = UserInfos();


  const handleLogout = () => {
    props.logout();
  }; 

  return (
    <header id="header-profile">
      <div className="content-header-profile">
        <div className="header-left">
          <h1 className="title-header-profile">UOLkut</h1>
          <nav className="navbar">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/profile">Perfil</NavLink>
            <NavLink to="/community" onClick={e => e.preventDefault()}>
              Comunidades
            </NavLink>
            <NavLink to="/games" onClick={e => e.preventDefault()}>
              Jogos
            </NavLink>
          </nav>
        </div>
        <div className="header-right">
          <div className="search">
            <input
              type="text"
              className="search input"
              placeholder="Pesquisar no UOLkut"
            />
          </div>
          <div className="profile-header">
            <img
              src={ProfileImg}
              alt="Foto de perfil"
              className="profile-img"
              onClick={handleLogout}
            />
            <p>{user?.enteredName}</p>
            <Expansive />
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderProfile;
