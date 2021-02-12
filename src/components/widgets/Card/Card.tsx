import React from 'react';
import { ICardProps } from "./Card.types";

export const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const {
    children
  } = props;
  
  return (
    <div {...props}>
      {children}
    </div>
  );
});