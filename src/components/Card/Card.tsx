import React from 'react';
import './Card.css';

type Props = {
  children: React.ReactNode;
  classNameCard?: string;
};

function Card({ children, classNameCard }: Props): JSX.Element {
  const classes = classNameCard ? `card ${classNameCard}` : 'card';
  return <div className={classes}>{children}</div>;
}

export default Card;
