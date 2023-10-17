import Footer from '../components/Footer/Footer';
import HeaderRegister from '../components/Header/HeaderRegister';
import SecondForm from '../components/SecondForm';

type Props = {};
const SecondRegisterPage = (props: Props) => {
  return (
    <div>
      <HeaderRegister />
      <SecondForm />
      <Footer />
    </div>
  );
};
export default SecondRegisterPage;
