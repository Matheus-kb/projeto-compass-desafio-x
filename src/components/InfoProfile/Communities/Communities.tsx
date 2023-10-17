import Carros from '../../../assets/images/cummunity-carros.png';
import Desenhos from '../../../assets/images/cummunity-desenhos.png';
import Crazy from '../../../assets/images/cummunity-crazy.png';
import Fofos from '../../../assets/images/cummunity-fofos.png';
import Animes from '../../../assets/images/cummunity-animes.png';
import Leitura from '../../../assets/images/cummunity-leitura.png';
import MeuOvo from '../../../assets/images/cummunity-meu-ovo.png';
import MyBooks from '../../../assets/images/cummunity-my-books.png';
import Cafe from '../../../assets/images/cummunity-cafe.png';

import Community from './Community';
import CardsFC from '../../Card/CardsFC';

const Communities = (): JSX.Element => {
  return (
    <CardsFC typeCard="Comunidade(42)">
      <div className="content-box">
        <div className="content-row">
          <Community srcImgCommunity={Carros} nameCommunity="Carros" />
          <Community srcImgCommunity={Desenhos} nameCommunity="Desenhos" />
          <Community srcImgCommunity={Crazy} nameCommunity="Crazy" />
        </div>
        <div className="content-row">
          <Community srcImgCommunity={Fofos} nameCommunity="Fofos" />
          <Community srcImgCommunity={Animes} nameCommunity="Animes" />
          <Community srcImgCommunity={Leitura} nameCommunity="Leitura" />
        </div>
        <div className="content-row">
          <Community srcImgCommunity={MeuOvo} nameCommunity="Meu ovo" />
          <Community srcImgCommunity={MyBooks} nameCommunity="My books" />
          <Community srcImgCommunity={Cafe} nameCommunity="Cafeeee" />
        </div>
      </div>
    </CardsFC>
  );
};

export default Communities;
