import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import HeaderProfile from '../components/Header/HeaderProfile';
import InfoProfile from '../components/InfoProfile/InfoProfile';

import ProfilePhoto from '../assets/images/profile-img.png';

import './ProfilePage.css';
import Friends from '../components/InfoProfile/Friends/Friends';
import Communities from '../components/InfoProfile/Communities/Communities';

type Props = {};
const ProfilePage = (props: Props): JSX.Element => {
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
            <p className="name-profile">Linus Torvalds</p>
            <p className="status-profile">Casado, Estados Unidos</p>
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
