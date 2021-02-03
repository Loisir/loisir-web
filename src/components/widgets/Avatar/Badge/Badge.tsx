import React from 'react';
import { IBadgeProps } from './Badge.types';

export const Badge = React.forwardRef(
  function Badge(
    props: IBadgeProps,
    ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      {...props}
      
    />
  );
})