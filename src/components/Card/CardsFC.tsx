import { Link } from 'react-router-dom';

import Card from './Card';
import './CardsFC.css';

type Props = {
  children: React.ReactNode;
  typeCard: string;
  link?: string;
};

const CardsFC = ({ children, typeCard, link }: Props): JSX.Element => {
  return (
    <Card classNameCard="card-fc">
      <div className="header-card-profile">
        <p>{typeCard}</p>
        <Link to="#">Ver todos</Link>
      </div>
      {children}
    </Card>
  );
};

export default CardsFC;
