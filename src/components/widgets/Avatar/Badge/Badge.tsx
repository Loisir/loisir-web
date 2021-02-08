import React from 'react';
import { IBadgeProps } from './Badge.types';

export const Badge = React.forwardRef<HTMLDivElement, IBadgeProps>((props, ref) => {
  const {
    icon,
  } = props;

  return (
    <div ref={ref} {...props}>
      {icon}
    </div>
  );
});