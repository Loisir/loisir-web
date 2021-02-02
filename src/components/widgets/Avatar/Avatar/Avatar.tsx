import React from 'react';
import { DEV_ENV } from '../../../../utils';
import {
  IAvatarProps,
  IAvatarImageProps
} from './Avatar.types';

export const Avatar = React.forwardRef(
  function Avatar(
    props: IAvatarProps,
    ref: React.Ref<HTMLSpanElement>) {
  const {
    alt,
    src
  } = props;

  return (
    <span ref={ref}
      {...props}
      className={props.className}
    >
      <AvatarImage
        src={src}
      />
    </span>
  );
});

if (DEV_ENV) {
  Avatar.displayName = 'Avatar';
}

export const AvatarImage = ({
  src,
}: IAvatarImageProps) => {
  return (
    <img
      src={src}
      alt=''
    />
  );
};

if (DEV_ENV) {
  Avatar.displayName = 'AvatarImage';
}