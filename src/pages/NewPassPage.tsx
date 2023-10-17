import Footer from '../components/Footer/Footer';
import HeaderRegister from '../components/Header/HeaderRegister';
import NewPass from '../components/NewPass';

type Props = {};
const NewPassPage = (props: Props) => {
  return (
    <div>
      <HeaderRegister />
      <NewPass />
      <Footer />
    </div>
  );
};
export default NewPassPage;
