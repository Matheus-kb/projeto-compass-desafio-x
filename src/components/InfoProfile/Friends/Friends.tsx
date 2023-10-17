import photoFernando from '../../../assets/images/friend-fernando.png';
import photoAna from '../../../assets/images/friend-ana.png';
import photoCarlos from '../../../assets/images/friend-carlos.png';
import photoVitor from '../../../assets/images/friend-vitor.png';
import photoMatheus from '../../../assets/images/friend-matheus.png';
import photoRamos from '../../../assets/images/friend-ramos.png';
import photoEiji from '../../../assets/images/friend-eiji.png';
import photoJulia from '../../../assets/images/friend-julia.png';
import photoCarol from '../../../assets/images/friend-carol.png';

import Friend from './Friend';
import CardsFC from '../../Card/CardsFC';

const Friends = (): JSX.Element => {
  return (
    <CardsFC typeCard="Amigos(248)">
      <div className="content-box">
        <div className="content-row">
          <Friend srcImgFriend={photoFernando} nameFriend="Fernando" />
          <Friend srcImgFriend={photoAna} nameFriend="Ana" />
          <Friend srcImgFriend={photoCarlos} nameFriend="Carlos" />
        </div>
        <div className="content-row">
          <Friend srcImgFriend={photoVitor} nameFriend="Vitor" />
          <Friend srcImgFriend={photoMatheus} nameFriend="Matheus" />
          <Friend srcImgFriend={photoRamos} nameFriend="Ramos" />
        </div>
        <div className="content-row">
          <Friend srcImgFriend={photoEiji} nameFriend="Eiji" />
          <Friend srcImgFriend={photoJulia} nameFriend="Julia" />
          <Friend srcImgFriend={photoCarol} nameFriend="Carol" />
        </div>
      </div>
    </CardsFC>
  );
};
export default Friends;
