import HeaderProfile from '../components/Header/HeaderProfile';
import EditInformation from '../components/EditInformations';

type Props = {};
const EditInformationPage = (props: Props) => {
  return (
    <div>
      <HeaderProfile />
      <EditInformation />
    </div>
  );
};
export default EditInformationPage;
