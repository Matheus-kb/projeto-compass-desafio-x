import './Community.css';

type Props = {
  srcImgCommunity: string;
  nameCommunity: string;
};

const Community = ({ srcImgCommunity, nameCommunity }: Props): JSX.Element => {
  return (
    <div className="box-item">
      <img src={srcImgCommunity} alt="Community" className="photo community" />
      <p className="name">{nameCommunity}</p>
    </div>
  );
};
export default Community;
