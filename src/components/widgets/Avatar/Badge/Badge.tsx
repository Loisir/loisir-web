import React from 'react';
import { IBadgeProps } from './Badge.types';

export const Badge = React.forwardRef((
  props: IBadgeProps,
  ref: React.Ref<HTMLDivElement>) => {
  const {
    size,
    ...rest
  } = props;

  // const 

  return (
    <div
      ref={ref}
      {...props}
    >
      {props.icon}
    </div>
  );
})