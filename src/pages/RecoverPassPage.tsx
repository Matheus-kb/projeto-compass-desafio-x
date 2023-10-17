import Footer from '../components/Footer/Footer';
import HeaderRegister from '../components/Header/HeaderRegister';
import RecoverPass from '../components/RecoverPass';

type Props = {};
const RecoverPassPage = (props: Props) => {
  return (
    <div>
      <HeaderRegister />
      <RecoverPass />
      <Footer />
    </div>
  );
};
export default RecoverPassPage;
