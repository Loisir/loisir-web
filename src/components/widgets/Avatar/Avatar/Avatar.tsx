import React, { useEffect } from 'react';
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
        alt={alt}
        src={src}
      />
    </span>
  );
});

if (DEV_ENV) {
  Avatar.displayName = 'Avatar';
}

type Status = 'loading' | 'failed' | 'pending' | 'loaded';

export function useLoaded({src, srcSet}: IAvatarProps) {
  const {
    src,
    srcSet
  } = props;

  const [status, setStatus] = React.useState<Status>('pending');

  useEffect(() => {
    if (!src || !srcSet)
  });
};

export const AvatarImage = ({
  alt,
  src,
}: IAvatarImageProps) => {
  return (
    <img
      alt={alt}
      src={src}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        textAlign: 'center'
      }}
    />
  );
};

if (DEV_ENV) {
  Avatar.displayName = 'AvatarImage';
}