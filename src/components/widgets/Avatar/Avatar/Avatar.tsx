import React from 'react';
import { DEV_ENV } from '../../../../utils';
import {
  IAvatarProps,
  IAvatarImageProps,
  AvatarSizeValue,
  avatarSizeValues
} from './Avatar.types';

type Status = 'loading' | 'failed' | 'pending' | 'loaded';

export function useLoaded(
  image?: string
) : Status {
  const [status, setStatus] = React.useState<Status>('pending');

  React.useEffect(() => {
    if (!image) {
      return undefined;
    }
    
    setStatus('loading');

    let active = true;
    const img = new Image();
    img.src = image;

    img.onload = () => {
      if (!active) {
        return;
      }
      setStatus('loaded');
    }

    img.onerror = () => {
      if (!active) {
        return;
      }
      setStatus('failed');
    }

    return () => {
      active = false;
    }

  }, [image]);

  return status;
};

const getNearestAvatarSize = (customSize: number) : AvatarSizeValue => {
  for (let i = avatarSizeValues.length - 1; i > 0; i--) {
    return avatarSizeValues[i];
  }

  return avatarSizeValues[0];
};

export const Avatar = React.forwardRef((
  props: IAvatarProps,
  ref: React.Ref<HTMLDivElement>) => {
  const {
    label,
    image
  } = props;

  let children = null;

  const status = useLoaded(image);
  const hasImg = image;
  const hasImgNotFailing = hasImg && status !== 'failed';

  if (hasImgNotFailing) {
    children = (
      <AvatarImage
        alt={label}
        src={image}
      />
    );
  } else if (hasImg && label) {
    children = label;
  } else {
    // fallback avatar goes here.
  }

  return (
    <div
      ref={ref}
      {...props}
      className={props.className}
    >
      {children}
    </div>
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
      alt=''
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