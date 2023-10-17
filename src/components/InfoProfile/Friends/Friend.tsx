type Props = {
  srcImgFriend: string;
  nameFriend: string;
};

const Friend = ({ srcImgFriend, nameFriend }: Props): JSX.Element => {
  return (
    <div className="box-item">
      <img src={srcImgFriend} alt="friend" className="photo" />
      <p className="name">{nameFriend}</p>
    </div>
  );
};
export default Friend;
