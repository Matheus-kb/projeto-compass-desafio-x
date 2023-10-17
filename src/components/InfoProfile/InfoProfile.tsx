// import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import './InfoProfile.css';

import Star from '../Icons/emojis/Star';
import Smiley from '../Icons/emojis/Smiley';
import ThumbsUp from '../Icons/emojis/ThumbsUp';
import Sexy from '../Icons/emojis/Sexy';

import Triangle from '../../assets/images/triangle.png';
import { Link } from 'react-router-dom';

const InfoProfile = (): JSX.Element => {
  return (
    <Card classNameCard="card-profile-info">
      <h3 className="title-info-profile">Boa tarde, Linus Torvalds</h3>
      <div className="quote">
        <div className="triangle">
          <img src={Triangle} alt="apontamento" />
        </div>
        <div className="phrase">
          <p>Programar sem café é igual poeta sem poesia.</p>
        </div>
      </div>
      <div className="status">
        <div className="fans">
          <p>Fãs</p>
          <div className="box-emojis">
            <Star />
            <p className="fans-number">85</p>
          </div>
        </div>
        <div className="trust">
          <p>Confiável</p>
          <div className="box-emojis">
            <Smiley />
            <Smiley />
          </div>
        </div>
        <div className="cool">
          <p>Legal</p>
          <div className="box-emojis">
            <ThumbsUp />
            <ThumbsUp />
            <ThumbsUp />
          </div>
        </div>
        <div className="sexy">
          <p>Sexy</p>
          <div className="box-emojis">
            <Sexy />
            <Sexy />
          </div>
        </div>
      </div>
      <div className="infos-profiles">
        <dl className="info-status">
          <dt>Relacionamento:</dt>
          <dd>Solteiro</dd>
        </dl>
        <dl className="info-status">
          <dt>Aniversário:</dt>
          <dd>21 de julho</dd>
        </dl>
        <dl className="info-status">
          <dt>Idade:</dt>
          <dd>22</dd>
        </dl>
        <dl className="info-status">
          <dt>Quem sou eu:</dt>
          <dd>Programador</dd>
        </dl>
        <dl className="info-status">
          <dt>Moro:</dt>
          <dd>São Paulo</dd>
        </dl>
        <dl className="info-status">
          <dt>País:</dt>
          <dd>Brasil</dd>
        </dl>
        <dl className="info-status">
          <dt>Cidade:</dt>
          <dd>São Paulo</dd>
        </dl>
      </div>
      <div className="box-tags">
        <div className="musics">
          <dl className="tags">
            <dt>Músicas:</dt>
            <dd>Trap</dd>
            <dd className="more">Rap</dd>
            <dd className="more">indie</dd>
          </dl>
          <Link to="#" className="see-more">
            Ver todos
          </Link>
        </div>
        <div className="films">
          <dl className="tags">
            <dt>Filmes</dt>
            <dd>A rede social</dd>
            <dd className="more">Meu amigo tororo</dd>
          </dl>
          <Link to="#" className="see-more">
            Ver todos
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default InfoProfile;
