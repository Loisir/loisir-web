import React from 'react';
import { IBadgeProps } from './Badge.types';

export const Badge = React.forwardRef<HTMLDivElement, IBadgeProps>((props, ref) => {
  const {
    icon,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      {...rest}
    >
      {icon}
    </div>
  );
});