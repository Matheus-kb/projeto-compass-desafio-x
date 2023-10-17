import Footer from '../components/Footer/Footer';
import HeaderRegister from '../components/Header/HeaderRegister';
import Register from '../components/Register';

type Props = {};
const RegisterPage = (props: Props): JSX.Element => {
  return (
    <div>
      <HeaderRegister />
      <Register />
      <Footer />
    </div>
  );
};
export default RegisterPage;
